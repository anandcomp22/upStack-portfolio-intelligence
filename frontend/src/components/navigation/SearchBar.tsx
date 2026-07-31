import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        w-96
        rounded-xl
        border
        bg-background
        px-4
        py-2
      "
    >
      <Search
        size={18}
        className="text-muted-foreground"
      />

      <input
        type="text"
        placeholder="Search portfolio, stocks, news..."
        className="
          w-full
          bg-transparent
          text-sm
          outline-none
        "
      />
    </div>
  );
}