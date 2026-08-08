import React, { useState } from "react";
import { Key, Palette, Type, ShieldCheck, Sparkles, Copy, Check } from "lucide-react";

export default function CampaignBrandingShowcase() {
  const [activeTab, setActiveTab] = useState<"logo" | "mnemonic" | "colors" | "typography">("logo");
  const [copiedHashtag, setCopiedHashtag] = useState(false);

  const handleCopyHashtags = () => {
    navigator.clipboard.writeText("#DesherChabiAponarHate #DecentralizeBD #SmartDistricts #TeamV");
    setCopiedHashtag(true);
    setTimeout(() => setCopiedHashtag(false), 2000);
  };

  return (
    <div className="space-y-4 my-2 font-sans text-white">
      {/* Sub-Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-[#1E3E62] pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("logo")}
          className={`px-3 py-1.5 rounded-xl text-sm font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === "logo"
              ? "bg-[#1E3E62] text-[#16C79A] font-bold shadow-md border border-[#16C79A]"
              : "bg-[#0B192C] text-white border border-[#1E3E62] hover:bg-[#1E3E62]"
          }`}
        >
          <Key className="w-3.5 h-3.5" />
          1. Campaign Logo & Mark
        </button>

        <button
          onClick={() => setActiveTab("mnemonic")}
          className={`px-3 py-1.5 rounded-xl text-sm font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === "mnemonic"
              ? "bg-[#1E3E62] text-[#16C79A] font-bold shadow-md border border-[#16C79A]"
              : "bg-[#0B192C] text-white border border-[#1E3E62] hover:bg-[#1E3E62]"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          2. Mnemonic Key Symbol
        </button>

        <button
          onClick={() => setActiveTab("colors")}
          className={`px-3 py-1.5 rounded-xl text-sm font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === "colors"
              ? "bg-[#1E3E62] text-[#16C79A] font-bold shadow-md border border-[#16C79A]"
              : "bg-[#0B192C] text-white border border-[#1E3E62] hover:bg-[#1E3E62]"
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          3. Color Palette System
        </button>

        <button
          onClick={() => setActiveTab("typography")}
          className={`px-3 py-1.5 rounded-xl text-sm font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === "typography"
              ? "bg-[#1E3E62] text-[#16C79A] font-bold shadow-md border border-[#16C79A]"
              : "bg-[#0B192C] text-white border border-[#1E3E62] hover:bg-[#1E3E62]"
          }`}
        >
          <Type className="w-3.5 h-3.5" />
          4. Slogans & Copywriting
        </button>
      </div>

      {/* TAB 1: CAMPAIGN LOGO & MARK */}
      {activeTab === "logo" && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-6 space-y-4">
            <span className="text-sm font-mono text-[#16C79A] uppercase font-bold tracking-widest bg-[#000000] px-2 py-0.5 rounded border border-[#1E3E62]">
              OFFICIAL CAMPAIGN LOGOMARK
            </span>

            {/* SVG Logo Display Container */}
            <div className="p-6 rounded-2xl bg-[#0B192C] border border-[#1E3E62] flex flex-col items-center justify-center text-center space-y-4 shadow-xl relative overflow-hidden">
              {/* Vector Logo Icon */}
              <div className="w-20 h-20 rounded-2xl bg-[#1E3E62] p-0.5 shadow-md flex items-center justify-center border border-[#16C79A]">
                <div className="w-full h-full rounded-[14px] bg-[#000000] flex items-center justify-center relative">
                  <svg className="w-10 h-10 text-[#16C79A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4.1a1 1 0 0 0-1.4 0l-2.1 2.1a1 1 0 0 0 0 1.3" />
                    <path d="m11 12 4.5-4.5" />
                    <circle cx="7.5" cy="15.5" r="5.5" />
                  </svg>
                  <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-[#DC2626] animate-ping" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-serif text-[#16C79A] tracking-tight">দেশের চাবি আপনার হাতে</h2>
                <p className="text-sm font-mono text-white font-bold uppercase tracking-widest mt-1">DESHER CHABI APONAR HATE</p>
                <p className="text-sm text-gray-300 font-sans mt-1">Move Opportunity, Not People • TEAM-V Campaign</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 space-y-3">
            <h3 className="text-base font-bold text-[#16C79A] font-mono uppercase">Logo Design Rationale</h3>
            <p className="text-sm text-white leading-relaxed">
              The official campaign logo merges a <strong className="text-[#16C79A]">golden key silhouette</strong> with Bangladesh's divisional delta nodes. The key symbolizes that the solution to urban overcrowding is already in the hands of citizens and policymakers.
            </p>
            <div className="p-3 rounded-xl bg-[#0B192C] border border-[#1E3E62] space-y-1 text-sm shadow-sm">
              <p className="text-[#16C79A] font-bold">Logo Guidelines:</p>
              <p className="text-white">• Clear space: Minimum 16px around the logomark.</p>
              <p className="text-white">• Primary variant: Teal Key on Dark Slate background.</p>
              <p className="text-white">• Secondary variant: High-contrast monochrome white for dark surfaces.</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MNEMONIC KEY SYMBOL */}
      {activeTab === "mnemonic" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#0B192C] border border-[#1E3E62] space-y-3 text-center shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-[#000000] border border-[#1E3E62] flex items-center justify-center text-[#16C79A] mx-auto">
              <Key className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#16C79A]">The Mnemonic Key Symbol</h4>
            <p className="text-sm text-white leading-relaxed">
              A recognizable visual shorthand used across social media avatars, video watermarks, and enamel badges.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0B192C] border border-[#1E3E62] space-y-3 text-center shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-[#000000] border border-[#1E3E62] flex items-center justify-center text-[#16C79A] mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#16C79A]">Visual Memory Anchor</h4>
            <p className="text-sm text-white leading-relaxed">
              Designed to trigger instant recognition during 15-second TikTok videos and campus activation displays.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0B192C] border border-[#1E3E62] space-y-3 text-center shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-[#000000] border border-[#1E3E62] flex items-center justify-center text-[#16C79A] mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#16C79A]">Digital Verification Seal</h4>
            <p className="text-sm text-white leading-relaxed">
              Serves as an official badge on verified campaign petitions, policy infographics, and university posters.
            </p>
          </div>
        </div>
      )}

      {/* TAB 3: COLOR PALETTE SYSTEM */}
      {activeTab === "colors" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-[#006A4E] text-white space-y-2 shadow-sm border border-[#16C79A]/30">
              <span className="text-sm font-mono uppercase bg-black/40 px-2 py-0.5 rounded font-bold text-[#16C79A]">PRIMARY</span>
              <p className="text-base font-bold text-white">Delta Green</p>
              <p className="text-sm font-mono text-white">HEX: #006A4E</p>
              <p className="text-sm text-white">Symbolizes sovereign Bangladesh, fertile soil & national identity.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1746A2] text-white space-y-2 shadow-sm border border-[#1E3E62]">
              <span className="text-sm font-mono uppercase bg-black/40 px-2 py-0.5 rounded font-bold text-[#16C79A]">SECONDARY</span>
              <p className="text-base font-bold text-white">Cobalt Royal Blue</p>
              <p className="text-sm font-mono text-white">HEX: #1746A2</p>
              <p className="text-sm text-white">Symbolizes digital innovation, trust & regional network nodes.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#DC2626] text-white space-y-2 shadow-sm border border-red-500/30">
              <span className="text-sm font-mono uppercase bg-black/40 px-2 py-0.5 rounded font-bold text-white">ACCENT</span>
              <p className="text-base font-bold text-white">Vermillion Red</p>
              <p className="text-sm font-mono text-white">HEX: #DC2626</p>
              <p className="text-sm text-white">Symbolizes urge for social change & critical statistics.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0B192C] border border-[#1E3E62] text-white space-y-2 shadow-sm">
              <span className="text-sm font-mono uppercase bg-[#000000] px-2 py-0.5 rounded font-bold text-[#16C79A]">BACKGROUND</span>
              <p className="text-base font-bold text-white">Pitch Black</p>
              <p className="text-sm font-mono text-white">HEX: #000000</p>
              <p className="text-sm text-white">High-contrast dark theme backdrop for immersive data presentation.</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: SLOGANS & COPYWRITING */}
      {activeTab === "typography" && (
        <div className="space-y-3">
          <div className="p-5 rounded-2xl bg-[#0B192C] border border-[#1E3E62] shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-mono text-[#16C79A] font-bold uppercase tracking-widest">CAMPAIGN SLOGANS & HASHTAGS</span>
              <button
                onClick={handleCopyHashtags}
                className="px-3 py-1 rounded-lg bg-[#000000] border border-[#1E3E62] text-[#16C79A] text-sm font-mono font-bold flex items-center gap-1.5 hover:bg-[#1E3E62] transition-all cursor-pointer"
              >
                {copiedHashtag ? <Check className="w-3.5 h-3.5 text-[#16C79A]" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedHashtag ? "Copied!" : "Copy Hashtags"}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="p-3.5 rounded-xl bg-[#000000] border border-[#1E3E62] space-y-1">
                <span className="text-sm font-mono text-[#16C79A] uppercase font-bold">PRIMARY BENGALI SLOGAN</span>
                <p className="text-lg font-bold font-serif text-white">"আমাদের গ্রাম, আমাদের ভবিষ্যত — সুযোগ ছড়াক ৬৪ জেলায়!"</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#000000] border border-[#1E3E62] space-y-1">
                <span className="text-sm font-mono text-[#16C79A] uppercase font-bold">ENGLISH HERO TAGLINE</span>
                <p className="text-lg font-bold font-sans text-white">"Move Opportunity, Not People."</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-sm font-mono text-[#16C79A]">
              <span className="px-2.5 py-1 rounded-md bg-[#000000] border border-[#1E3E62] font-bold">#DesherChabiAponarHate</span>
              <span className="px-2.5 py-1 rounded-md bg-[#000000] border border-[#1E3E62] font-bold">#DecentralizeBD</span>
              <span className="px-2.5 py-1 rounded-md bg-[#000000] border border-[#1E3E62] font-bold">#SmartDistricts</span>
              <span className="px-2.5 py-1 rounded-md bg-[#000000] border border-[#1E3E62] font-bold">#TeamV_SMUCT</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
