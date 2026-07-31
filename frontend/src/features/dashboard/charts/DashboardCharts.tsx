import AllocationChart from "./AllocationChart";
import PortfolioChart from "./PortfolioChart";

export default function DashboardCharts() {
  return (
    <section
      className="
        grid
        gap-6
        lg:grid-cols-3
      "
    >
      <div className="lg:col-span-2">
        <PortfolioChart />
      </div>

      <AllocationChart />
    </section>
  );
}