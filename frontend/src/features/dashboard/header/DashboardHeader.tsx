import { useState } from "react";
import { Plus, RefreshCw, Sparkles } from "lucide-react";
import { useAuthStore } from "@/features/auth/store/authStore";

const TIMEFRAMES = ["1D", "1W", "1M", "6M", "1Y", "ALL"];

export default function DashboardHeader() {
  const user = useAuthStore((state) => state.user);
  const [activeTimeframe, setActiveTimeframe] = useState("1M");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-slate-200 dark:border-slate-800/80 pb-6">

      {/* Greeting & Subtitle */}
      <div>
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Welcome back, {user?.fullName?.split(" ")[0] || "Anand"} 👋
          </h1>
          <span className="rounded-full bg-indigo-100 dark:bg-indigo-500/10 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30">
            Portfolio Copilot
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
          <span>Real-time AI multi-agent monitoring & health analytics</span>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
          <span className="hidden sm:inline text-indigo-600 dark:text-indigo-300 font-medium">
            {user?.riskProfile || "Growth Strategy"}
          </span>
        </p>
      </div>

      {/* Actions & Filters */}
      <div className="flex flex-wrap items-center gap-3">

        {/* Time Horizon Pills */}
        <div className="flex items-center rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 p-1">
          {TIMEFRAMES.map((tf) => (
            <button
              key={tf}
              onClick={() => setActiveTimeframe(tf)}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                activeTimeframe === tf
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>

        {/* Refresh button */}
        <button
          onClick={handleRefresh}
          title="Refresh intelligence data"
          className="flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-300 dark:hover:border-slate-700 transition shadow-xs"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin text-indigo-500" : ""}`} />
          <span className="hidden sm:inline">Sync</span>
        </button>

        {/* Add Holding */}
        <button className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/20 hover:from-indigo-500 hover:to-violet-500 transition">
          <Plus className="h-4 w-4" />
          <span>Add Holding</span>
        </button>

        {/* AI Audit */}
        <button className="flex items-center gap-1.5 rounded-xl border border-indigo-300 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition">
          <Sparkles className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-400" />
          <span>AI Audit</span>
        </button>

      </div>
    </section>
  );
}