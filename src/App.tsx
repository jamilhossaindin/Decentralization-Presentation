import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  ChevronUp,
  TrendingDown,
  TrendingUp,
  MapPin,
  AlertCircle,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Activity,
  Building2,
  Sliders,
  Globe,
  Award,
  ArrowRight,
  RefreshCw,
  Zap,
  HelpCircle,
  Megaphone,
  CheckCircle2,
  Users,
  Target,
  Sparkles,
  Shirt,
  DollarSign,
  Clock,
  Video,
  Layers,
  FileText,
  Camera,
  Film
} from "lucide-react";

// Core Map & Interactive Components
import MapRenderer from "./components/MapRenderer";
import InvestigativeTree from "./components/InvestigativeTree";
import CentralizationLoop from "./components/CentralizationLoop";
import DigitalDecentralizationIllustration from "./components/DigitalDecentralizationIllustration";

// Marketing & Campaign Framework Components
import SWOTMatrix from "./components/SWOTMatrix";
import MarketingMix4Ps from "./components/MarketingMix4Ps";
import AIDAFunnel from "./components/AIDAFunnel";
import AudienceSegmentation from "./components/AudienceSegmentation";
import CampaignBrandingShowcase from "./components/CampaignBrandingShowcase";
import MerchandiseShowcase from "./components/MerchandiseShowcase";
import CampaignTimeline from "./components/CampaignTimeline";
import CampaignBudget from "./components/CampaignBudget";

// Galleries for Creative Content Design
import PhotoGallery from "./components/PhotoGallery";
import VideoGallery from "./components/VideoGallery";
import CoverPageReferenceStyle from "./components/CoverPageReferenceStyle";

import { regions, RegionData } from "./data/mapData";

