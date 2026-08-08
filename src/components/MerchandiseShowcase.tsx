import React, { useState } from "react";
import { motion } from "motion/react";
import { Maximize2 } from "lucide-react";

interface MerchItem {
  id: number;
  name: string;
  category: string;
  imageSrc: string;
  desc: string;
  specs: string;
  color: string;
}

export default function MerchandiseShowcase() {
  const [selectedItem, setSelectedItem] = useState<MerchItem | null>(null);

  const items: MerchItem[] = [
    {
      id: 1,
      name: "Organic Cotton Campaign T-Shirt",
      category: "SOUVENIR & APPAREL",
      imageSrc: "/photos/4.png",
      desc: "100% Organic Cotton featuring screen-printed 'Desher Chabi Aponar Hate' typography & Golden Key mnemonic logo.",
      specs: "Color: Warm Off-White & Cobalt Blue • Sizes: S / M / L / XL",
      color: "from-emerald-950 to-dark-surface"
    },
    {
      id: 2,
      name: "Enamel Pins & Volunteer Caps",
      category: "ACCESSORY & BADGE",
      imageSrc: "/photos/2.png",
      desc: "Die-cast metallic enamel key pins worn by campus volunteers and speakers during seminars.",
      specs: "Material: Brass & Soft Enamel • Cap: Adjustable 6-panel cap",
      color: "from-amber-950 to-rose-950"
    },
    {
      id: 3,
      name: "Street Banners & Protest Placards",
      category: "CAMPAIGN PROPS",
      imageSrc: "/photos/5.png",
      desc: "High-contrast 6ft roll-up banners and lightweight eco-boards for university rallies and street walks.",
      specs: "Print: Eco-solvent vinyl • Anti-glare matte coating",
      color: "from-blue-950 to-slate-900"
    },
    {
      id: 4,
      name: "University Activation Booth Stall",
      category: "ACTIVATION BOOTH",
      imageSrc: "/photos/3.png",
      desc: "Modular wooden pop-up booth installed at SUMCT, BUET & regional university corridors for petition signups.",
      specs: "Dimensions: 8ft x 6ft • Includes interactive iPad kiosk & stickers",
      color: "from-indigo-950 to-purple-950"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center my-auto space-y-3 font-sans text-white">
      {/* 4-Image 1:1 Square Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            onClick={() => setSelectedItem(item)}
            className="group relative aspect-square rounded-2xl bg-[#0B192C] border border-[#1E3E62] p-3 shadow-xl hover:border-[#16C79A] transition-all cursor-pointer overflow-hidden flex flex-col justify-between hover:scale-[1.02]"
          >
            {/* Visual 1:1 Background Image */}
            <img
              src={item.imageSrc}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50 pointer-events-none" />

            {/* Top Bar with 1:1 badge */}
            <div className="relative z-10 flex justify-between items-center">
              <span className="text-[10px] font-mono uppercase bg-black/80 px-2 py-0.5 rounded font-bold border border-white/20 text-[#16C79A]">
                {item.category} • 1:1
              </span>
              <div className="w-5 h-5 rounded-md bg-black/60 backdrop-blur-xs flex items-center justify-center border border-white/20">
                <Maximize2 className="w-3 h-3 text-white opacity-80 group-hover:opacity-100" />
              </div>
            </div>

            {/* Bottom Info on Image */}
            <div className="relative z-10 space-y-1">
              <p className="text-[10px] font-mono text-amber-300 font-bold">🔑 PHYSICAL MERCHANDISE</p>
              <h4 className="text-xs sm:text-sm font-bold font-serif text-white leading-tight drop-shadow-md line-clamp-1">
                {item.name}
              </h4>
              <div className="pt-1 border-t border-white/15 flex justify-between items-center text-[10px] font-mono text-gray-300">
                <span>1080×1080</span>
                <span className="text-[#16C79A] font-bold">1:1 RATIO</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Modal Preview in 1:1 Ratio */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0B192C] border border-[#1E3E62] max-w-xl w-full rounded-2xl p-5 space-y-4 shadow-2xl relative text-white">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black text-white border border-[#1E3E62] font-bold flex items-center justify-center hover:bg-[#16C79A] hover:text-black cursor-pointer z-20"
            >
              ✕
            </button>

            <span className="text-xs font-mono uppercase text-[#16C79A] font-bold tracking-widest block">
              MERCHANDISE & STALL ASSET #{selectedItem.id} • 1:1 RATIO
            </span>

            <div className="aspect-square w-full max-h-[340px] mx-auto rounded-xl overflow-hidden bg-black border border-white/15 relative flex items-center justify-center">
              <img
                src={selectedItem.imageSrc}
                alt={selectedItem.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-1.5 text-xs font-sans text-white">
              <h3 className="text-base font-bold font-serif text-[#16C79A]">{selectedItem.name}</h3>
              <p><strong>Category:</strong> {selectedItem.category}</p>
              <p><strong>Description:</strong> {selectedItem.desc}</p>
              <p className="text-amber-300 font-mono font-bold"><strong>Specs:</strong> {selectedItem.specs} (1:1 Format)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
