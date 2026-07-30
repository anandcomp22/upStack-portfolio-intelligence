import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import DashboardLayout from "../layouts/DashboardLayout";

import DashboardPage from "@/features/dashboard/pages/DashboardPage";


export default function AppRouter() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<DashboardLayout />}
        >
          <Route
            path="/"
            element={<DashboardPage />}
          />

          <Route
            path="/portfolio"
            element={<div>Portfolio Page</div>}
          />

          <Route
            path="/market"
            element={<div>Market Page</div>}
          />

          <Route
            path="/ai"
            element={<div>AI Copilot Page</div>}
          />

          <Route
            path="/reports"
            element={<div>Reports Page</div>}
          />

          <Route
            path="/settings"
            element={<div>Settings Page</div>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}