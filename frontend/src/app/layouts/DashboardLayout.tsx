import { Outlet } from "react-router-dom";

import Sidebar from "@/components/navigation/Sidebar";
import Navbar from "@/components/navigation/Navbar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-background">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Navbar />

        <main className="flex-1 overflow-y-auto bg-muted/20 p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
}