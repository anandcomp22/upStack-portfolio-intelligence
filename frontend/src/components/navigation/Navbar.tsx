import SearchBar from "./SearchBar";
import NotificationButton from "./NotificationButton";
import ThemeToggle from "@/components/common/ThemeToggle";
import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <header
      className="
        flex
        h-16
        items-center
        justify-between
        border-b
        bg-background
        px-6
      "
    >
      <SearchBar />

      <div
        className="
          flex
          items-center
          gap-4
        "
      >
        <NotificationButton />

        <ThemeToggle />

        <UserMenu />
      </div>
    </header>
  );
}