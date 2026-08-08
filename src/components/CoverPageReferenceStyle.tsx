import React from "react";
import { motion } from "motion/react";

interface CoverPageProps {
  onNext?: () => void;
}

export default function CoverPageReferenceStyle({ onNext }: CoverPageProps) {
  const team = [
    {
      num: "01",
      firstName: "SUMIT",
      lastName: "ZAMAN",
      id: "ID: 222031003",
      img: "/avatars/member1.png"
    },
    {
      num: "02",
      firstName: "NABILA",
      lastName: "TABASSUM",
      id: "ID: 222031008",
      img: "/avatars/member2.png"
    },
    {
      num: "03",
      firstName: "NILOY",
      lastName: "DAS",
      id: "ID: 222031009",
      img: "/avatars/member3.png"
    },
    {
      num: "04",
      firstName: "NAZMUS",
      lastName: "SADAT",
      id: "ID: 222031027",
      img: "/avatars/member4.png"
    },
    {
      num: "05",
      firstName: "JAMIL",
      lastName: "HOSSAIN",
      id: "ID: 222021040",
      img: "/avatars/member5.png"
    }
  ];

  return (
    <div className="w-full h-[86vh] min-h-[660px] bg-[#000000] text-white font-mono relative p-5 sm:p-6 rounded-2xl border border-[#1E3E62] shadow-xl overflow-hidden flex flex-col justify-between">
      {/* Background Halftone Grid Dots (Top Right) */}
      <div className="absolute top-5 right-8 grid grid-cols-7 gap-2 opacity-20 pointer-events-none z-0">
        {Array.from({ length: 49 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-[#16C79A]" />
        ))}
      </div>

      {/* TOP HEADER ROW */}
      <div className="flex justify-between items-start z-10 relative">
        <div className="text-sm leading-tight text-white">
          <p className="font-bold text-[#16C79A] uppercase tracking-wider">TEAM-V // GROUP PRESENTATION</p>
          <p className="text-gray-300 font-semibold">DEPARTMENT OF GRAPHIC DESIGN & MULTIMEDIA</p>
        </div>

        {/* Top Center Accent Bar */}
        <div className="w-16 h-2 bg-[#0B192C] relative overflow-hidden rounded-xs border border-[#1E3E62]">
          <div className="w-8 h-full bg-[#16C79A] absolute left-0" />
        </div>

        {/* Top Right Academic Metadata */}
        <div className="text-right text-sm leading-tight font-mono text-white">
          <p className="text-base leading-none text-[#16C79A] font-bold">✻</p>
          <p className="tracking-widest uppercase font-bold text-[#16C79A] text-sm mt-0.5">SHANTO-MARIAM UNIVERSITY</p>
          <p className="tracking-wider uppercase text-gray-300 text-sm">GRD-3216: CONTENT DESIGN</p>
        </div>
      </div>

      {/* MAIN BODY: DEDICATED TEAM-V LOGO & BRANDING STAGE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center relative z-10 my-1">
        {/* Left Column: Team-V Typography Title & Info */}
        <div className="lg:col-span-7 space-y-2">
          <div className="space-y-0">
            <h1 className="text-[52px] sm:text-[58px] font-black font-display tracking-tighter leading-none text-[#16C79A] uppercase relative">
              <span className="block drop-shadow-md text-[#16C79A]">TEAM-V</span>
            </h1>
            <div className="w-full h-0.5 bg-[#1E3E62] mt-1" />
          </div>

          <div className="space-y-1.5 pt-0.5">
            <h3 className="text-sm sm:text-base font-bold text-[#16C79A] font-display uppercase tracking-tight">
              CREATIVE DIGITAL STRATEGISTS & SYSTEM DESIGNERS
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-white pt-0.5">
              <div className="p-2 rounded-xl bg-[#0B192C] border border-[#1E3E62] shadow-xs">
                <span className="text-xs text-gray-400 font-bold uppercase block">Course Module</span>
                <span className="font-bold text-white block">GRD-3216: Digital Content Design</span>
              </div>
              <div className="p-2 rounded-xl bg-[#0B192C] border border-[#1E3E62] shadow-xs">
                <span className="text-xs text-gray-400 font-bold uppercase block">Submission Details</span>
                <span className="font-bold text-[#16C79A] block">Sat, 08 Aug 2026 @ 10:00 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: High-Res Official Team-V Logo Display */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-full h-44 sm:h-48 rounded-2xl bg-[#0B192C] border-2 border-[#1E3E62] p-3 shadow-xl flex items-center justify-center overflow-hidden group">
            {/* Corner Tech Badges */}
            <div className="absolute top-2 left-2 text-xs font-mono bg-[#000000] text-[#16C79A] border border-[#1E3E62] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              OFFICIAL TEAM LOGO
            </div>
            <div className="absolute top-2 right-2 text-xs font-mono text-[#16C79A] font-bold">
              GROUP 05
            </div>

            {/* Official Team-V Logo Image */}
            <img
              src="/team_v_logo.png"
              alt="Team-V Official Logo"
              className="max-h-36 sm:max-h-40 w-auto object-contain relative z-10 drop-shadow-md group-hover:scale-105 transition-transform duration-300"
            />

            {/* Bottom Tagline Overlay */}
            <div className="absolute bottom-2 inset-x-2 text-center text-xs font-mono bg-[#000000]/90 text-white border border-[#1E3E62] px-2 py-0.5 rounded font-bold uppercase tracking-widest z-10">
              TEAM-V • SHANTO-MARIAM UNIVERSITY
            </div>
          </div>
        </div>
      </div>

      {/* 5 TEAM MEMBERS ROW IN 4:3 RATIO (NAME & ID ONLY) */}
      <div className="pt-2 border-t border-[#1E3E62] space-y-2 z-10 relative">
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="font-bold text-[#16C79A] uppercase tracking-wider border-b-2 border-[#16C79A] pb-0.5">
            THE 5 CREATIVE TEAM MEMBERS
          </span>
          <div className="flex-1 h-px bg-[#1E3E62]" />
        </div>

        {/* 5 TEAM MEMBERS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {team.map((mem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.04, duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-1.5 group cursor-pointer"
            >
              {/* Member Photo Frame in 4:3 Aspect Ratio */}
              <div className="aspect-[4/3] w-full bg-[#0B192C] rounded-xl overflow-hidden border border-[#1E3E62] shadow-md group-hover:border-[#16C79A] transition-all relative">
                <img
                  src={mem.img}
                  alt={`${mem.firstName} ${mem.lastName}`}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute top-1.5 left-1.5 bg-[#000000]/85 text-[#16C79A] border border-white/20 text-xs font-mono px-1.5 py-0.5 rounded font-bold backdrop-blur-xs">
                  {mem.num}
                </div>
              </div>

              {/* Member Name and ID Only */}
              <div className="space-y-0.5">
                <div className="text-xs font-bold font-mono text-[#16C79A] leading-tight truncate">
                  {mem.firstName} {mem.lastName}
                </div>
                <p className="text-[11px] font-mono text-gray-300 font-semibold">{mem.id}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER METADATA BAR */}
      <div className="pt-2 border-t border-[#1E3E62] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-white gap-1 z-10 relative">
        {/* Department Info */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#16C79A] rounded flex items-center justify-center text-black font-bold text-xs">
            V
          </div>
          <div className="leading-tight">
            <p className="font-bold text-[#16C79A] uppercase text-xs">SHANTO-MARIAM UNIVERSITY OF CREATIVE TECHNOLOGY</p>
            <p className="text-gray-300 font-semibold text-[10px]">DEPARTMENT OF GRAPHIC DESIGN & MULTIMEDIA • 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
