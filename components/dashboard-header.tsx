"use client"
import { Bell, Moon, Search, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useTheme } from "@/components/theme-provider"
import { Badge } from "@/components/ui/badge"
import { getUserAvatar } from "@/utils/avatar"

export function DashboardHeader() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur-sm px-4 md:px-6 shadow-sm">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <div className="flex-1">
        <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">
          Dashboard
        </h1>
      </div>
      <div className="hidden md:flex md:flex-1 md:items-center md:gap-4 md:justify-end">
        <form className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-64 pl-10 h-10 bg-background border-blue-100 dark:border-slate-700 rounded-full focus-visible:ring-blue-500"
          />
        </form>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full h-10 w-10 bg-blue-50 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {theme === "dark" ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-blue-700" />}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-10 w-10 bg-blue-50 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700 relative"
          >
            <Bell className="h-5 w-5 text-blue-700 dark:text-blue-400" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-blue-600 hover:bg-blue-700">
              3
            </Badge>
            <span className="sr-only">Notifications</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Notifications</p>
              <p className="text-xs leading-none text-muted-foreground">You have 3 unread messages</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="max-h-80 overflow-auto">
            {[
              { id: 1, name: "John Smith", message: "New activity from Subject #1", time: "2 hours ago" },
              { id: 2, name: "Sarah Johnson", message: "New activity from Subject #2", time: "3 hours ago" },
              { id: 3, name: "Michael Brown", message: "New activity from Subject #3", time: "5 hours ago" },
            ].map((notification) => (
              <DropdownMenuItem key={notification.id} className="p-0">
                <div className="flex w-full items-center gap-2 p-2 cursor-pointer hover:bg-blue-50 dark:hover:bg-slate-800 rounded-md">
                  <Avatar className="h-10 w-10 border shadow-sm">
                    <AvatarImage
                      src={getUserAvatar(notification.name, "avataaars", 40) || "/placeholder.svg"}
                      alt={notification.name}
                    />
                    <AvatarFallback>{notification.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{notification.message}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                  <div className="flex h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
              </DropdownMenuItem>
            ))}
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer justify-center text-center font-medium text-blue-600 dark:text-blue-400">
            View all notifications
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
