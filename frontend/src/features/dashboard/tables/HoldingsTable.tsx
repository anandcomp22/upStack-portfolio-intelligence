import { useState } from "react";
import { Search, ArrowUpDown, TrendingUp, TrendingDown, Sparkles } from "lucide-react";

interface HoldingItem {
  id: string;
  symbol: string;
  name: string;
  type: "Equity" | "ETF" | "Mutual Fund" | "Crypto";
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  dayChangePct: number;
  totalReturnPct: number;
  allocationPct: number;
  aiRating: "Strong Buy" | "Hold" | "Rebalance" | "Accumulate";
  aiRatingColor: string;
  currency: "$" | "₹";
}

const INITIAL_HOLDINGS: HoldingItem[] = [
  { id: "h_1", symbol: "NVDA", name: "NVIDIA Corporation", type: "Equity", quantity: 120, avgPrice: 94.5, currentPrice: 118.4, dayChangePct: 3.2, totalReturnPct: 25.29, allocationPct: 18.5, aiRating: "Rebalance", aiRatingColor: "amber", currency: "$" },
  { id: "h_2", symbol: "TCS", name: "Tata Consultancy Services", type: "Equity", quantity: 250, avgPrice: 3820, currentPrice: 4250, dayChangePct: 1.15, totalReturnPct: 11.25, allocationPct: 16.2, aiRating: "Hold", aiRatingColor: "blue", currency: "₹" },
  { id: "h_3", symbol: "HDFCBANK", name: "HDFC Bank Ltd.", type: "Equity", quantity: 400, avgPrice: 1540, currentPrice: 1685, dayChangePct: -0.45, totalReturnPct: 9.41, allocationPct: 14.8, aiRating: "Strong Buy", aiRatingColor: "emerald", currency: "₹" },
  { id: "h_4", symbol: "VOO", name: "Vanguard S&P 500 ETF", type: "ETF", quantity: 45, avgPrice: 480, currentPrice: 512.6, dayChangePct: 0.82, totalReturnPct: 6.79, allocationPct: 12.4, aiRating: "Accumulate", aiRatingColor: "indigo", currency: "$" },
  { id: "h_5", symbol: "RELIANCE", name: "Reliance Industries", type: "Equity", quantity: 180, avgPrice: 2750, currentPrice: 2980.5, dayChangePct: -0.4, totalReturnPct: 8.38, allocationPct: 11.5, aiRating: "Hold", aiRatingColor: "blue", currency: "₹" },
  { id: "h_6", symbol: "BTC", name: "Bitcoin", type: "Crypto", quantity: 0.45, avgPrice: 58000, currentPrice: 64200, dayChangePct: 3.4, totalReturnPct: 10.68, allocationPct: 8.2, aiRating: "Hold", aiRatingColor: "blue", currency: "$" },
  { id: "h_7", symbol: "GOLDBEES", name: "Nippon India Gold BeES ETF", type: "ETF", quantity: 1200, avgPrice: 58.2, currentPrice: 64.5, dayChangePct: 0.22, totalReturnPct: 10.82, allocationPct: 7.2, aiRating: "Strong Buy", aiRatingColor: "emerald", currency: "₹" },
  { id: "h_8", symbol: "INFY", name: "Infosys Limited", type: "Equity", quantity: 200, avgPrice: 1620, currentPrice: 1790, dayChangePct: 1.85, totalReturnPct: 10.49, allocationPct: 6.2, aiRating: "Accumulate", aiRatingColor: "indigo", currency: "₹" },
];

const RATING_COLORS: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30",
  blue:    "bg-blue-50 text-blue-700 border-blue-300 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/30",
  amber:   "bg-amber-50 text-amber-700 border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30",
  indigo:  "bg-indigo-50 text-indigo-700 border-indigo-300 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-500/30",
};

