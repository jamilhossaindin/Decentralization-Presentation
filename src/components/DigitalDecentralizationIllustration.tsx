import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  Code,
  Cpu,
  PhoneCall,
  ShoppingBag,
  Zap,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Building,
  Laptop,
  CheckCircle2,
  DollarSign,
  Layers,
  Sparkles
} from "lucide-react";

interface CareerPathway {
  id: string;
  title: string;
  category: string;
  monthlyUsd: string;
  monthlyBdt: string;
  hometown: string;
  globalMarket: string;
  flag: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
  desc: string;
  economicImpact: string;
}

export default function DigitalDecentralizationIllustration() {
  const [selectedCareer, setSelectedCareer] = useState<string>("dev");

  const pathways: CareerPathway[] = [
    {
      id: "dev",
      title: "Software Engineering & Cloud",
      category: "Full-Stack & Cloud Architecture",
      monthlyUsd: "$4,500/mo",
      monthlyBdt: "৳5,40,000/mo",
      hometown: "Rajshahi / Sylhet Hub",
      globalMarket: "San Francisco, USA & Munich, Germany",
      flag: "🇺🇸 🇩🇪",
      icon: <Code className="w-5 h-5 text-[#16C79A]" />,
      color: "#16C79A",
      skills: ["React / TypeScript", "Node.js & Go", "AWS Cloud Architecture", "AI / LLM Integration"],
      desc: "Building high-performance web applications and cloud backend pipelines directly from regional university cities.",
      economicImpact: "95% of income injected directly into regional savings and local hometown real estate."
    },
    {
      id: "design",
      title: "UI/UX & Product Design",
      category: "Design Systems & Mobile Apps",
      monthlyUsd: "$3,200/mo",
      monthlyBdt: "৳3,84,000/mo",
      hometown: "Khulna / Rangpur Hub",
      globalMarket: "Amsterdam, Netherlands & London, UK",
      flag: "🇳🇱 🇬🇧",
      icon: <Cpu className="w-5 h-5 text-[#06B6D4]" />,
      color: "#06B6D4",
      skills: ["Figma Design Systems", "Micro-Interactions", "Mobile App UI", "User Research & Prototypes"],
      desc: "Crafting modern, accessible digital interfaces and design languages for European tech startups.",
      economicImpact: "Zero commute costs; creative output produced in spacious regional design studios."
    },
    {
      id: "support",
      title: "Enterprise SaaS Tech Operations",
      category: "B2B Customer Engineering",
      monthlyUsd: "$1,800/mo",
      monthlyBdt: "৳2,16,000/mo",
      hometown: "Barishal / Mymensingh Hub",
      globalMarket: "Sydney, Australia & Singapore",
      flag: "🇦🇺 🇸🇬",
      icon: <PhoneCall className="w-5 h-5 text-[#F59E0B]" />,
      color: "#F59E0B",
      skills: ["24/7 Global Ops", "API Debugging", "Zendesk / Intercom", "SaaS Implementation"],
      desc: "Solving mission-critical enterprise tickets and cloud infrastructure status queries across APAC time zones.",
      economicImpact: "High-stability foreign exchange revenue without leaving family or homeland roots."
    },
    {
      id: "ecommerce",
      title: "Direct D2C Regional E-Commerce",
      category: "Artisan, Silk & Organic Export",
      monthlyUsd: "$1,400/mo",
      monthlyBdt: "৳1,68,000+/mo",
      hometown: "Tangail / Bogura Hub",
      globalMarket: "Nationwide & Global Diaspora",
      flag: "🇧🇩 🌍",
      icon: <ShoppingBag className="w-5 h-5 text-[#EC4899]" />,
      color: "#EC4899",
      skills: ["Shopify & WooCommerce", "Cold-Chain Logistics", "Direct Artisan Sourcing", "Social Brand Ads"],
      desc: "Connecting regional weavers, organic farmers, and leather artisans directly with high-paying urban and diaspora consumers.",
      economicImpact: "Eliminates predatory middlemen; distributes 80%+ of retail margin directly to rural producers."
    }
  ];

  const activePathway = pathways.find((p) => p.id === selectedCareer) || pathways[0];

  return (
    <div className="w-full flex-1 flex flex-col justify-between gap-4 font-sans text-white">
      {/* 1. TOP VISUAL: Global Remote Flow Diagram */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#0B192C] border border-[#1E3E62] shadow-xl relative overflow-hidden">
        {/* Ambient background glow */}
        <div
          className="absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-500"
          style={{ backgroundColor: activePathway.color }}
        />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 relative z-10">
          {/* Left Flow: Regional District Hub */}
          <div className="flex items-center gap-3.5 bg-[#000000]/60 p-3.5 rounded-xl border border-[#1E3E62] flex-1 w-full lg:w-auto">
            <div className="w-12 h-12 rounded-xl bg-[#16C79A]/20 border border-[#16C79A] flex items-center justify-center flex-shrink-0">
              <Laptop className="w-6 h-6 text-[#16C79A]" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#16C79A] font-bold uppercase tracking-wider">
                ORIGIN: REGIONAL TALENT HUBS
              </span>
              <h4 className="text-base font-bold font-serif text-white">
                {activePathway.hometown}
              </h4>
              <p className="text-xs text-gray-300 font-sans mt-0.5">
                High-speed broadband + low-cost regional living
              </p>
            </div>
          </div>

          {/* Center Connection Stream */}
          <div className="flex flex-col items-center justify-center px-2 py-1 flex-shrink-0">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#16C79A] bg-[#1E3E62] px-3 py-1 rounded-full border border-[#16C79A]/40">
              <Zap className="w-3.5 h-3.5 animate-pulse text-[#16C79A]" />
              <span>HIGH-SPEED OPTICAL FIBER</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
            <span className="text-[11px] font-mono text-gray-300 mt-1 font-semibold">
              Zero Physical Border Friction
            </span>
          </div>

          {/* Right Flow: Global Market Destination */}
          <div className="flex items-center gap-3.5 bg-[#000000]/60 p-3.5 rounded-xl border border-[#1E3E62] flex-1 w-full lg:w-auto">
            <div className="w-12 h-12 rounded-xl bg-[#1E3E62] border border-[#1E3E62] flex items-center justify-center flex-shrink-0 text-xl">
              {activePathway.flag.split(" ")[0]}
            </div>
            <div>
              <span className="text-xs font-mono text-[#06B6D4] font-bold uppercase tracking-wider">
                DESTINATION CLIENTS
              </span>
              <h4 className="text-base font-bold font-serif text-white">
                {activePathway.globalMarket}
              </h4>
              <p className="text-xs text-gray-300 font-sans mt-0.5">
                Direct foreign currency remittance inflow
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MIDDLE: 4 Interactive Digital Career Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {pathways.map((path) => {
          const isSelected = selectedCareer === path.id;
          return (
            <div
              key={path.id}
              onClick={() => setSelectedCareer(path.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                isSelected
                  ? "bg-[#1E3E62] shadow-xl scale-[1.02]"
                  : "bg-[#0B192C] border-[#1E3E62] hover:bg-[#1E3E62]/60"
              }`}
              style={{
                borderColor: isSelected ? path.color : "#1E3E62",
                boxShadow: isSelected ? `0 0 16px ${path.color}33` : "none"
              }}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                    style={{
                      backgroundColor: isSelected ? "#0B192C" : "rgba(30, 62, 98, 0.6)",
                      borderColor: path.color
                    }}
                  >
                    {path.icon}
                  </div>
                  <span
                    className="text-xs font-mono font-bold px-2 py-0.5 rounded-md border"
                    style={{
                      color: path.color,
                      borderColor: isSelected ? path.color : "#1E3E62",
                      backgroundColor: "#0B192C"
                    }}
                  >
                    {path.flag}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold font-serif text-white leading-snug">
                    {path.title}
                  </h4>
                  <p className="text-xs text-gray-300 font-sans mt-0.5 line-clamp-2">
                    {path.desc}
                  </p>
                </div>
              </div>

              <div className="pt-2.5 border-t border-[#1E3E62]/80 flex justify-between items-center">
                <div>
                  <span className="text-[11px] font-mono text-gray-300 block uppercase">
                    Earning Inflow
                  </span>
                  <span
                    className="text-sm sm:text-base font-mono font-black"
                    style={{ color: path.color }}
                  >
                    {path.monthlyUsd}
                  </span>
                </div>
                <span className="text-xs font-mono text-gray-300 font-bold bg-[#000000]/60 px-2 py-1 rounded border border-[#1E3E62]">
                  {path.monthlyBdt}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. ACTIVE PATHWAY DETAIL DOSSIER & ECONOMIC MULTIPLIER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left Box: Active Pathway Deep Dive */}
        <div className="lg:col-span-7 p-4 sm:p-5 rounded-2xl bg-[#0B192C] border border-[#1E3E62] shadow-xl flex flex-col justify-between space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span
                className="text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5"
                style={{ color: activePathway.color }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                ACTIVE CAREER AUDIT: {activePathway.category}
              </span>
              <span className="text-xs font-mono text-gray-300 font-bold bg-[#000000] px-2.5 py-1 rounded border border-[#1E3E62]">
                HOMETOWN: {activePathway.hometown}
              </span>
            </div>

            <h3 className="text-xl font-bold font-serif text-white flex items-center gap-2">
              {activePathway.title}
              <span className="text-sm font-mono font-bold" style={{ color: activePathway.color }}>
                ({activePathway.monthlyUsd} / {activePathway.monthlyBdt})
              </span>
            </h3>

            <p className="text-sm text-gray-200 font-sans leading-relaxed">
              {activePathway.desc} {activePathway.economicImpact}
            </p>
          </div>

          <div className="pt-2 border-t border-[#1E3E62]">
            <span className="text-xs font-mono text-gray-300 font-bold block mb-1.5 uppercase">
              Core Technical Competencies:
            </span>
            <div className="flex flex-wrap gap-2">
              {activePathway.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-[#1E3E62] text-white border border-[#1E3E62] flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#16C79A]" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Box: Hometown Economic Multipliers */}
        <div className="lg:col-span-5 p-4 sm:p-5 rounded-2xl bg-[#0B192C] border border-[#1E3E62] shadow-xl flex flex-col justify-between space-y-3">
          <span className="text-xs font-mono text-[#16C79A] font-bold uppercase tracking-widest flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            REGIONAL WEALTH MULTIPLIER
          </span>

          <div className="space-y-2.5">
            <div className="p-2.5 rounded-xl bg-[#000000]/60 border border-[#1E3E62] flex items-center justify-between">
              <div>
                <p className="text-xs font-mono text-gray-300 font-bold uppercase">LIVING COST REDUCTION</p>
                <p className="text-sm font-bold text-white font-sans">65% Cheaper than Dhaka Rent & Utilities</p>
              </div>
              <span className="text-base font-mono font-black text-[#16C79A]">-65%</span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#000000]/60 border border-[#1E3E62] flex items-center justify-between">
              <div>
                <p className="text-xs font-mono text-gray-300 font-bold uppercase">COMMUTE TIME SAVED</p>
                <p className="text-sm font-bold text-white font-sans">3.5 Hours Saved Daily from Traffic</p>
              </div>
              <span className="text-base font-mono font-black text-[#06B6D4]">100%</span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#000000]/60 border border-[#1E3E62] flex items-center justify-between">
              <div>
                <p className="text-xs font-mono text-gray-300 font-bold uppercase">LOCAL COMMERCE RETENTION</p>
                <p className="text-sm font-bold text-white font-sans">92% Foreign Earnings Spent in District</p>
              </div>
              <span className="text-base font-mono font-black text-[#F59E0B]">92%</span>
            </div>
          </div>

          <div className="pt-2 border-t border-[#1E3E62] text-[11px] font-mono text-gray-300 flex justify-between font-bold">
            <span>DECENTRALIZED CAREER PROTOCOL</span>
            <span className="text-[#16C79A]">ACTIVE ECOSYSTEM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
