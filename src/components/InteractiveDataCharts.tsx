import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BarChart3, PieChart, TrendingUp, Activity, Filter, Info, Sparkles, AlertCircle } from "lucide-react";

export default function InteractiveDataCharts() {
  const [activeTab, setActiveTab] = useState<"migration" | "economic" | "radar" | "funnel">("migration");

  // Chart 1 Data: 30-Year Migration Surge
  const [hoveredYear, setHoveredYear] = useState<number | null>(4);
  const migrationYears = [
    { year: "1990", dhakaPop: "6.6M", districtPop: "102M", density: "18,200", loss: "৳15M" },
    { year: "2000", dhakaPop: "10.2M", districtPop: "118M", density: "24,500", loss: "৳45M" },
    { year: "2010", dhakaPop: "14.7M", districtPop: "134M", density: "32,100", loss: "৳120M" },
    { year: "2020", dhakaPop: "21.0M", districtPop: "144M", density: "41,000", loss: "৳280M" },
    { year: "2026", dhakaPop: "36.6M", districtPop: "149M", density: "48,150", loss: "৳384M" }
  ];

  // Chart 2 Data: Economic Loss Donut Slices
  const [activeSlice, setActiveSlice] = useState<number>(0);
  const lossSlices = [
    { label: "Traffic Delays & Idling Fuel", pct: 42, amount: "৳ 161.2M", color: "#DC2626", desc: "2.5 hours average daily delay per commuter in Dhaka." },
    { label: "Rent & Real Estate Inflation", pct: 24, amount: "৳ 92.1M", color: "#1746A2", desc: "50-65% entry level salaries spent on sub-let housing." },
    { label: "Medical Referral Travel Costs", pct: 18, amount: "৳ 69.1M", color: "#F59E0B", desc: "Families traveling to Dhaka for specialized ICU care." },
    { label: "Lost Local District Productivity", pct: 16, amount: "৳ 61.4M", color: "#10B981", desc: "Brain drain depriving 63 districts of local enterprise." }
  ];

  // Chart 3 Data: Divisional Strengths Comparison
  const [selectedDivision, setSelectedDivision] = useState<string>("dhaka");
  const divisionData: Record<string, { name: string; agritech: number; tech: number; logistics: number; medical: number; edu: number; highlight: string }> = {
    dhaka: { name: "Dhaka", agritech: 20, tech: 95, logistics: 85, medical: 95, edu: 95, highlight: "Overcrowded Mega-City (High Pressure)" },
    chittagong: { name: "Chittagong", agritech: 40, tech: 70, logistics: 98, medical: 75, edu: 80, highlight: "Main Sea Port & Commercial Trade Hub" },
    sylhet: { name: "Sylhet", agritech: 75, tech: 85, logistics: 60, medical: 65, edu: 70, highlight: "Expat Remittance & Tech Freelancing Hub" },
    rajshahi: { name: "Rajshahi", agritech: 95, tech: 80, logistics: 65, medical: 70, edu: 85, highlight: "Education Center & Food Farming Hub" },
    khulna: { name: "Khulna", agritech: 85, tech: 60, logistics: 85, medical: 60, edu: 65, highlight: "Industrial Port & Eco-Business Center" }
  };

  // Chart 4 Data: District Opportunity Deficit Pie Chart
  const [selectedDeficitIdx, setSelectedDeficitIdx] = useState<number>(0);
  const deficitMetrics = [
    {
      title: "Corporate Job Headquarters",
      shortTitle: "CORPORATE JOB HQS",
      dhakaPct: 78,
      districtPct: 22,
      dhakaLabel: "78% Dhaka Metro",
      districtLabel: "22% All 63 Districts",
      stat: "3.5x More Corporate Jobs Centralized in Dhaka",
      desc: "Over 78% of all corporate head offices, IT multinationals, and financial institutions are located strictly within Dhaka, forcing career-seeking graduates to migrate.",
      source: "BBS National Economic Census"
    },
    {
      title: "Commercial Bank Credit & Loans",
      shortTitle: "COMMERCIAL BANK CREDIT",
      dhakaPct: 84,
      districtPct: 16,
      dhakaLabel: "84% Dhaka Metro",
      districtLabel: "16% All 63 Districts",
      stat: "84% of Commercial Investment Capital Locked in Dhaka",
      desc: "Regional entrepreneurs in 63 districts receive only 16% of total commercial bank lending, starving local manufacturing and startup ecosystems of growth capital.",
      source: "Bangladesh Bank Quarterly Banking Statistics"
    },
    {
      title: "Specialist Doctors & ICU Beds",
      shortTitle: "SPECIALIST DOCTORS & ICUs",
      dhakaPct: 68,
      districtPct: 32,
      dhakaLabel: "68% Dhaka Metro",
      districtLabel: "32% All 63 Districts",
      stat: "Over 68% of Specialized Doctors Clustered in Dhaka",
      desc: "Critical tertiary care, oncology specialists, and advanced ICU facilities are heavily concentrated in the capital, forcing thousands of families to travel for life-saving care.",
      source: "Directorate General of Health Services (DGHS)"
    },
    {
      title: "Higher Education & Top Scholars",
      shortTitle: "HIGHER EDUCATION & SCHOLARS",
      dhakaPct: 70,
      districtPct: 30,
      dhakaLabel: "70% Drain to Dhaka",
      districtLabel: "30% Local Campuses",
      stat: "70% Top High School Scholars Drain to Dhaka Campuses",
      desc: "Underfunding of regional universities drives over 70% of top-performing high school graduates to move to Dhaka for higher education, leading to permanent talent loss.",
      source: "University Grants Commission (UGC)"
    }
  ];

  return (
    <div className="flex flex-col gap-5 font-sans my-0 flex-1">
      {/* Sub-Navigation Bar */}
      <div className="flex items-center gap-2.5 overflow-x-auto">
        <button
          onClick={() => setActiveTab("migration")}
          className={`px-3 py-1.5 rounded-xl text-sm font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === "migration"
              ? "bg-[#1E3E62] text-[#16C79A] font-bold shadow-md border border-[#16C79A]"
              : "bg-[#0B192C] text-white border border-[#1E3E62] hover:bg-[#1E3E62]"
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5" />
          1. 30-Year Population Area Chart
        </button>

        <button
          onClick={() => setActiveTab("economic")}
          className={`px-3 py-1.5 rounded-xl text-sm font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === "economic"
              ? "bg-[#1E3E62] text-[#16C79A] font-bold shadow-md border border-[#16C79A]"
              : "bg-[#0B192C] text-white border border-[#1E3E62] hover:bg-[#1E3E62]"
          }`}
        >
          <PieChart className="w-3.5 h-3.5" />
          2. ৳380M+ Daily Loss Donut
        </button>

        <button
          onClick={() => setActiveTab("radar")}
          className={`px-3 py-1.5 rounded-xl text-sm font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === "radar"
              ? "bg-[#1E3E62] text-[#16C79A] font-bold shadow-md border border-[#16C79A]"
              : "bg-[#0B192C] text-white border border-[#1E3E62] hover:bg-[#1E3E62]"
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          3. Divisional Superpowers Radar
        </button>

        <button
          onClick={() => setActiveTab("funnel")}
          className={`px-3 py-1.5 rounded-xl text-sm font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === "funnel"
              ? "bg-[#1E3E62] text-[#16C79A] font-bold shadow-md border border-[#16C79A]"
              : "bg-[#0B192C] text-white border border-[#1E3E62] hover:bg-[#1E3E62]"
          }`}
        >
          <AlertCircle className="w-3.5 h-3.5 text-red-400" />
          4. District Opportunity Deficit
        </button>

        <button
          onClick={() => setActiveTab("sources" as any)}
          className={`px-3 py-1.5 rounded-xl text-sm font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === ("sources" as any)
              ? "bg-[#1E3E62] text-[#16C79A] font-bold shadow-md border border-[#16C79A]"
              : "bg-[#0B192C] text-white border border-[#1E3E62] hover:bg-[#1E3E62]"
          }`}
        >
          <Info className="w-3.5 h-3.5 text-amber-400" />
          5. Official Data Sources & Bibliography
        </button>
      </div>

      {/* CHART 1: 30-YEAR MIGRATION AREA BAR CHART */}
      {activeTab === "migration" && (
        <div className="p-5 rounded-2xl bg-[#0B192C] border border-[#1E3E62] shadow-xl space-y-4 text-white flex-1 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-[#1E3E62] pb-3">
            <div>
              <span className="text-sm font-mono text-[#16C79A] uppercase font-bold tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#16C79A]" />
                INTERACTIVE DATA GRAPH #01 (SURGE ANALYSIS)
              </span>
              <h3 className="text-lg font-bold font-sans text-[#16C79A]">Dhaka Population Surge (1990 – 2026)</h3>
            </div>
            <span className="text-xs font-mono text-gray-300 font-bold">HOVER OVER BARS TO INSPECT YEAR</span>
          </div>

          {/* Interactive Bar Chart Visualization - Expanded height */}
          <div className="flex-1 min-h-[240px] sm:min-h-[280px] flex items-end justify-between gap-3 pt-8 px-4 border-b border-[#1E3E62] relative">
            {migrationYears.map((item, idx) => {
              const heightPct = (idx + 1) * 18 + 10;
              const isHovered = hoveredYear === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredYear(idx)}
                  className="flex-1 flex flex-col items-center gap-2 group cursor-pointer h-full justify-end"
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${heightPct}%` }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className={`w-full rounded-t-lg transition-all relative ${
                      isHovered ? "bg-[#16C79A] shadow-md" : "bg-[#16C79A]/70 group-hover:bg-[#16C79A]"
                    }`}
                  >
                    {/* Population Number Badge permanently displayed above every bar */}
                    <div
                      className={`absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold px-2 py-0.5 rounded whitespace-nowrap z-20 transition-all ${
                        isHovered
                          ? "bg-[#16C79A] text-black scale-110 shadow-md ring-2 ring-black"
                          : "bg-[#000000] text-white border border-[#1E3E62] opacity-90"
                      }`}
                    >
                      {item.dhakaPop}
                    </div>
                  </motion.div>
                  <span className={`text-xs font-mono font-bold ${isHovered ? "text-[#16C79A]" : "text-gray-300"}`}>
                    {item.year}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Detailed Year Inspector */}
          {hoveredYear !== null && (
            <div className="p-3.5 rounded-xl bg-[#1E3E62] border border-[#1E3E62] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div>
                <span className="text-[9px] text-[#16C79A] font-bold block uppercase">DHAKA POPULATION</span>
                <p className="font-bold text-white text-sm">{migrationYears[hoveredYear].dhakaPop}</p>
              </div>
              <div>
                <span className="text-[9px] text-[#16C79A] font-bold block uppercase">METRO DENSITY</span>
                <p className="font-bold text-white text-sm">{migrationYears[hoveredYear].density} / km²</p>
              </div>
              <div>
                <span className="text-[9px] text-[#16C79A] font-bold block uppercase">REMAINING 63 DISTRICTS</span>
                <p className="font-bold text-white text-sm">{migrationYears[hoveredYear].districtPop}</p>
              </div>
              <div>
                <span className="text-[9px] text-[#16C79A] font-bold block uppercase">DAILY TRAFFIC LOSS</span>
                <p className="font-bold text-white text-sm">{migrationYears[hoveredYear].loss}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* CHART 2: ECONOMIC LOSS BREAKDOWN DONUT CHART */}
      {activeTab === "economic" && (
        <div className="p-5 rounded-2xl bg-[#0B192C] border border-[#1E3E62] shadow-xl space-y-4 text-white flex-1 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-[#1E3E62] pb-3">
            <div>
              <span className="text-sm font-mono text-[#16C79A] uppercase font-bold tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#16C79A]" />
                INTERACTIVE DATA GRAPH #02 (ECONOMIC LOSS)
              </span>
              <h3 className="text-lg font-bold font-sans text-[#16C79A]">৳380M+ Daily Economic Loss Breakdown</h3>
            </div>
            <span className="text-sm font-mono text-white font-bold bg-[#1E3E62] px-3 py-1 rounded-lg border border-[#DC2626]/60 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              ANNUAL GDP DRAIN: ~৳40,000 CRORE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-1">
            {/* SVG Donut Visual - Enlarged & High-Impact */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-3">
              <div className="relative flex items-center justify-center">
                <svg viewBox="0 0 280 280" className="w-60 h-60 sm:w-72 sm:h-72 -rotate-90 overflow-visible">
                  {/* Background Track */}
                  <circle cx="140" cy="140" r="95" stroke="#1E3E62" strokeWidth="34" fill="none" />
                  
                  {/* Slice 0: Traffic (42%) */}
                  <circle
                    cx="140" cy="140" r="95" stroke="#DC2626"
                    strokeWidth={activeSlice === 0 ? "42" : "32"}
                    fill="none"
                    strokeDasharray="250.7 596.9" strokeDashoffset="0"
                    className="transition-all duration-300 cursor-pointer hover:opacity-90"
                    onClick={() => setActiveSlice(0)}
                  />
                  {/* Slice 1: Rent (24%) */}
                  <circle
                    cx="140" cy="140" r="95" stroke="#16C79A"
                    strokeWidth={activeSlice === 1 ? "42" : "32"}
                    fill="none"
                    strokeDasharray="143.3 596.9" strokeDashoffset="-250.7"
                    className="transition-all duration-300 cursor-pointer hover:opacity-90"
                    onClick={() => setActiveSlice(1)}
                  />
                  {/* Slice 2: Medical (18%) */}
                  <circle
                    cx="140" cy="140" r="95" stroke="#F59E0B"
                    strokeWidth={activeSlice === 2 ? "42" : "32"}
                    fill="none"
                    strokeDasharray="107.4 596.9" strokeDashoffset="-394.0"
                    className="transition-all duration-300 cursor-pointer hover:opacity-90"
                    onClick={() => setActiveSlice(2)}
                  />
                  {/* Slice 3: Productivity (16%) */}
                  <circle
                    cx="140" cy="140" r="95" stroke="#3B82F6"
                    strokeWidth={activeSlice === 3 ? "42" : "32"}
                    fill="none"
                    strokeDasharray="95.5 596.9" strokeDashoffset="-501.4"
                    className="transition-all duration-300 cursor-pointer hover:opacity-90"
                    onClick={() => setActiveSlice(3)}
                  />
                </svg>

                {/* Big, High-Impact Center Readout */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
                  <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#16C79A] drop-shadow-md">
                    {lossSlices[activeSlice].pct}%
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-white font-bold uppercase tracking-wider mt-0.5">
                    SHARE OF LOSS
                  </span>
                  <span className="text-[11px] font-mono text-gray-300 font-semibold">
                    {lossSlices[activeSlice].amount} / Day
                  </span>
                </div>
              </div>

              {/* Total Summary Badge below Donut */}
              <div className="mt-3 px-4 py-2 rounded-xl bg-[#1E3E62]/80 border border-[#1E3E62] text-center font-mono text-xs sm:text-sm text-gray-200 shadow-sm">
                Active Category: <span className="font-bold text-white">{lossSlices[activeSlice].label}</span>
              </div>
            </div>

            {/* Clickable Slice Legend with Rich Detail */}
            <div className="lg:col-span-7 space-y-2.5">
              {lossSlices.map((slice, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveSlice(idx)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${
                    activeSlice === idx
                      ? "bg-[#1E3E62] border-[#16C79A] shadow-md ring-1 ring-[#16C79A]/50"
                      : "bg-[#1E3E62]/40 border-[#1E3E62] hover:bg-[#1E3E62]/80"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3.5 h-3.5 rounded-sm" style={{ backgroundColor: slice.color }} />
                      <span className="text-sm font-bold text-white font-sans">{slice.label}</span>
                    </div>
                    <div className="text-right font-mono text-xs">
                      <span className="font-extrabold text-white text-sm">{slice.amount}</span>
                      <span className="text-[#16C79A] font-bold ml-2">({slice.pct}%)</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 font-sans mt-1 pl-6">
                    {slice.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: Macro Loss Indicators to Fill Empty Space */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-[#1E3E62]">
            <div className="p-2.5 rounded-xl bg-[#1E3E62]/40 border border-[#1E3E62] flex items-center justify-between">
              <span className="text-xs font-mono text-gray-300 font-bold">DAILY COMMUTE DELAY</span>
              <span className="text-xs font-mono font-extrabold text-[#DC2626]">5M Hours Lost / Day</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#1E3E62]/40 border border-[#1E3E62] flex items-center justify-between">
              <span className="text-xs font-mono text-gray-300 font-bold">IDLE FUEL WASTED</span>
              <span className="text-xs font-mono font-extrabold text-amber-400">3.2M Liters / Day</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#1E3E62]/40 border border-[#1E3E62] flex items-center justify-between">
              <span className="text-xs font-mono text-gray-300 font-bold">NATIONAL GDP HIT</span>
              <span className="text-xs font-mono font-extrabold text-[#16C79A]">~2.9% GDP Drag</span>
            </div>
          </div>
        </div>
      )}

      {/* CHART 3: DIVISIONAL SUPERPOWERS COMPARISON RADAR */}
      {activeTab === "radar" && (
        <div className="p-5 rounded-2xl bg-[#0B192C] border border-[#1E3E62] shadow-xl space-y-4 text-white flex-1 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-[#1E3E62] pb-3">
            <div>
              <span className="text-sm font-mono text-[#16C79A] uppercase font-bold tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#16C79A]" />
                INTERACTIVE DATA GRAPH #03 (RADAR ANALYSIS)
              </span>
              <h3 className="text-lg font-bold font-serif text-[#16C79A]">Divisional Superpowers Radar & Benchmark</h3>
            </div>

            {/* Division Selector Buttons */}
            <div className="flex flex-wrap gap-1.5 font-mono text-sm">
              {Object.keys(divisionData).map((divKey) => (
                <button
                  key={divKey}
                  onClick={() => setSelectedDivision(divKey)}
                  className={`px-3 py-1.5 rounded-lg border uppercase transition-all cursor-pointer font-bold text-sm ${
                    selectedDivision === divKey
                      ? "bg-[#1E3E62] text-[#16C79A] border-[#16C79A] shadow-md ring-1 ring-[#16C79A]/50"
                      : "bg-[#0B192C] text-white border-[#1E3E62] hover:bg-[#1E3E62]"
                  }`}
                >
                  {divisionData[divKey].name}
                </button>
              ))}
            </div>
          </div>

          {/* Main Dual-Column Content: Radar Graph (Left) & Metrics Breakdown (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-1">
            {/* Left Column: Clean High-Readability SVG Radar Chart (No Animation, 14px text) */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative p-2">
              <svg viewBox="0 0 460 340" className="w-full max-w-[420px] h-auto overflow-visible">
                {/* Concentric Web Rings (25%, 50%, 75%, 100%) */}
                {[0.25, 0.5, 0.75, 1.0].map((ringLevel, rIdx) => {
                  const ringPoints = [
                    { a: -Math.PI / 2 },
                    { a: -Math.PI / 2 + (2 * Math.PI / 5) * 1 },
                    { a: -Math.PI / 2 + (2 * Math.PI / 5) * 2 },
                    { a: -Math.PI / 2 + (2 * Math.PI / 5) * 3 },
                    { a: -Math.PI / 2 + (2 * Math.PI / 5) * 4 }
                  ].map(pt => {
                    const r = ringLevel * 95;
                    return `${230 + r * Math.cos(pt.a)},${165 + r * Math.sin(pt.a)}`;
                  }).join(" ");
                  return (
                    <polygon
                      key={rIdx}
                      points={ringPoints}
                      fill={rIdx === 3 ? "rgba(30, 62, 98, 0.25)" : "none"}
                      stroke="#1E3E62"
                      strokeWidth="1.5"
                      strokeDasharray={rIdx < 3 ? "3,3" : undefined}
                    />
                  );
                })}

                {/* 5 Axis Spoke Lines with 14px Readable White Labels */}
                {[
                  { a: -Math.PI / 2, label: "AGRITECH", tx: 230, ty: 45, anchor: "middle" },
                  { a: -Math.PI / 2 + (2 * Math.PI / 5) * 1, label: "TECH & FREELANCING", tx: 340, ty: 135, anchor: "start" },
                  { a: -Math.PI / 2 + (2 * Math.PI / 5) * 2, label: "MARITIME & PORTS", tx: 305, ty: 295, anchor: "start" },
                  { a: -Math.PI / 2 + (2 * Math.PI / 5) * 3, label: "MEDICAL & ICU", tx: 155, ty: 295, anchor: "end" },
                  { a: -Math.PI / 2 + (2 * Math.PI / 5) * 4, label: "HIGHER EDUCATION", tx: 120, ty: 135, anchor: "end" }
                ].map((axis, aIdx) => {
                  const endX = 230 + 95 * Math.cos(axis.a);
                  const endY = 165 + 95 * Math.sin(axis.a);
                  return (
                    <g key={aIdx}>
                      <line x1="230" y1="165" x2={endX} y2={endY} stroke="#1E3E62" strokeWidth="1.5" />
                      <text
                        x={axis.tx}
                        y={axis.ty}
                        textAnchor={axis.anchor as any}
                        fill="#FFFFFF"
                        style={{ fontSize: "14px", fontWeight: "700" }}
                        className="font-mono tracking-tight"
                      >
                        {axis.label}
                      </text>
                    </g>
                  );
                })}

                {/* Dhaka Benchmark Overlay Polygon (Red outline) */}
                {selectedDivision !== "dhaka" && (
                  <polygon
                    points={[
                      { a: -Math.PI / 2, val: divisionData.dhaka.agritech },
                      { a: -Math.PI / 2 + (2 * Math.PI / 5) * 1, val: divisionData.dhaka.tech },
                      { a: -Math.PI / 2 + (2 * Math.PI / 5) * 2, val: divisionData.dhaka.logistics },
                      { a: -Math.PI / 2 + (2 * Math.PI / 5) * 3, val: divisionData.dhaka.medical },
                      { a: -Math.PI / 2 + (2 * Math.PI / 5) * 4, val: divisionData.dhaka.edu }
                    ].map(pt => {
                      const r = (pt.val / 100) * 95;
                      return `${230 + r * Math.cos(pt.a)},${165 + r * Math.sin(pt.a)}`;
                    }).join(" ")}
                    fill="rgba(220, 38, 38, 0.12)"
                    stroke="#DC2626"
                    strokeWidth="1.5"
                    strokeDasharray="4,4"
                  />
                )}

                {/* Selected Division Polygon (Clean Solid Vibrant Emerald) */}
                <polygon
                  points={[
                    { a: -Math.PI / 2, val: divisionData[selectedDivision].agritech },
                    { a: -Math.PI / 2 + (2 * Math.PI / 5) * 1, val: divisionData[selectedDivision].tech },
                    { a: -Math.PI / 2 + (2 * Math.PI / 5) * 2, val: divisionData[selectedDivision].logistics },
                    { a: -Math.PI / 2 + (2 * Math.PI / 5) * 3, val: divisionData[selectedDivision].medical },
                    { a: -Math.PI / 2 + (2 * Math.PI / 5) * 4, val: divisionData[selectedDivision].edu }
                  ].map(pt => {
                    const r = (pt.val / 100) * 95;
                    return `${230 + r * Math.cos(pt.a)},${165 + r * Math.sin(pt.a)}`;
                  }).join(" ")}
                  fill="rgba(22, 199, 154, 0.28)"
                  stroke="#16C79A"
                  strokeWidth="2.5"
                />

                {/* Static Solid Polygon Vertex Dots (No Animation Ping) */}
                {[
                  { a: -Math.PI / 2, val: divisionData[selectedDivision].agritech },
                  { a: -Math.PI / 2 + (2 * Math.PI / 5) * 1, val: divisionData[selectedDivision].tech },
                  { a: -Math.PI / 2 + (2 * Math.PI / 5) * 2, val: divisionData[selectedDivision].logistics },
                  { a: -Math.PI / 2 + (2 * Math.PI / 5) * 3, val: divisionData[selectedDivision].medical },
                  { a: -Math.PI / 2 + (2 * Math.PI / 5) * 4, val: divisionData[selectedDivision].edu }
                ].map((pt, pIdx) => {
                  const r = (pt.val / 100) * 95;
                  const vx = 230 + r * Math.cos(pt.a);
                  const vy = 165 + r * Math.sin(pt.a);
                  return (
                    <circle key={pIdx} cx={vx} cy={vy} r="5" fill="#16C79A" stroke="#0B192C" strokeWidth="2" />
                  );
                })}
              </svg>

              {/* Legend with 14px Font Size */}
              <div className="flex items-center gap-5 mt-2 font-mono text-[14px]">
                <span className="flex items-center gap-2 text-[#16C79A] font-bold">
                  <span className="w-3.5 h-3.5 rounded-sm bg-[#16C79A]/40 border border-[#16C79A]" />
                  {divisionData[selectedDivision].name}
                </span>
                {selectedDivision !== "dhaka" && (
                  <span className="flex items-center gap-2 text-[#DC2626] font-bold">
                    <span className="w-3.5 h-1 border-t-2 border-dashed border-[#DC2626]" />
                    Dhaka Core Benchmark
                  </span>
                )}
              </div>
            </div>

            {/* Right Column: Scorecard & Superpower Breakdown with 14px Text */}
            <div className="lg:col-span-6 space-y-3.5">
              {/* Highlight Badge */}
              <div className="p-3.5 rounded-xl bg-[#1E3E62]/60 border border-[#1E3E62] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#16C79A]" />
                  <span className="text-[14px] font-mono font-bold text-white uppercase">
                    CITY PROFILE:
                  </span>
                </div>
                <span className="text-[14px] font-mono text-[#16C79A] font-bold">
                  {divisionData[selectedDivision].highlight}
                </span>
              </div>

              {/* Scorecard Bars */}
              {[
                { label: "AGRITECH & FOOD INNOVATION", val: divisionData[selectedDivision].agritech },
                { label: "REMOTE TECH & FREELANCING", val: divisionData[selectedDivision].tech },
                { label: "MARITIME & LOGISTICS", val: divisionData[selectedDivision].logistics },
                { label: "MEDICAL & ICU DENSITY", val: divisionData[selectedDivision].medical },
                { label: "HIGHER EDUCATION & CAMPUSES", val: divisionData[selectedDivision].edu }
              ].map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-[14px] font-mono text-white font-bold">
                    <span>{metric.label}</span>
                    <span className="text-[#16C79A] font-mono font-bold">{metric.val} / 100</span>
                  </div>
                  <div className="h-3.5 w-full bg-[#1E3E62] rounded-full overflow-hidden p-0.5 border border-[#1E3E62] shadow-inner">
                    <div
                      className="h-full rounded-full shadow-xs"
                      style={{
                        width: `${metric.val}%`,
                        background: "linear-gradient(to right, #ee312f 0%, #f5771d 25%, #ffe600 50%, #d8dc25 75%, #b1d34a 100%)",
                        backgroundSize: `${(100 / Math.max(metric.val, 1)) * 100}% 100%`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CHART 4: DISTRICT OPPORTUNITY DEFICIT PIE CHART VISUALIZATION */}
      {activeTab === "funnel" && (
        <div className="p-5 rounded-2xl bg-[#0B192C] border border-[#1E3E62] shadow-xl space-y-4 font-sans text-white flex-1 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-[#1E3E62] pb-3">
            <div>
              <span className="text-sm font-mono text-[#16C79A] uppercase font-bold tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#16C79A]" />
                INTERACTIVE DATA GRAPH #04 (PIE CHART ANALYSIS)
              </span>
              <h3 className="text-lg font-bold font-sans text-[#16C79A]">District Opportunity Deficit & Inequality Breakdown</h3>
            </div>
            <span className="text-sm font-mono text-white font-bold bg-[#1E3E62] px-3 py-1 rounded-lg border border-[#16C79A]/60 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#16C79A]" />
              63 DISTRICTS STARVED vs 1 CAPITAL METRO
            </span>
          </div>

          {/* Center Main Visualization: Interactive Pie Chart (Left) & Insight Breakdown (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-1">
            {/* Left Column: Authentic SVG Donut / Pie Chart */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-2">
              <div className="relative flex items-center justify-center">
                <svg viewBox="0 0 240 240" className="w-48 h-48 sm:w-56 sm:h-56 -rotate-90 overflow-visible">
                  {/* Background base circle */}
                  <circle cx="120" cy="120" r="76" stroke="#1E3E62" strokeWidth="28" fill="none" />
                  
                  {/* Dhaka Share Slice (Primary Color #16C79A) */}
                  <circle
                    cx="120"
                    cy="120"
                    r="76"
                    stroke="#16C79A"
                    strokeWidth="28"
                    fill="none"
                    strokeDasharray={`${(deficitMetrics[selectedDeficitIdx].dhakaPct / 100) * 477.52} 477.52`}
                    strokeDashoffset="0"
                    className="transition-all duration-500 ease-out"
                  />

                  {/* 63 Districts Share Slice (White Color #FFFFFF) */}
                  <circle
                    cx="120"
                    cy="120"
                    r="76"
                    stroke="#FFFFFF"
                    strokeWidth="28"
                    fill="none"
                    strokeDasharray={`${(deficitMetrics[selectedDeficitIdx].districtPct / 100) * 477.52} 477.52`}
                    strokeDashoffset={`${-((deficitMetrics[selectedDeficitIdx].dhakaPct / 100) * 477.52)}`}
                    className="transition-all duration-500 ease-out"
                  />
                </svg>

                {/* Center Percentage Readout */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
                  <span className="text-3xl font-extrabold font-mono text-[#16C79A]">
                    {deficitMetrics[selectedDeficitIdx].dhakaPct}%
                  </span>
                  <span className="text-[11px] font-mono text-white font-bold uppercase tracking-wider">
                    DHAKA SHARE
                  </span>
                </div>
              </div>

              {/* Pie Chart Legend with 14px Text */}
              <div className="flex items-center gap-6 mt-3 font-mono text-[14px]">
                <span className="flex items-center gap-2 text-white font-bold">
                  <span className="w-3.5 h-3.5 rounded-sm bg-[#16C79A]" />
                  Dhaka: <span className="text-[#16C79A] font-extrabold">{deficitMetrics[selectedDeficitIdx].dhakaPct}%</span>
                </span>
                <span className="flex items-center gap-2 text-white font-bold">
                  <span className="w-3.5 h-3.5 rounded-sm bg-white" />
                  63 Districts: <span className="text-white font-extrabold">{deficitMetrics[selectedDeficitIdx].districtPct}%</span>
                </span>
              </div>
            </div>

            {/* Right Column: Deep Insight Breakdown Card */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="p-4 rounded-xl bg-[#1E3E62]/70 border border-[#1E3E62] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#16C79A] uppercase font-bold tracking-wider">
                    SELECTED METRIC #{selectedDeficitIdx + 1}
                  </span>
                  <span className="text-xs font-mono text-gray-300 font-bold">
                    {deficitMetrics[selectedDeficitIdx].source}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white font-serif">
                  {deficitMetrics[selectedDeficitIdx].stat}
                </h4>
                <p className="text-sm text-gray-200 font-sans leading-relaxed">
                  {deficitMetrics[selectedDeficitIdx].desc}
                </p>
              </div>

              {/* Progress Bar Comparison */}
              <div className="p-3.5 rounded-xl bg-[#0B192C] border border-[#1E3E62] space-y-1.5">
                <div className="flex justify-between text-sm font-mono font-bold">
                  <span className="text-[#16C79A]">{deficitMetrics[selectedDeficitIdx].dhakaLabel}</span>
                  <span className="text-white">{deficitMetrics[selectedDeficitIdx].districtLabel}</span>
                </div>
                <div className="h-4 w-full bg-[#1E3E62] rounded-lg overflow-hidden flex p-0.5 border border-[#1E3E62]">
                  <div
                    className="h-full bg-[#16C79A] rounded-l-md transition-all duration-500"
                    style={{ width: `${deficitMetrics[selectedDeficitIdx].dhakaPct}%` }}
                  />
                  <div
                    className="h-full bg-white rounded-r-md transition-all duration-500"
                    style={{ width: `${deficitMetrics[selectedDeficitIdx].districtPct}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 4 Interactive Deficit Selector Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {deficitMetrics.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedDeficitIdx(idx)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  selectedDeficitIdx === idx
                    ? "bg-[#1E3E62] border-[#16C79A] shadow-md ring-1 ring-[#16C79A]/50"
                    : "bg-[#1E3E62]/40 border-[#1E3E62] hover:bg-[#1E3E62]/80"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] font-mono text-[#16C79A] font-bold">
                    AREA 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono font-extrabold text-white">
                    {item.dhakaPct}% / {item.districtPct}%
                  </span>
                </div>
                <h5 className="text-xs font-bold text-white font-mono leading-snug">
                  {item.shortTitle}
                </h5>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: OFFICIAL DATA SOURCES & BIBLIOGRAPHY */}
      {(activeTab as any) === "sources" && (
        <div className="p-5 rounded-2xl bg-[#0B192C] border border-[#1E3E62] shadow-xl space-y-4 font-sans text-white flex-1 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-[#1E3E62] pb-3">
            <div>
              <span className="text-sm font-mono text-[#16C79A] uppercase font-bold tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#16C79A]" />
                ACADEMIC & GOVERNMENT CITATIONS
              </span>
              <h3 className="text-lg font-bold font-sans text-[#16C79A]">Official Data Sources & Methodology</h3>
            </div>
            <span className="text-sm font-mono text-white font-bold bg-[#1E3E62] px-3 py-1 rounded-lg border border-[#16C79A]/60 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#16C79A]" />
              6 VERIFIED INSTITUTIONAL SOURCES
            </span>
          </div>

          {/* 6 Research & Institutional Source Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm flex-1">
            {/* Card 1 */}
            <div className="p-4 rounded-xl bg-[#1E3E62]/80 border border-[#1E3E62] space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#16C79A] font-bold block uppercase mb-1">
                  1. POPULATION & INFLOW
                </span>
                <p className="font-bold text-white text-base mb-2.5">Bangladesh Bureau of Statistics</p>
                <ul className="space-y-2 text-white text-sm font-sans font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-[#16C79A] font-bold text-base leading-none">•</span>
                    <span>22.4M core residents; 36.6M daytime pressure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#16C79A] font-bold text-base leading-none">•</span>
                    <span>1,724+ new rural migrants arrive every 24 hours</span>
                  </li>
                </ul>
              </div>
              <span className="text-xs font-mono text-gray-300 border-t border-[#1E3E62] pt-2 block font-semibold">
                Source: BBS Census & UN Population Data
              </span>
            </div>

            {/* Card 2 */}
            <div className="p-4 rounded-xl bg-[#1E3E62]/80 border border-[#1E3E62] space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#16C79A] font-bold block uppercase mb-1">
                  2. TRAFFIC GRIDLOCK LOSS
                </span>
                <p className="font-bold text-white text-base mb-2.5">BUET Accident Research Institute</p>
                <ul className="space-y-2 text-white text-sm font-sans font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-[#16C79A] font-bold text-base leading-none">•</span>
                    <span>5M working hours wasted daily in traffic jams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#16C79A] font-bold text-base leading-none">•</span>
                    <span>৳37,000Cr – ৳40,000Cr annual GDP economic drag</span>
                  </li>
                </ul>
              </div>
              <span className="text-xs font-mono text-gray-300 border-t border-[#1E3E62] pt-2 block font-semibold">
                Source: BUET ARI & BRAC BIGD Research
              </span>
            </div>

            {/* Card 3 */}
            <div className="p-4 rounded-xl bg-[#1E3E62]/80 border border-[#1E3E62] space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#16C79A] font-bold block uppercase mb-1">
                  3. METRO DENSITY & LIMITS
                </span>
                <p className="font-bold text-white text-base mb-2.5">RAJUK & World Bank Report</p>
                <ul className="space-y-2 text-white text-sm font-sans font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-[#16C79A] font-bold text-base leading-none">•</span>
                    <span>48,150 people/km² across 306 km² core area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#16C79A] font-bold text-base leading-none">•</span>
                    <span>Ranked #1 densest mega-city habitat on Earth</span>
                  </li>
                </ul>
              </div>
              <span className="text-xs font-mono text-gray-300 border-t border-[#1E3E62] pt-2 block font-semibold">
                Source: RAJUK Dhaka Structure Plan
              </span>
            </div>

            {/* Card 4 */}
            <div className="p-4 rounded-xl bg-[#1E3E62]/80 border border-[#1E3E62] space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#16C79A] font-bold block uppercase mb-1">
                  4. CREDIT & HEADQUARTERS
                </span>
                <p className="font-bold text-white text-base mb-2.5">Bangladesh Bank Statistics</p>
                <ul className="space-y-2 text-white text-sm font-sans font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-[#16C79A] font-bold text-base leading-none">•</span>
                    <span>84% private industrial bank loans in Dhaka</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#16C79A] font-bold text-base leading-none">•</span>
                    <span>78% corporate head offices strictly in capital</span>
                  </li>
                </ul>
              </div>
              <span className="text-xs font-mono text-gray-300 border-t border-[#1E3E62] pt-2 block font-semibold">
                Source: Bangladesh Bank Annual Review
              </span>
            </div>

            {/* Card 5 */}
            <div className="p-4 rounded-xl bg-[#1E3E62]/80 border border-[#1E3E62] space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#16C79A] font-bold block uppercase mb-1">
                  5. HEALTHCARE & ICU CAPACITY
                </span>
                <p className="font-bold text-white text-base mb-2.5">DGHS Health Bulletin & BMA</p>
                <ul className="space-y-2 text-white text-sm font-sans font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-[#16C79A] font-bold text-base leading-none">•</span>
                    <span>68% specialized doctors & ICUs in Dhaka</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#16C79A] font-bold text-base leading-none">•</span>
                    <span>70%+ critical patients forced to travel for care</span>
                  </li>
                </ul>
              </div>
              <span className="text-xs font-mono text-gray-300 border-t border-[#1E3E62] pt-2 block font-semibold">
                Source: DGHS National Tertiary Registry
              </span>
            </div>

            {/* Card 6 */}
            <div className="p-4 rounded-xl bg-[#1E3E62]/80 border border-[#1E3E62] space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#16C79A] font-bold block uppercase mb-1">
                  6. HIGHER EDUCATION BRAIN DRAIN
                </span>
                <p className="font-bold text-white text-base mb-2.5">University Grants Commission</p>
                <ul className="space-y-2 text-white text-sm font-sans font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-[#16C79A] font-bold text-base leading-none">•</span>
                    <span>70% top HSC scholars migrate to Dhaka universities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#16C79A] font-bold text-base leading-none">•</span>
                    <span>82% permanent graduate brain drain from districts</span>
                  </li>
                </ul>
              </div>
              <span className="text-xs font-mono text-gray-300 border-t border-[#1E3E62] pt-2 block font-semibold">
                Source: UGC Annual Higher Ed Census
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
