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
      desc: "Compile 50,000 digital petition signatures, publish policy whitepaper, and present findings to SUMCT faculty.",
      status: "UPCOMING",
      color: "border-emerald-600 bg-emerald-50 text-emerald-700"
    }
  ];

  return (
    <div className="space-y-4 my-2 font-sans">
      <div className="flex items-center justify-between border-b border-black/10 pb-2">
        <span className="text-xs font-mono uppercase font-bold text-gray-800 tracking-wider">
          3-PHASE CAMPAIGN EXECUTION ROADMAP
        </span>
        <span className="text-xs font-mono text-[#1746A2] font-bold">8 WEEKS TOTAL</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {phases.map((ph, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-white border border-black/15 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-gray-500">{ph.duration}</span>
                <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border ${ph.color}`}>
                  {ph.status}
                </span>
              </div>
              <h4 className="text-xs font-mono text-[#1746A2] font-bold uppercase">{ph.phase}</h4>
              <h3 className="text-sm font-bold text-black font-serif">{ph.title}</h3>
              <p className="text-xs text-gray-700 leading-relaxed">{ph.desc}</p>
            </div>

            <div className="pt-2 border-t border-black/10 text-[9px] font-mono text-gray-500 font-bold">
              MILESTONE 0{idx + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
