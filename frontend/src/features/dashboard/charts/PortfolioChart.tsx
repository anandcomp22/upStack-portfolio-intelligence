import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { portfolioPerformance } from "../data/portfolio-chart";

export default function PortfolioChart() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          Portfolio Performance
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer
          width="100%"
          height={350}
        >
          <AreaChart data={portfolioPerformance}>

            <defs>
              <linearGradient
                id="portfolioGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#3b82f6"
                  stopOpacity={0.4}
                />

                <stop
                  offset="95%"
                  stopColor="#3b82f6"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
            vertical={false}
            strokeDasharray="4 4"
            />

            <XAxis dataKey="month" />

            <YAxis
            tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`}
            />

            <Tooltip
            formatter={(value) => [
                `₹${Number(value).toLocaleString("en-IN")}`,
                "Portfolio Value",
            ]}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              fill="url(#portfolioGradient)"
              strokeWidth={3}
            />

          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}