import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2 } from "lucide-react";

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
      caption: "Visual data card illustrating ৳380M+ daily traffic loss vs regional infrastructure investment (Upcoming).",
      hashtags: "#DataGrounded #UpcomingSlot"
    }
  ];

  return (
    <div className="space-y-3 font-sans text-white">
      {/* Grid of Graphic Assets (No Scrollbar, 6 Square Items) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {photos.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: idx * 0.04, duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            onClick={() => setSelectedPhoto(photo)}
            className="group aspect-square rounded-2xl bg-[#0B192C] border border-[#1E3E62] p-2.5 shadow-xl hover:border-[#16C79A] transition-all cursor-pointer overflow-hidden flex flex-col justify-between hover:scale-[1.02] relative"
          >
            {/* Visual Canvas Block (1:1 with Real Image or Fallback) */}
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black/40 border border-white/10 flex flex-col justify-between p-2">
              {photo.imageSrc ? (
                <>
                  <img
                    src={photo.imageSrc}
                    alt={photo.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-[#1E3E62] flex flex-col items-center justify-center p-3 text-center">
                  <span className="text-2xl mb-1">🔑</span>
                  <span className="text-[10px] font-mono text-[#16C79A] font-bold uppercase">Asset #06</span>
                  <span className="text-[10px] text-gray-400">Upload Pending</span>
                </div>
              )}

              {/* Top Badge */}
              <div className="relative z-10 flex justify-between items-center">
                <span className="text-[10px] font-mono uppercase bg-black/75 backdrop-blur-xs px-1.5 py-0.5 rounded font-bold border border-white/20 text-[#16C79A]">
                  {photo.category.toUpperCase()} • 1:1
                </span>
                <div className="w-5 h-5 rounded-md bg-black/60 backdrop-blur-xs flex items-center justify-center border border-white/20">
                  <Maximize2 className="w-3 h-3 text-white opacity-80 group-hover:opacity-100" />
                </div>
              </div>

              {/* Bottom Caption Inside Image */}
              <div className="relative z-10 space-y-0.5">
                <h4 className="text-xs font-bold font-serif text-white leading-tight drop-shadow-md line-clamp-2">
                  {photo.title}
                </h4>
              </div>
            </div>

            {/* Bottom Specs Bar */}
            <div className="pt-1.5 flex justify-between items-center text-[10px] font-mono text-gray-400">
              <span>1080×1080</span>
              <span className={photo.imageSrc ? "text-[#16C79A] font-bold" : "text-amber-400 font-bold"}>
                {photo.imageSrc ? "READY" : "SLOT 6"}
              </span>
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
              CREATIVE ASSET PREVIEW #{selectedPhoto.id} • 1:1 RATIO
            </span>

            {/* Modal Image Box */}
            <div className="aspect-square w-full max-h-[360px] mx-auto rounded-xl overflow-hidden bg-black border border-white/15 relative flex items-center justify-center">
              {selectedPhoto.imageSrc ? (
                <img
                  src={selectedPhoto.imageSrc}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center p-6 space-y-2">
                  <span className="text-4xl">🔑</span>
                  <h4 className="text-lg font-bold text-white font-serif">{selectedPhoto.title}</h4>
                  <p className="text-xs font-mono text-amber-400">Slot 6 image will be uploaded here</p>
                </div>
              )}
            </div>

            <div className="space-y-1.5 text-xs font-sans text-white">
              <h3 className="text-base font-bold font-serif text-[#16C79A]">{selectedPhoto.title}</h3>
              <p><strong>Description:</strong> {selectedPhoto.caption}</p>
              <p><strong>Resolution:</strong> {selectedPhoto.aspect} (1:1 Square Format)</p>
              <p className="text-[#16C79A] font-mono font-bold">{selectedPhoto.hashtags}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
