"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Settings,
  Users,
  LogOut,
  CreditCard,
  User,
  HelpCircle,
  MessageSquare,
  History,
  Video,
  ChevronDown,
  ChevronRight,
  Home,
  Menu,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)
  const [isSettingsOpen, setIsSettingsOpen] = useState(pathname?.includes("/settings"))

  useEffect(() => {
    setIsSettingsOpen(pathname?.includes("/settings"))
  }, [pathname])

  const handleLogout = () => {
    // Implement logout functionality
    router.push("/auth/login")
  }

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden fixed left-4 top-4 z-40">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72">
          <MobileSidebar pathname={pathname} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "hidden md:flex flex-col bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 border-r border-blue-100 dark:border-slate-700 h-screen sticky top-0 transition-all duration-300 ease-in-out",
          isOpen ? "w-64" : "w-20",
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-blue-100 dark:border-slate-700">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-2">
              S
            </div>
            {isOpen && <span className="font-bold text-lg">Social Tracker</span>}
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-muted-foreground">
            {isOpen ? <ChevronRight className="h-5 w-5" /> : <ChevronRight className="h-5 w-5 rotate-180" />}
          </Button>
        </div>
        <ScrollArea className="flex-1 py-2">
          <div className="px-3 py-2">
            {isOpen && <div className="text-xs font-semibold text-muted-foreground mb-2 px-2">DASHBOARD</div>}
            <nav className="space-y-1">
              <NavItem
                href="/dashboard"
                icon={Home}
                label="Dashboard"
                isActive={pathname === "/dashboard"}
                isOpen={isOpen}
              />
              <NavItem
                href="/subjects"
                icon={Users}
                label="Subjects"
                isActive={pathname === "/subjects"}
                isOpen={isOpen}
              />
              <NavItem
                href="/history"
                icon={History}
                label="History"
                isActive={pathname === "/history"}
                isOpen={isOpen}
              />
              <NavItem href="/videos" icon={Video} label="Videos" isActive={pathname === "/videos"} isOpen={isOpen} />
              <NavItem
                href="/chatbot"
                icon={MessageSquare}
                label="Chatbot"
                isActive={pathname === "/chatbot"}
                isOpen={isOpen}
              />
            </nav>

            {isOpen && <div className="text-xs font-semibold text-muted-foreground mt-6 mb-2 px-2">ACCOUNT</div>}
            <nav className="space-y-1 mt-6">
              <Collapsible
                open={isSettingsOpen}
                onOpenChange={setIsSettingsOpen}
                className={cn(
                  "rounded-md overflow-hidden",
                  pathname?.includes("/settings") && "bg-blue-100/50 dark:bg-slate-800/50",
                )}
              >
                <CollapsibleTrigger asChild>
                  <button
                    className={cn(
                      "flex items-center w-full px-3 py-2 text-sm rounded-md hover:bg-blue-100/50 dark:hover:bg-slate-800/50 transition-colors",
                      pathname?.includes("/settings") && "text-blue-600 dark:text-blue-400 font-medium",
                    )}
                  >
                    <Settings className="h-5 w-5 mr-2 shrink-0" />
                    {isOpen && (
                      <>
                        <span>Settings</span>
                        <ChevronDown className="h-4 w-4 ml-auto" />
                      </>
                    )}
                  </button>
                </CollapsibleTrigger>
                {isOpen && (
                  <CollapsibleContent className="pl-10 space-y-1 pt-1">
                    <NavItem
                      href="/settings"
                      label="General"
                      isActive={pathname === "/settings" || pathname === "/settings/general"}
                      isOpen={isOpen}
                      isSubmenu
                    />
                    <NavItem
                      href="/settings/security"
                      label="Security"
                      isActive={pathname === "/settings/security"}
                      isOpen={isOpen}
                      isSubmenu
                    />
                    <NavItem
                      href="/settings/api"
                      label="API"
                      isActive={pathname === "/settings/api"}
                      isOpen={isOpen}
                      isSubmenu
                    />
                  </CollapsibleContent>
                )}
              </Collapsible>

              <NavItem href="/account" icon={User} label="Account" isActive={pathname === "/account"} isOpen={isOpen} />
              <NavItem
                href="/billing"
                icon={CreditCard}
                label="Billing"
                isActive={pathname === "/billing"}
                isOpen={isOpen}
              />
              <NavItem
                href="/support"
                icon={HelpCircle}
                label="Support"
                isActive={pathname === "/support"}
                isOpen={isOpen}
              />
            </nav>
          </div>
        </ScrollArea>
        <div
          className={cn(
            "border-t border-blue-100 dark:border-slate-700 p-4",
            isOpen ? "flex items-center justify-between" : "flex flex-col items-center",
          )}
        >
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            {isOpen && (
              <div className="ml-2">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">john@example.com</p>
              </div>
            )}
          </div>
          {isOpen ? (
            <Button variant="ghost" size="icon" className="text-muted-foreground" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
            </Button>
          ) : (
            <Button variant="ghost" size="icon" className="text-muted-foreground mt-2" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </>
  )
}

