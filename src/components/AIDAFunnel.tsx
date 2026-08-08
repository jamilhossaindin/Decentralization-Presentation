import React from "react";
import { Eye, Heart, Sparkles, CheckCircle2 } from "lucide-react";

export default function AIDAFunnel() {
  const steps = [
    {
      stage: "A",
      title: "ATTENTION",
      tagline: "Dhaka Traffic vs District Potential",
      desc: "Hook audience via 15-sec TikTok spots showing real-time daily GDP traffic loss ticker (৳380M+).",
      icon: <Eye className="w-5 h-5 text-[#16C79A]" />,
      bg: "bg-[#0B192C] border-[#1E3E62]"
    },
    {
      stage: "I",
      title: "INTEREST",
      tagline: "Interactive Spatial Heatmaps",
      desc: "Engage youth on web portal showing 78% corporate job monopoly in Dhaka vs district strengths.",
      icon: <Heart className="w-5 h-5 text-[#16C79A]" />,
      bg: "bg-[#0B192C] border-[#1E3E62]"
    },
    {
      stage: "D",
      title: "DESIRE",
      tagline: "Emotional OVC & Case Studies",
      desc: "Showcase thriving remote engineers in Sylhet and tech founders in Rajshahi enjoying 60% lower costs.",
      icon: <Sparkles className="w-5 h-5 text-[#16C79A]" />,
      bg: "bg-[#0B192C] border-[#1E3E62]"
    },
    {
      stage: "A",
      title: "ACTION",
      tagline: "Digital Petition & Policy Advocacy",
      desc: "Convert audience to sign 50,000 digital petition demanding corporate tax holidays in 64 districts.",
      icon: <CheckCircle2 className="w-5 h-5 text-[#DC2626]" />,
      bg: "bg-[#0B192C] border-[#1E3E62]"
    }
  ];

  return (
    <div className="space-y-4 my-2 font-sans text-white">
      <div className="flex items-center justify-between border-b border-[#1E3E62] pb-2">
        <span className="text-sm font-mono uppercase font-bold text-[#16C79A] tracking-wider">
          AIDA CAMPAIGN CONVERSION FUNNEL
        </span>
        <span className="text-sm font-mono text-gray-300 font-bold">4-STAGE PIPELINE</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((st, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-[#0B192C] border border-[#1E3E62] shadow-xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="w-8 h-8 rounded-xl bg-[#1E3E62] text-[#16C79A] border border-[#1E3E62] font-mono font-bold flex items-center justify-center text-sm">
                  {st.stage}
                </span>
                {st.icon}
              </div>
              <h4 className="text-sm font-mono text-[#16C79A] uppercase font-bold">{st.title}</h4>
              <h3 className="text-lg font-bold text-white font-serif">{st.tagline}</h3>
              <p className="text-sm text-white leading-relaxed">{st.desc}</p>
            </div>

            <div className="pt-2 border-t border-[#1E3E62] text-sm font-mono text-gray-400 font-bold">
              STAGE 0{idx + 1} CONVERSION
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
