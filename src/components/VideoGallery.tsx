import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Video, Film, Sparkles, Volume2, Clock } from "lucide-react";

interface VideoItem {
  id: number;
  title: string;
  type: "OVC Commercial" | "Reels / TikTok" | "Docu Short";
  duration: string;
  platform: string;
  color: string;
  storyboard: string;
  audioTrack: string;
}

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoList: VideoItem[] = [
    {
      id: 1,
      title: "The Commuter's Dream (60-Sec Main OVC)",
      type: "OVC Commercial",
      duration: "0:60 Min",
      platform: "YouTube / Facebook",
      color: "from-blue-900 to-indigo-950",
      storyboard: "Scene 1: Chaotic horn-blaring Dhaka traffic gridlock. Scene 2: Stressed worker looking at clock. Scene 3: Transition to green courtyard in Sylhet where a remote engineer connects seamlessly.",
      audioTrack: "Original Score: Emotional crescendo transitioning from heavy city noise to serene delta acoustic notes."
    },
    {
      id: 2,
      title: "ঢাকার ৩ ঘণ্টা জ্যাম নাকি জেলাতেই কেরিয়ার? (Short Spot)",
      type: "Reels / TikTok",
      duration: "0:15 Sec",
      platform: "TikTok / Reels / Shorts",
      color: "from-rose-900 to-amber-950",
      storyboard: "Rapid 15-second cut comparing sub-let rent prices in Dhaka vs spacious family homes in Rajshahi. On-screen live ticker counter.",
      audioTrack: "Trending upbeat lo-fi hip hop beat with voiceover."
    },
    {
      id: 3,
      title: "64 Districts: Unlocking Divisional Superpowers",
      type: "Docu Short",
      duration: "2:30 Min",
      platform: "YouTube / LinkedIn",
      color: "from-emerald-950 to-slate-900",
      storyboard: "Mini-documentary interviewing tech freelancers in Sylhet, agro-tech entrepreneurs in Rajshahi, and maritime logistics founders in Chittagong.",
      audioTrack: "Inspirational acoustic guitar and ambient electronic track."
    }
  ];

  return (
    <div className="space-y-4 my-2 font-sans text-white">
      <div className="flex items-center justify-between border-b border-[#1E3E62] pb-3">
        <div className="flex items-center gap-2">
          <Film className="w-4 h-4 text-[#16C79A]" />
          <span className="text-sm font-mono uppercase font-bold text-[#16C79A]">VIDEO CREATIVES & STORYBOARDS:</span>
        </div>
        <span className="text-sm font-mono text-gray-300">3 HIGH-IMPACT SPOTS PRODUCED</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videoList.map((vid, idx) => (
          <motion.div
            key={vid.id}
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            onClick={() => {
              setActiveVideo(vid);
              setIsPlaying(false);
            }}
            className="group rounded-2xl bg-[#0B192C] border border-[#1E3E62] p-4 space-y-3 shadow-xl hover:border-[#16C79A] transition-all cursor-pointer"
          >
            {/* Simulated Video Player Box */}
            <div className={`h-40 rounded-xl bg-gradient-to-br ${vid.color} p-4 flex flex-col justify-between text-white relative overflow-hidden group-hover:scale-[1.01] transition-transform`}>
              <div className="flex justify-between items-center z-10">
                <span className="text-sm font-mono uppercase bg-black/60 px-2 py-0.5 rounded font-bold border border-white/20">
                  {vid.type}
                </span>
                <span className="text-sm font-mono bg-black/60 px-2 py-0.5 rounded flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#16C79A]" /> {vid.duration}
                </span>
              </div>

              {/* Center Play Button */}
              <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-[#1E3E62] flex items-center justify-center mx-auto my-auto text-white group-hover:bg-[#1E3E62] group-hover:border-[#16C79A] transition-all shadow-lg">
                <Play className="w-5 h-5 fill-[#16C79A] ml-0.5" />
              </div>

              <div className="z-10">
                <p className="text-sm font-mono text-amber-300 font-bold">PLATFORM: {vid.platform}</p>
                <h4 className="text-lg font-bold font-serif text-white leading-tight">{vid.title}</h4>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-sm font-mono text-[#16C79A] uppercase block font-bold">STORYBOARD SUMMARY:</span>
              <p className="text-sm text-white leading-normal line-clamp-2">{vid.storyboard}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0B192C] border border-[#1E3E62] max-w-2xl w-full rounded-2xl p-6 space-y-4 shadow-2xl relative text-white">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#000000] text-white border border-[#1E3E62] font-bold flex items-center justify-center hover:bg-[#16C79A] hover:text-black cursor-pointer"
            >
              ✕
            </button>

            <span className="text-sm font-mono uppercase text-[#16C79A] font-bold tracking-widest block">
              VIDEO CREATIVE DEMO: {activeVideo.type}
            </span>

            {/* Interactive Player Screen */}
            <div className={`h-64 rounded-xl bg-gradient-to-br ${activeVideo.color} p-6 flex flex-col justify-between text-white relative overflow-hidden`}>
              <div className="flex justify-between items-center z-10">
                <span className="text-sm font-mono bg-black/60 px-2.5 py-1 rounded font-bold border border-white/20">
                  {activeVideo.platform}
                </span>
                <span className="text-sm font-mono bg-black/60 px-2.5 py-1 rounded">
                  {activeVideo.duration}
                </span>
              </div>

              <div className="my-auto text-center space-y-3 z-10">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md border border-[#1E3E62] flex items-center justify-center mx-auto text-white hover:scale-110 hover:bg-[#1E3E62] transition-all cursor-pointer shadow-xl"
                >
                  <Play className={`w-7 h-7 fill-[#16C79A] ${isPlaying ? "animate-pulse" : "ml-1"}`} />
                </button>
                <p className="text-sm font-mono text-amber-300 font-bold uppercase">
                  {isPlaying ? "▶ NOW PLAYING PREVIEW SIMULATION..." : "CLICK TO PLAY STORYBOARD AUDIO"}
                </p>
              </div>

              <div className="z-10">
                <h3 className="text-lg font-bold font-serif text-[#16C79A]">{activeVideo.title}</h3>
              </div>
            </div>

            <div className="space-y-2 text-sm font-sans text-white">
              <p><strong>Storyboard Outline:</strong> {activeVideo.storyboard}</p>
              <p><strong>Audio Score Strategy:</strong> {activeVideo.audioTrack}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
