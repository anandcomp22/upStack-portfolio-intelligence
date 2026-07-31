import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { allocation } from "../data/allocation";

const COLORS = ["#6366f1", "#10b981", "#06b6d4", "#f59e0b", "#8b5cf6"];

export default function AllocationChart() {
  const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload?.length) return null;
    const data = payload[0];
    return (
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3 shadow-xl text-xs">
        <p className="font-bold text-slate-800 dark:text-slate-200">{data.name}</p>
        <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-0.5">
          Allocation: {data.value}%
        </p>
      </div>
    );
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-5 shadow-sm dark:shadow-lg h-full flex flex-col">
      {/* Header */}
      <div className="mb-2">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          Asset & Sector Allocation
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Distribution across 5 core sectors
        </p>
      </div>

      {/* Donut Chart */}
      <div className="relative flex-1 min-h-[200px] my-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={allocation}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="75%"
              innerRadius="48%"
              paddingAngle={4}
            >
              {allocation.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                  stroke="transparent"
                  strokeWidth={0}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        {/* Donut centre label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-lg font-black text-slate-900 dark:text-white">100%</span>
          <span className="text-[10px] text-slate-500 dark:text-slate-400">5 Sectors</span>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 border-t border-slate-100 dark:border-slate-800/60 pt-3 text-xs">
        {allocation.map((item, index) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 min-w-0">
              <span
                className="h-2.5 w-2.5 rounded-full shrink-0"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-slate-600 dark:text-slate-300 truncate text-[11px]">{item.name}</span>
            </div>
            <span className="font-bold text-slate-800 dark:text-slate-200 text-[11px] ml-2">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}