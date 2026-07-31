import { Bell } from "lucide-react";

export default function NotificationButton() {
  return (
    <button
      className="
        rounded-lg
        p-2
        transition
        hover:bg-accent
      "
    >
      <Bell size={20} />
    </button>
  );
}