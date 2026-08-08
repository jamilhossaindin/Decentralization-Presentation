import React, { useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";

interface VideoItem {
  id: number;
  videoSrc?: string;
}

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos: VideoItem[] = [
    { id: 1, videoSrc: "/videos/1.mp4" },
    { id: 2, videoSrc: "/videos/2.mp4" },
    { id: 3, videoSrc: "/videos/3.mp4" },
    { id: 4, videoSrc: "/videos/4.mp4" },
    { id: 5, videoSrc: "/videos/5.mp4" },
    { id: 6 } // 6th slot reserved
  ];

  return (
    <div className="w-full space-y-4 pb-8 font-sans text-white">
      {/* 2 Rows x 3 Video Galleries (6 Items Total) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((vid, idx) => (
          <motion.div
            key={vid.id}
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: idx * 0.04, duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            onClick={() => vid.videoSrc && setSelectedVideo(vid.videoSrc)}
            className="group relative aspect-square w-full rounded-2xl bg-[#0B192C] border border-[#1E3E62] overflow-hidden shadow-xl hover:border-[#16C79A] transition-all cursor-pointer flex items-center justify-center hover:scale-[1.01]"
          >
            {vid.videoSrc ? (
              <>
                <video
                  src={vid.videoSrc}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onMouseEnter={(e) => {
                    e.currentTarget.play().catch(() => {});
                  }}
                />
                {/* Minimalist Play Icon Overlay */}
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/5 transition-colors flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#16C79A] group-hover:text-black transition-all shadow-xl">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0B192C] to-slate-950 border border-dashed border-[#1E3E62] rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-black/40 border border-[#1E3E62] flex items-center justify-center text-gray-500">
                  <Play className="w-5 h-5 ml-0.5 opacity-40" />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Interactive Modal Video Player in High Definition */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0B192C] border border-[#1E3E62] max-w-2xl w-full rounded-2xl p-4 shadow-2xl relative">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black text-white border border-[#1E3E62] font-bold flex items-center justify-center hover:bg-[#16C79A] hover:text-black cursor-pointer z-20"
            >
              ✕
            </button>
            <div className="aspect-square w-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
              <video
                src={selectedVideo}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
