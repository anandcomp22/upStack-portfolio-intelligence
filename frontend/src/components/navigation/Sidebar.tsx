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

      <div className="mb-10 border-b pb-6">

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-primary
              text-xl
              font-bold
              text-primary-foreground
            "
          >
            U
          </div>

          <div>

            <h1 className="text-2xl font-bold">
              upStack
            </h1>

            <p className="text-sm text-muted-foreground">
              AI Portfolio Intelligence
            </p>

          </div>

        </div>

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