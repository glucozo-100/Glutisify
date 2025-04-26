"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePickerWithRange } from "@/components/date-range-picker"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import {
  Bookmark,
  Calendar,
  Download,
  Facebook,
  Filter,
  Heart,
  Instagram,
  Linkedin,
  MessageSquare,
  MoreHorizontal,
  RefreshCw,
  Share2,
  ThumbsUp,
  TwitterIcon as TikTok,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"

// Add the import at the top of the file
import { useAuthCheck } from "@/utils/auth"

// Add the auth check at the beginning of the component
export default function HistoryPage() {
  useAuthCheck() // This will redirect to login if not authenticated

  const [selectedSubject, setSelectedSubject] = useState("all")
  const [selectedPlatform, setSelectedPlatform] = useState("all")
  const [dateRange, setDateRange] = useState({ from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), to: new Date() })
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState("all")

  const subjects = [
    { value: "all", label: "All Subjects" },
    { value: "john-doe", label: "John Doe" },
    { value: "jane-smith", label: "Jane Smith" },
    { value: "alex-johnson", label: "Alex Johnson" },
    { value: "sarah-williams", label: "Sarah Williams" },
  ]

  const platforms = [
    { value: "all", label: "All Platforms" },
    { value: "instagram", label: "Instagram" },
    { value: "facebook", label: "Facebook" },
    { value: "tiktok", label: "TikTok" },
    { value: "linkedin", label: "LinkedIn" },
  ]

  // Sample history data
  const historyData = [
    {
      id: 1,
      subject: "John Doe",
      subjectHandle: "@johndoe",
      platform: "facebook",
      content:
        "Just launched our new product! After months of hard work, I'm excited to share our latest innovation with the world. Check it out at our website and let me know what you think! #newproduct #innovation #technology",
      date: "2023-07-15T14:30:00",
      media: ["/placeholder.svg?height=400&width=600"],
      likes: 1245,
      comments: 89,
      shares: 56,
      saved: true,
      hasVideo: false,
    },
    {
      id: 2,
      subject: "Jane Smith",
      subjectHandle: "@janesmith",
      platform: "instagram",
      content:
        "Beautiful sunset at the beach today. Nothing beats the colors of nature! #sunset #beach #naturephotography",
      date: "2023-07-14T18:45:00",
      media: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      likes: 3782,
      comments: 142,
      shares: 78,
      saved: false,
      hasVideo: false,
    },
    {
      id: 3,
      subject: "Alex Johnson",
      subjectHandle: "@alexjohnson",
      platform: "linkedin",
      content:
        "Excited to announce that I've joined XYZ Corp as Senior Product Manager! Looking forward to working with an amazing team and building great products. #newjob #career #productmanagement",
      date: "2023-07-13T09:15:00",
      media: [],
      likes: 528,
      comments: 67,
      shares: 12,
      saved: true,
      hasVideo: false,
    },
    {
      id: 4,
      subject: "Sarah Williams",
      subjectHandle: "@sarahwilliams",
      platform: "tiktok",
      content: "Check out my new dance routine! #dance #viral #trending",
      date: "2023-07-12T20:30:00",
      media: ["/placeholder.svg?height=400&width=600"],
      likes: 15243,
      comments: 1893,
      shares: 4521,
      saved: true,
      hasVideo: true,
    },
    {
      id: 5,
      subject: "John Doe",
      subjectHandle: "@johndoe",
      platform: "instagram",
      content:
        "Behind the scenes at our product photoshoot. Can't wait to show you what we've been working on! #behindthescenes #comingsoon",
      date: "2023-07-11T11:20:00",
      media: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
      likes: 2156,
      comments: 98,
      shares: 34,
      saved: false,
      hasVideo: false,
    },
    {
      id: 6,
      subject: "Jane Smith",
      subjectHandle: "@janesmith",
      platform: "facebook",
      content:
        "Just finished reading this amazing book. Highly recommend it to anyone interested in personal development! #reading #books #personalgrowth",
      date: "2023-07-10T16:45:00",
      media: ["/placeholder.svg?height=400&width=600"],
      likes: 876,
      comments: 54,
      shares: 23,
      saved: true,
      hasVideo: false,
    },
    {
      id: 7,
      subject: "Sarah Williams",
      subjectHandle: "@sarahwilliams",
      platform: "linkedin",
      content:
        "Just published my new article on the future of remote work. Check it out and let me know your thoughts! #remotework #futureofwork #worklifebalance",
      date: "2023-07-09T13:10:00",
      media: [],
      likes: 412,
      comments: 38,
      shares: 19,
      saved: false,
      hasVideo: false,
    },
  ]

  // Filter history data based on selected filters
  const filteredHistory = historyData.filter((item) => {
    // Filter by subject
    if (selectedSubject !== "all" && selectedSubject !== item.subject.toLowerCase().replace(" ", "-")) {
      return false
    }

    // Filter by platform
    if (selectedPlatform !== "all" && selectedPlatform !== item.platform) {
      return false
    }

    // Filter by date range
    const postDate = new Date(item.date)
    if (
      (dateRange.from && postDate < dateRange.from) ||
      (dateRange.to && postDate > new Date(dateRange.to.getTime() + 24 * 60 * 60 * 1000))
    ) {
      return false
    }

    // Filter by search query
    if (
      searchQuery &&
      !item.content.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.subject.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Filter by view mode
    if (viewMode === "saved" && !item.saved) {
      return false
    }

    return true
  })

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram className="h-4 w-4" />
      case "facebook":
        return <Facebook className="h-4 w-4" />
      case "linkedin":
        return <Linkedin className="h-4 w-4" />
      case "tiktok":
        return <TikTok className="h-4 w-4" />
      default:
        return null
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    } else {
      return num.toString()
    }
  }

  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1">
        <DashboardHeader />
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold">History</h2>
              <p className="text-muted-foreground">Track and analyze posts from monitored subjects</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject.value} value={subject.value}>
                      {subject.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  {platforms.map((platform) => (
                    <SelectItem key={platform.value} value={platform.value}>
                      {platform.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <DatePickerWithRange date={dateRange} setDate={setDateRange} />
              <Button variant="outline" size="icon">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="relative w-full md:w-80">
              <Input
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex items-center gap-4">
              <Tabs value={viewMode} onValueChange={setViewMode} className="w-full md:w-auto">
                <TabsList>
                  <TabsTrigger value="all">All Posts</TabsTrigger>
                  <TabsTrigger value="saved">Saved Only</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {filteredHistory.length > 0 ? (
              filteredHistory.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                            <AvatarFallback>{post.subject[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{post.subject}</h3>
                              <span className="text-sm text-muted-foreground">{post.subjectHandle}</span>
                              <Badge variant="outline" className="flex items-center gap-1 ml-1">
                                {getPlatformIcon(post.platform)}
                                {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              <span>{formatDate(post.date)}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className={post.saved ? "text-primary" : "text-muted-foreground"}
                          >
                            <Bookmark className="h-4 w-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Original Post</DropdownMenuItem>
                              <DropdownMenuItem>Add to Collection</DropdownMenuItem>
                              <DropdownMenuItem>Generate Report</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Hide Post</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="whitespace-pre-line">{post.content}</p>
                      </div>
                    </div>

                    {post.media.length > 0 && (
                      <div
                        className={`grid gap-1 ${
                          post.media.length === 1
                            ? "grid-cols-1"
                            : post.media.length === 2
                              ? "grid-cols-2"
                              : "grid-cols-3"
                        }`}
                      >
                        {post.media.map((media, index) => (
                          <div key={index} className="relative">
                            <img
                              src={media || "/placeholder.svg"}
                              alt={`Post media ${index + 1}`}
                              className="w-full h-auto max-h-[400px] object-cover"
                            />
                            {post.hasVideo && index === 0 && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-black/50 rounded-full p-3">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-white"
                                  >
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                  </svg>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="p-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{formatNumber(post.likes)} likes</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span>{formatNumber(post.comments)} comments</span>
                          <span>{formatNumber(post.shares)} shares</span>
                        </div>
                      </div>

                      <Separator className="my-2" />

                      <div className="flex justify-between mt-2">
                        <div className="flex items-center gap-6">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Heart className="h-4 w-4" />
                            <span>Like</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <MessageSquare className="h-4 w-4" />
                            <span>Comment</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Share2 className="h-4 w-4" />
                            <span>Share</span>
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Bookmark className="h-4 w-4" />
                          <span>{post.saved ? "Saved" : "Save"}</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-12 border rounded-lg">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-muted mb-4">
                  <Filter className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium">No posts found</h3>
                <p className="text-muted-foreground mt-1">Try adjusting your filters or search criteria</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedSubject("all")
                    setSelectedPlatform("all")
                    setSearchQuery("")
                    setViewMode("all")
                    setDateRange({ from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), to: new Date() })
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>

          {filteredHistory.length > 0 && (
            <div className="mt-6 flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          )}

          <div className="mt-8 p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-medium">Quick Filters</h3>
              <Badge variant="outline" className="ml-auto">
                {filteredHistory.length} posts
              </Badge>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="has-media" />
                <label
                  htmlFor="has-media"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Has Media
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="has-video" />
                <label
                  htmlFor="has-video"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Has Video
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="high-engagement" />
                <label
                  htmlFor="high-engagement"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  High Engagement
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="this-week" />
                <label
                  htmlFor="this-week"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  This Week
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="this-month" />
                <label
                  htmlFor="this-month"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  This Month
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
