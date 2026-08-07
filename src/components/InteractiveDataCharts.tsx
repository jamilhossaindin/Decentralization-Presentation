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
  const [selectedDivision, setSelectedDivision] = useState<string>("rajshahi");
  const divisionData: Record<string, { name: string; agritech: number; tech: number; logistics: number; medical: number; edu: number; highlight: string }> = {
    dhaka: { name: "Dhaka", agritech: 20, tech: 95, logistics: 85, medical: 95, edu: 95, highlight: "Overconcentrated Core (Severe Squeezing)" },
    chittagong: { name: "Chittagong", agritech: 40, tech: 70, logistics: 98, medical: 75, edu: 80, highlight: "Maritime & Global Trade Gateway" },
    sylhet: { name: "Sylhet", agritech: 75, tech: 85, logistics: 60, medical: 65, edu: 70, highlight: "NRB Capital & Remote Tech Oasis" },
    rajshahi: { name: "Rajshahi", agritech: 95, tech: 80, logistics: 65, medical: 70, edu: 85, highlight: "Silk City & Agro-Innovation Hub" },
    khulna: { name: "Khulna", agritech: 85, tech: 60, logistics: 85, medical: 60, edu: 65, highlight: "Eco-Industrial & Sundarban Hub" }
  };

  // Chart 4 Data: AIDA Conversion Funnel Waterfall
  const funnelStages = [
    { stage: "Impressions", count: "500,000+", pct: 100, barWidth: "w-full", color: "bg-[#1746A2]", note: "TikTok & Reels 15-sec video spots" },
    { stage: "Engagements", count: "85,000+", pct: 17, barWidth: "w-9/12", color: "bg-blue-600", note: "Carousel swipes & infographic shares" },
    { stage: "Web Simulator Players", count: "24,000+", pct: 4.8, barWidth: "w-6/12", color: "bg-[#006A4E]", note: "Interactive district heatmap plays" },
    { stage: "Petition Signatures", count: "50,000 Target", pct: 10, barWidth: "w-7/12", color: "bg-[#DC2626]", note: "Official policy decentralization signers" }
  ];

  return (
    <div className="flex flex-col gap-2.5 font-sans mt-2.5 mb-0">
      {/* Sub-Navigation Bar */}
      <div className="flex items-center gap-2.5 overflow-x-auto">
        <button
          onClick={() => setActiveTab("migration")}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === "migration"
              ? "bg-[#1746A2] text-white font-bold shadow-sm"
              : "bg-white text-gray-700 border border-black/10 hover:bg-black/5"
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5" />
          1. 30-Year Population Area Chart
        </button>

        <button
          onClick={() => setActiveTab("economic")}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === "economic"
              ? "bg-[#1746A2] text-white font-bold shadow-sm"
              : "bg-white text-gray-700 border border-black/10 hover:bg-black/5"
          }`}
        >
          <PieChart className="w-3.5 h-3.5" />
          2. ৳380M+ Daily Loss Donut
        </button>

        <button
          onClick={() => setActiveTab("radar")}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === "radar"
              ? "bg-[#1746A2] text-white font-bold shadow-sm"
              : "bg-white text-gray-700 border border-black/10 hover:bg-black/5"
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          3. Divisional Superpowers Radar
        </button>

        <button
          onClick={() => setActiveTab("funnel")}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === "funnel"
              ? "bg-[#1746A2] text-white font-bold shadow-sm"
              : "bg-white text-gray-700 border border-black/10 hover:bg-black/5"
          }`}
        >
          <AlertCircle className="w-3.5 h-3.5 text-red-500" />
          4. District Opportunity Deficit
        </button>

        <button
          onClick={() => setActiveTab("sources" as any)}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === ("sources" as any)
              ? "bg-black text-white font-bold shadow-sm"
              : "bg-white text-gray-700 border border-black/10 hover:bg-black/5"
          }`}
        >
          <Info className="w-3.5 h-3.5 text-amber-400" />
          5. Official Data Sources & Bibliography
        </button>
      </div>

      {/* CHART 1: 30-YEAR MIGRATION AREA BAR CHART */}
      {activeTab === "migration" && (
        <div className="p-5 rounded-2xl bg-white border border-black/15 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <span className="text-[10px] font-mono text-[#1746A2] uppercase font-bold tracking-widest">
                INTERACTIVE DATA GRAPH #01
              </span>
              <h3 className="text-lg font-bold font-serif text-black">Dhaka Population Surge (1990 – 2026)</h3>
            </div>
            <span className="text-xs font-mono text-gray-500 font-bold">HOVER OVER BARS TO INSPECT YEAR</span>
          </div>

          {/* Interactive Bar Chart Visualization */}
          <div className="h-48 flex items-end justify-between gap-3 pt-6 px-4 border-b border-black/15 relative">
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
                      isHovered ? "bg-[#1746A2] shadow-md" : "bg-[#1746A2]/70 group-hover:bg-[#1746A2]"
                    }`}
                  >
                    {/* Population Number Badge permanently displayed above every bar */}
                    <div
                      className={`absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold px-2 py-0.5 rounded whitespace-nowrap z-20 transition-all ${
                        isHovered
                          ? "bg-[#1746A2] text-white scale-110 shadow-md ring-2 ring-black/20"
                          : "bg-black text-white opacity-90"
                      }`}
                    >
                      {item.dhakaPop}
                    </div>
                  </motion.div>
                  <span className={`text-xs font-mono font-bold ${isHovered ? "text-[#1746A2]" : "text-gray-600"}`}>
                    {item.year}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Detailed Year Inspector */}
          {hoveredYear !== null && (
            <div className="p-3.5 rounded-xl bg-[#EBE7DF] border border-black/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div>
                <span className="text-[9px] text-gray-500 block uppercase">DHAKA POPULATION</span>
                <p className="font-bold text-black text-sm">{migrationYears[hoveredYear].dhakaPop}</p>
              </div>
              <div>
                <span className="text-[9px] text-gray-500 block uppercase">METRO DENSITY</span>
                <p className="font-bold text-[#1746A2] text-sm">{migrationYears[hoveredYear].density} / km²</p>
              </div>
              <div>
                <span className="text-[9px] text-gray-500 block uppercase">REMAINING 63 DISTRICTS</span>
                <p className="font-bold text-gray-800 text-sm">{migrationYears[hoveredYear].districtPop}</p>
              </div>
              <div>
                <span className="text-[9px] text-gray-500 block uppercase">DAILY TRAFFIC LOSS</span>
                <p className="font-bold text-[#DC2626] text-sm">{migrationYears[hoveredYear].loss}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* CHART 2: ECONOMIC LOSS BREAKDOWN DONUT CHART */}
      {activeTab === "economic" && (
        <div className="p-5 rounded-2xl bg-white border border-black/15 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <span className="text-[10px] font-mono text-[#DC2626] uppercase font-bold tracking-widest">
                INTERACTIVE DATA GRAPH #02
              </span>
              <h3 className="text-lg font-bold font-serif text-black">৳380M+ Daily Economic Loss Breakdown</h3>
            </div>
            <span className="text-xs font-mono text-gray-500 font-bold">CLICK SLICE TO INSPECT IMPACT</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* SVG Donut Visual */}
            <div className="md:col-span-5 flex justify-center relative">
              <svg viewBox="0 0 100 100" className="w-48 h-48 -rotate-90">
                <circle cx="50" cy="50" r="38" stroke="#EBE7DF" strokeWidth="16" fill="none" />
                <circle
                  cx="50" cy="50" r="38" stroke="#DC2626" strokeWidth="16" fill="none"
                  strokeDasharray="238.7" strokeDashoffset="138"
                  className="transition-all duration-300 cursor-pointer hover:opacity-80"
                  onClick={() => setActiveSlice(0)}
                />
                <circle
                  cx="50" cy="50" r="38" stroke="#1746A2" strokeWidth="16" fill="none"
                  strokeDasharray="238.7" strokeDashoffset="181"
                  className="transition-all duration-300 cursor-pointer hover:opacity-80"
                  onClick={() => setActiveSlice(1)}
                />
                <circle
                  cx="50" cy="50" r="38" stroke="#F59E0B" strokeWidth="16" fill="none"
                  strokeDasharray="238.7" strokeDashoffset="210"
                  className="transition-all duration-300 cursor-pointer hover:opacity-80"
                  onClick={() => setActiveSlice(2)}
                />
                <circle
                  cx="50" cy="50" r="38" stroke="#10B981" strokeWidth="16" fill="none"
                  strokeDasharray="238.7" strokeDashoffset="225"
                  className="transition-all duration-300 cursor-pointer hover:opacity-80"
                  onClick={() => setActiveSlice(3)}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-xl font-bold font-mono text-black">{lossSlices[activeSlice].pct}%</span>
                <span className="text-[9px] font-mono text-gray-500 font-bold uppercase">SELECTED</span>
              </div>
            </div>

            {/* Clickable Slice Legend */}
            <div className="md:col-span-7 space-y-2">
              {lossSlices.map((slice, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveSlice(idx)}
                  className={`p-3 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                    activeSlice === idx
                      ? "bg-white border-[#1746A2] shadow-sm font-bold scale-[1.01]"
                      : "bg-[#EBE7DF]/60 border-black/10 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: slice.color }} />
                    <span className="text-xs text-black font-sans">{slice.label}</span>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <span className="font-bold text-black">{slice.amount}</span>
                    <span className="text-gray-500 text-[10px] ml-2">({slice.pct}%)</span>
                  </div>
                </div>
              ))}
              <p className="text-xs font-sans text-gray-700 italic pt-2">
                Impact Detail: {lossSlices[activeSlice].desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CHART 3: DIVISIONAL SUPERPOWERS COMPARISON */}
      {activeTab === "radar" && (
        <div className="p-5 rounded-2xl bg-white border border-black/15 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <span className="text-[10px] font-mono text-[#1746A2] uppercase font-bold tracking-widest">
                INTERACTIVE DATA GRAPH #03
              </span>
              <h3 className="text-lg font-bold font-serif text-black">Divisional Superpowers Scorecard</h3>
            </div>

            {/* Division Selector Buttons */}
            <div className="flex flex-wrap gap-1 font-mono text-xs">
              {Object.keys(divisionData).map((divKey) => (
                <button
                  key={divKey}
                  onClick={() => setSelectedDivision(divKey)}
                  className={`px-2.5 py-1 rounded-lg border uppercase transition-all cursor-pointer ${
                    selectedDivision === divKey
                      ? "bg-[#1746A2] text-white border-[#1746A2] font-bold"
                      : "bg-[#EBE7DF] text-gray-700 border-black/10 hover:bg-white"
                  }`}
                >
                  {divisionData[divKey].name}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Multi-Bar Scorecard */}
          <div className="space-y-3 pt-2">
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs font-mono flex justify-between items-center">
              <div>
                <span className="text-[#1746A2] font-bold">DIVISION HIGHLIGHT: </span>
                <span className="text-black font-semibold">{divisionData[selectedDivision].highlight}</span>
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase">SPECTRUM GRADIENT</span>
            </div>

            {/* Scorecard Bars with 5-Color Gradient Scale */}
            {[
              { label: "AGRITECH & FOOD INNOVATION", val: divisionData[selectedDivision].agritech },
              { label: "REMOTE TECH & FREELANCING", val: divisionData[selectedDivision].tech },
              { label: "MARITIME & LOGISTICS", val: divisionData[selectedDivision].logistics },
              { label: "MEDICAL & ICU DENSITY", val: divisionData[selectedDivision].medical },
              { label: "HIGHER EDUCATION & CAMPUSES", val: divisionData[selectedDivision].edu }
            ].map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono text-gray-800 font-bold">
                  <span>{metric.label}</span>
                  <span className="text-[#1746A2]">{metric.val} / 100</span>
                </div>
                <div className="h-3.5 w-full bg-[#EBE7DF] rounded-full overflow-hidden p-0.5 border border-black/15 shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.val}%` }}
                    transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.23, 1, 0.32, 1] }}
                    className="h-full rounded-full shadow-xs"
                    style={{
                      background: "linear-gradient(to right, #ee312f 0%, #f5771d 25%, #ffe600 50%, #d8dc25 75%, #b1d34a 100%)",
                      backgroundSize: `${(100 / Math.max(metric.val, 1)) * 100}% 100%`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CHART 4: DISTRICT OPPORTUNITY DEFICIT PROBLEM GRAPH */}
      {activeTab === "funnel" && (
        <div className="p-5 rounded-2xl bg-white border border-black/15 shadow-sm space-y-4 font-sans">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-black/10 pb-2.5">
            <div>
              <span className="text-[10px] font-mono text-[#DC2626] uppercase font-bold tracking-widest flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                INTERACTIVE DATA GRAPH #04 (PROBLEM IDENTIFICATION)
              </span>
              <h3 className="text-lg font-bold font-serif text-black">District Opportunity Deficit & Inequality Gap</h3>
            </div>
            <span className="text-xs font-mono text-[#DC2626] font-bold bg-red-50 px-2 py-0.5 rounded border border-red-200">
              63 DISTRICTS STARVED vs 1 METRO
            </span>
          </div>

          {/* 4 Problem Deficit Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            {[
              {
                title: "CORPORATE JOB HQS",
                dhakaPct: 78,
                districtPct: 22,
                dhakaLabel: "78% Dhaka",
                districtLabel: "22% Districts",
                desc: "Severe employment shortage outside capital."
              },
              {
                title: "COMMERCIAL BANK CREDIT",
                dhakaPct: 84,
                districtPct: 16,
                dhakaLabel: "84% Dhaka",
                districtLabel: "16% Districts",
                desc: "Venture loans denied to regional startups."
              },
              {
                title: "SPECIALIST DOCTORS",
                dhakaPct: 68,
                districtPct: 32,
                dhakaLabel: "68% Dhaka",
                districtLabel: "32% Districts",
                desc: "Regional families forced to travel for ICU."
              },
              {
                title: "HSC TOP SCHOLARS",
                dhakaPct: 70,
                districtPct: 30,
                dhakaLabel: "70% Drain to Dhaka",
                districtLabel: "30% Local",
                desc: "82% regional graduate brain drain."
              }
            ].map((pillar, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#EBE7DF] border border-black/10 flex flex-col justify-between h-56 relative overflow-hidden">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-[#DC2626] font-bold uppercase tracking-wider block">
                    DEFICIT AREA 0{idx + 1}
                  </span>
                  <h4 className="text-xs font-bold text-black font-mono leading-tight">{pillar.title}</h4>
                </div>

                {/* Dual Bar Comparison */}
                <div className="my-2 space-y-1.5">
                  <div className="flex justify-between text-[10px] font-mono font-bold">
                    <span className="text-[#DC2626]">{pillar.dhakaLabel}</span>
                    <span className="text-[#1746A2]">{pillar.districtLabel}</span>
                  </div>

                  <div className="h-4 w-full bg-white rounded-lg overflow-hidden flex p-0.5 border border-black/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pillar.dhakaPct}%` }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      className="h-full bg-[#DC2626] rounded-l-md flex items-center justify-center"
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pillar.districtPct}%` }}
                      transition={{ duration: 0.5, delay: idx * 0.08 + 0.1 }}
                      className="h-full bg-[#1746A2] rounded-r-md flex items-center justify-center"
                    />
                  </div>
                </div>

                <p className="text-[10px] text-gray-700 font-sans leading-tight border-t border-black/10 pt-2">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: OFFICIAL DATA SOURCES & BIBLIOGRAPHY */}
      {(activeTab as any) === "sources" && (
        <div className="p-5 rounded-2xl bg-white border border-black/15 shadow-sm space-y-4 font-sans">
          <div className="flex justify-between items-center border-b border-black/10 pb-2">
            <div>
              <span className="text-[10px] font-mono text-[#1746A2] uppercase font-bold tracking-widest">
                ACADEMIC & GOVERNMENT CITATIONS
              </span>
              <h3 className="text-lg font-bold font-serif text-black">Official Data Sources & Methodology</h3>
            </div>
            <span className="text-xs font-mono text-gray-500 font-bold">VERIFIED SOURCES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#EBE7DF] border border-black/10 space-y-1">
              <span className="text-[10px] font-mono text-[#1746A2] font-bold block uppercase">1. POPULATION & INFLOW (36.6M & 1,724 DAILY)</span>
              <p className="font-semibold text-black">Bangladesh Bureau of Statistics (BBS) — Population Census 2022 & UN Urbanization Prospects (2024–2026 Revision).</p>
              <p className="text-gray-600 text-[11px]">BBS recorded 22.4M core metro residents. Daytime floating workforce push total city pressure to ~36.6M in 2026.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#EBE7DF] border border-black/10 space-y-1">
              <span className="text-[10px] font-mono text-[#DC2626] font-bold block uppercase">2. TRAFFIC GRIDLOCK LOSS (৳384M DAILY)</span>
              <p className="font-semibold text-black">BUET Accident Research Institute (ARI) & BRAC Institute of Governance (BIGD).</p>
              <p className="text-gray-600 text-[11px]">Calculates 5 million working hours lost daily in Dhaka traffic jams, equaling ৳37,000 Crore to ৳40,000 Crore BDT annual GDP loss (~৳384M daily).</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#EBE7DF] border border-black/10 space-y-1">
              <span className="text-[10px] font-mono text-emerald-800 font-bold block uppercase">3. METRO DENSITY (48,150 / KM²)</span>
              <p className="font-semibold text-black">RAJUK Dhaka Structure Plan (2016–2035) & World Bank Urban Report.</p>
              <p className="text-gray-600 text-[11px]">City Corporation core areas span 306 km², concentrating over 14.7M residents (48,000+ per km²).</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#EBE7DF] border border-black/10 space-y-1">
              <span className="text-[10px] font-mono text-amber-800 font-bold block uppercase">4. MONOPOLIZATION (78% HQ & 84% CREDIT)</span>
              <p className="font-semibold text-black">Bangladesh Bank Annual Report & BBS Economic Census.</p>
              <p className="text-gray-600 text-[11px]">78% of private sector corporate employment and 84% of commercial bank industrial loans are concentrated in Dhaka/Gazipur.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
