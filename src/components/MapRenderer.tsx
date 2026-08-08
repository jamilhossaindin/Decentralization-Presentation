import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { regions, RegionData, connectionFlows } from "../data/mapData";

interface MapRendererProps {
  activeLayer?: "jobs" | "universities" | "hospitals" | "investment" | "industrialZones" | "none";
  selectedRegionId?: string | null;
  onRegionClick?: (region: RegionData) => void;
  showMigrationFlows?: boolean;
  simulationValue?: number; // 0 to 100 (0 = highly centralized, 100 = decentralized)
  showMultipleHubs?: boolean;
  isDecentralized?: boolean;
  showDecentralizationNetwork?: boolean;
  hideLabels?: boolean;
}

// Polycentric mesh corridors for Decentralized Bangladesh (Slide 02)
const decentralizedMesh = [
  { from: "dhaka", to: "chattogram", arc: 20 },
  { from: "dhaka", to: "sylhet", arc: -20 },
  { from: "dhaka", to: "rajshahi", arc: 25 },
  { from: "dhaka", to: "khulna", arc: -25 },
  { from: "dhaka", to: "barishal", arc: 15 },
  { from: "dhaka", to: "rangpur", arc: -25 },
  { from: "dhaka", to: "mymensingh", arc: 15 },
  // Inter-regional ring corridors
  { from: "rangpur", to: "rajshahi", arc: 20 },
  { from: "rajshahi", to: "khulna", arc: 20 },
  { from: "khulna", to: "barishal", arc: -15 },
  { from: "barishal", to: "chattogram", arc: 20 },
  { from: "chattogram", to: "sylhet", arc: 25 },
  { from: "sylhet", to: "mymensingh", arc: -20 },
  { from: "mymensingh", to: "rangpur", arc: 20 }
];

