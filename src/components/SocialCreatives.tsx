import React from "react";
import { Image, Video, Hash, Sparkles } from "lucide-react";

export default function SocialCreatives() {
  return (
    <div className="space-y-4 my-2 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* CREATIVE 1: STATIC FB/IG CAROUSEL */}
        <div className="p-5 rounded-2xl bg-dark-surface/60 border border-emerald-500/20 space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-mono text-emerald-400 uppercase font-bold tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                STATIC CAROUSEL
              </span>
              <Image className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="h-32 rounded-xl bg-gradient-to-br from-emerald-950/60 to-dark-bg border border-emerald-500/30 p-4 flex flex-col justify-between text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
              <p className="text-sm font-mono text-emerald-400 uppercase font-bold">#DesherChabiAponarHate</p>
              <h4 className="text-base font-bold font-serif text-white">"কেন ঢাকাতেই সব? আপনার জেলাও হতে পারে দেশের পাওয়ারহাউস!"</h4>
              <p className="text-sm text-gray-400">Swipe to see Divisional Potential →</p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white">Facebook & IG Info Carousel</h4>
              <p className="text-sm text-gray-300 mt-1 leading-normal">
                5-slide graphic carousel highlighting population density vs district brain drain.
              </p>
            </div>
          </div>
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-sm font-mono text-gray-400">
            <span>FORMAT: 1080x1080px</span>
            <span>PLATFORM: FB / IG</span>
          </div>
        </div>

        {/* CREATIVE 2: DYNAMIC REELS / TIKTOK */}
        <div className="p-5 rounded-2xl bg-dark-surface/60 border border-sky-500/20 space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-mono text-sky-400 uppercase font-bold tracking-widest bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                DYNAMIC REELS / TIKTOK
              </span>
              <Video className="w-4 h-4 text-sky-400" />
            </div>

            <div className="h-32 rounded-xl bg-gradient-to-br from-sky-950/60 to-dark-bg border border-sky-500/30 p-4 flex flex-col justify-between text-center relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-sky-500/10 rounded-full blur-xl pointer-events-none" />
              <p className="text-sm font-mono text-red-400 font-bold uppercase">LIVE TICKER OVC</p>
              <h4 className="text-sm font-bold font-sans text-white">"ঢাকার ৩ ঘণ্টা জ্যাম নাকি নিজের জেলায় বুয়েট ব্রাঞ্চ?"</h4>
              <p className="text-sm text-sky-400 font-bold">15-Sec Motion Video</p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white">Short Video Motion Spot</h4>
              <p className="text-sm text-gray-300 mt-1 leading-normal">
                High-energy motion graphic comparison video built for TikTok, Reels & Shorts.
              </p>
            </div>
          </div>
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-sm font-mono text-gray-400">
            <span>FORMAT: 1080x1920px (9:16)</span>
            <span>PLATFORM: REELS / TIKTOK</span>
          </div>
        </div>

        {/* CREATIVE 3: COPYWRITING & HASHTAGS */}
        <div className="p-5 rounded-2xl bg-dark-surface/60 border border-purple-500/20 space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-mono text-purple-400 uppercase font-bold tracking-widest bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                COPYWRITING FORMULA
              </span>
              <Hash className="w-4 h-4 text-purple-400" />
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-2 text-sm">
              <p className="text-purple-300 font-bold">Main Slogan:</p>
              <p className="text-white font-serif italic text-base font-semibold">"আমাদের গ্রাম, আমাদের ভবিষ্যত — সুযোগ ছড়াক ৬ ৪ জেলায়!"</p>
              <div className="flex flex-wrap gap-1 text-sm font-mono text-purple-400">
                <span>#DesherChabi</span>
                <span>#DecentralizeBD</span>
                <span>#SmartDistricts</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white">Emotional Hook & Advocacy Copy</h4>
              <p className="text-sm text-gray-300 mt-1 leading-normal">
                Empathetic copywriting addressing regional youth pride and economic empowerment.
              </p>
            </div>
          </div>
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-sm font-mono text-gray-400">
            <span>TONE: INSPIRATIONAL & BOLD</span>
            <span>TARGET: YOUTH</span>
          </div>
        </div>
      </div>
    </div>
  );
}
