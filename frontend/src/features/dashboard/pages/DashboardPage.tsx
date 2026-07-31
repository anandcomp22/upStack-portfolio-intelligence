import DashboardCharts from "../charts/DashboardCharts";
import DashboardHeader from "../header/DashboardHeader";
import StatsGrid from "../stats/StatsGrid";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <StatsGrid />

      <DashboardCharts />
    </div>
  );
}