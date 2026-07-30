import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";


interface NavItemProps {
  title: string;
  icon: LucideIcon;
  path: string;
}


export default function NavItem({
  title,
  icon: Icon,
  path,
}: NavItemProps) {

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `
        flex
        w-full
        items-center
        gap-3
        rounded-lg
        px-3
        py-2
        text-sm
        transition-all

        ${
          isActive
            ? "bg-primary text-primary-foreground"
            : "hover:bg-accent"
        }
        `
      }
    >

      <Icon size={18} />


      <span>
        {title}
      </span>


    </NavLink>
  );
}