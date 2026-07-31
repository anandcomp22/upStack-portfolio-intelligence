import SearchBar from "./SearchBar";
import NotificationButton from "./NotificationButton";
import ThemeToggle from "@/components/common/ThemeToggle";
import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200/90 dark:border-slate-800/80 bg-white/90 dark:bg-[#080c14]/90 px-6 backdrop-blur-md z-30 transition-colors">
      <SearchBar />

      <div className="flex items-center gap-3">
        {/* Live Market Status Pill */}
        <div className="hidden lg:flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-700 dark:text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-[11px]">NSE & NASDAQ OPEN</span>
        </div>

        <NotificationButton />
        <ThemeToggle />
        <UserMenu />
      </div>
    </header>
  );
}