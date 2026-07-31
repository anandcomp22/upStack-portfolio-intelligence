import StatCard from "./StatCard";
import { dashboardStats } from "../data/dashboard";

export default function StatsGrid() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          positive={stat.positive}
        />
      ))}
    </section>
  );
}