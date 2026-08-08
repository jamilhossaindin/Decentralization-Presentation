import React from "react";
import { Users, GraduationCap, Building2, Landmark } from "lucide-react";

export default function AudienceSegmentation() {
  const segments = [
    {
      level: "Geographic",
      title: "64 District Citizens & Campuses",
      points: [
        "Students at SUMCT, BUET, DU, RU, SUST.",
        "Regional graduates facing migration pressure."
      ],
      icon: <GraduationCap className="w-5 h-5 text-[#16C79A]" />
    },
    {
      level: "Demographic",
      title: "Youth Aged 18–35 & Tech Freelancers",
      points: [
        "Tech-savvy digital natives & remote freelancers.",
        "Young professionals & regional entrepreneurs."
      ],
      icon: <Users className="w-5 h-5 text-emerald-400" />
    },
    {
      level: "Psychographic",
      title: "District Patriots & Life Seekers",
      points: [
        "Citizens exhausted by Dhaka gridlock.",
        "Seeking clean air, lower rent & family proximity."
      ],
      icon: <Building2 className="w-5 h-5 text-amber-400" />
    },
    {
      level: "Behavioral",
      title: "Policy Advocates & Civic Activists",
      points: [
        "Active social media petition signers.",
        "Campus stall & street activation participants."
      ],
      icon: <Landmark className="w-5 h-5 text-[#DC2626]" />
    }
  ];

  return (
    <div className="space-y-4 my-2 font-sans text-white">
      <div className="flex items-center justify-between border-b border-[#1E3E62] pb-2">
        <span className="text-sm font-mono uppercase font-bold text-[#16C79A] tracking-wider">
          4-LEVEL TARGET AUDIENCE SEGMENTATION
        </span>
        <span className="text-sm font-mono text-gray-300 font-bold">REACH MATRIX</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {segments.map((seg, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-[#0B192C] border border-[#1E3E62] shadow-xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-mono font-bold text-[#16C79A] bg-[#1E3E62] border border-[#1E3E62] px-2 py-0.5 rounded">
                  0{idx + 1}
                </span>
                {seg.icon}
              </div>
              <h4 className="text-sm font-mono text-[#16C79A] uppercase font-bold">{seg.level}</h4>
              <h3 className="text-lg font-bold text-white font-serif">{seg.title}</h3>
              <ul className="text-sm text-white space-y-1.5 list-disc pl-4">
                {seg.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-[#1E3E62] text-sm font-mono text-gray-400 font-bold">
              TARGET SEGMENT #{idx + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
