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
      label: "Analytics",
      icon: BarChart3,
      href: "/analytics",
      active: pathname === "/analytics",
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
    <div className="flex h-full flex-col bg-muted/40 w-[250px] border-r">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BarChart3 className="h-6 w-6" />
          <span>Social Tracker</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2 scrollbar-thin">
        <nav className="grid items-start px-2 lg:px-4 gap-1">
          {mainRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted/80 transition-all",
                route.active ? "bg-muted/80 text-primary" : "text-muted-foreground",
              )}
            >
              <route.icon className="h-4 w-4" />
              {route.label}
            </Link>
          ))}

          <Separator className="my-4" />

          {settingsRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted/80 transition-all",
                route.active ? "bg-muted/80 text-primary" : "text-muted-foreground",
              )}
            >
              <route.icon className="h-4 w-4" />
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4 border-t">
        <Button variant="outline" className="w-full justify-start gap-2" onClick={handleLogout}>
          <LogOut className="h-4 w-4" />
          Log out
        </Button>
      </div>
    </div>
  )
}
