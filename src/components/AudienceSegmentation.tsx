import React from "react";
import { Users, GraduationCap, Building2, Landmark } from "lucide-react";

export default function AudienceSegmentation() {
  const segments = [
    {
      level: "Geographic",
      title: "64 District Citizens & University Campuses",
      desc: "Students at SUMCT, BUET, DU, RU, SUST, and regional college graduates facing migration pressure.",
      icon: <GraduationCap className="w-5 h-5 text-[#1746A2]" />
    },
    {
      level: "Demographic",
      title: "Youth Aged 18–35 & Tech Freelancers",
      desc: "Tech-savvy digital natives, remote freelancers, young professionals, and regional entrepreneurs.",
      icon: <Users className="w-5 h-5 text-emerald-700" />
    },
    {
      level: "Psychographic",
      title: "District Patriots & Quality-of-Life Seekers",
      desc: "Individuals exhausted by Dhaka gridlock seeking clean air, lower rent, and proximity to family.",
      icon: <Building2 className="w-5 h-5 text-amber-700" />
    },
    {
      level: "Behavioral",
      title: "Policy Advocates & Civic Activists",
      desc: "Active social media users ready to sign digital petitions and participate in campus stall activations.",
      icon: <Landmark className="w-5 h-5 text-[#DC2626]" />
    }
  ];

  return (
    <div className="space-y-4 my-2 font-sans">
      <div className="flex items-center justify-between border-b border-black/10 pb-2">
        <span className="text-xs font-mono uppercase font-bold text-gray-800 tracking-wider">
          4-LEVEL TARGET AUDIENCE SEGMENTATION
        </span>
        <span className="text-xs font-mono text-[#1746A2] font-bold">REACH MATRIX</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {segments.map((seg, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-white border border-black/15 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-[#1746A2] bg-blue-50 px-2 py-0.5 rounded">
                  0{idx + 1}
                </span>
                {seg.icon}
              </div>
              <h4 className="text-xs font-mono text-gray-500 uppercase font-bold">{seg.level}</h4>
              <h3 className="text-sm font-bold text-black font-serif">{seg.title}</h3>
              <p className="text-xs text-gray-700 leading-relaxed">{seg.desc}</p>
            </div>

            <div className="pt-2 border-t border-black/10 text-[9px] font-mono text-gray-500 font-bold">
              TARGET SEGMENT #{idx + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
