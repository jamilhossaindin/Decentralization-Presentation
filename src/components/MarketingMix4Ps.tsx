import React from "react";
import { Package, Tag, MapPin, Megaphone } from "lucide-react";

export default function MarketingMix4Ps() {
  const pList = [
    {
      p: "PRODUCT",
      num: "01",
      title: "Social Reform Idea & Platform",
      points: [
        "Educational advocacy for policy reform.",
        "Promotes district economic decentralization."
      ],
      icon: <Package className="w-5 h-5 text-[#16C79A]" />
    },
    {
      p: "PRICE",
      num: "02",
      title: "Behavioral & Civic Cost",
      points: [
        "Zero financial cost to the public.",
        "Mindset shift: build regional hubs over Dhaka."
      ],
      icon: <Tag className="w-5 h-5 text-[#DC2626]" />
    },
    {
      p: "PLACE",
      num: "03",
      title: "64 Districts & Digital",
      points: [
        "University campuses & regional hubs (Sylhet, RU, SUST).",
        "Social web & web app simulator channels."
      ],
      icon: <MapPin className="w-5 h-5 text-emerald-400" />
    },
    {
      p: "PROMOTION",
      num: "04",
      title: "Omnichannel Strategy",
      points: [
        "Viral 15-sec TikTok spots & OVC mini-docs.",
        "Campus stalls & micro-influencer advocacy."
      ],
      icon: <Megaphone className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <div className="space-y-3 my-2 font-sans text-white">
      <div className="flex items-center justify-between border-b border-[#1E3E62] pb-1.5">
        <span className="text-sm font-mono uppercase font-bold text-[#16C79A] tracking-wider">
          THE 4Ps SOCIAL MARKETING MIX
        </span>
        <span className="text-sm font-mono text-gray-300 font-bold">FRAMEWORK ANALYSIS</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {pList.map((item, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-[#0B192C] border border-[#1E3E62] shadow-md space-y-1.5 flex flex-col justify-between min-h-[190px]"
          >
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-sm font-mono font-bold text-[#16C79A] bg-[#1E3E62] border border-[#1E3E62] px-2 py-0.5 rounded">
                  P-{item.num}
                </span>
                {item.icon}
              </div>
              <h4 className="text-sm font-mono text-[#16C79A] uppercase font-bold">{item.p}</h4>
              <h3 className="text-lg font-bold text-white font-serif">{item.title}</h3>
              <ul className="text-sm text-white space-y-1 list-disc pl-4 leading-relaxed">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>
            </div>

            <div className="pt-1.5 border-t border-[#1E3E62] text-sm font-mono text-gray-400 font-bold">
              DESHER CHABI CAMPAIGN MIX
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
