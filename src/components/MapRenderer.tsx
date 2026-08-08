import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { regions, RegionData, connectionFlows } from "../data/mapData";

interface MapRendererProps {
  activeLayer?: "jobs" | "universities" | "hospitals" | "investment" | "industrialZones" | "none";
  selectedRegionId?: string | null;
  onRegionClick?: (region: RegionData) => void;
  showMigrationFlows?: boolean;
  simulationValue?: number; // 0 to 100 (0 = centralized, 100 = decentralized)
  showMultipleHubs?: boolean;
  isDecentralized?: boolean;
  showDecentralizationNetwork?: boolean;
  hideLabels?: boolean;
}

// Polycentric mesh corridors for Decentralized Bangladesh
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

  // Calculate smooth continuous interpolation factor (0 = 100% centralized, 1 = 100% decentralized)
  const simVal = simulationValue !== undefined ? simulationValue : (showMigrationFlows ? 0 : (isTopicPage ? 100 : 0));
  const centralizedFactor = Math.max(0, Math.min(1, (65 - simVal) / 50));
  const decentralizedFactor = Math.max(0, Math.min(1, (simVal - 20) / 60));

  const isStatusQuo = centralizedFactor > 0.05;
  const isDecentralizedActive = decentralizedFactor > 0.05;

  // Helper to calculate opportunities based on layer
  const getIntensityValue = (region: RegionData) => {
    if (activeLayer === "none") return 0;
    return region.metrics[activeLayer] || 0;
  };

  // Helper to generate smooth coordinates of curved arcs
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
      {/* SVG Container */}
      <svg
        viewBox="70 40 370 520"
        className="w-full h-full max-h-[640px] drop-shadow-2xl"
        id="bangladesh-svg-map"
      >
        <defs>
          {/* Smooth Red Core Glow */}
          <radialGradient id="dhakaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#DC2626" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
          </radialGradient>

          {/* Smooth Green Core Glow */}
          <radialGradient id="greenHubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#16C79A" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#16C79A" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#16C79A" stopOpacity="0" />
          </radialGradient>

          {/* Flow Linear Gradient */}
          <linearGradient id="flowGradCentral" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#16C79A" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#16C79A" stopOpacity="0.9" />
          </linearGradient>

          {/* Filter for smooth buttery particle glow */}
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- SECTION 1: MAP REGIONS (DIVISION POLYGONS) --- */}
        <g id="divisions-group">
          {regions.map((region) => {
            const isSelected = selectedRegionId === region.id;
            const isHovered = hoveredRegion?.id === region.id;
            const intensity = getIntensityValue(region);

            let fill = "#0B192C";
            let stroke = "#1E3E62";
            let strokeWidth = 1.2;

            if (region.id === "dhaka" && isStatusQuo) {
              // Smooth blended red fill for Dhaka based on centralized factor
              fill = `rgba(220, 38, 38, ${0.12 + centralizedFactor * 0.35})`;
              stroke = `rgba(239, 68, 68, ${0.4 + centralizedFactor * 0.6})`;
              strokeWidth = 1.6 + centralizedFactor * 1.0;
            } else if (isDecentralizedActive || isTopicPage) {
              fill = `rgba(22, 199, 154, ${0.08 + decentralizedFactor * 0.16})`;
              stroke = "#16C79A";
              strokeWidth = 1.5;
            } else if (isSelected) {
              fill = "rgba(22, 199, 154, 0.28)";
              stroke = "#16C79A";
              strokeWidth = 2.4;
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
                style={{
                  transition: "fill 0.5s cubic-bezier(0.16, 1, 0.3, 1), stroke 0.5s cubic-bezier(0.16, 1, 0.3, 1), stroke-width 0.5s ease"
                }}
                className="cursor-pointer"
                onClick={() => onRegionClick && onRegionClick(region)}
                onMouseEnter={() => setHoveredRegion(region)}
                onMouseLeave={() => setHoveredRegion(null)}
              />
            );
          })}
        </g>

        {/* --- SECTION 2: STATUS-QUO CENTRALIZED MIGRATION FLOW (SMOOTH FLUID BEADS & RADAR WAVES) --- */}
        {isStatusQuo && (
          <g
            id="status-quo-centralized-flows"
            className="pointer-events-none"
            style={{
              opacity: centralizedFactor,
              transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            {/* 1. Curved trajectory corridors from all 8 outer divisions into Dhaka */}
            {connectionFlows.map((flow, idx) => {
              const fromRegion = regions.find((r) => r.id === flow.from);
              const toRegion = regions.find((r) => r.id === flow.to);
              if (!fromRegion || !toRegion) return null;

              const pathString = getArcPath(fromRegion.x, fromRegion.y, toRegion.x, toRegion.y);
              const duration = 2.4 + (idx % 3) * 0.5;

              return (
                <g key={`flow-sq-${flow.from}-${flow.to}-${idx}`}>
                  {/* Subtle glowing underlay for smooth arc appearance */}
                  <path
                    d={pathString}
                    fill="none"
                    stroke="#16C79A"
                    strokeWidth={1.4}
                    strokeDasharray="4 4"
                    opacity={0.6}
                  />

                  {/* Static green anchor dot at origin division */}
                  <circle cx={fromRegion.x} cy={fromRegion.y} r={4.5} fill="#16C79A" opacity={0.9} />
                  <circle cx={fromRegion.x} cy={fromRegion.y} r={2} fill="#FFFFFF" />

                  {/* Smooth animated stream: Bead 1 */}
                  <circle r={3.2} fill="#16C79A" filter="url(#softGlow)">
                    <animateMotion
                      path={pathString}
                      dur={`${duration}s`}
                      repeatCount="indefinite"
                      begin={`${idx * 0.22}s`}
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1"
                    />
                  </circle>
                  <circle r={1.5} fill="#FFFFFF">
                    <animateMotion
                      path={pathString}
                      dur={`${duration}s`}
                      repeatCount="indefinite"
                      begin={`${idx * 0.22}s`}
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1"
                    />
                  </circle>

                  {/* Smooth animated stream: Staggered Bead 2 for continuous fluid flow */}
                  <circle r={2.4} fill="#06B6D4" opacity={0.85}>
                    <animateMotion
                      path={pathString}
                      dur={`${duration}s`}
                      repeatCount="indefinite"
                      begin={`${idx * 0.22 + duration / 2}s`}
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1"
                    />
                  </circle>
                </g>
              );
            })}

            {/* 2. Concentric Pulsing Red Radar Waves radiating smoothly from Dhaka */}
            {[0, 0.8, 1.6, 2.4].map((delay, waveIdx) => (
              <circle
                key={`dhaka-radio-wave-${waveIdx}`}
                cx={260}
                cy={285}
                r={6}
                fill="none"
                stroke="#EF4444"
                strokeWidth={1.8}
              >
                <animate
                  attributeName="r"
                  values="6;28;54"
                  dur="3.2s"
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.16 1 0.3 1; 0.25 0.1 0.25 1"
                />
                <animate
                  attributeName="opacity"
                  values="0.95;0.5;0"
                  dur="3.2s"
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.16 1 0.3 1; 0.25 0.1 0.25 1"
                />
                <animate
                  attributeName="stroke-width"
                  values="2.4;1.2;0.3"
                  dur="3.2s"
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.16 1 0.3 1; 0.25 0.1 0.25 1"
                />
              </circle>
            ))}

            {/* 3. Glowing Red Central Bullseye Core at Dhaka */}
            <circle cx={260} cy={285} r={24} fill="url(#dhakaGlow)">
              <animate
                attributeName="r"
                values="18;28;18"
                dur="3.0s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              />
              <animate
                attributeName="opacity"
                values="0.65;0.95;0.65"
                dur="3.0s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              />
            </circle>
            <circle cx={260} cy={285} r={6.5} fill="#DC2626" />
            <circle cx={260} cy={285} r={2.5} fill="#FFFFFF" />
          </g>
        )}

        {/* --- SECTION 3: DECENTRALIZED MULTI-HUB NETWORK MESH (> 50% OR TOPIC PAGE) --- */}
        {isDecentralizedActive && (
          <g
            id="decentralized-network-mesh"
            className="pointer-events-none"
            style={{
              opacity: decentralizedFactor,
              transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            {decentralizedMesh.map((mesh, idx) => {
              const fromRegion = regions.find((r) => r.id === mesh.from);
              const toRegion = regions.find((r) => r.id === mesh.to);
              if (!fromRegion || !toRegion) return null;

              const pathStr = getArcPath(fromRegion.x, fromRegion.y, toRegion.x, toRegion.y, mesh.arc);
              const dur = 2.4 + (idx % 4) * 0.6;

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
                  <circle r={3.5} fill="#16C79A" filter="url(#softGlow)">
                    <animateMotion
                      path={pathStr}
                      dur={`${dur}s`}
                      repeatCount="indefinite"
                      begin={`${idx * 0.2}s`}
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1"
                    />
                  </circle>
                  <circle r={2} fill="#06B6D4">
                    <animateMotion
                      path={pathStr}
                      dur={`${dur}s`}
                      repeatCount="indefinite"
                      begin={`${idx * 0.2 + dur / 2}s`}
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1"
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
                    values="0.4;0.85;0.4"
                    dur={`${2.6 + (i % 3) * 0.4}s`}
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
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
                    dur={`${2.6 + (i % 3) * 0.4}s`}
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.9;0.1;0.9"
                    dur={`${2.6 + (i % 3) * 0.4}s`}
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                  />
                </circle>
                <circle cx={region.x} cy={region.y} r={5} fill="#16C79A" />
                <circle cx={region.x} cy={region.y} r={2} fill="#FFFFFF" />
              </g>
            ))}
          </g>
        )}

        {/* --- SECTION 4: DIVISION CITY LABELS --- */}
        {!hideLabels && (
          <g id="labels-group" className="pointer-events-none">
            {regions.map((region) => {
              return (
                <g key={`lbl-${region.id}`}>
                  {/* Dark stroke background for high contrast readability */}
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
                  {/* Foreground crisp emerald label */}
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
