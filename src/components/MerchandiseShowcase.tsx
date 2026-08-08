import React, { useState } from "react";
import { motion } from "motion/react";
import { Maximize2, Sparkles, ShoppingBag } from "lucide-react";

interface MerchItem {
  id: number;
  imageSrc: string;
}

export default function MerchandiseShowcase() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const items: MerchItem[] = [
    { id: 1, imageSrc: "/photos/4.png" },
    { id: 2, imageSrc: "/photos/2.png" },
    { id: 3, imageSrc: "/photos/5.png" },
    { id: 4, imageSrc: "/photos/3.png" }
  ];

  return (
    <div className="w-full space-y-4 pb-8 font-sans text-white">
      {/* 4 Pure Image Merchandise & Stall Cards (No Text) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            onClick={() => setSelectedItem(item.imageSrc)}
            className="group relative aspect-square rounded-2xl bg-[#0B192C] border border-[#1E3E62] overflow-hidden shadow-xl hover:border-[#16C79A] transition-all cursor-pointer flex items-center justify-center hover:scale-[1.01]"
          >
            {/* Pure 1:1 Background Image */}
            <img
              src={item.imageSrc}
              alt={`Merchandise asset ${item.id}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />

            {/* Minimalist Hover Zoom Overlay */}
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
              <div className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#16C79A] group-hover:text-black transition-all shadow-xl">
                <Maximize2 className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Modal Preview (Pure Full-Size Image) */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0B192C] border border-[#1E3E62] max-w-2xl w-full rounded-2xl p-4 shadow-2xl relative text-white">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black text-white border border-[#1E3E62] font-bold flex items-center justify-center hover:bg-[#16C79A] hover:text-black cursor-pointer z-20"
            >
              ✕
            </button>
            <div className="aspect-square w-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedItem}
                alt="Enlarged merchandise view"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
