import { useState } from "react";
import { ChevronDown, LogOut, User as UserIcon, Shield, Settings } from "lucide-react";
import { useAuthStore } from "@/features/auth/store/authStore";

export default function UserMenu() {
  const { user, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  const initials = user?.fullName
    ? user.fullName.split(" ").map((n) => n[0]).join("")
    : "AM";

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 px-3 py-1.5 transition hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-bold text-white shadow-sm">
          {initials}
        </div>

        <div className="text-left hidden md:block">
          <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
            {user?.fullName || "Anand More"}
          </p>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
            {user?.riskProfile || "Senior Investor"}
          </p>
        </div>

        <ChevronDown size={14} className="text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 shadow-2xl z-50 text-xs">
          <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800 mb-1">
            <p className="font-bold text-slate-800 dark:text-slate-200">
              {user?.fullName || "Anand More"}
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
              {user?.email || "anand@upstack.ai"}
            </p>
          </div>

          <div className="space-y-0.5">
            {[
              { icon: UserIcon, label: "Profile & API Keys" },
              { icon: Shield,   label: "Security Settings" },
              { icon: Settings, label: "Preferences" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="flex w-full items-center gap-2 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition"
              >
                <Icon size={14} /> {label}
              </button>
            ))}
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 mt-1 pt-1">
            <button
              onClick={() => logout()}
              className="flex w-full items-center gap-2 px-3 py-2 rounded-xl text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition font-medium"
            >
              <LogOut size={14} /> Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}