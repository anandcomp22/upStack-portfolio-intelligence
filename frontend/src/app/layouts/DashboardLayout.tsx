import { Outlet } from "react-router-dom";

export default function Dashboardlayout() {
    return (
        <div className="flex min-h-screen">
            <aside className="w-64 border-r">
                Sidebar
            </aside>

            <main className="flex-1">
                <header className="h-16 border-b flex items-center px-6">
                    Navbar
                </header>

                <Outlet />
            </main>
        </div>
    );
}