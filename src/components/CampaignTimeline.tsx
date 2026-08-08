import React from "react";
import { Calendar, CheckCircle2, Clock, Award } from "lucide-react";

export default function CampaignTimeline() {
  const phases = [
    {
      phase: "PHASE A",
      duration: "Weeks 1–2",
      title: "Pre-Campaign Production",
      desc: "Finalize visual identity, print posters, produce 15-sec TikTok spots, and launch the custom React web app portal.",
      status: "COMPLETED",
      color: "border-[#1746A2] bg-blue-50 text-[#1746A2]"
    },
    {
      phase: "PHASE B",
      duration: "Weeks 3–6",
      title: "Execution & Viral Push",
      desc: "Roll out TikTok/Reels ads, partner with micro-influencers (Ayman Sadiq), set up campus activation stalls, and run petition.",
      status: "ACTIVE EXECUTION",
      color: "border-[#DC2626] bg-red-50 text-[#DC2626]"
    },
    {
      phase: "PHASE C",
      duration: "Weeks 7–8",
      title: "Post-Campaign & Policy Deliverable",
      desc: "Compile 50,000 digital petition signatures, publish policy whitepaper, and present findings to SMUCT faculty.",
      status: "UPCOMING",
      color: "border-emerald-600 bg-emerald-50 text-emerald-700"
    }
  ];

  return (
    <div className="space-y-4 my-2 font-sans text-white">
      <div className="flex items-center justify-between border-b border-[#1E3E62] pb-2">
        <span className="text-sm font-mono uppercase font-bold text-[#16C79A] tracking-wider">
          3-PHASE CAMPAIGN EXECUTION ROADMAP
        </span>
        <span className="text-sm font-mono text-gray-300 font-bold">8 WEEKS TOTAL</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {phases.map((ph, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-[#0B192C] border border-[#1E3E62] shadow-xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-mono font-bold text-gray-400">{ph.duration}</span>
                <span className="text-sm font-mono font-bold px-2 py-0.5 rounded bg-[#1E3E62] text-[#16C79A] border border-[#1E3E62]">
                  {ph.status}
                </span>
              </div>
              <h4 className="text-sm font-mono text-[#16C79A] font-bold uppercase">{ph.phase}</h4>
              <h3 className="text-lg font-bold text-white font-serif">{ph.title}</h3>
              <p className="text-sm text-white leading-relaxed">{ph.desc}</p>
            </div>

            <div className="pt-2 border-t border-[#1E3E62] text-sm font-mono text-gray-400 font-bold">
              MILESTONE 0{idx + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
