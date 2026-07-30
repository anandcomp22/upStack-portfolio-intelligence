import {
  Search,
  Bell,
} from "lucide-react";
import ThemeToggle from "@/components/common/ThemeToggle";


export default function Navbar() {

  return (
    <header
      className="
        flex
        h-16
        items-center
        justify-between
        border-b
        px-6
      "
    >

      {/* Search */}

      <div
        className="
          flex
          w-80
          items-center
          gap-2
          rounded-lg
          border
          px-3
          py-2
        "
      >

        <Search size={18} />

        <input
          placeholder="Search..."
          className="
            w-full
            bg-transparent
            outline-none
          "
        />

      </div>


      {/* Actions */}

      <div
        className="
          flex
          items-center
          gap-5
        "
      >

        <Bell
          size={20}
          className="cursor-pointer"
        />


        <ThemeToggle />


        <div
          className="
            flex
            items-center
            gap-2
          "
        >

          <div
            className="
              h-8
              w-8
              rounded-full
              bg-primary
            "
          />


          <span>
            User
          </span>

        </div>

      </div>


    </header>
  );
}