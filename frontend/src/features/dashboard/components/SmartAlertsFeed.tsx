import { Bell, Eye, TrendingUp, TrendingDown } from "lucide-react";

export default function SmartAlertsFeed() {
  const alerts = [
    {
      id: "a_1",
      time: "10m ago",
      type: "Price Movement",
      symbol: "NVDA",
      message: "Surged +3.2% following AI datacenter chip demand report.",
      positive: true,
    },
    {
      id: "a_2",
      time: "45m ago",
      type: "Dividend Notice",
      symbol: "TCS",
      message: "Quarterly dividend of ₹28/share approved by board.",
      positive: true,
    },
    {
      id: "a_3",
      time: "2h ago",
      type: "AI Copilot Alert",
      symbol: "RELIANCE",
      message: "Oil-to-chemical margin report released. Volatility expected.",
      positive: false,
    },
  ];

  const watchlist = [
    { symbol: "AAPL", name: "Apple Inc.",       price: "$224.20", change: "+1.42%", positive: true  },
    { symbol: "MSFT", name: "Microsoft Corp.",  price: "$428.50", change: "+0.95%", positive: true  },
    { symbol: "TSLA", name: "Tesla Inc.",        price: "$218.80", change: "-2.15%", positive: false },
    { symbol: "AMZN", name: "Amazon.com",       price: "$182.40", change: "+1.10%", positive: true  },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

      {/* Smart Alerts Feed */}
      <div className="md:col-span-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-5 shadow-sm dark:shadow-lg space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3">
          <div className="flex items-center gap-2">
            <Bell size={18} className="text-indigo-500 dark:text-indigo-400" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Smart Market Alerts</h3>
          </div>
          <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-500/20">
            Real-Time Feed
          </span>
        </div>

        <div className="space-y-2.5">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-start justify-between gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/50 hover:border-slate-300 dark:hover:bg-slate-800/50 transition"
            >
              <div className="space-y-0.5 flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <span className="font-bold text-xs text-indigo-600 dark:text-indigo-300">{alert.symbol}</span>
                  <span className="text-[10px] text-slate-400">• {alert.type}</span>
                  <span className="text-[10px] text-slate-400">• {alert.time}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">{alert.message}</p>
              </div>

              <span className={`p-1.5 rounded-lg shrink-0 ${alert.positive ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400"}`}>
                {alert.positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Watchlist */}
      <div className="md:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-5 shadow-sm dark:shadow-lg space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3">
          <div className="flex items-center gap-2">
            <Eye size={18} className="text-emerald-500 dark:text-emerald-400" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">AI Watchlist Tracker</h3>
          </div>
          <span className="text-[10px] text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer transition">
            Edit List
          </span>
        </div>

        <div className="space-y-2">
          {watchlist.map((item) => (
            <div
              key={item.symbol}
              className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-800/30 transition"
            >
              <div>
                <div className="font-bold text-xs text-slate-800 dark:text-slate-100">{item.symbol}</div>
                <div className="text-[10px] text-slate-400">{item.name}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-xs text-slate-800 dark:text-slate-100">{item.price}</div>
                <div className={`text-[11px] font-semibold ${item.positive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                  {item.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