export default function MapRenderer({
  activeLayer = "none",
  selectedRegionId = null,
  onRegionClick,
  showMigrationFlows = false,
  simulationValue = undefined,
  showMultipleHubs = false,
  isDecentralized = false,
  showDecentralizationNetwork = false,
  hideLabels = false,
}: MapRendererProps) {
  const [hoveredRegion, setHoveredRegion] = useState<RegionData | null>(null);

  // Is this specific to Slide 02 (Presentation Topic Page)
  const isTopicPage = isDecentralized || showDecentralizationNetwork;

  // For simulation slide (Slide 16)
  const isSimulationDecentralized = simulationValue !== undefined && simulationValue > 30;

  // Helper to calculate opportunities based on layer
  const getIntensityValue = (region: RegionData) => {
    if (activeLayer === "none") return 0;
    return region.metrics[activeLayer] || 0;
  };

  // Helper to generate coordinates of curved arcs
  const getArcPath = (fromX: number, fromY: number, toX: number, toY: number, customOffset: number = 25) => {
    const midX = (fromX + toX) / 2;
    const midY = (fromY + toY) / 2;
    const dx = toX - fromX;
    const dy = toY - fromY;
    const angle = Math.atan2(dy, dx);
    const cx = midX + Math.sin(angle) * customOffset;
    const cy = midY - Math.cos(angle) * customOffset;
    return `M ${fromX} ${fromY} Q ${cx} ${cy} ${toX} ${toY}`;
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* SVG Container: Large tight viewbox matching Presentation Topic page */}
      <svg
        viewBox="70 40 370 520"
        className="w-full h-full max-h-[640px] drop-shadow-2xl"
        id="bangladesh-svg-map"
      >
        <defs>
          <radialGradient id="dhakaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={isSimulationDecentralized || isTopicPage ? "#16C79A" : "#ef4444"} stopOpacity="0.5" />
            <stop offset="100%" stopColor={isSimulationDecentralized || isTopicPage ? "#16C79A" : "#ef4444"} stopOpacity="0" />
          </radialGradient>

          <radialGradient id="greenHubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#16C79A" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#16C79A" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="flowGradCentral" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#16C79A" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#16C79A" stopOpacity="0.75" />
          </linearGradient>
        </defs>

        {/* --- SECTION 1: MAP REGIONS (DIVISION PATHS) --- */}
        <g id="divisions-group">
          {regions.map((region) => {
            const isSelected = selectedRegionId === region.id;
            const isHovered = hoveredRegion?.id === region.id;
            const intensity = getIntensityValue(region);

            let fill = "#0B192C";
            let stroke = "#1E3E62";
            let strokeWidth = 1.2;

            if (showMigrationFlows && region.id === "dhaka") {
              // Highlight Dhaka area with prominent red tint for Social Context slide
              fill = "rgba(220, 38, 38, 0.32)";
              stroke = "#DC2626";
              strokeWidth = 2.2;
            } else if (isTopicPage) {
              fill = "rgba(22, 199, 154, 0.12)";
              stroke = "#16C79A";
              strokeWidth = 1.6;
            } else if (isSelected) {
              fill = region.id === "dhaka" && !isSimulationDecentralized ? "rgba(220, 38, 38, 0.25)" : "rgba(22, 199, 154, 0.28)";
              stroke = region.id === "dhaka" && !isSimulationDecentralized ? "#DC2626" : "#16C79A";
              strokeWidth = 2.5;
            } else if (isHovered) {
              fill = "rgba(22, 199, 154, 0.22)";
              stroke = "#16C79A";
              strokeWidth = 2;
            } else if (activeLayer !== "none") {
              const ratio = intensity / 100;
              if (region.id === "dhaka") {
                fill = `rgba(239, 68, 68, ${0.15 + ratio * 0.45})`;
                stroke = `rgba(239, 68, 68, ${0.4 + ratio * 0.6})`;
              } else {
                fill = `rgba(22, 199, 154, ${0.08 + ratio * 0.35})`;
                stroke = `rgba(22, 199, 154, ${0.2 + ratio * 0.5})`;
              }
            }

            return (
              <path
                key={region.id}
                id={`division-path-${region.id}`}
                d={region.path}
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
                className="transition-all duration-300 ease-out cursor-pointer"
                onClick={() => onRegionClick && onRegionClick(region)}
                onMouseEnter={() => setHoveredRegion(region)}
                onMouseLeave={() => setHoveredRegion(null)}
              />
            );
          })}
        </g>

        {/* --- SECTION 2: TOPIC PAGE DECENTRALIZED MESH ANIMATION (SLIDE 02 ONLY) --- */}
        {isTopicPage && (
          <g id="decentralized-network-mesh" className="pointer-events-none">
            {decentralizedMesh.map((mesh, idx) => {
              const fromRegion = regions.find((r) => r.id === mesh.from);
              const toRegion = regions.find((r) => r.id === mesh.to);
              if (!fromRegion || !toRegion) return null;

              const pathStr = getArcPath(fromRegion.x, fromRegion.y, toRegion.x, toRegion.y, mesh.arc);

              return (
                <g key={`mesh-${mesh.from}-${mesh.to}-${idx}`}>
                  <path
                    d={pathStr}
                    fill="none"
                    stroke="#16C79A"
                    strokeWidth={1.8}
                    strokeDasharray={idx % 3 === 0 ? "none" : "6 4"}
                    opacity={0.7}
                  />
                  <circle r={3.5} fill="#16C79A">
                    <animateMotion
                      path={pathStr}
                      dur={`${2.2 + (idx % 4) * 0.8}s`}
                      repeatCount="indefinite"
                      begin={`${idx * 0.25}s`}
                    />
                  </circle>
                  <circle r={2} fill="#06b6d4">
                    <animateMotion
                      path={pathStr}
                      dur={`${2.8 + (idx % 3) * 0.9}s`}
                      repeatCount="indefinite"
                      begin={`${0.6 + idx * 0.3}s`}
                    />
                  </circle>
                </g>
              );
            })}

            {regions.map((region, i) => (
              <g key={`decentral-hub-rings-${region.id}`}>
                <circle
                  cx={region.x}
                  cy={region.y}
                  r={22}
                  fill="url(#greenHubGlow)"
                >
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur={`${2.5 + (i % 3) * 0.5}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx={region.x}
                  cy={region.y}
                  r={14}
                  fill="none"
                  stroke="#16C79A"
                  strokeWidth={1.2}
                  opacity={0.8}
                >
                  <animate
                    attributeName="r"
                    values="8;24;8"
                    dur={`${2.5 + (i % 3) * 0.5}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.9;0.1;0.9"
                    dur={`${2.5 + (i % 3) * 0.5}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx={region.x} cy={region.y} r={5} fill="#16C79A" />
                <circle cx={region.x} cy={region.y} r={2} fill="#FFFFFF" />
              </g>
            ))}
          </g>
        )}

        {/* --- SECTION 3: OPPORTUNITY HEAT BUBBLES (SLIDE 07 SPATIAL AUDIT ONLY) --- */}
        {activeLayer !== "none" && !isTopicPage && !showMigrationFlows && (
          <g id="heatmap-layer-group" className="pointer-events-none">
            {regions.map((region) => {
              const intensity = getIntensityValue(region);
              if (intensity === 0) return null;
              const radius = 5 + (intensity / 100) * 32;
              const isDhaka = region.id === "dhaka";

              return (
                <g key={`headbubble-${region.id}`}>
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={radius * 1.5}
                    fill={isDhaka ? "rgba(239, 68, 68, 0.15)" : "rgba(22, 199, 154, 0.12)"}
                    className="animate-pulse-slow"
                  />
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={radius}
                    fill={isDhaka ? "url(#dhakaGlow)" : "url(#greenHubGlow)"}
                  />
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={4}
                    fill={isDhaka ? "#ef4444" : "#16C79A"}
                    className="shadow-md"
                  />
                </g>
              );
            })}
          </g>
        )}

        {/* --- SECTION 4: MIGRATION FLOWS (SLIDE 03 SOCIAL CONTEXT ANIMATION) --- */}
        {showMigrationFlows && !isTopicPage && (
          <g id="migration-flows-group" className="pointer-events-none">
            {connectionFlows.map((flow, idx) => {
              const fromRegion = regions.find((r) => r.id === flow.from);
              const toRegion = regions.find((r) => r.id === flow.to);
              if (!fromRegion || !toRegion) return null;

              const pathString = getArcPath(fromRegion.x, fromRegion.y, toRegion.x, toRegion.y);

              return (
                <g key={`flow-${flow.from}-${flow.to}`}>
                  <path
                    d={pathString}
                    fill="none"
                    stroke="url(#flowGradCentral)"
                    strokeWidth={1.4}
                    strokeDasharray={idx % 2 === 0 ? "none" : "4 4"}
                    opacity={0.65}
                  />
                  <circle r={2.8} fill="#16C79A">
                    <animateMotion
                      path={pathString}
                      dur={`${2.8 + (idx % 3) * 1.2}s`}
                      repeatCount="indefinite"
                      begin={`${idx * 0.28}s`}
                    />
                  </circle>
                </g>
              );
            })}

            {/* Concentric Pulsing Radio Waves radiating from Dhaka */}
            {[0, 0.7, 1.4, 2.1].map((delay, waveIdx) => (
              <circle
                key={`dhaka-radio-wave-${waveIdx}`}
                cx={260}
                cy={285}
                r={6}
                fill="none"
                stroke="#ef4444"
                strokeWidth={1.8}
              >
                <animate
                  attributeName="r"
                  values="6;26;48"
                  dur="2.8s"
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.95;0.5;0"
                  dur="2.8s"
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-width"
                  values="2;1.2;0.4"
                  dur="2.8s"
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

            {/* Glowing Red Central Node at Dhaka (Using strictly SVG-native animations anchored to cx,cy) */}
            <circle cx={260} cy={285} r={22} fill="url(#dhakaGlow)">
              <animate
                attributeName="r"
                values="16;26;16"
                dur="2.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6;0.9;0.6"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={260} cy={285} r={5.5} fill="#DC2626" />
            <circle cx={260} cy={285} r={2} fill="#FFFFFF" />
          </g>
        )}

        {/* --- SECTION 5: MULTI-HUB VISION (SLIDE 16 SIMULATOR) --- */}
        {showMultipleHubs && !isTopicPage && (
          <g id="multihub-group" className="pointer-events-none">
            {regions.map((region) => {
              if (region.id === "dhaka") return null;
              return (
                <g key={`hub-${region.id}`}>
                  <circle cx={region.x} cy={region.y} r={18} fill="url(#greenHubGlow)" />
                  <circle cx={region.x} cy={region.y} r={6} fill="#16C79A" />
                </g>
              );
            })}
          </g>
        )}

        {/* --- SECTION 6: DIVISION CITY LABELS (CLEAN TEXT WITHOUT BOXES) --- */}
        {!isTopicPage && !hideLabels && (
          <g id="labels-group" className="pointer-events-none">
            {regions.map((region) => {
              const isDhaka = region.id === "dhaka";

              return (
                <g key={`lbl-${region.id}`}>
                  {/* Subtle dark text stroke for readability against glowing lines */}
                  <text
                    x={region.x}
                    y={region.y - 12}
                    textAnchor="middle"
                    stroke="#000000"
                    strokeWidth={3.5}
                    strokeLinejoin="round"
                    className="text-xs font-bold font-mono tracking-wider"
                  >
                    {region.name}
                  </text>
                  {/* Foreground crisp label with identical emerald color across all cities */}
                  <text
                    x={region.x}
                    y={region.y - 12}
                    textAnchor="middle"
                    className="text-xs font-extrabold font-mono tracking-wider fill-[#16C79A]"
                  >
                    {region.name}
                  </text>
                </g>
              );
            })}
          </g>
        )}
      </svg>
    </div>
  );
}
