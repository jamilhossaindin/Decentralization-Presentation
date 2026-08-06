import React from "react";
import { ShieldCheck, AlertCircle, Zap, ShieldAlert } from "lucide-react";

export default function SWOTMatrix() {
  return (
    <div className="space-y-4 my-2 font-sans">
      <div className="flex items-center justify-between border-b border-black/10 pb-2">
        <span className="text-xs font-mono uppercase font-bold text-gray-800 tracking-wider">
          STRATEGIC SWOT ANALYSIS MATRIX
        </span>
        <span className="text-xs font-mono text-[#1746A2] font-bold">4 QUADRANT FRAMEWORK</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Quadrant 1: Strengths */}
        <div className="p-5 rounded-2xl bg-white border border-black/15 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-emerald-700 font-bold uppercase px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
              STRENGTHS (S)
            </span>
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
          </div>
          <h4 className="text-sm font-bold text-black font-serif">Data-Grounded Patriotic Message</h4>
          <ul className="text-xs text-gray-700 space-y-1.5 list-disc pl-4">
            <li>Empathetic Bengali slogan: <em>"আমাদের গ্রাম, আমাদের ভবিষ্যত"</em>.</li>
            <li>Real live metrics on density and daily GDP traffic losses (৳380M+).</li>
            <li>Strong alignment with youth freelancers and university students.</li>
          </ul>
        </div>

        {/* Quadrant 2: Weaknesses */}
        <div className="p-5 rounded-2xl bg-white border border-black/15 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#DC2626] font-bold uppercase px-2 py-0.5 rounded bg-red-50 border border-red-200">
              WEAKNESSES (W)
            </span>
            <AlertCircle className="w-4 h-4 text-[#DC2626]" />
          </div>
          <h4 className="text-sm font-bold text-black font-serif">Initial Organic Reach Dependency</h4>
          <ul className="text-xs text-gray-700 space-y-1.5 list-disc pl-4">
            <li>Requires micro-influencer boost for viral TikTok adoption.</li>
            <li>Policy change requires long-term government inter-ministerial coordination.</li>
          </ul>
        </div>

        {/* Quadrant 3: Opportunities */}
        <div className="p-5 rounded-2xl bg-white border border-black/15 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#1746A2] font-bold uppercase px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
              OPPORTUNITIES (O)
            </span>
            <Zap className="w-4 h-4 text-[#1746A2]" />
          </div>
          <h4 className="text-sm font-bold text-black font-serif">Regional Remote Work Revolution</h4>
          <ul className="text-xs text-gray-700 space-y-1.5 list-disc pl-4">
            <li>High tech adoption among youth in Rajshahi, Sylhet & Chittagong.</li>
            <li>Corporate interest in reducing Dhaka office rent by 60%.</li>
          </ul>
        </div>

        {/* Quadrant 4: Threats */}
        <div className="p-5 rounded-2xl bg-white border border-black/15 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-amber-800 font-bold uppercase px-2 py-0.5 rounded bg-amber-50 border border-amber-200">
              THREATS (T)
            </span>
            <ShieldAlert className="w-4 h-4 text-amber-800" />
          </div>
          <h4 className="text-sm font-bold text-black font-serif">Status-Quo Institutional Inertia</h4>
          <ul className="text-xs text-gray-700 space-y-1.5 list-disc pl-4">
            <li>Resistance from centralized real estate developers in Dhaka.</li>
            <li>Bureaucratic delays in approving regional tax holiday incentives.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
