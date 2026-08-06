import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, Code, Cpu, PhoneCall, ShoppingBag } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  pay: string;
  desc: string;
  targetClient: string;
}

export default function DigitalDecentralizationIllustration() {
  const [selectedService, setSelectedService] = useState<string>("dev");

  const services: ServiceItem[] = [
    {
      id: "dev",
      title: "Software Engineering",
      category: "Global Development",
      icon: <Code className="w-4 h-4 text-[#1746A2]" />,
      pay: "$4,500/mo avg",
      desc: "Writing code from Rajshahi or Sylhet for tech companies in Silicon Valley, Munich, or Singapore directly.",
      targetClient: "San Francisco, USA 🇺🇸"
    },
    {
      id: "freelance",
      title: "UI/UX Design",
      category: "Creative Agencies",
      icon: <Cpu className="w-4 h-4 text-emerald-700" />,
      pay: "$3,200/mo avg",
      desc: "Creating polished user interfaces, illustrations, and motion graphics for mobile applications.",
      targetClient: "Amsterdam, Netherlands 🇳🇱"
    },
    {
      id: "support",
      title: "Technical Support",
      category: "Enterprise SaaS",
      icon: <PhoneCall className="w-4 h-4 text-amber-700" />,
      pay: "$1,800/mo avg",
      desc: "Managing high-priority ticketry and virtual customer-success chats for global B2B startups.",
      targetClient: "Sydney, Australia 🇦🇺"
    },
    {
      id: "ecommerce",
      title: "Direct E-Commerce",
      category: "Regional Aggregators",
      icon: <ShoppingBag className="w-4 h-4 text-[#DC2626]" />,
      pay: "৳1,50,000+/mo",
      desc: "Direct shipping premium local leather, clothing, food preserves directly from districts to nationwide consumers.",
      targetClient: "Dhaka & Chittagong 🇧🇩"
    }
  ];

  const activeService = services.find((s) => s.id === selectedService) || services[0];

  return (
    <div className="w-full flex flex-col lg:flex-row items-stretch gap-6 min-h-[420px] font-sans">
      {/* LEFT COLUMN: Interactive Service Selector */}
      <div className="flex-1 p-6 rounded-2xl bg-white border border-black/15 shadow-sm space-y-4 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b border-black/10 pb-2">
            <span className="text-xs font-mono text-[#1746A2] font-bold uppercase tracking-widest">
              DIGITAL DECENTRALIZATION CAREERS
            </span>
            <Globe className="w-4 h-4 text-[#1746A2]" />
          </div>

          <p className="text-xs text-gray-700 leading-relaxed">
            High-value global economy jobs that allow talented professionals to live in regional districts while serving global clients.
          </p>

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {services.map((s) => {
              const isSelected = selectedService === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedService(s.id)}
                  className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#1746A2] text-white border-[#1746A2] font-bold shadow-md"
                      : "bg-[#EBE7DF] text-black border-black/10 hover:border-black/30"
                  }`}
                >
                  <div className={`p-1.5 rounded-lg ${isSelected ? "bg-white/20" : "bg-white"}`}>
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-serif leading-tight">{s.title}</h4>
                    <p className="text-[9px] font-mono opacity-80">{s.pay}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="pt-2 border-t border-black/10 text-[10px] font-mono text-gray-500 flex justify-between font-bold">
          <span>TEAM-V DIGITAL WORK STUDY</span>
          <span className="text-[#1746A2]">REMOTE READY</span>
        </div>
      </div>

      {/* RIGHT COLUMN: Active Service Dossier */}
      <div className="flex-1 p-6 rounded-2xl bg-white border border-black/15 shadow-sm space-y-4 flex flex-col justify-between">
        <div className="space-y-3">
          <span className="text-xs font-mono text-[#DC2626] font-bold uppercase tracking-widest block">
            SELECTED DIGITAL PATHWAY
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase">{activeService.category}</span>
                <h3 className="text-xl font-bold font-serif text-black">{activeService.title}</h3>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 space-y-1">
                <span className="text-[10px] font-mono text-[#1746A2] uppercase font-bold">AVERAGE EARNING POTENTIAL</span>
                <p className="text-lg font-bold font-mono text-black">{activeService.pay}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#EBE7DF] border border-black/10 space-y-1">
                <span className="text-[10px] font-mono text-gray-700 uppercase font-bold">CAREER DESCRIPTION</span>
                <p className="text-xs text-gray-800 leading-relaxed">{activeService.desc}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                <span className="text-[10px] font-mono text-emerald-800 uppercase font-bold">PRIMARY TARGET CLIENTELE</span>
                <p className="text-xs font-bold text-black">{activeService.targetClient}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="pt-2 border-t border-black/10 text-[10px] font-mono text-gray-500 font-bold">
          LIVE DIGITAL ECONOMY NODE
        </div>
      </div>
    </div>
  );
}
