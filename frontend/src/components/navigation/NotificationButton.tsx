import { useState } from "react";
import { Bell, Sparkles } from "lucide-react";

export default function NotificationButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-2.5 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-300 dark:hover:border-slate-700 shadow-xs transition"
        title="Smart Alerts"
      >
        <Bell size={18} />
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white shadow-sm">
          3
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xl z-50 text-xs">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5 mb-3">
            <span className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-400" /> Smart Alerts
            </span>
            <span className="text-[10px] text-indigo-600 dark:text-indigo-400 cursor-pointer hover:underline">
              Mark all read
            </span>
          </div>

          <div className="space-y-2.5">
            <div className="p-2.5 rounded-xl border border-amber-300 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-500/10">
              <div className="font-semibold text-amber-700 dark:text-amber-300">Rebalance Alert</div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
                Tech allocation is 35%. Target allocation is 25%.
              </p>
            </div>

            <div className="p-2.5 rounded-xl border border-indigo-300 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10">
              <div className="font-semibold text-indigo-700 dark:text-indigo-300">Earnings Notice</div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
                NVIDIA (NVDA) reports quarterly earnings on Aug 5.
              </p>
            </div>

            <div className="p-2.5 rounded-xl border border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10">
              <div className="font-semibold text-emerald-700 dark:text-emerald-300">Dividend Credited</div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
                Received ₹4,200 dividend from TCS.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}