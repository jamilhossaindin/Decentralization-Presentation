import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, GraduationCap, HeartPulse, TrendingUp } from "lucide-react";

interface TreeNode {
  id: string;
  label: string;
  subtitle: string;
  percentage: number;
  icon: React.ReactNode;
  color: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
  desc: string;
}

export default function InvestigativeTree() {
  const [selectedNode, setSelectedNode] = useState<string>("jobs");

  const nodes: TreeNode[] = [
    {
      id: "jobs",
      label: "Jobs & HQ Concentration",
      subtitle: "Corporate offices and commercial factories choose Dhaka first",
      percentage: 78,
      icon: <Briefcase className="w-5 h-5 text-[#16C79A]" />,
      color: "#16C79A",
      textColor: "text-[#16C79A]",
      borderColor: "border-[#16C79A]",
      bgColor: "bg-[#16C79A]",
      desc: "Over 78% of formal private corporate employment is concentrated strictly in Dhaka & Gazipur."
    },
    {
      id: "education",
      label: "Top Tier Scholar Migration",
      subtitle: "Why 18-year-olds are forced to migrate for higher education",
      percentage: 70,
      icon: <GraduationCap className="w-5 h-5 text-[#06B6D4]" />,
      color: "#06B6D4",
      textColor: "text-[#06B6D4]",
      borderColor: "border-[#06B6D4]",
      bgColor: "bg-[#06B6D4]",
      desc: "Top universities and research labs are centralized; 70% of GPA 5.0 scholars leave their hometowns."
    },
    {
      id: "healthcare",
      label: "Medical Specialist Concentration",
      subtitle: "Life-saving specialized care centralized in one city",
      percentage: 68,
      icon: <HeartPulse className="w-5 h-5 text-[#DC2626]" />,
      color: "#DC2626",
      textColor: "text-[#DC2626]",
      borderColor: "border-[#DC2626]",
      bgColor: "bg-[#DC2626]",
      desc: "68% of post-graduate medical specialists and ICU facilities operate inside the capital."
    },
    {
      id: "business",
      label: "Venture Capital & Credit Monopoly",
      subtitle: "Where loans and commercial startup investments are signed",
      percentage: 84,
      icon: <TrendingUp className="w-5 h-5 text-[#F59E0B]" />,
      color: "#F59E0B",
      textColor: "text-[#F59E0B]",
      borderColor: "border-[#F59E0B]",
      bgColor: "bg-[#F59E0B]",
      desc: "More than 84% of commercial bank loans and industrial venture investments are approved in Dhaka."
    }
  ];

  const activeNode = nodes.find((n) => n.id === selectedNode) || nodes[0];

  return (
    <div className="w-full flex-1 flex flex-col justify-between gap-5 p-5 sm:p-6 rounded-2xl bg-[#0B192C] border border-[#1E3E62] shadow-xl font-sans text-white">
      {/* Top Header Bar */}
      <div className="flex justify-between items-center border-b border-[#1E3E62] pb-3">
        <span className="text-sm font-mono text-[#16C79A] font-bold uppercase tracking-wider flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#16C79A]" />
          DHAKA MONOPOLY PIE CHART (4 SECTOR BREAKDOWN)
        </span>
        <span className="text-xs font-mono text-gray-300 font-bold bg-[#1E3E62] px-3 py-1 rounded-lg border border-[#1E3E62]">
          CLICK SLICE OR CARD TO INSPECT
        </span>
      </div>

      {/* Main Full-Width Grid: Big Donut with 4 Distinct Colors & 4 Category Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto">
        {/* Left Column: Big 4-Color Donut Visual */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-2">
          <div className="relative flex items-center justify-center">
            <svg viewBox="0 0 320 320" className="w-64 h-64 sm:w-72 sm:h-72 md:w-84 md:h-84 -rotate-90 overflow-visible">
              {/* Background Base Ring */}
              <circle cx="160" cy="160" r="110" stroke="#1E3E62" strokeWidth="36" fill="none" opacity="0.4" />
              
              {/* Sector 1: Jobs & HQ Concentration (Emerald #16C79A) */}
              <circle
                cx="160" cy="160" r="110" stroke="#16C79A" fill="none"
                strokeWidth={selectedNode === 'jobs' ? "52" : "36"}
                strokeDasharray="172.78 518.37"
                strokeDashoffset="0"
                className={`transition-all duration-300 cursor-pointer ${selectedNode === 'jobs' ? 'opacity-100 filter drop-shadow(0 0 8px rgba(22,199,154,0.6))' : 'opacity-85 hover:opacity-100'}`}
                onClick={() => setSelectedNode('jobs')}
              />

              {/* Sector 2: Education Scholar Migration (Sky Blue / Cyan #06B6D4) */}
              <circle
                cx="160" cy="160" r="110" stroke="#06B6D4" fill="none"
                strokeWidth={selectedNode === 'education' ? "52" : "36"}
                strokeDasharray="172.78 518.37"
                strokeDashoffset="-172.78"
                className={`transition-all duration-300 cursor-pointer ${selectedNode === 'education' ? 'opacity-100 filter drop-shadow(0 0 8px rgba(6,182,212,0.6))' : 'opacity-85 hover:opacity-100'}`}
                onClick={() => setSelectedNode('education')}
              />

              {/* Sector 3: Healthcare Specialists (Crimson Red #DC2626) */}
              <circle
                cx="160" cy="160" r="110" stroke="#DC2626" fill="none"
                strokeWidth={selectedNode === 'healthcare' ? "52" : "36"}
                strokeDasharray="172.78 518.37"
                strokeDashoffset="-345.57"
                className={`transition-all duration-300 cursor-pointer ${selectedNode === 'healthcare' ? 'opacity-100 filter drop-shadow(0 0 8px rgba(220,38,38,0.6))' : 'opacity-85 hover:opacity-100'}`}
                onClick={() => setSelectedNode('healthcare')}
              />

              {/* Sector 4: Venture Capital & Credit (Amber Gold #F59E0B) */}
              <circle
                cx="160" cy="160" r="110" stroke="#F59E0B" fill="none"
                strokeWidth={selectedNode === 'business' ? "52" : "36"}
                strokeDasharray="172.78 518.37"
                strokeDashoffset="-518.36"
                className={`transition-all duration-300 cursor-pointer ${selectedNode === 'business' ? 'opacity-100 filter drop-shadow(0 0 8px rgba(245,158,11,0.6))' : 'opacity-85 hover:opacity-100'}`}
                onClick={() => setSelectedNode('business')}
              />
            </svg>

            {/* Big Center Readout in Active Color */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
              <span
                className="text-5xl sm:text-6xl font-black font-mono leading-none drop-shadow-lg transition-colors duration-300"
                style={{ color: activeNode.color }}
              >
                {activeNode.percentage}%
              </span>
              <span className="text-xs font-mono text-white font-bold uppercase mt-2 tracking-wider">
                DHAKA MONOPOLY
              </span>
            </div>
          </div>

          {/* 4-Color Mini Legend Bar */}
          <div className="mt-4 flex items-center justify-center gap-4 text-xs font-mono text-gray-300 font-bold">
            <span className="flex items-center gap-1.5 cursor-pointer" onClick={() => setSelectedNode('jobs')}>
              <span className="w-2.5 h-2.5 rounded-full bg-[#16C79A]" /> Jobs (78%)
            </span>
            <span className="flex items-center gap-1.5 cursor-pointer" onClick={() => setSelectedNode('education')}>
              <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4]" /> Edu (70%)
            </span>
            <span className="flex items-center gap-1.5 cursor-pointer" onClick={() => setSelectedNode('healthcare')}>
              <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" /> Health (68%)
            </span>
            <span className="flex items-center gap-1.5 cursor-pointer" onClick={() => setSelectedNode('business')}>
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" /> Credit (84%)
            </span>
          </div>
        </div>

        {/* Right Column: 4 Spacious Category Cards with Matched Colors */}
        <div className="lg:col-span-7 space-y-3">
          {nodes.map((node) => {
            const isSelected = selectedNode === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                  isSelected
                    ? "bg-[#1E3E62] shadow-xl scale-[1.01]"
                    : "bg-[#1E3E62]/40 border-[#1E3E62] hover:bg-[#1E3E62]/70"
                }`}
                style={{
                  borderColor: isSelected ? node.color : "#1E3E62",
                  boxShadow: isSelected ? `0 0 16px ${node.color}33` : "none"
                }}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border"
                    style={{
                      backgroundColor: isSelected ? "#0B192C" : "rgba(30, 62, 98, 0.6)",
                      borderColor: node.color
                    }}
                  >
                    {node.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-serif text-white leading-snug">
                      {node.label}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-200 font-sans mt-0.5 leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <span
                    className="text-lg sm:text-xl font-mono font-black px-3 py-1.5 rounded-lg bg-[#0B192C] border block"
                    style={{
                      color: node.color,
                      borderColor: isSelected ? node.color : "#1E3E62"
                    }}
                  >
                    {node.percentage}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="pt-3 border-t border-[#1E3E62] text-xs font-mono text-gray-300 flex justify-between font-bold">
        <span className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: activeNode.color }}
          />
          ACTIVE SECTOR AUDIT: {activeNode.label.toUpperCase()}
        </span>
        <span style={{ color: activeNode.color }}>
          SELECTED: {activeNode.percentage}% MONOPOLY
        </span>
      </div>
    </div>
  );
}
