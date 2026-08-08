import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RefreshCw, ArrowRight, AlertTriangle, Building2, Users, AlertCircle, Layers, CheckCircle2 } from "lucide-react";

interface LoopStep {
  step: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  desc: string;
  impact: string;
  stat: string;
}

export default function CentralizationLoop() {
  const [activeStep, setActiveStep] = useState(0);

  const steps: LoopStep[] = [
    {
      step: 1,
      title: "HQ & Resource Concentration",
      subtitle: "The Origin Point",
      icon: <Building2 className="w-5 h-5 text-[#16C79A]" />,
      color: "#16C79A",
      desc: "Govt ministries, MNC corporate headquarters, top tertiary hospitals, and elite universities concentrate 80%+ facilities strictly within Dhaka.",
      impact: "Creates an immediate severe deficit of high-tier services across all 63 other districts.",
      stat: "78% Corporate HQs & 84% Credit in Dhaka"
    },
    {
      step: 2,
      title: "Talent & Capital Flight",
      subtitle: "Forced Human Reaction",
      icon: <Users className="w-5 h-5 text-[#3B82F6]" />,
      color: "#3B82F6",
      desc: "Top graduates, entrepreneurs, and skilled specialists are forced to leave regional hometowns to access career advancement, healthcare, and capital.",
      impact: "Brain drain deprives regional economies of critical tax revenue, innovation, and leadership.",
      stat: "1,724+ Migrants Enter Dhaka Every 24 Hours"
    },
    {
      step: 3,
      title: "Distressed Infrastructure",
      subtitle: "The Urban Collapse",
      icon: <AlertCircle className="w-5 h-5 text-[#DC2626]" />,
      color: "#DC2626",
      desc: "Dhaka faces suffocating traffic gridlock, sky-high housing rent, severe air pollution, and catastrophic groundwater depletion.",
      impact: "Annual economic waste exceeds ৳37,000Cr to ৳40,000Cr in lost labor hours and idling fuel alone.",
      stat: "5 Million Commuter Hours Wasted Daily"
    },
    {
      step: 4,
      title: "Band-Aid Mega Projects",
      subtitle: "The Perpetuating Policy Trap",
      icon: <Layers className="w-5 h-5 text-[#F59E0B]" />,
      color: "#F59E0B",
      desc: "Policymakers react by funneling 70%+ of national infrastructure funding back into Dhaka flyovers and elevated expressways to treat symptoms.",
      impact: "Further starves regional budgets of roads, hospitals, and universities, locking the spiral forever.",
      stat: "70%+ National Urban Budget Sent to 1 Metro"
    }
  ];

  return (
    <div className="w-full flex-1 flex flex-col justify-between gap-4 font-sans text-white">
      {/* 4 Interactive Connected Feedback Stages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {steps.map((item, idx) => {
          const isSelected = activeStep === idx;
          return (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 relative overflow-hidden ${
                isSelected
                  ? "bg-[#1E3E62] border-[#16C79A] shadow-xl scale-[1.01] ring-1 ring-[#16C79A]/50"
                  : "bg-[#0B192C]/80 border-[#1E3E62] hover:bg-[#1E3E62]/60"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className={`text-xs font-mono font-extrabold px-2.5 py-0.5 rounded ${isSelected ? "bg-[#16C79A] text-black" : "bg-[#1E3E62] text-[#16C79A] border border-[#1E3E62]"}`}>
                  STAGE 0{item.step}
                </span>
                <span className="p-1.5 rounded-lg bg-[#0B192C] border border-[#1E3E62]">
                  {item.icon}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-gray-300 font-bold uppercase tracking-wider block">
                  {item.subtitle}
                </span>
                <h4 className="text-base font-bold font-serif leading-snug text-white mt-0.5">
                  {item.title}
                </h4>
              </div>

              <p className="text-xs text-gray-200 leading-relaxed font-sans">
                {item.desc}
              </p>

              <div className="pt-2 border-t border-[#1E3E62] space-y-1">
                <span className="text-[10px] font-mono text-[#DC2626] font-bold block uppercase">
                  LOCAL IMPACT:
                </span>
                <p className="text-xs text-gray-300 font-sans leading-tight">
                  {item.impact}
                </p>
              </div>

              <div className="pt-1 text-[11px] font-mono font-bold text-[#16C79A]">
                {item.stat}
              </div>
            </div>
          );
        })}
      </div>

      {/* Central Feedback Loop Visual Connector Bar */}
      <div className="p-4 rounded-2xl bg-[#0B192C] border border-[#1E3E62] shadow-xl flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1E3E62] border border-[#16C79A]/40 flex items-center justify-center text-[#16C79A] flex-shrink-0">
            <RefreshCw className="w-5 h-5 animate-spin" style={{ animationDuration: "14s" }} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#16C79A] uppercase tracking-wider">
                FEEDBACK DIAGRAM:
              </span>
              <span className="text-xs font-mono font-bold text-white">
                STAGE 0{steps[activeStep].step} ➔ {steps[activeStep].title}
              </span>
            </div>
            <p className="text-xs text-gray-300 font-sans mt-0.5">
              Each stage directly causes the next. Capital flight creates gridlock, which triggers mega-budgets, starving 63 districts.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-gray-300 bg-[#1E3E62]/60 px-3 py-1.5 rounded-xl border border-[#1E3E62] whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
          <span>STATUS: UNBROKEN CENTRALIZATION CYCLE</span>
        </div>
      </div>

      {/* Bottom Solution & Policy Action Banner */}
      <div className="p-4 rounded-2xl bg-[#1E3E62]/80 border border-[#16C79A]/60 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#16C79A]/20 border border-[#16C79A] flex items-center justify-center text-[#16C79A] flex-shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold font-mono text-[#16C79A] uppercase tracking-wider">
              HOW TO BREAK THE SPIRAL? (SYSTEMIC DECENTRALIZATION)
            </h4>
            <p className="text-xs sm:text-sm text-white font-sans">
              Provide corporate tax holidays outside Dhaka, build regional ICU hubs, and mandate 50% bank lending in 63 districts.
            </p>
          </div>
        </div>

        <span className="text-xs sm:text-sm font-mono font-extrabold text-black bg-[#16C79A] px-4 py-2 rounded-xl shadow-md whitespace-nowrap">
          POLICY: MOVE OPPORTUNITY, NOT PEOPLE
        </span>
      </div>
    </div>
  );
}
