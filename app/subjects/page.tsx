"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Facebook, Instagram, Linkedin, Plus, TwitterIcon as TikTok, Trash2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuthCheck } from "@/utils/auth"
import { getUserAvatar } from "@/utils/avatar"

export default function SubjectsPage() {
  useAuthCheck() // This will redirect to login if not authenticated

  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const subjects = [
    {
      id: 1,
      name: "John Doe",
      platforms: [
        { name: "Instagram", url: "https://instagram.com/johndoe" },
        { name: "Facebook", url: "https://facebook.com/johndoe" },
        { name: "TikTok", url: "https://tiktok.com/@johndoe" },
      ],
      activity: "High",
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "Jane Smith",
      platforms: [
        { name: "Facebook", url: "https://facebook.com/janesmith" },
        { name: "LinkedIn", url: "https://linkedin.com/in/janesmith" },
      ],
      activity: "Medium",
      lastActive: "1 day ago",
    },
    {
      id: 3,
      name: "Alex Johnson",
      platforms: [
        { name: "LinkedIn", url: "https://linkedin.com/in/alexjohnson" },
        { name: "Instagram", url: "https://instagram.com/alexjohnson" },
      ],
      activity: "Low",
      lastActive: "3 days ago",
    },
    {
      id: 4,
      name: "Sarah Williams",
      platforms: [
        { name: "TikTok", url: "https://tiktok.com/@sarahwilliams" },
        { name: "Instagram", url: "https://instagram.com/sarahwilliams" },
        { name: "Facebook", url: "https://facebook.com/sarahwilliams" },
      ],
      activity: "High",
      lastActive: "5 hours ago",
    },
  ]

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Instagram":
        return <Instagram className="h-4 w-4" />
      case "Facebook":
        return <Facebook className="h-4 w-4" />
      case "LinkedIn":
        return <Linkedin className="h-4 w-4" />
      case "TikTok":
        return <TikTok className="h-4 w-4" />
      default:
        return null
    }
  }

  const getActivityColor = (activity: string) => {
    switch (activity) {
      case "High":
        return "bg-green-500"
      case "Medium":
        return "bg-yellow-500"
      case "Low":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1">
        <DashboardHeader />
        <div className="p-3 md:p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Subjects</h2>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Subject
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Subject</DialogTitle>
                  <DialogDescription>Enter the details of the subject you want to track.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter subject name" />
                  </div>
                  <div className="grid gap-2">
                    <Label>Platforms</Label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select platform" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="instagram">Instagram</SelectItem>
                            <SelectItem value="facebook">Facebook</SelectItem>
                            <SelectItem value="linkedin">LinkedIn</SelectItem>
                            <SelectItem value="tiktok">TikTok</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input placeholder="Profile URL" className="flex-1" />
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Platform
                      </Button>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsDialogOpen(false)}>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Tabs defaultValue="all" className="space-y-3">
            <TabsList className="bg-blue-50/50 dark:bg-slate-800/50">
              <TabsTrigger value="all" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800">
                All Subjects
              </TabsTrigger>
              <TabsTrigger
                value="instagram"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
              >
                Instagram
              </TabsTrigger>
              <TabsTrigger
                value="facebook"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
              >
                Facebook
              </TabsTrigger>
              <TabsTrigger
                value="linkedin"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
              >
                LinkedIn
              </TabsTrigger>
              <TabsTrigger
                value="tiktok"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
              >
                TikTok
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {subjects.map((subject) => (
                  <Card key={subject.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardHeader className="pb-1 pt-3 px-3">
                      <div className="flex items-center gap-2">
                        <Avatar className="border shadow-sm">
                          <AvatarImage
                            src={getUserAvatar(subject.name, "avataaars", 40) || "/placeholder.svg"}
                            alt={subject.name}
                          />
                          <AvatarFallback>{subject.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{subject.name}</CardTitle>
                          <div className="flex items-center gap-1 mt-1">
                            <div className={`h-2 w-2 rounded-full ${getActivityColor(subject.activity)}`} />
                            <CardDescription>{subject.activity} activity</CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-3">
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">Platforms:</div>
                        <div className="flex flex-wrap gap-2">
                          {subject.platforms.map((platform) => (
                            <Badge key={platform.name} variant="secondary" className="flex items-center gap-1">
                              {getPlatformIcon(platform.name)}
                              {platform.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-3 py-2 flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">Last active: {subject.lastActive}</div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="instagram" className="space-y-4">
              <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {subjects
                  .filter((subject) => subject.platforms.some((p) => p.name === "Instagram"))
                  .map((subject) => (
                    <Card key={subject.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <CardHeader className="pb-1 pt-3 px-3">
                        <div className="flex items-center gap-2">
                          <Avatar className="border shadow-sm">
                            <AvatarImage
                              src={getUserAvatar(subject.name, "avataaars", 40) || "/placeholder.svg"}
                              alt={subject.name}
                            />
                            <AvatarFallback>{subject.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{subject.name}</CardTitle>
                            <div className="flex items-center gap-1 mt-1">
                              <div className={`h-2 w-2 rounded-full ${getActivityColor(subject.activity)}`} />
                              <CardDescription>{subject.activity} activity</CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-3">
                        <div className="space-y-2">
                          <div className="text-sm text-muted-foreground">Instagram Profile:</div>
                          <div className="text-sm">{subject.platforms.find((p) => p.name === "Instagram")?.url}</div>
                        </div>
                      </CardContent>
                      <CardFooter className="px-3 py-2 flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">Last active: {subject.lastActive}</div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="facebook" className="space-y-4">
              <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {subjects
                  .filter((subject) => subject.platforms.some((p) => p.name === "Facebook"))
                  .map((subject) => (
                    <Card key={subject.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <CardHeader className="pb-1 pt-3 px-3">
                        <div className="flex items-center gap-2">
                          <Avatar className="border shadow-sm">
                            <AvatarImage
                              src={getUserAvatar(subject.name, "avataaars", 40) || "/placeholder.svg"}
                              alt={subject.name}
                            />
                            <AvatarFallback>{subject.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{subject.name}</CardTitle>
                            <div className="flex items-center gap-1 mt-1">
                              <div className={`h-2 w-2 rounded-full ${getActivityColor(subject.activity)}`} />
                              <CardDescription>{subject.activity} activity</CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-3">
                        <div className="space-y-2">
                          <div className="text-sm text-muted-foreground">Facebook Profile:</div>
                          <div className="text-sm">{subject.platforms.find((p) => p.name === "Facebook")?.url}</div>
                        </div>
                      </CardContent>
                      <CardFooter className="px-3 py-2 flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">Last active: {subject.lastActive}</div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="linkedin" className="space-y-4">
              <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {subjects
                  .filter((subject) => subject.platforms.some((p) => p.name === "LinkedIn"))
                  .map((subject) => (
                    <Card key={subject.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <CardHeader className="pb-1 pt-3 px-3">
                        <div className="flex items-center gap-2">
                          <Avatar className="border shadow-sm">
                            <AvatarImage
                              src={getUserAvatar(subject.name, "avataaars", 40) || "/placeholder.svg"}
                              alt={subject.name}
                            />
                            <AvatarFallback>{subject.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{subject.name}</CardTitle>
                            <div className="flex items-center gap-1 mt-1">
                              <div className={`h-2 w-2 rounded-full ${getActivityColor(subject.activity)}`} />
                              <CardDescription>{subject.activity} activity</CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-3">
                        <div className="space-y-2">
                          <div className="text-sm text-muted-foreground">LinkedIn Profile:</div>
                          <div className="text-sm">{subject.platforms.find((p) => p.name === "LinkedIn")?.url}</div>
                        </div>
                      </CardContent>
                      <CardFooter className="px-3 py-2 flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">Last active: {subject.lastActive}</div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="tiktok" className="space-y-4">
              <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {subjects
                  .filter((subject) => subject.platforms.some((p) => p.name === "TikTok"))
                  .map((subject) => (
                    <Card key={subject.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <CardHeader className="pb-1 pt-3 px-3">
                        <div className="flex items-center gap-2">
                          <Avatar className="border shadow-sm">
                            <AvatarImage
                              src={getUserAvatar(subject.name, "avataaars", 40) || "/placeholder.svg"}
                              alt={subject.name}
                            />
                            <AvatarFallback>{subject.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{subject.name}</CardTitle>
                            <div className="flex items-center gap-1 mt-1">
                              <div className={`h-2 w-2 rounded-full ${getActivityColor(subject.activity)}`} />
                              <CardDescription>{subject.activity} activity</CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-3">
                        <div className="space-y-2">
                          <div className="text-sm text-muted-foreground">TikTok Profile:</div>
                          <div className="text-sm">{subject.platforms.find((p) => p.name === "TikTok")?.url}</div>
                        </div>
                      </CardContent>
                      <CardFooter className="px-3 py-2 flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">Last active: {subject.lastActive}</div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
