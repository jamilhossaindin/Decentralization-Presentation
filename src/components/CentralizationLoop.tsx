import React, { useState } from "react";
import { motion } from "motion/react";
import { RefreshCw, ArrowRight, AlertTriangle } from "lucide-react";

interface LoopStep {
  step: number;
  title: string;
  desc: string;
  impact: string;
}

export default function CentralizationLoop() {
  const [activeStep, setActiveStep] = useState(0);

  const steps: LoopStep[] = [
    {
      step: 1,
      title: "HQ & Resource Concentration",
      desc: "Govt HQs, multi-nationals, specialized hospitals & top universities locate 80%+ facilities in Dhaka.",
      impact: "Creates immediate deficit of high-tier services across 63 other districts."
    },
    {
      step: 2,
      title: "Talent & Capital Flight",
      desc: "Top graduates and business owners leave regional districts to access jobs and capital in Dhaka.",
      impact: "Brain drain deprives local districts of innovation and tax revenue."
    },
    {
      step: 3,
      title: "Distressed Infrastructure",
      desc: "Dhaka faces severe traffic congestion, housing inflations, and groundwater depletion.",
      impact: "Daily economic waste exceeds ৳380M+ in traffic delays alone."
    },
    {
      step: 4,
      title: "Band-Aid Mega Projects",
      desc: "Policymakers allocate 70%+ infrastructure budget back to Dhaka to relieve overcrowding.",
      impact: "Further starves regional budgets, restarting the feedback loop."
    }
  ];

  return (
    <div className="w-full space-y-4 my-2 font-sans">
      <div className="flex items-center justify-between border-b border-black/10 pb-2">
        <div className="flex items-center gap-2">
          <RefreshCw className="w-4 h-4 text-[#1746A2] animate-spin" style={{ animationDuration: "12s" }} />
          <span className="text-xs font-mono uppercase font-bold text-gray-800">
            THE SELF-REINFORCING FEEDBACK ENGINE
          </span>
        </div>
        <span className="text-xs font-mono text-[#DC2626] font-bold">CLOSED SPIRAL</span>
      </div>

      {/* 4 Step Sequential Loop Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {steps.map((item, idx) => {
          const isSelected = activeStep === idx;
          return (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 relative overflow-hidden ${
                isSelected
                  ? "bg-[#1746A2] text-white border-[#1746A2] shadow-md scale-[1.02]"
                  : "bg-white text-black border-black/15 hover:border-black/40 hover:bg-black/5"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${isSelected ? "bg-white text-[#1746A2]" : "bg-black/10 text-black"}`}>
                  0{item.step}
                </span>
                {idx < steps.length - 1 && (
                  <ArrowRight className={`w-4 h-4 hidden lg:block ${isSelected ? "text-white" : "text-gray-400"}`} />
                )}
              </div>

              <h4 className="text-sm font-bold font-serif leading-snug">{item.title}</h4>
              <p className={`text-xs ${isSelected ? "text-white/90" : "text-gray-600"} leading-relaxed`}>{item.desc}</p>

              <div className={`pt-2 border-t text-[10px] font-mono ${isSelected ? "border-white/20 text-emerald-200" : "border-black/10 text-[#DC2626]"} font-bold`}>
                IMPACT: {item.impact}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Summary Banner */}
      <div className="p-4 rounded-2xl bg-white border border-black/15 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-100 border border-red-300 flex items-center justify-center text-[#DC2626]">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold font-mono text-black uppercase">HOW TO BREAK THE SPIRAL?</h4>
            <p className="text-xs text-gray-700">Decentralize high-tier education, corporate taxes, and ICU hospitals to regional hubs.</p>
          </div>
        </div>

        <span className="text-xs font-mono font-bold text-[#1746A2] whitespace-nowrap bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200">
          SOLUTION: MOVE OPPORTUNITY, NOT PEOPLE
        </span>
      </div>
    </div>
  );
}
