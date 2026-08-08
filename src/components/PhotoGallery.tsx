import React, { useState } from "react";
import { motion } from "motion/react";
import { Maximize2, Sparkles } from "lucide-react";

interface PhotoItem {
  id: number;
  title: string;
  category: "carousel" | "banner" | "poster" | "merch";
  aspect: string;
  imageSrc?: string;
  caption: string;
  hashtags: string;
}

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const photos: PhotoItem[] = [
    {
      id: 1,
      title: "Main Campaign Launch Carousel",
      category: "carousel",
      aspect: "1080 x 1080 px (1:1)",
      imageSrc: "/photos/1.png",
      caption: "5-Slide Infographic Carousel: Exposing Dhaka's 36.6M overflow vs 82% district graduate brain drain.",
      hashtags: "#DesherChabiAponarHate #DecentralizeBD"
    },
    {
      id: 2,
      title: "Divisional Superpower Wall Banners",
      category: "banner",
      aspect: "1080 x 1080 px (1:1)",
      imageSrc: "/photos/2.png",
      caption: "High-contrast street placards & web banners celebrating Rajshahi Agritech & Chittagong Maritime Trade.",
      hashtags: "#SmartDistricts #RegionalSuperpower"
    },
    {
      id: 3,
      title: "University Campus Poster Series",
      category: "poster",
      aspect: "1080 x 1080 px (1:1)",
      imageSrc: "/photos/3.png",
      caption: "Minimalist Swiss-style advocacy posters for SUMCT & divisional university campus bulletin boards.",
      hashtags: "#YouthAdvocacy #SUMCT_GRD3216"
    },
    {
      id: 4,
      title: "Volunteer T-Shirt & Cap Print",
      category: "merch",
      aspect: "1080 x 1080 px (1:1)",
      imageSrc: "/photos/4.png",
      caption: "Screen-printed organic cotton t-shirts and caps with golden key mnemonic logo.",
      hashtags: "#TeamV #DesherChabi"
    },
    {
      id: 5,
      title: "Digital Petition Hero Banner",
      category: "banner",
      aspect: "1080 x 1080 px (1:1)",
      imageSrc: "/photos/5.png",
      caption: "Facebook & LinkedIn header banner inviting citizens to sign the 50,000 digital petition.",
      hashtags: "#MoveOpportunityNotPeople"
    },
    {
      id: 6,
      title: "Infographic Fact Sheet Graphic",
      category: "carousel",
      aspect: "1080 x 1080 px (1:1)",
      caption: "Visual data card illustrating ৳380M+ daily traffic loss vs regional infrastructure investment.",
      hashtags: "#DataGrounded #UpcomingSlot"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center my-auto space-y-3 font-sans text-white">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-[#1E3E62] pb-2 font-mono">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#16C79A]" />
          <span className="text-sm font-mono uppercase font-bold text-[#16C79A] tracking-wider">
            STATIC & PRINT CREATIVES (6 DELIVERABLES):
          </span>
        </div>
        <span className="text-xs font-mono text-gray-300 bg-[#1E3E62] px-2.5 py-0.5 rounded font-bold border border-[#16C79A]/30">
          2 ROWS • 3 GALLERIES PER ROW
        </span>
      </div>

      {/* 2 Rows x 3 Galleries Grid (6 Items Total) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 flex-1">
        {photos.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: idx * 0.04, duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            onClick={() => setSelectedPhoto(photo)}
            className="group rounded-2xl bg-[#0B192C] border border-[#1E3E62] p-3 shadow-xl hover:border-[#16C79A] transition-all cursor-pointer overflow-hidden flex items-center gap-3.5 hover:scale-[1.01]"
          >
            {/* Visual Canvas Block (1:1 Square Thumbnail) */}
            <div className="relative aspect-square w-24 sm:w-28 rounded-xl overflow-hidden bg-black/40 border border-white/10 shrink-0 flex items-center justify-center">
              {photo.imageSrc ? (
                <>
                  <img
                    src={photo.imageSrc}
                    alt={photo.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-[#1E3E62] flex flex-col items-center justify-center p-2 text-center">
                  <span className="text-xl mb-0.5">🔑</span>
                  <span className="text-[9px] font-mono text-[#16C79A] font-bold uppercase">Asset #06</span>
                </div>
              )}

              {/* Hover Zoom Icon */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="w-7 h-7 rounded-full bg-black/70 backdrop-blur-xs flex items-center justify-center border border-white/30 text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Gallery Info Details */}
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono uppercase bg-[#1E3E62] px-2 py-0.5 rounded font-bold border border-white/10 text-[#16C79A]">
                  {photo.category.toUpperCase()} • 1:1
                </span>
                <span className="text-[10px] font-mono text-gray-400">
                  {photo.imageSrc ? "READY" : "SLOT 6"}
                </span>
              </div>

              <h4 className="text-xs sm:text-sm font-bold font-serif text-white leading-tight line-clamp-1 group-hover:text-[#16C79A] transition-colors">
                {photo.title}
              </h4>

              <p className="text-[11px] text-gray-300 leading-snug line-clamp-2">
                {photo.caption}
              </p>

              <div className="pt-1 border-t border-[#1E3E62] flex justify-between items-center text-[10px] font-mono text-[#16C79A]">
                <span>1080×1080 px</span>
                <span className="text-gray-400 font-mono">1:1 RATIO</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Preview Popup */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0B192C] border border-[#1E3E62] max-w-xl w-full rounded-2xl p-5 space-y-4 shadow-2xl relative text-white">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#000000] text-white border border-[#1E3E62] font-bold flex items-center justify-center hover:bg-[#16C79A] hover:text-black cursor-pointer z-20"
            >
              ✕
            </button>

            <span className="text-xs font-mono uppercase text-[#16C79A] font-bold tracking-widest block">
              CREATIVE ASSET #{selectedPhoto.id} • 1:1 RATIO
            </span>

            <div className="aspect-square w-full max-h-[340px] mx-auto rounded-xl overflow-hidden bg-black border border-white/15 relative flex items-center justify-center">
              {selectedPhoto.imageSrc ? (
                <img
                  src={selectedPhoto.imageSrc}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center p-6 space-y-2">
                  <span className="text-4xl">🔑</span>
                  <p className="font-mono text-sm text-[#16C79A]">Upcoming Visual Slot 6</p>
                </div>
              )}
            </div>

            <div className="space-y-1.5 text-xs font-sans text-white">
              <h3 className="text-base font-bold font-serif text-[#16C79A]">{selectedPhoto.title}</h3>
              <p><strong>Category:</strong> {selectedPhoto.category.toUpperCase()}</p>
              <p><strong>Caption:</strong> {selectedPhoto.caption}</p>
              <p className="text-amber-300 font-mono"><strong>Hashtags:</strong> {selectedPhoto.hashtags}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
