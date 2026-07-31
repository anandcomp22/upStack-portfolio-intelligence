import type { LucideIcon } from "lucide-react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subValue?: string;
  change: string;
  positive: boolean;
  icon: LucideIcon;
  badgeText?: string;
  badgeColor?: string;
  metricLabel?: string;
}

export default function StatCard({
  title,
  value,
  subValue,
  change,
  positive,
  icon: Icon,
  badgeText,
  badgeColor = "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30",
  metricLabel = "vs last month",
}: StatCardProps) {
  return (
    <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-5 shadow-sm dark:shadow-lg hover:shadow-md dark:hover:shadow-indigo-600/10 hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all duration-300 group">

      {/* Top Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {title}
        </span>
        <div className="flex items-center gap-2">
          {badgeText && (
            <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${badgeColor}`}>
              {badgeText}
            </span>
          )}
          <div className="rounded-xl bg-slate-100 dark:bg-slate-800/80 p-2 text-slate-500 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-600/10 transition">
            <Icon size={18} />
          </div>
        </div>
      </div>

      {/* Main Value */}
      <div className="space-y-0.5">
        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
          {value}
        </h3>
        {subValue && (
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{subValue}</p>
        )}
      </div>

      {/* Bottom Change Badge */}
      <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/60 text-xs">
        <div className="flex items-center gap-1.5 font-semibold">
          {positive ? (
            <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-200 dark:border-emerald-500/20">
              <TrendingUp className="h-3.5 w-3.5" />
              {change}
            </span>
          ) : (
            <span className="flex items-center gap-1 text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 px-2 py-0.5 rounded-lg border border-rose-200 dark:border-rose-500/20">
              <TrendingDown className="h-3.5 w-3.5" />
              {change}
            </span>
          )}
        </div>
        <span className="text-[11px] text-slate-400 dark:text-slate-500">{metricLabel}</span>
      </div>
    </div>
  );
}