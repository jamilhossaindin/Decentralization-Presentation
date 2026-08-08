import React from "react";
import { DollarSign, PieChart, CheckCircle2 } from "lucide-react";

export default function CampaignBudget() {
  const budgetItems = [
    { category: "Digital Media & TikTok Ads", amount: "৳ 2,50,000", pct: 35, note: "Targeted 15-sec Reels/Shorts & Facebook boosted posts" },
    { category: "Video Production & OVC Shoot", amount: "৳ 1,80,000", pct: 26, note: "60-sec OVC commercial production & studio grading" },
    { category: "Micro-Influencer Partnerships", amount: "৳ 1,20,000", pct: 17, note: "Ayman Sadiq & 3 regional tech educators" },
    { category: "Campus Stalls & Merchandise", amount: "৳ 1,00,000", pct: 14, note: "Pop-up wooden stalls, t-shirts, pins & roll-up banners" },
    { category: "Contingency & Operations", amount: "৳ 50,000", pct: 8, note: "Domain hosting, transport, & emergency logistics" }
  ];

  return (
    <div className="space-y-4 my-2 font-sans text-white">
      <div className="flex items-center justify-between border-b border-[#1E3E62] pb-2">
        <span className="text-sm font-mono uppercase font-bold text-[#16C79A] tracking-wider">
          ESTIMATED CAMPAIGN MEDIA BUDGET BREAKDOWN
        </span>
        <span className="text-sm font-mono text-[#16C79A] font-bold">TOTAL: ৳ 7,00,000 BDT</span>
      </div>

      <div className="p-5 rounded-2xl bg-[#0B192C] border border-[#1E3E62] shadow-xl space-y-4 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="text-sm font-mono text-[#16C79A] uppercase font-bold">SPEND ALLOCATION MATRIX</h4>
            <div className="space-y-2">
              {budgetItems.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-[#1E3E62] border border-[#1E3E62] flex items-center justify-between text-sm text-white">
                  <div>
                    <p className="font-bold text-white text-base font-serif">{item.category}</p>
                    <p className="text-sm text-white leading-relaxed">{item.note}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-[#16C79A]">{item.amount}</p>
                    <span className="text-sm font-mono text-gray-300">{item.pct}% ALLOCATION</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between p-4 rounded-xl bg-[#1E3E62] border border-[#1E3E62] space-y-3 text-white">
            <div>
              <span className="text-sm font-mono text-[#16C79A] uppercase font-bold">FINANCIAL ROI JUSTIFICATION</span>
              <h3 className="text-lg font-bold text-white font-serif mt-1">High Efficiency Social Impact</h3>
              <p className="text-sm text-white leading-relaxed mt-2">
                By leveraging <strong className="text-[#16C79A]">micro-influencer partnerships</strong> and highly targeted <strong className="text-[#16C79A]">15-second social media video spots</strong>, TEAM-V achieves a low Cost-Per-Reach of ~৳0.14 BDT per engaged student across 64 districts.
              </p>
            </div>

            <div className="pt-2 border-t border-[#1E3E62] flex justify-between items-center text-sm font-mono">
              <span className="text-gray-400">AUDITED BY: TEAM-V HR</span>
              <span className="font-bold text-[#16C79A]">APPROVED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
