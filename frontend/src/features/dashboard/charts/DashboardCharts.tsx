import PortfolioChart from "./PortfolioChart";
import AllocationChart from "./AllocationChart";

export default function DashboardCharts() {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      {/* Portfolio Performance (8 cols on lg) */}
      <div className="lg:col-span-8">
        <PortfolioChart />
      </div>

      {/* Asset Allocation (4 cols on lg) */}
      <div className="lg:col-span-4">
        <AllocationChart />
      </div>
    </section>
  );
}