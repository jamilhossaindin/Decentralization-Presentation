import React from "react";
import { motion } from "motion/react";

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
      role: "Creative Director & Lead Designer",
      img: "/avatars/member1.png"
    },
    {
      num: "02",
      firstName: "DEVANSH",
      lastName: "RANA",
      id: "ID: 24GDMM102",
      role: "System Architect & Interaction Lead",
      img: "/avatars/member2.png"
    },
    {
      num: "03",
      firstName: "MEERA",
      lastName: "IYER",
      id: "ID: 24GDMM103",
      role: "Brand Strategist & Copywriter",
      img: "/avatars/member3.png"
    },
    {
      num: "04",
      firstName: "RITVIK",
      lastName: "SINGH",
      id: "ID: 24GDMM104",
      role: "Data Visualizer & Economist",
      img: "/avatars/member4.png"
    },
    {
      num: "05",
      firstName: "SANA",
      lastName: "SAPOOR",
      id: "ID: 24GDMM105",
      role: "Campaign Operations & PR Lead",
      img: "/avatars/member5.png"
    }
  ];

  return (
    <div className="w-full h-[80vh] min-h-[580px] bg-[#EBE7DF] text-black font-mono relative p-5 sm:p-6 rounded-2xl border border-black/15 shadow-sm overflow-hidden select-none flex flex-col justify-between">
      {/* Background Halftone Grid Dots (Top Right) */}
      <div className="absolute top-5 right-8 grid grid-cols-7 gap-2 opacity-25 pointer-events-none z-0">
        {Array.from({ length: 49 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-black" />
        ))}
      </div>

      {/* Background Plus Matrix (Bottom Right) */}
      <div className="absolute bottom-16 right-8 grid grid-cols-2 gap-3 text-[10px] text-black/25 font-mono pointer-events-none z-0">
        <div>+</div><div>+</div>
        <div>+</div><div>+</div>
      </div>

      {/* TOP HEADER ROW */}
      <div className="flex justify-between items-start z-10 relative">
        <div className="text-[11px] leading-tight text-gray-800">
          <p className="font-bold text-black uppercase tracking-wider">TEAM-V // GROUP PRESENTATION</p>
          <p className="text-[#1746A2] font-semibold">DEPARTMENT OF GRAPHIC DESIGN & MULTIMEDIA</p>
        </div>

        {/* Top Center Accent Bar */}
        <div className="w-16 h-2 bg-gray-300 relative overflow-hidden rounded-xs">
          <div className="w-8 h-full bg-[#1746A2] absolute left-0" />
        </div>

        {/* Top Right Academic Metadata */}
        <div className="text-right text-[10px] leading-tight font-mono text-gray-800">
          <p className="text-base leading-none text-[#1746A2] font-bold">✻</p>
          <p className="tracking-widest uppercase font-bold text-black text-[10px] mt-0.5">SHANTO-MARIAM UNIVERSITY</p>
          <p className="tracking-wider uppercase text-gray-600 text-[9px]">GRD-3216: CONTENT DESIGN</p>
        </div>
      </div>

      {/* MAIN BODY: DEDICATED TEAM-V LOGO & BRANDING STAGE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 items-center relative z-10 my-2.5">
        {/* Left Column: Team-V Typography Title & Info */}
        <div className="lg:col-span-7 space-y-2.5">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#1746A2] uppercase tracking-widest font-bold border-b-2 border-[#1746A2] pb-0.5 inline-block">
              PROJECT TEAM SHOWCASE
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-display tracking-tighter leading-none text-black uppercase relative">
              <span className="block drop-shadow-sm text-black">TEAM-V</span>
            </h1>
            <div className="w-full h-0.5 bg-black mt-1.5" />
          </div>

          <div className="space-y-2 pt-1">
            <h3 className="text-base sm:text-lg font-bold text-black font-display uppercase tracking-tight">
              CREATIVE DIGITAL STRATEGISTS & SYSTEM DESIGNERS
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono text-gray-800 pt-1">
              <div className="p-2.5 rounded-xl bg-white/80 border border-black/15 shadow-xs">
                <span className="text-[10px] text-gray-500 font-bold uppercase block">Course Module</span>
                <span className="font-bold text-black block">GRD-3216: Digital Content Design</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/80 border border-black/15 shadow-xs">
                <span className="text-[10px] text-gray-500 font-bold uppercase block">Submission Details</span>
                <span className="font-bold text-[#1746A2] block">Sat, 08 Aug 2026 @ 10:00 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: High-Res Official Team-V Logo Display */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-full h-56 sm:h-64 rounded-2xl bg-white border-2 border-black/20 p-4 shadow-md flex items-center justify-center overflow-hidden group">
            {/* Background Subtle Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-white to-blue-50/50 pointer-events-none" />
            
            {/* Corner Tech Badges */}
            <div className="absolute top-2.5 left-2.5 text-[9px] font-mono bg-black text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              OFFICIAL TEAM LOGO
            </div>
            <div className="absolute top-2.5 right-2.5 text-[9px] font-mono text-[#1746A2] font-bold">
              GROUP 05
            </div>

            {/* Official Team-V Logo Image */}
            <img
              src="/team_v_logo.png"
              alt="Team-V Official Logo"
              className="max-h-48 sm:max-h-52 w-auto object-contain relative z-10 drop-shadow-md group-hover:scale-105 transition-transform duration-300"
            />

            {/* Bottom Tagline Overlay */}
            <div className="absolute bottom-2.5 inset-x-2.5 text-center text-[9px] font-mono bg-black/80 text-white px-2 py-1 rounded font-bold uppercase tracking-widest z-10">
              TEAM-V • SHANTO-MARIAM UNIVERSITY
            </div>
          </div>
        </div>
      </div>

      {/* 5 TEAM MEMBERS ROW */}
      <div className="pt-2.5 border-t border-black/20 space-y-2.5 z-10 relative">
        <div className="flex items-center gap-2.5 text-xs font-mono">
          <span className="font-bold text-[#1746A2] uppercase tracking-wider border-b-2 border-[#1746A2] pb-0.5">
            THE 5 CREATIVE TEAM MEMBERS
          </span>
          <div className="flex-1 h-px bg-black/20" />
        </div>

        {/* 5 TEAM MEMBERS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {team.map((mem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.04, duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-1 group cursor-pointer"
            >
              {/* Member Photo Frame */}
              <div className="w-full h-20 sm:h-24 bg-gray-300 rounded-lg overflow-hidden border border-black/15 shadow-sm group-hover:border-[#1746A2] transition-colors relative">
                <img
                  src={mem.img}
                  alt={`${mem.firstName} ${mem.lastName}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute top-1 left-1 bg-black text-white text-[8px] font-mono px-1 py-0.5 rounded font-bold">
                  {mem.num}
                </div>
              </div>

              {/* Member Details */}
              <div className="space-y-0.5">
                <div className="text-[11px] font-bold font-mono text-black leading-tight truncate">
                  {mem.firstName} {mem.lastName}
                </div>
                <p className="text-[9px] font-mono text-[#1746A2] font-semibold">{mem.id}</p>
                <p className="text-[8px] font-mono text-gray-600 truncate leading-none">{mem.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER METADATA BAR */}
      <div className="pt-2 border-t border-black/15 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] font-mono text-gray-800 gap-2 z-10 relative">
        {/* Department Info */}
        <div className="flex items-center gap-2.5">
          <div className="w-5.5 h-5.5 bg-[#1746A2] rounded flex items-center justify-center text-white font-bold text-[10px]">
            V
          </div>
          <div className="leading-tight">
            <p className="font-bold text-black uppercase text-[10px]">SHANTO-MARIAM UNIVERSITY OF CREATIVE TECHNOLOGY</p>
            <p className="text-[#1746A2] font-semibold text-[9px]">DEPARTMENT OF GRAPHIC DESIGN & MULTIMEDIA • 2026</p>
          </div>
        </div>

        {/* Right Action Button */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <span className="text-xs font-mono text-gray-600 font-bold">Page 01 of 16 — Team Showcase</span>
          {onNext && (
            <button
              onClick={onNext}
              className="px-4 py-1.5 rounded-xl bg-[#1746A2] text-white font-mono text-xs font-bold flex items-center gap-2 cursor-pointer hover:bg-black transition-colors shadow-sm"
            >
              Next: Topic Cover & Overview →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
