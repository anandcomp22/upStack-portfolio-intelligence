import { useState } from "react";
import { Bot, Sparkles, ArrowRight, TrendingUp, Zap, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function AICopilotWidget() {
  const [appliedAction, setAppliedAction] = useState<string | null>(null);

  const insights = [
    {
      id: "rec_1",
      category: "Portfolio Rebalancing",
      severity: "High",
      severityColor:
        "border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300",
      title: "Tech Sector Exposure Rebalance Trigger",
      description:
        "Your technology sector allocation has grown to 40.0% due to NVDA and TCS gains (target: 25.0%). Rebalancing 5.0% into Financials lowers beta from 1.15 → 0.95.",
      actionText: "Apply Rebalance (5% → Financials)",
      impact: "Lowers Beta by 0.20 • Risk Score −6 pts",
    },
    {
      id: "rec_2",
      category: "Earnings Intelligence",
      severity: "Medium",
      severityColor:
        "border-indigo-300 bg-indigo-50 text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300",
      title: "NVIDIA (NVDA) Q2 Earnings Analysis",
      description:
        "Multi-agent sentiment model predicts positive AI data-centre guidance ahead of Aug 5 earnings. Current position is 8.5% of portfolio.",
      actionText: "Set Volatility Stop-Loss (+12% Target)",
      impact: "Automated Profit Target Alert",
    },
    {
      id: "rec_3",
      category: "Hedging Suggestion",
      severity: "Info",
      severityColor:
        "border-cyan-300 bg-cyan-50 text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300",
      title: "Gold ETF Diversification Buffer",
      description:
        "Adding 5.0% Sovereign Gold ETF hedge reduces maximum drawdown risk during rate-decision announcements by 14%.",
      actionText: "Explore Gold ETF Holdings",
      impact: "Drawdown Risk Reduction",
    },
  ];

  const handleApplyAction = (id: string, actionText: string) => {
    setAppliedAction(id);
    toast.success("AI Recommendation Executed", { description: actionText });
  };

  return (
    <div className="rounded-2xl border border-indigo-200 dark:border-indigo-500/30 bg-gradient-to-br from-indigo-50/80 via-white to-white dark:from-indigo-950/30 dark:via-slate-900/90 dark:to-slate-900/90 p-5 shadow-sm dark:shadow-xl">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 border-b border-indigo-100 dark:border-slate-800/80 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-600/30">
            <Bot size={22} />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                AI Copilot Multi-Agent Insights
              </h3>
              <span className="flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30">
                <Sparkles className="h-3 w-3" /> 3 ACTIVE RECOMMENDATIONS
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Continuously analysing market sentiment, holdings weight, and risk factors
            </p>
          </div>
        </div>

        <button
          onClick={() => toast.info("Opening AI Copilot Assistant...")}
          className="shrink-0 flex items-center justify-center gap-2 rounded-xl bg-indigo-100 dark:bg-indigo-600/20 border border-indigo-300 dark:border-indigo-500/40 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-600/30 transition"
        >
          <Zap className="h-3.5 w-3.5 text-amber-500" />
          Ask Copilot Anything
        </button>
      </div>

      {/* Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {insights.map((item) => {
          const isDone = appliedAction === item.id;
          return (
            <div
              key={item.id}
              className={`flex flex-col justify-between rounded-xl border p-4 transition-all duration-200 ${
                isDone
                  ? "border-emerald-300 dark:border-emerald-500/40 bg-emerald-50 dark:bg-emerald-500/10"
                  : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {item.category}
                  </span>
                  <span className={`rounded-full border px-2 py-0.5 text-[9px] font-bold ${item.severityColor}`}>
                    {item.severity} Priority
                  </span>
                </div>

                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100 mb-1.5 leading-snug">
                  {item.title}
                </h4>

                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                  {item.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/60">
                <div className="flex items-center gap-1 text-[10px] font-semibold text-indigo-600 dark:text-indigo-300">
                  <TrendingUp className="h-3 w-3 text-emerald-500 dark:text-emerald-400" />
                  Impact: {item.impact}
                </div>

                <button
                  disabled={isDone}
                  onClick={() => handleApplyAction(item.id, item.actionText)}
                  className={`w-full py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition ${
                    isDone
                      ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 cursor-default"
                      : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm shadow-indigo-600/30"
                  }`}
                >
                  {isDone ? (
                    <>
                      <CheckCircle2 className="h-3.5 w-3.5" /> Applied
                    </>
                  ) : (
                    <>
                      {item.actionText} <ArrowRight className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
