import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TrendingDown, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
}

export default function StatCard({
  title,
  value,
  change,
  positive,
}: StatCardProps) {
  return (
    <Card
      className="
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <h2 className="mt-2 text-4xl font-bold tracking-tight">
          {value}
        </h2>

        <div className="mt-4 flex items-center gap-2">
          {positive ? (
            <TrendingUp className="h-4 w-4 text-green-500" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-500" />
          )}

          <span
            className={`text-sm font-medium ${
              positive ? "text-green-600" : "text-red-600"
            }`}
          >
            {change}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}