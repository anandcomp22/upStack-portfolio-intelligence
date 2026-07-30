import { Outlet } from "react-router-dom";
import Sidebar from "@/components/navigation/Sidebar";
import Navbar from "@/components/navigation/Navbar";


export default function Dashboardlayout() {
    return (
        <div className="flex min-h-screen overflow-hidden">
            <Sidebar/>

            <div className="flex-1 flex flex-col">
                <Navbar/>

                <main className="flex-1 overflow-y-auto bg-muted/20">

                    <Outlet />
                </main>
            </div>
        </div>
    );
}