import { CalendarDays } from "lucide-react";

export default function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Portfolio Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Monitor your investments, market performance, and AI-powered insights.
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-xl border bg-background px-4 py-2 shadow-sm">
        <CalendarDays className="h-5 w-5 text-primary" />

        <span className="text-sm font-medium">
          {today}
        </span>
      </div>
    </section>
  );
}