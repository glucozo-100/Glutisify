"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  BarChart3,
  Clock,
  CreditCard,
  Home,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  User,
  Users,
  Video,
  HelpCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { logout } from "@/utils/auth"
import { Separator } from "@/components/ui/separator"

export function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/auth/login")
  }

  const mainRoutes = [
    {
      label: "Home",
      icon: Home,
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Subjects",
      icon: Users,
      href: "/subjects",
      active: pathname === "/subjects",
    },
    {
      label: "History",
      icon: Clock,
      href: "/history",
      active: pathname === "/history",
    },
    {
      label: "Videos",
      icon: Video,
      href: "/videos",
      active: pathname === "/videos",
    },
    {
      label: "Chatbot",
      icon: MessageSquare,
      href: "/chatbot",
      active: pathname === "/chatbot",
    },
    {
      label: "Support",
      icon: HelpCircle,
      href: "/support",
      active: pathname === "/support",
    },
  ]

  const settingsRoutes = [
    {
      label: "Settings",
      icon: Settings,
      href: "/settings",
      active: pathname === "/settings",
    },
    {
      label: "Account",
      icon: User,
      href: "/account",
      active: pathname === "/account",
    },
    {
      label: "Billing",
      icon: CreditCard,
      href: "/billing",
      active: pathname === "/billing",
    },
  ]

  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 w-[220px] border-r border-blue-100 dark:border-slate-700">
      <div className="flex h-14 items-center border-b border-blue-100 dark:border-slate-700 px-3">
        <Link href="/" className="flex items-center gap-2 font-semibold text-blue-700 dark:text-blue-400">
          <BarChart3 className="h-5 w-5" />
          <span className="text-sm">Social Tracker</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2 scrollbar-thin">
        <nav className="grid items-start px-2 gap-0.5">
          {mainRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium transition-all",
                route.active
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                  : "text-slate-600 hover:bg-blue-50 dark:text-slate-300 dark:hover:bg-slate-800/60",
              )}
            >
              <route.icon className="h-3.5 w-3.5" />
              {route.label}
            </Link>
          ))}

          <Separator className="my-2 bg-blue-100 dark:bg-slate-700" />

          {settingsRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium transition-all",
                route.active
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                  : "text-slate-600 hover:bg-blue-50 dark:text-slate-300 dark:hover:bg-slate-800/60",
              )}
            >
              <route.icon className="h-3.5 w-3.5" />
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-2 border-t border-blue-100 dark:border-slate-700">
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start gap-2 text-xs h-8 bg-white/80 border-blue-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-blue-300"
          onClick={handleLogout}
        >
          <LogOut className="h-3.5 w-3.5" />
          Log out
        </Button>
      </div>
    </div>
  )
}
