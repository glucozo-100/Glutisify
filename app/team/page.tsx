"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Plus, Search, Mail, UserPlus, UserMinus, Edit, Trash2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getUserAvatar, getStatusColor } from "@/utils/avatar"
import { DashboardHeader } from "@/components/dashboard-header"
import { AppSidebar } from "@/components/app-sidebar"

// Mock team members data
const teamMembers = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "online",
    department: "Management",
    joinedDate: "Jan 10, 2022",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Editor",
    status: "offline",
    department: "Content",
    joinedDate: "Mar 15, 2022",
  },
  {
    id: "3",
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    role: "Viewer",
    status: "away",
    department: "Analytics",
    joinedDate: "May 5, 2022",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "Editor",
    status: "busy",
    department: "Design",
    joinedDate: "Jul 22, 2022",
  },
  {
    id: "5",
    name: "Michael Wilson",
    email: "michael.wilson@example.com",
    role: "Viewer",
    status: "online",
    department: "Marketing",
    joinedDate: "Sep 3, 2022",
  },
  {
    id: "6",
    name: "Sarah Brown",
    email: "sarah.brown@example.com",
    role: "Editor",
    status: "online",
    department: "Content",
    joinedDate: "Nov 18, 2022",
  },
  {
    id: "7",
    name: "David Miller",
    email: "david.miller@example.com",
    role: "Viewer",
    status: "offline",
    department: "Analytics",
    joinedDate: "Jan 7, 2023",
  },
  {
    id: "8",
    name: "Jennifer Taylor",
    email: "jennifer.taylor@example.com",
    role: "Admin",
    status: "online",
    department: "Management",
    joinedDate: "Mar 25, 2023",
  },
]

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [departmentFilter, setDepartmentFilter] = useState("all")

  // Filter team members based on search query and filters
  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesRole = roleFilter === "all" || member.role === roleFilter
    const matchesDepartment = departmentFilter === "all" || member.department === departmentFilter

    return matchesSearch && matchesRole && matchesDepartment
  })

  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <div className="flex-1">
        <DashboardHeader />
        <main className="p-4 md:p-6 max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 blur-3xl -z-10 rounded-3xl opacity-30"></div>
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100 dark:border-slate-700 p-6 md:p-8">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text mb-2">
                  Team Management
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                  Manage your team members, their roles, and permissions.
                </p>
              </div>
            </div>

            <Card className="border-blue-100 dark:border-slate-700 shadow-md">
              <CardHeader className="pb-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Team Members</CardTitle>
                    <CardDescription>You have {teamMembers.length} team members.</CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search members..."
                        className="pl-9 h-10 w-full sm:w-[200px] md:w-[260px]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-3">
                      <Select value={roleFilter} onValueChange={setRoleFilter}>
                        <SelectTrigger className="h-10 w-full sm:w-[130px]">
                          <SelectValue placeholder="Filter by role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Roles</SelectItem>
                          <SelectItem value="Admin">Admin</SelectItem>
                          <SelectItem value="Editor">Editor</SelectItem>
                          <SelectItem value="Viewer">Viewer</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                        <SelectTrigger className="h-10 w-full sm:w-[150px]">
                          <SelectValue placeholder="Filter by department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Departments</SelectItem>
                          <SelectItem value="Management">Management</SelectItem>
                          <SelectItem value="Content">Content</SelectItem>
                          <SelectItem value="Analytics">Analytics</SelectItem>
                          <SelectItem value="Design">Design</SelectItem>
                          <SelectItem value="Marketing">Marketing</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button className="h-10 gap-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        <Plus className="h-4 w-4" />
                        <span className="hidden sm:inline">Add Member</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border border-blue-100 dark:border-slate-700 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-blue-50 dark:bg-slate-800/50 border-b border-blue-100 dark:border-slate-700">
                          <th className="text-left py-3 px-4 font-medium text-sm">Name</th>
                          <th className="text-left py-3 px-4 font-medium text-sm">Role</th>
                          <th className="text-left py-3 px-4 font-medium text-sm hidden md:table-cell">Department</th>
                          <th className="text-left py-3 px-4 font-medium text-sm hidden lg:table-cell">Joined</th>
                          <th className="text-left py-3 px-4 font-medium text-sm">Status</th>
                          <th className="text-right py-3 px-4 font-medium text-sm">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-blue-100 dark:divide-slate-700">
                        {filteredMembers.map((member) => (
                          <tr
                            key={member.id}
                            className="bg-white dark:bg-slate-800 hover:bg-blue-50/50 dark:hover:bg-slate-700/50 transition-colors"
                          >
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-3">
                                <div className="relative">
                                  <Avatar className="h-10 w-10 border shadow-sm">
                                    <AvatarImage
                                      src={getUserAvatar(member.name, "avataaars", 40) || "/placeholder.svg"}
                                      alt={member.name}
                                    />
                                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <span
                                    className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-slate-800 ${getStatusColor(member.status)}`}
                                  ></span>
                                </div>
                                <div>
                                  <p className="font-medium">{member.name}</p>
                                  <p className="text-sm text-muted-foreground">{member.email}</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                  member.role === "Admin"
                                    ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                                    : member.role === "Editor"
                                      ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                                      : "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300"
                                }`}
                              >
                                {member.role}
                              </span>
                            </td>
                            <td className="py-3 px-4 hidden md:table-cell">
                              <span className="text-sm">{member.department}</span>
                            </td>
                            <td className="py-3 px-4 hidden lg:table-cell">
                              <span className="text-sm text-muted-foreground">{member.joinedDate}</span>
                            </td>
                            <td className="py-3 px-4">
                              <span
                                className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                                  member.status === "online"
                                    ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                                    : member.status === "offline"
                                      ? "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300"
                                      : member.status === "away"
                                        ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300"
                                        : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                                }`}
                              >
                                <span
                                  className={`inline-block w-2 h-2 rounded-full mr-1 ${getStatusColor(member.status)}`}
                                ></span>
                                {member.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Open menu</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>
                                    <Mail className="mr-2 h-4 w-4" />
                                    <span>Email</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    <span>Edit</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>
                                    <UserPlus className="mr-2 h-4 w-4" />
                                    <span>Change Role</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <UserMinus className="mr-2 h-4 w-4 text-amber-600 dark:text-amber-400" />
                                    <span className="text-amber-600 dark:text-amber-400">Suspend</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>
                                    <Trash2 className="mr-2 h-4 w-4 text-red-600 dark:text-red-400" />
                                    <span className="text-red-600 dark:text-red-400">Delete</span>
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {filteredMembers.length === 0 && (
                    <div className="py-12 text-center">
                      <p className="text-muted-foreground">No team members found matching your filters.</p>
                      <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => {
                          setSearchQuery("")
                          setRoleFilter("all")
                          setDepartmentFilter("all")
                        }}
                      >
                        Reset Filters
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
