"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, ArrowUp, Users, MessageSquare, Eye, ThumbsUp } from "lucide-react"

export function SubjectMetricsCards() {
  const metrics = [
    {
      title: "Total Subjects",
      value: "12",
      change: "+2",
      changeType: "increase",
      description: "since last month",
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Total Engagement",
      value: "248.3K",
      change: "+24%",
      changeType: "increase",
      description: "from previous period",
      icon: <ThumbsUp className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Total Impressions",
      value: "1.2M",
      change: "+15%",
      changeType: "increase",
      description: "from previous period",
      icon: <Eye className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Avg. Response Rate",
      value: "18%",
      change: "-3%",
      changeType: "decrease",
      description: "from previous period",
      icon: <MessageSquare className="h-4 w-4 text-muted-foreground" />,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            {metric.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="flex items-center space-x-2">
              <Badge
                variant="outline"
                className={metric.changeType === "increase" ? "text-green-500 bg-green-50" : "text-red-500 bg-red-50"}
              >
                <span className="flex items-center">
                  {metric.changeType === "increase" ? (
                    <ArrowUp className="mr-1 h-3 w-3" />
                  ) : (
                    <ArrowDown className="mr-1 h-3 w-3" />
                  )}
                  {metric.change}
                </span>
              </Badge>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
