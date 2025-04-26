"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Facebook, Instagram, Linkedin, TwitterIcon as TikTok } from "lucide-react"

export function SubjectOverview() {
  const subjects = [
    {
      id: 1,
      name: "John Doe",
      platforms: ["Instagram", "Facebook", "TikTok"],
      activity: "High",
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "Jane Smith",
      platforms: ["Facebook", "LinkedIn"],
      activity: "Medium",
      lastActive: "1 day ago",
    },
    {
      id: 3,
      name: "Alex Johnson",
      platforms: ["LinkedIn", "Instagram"],
      activity: "Low",
      lastActive: "3 days ago",
    },
    {
      id: 4,
      name: "Sarah Williams",
      platforms: ["TikTok", "Instagram", "Facebook"],
      activity: "High",
      lastActive: "5 hours ago",
    },
  ]

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Instagram":
        return <Instagram className="h-3 w-3" />
      case "Facebook":
        return <Facebook className="h-3 w-3" />
      case "LinkedIn":
        return <Linkedin className="h-3 w-3" />
      case "TikTok":
        return <TikTok className="h-3 w-3" />
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
    <div className="space-y-4">
      {subjects.map((subject) => (
        <div key={subject.id} className="flex items-center gap-4 rounded-lg border p-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
            <AvatarFallback>{subject.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-medium">{subject.name}</h3>
              <div className={`h-2 w-2 rounded-full ${getActivityColor(subject.activity)}`} />
              <span className="text-xs text-muted-foreground">{subject.activity} activity</span>
            </div>
            <div className="mt-1 flex items-center gap-1">
              {subject.platforms.map((platform) => (
                <Badge key={platform} variant="outline" className="flex items-center gap-1 text-xs">
                  {getPlatformIcon(platform)}
                  {platform}
                </Badge>
              ))}
            </div>
          </div>
          <div className="text-xs text-muted-foreground">Last active: {subject.lastActive}</div>
        </div>
      ))}
    </div>
  )
}
