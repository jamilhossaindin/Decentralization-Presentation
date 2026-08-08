import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
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
import TopicCoverPage from "./components/TopicCoverPage";
import InteractiveDataCharts from "./components/InteractiveDataCharts";

import { regions, RegionData } from "./data/mapData";

type HeatmapLayer = "jobs" | "universities" | "hospitals" | "investment" | "industrialZones" | "none";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dynamic Live Clock & Realtime Date
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDateString, setCurrentDateString] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-US", { hour12: true, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
      setCurrentDateString(now.toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "2-digit" }));
    };
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);
    return () => clearInterval(clockInterval);
  }, []);

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

  const totalSlides = 15;

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
    "02. Presentation Topic",
    "03. Social Context",
    "04. Problem Identification",
    "05. Root Cause Tree",
    "06. Spatial Inequality",
    "07. Digital Careers",
    "08. Paradigm Shift",
    "09. Strategy: SWOT & 4Ps",
    "10. Audience & AIDA Model",
    "11. Content Design: Photo Gallery",
    "12. Content Design: Video Gallery",
    "13. Merchandise & Stalls",
    "14. HR, Timeline & Budget",
    "15. Delta Simulator & Vision"
  ];

  return (
    <div
      className="min-h-screen bg-[#000000] text-white flex flex-col justify-between selection:bg-[#16C79A] selection:text-black overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* TOP HEADER NAVIGATION */}
      <header className="h-16 px-6 md:px-10 border-b border-[#1E3E62] z-30 flex items-center justify-between flex-shrink-0 bg-[#000000]">
        <div className="flex items-center gap-4">
          <div className="w-2.5 h-2.5 bg-[#16C79A] rounded-full shadow-[0_0_8px_#16C79A] animate-pulse"></div>
          <div>
            <span className="text-sm font-bold tracking-[0.2em] uppercase font-mono text-[#16C79A]">
              SUMCT GRD-3216 // DECENTRALIZATION STUDY
            </span>
          </div>
        </div>

        {/* Global Progress Indicator */}
        <div className="hidden md:flex items-center gap-4 text-sm tracking-widest uppercase font-mono text-gray-400">
          <span className="text-[#16C79A] border-b-2 border-[#16C79A] pb-0.5 font-bold">16-PAGE EDITORIAL</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-300">PROGRESS:</span>
            <span className="font-bold text-[#16C79A]">{Math.round((currentSlide / (totalSlides - 1)) * 100)}%</span>
            <div className="w-16 h-1.5 bg-[#0B192C] rounded-full overflow-hidden relative border border-[#1E3E62]">
              <div
                className="h-full bg-[#16C79A] transition-all duration-500 ease-out"
                style={{ width: `${(currentSlide / (totalSlides - 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="text-right text-sm font-mono tracking-widest text-[#16C79A] font-bold hidden sm:flex items-center gap-3">
          <span className="bg-[#0B192C] border border-[#1E3E62] px-2 py-0.5 rounded text-white font-bold">
            LIVE: {currentDateString} • {currentTime}
          </span>
          <span className="text-gray-400">23.0225° N 72.5714° E</span>
        </div>
      </header>

      {/* MAIN STAGE */}
      <main className="flex-1 grid grid-cols-1 xl:grid-cols-12 gap-6 p-4 md:p-6 items-stretch relative z-20">
        {/* Left Side Navigation Sidebar */}
        <nav className="xl:col-span-2 hidden xl:flex flex-col gap-1.5 justify-center py-2 bg-[#000000] border-r border-[#1E3E62] pr-3 overflow-y-auto max-h-[82vh]">
          <span className="text-sm uppercase font-mono tracking-widest text-[#16C79A] mb-1 font-bold">Index (16 Pages)</span>
          {slideHeaders.map((headerText, idx) => {
            const isCurrent = currentSlide === idx;
            const isCompleted = currentSlide > idx;

            return (
              <button
                key={idx}
                onClick={() => navigateToSlide(idx)}
                className={`py-1.5 px-2.5 text-left rounded-md text-sm font-sans transition-all duration-200 flex items-center justify-between cursor-pointer ${isCurrent
                  ? "text-white bg-[#16C79A] font-bold shadow-md"
                  : isCompleted
                    ? "text-white bg-[#0B192C] font-semibold border border-[#1E3E62]"
                    : "text-white bg-[#0B192C]/60 hover:bg-[#0B192C] font-medium border border-[#1E3E62]/50 opacity-90 hover:opacity-100"
                  }`}
              >
                <span className="truncate">{headerText}</span>
                {isCompleted && <span className="w-1.5 h-1.5 rounded-full bg-[#16C79A]" />}
              </button>
            );
          })}
        </nav>

        {/* Display Stage */}
        <div className="xl:col-span-10 flex flex-col justify-center items-center max-h-[90vh] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.97, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -4 }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
              className="w-full max-h-[90vh] overflow-hidden flex flex-col justify-between"
            >
              {/* --- PAGE 01: DEDICATED TEAM-V SHOWCASE PAGE --- */}
              {currentSlide === 0 && (
                <CoverPageReferenceStyle onNext={handleNext} />
              )}

              {/* --- PAGE 02: PRESENTATION TOPIC & EXECUTIVE SUMMARY --- */}
              {currentSlide === 1 && (
                <TopicCoverPage onNext={handleNext} />
              )}

              {/* --- PAGE 03: SOCIAL CONTEXT --- */}
              {currentSlide === 2 && (
                <div className="w-full h-[86vh] min-h-[660px] bg-[#000000] text-white font-mono relative p-5 sm:p-6 rounded-2xl border border-[#1E3E62] shadow-xl overflow-hidden flex flex-col justify-between">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch h-full z-10 relative">
                    {/* LEFT COLUMN: TEXT & THESIS */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
                      <div className="space-y-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#16C79A]/10 border border-[#16C79A]/40 text-[#16C79A] text-xs font-mono font-bold uppercase tracking-widest">
                          SOCIAL CONTEXT & DEMOGRAPHICS
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-[#16C79A] leading-tight uppercase">
                          Why Does Everyone <br /><span className="text-white">Move to Dhaka?</span>
                        </h2>
                        <div className="w-full h-0.5 bg-gradient-to-r from-[#16C79A] via-[#1E3E62] to-transparent mt-1" />

                        <p className="text-base text-white font-sans leading-relaxed pt-1">
                          Over <strong className="text-[#16C79A]">36.6 million citizens</strong> (20%+ of Bangladesh's total population) are squeezed into Dhaka Metropolitan area—occupying just <strong className="text-[#16C79A]">0.2% of total national land</strong>.
                        </p>

                        <div className="p-4 rounded-xl border border-[#1E3E62] bg-[#0B192C] space-y-2 shadow-md">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] animate-pulse" />
                            <span className="text-xs font-mono text-[#DC2626] font-bold uppercase tracking-wider">THESIS STATEMENT</span>
                          </div>
                          <p className="text-sm text-white font-medium font-sans leading-relaxed">
                            Migration is not a personal preference—it is a direct human reaction to the structural monopolization of opportunities in a single mega-city.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: BANGLADESH MAP */}
                    <div className="lg:col-span-5 flex flex-col justify-center items-center h-full">
                      <MapRenderer showMigrationFlows={true} />
                    </div>
                  </div>
                </div>
              )}

              {/* --- PAGE 04: PROBLEM IDENTIFICATION & INTERACTIVE GRAPHS --- */}
              {currentSlide === 3 && (
                <div className="w-full h-[86vh] min-h-[660px] bg-[#000000] text-white font-mono relative p-5 rounded-2xl border border-[#1E3E62] shadow-xl overflow-hidden flex flex-col gap-5">
                  {/* TIER 1: HEADER ROW */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-bold font-display text-[#16C79A]">Dhaka Is Reaching Its <span className="text-white">Limits</span></h2>
                    </div>
                    <div className="text-right text-sm font-mono">
                      <span className="text-sm font-mono bg-[#0B192C] text-[#16C79A] border border-[#1E3E62] px-2.5 py-1 rounded font-bold uppercase tracking-wider block">
                        LIVE AUDIT: {currentDateString}
                      </span>
                      <span className="text-sm font-mono text-gray-300 font-bold mt-1 block">
                        TIME: {currentTime}
                      </span>
                    </div>
                  </div>

                  {/* TIER 2: 4 METRIC BOXES IN A ROW */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                    <div className="p-3.5 rounded-xl bg-[#0B192C] border border-[#1E3E62] shadow-sm space-y-1 relative overflow-hidden group">
                      <div className="flex justify-between items-center">
                        <Activity className="w-4 h-4 text-white" />
                        <span className="flex items-center gap-1 text-sm font-mono font-bold text-white bg-[#1E3E62]/60 px-1.5 py-0.5 rounded border border-[#1E3E62]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-ping" />
                          LIVE TICK
                        </span>
                      </div>
                      <span className="text-sm font-mono text-[#16C79A] uppercase block font-bold">DENSITY</span>
                      <p className="text-base font-extrabold font-mono tracking-tight" style={{ color: "#DC2626" }}>{liveDensity.toFixed(2)} / km²</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#0B192C] border border-[#1E3E62] shadow-sm space-y-1 relative overflow-hidden group">
                      <div className="flex justify-between items-center">
                        <Briefcase className="w-4 h-4 text-white" />
                        <span className="flex items-center gap-1 text-sm font-mono font-bold text-white bg-[#1E3E62]/60 px-1.5 py-0.5 rounded border border-[#1E3E62]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-ping" />
                          REALTIME
                        </span>
                      </div>
                      <span className="text-sm font-mono text-[#16C79A] uppercase block font-bold">CURRENT POPULATION OF DHAKA</span>
                      <p className="text-base font-extrabold font-mono tracking-tight" style={{ color: "#DC2626" }}>{livePopulation.toLocaleString()}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#0B192C] border border-[#1E3E62] shadow-sm space-y-1 relative overflow-hidden group">
                      <div className="flex justify-between items-center">
                        <HeartPulse className="w-4 h-4 text-white" />
                        <span className="flex items-center gap-1 text-sm font-mono font-bold text-white bg-[#1E3E62]/60 px-1.5 py-0.5 rounded border border-[#1E3E62]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-ping" />
                          LIVE
                        </span>
                      </div>
                      <span className="text-sm font-mono text-[#16C79A] uppercase block font-bold">DAILY ARRIVALS</span>
                      <p className="text-base font-extrabold font-mono tracking-tight" style={{ color: "#DC2626" }}>+{arrivalsToday.toLocaleString()}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#0B192C] border border-[#1E3E62] shadow-sm space-y-1 relative overflow-hidden group">
                      <div className="flex justify-between items-center">
                        <TrendingDown className="w-4 h-4 text-white" />
                        <span className="flex items-center gap-1 text-sm font-mono font-bold text-white bg-[#1E3E62]/60 px-1.5 py-0.5 rounded border border-[#1E3E62]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-ping" />
                          TICKING
                        </span>
                      </div>
                      <span className="text-sm font-mono text-[#16C79A] uppercase block font-bold">GRIDLOCK LOSS</span>
                      <p className="text-base font-extrabold font-mono tracking-tight" style={{ color: "#DC2626" }}>৳ {trafficLoss.toLocaleString()}</p>
                    </div>
                  </div>

                  {/* TIER 3 (5 TABS) & TIER 4 (BIG CARD) */}
                  <InteractiveDataCharts />
                </div>
              )}

              {/* --- PAGE 05: ROOT CAUSE TREE --- */}
              {currentSlide === 4 && (
                <div className="w-full h-[86vh] min-h-[660px] bg-[#000000] text-white font-mono relative p-5 sm:p-6 rounded-2xl border border-[#1E3E62] shadow-xl overflow-hidden flex flex-col gap-4 justify-between">
                  <div className="flex justify-between items-center border-b border-[#1E3E62] pb-3">
                    <div>
                      <span className="text-sm font-mono text-[#16C79A] uppercase font-bold tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#16C79A]" />
                        ROOT CAUSE ANALYSIS & MIGRATION DRIVERS
                      </span>
                      <h2 className="text-2xl font-bold font-sans text-white">Why Do People Leave Their <span className="text-[#16C79A]">Hometowns?</span></h2>
                    </div>
                    <span className="text-sm font-mono text-white font-bold bg-[#1E3E62] px-3 py-1 rounded-lg border border-[#16C79A]/60 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#16C79A]" />
                      DOSSIER ARCHIVE: GRD-3216
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <InvestigativeTree />
                  </div>
                </div>
              )}

              {/* --- PAGE 06: SPATIAL INEQUALITY HEATMAP --- */}
              {currentSlide === 5 && (
                <div className="w-full h-[86vh] min-h-[660px] bg-[#000000] text-white font-mono relative p-5 sm:p-6 rounded-2xl border border-[#1E3E62] shadow-xl overflow-hidden flex flex-col justify-between">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch h-full z-10 relative">
                    {/* LEFT COLUMN: HEADING & 4 BUTTONS */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
                      <div className="space-y-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#16C79A]/10 border border-[#16C79A]/40 text-[#16C79A] text-xs font-mono font-bold uppercase tracking-widest">
                          SPATIAL HEATMAP AUDIT
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#16C79A]">
                          Where Is Opportunity <span className="text-white">Located?</span>
                        </h2>
                        <div className="w-full h-0.5 bg-gradient-to-r from-[#16C79A] via-[#1E3E62] to-transparent mt-1" />
                        <p className="text-sm text-gray-300 font-sans">
                          Select an infrastructure layer below to inspect the geographic distribution of critical resources across Bangladesh.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
                        {[
                          { id: "jobs", label: "Corporate Jobs", desc: "Private jobs and formal commerce", icon: <Briefcase className="w-4 h-4 text-[#16C79A]" /> },
                          { id: "universities", label: "Branch Universities", desc: "Top engineering & medical campuses", icon: <GraduationCap className="w-4 h-4 text-[#16C79A]" /> },
                          { id: "hospitals", label: "Specialized Healthcare", desc: "Equipped referral clinics & ICU setups", icon: <HeartPulse className="w-4 h-4 text-[#DC2626]" /> },
                          { id: "investment", label: "Venture Investment", desc: "Credit allocations & private finance HQs", icon: <Sliders className="w-4 h-4 text-[#16C79A]" /> }
                        ].map((lay) => (
                          <button
                            key={lay.id}
                            onClick={() => setOpportunityLayer(lay.id as HeatmapLayer)}
                            className={`p-3.5 text-left rounded-xl border flex items-center gap-3.5 cursor-pointer transition-all ${opportunityLayer === lay.id
                              ? "border-[#16C79A] bg-[#1E3E62] font-bold text-white shadow-md ring-1 ring-[#16C79A]"
                              : "border-[#1E3E62] bg-[#0B192C] text-white hover:bg-[#1E3E62]/60"
                              }`}
                          >
                            <span className="p-2 rounded-lg bg-[#000000]/60 border border-[#1E3E62]">
                              {lay.icon}
                            </span>
                            <div>
                              <p className="text-sm font-bold text-white">{lay.label}</p>
                              <p className="text-xs text-gray-300 font-sans">{lay.desc}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT COLUMN: BANGLADESH MAP */}
                    <div className="lg:col-span-5 flex flex-col justify-center items-center h-full">
                      <MapRenderer activeLayer={opportunityLayer} />
                    </div>
                  </div>
                </div>
              )}

              {/* --- PAGE 07: DIGITAL DECENTRALIZATION CAREERS --- */}
              {currentSlide === 6 && (
                <div className="w-full h-[86vh] min-h-[660px] bg-[#000000] text-white font-mono relative p-5 sm:p-6 rounded-2xl border border-[#1E3E62] shadow-xl overflow-hidden flex flex-col justify-between">
                  <div className="flex justify-between items-center border-b border-[#1E3E62] pb-3">
                    <div>
                      <span className="text-sm font-mono text-[#16C79A] uppercase font-bold tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#16C79A]" />
                        REMOTE WORK & HIGH-VALUE DIGITAL ECONOMY
                      </span>
                      <h2 className="text-2xl font-bold font-sans text-white">Digital Decentralization <span className="text-[#16C79A]">Careers</span></h2>
                    </div>
                    <span className="text-sm font-mono text-white font-bold bg-[#1E3E62] px-3 py-1 rounded-lg border border-[#16C79A]/60 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#16C79A]" />
                      GLOBAL CLIENT INFLOW
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-between pt-2">
                    <DigitalDecentralizationIllustration />
                  </div>
                </div>
              )}

              {/* --- PAGE 08: PARADIGM SHIFT --- */}
              {currentSlide === 7 && (
                <div className="w-full h-[86vh] min-h-[660px] bg-[#000000] text-white font-mono relative p-5 sm:p-6 rounded-2xl border border-[#1E3E62] shadow-xl overflow-hidden flex flex-col justify-between">
                  {/* Top Header Bar */}
                  <div className="flex justify-between items-center border-b border-[#1E3E62] pb-3">
                    <span className="text-sm font-mono text-[#16C79A] uppercase font-bold tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#16C79A]" />
                      CORE PARADIGM SHIFT // FIRST-PRINCIPLES DIAGNOSIS
                    </span>
                    <span className="text-sm font-mono text-white font-bold bg-[#1E3E62] px-3 py-1 rounded-lg border border-[#16C79A]/60 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#16C79A]" />
                      THE CENTRAL THESIS
                    </span>
                  </div>

                  {/* Perfectly Centered Content Area */}
                  <div className="flex-1 flex flex-col items-center justify-center my-auto relative z-10 py-6">
                    {/* Ambient Glow */}
                    <div className="absolute w-96 h-96 bg-[#16C79A]/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex flex-col justify-center items-center text-center p-8 sm:p-12 rounded-3xl border border-[#16C79A]/40 bg-[#0B192C]/90 shadow-2xl space-y-6 max-w-4xl mx-auto backdrop-blur-sm relative">
                      {/* Top Pill */}
                      <span className="px-4 py-1 rounded-full bg-[#16C79A]/10 border border-[#16C79A]/40 text-[#16C79A] text-xs font-mono font-bold uppercase tracking-widest">
                        FIRST-PRINCIPLES INSIGHT
                      </span>

                      {/* Main Big Statement */}
                      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif text-[#16C79A] leading-tight drop-shadow-md">
                        We Have Been Solving the <br />
                        <span className="text-white">Wrong Problem</span>
                      </h2>

                      <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#16C79A] to-transparent rounded-full" />

                      {/* The Quote */}
                      <p className="text-lg sm:text-2xl italic text-[#16C79A] font-serif font-bold max-w-2xl leading-relaxed">
                        “People don’t move because they love cities. They move because opportunity moves first.”
                      </p>

                      {/* Supporting 3 Paradigm Anchors */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-4 border-t border-[#1E3E62]/80 text-left">
                        <div className="p-3 rounded-xl bg-[#000000]/60 border border-[#1E3E62] space-y-1">
                          <span className="text-[11px] font-mono text-gray-400 font-bold block uppercase">01. OLD DOGMA</span>
                          <p className="text-xs font-sans text-gray-200">Expand mega-city roads & build flyovers endlessly.</p>
                        </div>
                        <div className="p-3 rounded-xl bg-[#000000]/60 border border-[#1E3E62] space-y-1">
                          <span className="text-[11px] font-mono text-[#DC2626] font-bold block uppercase">02. SYSTEM FAILURE</span>
                          <p className="text-xs font-sans text-gray-200">Mega-cities absorb traffic without fixing rural resource drain.</p>
                        </div>
                        <div className="p-3 rounded-xl bg-[#000000]/60 border border-[#16C79A]/50 space-y-1">
                          <span className="text-[11px] font-mono text-[#16C79A] font-bold block uppercase">03. TRUE SOLUTION</span>
                          <p className="text-xs font-sans text-white font-medium">Distribute the gravity of capital, universities & high-value jobs.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Footer Bar */}
                  <div className="pt-3 border-t border-[#1E3E62] text-xs font-mono text-gray-300 flex justify-between font-bold">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16C79A]" />
                      ARCHITECTURAL THESIS: GRD-3216
                    </span>
                    <span className="text-[#16C79A]">OPPORTUNITY DISTRIBUTION VECTOR</span>
                  </div>
                </div>
              )}

              {/* --- PAGE 09: STRATEGY (SWOT & 4Ps) --- */}
              {currentSlide === 8 && (
                <div className="w-full h-[86vh] min-h-[660px] bg-[#000000] text-white font-mono relative pt-4 px-4 pb-[10px] sm:pt-5 sm:px-5 sm:pb-[10px] rounded-2xl border border-[#1E3E62] shadow-xl overflow-hidden flex flex-col justify-between space-y-2">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-bold font-display text-[#16C79A]">SWOT Matrix & <span className="text-white">The 4Ps</span></h2>
                  </div>
                  <div className="my-1 space-y-2 flex-1 flex flex-col justify-between">
                    <SWOTMatrix />
                    <MarketingMix4Ps />
                  </div>
                </div>
              )}

              {/* --- PAGE 10: AUDIENCE & AIDA MODEL --- */}
              {currentSlide === 9 && (
                <div className="w-full h-[86vh] min-h-[660px] bg-[#000000] text-white font-mono relative p-4 sm:p-5 rounded-2xl border border-[#1E3E62] shadow-xl overflow-hidden flex flex-col justify-start space-y-2">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-bold font-display text-[#16C79A]">Target Segmentation & <span className="text-white">AIDA Model</span></h2>
                  </div>
                  <div className="my-1 space-y-2">
                    <AIDAFunnel />
                    <AudienceSegmentation />
                  </div>
                </div>
              )}

              {/* --- PAGE 11: CREATIVE CONTENT DESIGN — PHOTO GALLERY --- */}
              {currentSlide === 10 && (
                <div className="w-full h-[86vh] min-h-[660px] bg-[#000000] text-white font-mono relative p-5 sm:p-6 rounded-2xl border border-[#1E3E62] shadow-xl flex flex-col justify-start space-y-3">
                  <div className="space-y-1 shrink-0">
                    <h2 className="text-2xl font-bold font-display text-[#16C79A]">Photo Gallery: <span className="text-white">Static & Print Creatives</span></h2>
                  </div>
                  <div className="flex-1 overflow-y-auto pr-1 pb-4">
                    <PhotoGallery />
                  </div>
                </div>
              )}

              {/* --- PAGE 12: CREATIVE CONTENT DESIGN — VIDEO GALLERY --- */}
              {currentSlide === 11 && (
                <div className="w-full h-[86vh] min-h-[660px] bg-[#000000] text-white font-mono relative p-5 sm:p-6 rounded-2xl border border-[#1E3E62] shadow-xl flex flex-col justify-start space-y-3">
                  <div className="space-y-1 shrink-0">
                    <h2 className="text-2xl font-bold font-display text-[#16C79A]">Video Gallery: <span className="text-white">TikTok, Reels & OVC Storyboards</span></h2>
                  </div>
                  <div className="flex-1 overflow-y-auto pr-1 pb-4">
                    <VideoGallery />
                  </div>
                </div>
              )}

              {/* --- PAGE 13: MERCHANDISING, PROPS & STALLS --- */}
              {currentSlide === 12 && (
                <div className="w-full h-[86vh] min-h-[660px] bg-[#000000] text-white font-mono relative p-5 sm:p-6 rounded-2xl border border-[#1E3E62] shadow-xl overflow-hidden flex flex-col justify-start space-y-3">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-bold font-display text-[#16C79A]">Merchandising, Props & <span className="text-white">Campus Stalls</span></h2>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <MerchandiseShowcase />
                  </div>
                </div>
              )}

              {/* --- PAGE 14: HR, TIMELINE & BUDGET --- */}
              {currentSlide === 13 && (
                <div className="w-full h-[86vh] min-h-[660px] bg-[#000000] text-white font-mono relative p-5 sm:p-6 rounded-2xl border border-[#1E3E62] shadow-xl overflow-hidden flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <h2 className="text-2xl font-bold font-display text-[#16C79A]">HR Roles, Timeline & <span className="text-white">Estimated Budget</span></h2>
                  </div>
                  <div className="my-2.5 space-y-2.5">
                    <CampaignTimeline />
                    <CampaignBudget />
                  </div>
                </div>
              )}

              {/* --- PAGE 15: DELTA SIMULATOR & VISION --- */}
              {currentSlide === 14 && (
                <div className="w-full h-[86vh] min-h-[660px] bg-[#000000] text-white font-mono relative p-5 sm:p-6 rounded-2xl border border-[#1E3E62] shadow-xl overflow-hidden flex flex-col justify-between">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch h-full z-10 relative">
                    {/* LEFT COLUMN: CONTROLS & VISION */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
                      <div className="space-y-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#16C79A]/10 border border-[#16C79A]/40 text-[#16C79A] text-xs font-mono font-bold uppercase tracking-widest">
                          DECENTRALIZATION POLICY SIMULATOR
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-[#16C79A] leading-tight uppercase">
                          A Stronger Bangladesh <br /><span className="text-white">Doesn't Depend on One City</span>
                        </h2>
                        <div className="w-full h-0.5 bg-gradient-to-r from-[#16C79A] via-[#1E3E62] to-transparent mt-1" />
                        <p className="text-sm text-gray-300 font-sans leading-relaxed pt-1">
                          Decentralization unlocks the true latent human capital of every district across our fertile delta by distributing corporate growth, higher education, and medical access.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#0B192C] border border-[#1E3E62] space-y-3 shadow-md">
                        <div className="flex justify-between text-xs font-mono font-bold">
                          <span className="text-[#DC2626] uppercase">STATUS-QUO (CENTRALIZED)</span>
                          <span className="text-[#16C79A] uppercase">DECENTRALIZED DELTA</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={sliderVal}
                          onChange={(e) => setSliderVal(Number(e.target.value))}
                          className="w-full accent-[#16C79A] bg-[#000000] h-2.5 rounded-lg cursor-pointer"
                        />
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className="text-gray-400">POLICY DEPLOYMENT LEVER</span>
                          <span className="text-[#16C79A] font-bold text-sm">{sliderVal}% ACTIVE</span>
                        </div>
                      </div>

                      <div>
                        <button
                          onClick={() => navigateToSlide(0)}
                          className="px-5 py-2.5 rounded-xl bg-[#1E3E62] text-white font-mono text-sm font-bold flex items-center gap-2 cursor-pointer hover:bg-[#16C79A] hover:text-black transition-colors border border-[#1E3E62]"
                        >
                          <RefreshCw className="w-4 h-4" /> Replay Presentation
                        </button>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: BANGLADESH MAP */}
                    <div className="lg:col-span-5 flex flex-col justify-center items-center h-full">
                      <MapRenderer simulationValue={sliderVal} />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
