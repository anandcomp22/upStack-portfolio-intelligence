import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="relative min-h-screen w-full bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100 flex flex-col overflow-x-hidden selection:bg-indigo-500 selection:text-white transition-colors duration-300">

      {/* Background glow effects — subtle in light, vivid in dark */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-400/15 dark:bg-indigo-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-purple-400/10 dark:bg-purple-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-emerald-400/8 dark:bg-emerald-500/10 blur-[150px]" />

      <main className="relative z-10 flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800/60 bg-slate-50/90 dark:bg-[#080c14]/80 py-4 text-center text-xs text-slate-500 dark:text-slate-500 backdrop-blur-md transition-colors">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© 2026 upStack Intelligence Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-700 dark:hover:text-slate-400 cursor-pointer">Security Policy</span>
            <span className="hover:text-slate-700 dark:hover:text-slate-400 cursor-pointer">Privacy & Terms</span>
            <span className="hover:text-slate-700 dark:hover:text-slate-400 cursor-pointer">
              API Status:{" "}
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse ml-1" /> 99.99%
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}