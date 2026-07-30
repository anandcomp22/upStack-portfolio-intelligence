import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DashboardLayout />}>
                    <Route path="/" element={<DashboardPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}