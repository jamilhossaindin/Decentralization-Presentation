import React from "react";
import { Package, Tag, MapPin, Megaphone } from "lucide-react";

export default function MarketingMix4Ps() {
  const pList = [
    {
      p: "PRODUCT",
      num: "01",
      title: "Social Reform Idea & Campaign Platform",
      desc: "An educational advocacy campaign promoting district-level economic decentralization and policy reform.",
      icon: <Package className="w-5 h-5 text-[#1746A2]" />,
      accent: "border-[#1746A2]"
    },
    {
      p: "PRICE",
      num: "02",
      title: "Behavioral & Civic Cost",
      desc: "Zero financial cost to public. Requires citizens to shift mindset from centralizing in Dhaka to building district hubs.",
      icon: <Tag className="w-5 h-5 text-[#DC2626]" />,
      accent: "border-[#DC2626]"
    },
    {
      p: "PLACE",
      num: "03",
      title: "64 Districts & Digital Channels",
      desc: "University campuses, regional divisional hubs (Sylhet, Rajshahi, Chittagong, Khulna), and social web platforms.",
      icon: <MapPin className="w-5 h-5 text-emerald-700" />,
      accent: "border-emerald-600"
    },
    {
      p: "PROMOTION",
      num: "04",
      title: "Omnichannel Digital Strategy",
      desc: "Viral 15-sec TikTok spots, interactive web app simulator, campus stalls, OVC mini-docs, and micro-influencer advocacy.",
      icon: <Megaphone className="w-5 h-5 text-amber-700" />,
      accent: "border-amber-600"
    }
  ];

  return (
    <div className="space-y-4 my-2 font-sans">
      <div className="flex items-center justify-between border-b border-black/10 pb-2">
        <span className="text-xs font-mono uppercase font-bold text-gray-800 tracking-wider">
          THE 4Ps SOCIAL MARKETING MIX
        </span>
        <span className="text-xs font-mono text-[#1746A2] font-bold">FRAMEWORK ANALYSIS</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pList.map((item, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-2xl bg-white border ${item.accent} shadow-sm space-y-3 flex flex-col justify-between`}
          >
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-[#1746A2] bg-blue-50 px-2 py-0.5 rounded">
                  P-{item.num}
                </span>
                {item.icon}
              </div>
              <h4 className="text-xs font-mono text-gray-500 uppercase font-bold">{item.p}</h4>
              <h3 className="text-sm font-bold text-black font-serif">{item.title}</h3>
              <p className="text-xs text-gray-700 leading-relaxed">{item.desc}</p>
            </div>

            <div className="pt-2 border-t border-black/10 text-[9px] font-mono text-gray-500 font-bold">
              DESHER CHABI CAMPAIGN MIX
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
