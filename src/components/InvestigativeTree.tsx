import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, GraduationCap, HeartPulse, TrendingUp } from "lucide-react";

interface TreeNode {
  id: string;
  label: string;
  icon: React.ReactNode;
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
      label: "Jobs & Industry",
      icon: <Briefcase className="w-4 h-4 text-[#1746A2]" />,
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
      label: "Top Tier Education",
      icon: <GraduationCap className="w-4 h-4 text-emerald-700" />,
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
      label: "Specialized Healthcare",
      icon: <HeartPulse className="w-4 h-4 text-[#DC2626]" />,
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
      label: "Venture Investment",
      icon: <TrendingUp className="w-4 h-4 text-amber-700" />,
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
    <div className="w-full flex flex-col lg:flex-row items-stretch gap-6 min-h-[420px] font-sans">
      {/* LEFT: Mind Map Node Selector */}
      <div className="flex-1 flex flex-col justify-center items-center relative p-6 rounded-2xl bg-white border border-black/15 shadow-sm min-h-[300px]">
        <div className="absolute top-3 left-4 text-[9px] font-mono text-gray-500 uppercase font-bold tracking-widest">
          INVESTIGATIVE MAP NODE SELECTOR
        </div>

        {/* Central Hub */}
        <div className="z-10 mb-6 p-4 rounded-2xl bg-[#EBE7DF] border-2 border-black text-center space-y-1 shadow-md">
          <span className="text-[10px] font-mono text-[#DC2626] font-bold uppercase tracking-widest">ROOT CAUSE</span>
          <h3 className="text-lg font-bold font-display text-black">Why Migration Happens</h3>
        </div>

        {/* 4 Clickable Node Buttons */}
        <div className="grid grid-cols-2 gap-3 w-full z-10">
          {nodes.map((node) => {
            const isSelected = selectedNode === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#1746A2] text-white border-[#1746A2] font-bold shadow-md scale-[1.02]"
                    : "bg-white text-black border-black/15 hover:border-black/40 hover:bg-black/5"
                }`}
              >
                <div className={`p-2 rounded-lg ${isSelected ? "bg-white/20" : "bg-black/5"}`}>
                  {node.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono uppercase">{node.label}</h4>
                  <p className="text-[9px] opacity-80 font-mono">CLICK TO INSPECT</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT: Detailed Findings Dossier */}
      <div className="flex-1 p-6 rounded-2xl bg-white border border-black/15 shadow-sm space-y-4 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-[#1746A2] font-bold uppercase tracking-widest">DOSSIER FINDING</span>
            <span className="text-[10px] font-mono text-gray-500">GRD-3216 ARCHIVE</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <div>
                <h3 className="text-xl font-bold font-serif text-black">{activeNode.investigation.title}</h3>
                <p className="text-xs font-mono text-gray-600 mt-0.5">{activeNode.investigation.subtitle}</p>
              </div>

              <div className="space-y-2 text-xs font-sans">
                <div className="p-3 rounded-xl bg-[#EBE7DF] border border-black/10 space-y-1">
                  <span className="text-[10px] font-mono text-[#DC2626] uppercase font-bold">STRUCTURAL PROBLEM</span>
                  <p className="text-gray-800 leading-relaxed">{activeNode.investigation.problem}</p>
                </div>

                <div className="p-3 rounded-xl bg-blue-50 border border-[#1746A2]/20 space-y-1">
                  <span className="text-[10px] font-mono text-[#1746A2] uppercase font-bold">STATISTICAL FACT</span>
                  <p className="text-gray-800 leading-relaxed">{activeNode.investigation.fact}</p>
                </div>

                <div className="p-3 rounded-xl bg-amber-50 border border-amber-500/20 space-y-1">
                  <span className="text-[10px] font-mono text-amber-800 uppercase font-bold">SYSTEMIC CONSEQUENCE</span>
                  <p className="text-gray-800 leading-relaxed">{activeNode.investigation.consequence}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="pt-2 border-t border-black/10 text-[10px] font-mono text-gray-500 flex justify-between">
          <span>TEAM-V SOCIAL IMPACT REPORT</span>
          <span className="text-[#1746A2] font-bold">DATA VERIFIED</span>
        </div>
      </div>
    </div>
  );
}
