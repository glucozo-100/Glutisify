"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Eye, Heart, MessageSquare, Play, Share2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuthCheck } from "@/utils/auth"

export default function VideosPage() {
  useAuthCheck() // This will redirect to login if not authenticated

  const [filter, setFilter] = useState("all")

  const videos = [
    {
      id: 1,
      title: "Summer vacation highlights",
      subject: "John Doe",
      platform: "TikTok",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "0:45",
      date: "2023-07-15",
      views: 12500,
      likes: 2300,
      comments: 156,
      shares: 78,
      saved: true,
    },
    {
      id: 2,
      title: "Product review: New smartphone",
      subject: "Jane Smith",
      platform: "Instagram",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "1:20",
      date: "2023-07-12",
      views: 8700,
      likes: 1200,
      comments: 89,
      shares: 45,
      saved: true,
    },
    {
      id: 3,
      title: "How to make pasta carbonara",
      subject: "Alex Johnson",
      platform: "Facebook",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "5:30",
      date: "2023-07-10",
      views: 15600,
      likes: 3400,
      comments: 210,
      shares: 125,
      saved: false,
    },
    {
      id: 4,
      title: "Morning workout routine",
      subject: "Sarah Williams",
      platform: "TikTok",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "0:58",
      date: "2023-07-08",
      views: 9800,
      likes: 1800,
      comments: 95,
      shares: 62,
      saved: true,
    },
    {
      id: 5,
      title: "Travel vlog: Paris edition",
      subject: "John Doe",
      platform: "Instagram",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "3:45",
      date: "2023-07-05",
      views: 18900,
      likes: 4200,
      comments: 278,
      shares: 156,
      saved: false,
    },
    {
      id: 6,
      title: "Tech tips for beginners",
      subject: "Jane Smith",
      platform: "Facebook",
      thumbnail: "/placeholder.svg?height=180&width=320",
      duration: "4:12",
      date: "2023-07-03",
      views: 7600,
      likes: 980,
      comments: 67,
      shares: 34,
      saved: true,
    },
  ]

  const filteredVideos =
    filter === "all"
      ? videos
      : filter === "saved"
        ? videos.filter((video) => video.saved)
        : videos.filter((video) => video.platform.toLowerCase() === filter)

  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1">
        <DashboardHeader />
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold">Videos</h2>
              <p className="text-muted-foreground">Manage and view videos from tracked subjects</p>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Filter videos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Videos</SelectItem>
                  <SelectItem value="saved">Saved Only</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Search videos..." className="w-full md:w-auto" />
            </div>
          </div>

          <Tabs defaultValue="grid" className="space-y-4">
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="grid">Grid View</TabsTrigger>
                <TabsTrigger value="list">List View</TabsTrigger>
              </TabsList>
              <div className="text-sm text-muted-foreground">{filteredVideos.length} videos</div>
            </div>

            <TabsContent value="grid" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredVideos.map((video) => (
                  <Card key={video.id} className="overflow-hidden">
                    <div className="relative">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-[180px] object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button
                          variant="secondary"
                          size="icon"
                          className="rounded-full bg-background/80 hover:bg-background"
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded text-xs font-medium flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {video.duration}
                      </div>
                      <Badge className="absolute top-2 left-2" variant="secondary">
                        {video.platform}
                      </Badge>
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base line-clamp-1">{video.title}</CardTitle>
                      </div>
                      <CardDescription className="flex items-center gap-1">
                        <Avatar className="h-4 w-4">
                          <AvatarFallback>{video.subject[0]}</AvatarFallback>
                        </Avatar>
                        {video.subject}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex items-center text-xs text-muted-foreground gap-2">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(video.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {video.views.toLocaleString()}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between">
                      <div className="flex items-center gap-3 text-xs">
                        <div className="flex items-center">
                          <Heart className="h-3 w-3 mr-1" />
                          {video.likes.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          {video.comments.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <Share2 className="h-3 w-3 mr-1" />
                          {video.shares.toLocaleString()}
                        </div>
                      </div>
                      <Button variant={video.saved ? "default" : "outline"} size="sm">
                        {video.saved ? "Saved" : "Save"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="list" className="space-y-4">
              <div className="rounded-md border">
                <div className="grid grid-cols-12 p-4 bg-muted/50 font-medium text-sm">
                  <div className="col-span-5">Video</div>
                  <div className="col-span-2">Platform</div>
                  <div className="col-span-2">Date</div>
                  <div className="col-span-2">Stats</div>
                  <div className="col-span-1"></div>
                </div>
                {filteredVideos.map((video) => (
                  <div key={video.id} className="grid grid-cols-12 p-4 border-t items-center">
                    <div className="col-span-5 flex items-center gap-3">
                      <div className="relative w-20 h-12 flex-shrink-0">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-full h-full object-cover rounded"
                        />
                        <div className="absolute bottom-1 right-1 bg-background/80 px-1 rounded text-[10px]">
                          {video.duration}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium line-clamp-1">{video.title}</div>
                        <div className="text-xs text-muted-foreground">{video.subject}</div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <Badge variant="outline">{video.platform}</Badge>
                    </div>
                    <div className="col-span-2 text-sm">{new Date(video.date).toLocaleDateString()}</div>
                    <div className="col-span-2 text-sm flex items-center gap-3">
                      <div className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {video.views.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-3 w-3 mr-1" />
                        {video.likes.toLocaleString()}
                      </div>
                    </div>
                    <div className="col-span-1 flex justify-end">
                      <Button variant={video.saved ? "default" : "outline"} size="sm">
                        {video.saved ? "Saved" : "Save"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
