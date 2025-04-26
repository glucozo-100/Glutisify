"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  CreditCard,
  Home,
  MessageSquare,
  Settings,
  User,
  Users,
  History,
  Video,
  LogOut,
  HelpCircle,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarSeparator,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { logout } from "@/utils/auth"

export function AppSidebar() {
  const pathname = usePathname()

  const mainMenuItems = [
    {
      title: "Home",
      icon: Home,
      href: "/",
    },
    {
      title: "Dashboard",
      icon: BarChart3,
      href: "/dashboard",
    },
    {
      title: "Subjects",
      icon: Users,
      href: "/subjects",
    },
    {
      title: "History",
      icon: History,
      href: "/history",
    },
    {
      title: "Videos",
      icon: Video,
      href: "/videos",
    },
    {
      title: "Chatbot",
      icon: MessageSquare,
      href: "/chatbot",
    },
  ]

  const accountMenuItems = [
    {
      title: "Settings",
      icon: Settings,
      href: "/settings",
    },
    {
      title: "Account",
      icon: User,
      href: "/account",
    },
    {
      title: "Billing",
      icon: CreditCard,
      href: "/billing",
    },
    {
      title: "Help & Support",
      icon: HelpCircle,
      href: "/support",
    },
  ]

  return (
    <>
      <Sidebar>
        <SidebarHeader className="flex items-center px-4 py-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-full bg-primary w-8 h-8 flex items-center justify-center text-primary-foreground font-bold">
              SM
            </div>
            <span className="font-bold text-xl">SocialTrack</span>
          </Link>
          <div className="ml-auto md:hidden">
            <SidebarTrigger />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarSeparator />

          <SidebarGroup>
            <SidebarGroupLabel>Account</SidebarGroupLabel>
            <SidebarMenu>
              {accountMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarSeparator />
        <SidebarFooter className="p-4">
          <Button variant="outline" className="w-full justify-start gap-2" onClick={logout}>
            <LogOut className="h-4 w-4" />
            <span>Log out</span>
          </Button>
        </SidebarFooter>
      </Sidebar>
    </>
  )
}
