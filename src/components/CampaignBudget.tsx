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
    <div className="space-y-4 my-2 font-sans">
      <div className="flex items-center justify-between border-b border-black/10 pb-2">
        <span className="text-xs font-mono uppercase font-bold text-gray-800 tracking-wider">
          ESTIMATED CAMPAIGN MEDIA BUDGET BREAKDOWN
        </span>
        <span className="text-xs font-mono text-emerald-700 font-bold">TOTAL: ৳ 7,00,000 BDT</span>
      </div>

      <div className="p-5 rounded-2xl bg-white border border-black/15 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-gray-500 uppercase font-bold">SPEND ALLOCATION MATRIX</h4>
            <div className="space-y-2">
              {budgetItems.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-[#EBE7DF] border border-black/10 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-black font-serif">{item.category}</p>
                    <p className="text-[10px] text-gray-600">{item.note}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-[#1746A2]">{item.amount}</p>
                    <span className="text-[9px] font-mono text-gray-500">{item.pct}% ALLOCATION</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-3">
            <div>
              <span className="text-[10px] font-mono text-[#1746A2] uppercase font-bold">FINANCIAL ROI JUSTIFICATION</span>
              <h3 className="text-base font-bold text-black font-serif mt-1">High Efficiency Social Impact</h3>
              <p className="text-xs text-gray-700 leading-relaxed mt-2">
                By leveraging <strong>micro-influencer partnerships</strong> and highly targeted <strong>15-second social media video spots</strong>, TEAM-V achieves a low Cost-Per-Reach of ~৳0.14 BDT per engaged student across 64 districts.
              </p>
            </div>

            <div className="pt-2 border-t border-blue-200 flex justify-between items-center text-xs font-mono">
              <span className="text-gray-600">AUDITED BY: TEAM-V HR</span>
              <span className="font-bold text-[#1746A2]">APPROVED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