type HeatmapLayer = "jobs" | "universities" | "hospitals" | "investment" | "industrialZones" | "none";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dynamic Live Counters
  const [livePopulation, setLivePopulation] = useState(36601420);
  const [liveMigration, setLiveMigration] = useState(1724);
  const [arrivalsToday, setArrivalsToday] = useState(1142);
  const [liveDensity, setLiveDensity] = useState(48150.2468);
  const [trafficLoss, setTrafficLoss] = useState(384012040);

  // Interactive Layer Selector & Region State
  const [opportunityLayer, setOpportunityLayer] = useState<HeatmapLayer>("jobs");
  const [selectedRegion, setSelectedRegion] = useState<RegionData>(
    regions.find((r) => r.id === "khulna") || regions[0]
  );
  const [sliderVal, setSliderVal] = useState(0);

  // Touch handlers
  const touchStartY = useRef(0);

  // Real-time counter tickers
  useEffect(() => {
    const costTimer = setInterval(() => {
      setTrafficLoss((prev) => prev + Math.floor(Math.random() * 80) + 35);
    }, 100);

    const popTimer = setInterval(() => {
      setLivePopulation((prev) => {
        if (Math.random() > 0.45) {
          setLiveDensity((d) => d + 0.0033);
          setArrivalsToday((a) => (a >= 2500 ? 500 : a + 1));
          return prev + 1;
        }
        return prev;
      });

      setLiveMigration((prev) => {
        const next = prev + (Math.floor(Math.random() * 7) - 3);
        if (next < 1680) return 1715;
        if (next > 1790) return 1735;
        return next;
      });
    }, 1500);

    return () => {
      clearInterval(costTimer);
      clearInterval(popTimer);
    };
  }, []);

  const totalSlides = 16;

  const navigateToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  const handleNext = () => navigateToSlide(currentSlide + 1);
  const handlePrev = () => navigateToSlide(currentSlide - 1);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartY.current - e.changedTouches[0].clientY;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
  };

  const slideHeaders = [
    "01. Team & Cover Page",
    "02. Campaign Overview",
    "03. Social Context",
    "04. Problem Identification",
    "05. Root Cause Tree",
    "06. Centralization Loop",
    "07. Spatial Inequality",
    "08. Social & Economic Costs",
    "09. Paradigm Shift",
    "10. Strategy: SWOT & 4Ps",
    "11. Audience & AIDA Model",
    "12. Content Design: Photo Gallery",
    "13. Content Design: Video Gallery",
    "14. Merchandise & Stalls",
    "15. HR, Timeline & Budget",
    "16. Delta Simulator & Vision"
  ];

  return (
    <div
      className="min-h-screen bg-[#EBE7DF] text-[#111111] flex flex-col justify-between selection:bg-[#1746A2] selection:text-white overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* TOP HEADER NAVIGATION */}
      <header className="h-16 px-6 md:px-10 border-b border-black/10 z-30 flex items-center justify-between flex-shrink-0 bg-[#EBE7DF]">
        <div className="flex items-center gap-4">
          <div className="w-2.5 h-2.5 bg-[#1746A2] rounded-full shadow-[0_0_8px_#1746A2] animate-pulse"></div>
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase font-mono text-gray-800">
              SUMCT GRD-3216 // DECENTRALIZATION STUDY
            </span>
          </div>
        </div>

        {/* Global Progress Indicator */}
        <div className="hidden md:flex items-center gap-4 text-[11px] tracking-widest uppercase font-mono text-gray-600">
          <span className="text-[#1746A2] border-b-2 border-[#1746A2] pb-0.5 font-bold">16-PAGE EDITORIAL</span>
          <div className="flex items-center gap-2">
            <span>PROGRESS:</span>
            <span className="font-bold text-black">{Math.round((currentSlide / (totalSlides - 1)) * 100)}%</span>
            <div className="w-16 h-1.5 bg-black/10 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-[#1746A2] transition-all duration-500 ease-out"
                style={{ width: `${(currentSlide / (totalSlides - 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="text-right text-[10px] font-mono tracking-widest text-[#1746A2] font-bold hidden sm:block">
          <span>23.0225° N 72.5714° E</span>
        </div>
      </header>

      {/* MAIN STAGE */}
      <main className="flex-1 grid grid-cols-1 xl:grid-cols-12 gap-6 p-4 md:p-6 items-stretch relative z-20">
        {/* Left Side Navigation Sidebar */}
        <nav className="xl:col-span-2 hidden xl:flex flex-col gap-1.5 justify-center py-2 bg-black/5 border-r border-black/10 pr-3 overflow-y-auto max-h-[82vh]">
          <span className="text-[9px] uppercase font-mono tracking-widest text-gray-500 mb-1">Index (16 Pages)</span>
          {slideHeaders.map((headerText, idx) => {
            const isCurrent = currentSlide === idx;
            const isCompleted = currentSlide > idx;

            return (
              <button
                key={idx}
                onClick={() => navigateToSlide(idx)}
                className={`py-1.5 px-2.5 text-left rounded-md text-[11px] font-medium font-sans transition-all duration-200 flex items-center justify-between cursor-pointer ${
                  isCurrent
                    ? "text-white bg-[#1746A2] font-bold shadow-sm"
                    : isCompleted
                    ? "text-gray-700 hover:text-black hover:bg-black/5"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <span className="truncate">{headerText}</span>
                {isCompleted && <span className="w-1.5 h-1.5 rounded-full bg-[#1746A2]" />}
              </button>
            );
          })}
        </nav>

        {/* Display Stage */}
        <div className="xl:col-span-10 flex flex-col justify-center items-center min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full max-w-5xl"
            >
              {/* --- PAGE 01: COVER & TEAM PAGE (100% FAITHFUL TO REFERENCE IMAGE) --- */}
              {currentSlide === 0 && (
                <CoverPageReferenceStyle onNext={handleNext} />
              )}

              {/* --- PAGE 02: CAMPAIGN OVERVIEW --- */}
              {currentSlide === 1 && (
                <div className="space-y-6 py-2">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-[#1746A2] font-bold uppercase tracking-widest">02. Executive Campaign Proposal</span>
                    <h2 className="text-3xl font-bold font-display text-black">Digital Marketing Campaign for <span className="text-[#1746A2]">Social Change</span></h2>
                    <p className="text-sm text-gray-700 font-sans">Campaign Title: <strong>"Desher Chabi Aponar Hate / Move Opportunity, Not People"</strong></p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-5 rounded-2xl bg-white border border-black/15 space-y-2 shadow-sm">
                      <span className="text-xs font-mono text-[#1746A2] font-bold uppercase">1. IDENTIFY ISSUE</span>
                      <h3 className="text-base font-bold text-black">Urban Centralization</h3>
                      <p className="text-xs text-gray-600">36.6M+ citizens squeezed into 0.2% of national land while regional districts lack opportunities.</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-black/15 space-y-2 shadow-sm">
                      <span className="text-xs font-mono text-[#DC2626] font-bold uppercase">2. INSPIRE CHANGE</span>
                      <h3 className="text-base font-bold text-black">"Move Opportunity, Not People"</h3>
                      <p className="text-xs text-gray-600">Advocate for corporate tax holidays, BUET divisional branches, and high-speed regional remote tech hubs.</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-black/15 space-y-2 shadow-sm">
                      <span className="text-xs font-mono text-[#1746A2] font-bold uppercase">3. DESIGN CAMPAIGN</span>
                      <h3 className="text-base font-bold text-black">Omnichannel Digital Mix</h3>
                      <p className="text-xs text-gray-600">Viral short videos, interactive website simulator, digital petitions, and campus activation stalls.</p>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between items-center border-t border-black/10">
                    <span className="text-xs font-mono text-gray-600">Page 02 of 16 — Campaign Overview</span>
                    <button onClick={handleNext} className="px-5 py-2 rounded-xl bg-[#1746A2] text-white font-mono text-xs font-bold flex items-center gap-2 cursor-pointer hover:bg-black transition-colors">
                      Next: Social Context →
                    </button>
                  </div>
                </div>
              )}

              {/* --- PAGE 03: SOCIAL CONTEXT --- */}
              {currentSlide === 2 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-2">
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-xs font-mono text-[#DC2626] font-bold uppercase tracking-widest">
                      03. Social Issue Background
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold font-serif text-black leading-tight">
                      Why Does Everyone Move to <br /><span className="text-[#1746A2]">Dhaka?</span>
                    </h2>
                    <p className="text-sm text-gray-700 font-sans leading-relaxed">
                      Over <strong className="text-black">36.6 million citizens</strong> (20%+ of Bangladesh's population) are packed into Dhaka Metropolitan area—just <strong className="text-[#1746A2]">0.2% of national land</strong>.
                    </p>
                    <div className="p-4 rounded-2xl border border-black/15 bg-white space-y-1 shadow-sm">
                      <span className="text-xs font-mono text-[#DC2626] font-bold uppercase">Thesis Statement</span>
                      <p className="text-xs text-black font-medium">Migration is not a personal preference—it is a human reaction to structural monopolization of opportunities.</p>
                    </div>
                  </div>
                  <div className="lg:col-span-6 flex flex-col justify-center">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 font-bold">LIVE MIGRATION FLUX VECTOR</span>
                    <MapRenderer showMigrationFlows={true} />
                  </div>
                </div>
              )}

              {/* --- PAGE 04: PROBLEM IDENTIFICATION & LIVE DATA --- */}
              {currentSlide === 3 && (
                <div className="space-y-6 py-4">
                  <div className="space-y-2 max-w-2xl">
                    <span className="text-xs font-mono text-[#DC2626] uppercase tracking-widest font-bold">04. Facts & Statistics</span>
                    <h2 className="text-2xl sm:text-4xl font-bold font-display text-black">Dhaka Is Reaching Its <span className="text-[#1746A2]">Limits</span></h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-white border border-black/15 shadow-sm">
                      <Activity className="w-5 h-5 text-[#DC2626] mb-2" />
                      <span className="text-[10px] font-mono text-gray-500 uppercase block font-bold">Density</span>
                      <p className="text-xl font-bold font-mono text-black">{liveDensity.toFixed(2)} / km²</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-black/15 shadow-sm">
                      <Briefcase className="w-5 h-5 text-[#1746A2] mb-2" />
                      <span className="text-[10px] font-mono text-gray-500 uppercase block font-bold">Population Inflow</span>
                      <p className="text-xl font-bold font-mono text-black">{livePopulation.toLocaleString()}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-black/15 shadow-sm">
                      <HeartPulse className="w-5 h-5 text-emerald-600 mb-2" />
                      <span className="text-[10px] font-mono text-gray-500 uppercase block font-bold">Daily Arrivals Today</span>
                      <p className="text-xl font-bold font-mono text-emerald-600">+{arrivalsToday}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-black/15 shadow-sm">
                      <TrendingDown className="w-5 h-5 text-[#DC2626] mb-2" />
                      <span className="text-[10px] font-mono text-gray-500 uppercase block font-bold">Gridlock Loss</span>
                      <p className="text-lg font-bold font-mono text-[#DC2626]">৳ {trafficLoss.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* --- PAGE 05: ROOT CAUSE TREE --- */}
              {currentSlide === 4 && (
                <div className="space-y-6 py-4">
                  <div className="space-y-2 max-w-2xl">
                    <span className="text-xs font-mono text-[#1746A2] uppercase tracking-widest font-bold">05. Investigative Breakdown</span>
                    <h2 className="text-2xl sm:text-4xl font-bold font-display text-black">Why Do People Leave Their <span className="text-[#1746A2]">Hometowns?</span></h2>
                  </div>
                  <InvestigativeTree />
                </div>
              )}

              {/* --- PAGE 06: CENTRALIZATION LOOP --- */}
              {currentSlide === 5 && (
                <div className="space-y-6 py-4">
                  <div className="space-y-2 max-w-2xl">
                    <span className="text-xs font-mono text-[#DC2626] uppercase tracking-widest font-bold">06. Self-Reinforcing Spiral</span>
                    <h2 className="text-2xl sm:text-4xl font-bold font-display text-black">The Centralization <span className="text-[#1746A2]">Engine</span></h2>
                  </div>
                  <CentralizationLoop />
                </div>
              )}

              {/* --- PAGE 07: SPATIAL INEQUALITY HEATMAP --- */}
              {currentSlide === 6 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4">
                  <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-mono text-[#1746A2] uppercase tracking-widest font-bold">07. Spatial Inequality</span>
                      <h2 className="text-2xl sm:text-4xl font-bold font-display text-black">Where Is Opportunity <span className="text-[#1746A2]">Located?</span></h2>
                    </div>
                    <div className="flex flex-col gap-2">
                      {[
                        { id: "jobs", label: "Corporate Jobs", desc: "Private jobs and formal commerce", icon: <Briefcase className="w-4 h-4 text-[#1746A2]" /> },
                        { id: "universities", label: "Branch Universities", desc: "Top engineering & medical campuses", icon: <GraduationCap className="w-4 h-4 text-emerald-600" /> },
                        { id: "hospitals", label: "Specialized Healthcare", desc: "Equipped referral clinics & ICU setups", icon: <HeartPulse className="w-4 h-4 text-[#DC2626]" /> },
                        { id: "investment", label: "Venture Investment", desc: "Credit allocations & private finance HQs", icon: <Sliders className="w-4 h-4 text-[#1746A2]" /> }
                      ].map((lay) => (
                        <button key={lay.id} onClick={() => setOpportunityLayer(lay.id as HeatmapLayer)} className={`p-3 text-left rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${opportunityLayer === lay.id ? "border-[#1746A2] bg-white font-bold shadow-sm" : "border-black/10 bg-white/60 text-gray-700 hover:bg-white"}`}>
                          <span>{lay.icon}</span>
                          <div><p className="text-xs font-bold">{lay.label}</p><p className="text-[10px] text-gray-500">{lay.desc}</p></div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <MapRenderer activeLayer={opportunityLayer} />
                  </div>
                </div>
              )}

              {/* --- PAGE 08: SOCIAL & ECONOMIC COSTS --- */}
              {currentSlide === 7 && (
                <div className="space-y-6 py-4">
                  <div className="space-y-2 max-w-2xl">
                    <span className="text-xs font-mono text-[#DC2626] uppercase tracking-widest font-bold">08. Imbalanced Scales</span>
                    <h2 className="text-2xl sm:text-4xl font-bold font-display text-black">What Does Centralization <span className="text-[#1746A2]">Cost?</span></h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-white border border-[#DC2626]/30 space-y-3 shadow-sm">
                      <h4 className="text-base font-bold text-[#DC2626]">Dhaka: The Bursting Bubble</h4>
                      <p className="text-xs text-gray-700 leading-relaxed">50-65% entry salary spent on rent, 2.5-hour daily traffic delays, 3m annual groundwater depletion.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white border border-[#1746A2]/30 space-y-3 shadow-sm">
                      <h4 className="text-base font-bold text-[#1746A2]">The Districts: Cold Brain Drain</h4>
                      <p className="text-xs text-gray-700 leading-relaxed">82% graduate drainage, agricultural decay from lack of processing plants, zero local venture lending.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* --- PAGE 09: PARADIGM SHIFT --- */}
              {currentSlide === 8 && (
                <div className="h-[420px] flex flex-col justify-center items-center text-center p-6 rounded-2xl border border-black/15 bg-white shadow-sm">
                  <span className="text-xs font-mono text-[#DC2626] uppercase font-bold border border-[#DC2626]/30 px-3 py-1 rounded-full bg-red-50 mb-4">
                    POLITICAL REFRAMING CORE
                  </span>
                  <h2 className="text-2xl sm:text-5xl font-bold font-serif text-black">We Have Been Solving the <br /><span className="text-[#1746A2]">Wrong Problem</span></h2>
                  <p className="text-lg italic text-[#1746A2] font-serif mt-4 font-bold">"People don’t move because they love cities. They move because opportunity moves first."</p>
                </div>
              )}

              {/* --- PAGE 10: STRATEGY (SWOT & 4Ps) --- */}
              {currentSlide === 9 && (
                <div className="space-y-6 py-4">
                  <div className="space-y-2 max-w-2xl">
                    <span className="text-xs font-mono text-[#1746A2] uppercase tracking-widest font-bold">10. Marketing Frameworks</span>
                    <h2 className="text-2xl sm:text-4xl font-bold font-display text-black">SWOT Matrix & <span className="text-[#1746A2]">The 4Ps</span></h2>
                  </div>
                  <SWOTMatrix />
                  <MarketingMix4Ps />
                </div>
              )}

              {/* --- PAGE 11: AUDIENCE & AIDA MODEL --- */}
              {currentSlide === 10 && (
                <div className="space-y-6 py-4">
                  <div className="space-y-2 max-w-2xl">
                    <span className="text-xs font-mono text-[#DC2626] uppercase tracking-widest font-bold">11. Audience & Funnel</span>
                    <h2 className="text-2xl sm:text-4xl font-bold font-display text-black">Target Segmentation & <span className="text-[#1746A2]">AIDA Model</span></h2>
                  </div>
                  <AudienceSegmentation />
                  <AIDAFunnel />
                </div>
              )}

              {/* --- PAGE 12: CREATIVE CONTENT DESIGN — PHOTO GALLERY --- */}
              {currentSlide === 11 && (
                <div className="space-y-4 py-2">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-[#1746A2] uppercase tracking-widest font-bold">12. Creative Content Design (Part 1)</span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-display text-black">Photo Gallery: <span className="text-[#1746A2]">Static & Print Creatives</span></h2>
                    <p className="text-xs text-gray-700">Carousels, web banners, posters, stickers, and brand identity deliverables for the social change campaign.</p>
                  </div>
                  <PhotoGallery />
                </div>
              )}

              {/* --- PAGE 13: CREATIVE CONTENT DESIGN — VIDEO GALLERY --- */}
              {currentSlide === 12 && (
                <div className="space-y-4 py-2">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-[#DC2626] uppercase tracking-widest font-bold">13. Creative Content Design (Part 2)</span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-display text-black">Video Gallery: <span className="text-[#1746A2]">TikTok, Reels & OVC Storyboards</span></h2>
                    <p className="text-xs text-gray-700">15-sec TikTok spots, 60-sec main OVC commercial, and regional mini-documentary short films.</p>
                  </div>
                  <VideoGallery />
                </div>
              )}

              {/* --- PAGE 14: MERCHANDISING, PROPS & STALLS --- */}
              {currentSlide === 13 && (
                <div className="space-y-6 py-4">
                  <div className="space-y-2 max-w-2xl">
                    <span className="text-xs font-mono text-[#1746A2] uppercase tracking-widest font-bold">14. Campaign Deliverables</span>
                    <h2 className="text-2xl sm:text-4xl font-bold font-display text-black">Merchandising, Props & <span className="text-[#1746A2]">Campus Stalls</span></h2>
                  </div>
                  <MerchandiseShowcase />
                </div>
              )}

              {/* --- PAGE 15: HR, TIMELINE & BUDGET --- */}
              {currentSlide === 14 && (
                <div className="space-y-6 py-4">
                  <div className="space-y-2 max-w-2xl">
                    <span className="text-xs font-mono text-[#DC2626] uppercase tracking-widest font-bold">15. Execution Operations</span>
                    <h2 className="text-2xl sm:text-4xl font-bold font-display text-black">HR Roles, Timeline & <span className="text-[#1746A2]">Estimated Budget</span></h2>
                  </div>
                  <CampaignTimeline />
                  <CampaignBudget />
                </div>
              )}

              {/* --- PAGE 16: DELTA SIMULATOR & VISION --- */}
              {currentSlide === 15 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4">
                  <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-mono text-[#1746A2] uppercase tracking-widest font-bold">16. Dynamic Simulation & Climax</span>
                      <h2 className="text-2xl sm:text-4xl font-bold font-display text-black">A Stronger Bangladesh <span className="text-[#1746A2]">Doesn't Depend</span> on One City</h2>
                      <p className="text-xs text-gray-700 leading-relaxed font-sans">Decentralization unlocks the true latent human capital of every district across our fertile delta.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-black/15 space-y-3 shadow-sm">
                      <div className="flex justify-between text-xs font-mono font-bold">
                        <span className="text-[#DC2626] uppercase">Status-Quo</span>
                        <span className="text-[#1746A2] uppercase">Decentralized Delta</span>
                      </div>
                      <input type="range" min="0" max="100" value={sliderVal} onChange={(e) => setSliderVal(Number(e.target.value))} className="w-full accent-[#1746A2] bg-black/10 h-2 rounded-lg cursor-pointer" />
                      <p className="text-center font-mono text-[10px] text-gray-500 font-bold">LEVER: {sliderVal}% POLICY DEPLOYMENT</p>
                    </div>
                    <button onClick={() => navigateToSlide(0)} className="px-5 py-2.5 rounded-xl bg-[#1746A2] text-white font-mono text-xs font-bold flex items-center gap-2 cursor-pointer hover:bg-black transition-colors">
                      <RefreshCw className="w-4 h-4" /> Replay Presentation
                    </button>
                  </div>
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <MapRenderer simulationValue={sliderVal} />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* FOOTER BAR */}
      <footer className="px-6 py-3 border-t border-black/10 bg-[#EBE7DF] z-30 flex items-center justify-between font-mono">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 font-bold">PAGE</span>
          <span className="text-xs font-bold text-white bg-[#1746A2] px-2 py-0.5 rounded">
            {String(currentSlide + 1).padStart(2, "0")} / {totalSlides}
          </span>
          <span className="text-xs text-black font-semibold hidden sm:inline ml-2 truncate max-w-[220px]">
            — {slideHeaders[currentSlide].substring(4)}
          </span>
        </div>

        {/* Stepper Dots */}
        <div className="hidden lg:flex items-center gap-1">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => navigateToSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? "w-5 bg-[#1746A2]" : "w-1.5 bg-black/20 hover:bg-black/40"
              }`}
              title={`Jump to Page ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next / Prev Navigation */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className={`p-2 rounded-lg border transition-all ${
              currentSlide === 0
                ? "border-black/5 opacity-30 cursor-not-allowed text-gray-400"
                : "border-black/20 bg-white hover:bg-black/5 text-black cursor-pointer"
            }`}
            title="Previous Page"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentSlide === totalSlides - 1}
            className={`p-2 rounded-lg border transition-all ${
              currentSlide === totalSlides - 1
                ? "border-black/5 opacity-30 cursor-not-allowed text-gray-400"
                : "border-black/20 bg-white hover:bg-black/5 text-black cursor-pointer"
            }`}
            title="Next Page"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}
