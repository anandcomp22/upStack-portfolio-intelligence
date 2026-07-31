import StatCard from "./StatCard";
import { Wallet, Sparkles, PieChart, TrendingUp } from "lucide-react";

export default function StatsGrid() {
  const stats = [
    {
      id: "net_worth",
      title: "Total Portfolio Value",
      value: "₹24,85,400",
      subValue: "≈ $308,500 USD",
      change: "+₹1,42,300 (+6.08%)",
      positive: true,
      icon: Wallet,
      badgeText: "+1.24% Today",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30",
      metricLabel: "vs last month",
    },
    {
      id: "ai_health",
      title: "AI Health Score",
      value: "92 / 100",
      subValue: "Low Volatility Exposure",
      change: "+4 pts score",
      positive: true,
      icon: Sparkles,
      badgeText: "OPTIMAL",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-500/30",
      metricLabel: "Multi-Agent Rating",
    },
    {
      id: "diversification",
      title: "Diversification Index",
      value: "88 / 100",
      subValue: "Balanced across 6 sectors",
      change: "+2.5% balanced",
      positive: true,
      icon: PieChart,
      badgeText: "WELL BALANCED",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-500/20 dark:text-cyan-300 dark:border-cyan-500/30",
      metricLabel: "Sector Distribution",
    },
    {
      id: "total_gain",
      title: "Total Unrealized Gain",
      value: "+₹4,52,100",
      subValue: "+22.20% Return on Invested",
      change: "+₹28,400 this week",
      positive: true,
      icon: TrendingUp,
      badgeText: "EXPONENTIAL",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-500/20 dark:text-purple-300 dark:border-purple-500/30",
      metricLabel: "All-Time P&L",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.id} {...stat} />
      ))}
    </section>
  );
}