export default function HoldingsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("ALL");
  const [sortField, setSortField] = useState<keyof HoldingItem>("allocationPct");
  const [sortAsc, setSortAsc] = useState(false);

  const filtered = INITIAL_HOLDINGS
    .filter((item) => {
      const matchSearch =
        item.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchType = selectedType === "ALL" || item.type === selectedType;
      return matchSearch && matchType;
    })
    .sort((a, b) => {
      const va = a[sortField];
      const vb = b[sortField];
      if (typeof va === "number" && typeof vb === "number") return sortAsc ? va - vb : vb - va;
      return 0;
    });

  const handleSort = (field: keyof HoldingItem) => {
    if (sortField === field) setSortAsc(!sortAsc);
    else { setSortField(field); setSortAsc(false); }
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm dark:shadow-lg overflow-hidden">

      {/* Table Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 border-b border-slate-100 dark:border-slate-800/80">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Portfolio Holdings & AI Ratings
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Real-time pricing, total returns & multi-agent recommendations
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="relative flex items-center rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 w-48 focus-within:border-indigo-400 dark:focus-within:border-indigo-500 transition">
            <Search size={14} className="text-slate-400 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search ticker..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs text-slate-800 dark:text-slate-200 placeholder:text-slate-400 outline-none"
            />
          </div>

          {/* Type Filter */}
          <div className="flex items-center rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-1">
            {["ALL", "Equity", "ETF", "Crypto"].map((t) => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition ${
                  selectedType === t
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/50 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <th className="py-3 px-4">Asset</th>
              <th className="py-3 px-3">Type</th>
              <th className="py-3 px-3 text-right cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400" onClick={() => handleSort("quantity")}>
                <span className="inline-flex items-center gap-1">Qty <ArrowUpDown size={11} /></span>
              </th>
              <th className="py-3 px-3 text-right">Avg / Current</th>
              <th className="py-3 px-3 text-right cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400" onClick={() => handleSort("dayChangePct")}>
                <span className="inline-flex items-center gap-1">Day % <ArrowUpDown size={11} /></span>
              </th>
              <th className="py-3 px-3 text-right cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400" onClick={() => handleSort("totalReturnPct")}>
                <span className="inline-flex items-center gap-1">Return <ArrowUpDown size={11} /></span>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400" onClick={() => handleSort("allocationPct")}>
                <span className="inline-flex items-center gap-1">Weight <ArrowUpDown size={11} /></span>
              </th>
              <th className="py-3 px-3 text-center">AI Rating</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">

                {/* Symbol + Name */}
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-600/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-bold text-[10px]">
                      {item.symbol.substring(0, 3)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 dark:text-slate-100">{item.symbol}</div>
                      <div className="text-[10px] text-slate-400 truncate max-w-[130px]">{item.name}</div>
                    </div>
                  </div>
                </td>

                {/* Type */}
                <td className="py-3 px-3">
                  <span className="rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {item.type}
                  </span>
                </td>

                {/* Qty */}
                <td className="py-3 px-3 text-right font-medium text-slate-700 dark:text-slate-200">
                  {item.quantity}
                </td>

                {/* Price */}
                <td className="py-3 px-3 text-right">
                  <div className="font-semibold text-slate-800 dark:text-slate-100">
                    {item.currency}{item.currentPrice.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Avg: {item.currency}{item.avgPrice.toLocaleString()}
                  </div>
                </td>

                {/* Day Change */}
                <td className="py-3 px-3 text-right">
                  <span className={`inline-flex items-center gap-1 font-semibold ${item.dayChangePct >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                    {item.dayChangePct >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {item.dayChangePct >= 0 ? `+${item.dayChangePct}%` : `${item.dayChangePct}%`}
                  </span>
                </td>

                {/* Total Return */}
                <td className="py-3 px-3 text-right font-bold text-emerald-600 dark:text-emerald-400">
                  +{item.totalReturnPct}%
                </td>

                {/* Weight + Bar */}
                <td className="py-3 px-3 min-w-[120px]">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    {item.allocationPct}%
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 rounded-full"
                      style={{ width: `${Math.min(item.allocationPct * 3, 100)}%` }}
                    />
                  </div>
                </td>

                {/* AI Rating */}
                <td className="py-3 px-3 text-center">
                  <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${RATING_COLORS[item.aiRatingColor]}`}>
                    <Sparkles className="h-2.5 w-2.5" />
                    {item.aiRating}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
