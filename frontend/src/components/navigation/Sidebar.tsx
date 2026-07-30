import {
  LayoutDashboard,
  Wallet,
  TrendingUp,
  Bot,
  FileText,
  Settings,
} from "lucide-react";


import NavItem from "./NavItem";


const menuItems = [

  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },


  {
    title: "Portfolio",
    icon: Wallet,
    path: "/portfolio",
  },


  {
    title: "Market",
    icon: TrendingUp,
    path: "/market",
  },


  {
    title: "AI Copilot",
    icon: Bot,
    path: "/ai",
  },


  {
    title: "Reports",
    icon: FileText,
    path: "/reports",
  },


  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },

];



export default function Sidebar() {

  return (

    <aside
      className="
        h-screen
        w-64
        border-r
        bg-background
        p-5
      "
    >


      {/* Brand */}

      <div className="mb-8">

        <h1
          className="
            text-2xl
            font-bold
          "
        >
            upStack
        </h1>


        <p
          className="
            text-sm
            text-muted-foreground
          "
        >
          Portfolio Intelligence
        </p>

      </div>



      {/* Navigation */}

      <nav className="space-y-2">

        {
          menuItems.map((item) => (

            <NavItem

              key={item.title}

              title={item.title}

              icon={item.icon}

              path={item.path}

            />

          ))
        }

      </nav>


    </aside>

  );
}