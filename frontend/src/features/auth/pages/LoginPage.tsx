import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Bot,
  ShieldAlert,
  BarChart3,
  Sparkles,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  Globe2,
} from "lucide-react";

import LoginForm from "../components/LoginForm";
import SocialLogin from "../components/SocialLogin";
import { Separator } from "@/components/ui/separator";

const TICKERS = [
  { symbol: "NIFTY 50", price: "24,842.10", change: "+0.85%", positive: true },
  { symbol: "S&P 500", price: "5,541.20", change: "+1.12%", positive: true },
  { symbol: "NASDAQ", price: "17,624.90", change: "+1.45%", positive: true },
  { symbol: "NVDA", price: "$118.40", change: "+3.20%", positive: true },
  { symbol: "RELIANCE", price: "₹2,980.50", change: "-0.40%", positive: false },
];

export default function LoginPage() {
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % TICKERS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-12 bg-[#080c14] text-slate-100">
      {/* Left Form Section (5 columns on lg) */}
      <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-10 lg:p-12 z-10 border-r border-slate-800/80 bg-[#0b0f19]/90 backdrop-blur-xl">
        {/* Top Logo */}
        <div>
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-700 text-white font-black text-xl shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition-transform duration-200">
              U
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-white">upStack</span>
                <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-[10px] font-bold text-indigo-400 border border-indigo-500/30">
                  v1.0 AI
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Portfolio Intelligence Platform</p>
            </div>
          </Link>
        </div>

        {/* Center Auth Form */}
        <div className="my-auto py-8 space-y-6 max-w-md w-full mx-auto">
          <div className="space-y-2 text-left">
            <h1 className="text-3xl font-extrabold tracking-tight text-white">
              Welcome back
            </h1>
            <p className="text-sm text-slate-400">
              Sign in to monitor your investments, review multi-agent AI insights, and execute rebalancing.
            </p>
          </div>

          <LoginForm />

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#0b0f19] px-3 text-slate-500 font-medium tracking-wider">
                Or sign in with
              </span>
            </div>
          </div>

          <SocialLogin />

          <div className="text-center text-xs text-slate-400 pt-2">
            Don't have an upStack account?{" "}
            <Link
              to="/register"
              className="font-semibold text-indigo-400 hover:text-indigo-300 transition hover:underline"
            >
              Create Account
            </Link>
          </div>
        </div>

        {/* Bottom Security Note */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-6 border-t border-slate-800/60">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Bank-grade Security
          </span>
          <span className="flex items-center gap-1.5">
            <Globe2 className="h-4 w-4 text-indigo-400" />
            Multi-Agent Reasoning Engine
          </span>
        </div>
      </div>

      {/* Right Feature Showcase (7 columns on lg) */}
      <div className="hidden lg:col-span-7 lg:flex flex-col justify-between p-12 relative overflow-hidden bg-slate-950/60">
        {/* Glow backdrop */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />

        {/* Live Ticker Bar */}
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-3 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Zap className="h-4 w-4 text-amber-400 animate-pulse" />
            <span>LIVE MARKET INTEL</span>
          </div>
          <div className="flex items-center gap-6 overflow-hidden text-xs">
            {TICKERS.map((t, i) => (
              <div
                key={t.symbol}
                className={`flex items-center gap-2 transition-all duration-300 ${
                  i === tickerIndex ? "scale-105 opacity-100 font-bold" : "opacity-60"
                }`}
              >
                <span className="text-slate-200">{t.symbol}</span>
                <span className="text-slate-400">{t.price}</span>
                <span className={t.positive ? "text-emerald-400" : "text-rose-400"}>
                  {t.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Showcase Hero */}
        <div className="my-auto max-w-xl space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Multi-Agent Investment Copilot</span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-white leading-tight">
              Transform portfolio data into actionable AI intelligence.
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              upStack answers complex investment questions: risk exposure, sector allocation, automated rebalancing, and real-time news impact analysis.
            </p>
          </div>

          {/* Interactive Mock Preview Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1: AI Health Score */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 backdrop-blur-md hover:border-indigo-500/40 transition group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-400">AI Health Score</span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                  OPTIMAL
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-white">94</span>
                <span className="text-xs text-slate-400">/ 100</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-2 flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-emerald-400" />
                Risk diversification at top percentile
              </p>
            </div>

            {/* Card 2: AI Multi-Agent Alert */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 backdrop-blur-md hover:border-indigo-500/40 transition group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-400">Copilot Alert</span>
                <Bot className="h-4 w-4 text-indigo-400" />
              </div>
              <div className="text-xs font-medium text-slate-200">
                Tech sector weight 35%
              </div>
              <p className="text-[11px] text-indigo-300 mt-1 flex items-center gap-1">
                Recommendation: Rebalance 5% into Financials
              </p>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="rounded-2xl border border-slate-800/80 bg-gradient-to-r from-slate-900/80 to-indigo-950/40 p-5 backdrop-blur-md">
            <p className="text-xs text-slate-300 italic leading-relaxed">
              "upStack transformed how we analyze risk across multi-asset portfolios. The AI copilot highlights sector concentration before market shifts happen."
            </p>
            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <span>— Portfolio Management Lead</span>
              <span className="text-indigo-400 font-semibold">$1.2B+ Portfolio Assets Monitored</span>
            </div>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-800/60 pt-4">
          <span>Enterprise Cloud Architecture</span>
          <span>MCP Protocol Powered</span>
          <span>Real-Time Market Sync</span>
        </div>
      </div>
    </div>
  );
}