"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Facebook, Instagram, Linkedin, TwitterIcon as TikTok } from "lucide-react"

export function RecentActivities() {
  const activities = [
    {
      id: 1,
      subject: "John Doe",
      platform: "Instagram",
      activity: "Posted a new photo",
      time: "2 hours ago",
      icon: Instagram,
    },
    {
      id: 2,
      subject: "Jane Smith",
      platform: "Facebook",
      activity: "Updated profile picture",
      time: "3 hours ago",
      icon: Facebook,
    },
    {
      id: 3,
      subject: "Alex Johnson",
      platform: "LinkedIn",
      activity: "Shared a new post",
      time: "5 hours ago",
      icon: Linkedin,
    },
    {
      id: 4,
      subject: "Sarah Williams",
      platform: "TikTok",
      activity: "Posted a new video",
      time: "6 hours ago",
      icon: TikTok,
    },
    {
      id: 5,
      subject: "John Doe",
      platform: "Facebook",
      activity: "Commented on a post",
      time: "8 hours ago",
      icon: Facebook,
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center gap-4 rounded-lg border p-3">
          <Avatar>
            <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
            <AvatarFallback>{activity.subject.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.subject}</p>
            <p className="text-sm text-muted-foreground">{activity.activity}</p>
            <div className="flex items-center pt-1">
              <activity.icon className="mr-1 h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{activity.platform}</span>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">{activity.time}</div>
        </div>
      ))}
    </div>
  )
}
