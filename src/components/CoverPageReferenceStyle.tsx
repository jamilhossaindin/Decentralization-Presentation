import React from "react";

interface CoverPageProps {
  onNext?: () => void;
}

export default function CoverPageReferenceStyle({ onNext }: CoverPageProps) {
  const team = [
    {
      num: "01",
      firstName: "AARYA",
      lastName: "PRAJAPATI",
      id: "ID: 24GDMM101",
      img: "/avatars/member1.png"
    },
    {
      num: "02",
      firstName: "DEVANSH",
      lastName: "RANA",
      id: "ID: 24GDMM102",
      img: "/avatars/member2.png"
    },
    {
      num: "03",
      firstName: "MEERA",
      lastName: "IYER",
      id: "ID: 24GDMM103",
      img: "/avatars/member3.png"
    },
    {
      num: "04",
      firstName: "RITVIK",
      lastName: "SINGH",
      id: "ID: 24GDMM104",
      img: "/avatars/member4.png"
    },
    {
      num: "05",
      firstName: "SANA",
      lastName: "SAPOOR",
      id: "ID: 24GDMM105",
      img: "/avatars/member5.png"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto bg-[#EBE7DF] text-black font-mono relative p-6 sm:p-8 rounded-2xl border border-black/15 shadow-sm overflow-hidden select-none">
      {/* Background Halftone Grid Dots (Top Right) */}
      <div className="absolute top-6 right-8 grid grid-cols-7 gap-2 opacity-30 pointer-events-none z-0">
        {Array.from({ length: 49 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-black" />
        ))}
      </div>

      {/* Background Plus Matrix (Bottom Right) */}
      <div className="absolute bottom-16 right-8 grid grid-cols-2 gap-3 text-[10px] text-black/30 font-mono pointer-events-none z-0">
        <div>+</div><div>+</div>
        <div>+</div><div>+</div>
        <div>+</div><div>+</div>
      </div>

      {/* TOP HEADER ROW */}
      <div className="flex justify-between items-start z-10 relative mb-4">
        <div className="text-[11px] leading-tight text-gray-800">
          <p>GROUP PROJECT</p>
          <p>TEAM PAGE</p>
        </div>

        {/* Top Center Accent Bar */}
        <div className="w-16 h-2 bg-gray-300 relative overflow-hidden rounded-xs">
          <div className="w-8 h-full bg-[#1746A2] absolute left-0" />
        </div>

        {/* Top Right Vertical Code */}
        <div className="text-right text-[10px] leading-tight font-mono text-gray-800">
          <p className="text-xl leading-none">✻</p>
          <p className="tracking-widest uppercase text-gray-500 text-[9px] mt-1">ST1556A SHAM65</p>
          <p className="tracking-wider uppercase text-gray-600 text-[9px]">THROUGH DIGITAL MARKETING</p>
        </div>
      </div>

      {/* MAIN BODY: TYPOGRAPHY TITLE & ABSTRACT NETWORK ART COLLAGE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10 my-4">
        {/* Left Column: Stacked Title & Sub-Text */}
        <div className="lg:col-span-7 space-y-4">
          <div className="space-y-0">
            {/* Textured Display Title */}
            <h1 className="text-6xl sm:text-8xl font-black font-display tracking-tighter leading-none text-black uppercase relative">
              <span className="block drop-shadow-sm">DECEN</span>
              <span className="block drop-shadow-sm">TRAL</span>
              <span className="block drop-shadow-sm">IZATION</span>
            </h1>
            <div className="w-full h-0.5 bg-black mt-2" />
          </div>

          <div className="flex items-start gap-8 pt-1">
            <div className="text-xs font-mono font-bold leading-snug uppercase text-black max-w-xs">
              <p>A STUDY ON</p>
              <p>DISTRIBUTED STRUCTURES</p>
              <p>AND COLLECTIVE CONTROL</p>
            </div>
          </div>
        </div>

        {/* Center Definition Text */}
        <div className="lg:col-span-2 space-y-1 text-[11px] font-mono leading-tight text-gray-800 pt-2 border-l border-black/10 pl-4 hidden xl:block">
          <p className="text-lg leading-none font-bold text-black">—</p>
          <p>A system or</p>
          <p>organization</p>
          <p>not controlled</p>
          <p>by a single entity.</p>
        </div>

        {/* Right Column: Abstract Geometric Network Graph Collage */}
        <div className="lg:col-span-5 xl:col-span-3 flex justify-center relative">
          <div className="relative w-full h-64 sm:h-72 rounded-xl bg-[#E2DDD3] border border-black/15 overflow-hidden shadow-inner flex items-center justify-center">
            {/* Top Right Royal Blue Block */}
            <div className="absolute top-2 right-4 w-24 h-24 bg-[#1746A2] rounded-md shadow-md transform rotate-1" />

            {/* Lower Right Orange/Red Block */}
            <div className="absolute bottom-4 right-8 w-28 h-20 bg-[#EA580C] rounded-md shadow-md" />

            {/* Black Textured Photo Cutout Blocks */}
            <div className="absolute top-10 left-6 w-16 h-16 bg-black rounded border border-white/20 shadow-lg" />
            <div className="absolute bottom-6 left-12 w-20 h-20 bg-gray-900 rounded border border-white/20 shadow-lg" />

            {/* SVG Network Nodes & Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full text-black pointer-events-none" viewBox="0 0 200 200">
              <line x1="30" y1="50" x2="160" y2="40" stroke="black" strokeWidth="1.5" />
              <line x1="160" y1="40" x2="170" y2="150" stroke="black" strokeWidth="1.5" />
              <line x1="30" y1="50" x2="80" y2="130" stroke="black" strokeWidth="1.5" />
              <line x1="80" y1="130" x2="170" y2="150" stroke="black" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="120" y1="90" x2="170" y2="40" stroke="black" strokeWidth="1.2" />

              {/* Black Node Circles */}
              <circle cx="30" cy="50" r="6" fill="black" stroke="white" strokeWidth="1.5" />
              <circle cx="160" cy="40" r="7" fill="black" stroke="white" strokeWidth="1.5" />
              <circle cx="80" cy="130" r="7" fill="black" stroke="white" strokeWidth="1.5" />
              <circle cx="170" cy="150" r="8" fill="black" stroke="white" strokeWidth="1.5" />
              <circle cx="120" cy="90" r="5" fill="#1746A2" stroke="white" strokeWidth="1" />
            </svg>

            {/* Overlay Caption */}
            <div className="absolute bottom-2 left-2 text-[9px] font-mono bg-black/80 text-white px-2 py-0.5 rounded">
              NETWORK GRAPH // NODES
            </div>
          </div>
        </div>
      </div>

      {/* TEAM FIVE ROW HEADER */}
      <div className="pt-4 border-t border-black/20 space-y-3 z-10 relative">
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="font-bold text-[#1746A2] uppercase tracking-wider border-b-2 border-[#1746A2] pb-0.5">
            TEAM FIVE
          </span>
          <div className="flex-1 h-px bg-black/20" />
        </div>

        {/* 5 TEAM MEMBERS ROW (EXACT NAMES & IDs FROM REFERENCE IMAGE) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {team.map((mem, idx) => (
            <div key={idx} className="space-y-2 group">
              {/* Member Photo Frame */}
              <div className="w-full h-32 bg-gray-300 rounded-lg overflow-hidden border border-black/15 shadow-sm group-hover:border-[#1746A2] transition-colors">
                <img
                  src={mem.img}
                  alt={`${mem.firstName} ${mem.lastName}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Member Details */}
              <div className="space-y-0.5">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-sm font-bold font-mono text-[#1746A2]">{mem.num}</span>
                  <div className="text-xs font-bold font-mono text-black leading-tight">
                    <p>{mem.firstName}</p>
                    <p>{mem.lastName}</p>
                  </div>
                </div>

                <div className="pt-1">
                  <p className="text-[10px] font-mono text-gray-700">{mem.id}</p>
                  <div className="w-8 h-0.5 bg-[#1746A2] mt-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER METADATA BAR */}
      <div className="pt-6 mt-4 border-t border-black/15 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] font-mono text-gray-800 gap-4 z-10 relative">
        {/* Department Info */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white font-bold text-xs">
            in
          </div>
          <div>
            <p className="font-bold text-black uppercase">DEPARTMENT OF GRAPHIC DESIGN & MULTIMEDIA</p>
            <p className="text-[#1746A2] font-semibold">SCHOOL OF DESIGN STUDIES</p>
            <p className="text-gray-600">2024 - 2025</p>
          </div>
        </div>

        {/* Center Tagline */}
        <div className="hidden md:block text-gray-700 leading-tight border-l border-black/15 pl-4">
          <p className="font-bold text-black">VISUALIZING SYSTEMS.</p>
          <p>EMPOWERING COLLECTIVES.</p>
        </div>

        {/* Right Coordinates & Barcode */}
        <div className="flex items-center gap-4">
          {/* Barcode Strip */}
          <div className="font-mono text-xs tracking-tighter text-black select-none opacity-80">
            ||| | |||| | ||| ||||
          </div>

          <div className="text-right leading-tight font-bold text-black">
            <p>23.0225° N</p>
            <p>72.5714° E</p>
          </div>

          {onNext && (
            <button
              onClick={onNext}
              className="ml-2 px-4 py-2 rounded-xl bg-[#1746A2] text-white text-xs font-mono font-bold hover:bg-black transition-colors cursor-pointer"
            >
              Page 02 →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
