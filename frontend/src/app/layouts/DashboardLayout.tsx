import { Outlet } from "react-router-dom";
import Sidebar from "@/components/navigation/Sidebar";
import Navbar from "@/components/navigation/Navbar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden font-sans selection:bg-indigo-500 selection:text-white bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 transition-colors duration-300">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col h-full overflow-hidden relative">

        {/* Ambient glow blobs — only visible in dark */}
        <div className="pointer-events-none absolute top-0 right-1/4 h-96 w-96 rounded-full bg-indigo-600/8 dark:bg-indigo-600/10 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-[140px]" />

        {/* Top Navbar */}
        <Navbar />

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 z-10">
          <Outlet />
        </main>

      </div>
    </div>
  );
}