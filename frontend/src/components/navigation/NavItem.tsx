import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface NavItemProps {
  title: string;
  icon: LucideIcon;
  path: string;
  badge?: string | number;
  badgeColor?: string;
}

export default function NavItem({
  title,
  icon: Icon,
  path,
  badge,
  badgeColor = "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/30",
}: NavItemProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-indigo-50 dark:bg-indigo-600/15 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30 shadow-sm font-semibold"
            : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-200"
        }`
      }
    >
      <div className="flex items-center gap-3">
        <Icon size={18} className="shrink-0" />
        <span>{title}</span>
      </div>

      {badge !== undefined && (
        <span
          className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${badgeColor}`}
        >
          {badge}
        </span>
      )}
    </NavLink>
  );
}