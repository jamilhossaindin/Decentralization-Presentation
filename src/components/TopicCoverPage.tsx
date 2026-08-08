import React from "react";
import MapRenderer from "./MapRenderer";

interface TopicCoverPageProps {
  onNext?: () => void;
}

export default function TopicCoverPage({ onNext }: TopicCoverPageProps) {
  return (
    <div className="w-full h-[86vh] min-h-[660px] bg-[#000000] text-white font-mono relative p-5 sm:p-6 rounded-2xl border border-[#1E3E62] shadow-xl overflow-hidden flex flex-col justify-center">
      {/* 2-COLUMN STRICT LAYOUT: LEFT SIDE (TEXTS) | RIGHT SIDE (FULL MAP) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full z-10 relative">
        {/* LEFT COLUMN: HEADER & TITLE */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#16C79A] leading-tight">
              Presentation Topic:
            </h2>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif tracking-tight leading-tight text-white uppercase">
              DECENTRALIZATION <br />
              <span className="text-[#16C79A]">OF BANGLADESH</span>
            </h1>
            <div className="w-full h-0.5 bg-gradient-to-r from-[#16C79A] via-[#1E3E62] to-transparent mt-2" />
          </div>
        </div>

        {/* RIGHT COLUMN: CLEAN BANGLADESH MAP & ANIMATION */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center h-full relative">
          <MapRenderer isDecentralized={true} showDecentralizationNetwork={true} />
        </div>
      </div>
    </div>
  );
}
