import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { allocation } from "../data/allocation";

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#f59e0b",
  "#dc2626",
  "#7c3aed",
];



export default function AllocationChart() {

    const CustomTooltip = ({ active, payload }: any) => {
        if (!active || !payload?.length) {
            return null;
        }

        const data = payload[0];

        return (
            <div className="rounded-lg border bg-background p-3 shadow-lg">
            <p className="font-semibold">
                {data.name}
            </p>

            <p className="text-primary">
                {data.value}%
            </p>
            </div>
        );
    };


  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          Asset Allocation
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer
            width="100%"
            height={350}
            >
            <PieChart>

                <Pie
                data={allocation}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="45%"
                outerRadius={90}
                innerRadius={45}
                paddingAngle={3}
                >
                {allocation.map((_, index) => (
                    <Cell
                    key={index}
                    fill={COLORS[index]}
                    />
                ))}
                </Pie>

                <Tooltip content={<CustomTooltip />} />

                <Legend
                verticalAlign="bottom"
                align="center"
                iconType="circle"
                wrapperStyle={{
                    paddingTop: "20px",
                    fontSize: "13px",
                }}
                />

            </PieChart>
            </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}