function MobileSidebar({ pathname }: { pathname?: string }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(pathname?.includes("/settings"))
  const router = useRouter()

  const handleLogout = () => {
    // Implement logout functionality
    router.push("/auth/login")
  }

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="flex items-center justify-between h-16 px-4 border-b border-blue-100 dark:border-slate-700">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-2">
            S
          </div>
          <span className="font-bold text-lg">Social Tracker</span>
        </div>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </SheetTrigger>
      </div>
      <ScrollArea className="flex-1 py-2">
        <div className="px-3 py-2">
          <div className="text-xs font-semibold text-muted-foreground mb-2 px-2">DASHBOARD</div>
          <nav className="space-y-1">
            <NavItem
              href="/dashboard"
              icon={Home}
              label="Dashboard"
              isActive={pathname === "/dashboard"}
              isOpen={true}
            />
            <NavItem href="/subjects" icon={Users} label="Subjects" isActive={pathname === "/subjects"} isOpen={true} />
            <NavItem href="/history" icon={History} label="History" isActive={pathname === "/history"} isOpen={true} />
            <NavItem href="/videos" icon={Video} label="Videos" isActive={pathname === "/videos"} isOpen={true} />
            <NavItem
              href="/chatbot"
              icon={MessageSquare}
              label="Chatbot"
              isActive={pathname === "/chatbot"}
              isOpen={true}
            />
          </nav>

          <div className="text-xs font-semibold text-muted-foreground mt-6 mb-2 px-2">ACCOUNT</div>
          <nav className="space-y-1">
            <Collapsible
              open={isSettingsOpen}
              onOpenChange={setIsSettingsOpen}
              className={cn(
                "rounded-md overflow-hidden",
                pathname?.includes("/settings") && "bg-blue-100/50 dark:bg-slate-800/50",
              )}
            >
              <CollapsibleTrigger asChild>
                <button
                  className={cn(
                    "flex items-center w-full px-3 py-2 text-sm rounded-md hover:bg-blue-100/50 dark:hover:bg-slate-800/50 transition-colors",
                    pathname?.includes("/settings") && "text-blue-600 dark:text-blue-400 font-medium",
                  )}
                >
                  <Settings className="h-5 w-5 mr-2" />
                  <span>Settings</span>
                  <ChevronDown className="h-4 w-4 ml-auto" />
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-10 space-y-1 pt-1">
                <NavItem
                  href="/settings"
                  label="General"
                  isActive={pathname === "/settings" || pathname === "/settings/general"}
                  isOpen={true}
                  isSubmenu
                />
                <NavItem
                  href="/settings/security"
                  label="Security"
                  isActive={pathname === "/settings/security"}
                  isOpen={true}
                  isSubmenu
                />
                <NavItem
                  href="/settings/api"
                  label="API"
                  isActive={pathname === "/settings/api"}
                  isOpen={true}
                  isSubmenu
                />
              </CollapsibleContent>
            </Collapsible>

            <NavItem href="/account" icon={User} label="Account" isActive={pathname === "/account"} isOpen={true} />
            <NavItem
              href="/billing"
              icon={CreditCard}
              label="Billing"
              isActive={pathname === "/billing"}
              isOpen={true}
            />
            <NavItem
              href="/support"
              icon={HelpCircle}
              label="Support"
              isActive={pathname === "/support"}
              isOpen={true}
            />
          </nav>
        </div>
      </ScrollArea>
      <div className="border-t border-blue-100 dark:border-slate-700 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="ml-2">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">john@example.com</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground" onClick={handleLogout}>
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

interface NavItemProps {
  href: string
  icon?: React.ComponentType<{ className?: string }>
  label: string
  isActive?: boolean
  isOpen: boolean
  isSubmenu?: boolean
}

function NavItem({ href, icon: Icon, label, isActive, isOpen, isSubmenu }: NavItemProps) {
  if (!isOpen && isSubmenu) return null

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center px-3 py-2 text-sm rounded-md hover:bg-blue-100/50 dark:hover:bg-slate-800/50 transition-colors",
        isActive && "bg-blue-100/50 dark:bg-slate-800/50 text-blue-600 dark:text-blue-400 font-medium",
        !isOpen && "justify-center",
        isSubmenu && "py-1.5",
      )}
    >
      {Icon && <Icon className={cn("h-5 w-5", isOpen && "mr-2", isActive && "text-blue-600 dark:text-blue-400")} />}
      {isOpen && <span>{label}</span>}
    </Link>
  )
}
