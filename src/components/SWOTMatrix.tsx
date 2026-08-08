import React from "react";
import { ShieldCheck, AlertCircle, Zap, ShieldAlert } from "lucide-react";

export default function SWOTMatrix() {
  return (
    <div className="space-y-3 my-2 font-sans text-white">
      <div className="flex items-center justify-between border-b border-[#1E3E62] pb-1.5">
        <span className="text-sm font-mono uppercase font-bold text-[#16C79A] tracking-wider">
          STRATEGIC SWOT ANALYSIS MATRIX
        </span>
        <span className="text-sm font-mono text-gray-300 font-bold">4 QUADRANT FRAMEWORK</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Quadrant 1: Strengths */}
        <div className="p-4 rounded-xl bg-[#0B192C] border border-[#1E3E62] shadow-md space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-mono text-[#16C79A] font-bold uppercase px-2 py-0.5 rounded bg-[#1E3E62] border border-[#16C79A]/40">
              STRENGTHS (S)
            </span>
            <ShieldCheck className="w-4 h-4 text-[#16C79A]" />
          </div>
          <h4 className="text-lg font-bold text-white font-serif">Data-Grounded Patriotic Message</h4>
          <ul className="text-sm text-white space-y-1 list-disc pl-4 leading-relaxed">
            <li>Empathetic Bengali slogan: <em className="text-[#16C79A]">"আমাদের গ্রাম, আমাদের ভবিষ্যত"</em>.</li>
            <li>Real live metrics on density and daily GDP traffic losses (৳380M+).</li>
            <li>Strong alignment with youth freelancers and university students.</li>
          </ul>
        </div>

        {/* Quadrant 2: Weaknesses */}
        <div className="p-4 rounded-xl bg-[#0B192C] border border-[#1E3E62] shadow-md space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-mono text-[#DC2626] font-bold uppercase px-2 py-0.5 rounded bg-[#1E3E62] border border-[#DC2626]/40">
              WEAKNESSES (W)
            </span>
            <AlertCircle className="w-4 h-4 text-[#DC2626]" />
          </div>
          <h4 className="text-lg font-bold text-white font-serif">Initial Organic Reach Dependency</h4>
          <ul className="text-sm text-white space-y-1 list-disc pl-4 leading-relaxed">
            <li>Requires micro-influencer boost for viral TikTok adoption.</li>
            <li>Policy change requires long-term government inter-ministerial coordination.</li>
          </ul>
        </div>

        {/* Quadrant 3: Opportunities */}
        <div className="p-4 rounded-xl bg-[#0B192C] border border-[#1E3E62] shadow-md space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-mono text-[#16C79A] font-bold uppercase px-2 py-0.5 rounded bg-[#1E3E62] border border-[#1E3E62]">
              OPPORTUNITIES (O)
            </span>
            <Zap className="w-4 h-4 text-[#16C79A]" />
          </div>
          <h4 className="text-lg font-bold text-white font-serif">Regional Remote Work Revolution</h4>
          <ul className="text-sm text-white space-y-1 list-disc pl-4 leading-relaxed">
            <li>High tech adoption among youth in Rajshahi, Sylhet & Chittagong.</li>
            <li>Corporate interest in reducing Dhaka office rent by 60%.</li>
          </ul>
        </div>

        {/* Quadrant 4: Threats */}
        <div className="p-4 rounded-xl bg-[#0B192C] border border-[#1E3E62] shadow-md space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-mono text-amber-400 font-bold uppercase px-2 py-0.5 rounded bg-[#1E3E62] border border-amber-400/40">
              THREATS (T)
            </span>
            <ShieldAlert className="w-4 h-4 text-amber-400" />
          </div>
          <h4 className="text-lg font-bold text-white font-serif">Status-Quo Institutional Inertia</h4>
          <ul className="text-sm text-white space-y-1 list-disc pl-4 leading-relaxed">
            <li>Resistance from centralized real estate developers in Dhaka.</li>
            <li>Bureaucratic delays in approving regional tax holiday incentives.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
