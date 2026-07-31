import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { portfolioPerformance } from "../data/portfolio-chart";

export default function PortfolioChart() {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null;
    return (
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3 shadow-xl text-xs space-y-1">
        <p className="font-bold text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 pb-1">
          {label} Performance
        </p>
        <div className="flex items-center justify-between gap-4 text-indigo-600 dark:text-indigo-400 font-semibold">
          <span>upStack Portfolio:</span>
          <span>₹{Number(payload[0]?.value).toLocaleString("en-IN")}</span>
        </div>
        {payload[1] && (
          <div className="flex items-center justify-between gap-4 text-slate-500 dark:text-slate-400">
            <span>Market Benchmark:</span>
            <span>₹{Number(payload[1]?.value).toLocaleString("en-IN")}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-5 shadow-sm dark:shadow-lg h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Portfolio Growth & Benchmarking
            </h3>
            <span className="rounded-full bg-emerald-100 dark:bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30">
              +17.2% Alpha
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Real-time valuation vs S&P 500 / NIFTY Benchmark
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold">
            <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
            upStack Portfolio
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-400 dark:bg-slate-600" />
            Benchmark
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full flex-1 min-h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={portfolioPerformance} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="portfolioGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="benchmarkGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#94a3b8" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} stroke="#e2e8f0" className="dark:[stroke:#1e293b]" strokeDasharray="3 3" />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 11 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 11 }}
              tickFormatter={(val) => `₹${(val / 100000).toFixed(1)}L`}
            />

            <Tooltip content={<CustomTooltip />} />

            <Area type="monotone" dataKey="portfolio" stroke="#6366f1" strokeWidth={3} fill="url(#portfolioGrad)" />
            <Area type="monotone" dataKey="benchmark" stroke="#94a3b8" strokeWidth={2} strokeDasharray="4 4" fill="url(#benchmarkGrad)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}