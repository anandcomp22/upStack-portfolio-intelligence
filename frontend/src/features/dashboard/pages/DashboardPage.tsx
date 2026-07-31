import DashboardHeader from "../header/DashboardHeader";
import StatsGrid from "../stats/StatsGrid";
import DashboardCharts from "../charts/DashboardCharts";
import AICopilotWidget from "../components/AICopilotWidget";
import HoldingsTable from "../tables/HoldingsTable";
import SmartAlertsFeed from "../components/SmartAlertsFeed";

export default function DashboardPage() {
  return (
    <div className="space-y-6 pb-12 max-w-screen-2xl mx-auto">
      {/* Page Header & Action Controls */}
      <DashboardHeader />

      {/* Primary KPI Stats Grid (4 cards) */}
      <StatsGrid />

      {/* AI Copilot Multi-Agent Recommendations */}
      <AICopilotWidget />

      {/* Portfolio Growth Chart + Sector Allocation Donut */}
      <DashboardCharts />

      {/* Holdings Table with AI Ratings */}
      <HoldingsTable />

      {/* Smart Market Alerts + Watchlist */}
      <SmartAlertsFeed />
    </div>
  );
}