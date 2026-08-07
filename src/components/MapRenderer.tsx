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
}

export default function MapRenderer({
  activeLayer = "none",
  selectedRegionId = null,
  onRegionClick,
  showMigrationFlows = false,
  simulationValue = undefined,
  showMultipleHubs = false,
}: MapRendererProps) {
  const [hoveredRegion, setHoveredRegion] = useState<RegionData | null>(null);

  // Helper to calculate opportunities based on layer
  const getIntensityValue = (region: RegionData) => {
    if (activeLayer === "none") return 0;
    return region.metrics[activeLayer] || 0;
  };

  // Helper to generate coordinates of arcs towards Dhaka (X: 260, Y: 285)
  const getArcPath = (fromX: number, fromY: number, toX: number, toY: number) => {
    // Calc midpoint
    const midX = (fromX + toX) / 2;
    const midY = (fromY + toY) / 2;
    // Add offset for curve bending westward or eastward based on starting position
    const dx = toX - fromX;
    const dy = toY - fromY;
    const angle = Math.atan2(dy, dx);
    const offset = 25; // curvature strength
    const cx = midX + Math.sin(angle) * offset;
    const cy = midY - Math.cos(angle) * offset;
    return `M ${fromX} ${fromY} Q ${cx} ${cy} ${toX} ${toY}`;
  };

  return (
    <div className="relative w-full h-[360px] md:h-[580px] flex items-center justify-center p-2 rounded-2xl bg-white border border-black/15 shadow-sm overflow-hidden group">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      {/* Technical Compass Indicator */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-gray-500 tracking-widest hidden md:block font-bold">
        GRID REF: 23.811° N / 90.412° E
      </div>

      <div className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[10px] text-[#1746A2] font-bold">
        <span className="w-1.5 h-1.5 bg-[#1746A2] rounded-full animate-ping" />
        SPATIAL MAPPING ENGINE
      </div>

      {/* SVG Container */}
      <svg
        viewBox="0 0 500 600"
        className="w-full h-full max-h-[540px] select-none"
        id="bangladesh-svg-map"
      >
        <defs>
          {/* Radial mask for neon glow */}
          <radialGradient id="dhakaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="greenHubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#006A4E" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#006A4E" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#006A4E" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.8" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- SECTION 1: MAP REGIONS (DIVISION PATHS) --- */}
        <g id="divisions-group">
          {regions.map((region) => {
            const isSelected = selectedRegionId === region.id;
            const isHovered = hoveredRegion?.id === region.id;
            const intensity = getIntensityValue(region);

            // Dynamically style based on active parameters
            let fill = "#EBE7DF";
            let stroke = "rgba(0, 0, 0, 0.25)";
            let strokeWidth = 1.2;

            if (isSelected) {
              fill = region.id === "dhaka" ? "rgba(220, 38, 38, 0.15)" : "rgba(23, 70, 162, 0.15)";
              stroke = region.id === "dhaka" ? "#DC2626" : "#1746A2";
              strokeWidth = 2.5;
            } else if (isHovered) {
              fill = "rgba(23, 70, 162, 0.08)";
              stroke = "#1746A2";
              strokeWidth = 1.8;
            } else if (activeLayer !== "none") {
              // Heatmap style coloring
              // Dhaka will have high metrics, other districts will have low metrics
              const ratio = intensity / 100;
              if (region.id === "dhaka") {
                fill = `rgba(239, 68, 68, ${0.1 + ratio * 0.45})`;
                stroke = `rgba(239, 68, 68, ${0.3 + ratio * 0.7})`;
              } else {
                fill = `rgba(0, 106, 78, ${0.05 + ratio * 0.35})`;
                stroke = `rgba(52, 211, 153, ${0.15 + ratio * 0.4})`;
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

        {/* --- SECTION 2: OPPORTUNITY HEAT BUBBLES --- */}
        {activeLayer !== "none" && (
          <g id="heatmap-layer-group" className="pointer-events-none">
            {regions.map((region) => {
              const intensity = getIntensityValue(region);
              if (intensity === 0) return null;
              const radius = 5 + (intensity / 100) * 32;
              const isDhaka = region.id === "dhaka";

              return (
                <g key={`headbubble-${region.id}`}>
                  {/* Outer pulsating aura */}
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={radius * 1.5}
                    fill={isDhaka ? "rgba(239, 68, 68, 0.1)" : "rgba(0, 106, 78, 0.08)"}
                    className="animate-pulse-slow"
                  />
                  {/* Core glow bubble */}
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={radius}
                    fill={isDhaka ? "url(#dhakaGlow)" : "url(#greenHubGlow)"}
                  />
                  {/* Small sharp pinpoint */}
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={4}
                    fill={isDhaka ? "#ef4444" : "#00a273"}
                    className="shadow-md"
                  />
                </g>
              );
            })}
          </g>
        )}

        {/* --- SECTION 3: MIGRATION FLOWS (GLOWING BEZIER LINES & PARTICLES) --- */}
        {showMigrationFlows && (
          <g id="migration-flows-group" className="pointer-events-none">
            {connectionFlows.map((flow, idx) => {
              const fromRegion = regions.find((r) => r.id === flow.from);
              const toRegion = regions.find((r) => r.id === flow.to);
              if (!fromRegion || !toRegion) return null;

              const pathString = getArcPath(fromRegion.x, fromRegion.y, toRegion.x, toRegion.y);

              return (
                <g key={`flow-${flow.from}-${flow.to}`}>
                  {/* Background connection curve */}
                  <path
                    d={pathString}
                    fill="none"
                    stroke="url(#flowGrad)"
                    strokeWidth={1.2}
                    strokeDasharray={idx % 2 === 0 ? "none" : "4 4"}
                    opacity={0.4}
                  />
                  {/* Superimposed highlight */}
                  <path
                    d={pathString}
                    fill="none"
                    stroke="#00a273"
                    strokeWidth={0.5}
                    opacity={0.25}
                  />
                  {/* Flowing particle circle along path */}
                  <circle r={3} fill="#ef4444" filter="url(#glow)">
                    <animateMotion
                      path={pathString}
                      dur={`${3 + (idx % 3) * 1.5}s`}
                      repeatCount="indefinite"
                      begin={`${idx * 0.3}s`}
                    />
                  </circle>
                  <circle r={1.5} fill="#ffffff">
                    <animateMotion
                      path={pathString}
                      dur={`${3 + (idx % 3) * 1.5}s`}
                      repeatCount="indefinite"
                      begin={`${idx * 0.3}s`}
                    />
                  </circle>
                </g>
              );
            })}

            {/* Hyper-glowing target crown at Dhaka */}
            <circle
              cx={260}
              cy={285}
              r={8}
              fill="#ef4444"
              filter="url(#glow)"
            />
            <circle cx={260} cy={285} r={2.5} fill="#ffffff" />
          </g>
        )}

        {/* --- SECTION 4: FUTURE SIMULATOR MUTATING FLOWS --- */}
        {simulationValue !== undefined && (
          <g id="simulation-physics-group" className="pointer-events-none">
            {/* 0 = Centralized, 100 = Decentralized */}
            {/* Draw centralization lines or decentralized waves based on slider */}
            {regions.map((region) => {
              const isDhaka = region.id === "dhaka";

              // Dhaka shrink factor: starts at 80% strength down to 20%
              // Other hubs increase: start at 5% to 50%
              const dhakaWeight = 1 - (simulationValue / 100) * 0.75;
              const remoteWeight = (simulationValue / 100);

              if (isDhaka) {
                const dhakaRadius = 20 + dhakaWeight * 90;
                return (
                  <g key="sim-dhaka">
                    <circle
                      cx={260}
                      cy={285}
                      r={dhakaRadius}
                      fill="url(#dhakaGlow)"
                      opacity={0.3 + dhakaWeight * 0.7}
                    />
                    <circle
                      cx={260}
                      cy={285}
                      r={6 + dhakaWeight * 14}
                      fill="#ef4444"
                      filter="url(#glow)"
                      opacity={0.5 + dhakaWeight * 0.5}
                    />
                    <circle cx={260} cy={285} r={2} fill="#ffffff" />
                  </g>
                );
              } else {
                // Determine regional size based on slider
                const isTargetHub = ["sylhet", "chattogram", "khulna", "rajshahi", "rangpur", "barishal", "cumilla"].includes(region.id);
                if (!isTargetHub) return null;

                const hubRadius = 2 + remoteWeight * 40 * (region.metrics.jobs / 60);
                const opacity = remoteWeight * 0.85;

                return (
                  <g key={`sim-${region.id}`}>
                    {/* Glowing outer wave if decentralized option is higher */}
                    {simulationValue > 30 && (
                      <circle
                        cx={region.x}
                        cy={region.y}
                        r={hubRadius * 1.6}
                        fill="rgba(0, 106, 78, 0.12)"
                        className="animate-pulse-slow"
                        opacity={opacity}
                      />
                    )}
                    <circle
                      cx={region.x}
                      cy={region.y}
                      r={hubRadius}
                      fill="url(#greenHubGlow)"
                      opacity={opacity}
                    />
                    <circle
                      cx={region.x}
                      cy={region.y}
                      r={2 + remoteWeight * 5}
                      fill="#00a273"
                      filter="url(#glow)"
                      opacity={opacity}
                    />
                    {simulationValue > 50 && (
                      <circle
                        cx={region.x}
                        cy={region.y}
                        r={1}
                        fill="#ffffff"
                        opacity={opacity}
                      />
                    )}

                    {/* Faint connective nodes of regional prosperity mapping */}
                    {simulationValue > 40 && (
                      <circle
                        cx={region.x}
                        cy={region.y}
                        r={hubRadius * 2.2}
                        fill="none"
                        stroke="#00a273"
                        strokeWidth={0.5}
                        strokeDasharray="2 3"
                        opacity={opacity * 0.4}
                      />
                    )}
                  </g>
                );
              }
            })}

            {/* Interactive flow paths that start fading out as slider goes toward decentralized */}
            {simulationValue < 80 && (
              <g opacity={1 - (simulationValue / 100)}>
                {connectionFlows.map((flow, idx) => {
                  const fromRegion = regions.find((r) => r.id === flow.from);
                  if (!fromRegion) return null;
                  const pathString = getArcPath(fromRegion.x, fromRegion.y, 260, 285);
                  return (
                    <circle key={`sim-flow-dot-${idx}`} r={2} fill="#ef4444" opacity={1 - (simulationValue / 100)}>
                      <animateMotion
                        path={pathString}
                        dur={`${4 + (idx % 2) * 2}s`}
                        repeatCount="indefinite"
                        begin={`${idx * 0.4}s`}
                      />
                    </circle>
                  );
                })}
              </g>
            )}
          </g>
        )}

        {/* --- SECTION 5: FINAL HUB VISION OVERLAY --- */}
        {showMultipleHubs && (
          <g id="final-vision-hubs" className="pointer-events-none">
            {regions.map((region) => {
              // Instead of only Dhaka shining, all main 8 regional units are brilliant nodes
              const isDhaka = region.id === "dhaka";
              const rGlow = isDhaka ? 35 : 25 + (region.metrics.jobs / 100) * 15;

              return (
                <g key={`final-${region.id}`} className="animate-float" style={{ animationDelay: `${region.x * 3}ms` }}>
                  {/* Soft environmental green aura */}
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={rGlow * 1.8}
                    fill={isDhaka ? "rgba(0, 106, 78, 0.08)" : "rgba(0, 106, 78, 0.12)"}
                    className="animate-pulse-slow"
                  />
                  {/* Concentric rings */}
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={rGlow}
                    fill="url(#greenHubGlow)"
                    opacity={0.8}
                  />
                  {/* Bright Core */}
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={5}
                    fill="#00a273"
                    filter="url(#glow)"
                  />
                  <circle cx={region.x} cy={region.y} r={1.5} fill="#ffffff" />

                  {/* Connecting link webs of decentralized web */}
                  {regions.map((otherRegion, oIdx) => {
                    // Draw lines between neighbouring divisions to showcase a connected ecosystem
                    const isNeighbor =
                      (region.id === "rajshahi" && otherRegion.id === "rangpur") ||
                      (region.id === "rajshahi" && otherRegion.id === "khulna") ||
                      (region.id === "dhaka" && otherRegion.id === "mymensingh") ||
                      (region.id === "dhaka" && otherRegion.id === "cumilla") ||
                      (region.id === "cumilla" && otherRegion.id === "chattogram") ||
                      (region.id === "cumilla" && otherRegion.id === "sylhet") ||
                      (region.id === "dhaka" && otherRegion.id === "barishal");

                    if (isNeighbor && otherRegion.id > region.id) {
                      return (
                        <line
                          key={`link-${region.id}-${otherRegion.id}`}
                          x1={region.x}
                          y1={region.y}
                          x2={otherRegion.x}
                          y2={otherRegion.y}
                          stroke="rgba(0, 162, 115, 0.45)"
                          strokeWidth={1}
                          strokeDasharray="3 3"
                        />
                      );
                    }
                    return null;
                  })}
                </g>
              );
            })}
          </g>
        )}

        {/* --- SECTION 6: HIGH-CONTRAST DIVISION LABELS --- */}
        <g id="labels-group" className="pointer-events-none">
          {regions.map((region) => {
            const isHovered = hoveredRegion?.id === region.id;
            const isSelected = selectedRegionId === region.id;
            const isDhaka = region.id === "dhaka";

            const pillBg = isSelected
              ? isDhaka ? "#DC2626" : "#1746A2"
              : isHovered
              ? "#1746A2"
              : "#111111";

            const pillWidth = isHovered || isSelected ? 80 : 72;
            const pillHeight = isHovered || isSelected ? 18 : 16;
            const fontSize = isHovered || isSelected ? "text-[10px] font-extrabold" : "text-[9px] font-bold";

            return (
              <g key={`lbl-${region.id}`}>
                {/* Micro background pill for maximum high-contrast text legibility */}
                <rect
                  x={region.x - pillWidth / 2}
                  y={region.y - (isHovered || isSelected ? 20 : 18)}
                  width={pillWidth}
                  height={pillHeight}
                  rx={4}
                  fill={pillBg}
                  stroke="#FFFFFF"
                  strokeWidth={0.75}
                  className="transition-all duration-200 shadow-md"
                />
                <text
                  x={region.x}
                  y={region.y - (isHovered || isSelected ? 8 : 7)}
                  textAnchor="middle"
                  className={`${fontSize} fill-white font-mono tracking-wider transition-all duration-200`}
                >
                  {region.name}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Embedded high-contrast visual tooltip card for desktop & mobile */}
      <AnimatePresence>
        {hoveredRegion && !selectedRegionId && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-72 p-4 rounded-xl bg-white border border-black/20 shadow-xl z-30 space-y-1.5"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-black font-sans tracking-tight">
                {hoveredRegion.name}
              </span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#1746A2]/10 text-[#1746A2] border border-[#1746A2]/30 uppercase">
                District Core
              </span>
            </div>
            <p className="text-xs text-gray-800 font-sans font-medium leading-relaxed">
              {hoveredRegion.tagline}
            </p>
            {activeLayer !== "none" && (
              <div className="pt-2 border-t border-black/10 flex justify-between items-center text-xs font-mono">
                <span className="text-gray-700 font-bold uppercase">{activeLayer}:</span>
                <span className={`font-bold ${hoveredRegion.id === 'dhaka' ? 'text-[#DC2626]' : 'text-[#006A4E]'}`}>
                  {getIntensityValue(hoveredRegion)}% concentration
                </span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
