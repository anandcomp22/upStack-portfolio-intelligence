import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Wallet,
  TrendingUp,
  Bot,
  FileText,
  Settings,
  LogOut,
  Sparkles,
} from "lucide-react";

import NavItem from "./NavItem";
import { useAuthStore } from "@/features/auth/store/authStore";

const mainMenuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "Portfolio",
    icon: Wallet,
    path: "/portfolio",
    badge: "12 Assets",
  },
  {
    title: "Market Intel",
    icon: TrendingUp,
    path: "/market",
    badge: "LIVE",
    badgeColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  },
  {
    title: "AI Copilot",
    icon: Bot,
    path: "/ai",
    badge: "3 Insights",
    badgeColor: "bg-purple-500/15 text-purple-600 dark:text-purple-300 border-purple-500/30",
  },
  {
    title: "Reports & Tax",
    icon: FileText,
    path: "/reports",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  const { user, logout } = useAuthStore();

  return (
    <aside className="h-screen w-64 shrink-0 border-r border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#080c14] p-5 flex flex-col justify-between select-none transition-colors">
      <div>
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 mb-8 px-1 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-700 text-white font-black text-xl shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition-transform duration-200">
            U
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">upStack</h1>
              <span className="rounded bg-indigo-500/20 px-1.5 py-0.2 text-[9px] font-bold text-indigo-600 dark:text-indigo-400 border border-indigo-500/30">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">AI Investment Copilot</p>
          </div>
        </Link>

        {/* Navigation Section */}
        <div className="space-y-6">
          <div>
            <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Core Intelligence
            </p>
            <nav className="space-y-1">
              {mainMenuItems.slice(0, 4).map((item) => (
                <NavItem
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  path={item.path}
                  badge={item.badge}
                  badgeColor={item.badgeColor}
                />
              ))}
            </nav>
          </div>

          <div>
            <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Management
            </p>
            <nav className="space-y-1">
              {mainMenuItems.slice(4).map((item) => (
                <NavItem
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  path={item.path}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Profile Card & Logout */}
      <div className="space-y-3 border-t border-slate-200 dark:border-slate-800/80 pt-4">
        {/* Multi-Agent System Status Card */}
        <div className="rounded-xl border border-indigo-200 dark:border-indigo-500/20 bg-indigo-50/60 dark:bg-gradient-to-r dark:from-indigo-950/40 dark:to-slate-900/60 p-3 text-xs">
          <div className="flex items-center justify-between text-indigo-700 dark:text-indigo-300 font-semibold mb-1">
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" /> Multi-Agent AI
            </span>
            <span className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active
            </span>
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400">
            Portfolio risk score updated 2m ago.
          </p>
        </div>

        {/* User Profile Footer */}
        <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-100 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white shadow-md">
              {user?.fullName ? user.fullName.split(" ").map(n => n[0]).join("") : "AM"}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                {user?.fullName || "Anand More"}
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                {user?.email || "anand.more@upstack.ai"}
              </p>
            </div>
          </div>

          <button
            onClick={() => logout()}
            title="Sign Out"
            className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-500/10 dark:text-slate-400 dark:hover:text-rose-400 transition"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}