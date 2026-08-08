import React, { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  HeartPulse,
  Sparkles,
  CheckCircle2,
  XCircle
} from "lucide-react";

interface ComparisonPillar {
  id: string;
  pillar: string;
  icon: React.ReactNode;
  wrongApproach: {
    title: string;
    action: string;
    cost: string;
    result: string;
  };
  structuralFix: {
    title: string;
    action: string;
    impact: string;
    result: string;
  };
}

export default function ParadigmShiftVisual() {
  const [activePillarId, setActivePillarId] = useState<string>("jobs");

  const pillars: ComparisonPillar[] = [
    {
      id: "jobs",
      pillar: "Jobs & Corporate Economy",
      icon: <Briefcase className="w-4 h-4" />,
      wrongApproach: {
        title: "Legacy Symptom Treatment",
        action: "Building more flyovers & elevated expressways in Dhaka to handle corporate crowding.",
        cost: "৳45,000+ Cr spent on capital roads",
        result: "More businesses crowd into Dhaka; traffic gridlock worsens."
      },
      structuralFix: {
        title: "Decentralized Opportunity Root",
        action: "Corporate tax holidays & fiber broadband to set up divisional headquarters in Rajshahi, Sylhet & Khulna.",
        impact: "78% formal private jobs distributed nationwide",
        result: "Youth build high-paying careers in their hometowns; Dhaka pressure drops immediately."
      }
    },
    {
      id: "education",
      pillar: "Higher Education & Research",
      icon: <GraduationCap className="w-4 h-4" />,
      wrongApproach: {
        title: "Legacy Symptom Treatment",
        action: "Forcing all 18-year-old GPA 5.0 scholars into central coaching centers and capital campuses.",
        cost: "70% regional youth brain drain",
        result: "Divisional university campuses underfunded; students forced to pay Dhaka hostel rents."
      },
      structuralFix: {
        title: "Decentralized Opportunity Root",
        action: "Investing in autonomous Tier-1 research labs & specialized faculties in divisional universities.",
        impact: "Retains 80%+ top academic talent in home divisions",
        result: "Regional innovation clusters flourish; family living costs drop by 65%."
      }
    },
    {
      id: "healthcare",
      pillar: "Specialized Healthcare & ICU",
      icon: <HeartPulse className="w-4 h-4" />,
      wrongApproach: {
        title: "Legacy Symptom Treatment",
        action: "Building massive super-specialized hospitals exclusively within Dhaka city limits.",
        cost: "8-hour ambulance travel time from districts",
        result: "Critical patients lose life in traffic transit; regional clinics left without specialists."
      },
      structuralFix: {
        title: "Decentralized Opportunity Root",
        action: "Equipping 8 divisional medical college hospitals with advanced cardiac, oncology & ICU units.",
        impact: "90% emergency cases treated within 45 minutes locally",
        result: "Zero forced medical migration; life-saving care accessible to every citizen at home."
      }
    }
  ];

  const activePillar = pillars.find((p) => p.id === activePillarId) || pillars[0];

  return (
    <div className="w-full flex-1 flex flex-col justify-between gap-4 font-sans text-white">
      {/* 1. TOP HERO: CORE THESIS CALLOUT */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#0B192C] border border-[#1E3E62] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#16C79A]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-left">
            <span className="text-xs font-mono text-[#16C79A] font-bold uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              THE PARADIGM SHIFT IN BANGLADESH URBAN POLICY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-white leading-tight">
              We Have Been Solving the <span className="text-[#16C79A]">Wrong Problem</span>
            </h2>
            <p className="text-sm sm:text-base italic text-[#16C79A] font-serif font-bold pt-0.5">
              “People don’t move because they love cities. They move because opportunity moves first.”
            </p>
          </div>

          <div className="flex-shrink-0 bg-[#000000]/80 p-3 rounded-xl border border-[#1E3E62] text-right">
            <span className="text-xs font-mono text-gray-300 font-bold block">
              POLICY PRINCIPLE
            </span>
            <span className="text-sm font-mono font-black text-[#16C79A]">
              ANCHOR THE OPPORTUNITY
            </span>
          </div>
        </div>
      </div>

      {/* 2. PILLAR SELECTOR TABS */}
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="text-xs font-mono text-gray-300 font-bold uppercase tracking-wider mr-1">
          INSPECT POLICY DOMAIN:
        </span>
        {pillars.map((p) => {
          const isSelected = p.id === activePillarId;
          return (
            <button
              key={p.id}
              onClick={() => setActivePillarId(p.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold flex items-center gap-2 cursor-pointer transition-all border ${
                isSelected
                  ? "bg-[#1E3E62] border-[#16C79A] text-white shadow-md ring-1 ring-[#16C79A]"
                  : "bg-[#0B192C] border-[#1E3E62] text-gray-300 hover:bg-[#1E3E62]/50"
              }`}
            >
              <span className={isSelected ? "text-[#16C79A]" : "text-gray-400"}>
                {p.icon}
              </span>
              <span>{p.pillar}</span>
            </button>
          );
        })}
      </div>

      {/* 3. CENTERPIECE: SIDE-BY-SIDE VISUAL CONTRAST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {/* LEFT BOX: THE FLAWED LEGACY APPROACH */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0B192C] border border-[#DC2626]/40 shadow-xl flex flex-col justify-between space-y-3 relative overflow-hidden">
          <div className="space-y-2.5">
            <div className="flex justify-between items-center border-b border-[#DC2626]/30 pb-2">
              <span className="text-xs font-mono text-[#DC2626] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-[#DC2626]" />
                THE FLAWED LEGACY THINKING (SYMPTOMS)
              </span>
              <span className="text-xs font-mono text-[#DC2626] bg-[#DC2626]/10 px-2.5 py-0.5 rounded border border-[#DC2626]/30 font-bold">
                FAILS OVER TIME
              </span>
            </div>

            <h3 className="text-lg font-bold font-serif text-white">
              {activePillar.wrongApproach.title}
            </h3>

            <div className="p-3 rounded-xl bg-[#000000]/60 border border-[#1E3E62] space-y-1">
              <span className="text-[11px] font-mono text-gray-400 uppercase font-bold block">
                WHAT POLICYMAKERS DID:
              </span>
              <p className="text-xs sm:text-sm text-gray-200 font-sans leading-relaxed">
                {activePillar.wrongApproach.action}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#DC2626]/10 border border-[#DC2626]/30 space-y-1">
              <span className="text-[11px] font-mono text-[#DC2626] uppercase font-bold block">
                RESOURCE ALLOCATION DRAIN:
              </span>
              <p className="text-xs sm:text-sm font-bold text-white font-mono">
                {activePillar.wrongApproach.cost}
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-[#1E3E62] flex items-center justify-between text-xs font-mono">
            <span className="text-gray-400">UNINTENDED RESULT:</span>
            <span className="text-[#DC2626] font-bold">{activePillar.wrongApproach.result}</span>
          </div>
        </div>

        {/* RIGHT BOX: THE DECENTRALIZED STRUCTURAL REALITY */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0B192C] border border-[#16C79A]/40 shadow-xl flex flex-col justify-between space-y-3 relative overflow-hidden">
          <div className="space-y-2.5">
            <div className="flex justify-between items-center border-b border-[#16C79A]/30 pb-2">
              <span className="text-xs font-mono text-[#16C79A] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16C79A]" />
                THE DECENTRALIZED REALITY (ROOT CAUSE)
              </span>
              <span className="text-xs font-mono text-[#16C79A] bg-[#16C79A]/10 px-2.5 py-0.5 rounded border border-[#16C79A]/30 font-bold">
                SUSTAINABLE FIX
              </span>
            </div>

            <h3 className="text-lg font-bold font-serif text-white">
              {activePillar.structuralFix.title}
            </h3>

            <div className="p-3 rounded-xl bg-[#000000]/60 border border-[#1E3E62] space-y-1">
              <span className="text-[11px] font-mono text-gray-400 uppercase font-bold block">
                WHAT ACTUALLY WORKS:
              </span>
              <p className="text-xs sm:text-sm text-gray-200 font-sans leading-relaxed">
                {activePillar.structuralFix.action}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#16C79A]/10 border border-[#16C79A]/30 space-y-1">
              <span className="text-[11px] font-mono text-[#16C79A] uppercase font-bold block">
                MEASURABLE OUTCOME:
              </span>
              <p className="text-xs sm:text-sm font-bold text-white font-mono">
                {activePillar.structuralFix.impact}
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-[#1E3E62] flex items-center justify-between text-xs font-mono">
            <span className="text-gray-400">LONG-TERM BENEFIT:</span>
            <span className="text-[#16C79A] font-bold">{activePillar.structuralFix.result}</span>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM TAKEAWAY FOOTER */}
      <div className="p-3 sm:p-3.5 rounded-xl bg-[#0B192C] border border-[#1E3E62] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-gray-300 font-bold">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#16C79A] animate-pulse" />
          CORE LESSON: MIGRATION IS A SYMPTOM OF SPATIAL RESOURCE MONOPOLY, NOT URBAN PREFERENCE.
        </span>
        <span className="text-[#16C79A]">
          POLICY TARGET: 8 DIVISIONAL GROWTH ENGINES
        </span>
      </div>
    </div>
  );
}
