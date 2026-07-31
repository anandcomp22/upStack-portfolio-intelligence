import { ChevronDown } from "lucide-react";

export default function UserMenu() {
  return (
    <button
      className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        px-3
        py-2
        transition
        hover:bg-accent
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-primary
          text-sm
          font-semibold
          text-primary-foreground
        "
      >
        AM
      </div>

      <div className="text-left">
        <p className="text-sm font-medium">
          Anand More
        </p>

        <p className="text-xs text-muted-foreground">
          Investor
        </p>
      </div>

      <ChevronDown size={18} />
    </button>
  );
}