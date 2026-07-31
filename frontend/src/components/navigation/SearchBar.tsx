import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative flex items-center w-80 lg:w-96 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 px-3.5 py-2 text-xs focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500/30 transition">
      <Search size={16} className="text-slate-400 shrink-0 mr-2.5" />
      <input
        type="text"
        placeholder="Search stocks, sectors, AI insights, holdings..."
        className="w-full bg-transparent text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none text-xs"
      />
      <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-1.5 py-0.5 text-[10px] font-mono text-slate-500 dark:text-slate-400 shrink-0 shadow-xs">
        ⌘K
      </kbd>
    </div>
  );
}