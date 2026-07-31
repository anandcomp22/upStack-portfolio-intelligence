import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  Lock,
  Globe,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import RegisterForm from "../components/RegisterForm";
import SocialLogin from "../components/SocialLogin";

export default function RegisterPage() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-12 bg-[#080c14] text-slate-100">
      {/* Left Feature Section (5 columns on lg) */}
      <div className="hidden lg:col-span-5 lg:flex flex-col justify-between p-10 relative overflow-hidden border-r border-slate-800/80 bg-slate-950/80">
        {/* Glow backdrop */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-emerald-600/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/20 rounded-full blur-[130px] pointer-events-none" />

        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-indigo-700 text-white font-black text-xl shadow-lg shadow-emerald-600/25 group-hover:scale-105 transition-transform duration-200">
              U
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-white">upStack</span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                  Join 50k+ Investors
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">AI Multi-Agent Portfolio Intelligence</p>
            </div>
          </Link>
        </div>

        {/* Middle Feature Highlights */}
        <div className="my-auto space-y-6 max-w-md">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Next-Gen Financial Intelligence</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white leading-snug">
              Elevate your portfolio with intelligent AI copilot.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Get personalized rebalancing suggestions, risk exposure breakdown, and automated performance tracking.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {[
              { title: "Multi-Agent AI Reasoning", desc: "Monitors sectors, earnings & market macro signals 24/7." },
              { title: "Risk & Health Scoring", desc: "Real-time Portfolio Health Index & Sharpe ratio calculations." },
              { title: "Smart Actionable Alerts", desc: "Instant notifications for price drops & rebalance triggers." },
              { title: "Zero Latency Data Sync", desc: "Connects with market tickers and institutional benchmarks." },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-md">
                <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">{item.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-800/60 pt-4">
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-4 w-4 text-emerald-400" /> SOC2 Type II Certified
          </span>
          <span className="flex items-center gap-1">
            <Lock className="h-4 w-4 text-indigo-400" /> AES-256 Bit Encryption
          </span>
        </div>
      </div>

      {/* Right Registration Form Section (7 columns on lg) */}
      <div className="col-span-12 lg:col-span-7 flex flex-col justify-between p-6 sm:p-10 lg:p-12 z-10 bg-[#0b0f19]/90 backdrop-blur-xl">
        <div className="lg:hidden mb-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-indigo-600 text-white font-black text-lg">
              U
            </div>
            <span className="text-xl font-bold text-white">upStack</span>
          </Link>
        </div>

        <div className="my-auto max-w-lg w-full mx-auto space-y-6">
          <div className="space-y-1.5 text-left">
            <h1 className="text-3xl font-extrabold tracking-tight text-white">
              Create your upStack account
            </h1>
            <p className="text-sm text-slate-400">
              Start managing your portfolio with AI-powered intelligence in under 2 minutes.
            </p>
          </div>

          <RegisterForm />

          <div className="relative my-3">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#0b0f19] px-3 text-slate-500 font-medium tracking-wider">
                Or register using
              </span>
            </div>
          </div>

          <SocialLogin />

          <div className="text-center text-xs text-slate-400 pt-2">
            Already have an upStack account?{" "}
            <Link
              to="/login"
              className="font-semibold text-emerald-400 hover:text-emerald-300 transition hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>

        <div className="text-center text-xs text-slate-600 pt-6 border-t border-slate-800/60 mt-6">
          By signing up, you agree to receive portfolio intelligence alerts & security notifications.
        </div>
      </div>
    </div>
  );
}