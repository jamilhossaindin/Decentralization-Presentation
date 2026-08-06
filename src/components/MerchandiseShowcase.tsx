import React, { useState } from "react";
import { Shirt, Award, Flag, Building } from "lucide-react";

export default function MerchandiseShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const items = [
    {
      id: 1,
      name: "Organic Cotton Campaign T-Shirt",
      category: "SOUVENIR & APPAREL",
      desc: "100% Organic Cotton featuring screen-printed 'Desher Chabi Aponar Hate' typography & Golden Key mnemonic logo.",
      specs: "Color: Warm Off-White & Cobalt Blue • Sizes: S / M / L / XL",
      icon: <Shirt className="w-5 h-5 text-[#1746A2]" />
    },
    {
      id: 2,
      name: "Enamel Pins & Volunteer Caps",
      category: "ACCESSORY & BADGE",
      desc: "Die-cast metallic enamel key pins worn by campus volunteers and speakers during seminars.",
      specs: "Material: Brass & Soft Enamel • Cap: Adjustable 6-panel cap",
      icon: <Award className="w-5 h-5 text-amber-700" />
    },
    {
      id: 3,
      name: "Street Banners & Protest Placards",
      category: "CAMPAIGN PROPS",
      desc: "High-contrast 6ft roll-up banners and lightweight eco-boards for university rallies and street walks.",
      specs: "Print: Eco-solvent vinyl • Anti-glare matte coating",
      icon: <Flag className="w-5 h-5 text-[#DC2626]" />
    },
    {
      id: 4,
      name: "University Activation Booth Stall",
      category: "ACTIVATION BOOTH",
      desc: "Modular wooden pop-up booth installed at SUMCT, BUET & regional university corridors for petition signups.",
      specs: "Dimensions: 8ft x 6ft • Includes interactive iPad kiosk & stickers",
      icon: <Building className="w-5 h-5 text-emerald-700" />
    }
  ];

  return (
    <div className="space-y-4 my-2 font-sans">
      <div className="flex items-center justify-between border-b border-black/10 pb-2">
        <span className="text-xs font-mono uppercase font-bold text-gray-800 tracking-wider">
          SOUVENIRS, PROPS & CAMPUS ACTIVATION BOOTHS
        </span>
        <span className="text-xs font-mono text-[#1746A2] font-bold">PHYSICAL ASSETS</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setActiveTab(idx)}
            className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 flex flex-col justify-between ${
              activeTab === idx
                ? "bg-white border-[#1746A2] shadow-md scale-[1.01]"
                : "bg-white/80 border-black/15 hover:border-black/30 hover:bg-white"
            }`}
          >
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold text-[#1746A2] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {item.category}
                </span>
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-black font-serif">{item.name}</h3>
              <p className="text-xs text-gray-700 leading-relaxed">{item.desc}</p>
            </div>

            <div className="pt-2 border-t border-black/10 text-[10px] font-mono text-gray-500 font-bold">
              {item.specs}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
