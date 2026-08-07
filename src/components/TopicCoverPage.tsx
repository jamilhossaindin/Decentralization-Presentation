import React from "react";

interface TopicCoverPageProps {
  onNext?: () => void;
}

export default function TopicCoverPage({ onNext }: TopicCoverPageProps) {
  return (
    <div className="w-full h-[80vh] min-h-[580px] bg-[#EBE7DF] text-black font-mono relative p-5 sm:p-6 rounded-2xl border border-black/15 shadow-sm overflow-hidden select-none flex flex-col justify-between">
      {/* Background Halftone Grid Dots (Top Right) */}
      <div className="absolute top-5 right-8 grid grid-cols-7 gap-2 opacity-25 pointer-events-none z-0">
        {Array.from({ length: 49 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-black" />
        ))}
      </div>

      {/* TOP HEADER ROW */}
      <div className="flex justify-between items-start z-10 relative">
        <div className="space-y-1">
          <span className="text-xs font-mono text-[#1746A2] font-bold uppercase tracking-widest border-b-2 border-[#1746A2] pb-0.5 inline-block">
            02. TOPIC COVER & EXECUTIVE CAMPAIGN PROPOSAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-black leading-tight">
            Digital Marketing Campaign for <span className="text-[#1746A2]">Social Change</span>
          </h2>
        </div>

        <div className="text-right text-[10px] leading-tight font-mono text-gray-800 hidden sm:block">
          <p className="font-bold text-black uppercase">PRESENTATION TOPIC</p>
          <p className="text-[#1746A2] font-semibold text-[9px]">DECENTRALIZATION OF BANGLADESH</p>
        </div>
      </div>

      {/* MAIN BODY: TYPOGRAPHY TITLE & ABSTRACT NETWORK ART COLLAGE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 items-center relative z-10 my-2.5">
        {/* Left Column: Stacked Title & Sub-Text */}
        <div className="lg:col-span-7 space-y-2.5">
          <div className="space-y-0">
            {/* Textured Display Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tighter leading-none text-black uppercase relative">
              <span className="block drop-shadow-sm">DECEN</span>
              <span className="block drop-shadow-sm text-[#1746A2]">TRAL</span>
              <span className="block drop-shadow-sm">IZATION</span>
            </h1>
            <div className="w-full h-0.5 bg-black mt-1.5" />
          </div>

          <div className="space-y-1.5 pt-1">
            <div className="text-sm font-mono font-bold leading-snug uppercase text-black">
              <p>A STUDY ON DISTRIBUTED STRUCTURES & COLLECTIVE CONTROL</p>
            </div>

            <p className="text-xs text-gray-700 font-sans leading-relaxed">
              Campaign Tagline: <strong className="text-[#1746A2]">"Desher Chabi Aponar Hate / Move Opportunity, Not People"</strong>
            </p>
          </div>
        </div>

        {/* Right Column: Abstract Geometric Network Graph Collage */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-full h-48 sm:h-56 rounded-xl bg-[#E2DDD3] border border-black/15 overflow-hidden shadow-inner flex items-center justify-center">
            {/* Top Right Royal Blue Block */}
            <div className="absolute top-3 right-6 w-24 h-24 bg-[#1746A2] rounded-md shadow-md transform rotate-1 opacity-90" />

            {/* Lower Right Orange/Red Block */}
            <div className="absolute bottom-4 right-8 w-28 h-20 bg-[#DC2626] rounded-md shadow-md opacity-90" />

            {/* Black Textured Photo Cutout Blocks */}
            <div className="absolute top-10 left-8 w-16 h-16 bg-black rounded border border-white/20 shadow-lg" />
            <div className="absolute bottom-6 left-12 w-20 h-20 bg-gray-900 rounded border border-white/20 shadow-lg" />

            {/* SVG Network Nodes & Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full text-black pointer-events-none" viewBox="0 0 240 240">
              <line x1="40" y1="60" x2="190" y2="50" stroke="black" strokeWidth="1.8" />
              <line x1="190" y1="50" x2="200" y2="180" stroke="black" strokeWidth="1.8" />
              <line x1="40" y1="60" x2="100" y2="150" stroke="black" strokeWidth="1.8" />
              <line x1="100" y1="150" x2="200" y2="180" stroke="black" strokeWidth="1.8" strokeDasharray="4 4" />
              <line x1="140" y1="110" x2="190" y2="50" stroke="black" strokeWidth="1.5" />

              {/* Black Node Circles */}
              <circle cx="40" cy="60" r="7" fill="black" stroke="white" strokeWidth="1.5" />
              <circle cx="190" cy="50" r="8" fill="black" stroke="white" strokeWidth="1.5" />
              <circle cx="100" cy="150" r="8" fill="black" stroke="white" strokeWidth="1.5" />
              <circle cx="200" cy="180" r="9" fill="black" stroke="white" strokeWidth="1.5" />
              <circle cx="140" cy="110" r="6" fill="#1746A2" stroke="white" strokeWidth="1.2" />
            </svg>

            {/* Overlay Caption */}
            <div className="absolute bottom-2.5 left-2.5 text-[9px] font-mono bg-black/80 text-white px-2 py-0.5 rounded font-bold uppercase">
              NETWORK GRAPH // DECENTRALIZED DELTA
            </div>
          </div>
        </div>
      </div>

      {/* 3 CORE PILLARS OF CAMPAIGN */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 z-10 relative">
        <div className="p-3.5 rounded-2xl bg-white border border-black/15 space-y-1.5 shadow-sm">
          <span className="text-[10px] font-mono text-[#1746A2] font-bold uppercase tracking-wider block">1. IDENTIFY ISSUE</span>
          <h3 className="text-sm font-bold text-black font-display">Urban Centralization</h3>
          <p className="text-xs text-gray-600 font-sans leading-relaxed">
            36.6M+ citizens squeezed into 0.2% of national land while 63 regional districts lack opportunities.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-black/15 space-y-1.5 shadow-sm">
          <span className="text-[10px] font-mono text-[#DC2626] font-bold uppercase tracking-wider block">2. INSPIRE CHANGE</span>
          <h3 className="text-sm font-bold text-black font-display">"Move Opportunity, Not People"</h3>
          <p className="text-xs text-gray-600 font-sans leading-relaxed">
            Advocate for corporate tax holidays, BUET divisional branches, and high-speed regional tech hubs.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-black/15 space-y-1.5 shadow-sm">
          <span className="text-[10px] font-mono text-[#1746A2] font-bold uppercase tracking-wider block">3. DESIGN CAMPAIGN</span>
          <h3 className="text-sm font-bold text-black font-display">Omnichannel Digital Mix</h3>
          <p className="text-xs text-gray-600 font-sans leading-relaxed">
            Viral short videos, interactive website simulator, digital petitions, and campus activation stalls.
          </p>
        </div>
      </div>

      {/* FOOTER METADATA BAR */}
      <div className="pt-2 border-t border-black/15 flex justify-between items-center z-10 relative">
        <span className="text-xs font-mono text-gray-600 font-bold">Page 02 of 16 — Topic Cover & Executive Summary</span>
        {onNext && (
          <button
            onClick={onNext}
            className="px-4 py-1.5 rounded-xl bg-[#1746A2] text-white font-mono text-xs font-bold flex items-center gap-2 cursor-pointer hover:bg-black transition-colors shadow-sm"
          >
            Next: Social Context →
          </button>
        )}
      </div>
    </div>
  );
}
