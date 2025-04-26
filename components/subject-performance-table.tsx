"use client"

import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowDown, ArrowUp, Facebook, Instagram, Linkedin, TwitterIcon as TikTok } from "lucide-react"

export function SubjectPerformanceTable() {
  const subjects = [
    {
      name: "Sarah Williams",
      platforms: ["TikTok", "Instagram"],
      followers: 1250000,
      engagement: 4.8,
      growth: 12.5,
      trend: "increase",
      sentiment: "positive",
      performanceScore: 92,
    },
    {
      name: "John Doe",
      platforms: ["Facebook", "Instagram", "TikTok"],
      followers: 850000,
      engagement: 3.2,
      growth: 5.7,
      trend: "increase",
      sentiment: "neutral",
      performanceScore: 78,
    },
    {
      name: "Jane Smith",
      platforms: ["Facebook", "LinkedIn"],
      followers: 320000,
      engagement: 2.1,
      growth: -1.3,
      trend: "decrease",
      sentiment: "neutral",
      performanceScore: 65,
    },
    {
      name: "Alex Johnson",
      platforms: ["LinkedIn", "Instagram"],
      followers: 180000,
      engagement: 3.9,
      growth: 8.2,
      trend: "increase",
      sentiment: "positive",
      performanceScore: 84,
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
    <div className="rounded-md border">
      <div className="grid grid-cols-7 p-4 bg-muted/50 font-medium text-sm">
        <div className="col-span-2">Subject</div>
        <div className="col-span-1">Platforms</div>
        <div className="col-span-1">Followers</div>
        <div className="col-span-1">Engagement</div>
        <div className="col-span-1">Growth</div>
        <div className="col-span-1">Performance</div>
      </div>
      {subjects.map((subject, index) => (
        <div key={index} className="grid grid-cols-7 p-4 border-t items-center">
          <div className="col-span-2 flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
              <AvatarFallback>{subject.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{subject.name}</div>
              <div className="text-xs text-muted-foreground">
                {subject.sentiment === "positive" ? "Positive sentiment" : "Neutral sentiment"}
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-wrap gap-1">
            {subject.platforms.map((platform) => (
              <Badge key={platform} variant="outline" className="flex items-center gap-1">
                {getPlatformIcon(platform)}
                <span className="text-xs">{platform}</span>
              </Badge>
            ))}
          </div>
          <div className="col-span-1">{formatNumber(subject.followers)}</div>
          <div className="col-span-1">{subject.engagement}%</div>
          <div className="col-span-1">
            <div className="flex items-center gap-1">
              {subject.trend === "increase" ? (
                <ArrowUp className="h-3 w-3 text-green-500" />
              ) : (
                <ArrowDown className="h-3 w-3 text-red-500" />
              )}
              <span className={subject.trend === "increase" ? "text-green-500" : "text-red-500"}>
                {subject.growth > 0 ? "+" : ""}
                {subject.growth}%
              </span>
            </div>
          </div>
          <div className="col-span-1">
            <div className="space-y-1">
              <Progress value={subject.performanceScore} className="h-2" />
              <div className="text-xs text-muted-foreground">{subject.performanceScore}/100</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
