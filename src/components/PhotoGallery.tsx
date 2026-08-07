import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Image, Maximize2, Sparkles, Filter, ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoItem {
  id: number;
  title: string;
  category: "carousel" | "banner" | "poster" | "merch";
  aspect: string;
  color: string;
  caption: string;
  hashtags: string;
}

export default function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const photos: PhotoItem[] = [
    {
      id: 1,
      title: "Main Campaign Launch Carousel",
      category: "carousel",
      aspect: "1080 x 1080 px (1:1)",
      color: "from-blue-900 to-emerald-950",
      caption: "5-Slide Infographic Carousel: Exposing Dhaka's 36.6M overflow vs 82% district graduate brain drain.",
      hashtags: "#DesherChabiAponarHate #DecentralizeBD"
    },
    {
      id: 2,
      title: "Divisional Superpower Wall Banners",
      category: "banner",
      aspect: "1920 x 1080 px (16:9)",
      color: "from-amber-900 to-rose-950",
      caption: "High-contrast street placards & web banners celebrating Rajshahi Agritech & Chittagong Maritime Trade.",
      hashtags: "#SmartDistricts #RegionalSuperpower"
    },
    {
      id: 3,
      title: "University Campus Poster Series",
      category: "poster",
      aspect: "1080 x 1350 px (4:5)",
      color: "from-indigo-900 to-purple-950",
      caption: "Minimalist Swiss-style advocacy posters for SUMCT & divisional university campus bulletin boards.",
      hashtags: "#YouthAdvocacy #SUMCT_GRD3216"
    },
    {
      id: 4,
      title: "Volunteer T-Shirt & Cap Print",
      category: "merch",
      aspect: "1080 x 1080 px (1:1)",
      color: "from-emerald-900 to-dark-surface",
      caption: "Screen-printed organic cotton t-shirts and caps with golden key mnemonic logo.",
      hashtags: "#TeamV #DesherChabi"
    },
    {
      id: 5,
      title: "Digital Petition Hero Banner",
      category: "banner",
      aspect: "1200 x 630 px (1.91:1)",
      color: "from-[#1746A2] to-slate-900",
      caption: "Facebook & LinkedIn header banner inviting citizens to sign the 50,000 digital petition.",
      hashtags: "#MoveOpportunityNotPeople"
    },
    {
      id: 6,
      title: "Infographic Fact Sheet Graphic",
      category: "carousel",
      aspect: "1080 x 1080 px (1:1)",
      color: "from-rose-900 to-slate-900",
      caption: "Visual data card illustrating ৳380M+ daily traffic loss vs regional infrastructure investment.",
      hashtags: "#DataGrounded #PublicPolicy"
    }
  ];

  const filteredPhotos = activeCategory === "all"
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-4 my-2 font-sans">
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-3">
        <div className="flex items-center gap-1.5">
          <Filter className="w-4 h-4 text-[#1746A2]" />
          <span className="text-xs font-mono uppercase font-bold text-gray-700">CREATIVE ASSET FILTER:</span>
        </div>

        <div className="flex flex-wrap gap-1.5 font-mono text-xs">
          {[
            { id: "all", label: "ALL ASSETS (6)" },
            { id: "carousel", label: "CAROUSELS" },
            { id: "banner", label: "WEB BANNERS" },
            { id: "poster", label: "POSTERS" },
            { id: "merch", label: "MERCHANDISE" }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#1746A2] text-white border-[#1746A2] font-bold shadow-sm"
                  : "bg-white/60 text-gray-700 border-black/10 hover:bg-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Graphic Assets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPhotos.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: idx * 0.04, duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative rounded-2xl bg-white border border-black/10 p-4 space-y-3 shadow-sm hover:shadow-md hover:border-[#1746A2]/40 transition-all cursor-pointer overflow-hidden"
          >
            {/* Visual Canvas Mockup Block */}
            <div className={`h-40 rounded-xl bg-gradient-to-br ${photo.color} p-4 flex flex-col justify-between text-white relative overflow-hidden group-hover:scale-[1.02] transition-transform`}>
              <div className="flex justify-between items-center z-10">
                <span className="text-[9px] font-mono uppercase bg-black/40 px-2 py-0.5 rounded font-bold border border-white/20">
                  {photo.category.toUpperCase()}
                </span>
                <Maximize2 className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="z-10 space-y-1">
                <p className="text-[10px] font-mono text-emerald-300 font-bold">🔑 DESHER CHABI APONAR HATE</p>
                <h4 className="text-sm font-bold font-serif leading-snug">{photo.title}</h4>
              </div>
            </div>

            {/* Info details */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                <span>SPECS: {photo.aspect}</span>
                <span className="text-[#1746A2] font-bold">READY</span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed font-sans">{photo.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Preview Popup */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#EBE7DF] border border-black/20 max-w-xl w-full rounded-2xl p-6 space-y-4 shadow-2xl relative">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/10 text-black font-bold flex items-center justify-center hover:bg-black/20 cursor-pointer"
            >
              ✕
            </button>

            <span className="text-xs font-mono uppercase text-[#1746A2] font-bold tracking-widest block">
              CREATIVE ASSET PREVIEW #{selectedPhoto.id}
            </span>

            <div className={`h-56 rounded-xl bg-gradient-to-br ${selectedPhoto.color} p-6 flex flex-col justify-between text-white`}>
              <span className="text-xs font-mono uppercase bg-black/40 px-2.5 py-1 rounded font-bold w-fit border border-white/20">
                {selectedPhoto.category.toUpperCase()}
              </span>
              <div>
                <p className="text-xs font-mono text-amber-300 font-bold mb-1">🔑 CAMPAIGN CREATIVE DELIVERABLE</p>
                <h3 className="text-xl font-bold font-serif">{selectedPhoto.title}</h3>
              </div>
            </div>

            <div className="space-y-2 text-xs font-sans text-gray-800">
              <p><strong>Description:</strong> {selectedPhoto.caption}</p>
              <p><strong>Resolution:</strong> {selectedPhoto.aspect}</p>
              <p className="text-[#1746A2] font-mono font-bold">{selectedPhoto.hashtags}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
