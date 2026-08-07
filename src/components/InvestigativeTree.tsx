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
      {/* LEFT COLUMN: Horizontal 0-100% Line Bar Gauge Selector */}
      <div className="flex-1 p-6 rounded-2xl bg-white border border-black/15 shadow-sm space-y-4 flex flex-col justify-between">
        <div className="space-y-1 border-b border-black/10 pb-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-[#1746A2] font-bold uppercase tracking-widest">
              DHAKA MONOPOLY GAUGE (0 – 100%)
            </span>
            <span className="text-[10px] font-mono text-gray-500 font-bold">CLICK ROW TO INSPECT</span>
          </div>
          {/* Axis Scale Markers */}
          <div className="flex justify-between text-[9px] font-mono text-gray-400 font-bold pt-1">
            <span>0%</span>
            <span>25%</span>
            <span>50%</span>
            <span>75%</span>
            <span>100%</span>
          </div>
        </div>

        {/* 4 Horizontal Line Gauge Rows */}
        <div className="space-y-3.5 my-auto">
          {nodes.map((node) => {
            const isSelected = selectedNode === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer space-y-2 ${
                  isSelected
                    ? "bg-white border-black shadow-md scale-[1.01]"
                    : "bg-[#EBE7DF]/50 border-black/10 hover:border-black/30 hover:bg-white"
                }`}
              >
                {/* Row Header */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-md ${isSelected ? "bg-black text-white" : "bg-black/5 text-black"}`}>
                      {node.icon}
                    </div>
                    <span className={`text-xs font-bold font-serif ${isSelected ? "text-black" : "text-gray-700"}`}>
                      {node.label}
                    </span>
                  </div>
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${node.badgeColor}`}>
                    {node.percentage}%
                  </span>
                </div>

                {/* Horizontal Progress Track */}
                <div className="h-3 w-full bg-[#EBE7DF] rounded-full overflow-hidden p-0.5 border border-black/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${node.percentage}%` }}
                    transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                    className={`h-full ${node.barColor} rounded-full`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-2 border-t border-black/10 text-[10px] font-mono text-gray-500 flex justify-between font-bold">
          <span>STRUCTURAL ANALYSIS</span>
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
