import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, GraduationCap, HeartPulse, TrendingUp } from "lucide-react";

interface TreeNode {
  id: string;
  label: string;
  percentage: number;
  icon: React.ReactNode;
  barColor: string;
  lightBg: string;
  badgeColor: string;
  investigation: {
    title: string;
    subtitle: string;
    problem: string;
    fact: string;
    consequence: string;
  };
}

export default function InvestigativeTree() {
  const [selectedNode, setSelectedNode] = useState<string>("jobs");

  const nodes: TreeNode[] = [
    {
      id: "jobs",
      label: "Jobs & HQ Concentration",
      percentage: 78,
      icon: <Briefcase className="w-4 h-4 text-[#1746A2]" />,
      barColor: "bg-[#1746A2]",
      lightBg: "bg-blue-50 border-blue-200",
      badgeColor: "bg-[#1746A2] text-white",
      investigation: {
        title: "The Industrial Deserts",
        subtitle: "Corporate offices and factories choose Dhaka first",
        problem: "Over 78% of formal private sector employment is localized in Dhaka and neighboring Gazipur/Narayanganj districts.",
        fact: "The formal wage for a mid-level worker in Dhaka is 40% higher than the same role in regional cities, simply because HQ competition is zero in rural districts.",
        consequence: "Graduates are forced to pack their bags for Dhaka immediately after university. Staying home is often synonymous with career stagnation."
      }
    },
    {
      id: "education",
      label: "Top Tier Scholar Migration",
      percentage: 70,
      icon: <GraduationCap className="w-4 h-4 text-emerald-700" />,
      barColor: "bg-emerald-600",
      lightBg: "bg-emerald-50 border-emerald-200",
      badgeColor: "bg-emerald-700 text-white",
      investigation: {
        title: "The Academic Monopoly",
        subtitle: "Why 18-year-olds are forced to migrate for knowledge",
        problem: "The country's top universities, technical training complexes, and preparation academies are compressed into Dhaka.",
        fact: "Nearly 70% of students scoring GPA 5.0 in HSC migrate to Dhaka to seek admission, coachings, and networking advantages.",
        consequence: "Highly-capable youths are permanently uprooted. Once they complete education in Dhaka, they rarely return, resulting in a systemic intellectual drain on rural areas."
      }
    },
    {
      id: "healthcare",
      label: "Medical Specialist Concentration",
      percentage: 68,
      icon: <HeartPulse className="w-4 h-4 text-[#DC2626]" />,
      barColor: "bg-[#DC2626]",
      lightBg: "bg-red-50 border-red-200",
      badgeColor: "bg-[#DC2626] text-white",
      investigation: {
        title: "Medical Centralization",
        subtitle: "Life-saving care shouldn't depend on a highway trip",
        problem: "While primary clinics exist regionally, specialized life support, advanced cancer care, and reputable specialists are centralized.",
        fact: "Over 68% of specialized post-graduate medical professionals in Bangladesh reside and practice within the Dhaka Metropolitan area.",
        consequence: "Families spend their life savings renting rooms in Dhaka while treating critically ill members. Rural emergency outcomes are significantly poorer."
      }
    },
    {
      id: "business",
      label: "Venture Capital & Credit Monopoly",
      percentage: 84,
      icon: <TrendingUp className="w-4 h-4 text-amber-800" />,
      barColor: "bg-amber-600",
      lightBg: "bg-amber-50 border-amber-200",
      badgeColor: "bg-amber-800 text-white",
      investigation: {
        title: "Credit and Startup Capital",
        subtitle: "Where loans and investments are signed",
        problem: "Financial gatekeepers operate exclusively within the high-rises of Motijheel and Gulshan.",
        fact: "More than 84% of commercial bank credits, industrial venture funds, and angel startups are distributed inside Dhaka.",
        consequence: "A brilliant tech founder in Khulna or an agricultural innovator in Rajshahi cannot secure early capital without transferring their core startup operations to Dhaka."
      }
    }
  ];

  const activeNode = nodes.find((n) => n.id === selectedNode) || nodes[0];

  return (
    <div className="w-full flex flex-col lg:flex-row items-stretch gap-6 min-h-[440px] font-sans">
      {/* LEFT COLUMN: Interactive Pie / Donut Chart Selector */}
      <div className="flex-1 p-6 rounded-2xl bg-white border border-black/15 shadow-sm space-y-4 flex flex-col justify-between">
        <div className="flex justify-between items-center border-b border-black/10 pb-2.5">
          <span className="text-xs font-mono text-[#1746A2] font-bold uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#1746A2] animate-pulse" />
            DHAKA MONOPOLY PIE CHART (0 – 100%)
          </span>
          <span className="text-[10px] font-mono text-gray-500 font-bold">CLICK SLICE TO INSPECT</span>
        </div>

        {/* SVG Donut Pie Visual */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center my-auto">
          <div className="sm:col-span-5 flex justify-center relative py-2">
            <svg viewBox="0 0 100 100" className="w-44 h-44 -rotate-90">
              {/* Donut Slice 1: Jobs (78%) */}
              <circle
                cx="50" cy="50" r="36" stroke="#1746A2" strokeWidth="16" fill="none"
                strokeDasharray="226.2" strokeDashoffset={226.2 * (1 - 0.78 * 0.25)}
                className={`transition-all duration-300 cursor-pointer ${selectedNode === 'jobs' ? 'stroke-[20] opacity-100' : 'opacity-65 hover:opacity-100'}`}
                onClick={() => setSelectedNode('jobs')}
              />
              {/* Donut Slice 2: Education (70%) */}
              <circle
                cx="50" cy="50" r="36" stroke="#059669" strokeWidth="16" fill="none"
                strokeDasharray="226.2" strokeDashoffset={226.2 * (1 - 0.70 * 0.25)}
                transform="rotate(90 50 50)"
                className={`transition-all duration-300 cursor-pointer ${selectedNode === 'education' ? 'stroke-[20] opacity-100' : 'opacity-65 hover:opacity-100'}`}
                onClick={() => setSelectedNode('education')}
              />
              {/* Donut Slice 3: Healthcare (68%) */}
              <circle
                cx="50" cy="50" r="36" stroke="#DC2626" strokeWidth="16" fill="none"
                strokeDasharray="226.2" strokeDashoffset={226.2 * (1 - 0.68 * 0.25)}
                transform="rotate(180 50 50)"
                className={`transition-all duration-300 cursor-pointer ${selectedNode === 'healthcare' ? 'stroke-[20] opacity-100' : 'opacity-65 hover:opacity-100'}`}
                onClick={() => setSelectedNode('healthcare')}
              />
              {/* Donut Slice 4: Business (84%) */}
              <circle
                cx="50" cy="50" r="36" stroke="#D97706" strokeWidth="16" fill="none"
                strokeDasharray="226.2" strokeDashoffset={226.2 * (1 - 0.84 * 0.25)}
                transform="rotate(270 50 50)"
                className={`transition-all duration-300 cursor-pointer ${selectedNode === 'business' ? 'stroke-[20] opacity-100' : 'opacity-65 hover:opacity-100'}`}
                onClick={() => setSelectedNode('business')}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
              <span className="text-2xl font-bold font-mono text-black leading-none">{activeNode.percentage}%</span>
              <span className="text-[9px] font-mono text-gray-500 font-bold uppercase mt-1">DHAKA MONOPOLY</span>
            </div>
          </div>

          {/* Interactive Pie Slice Legend Grid */}
          <div className="sm:col-span-7 space-y-2">
            {nodes.map((node) => {
              const isSelected = selectedNode === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  className={`p-2.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                    isSelected
                      ? "bg-white border-black shadow-sm font-bold scale-[1.01]"
                      : "bg-[#EBE7DF]/60 border-black/10 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{
                        backgroundColor:
                          node.id === "jobs"
                            ? "#1746A2"
                            : node.id === "education"
                            ? "#059669"
                            : node.id === "healthcare"
                            ? "#DC2626"
                            : "#D97706"
                      }}
                    />
                    <span className={`text-xs font-serif ${isSelected ? "text-black font-bold" : "text-gray-700"}`}>
                      {node.label}
                    </span>
                  </div>
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${node.badgeColor}`}>
                    {node.percentage}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pt-2 border-t border-black/10 text-[10px] font-mono text-gray-500 flex justify-between font-bold">
          <span>PIE CHART ANALYSIS</span>
          <span className="text-[#1746A2]">SELECTED: {activeNode.percentage}% MONOPOLY</span>
        </div>
      </div>

      {/* RIGHT COLUMN: Dossier Finding Card (Matching Screenshot) */}
      <div className="flex-1 p-6 rounded-2xl bg-white border border-black/15 shadow-sm space-y-4 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-[#1746A2] font-bold uppercase tracking-widest">DOSSIER FINDING</span>
            <span className="text-[10px] font-mono text-gray-400 uppercase">GRD-3216 ARCHIVE</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, scale: 0.97, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -4 }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-3"
            >
              <div>
                <h3 className="text-xl font-bold font-serif text-black">{activeNode.investigation.title}</h3>
                <p className="text-xs font-mono text-gray-600 mt-0.5">{activeNode.investigation.subtitle}</p>
              </div>

              <div className="space-y-2 text-xs font-sans">
                {/* Structural Problem Card */}
                <div className="p-3.5 rounded-xl bg-[#EBE7DF]/80 border border-black/10 space-y-1">
                  <span className="text-[10px] font-mono text-[#DC2626] uppercase font-bold tracking-wider">STRUCTURAL PROBLEM</span>
                  <p className="text-gray-800 leading-relaxed font-sans">{activeNode.investigation.problem}</p>
                </div>

                {/* Statistical Fact Card */}
                <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 space-y-1">
                  <span className="text-[10px] font-mono text-[#1746A2] uppercase font-bold tracking-wider">STATISTICAL FACT</span>
                  <p className="text-gray-800 leading-relaxed font-sans">{activeNode.investigation.fact}</p>
                </div>

                {/* Systemic Consequence Card */}
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 space-y-1">
                  <span className="text-[10px] font-mono text-amber-800 uppercase font-bold tracking-wider">SYSTEMIC CONSEQUENCE</span>
                  <p className="text-gray-800 leading-relaxed font-sans">{activeNode.investigation.consequence}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="pt-2 border-t border-black/10 text-[10px] font-mono text-gray-500 flex justify-between font-bold">
          <span>TEAM-V SOCIAL IMPACT REPORT</span>
          <span className="text-[#1746A2]">DATA VERIFIED</span>
        </div>
      </div>
    </div>
  );
}
