"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function UserActivityHeatmap() {
  // Sample data for user activity (24 hours x 7 days)
  const [data] = useState(() => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const hours = Array.from({ length: 24 }, (_, i) => i)

    // Generate random activity data
    const activityData = days.map((day) => {
      return {
        day,
        hours: hours.map((hour) => {
          // More activity during work hours
          let intensity = Math.random()
          if (hour >= 9 && hour <= 17 && day !== "Sat" && day !== "Sun") {
            intensity = 0.5 + Math.random() * 0.5
          } else if (hour < 7 || hour > 22) {
            intensity = Math.random() * 0.3
          }
          return {
            hour,
            intensity,
          }
        }),
      }
    })

    return activityData
  })

  // Function to get color based on intensity
  const getColor = (intensity: number) => {
    // From light blue to dark blue
    const r = Math.floor(235 - intensity * 200)
    const g = Math.floor(248 - intensity * 200)
    const b = 255
    return `rgb(${r}, ${g}, ${b})`
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>User Activity Heatmap</CardTitle>
        <CardDescription>Activity patterns across days and hours</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <div className="flex items-center mb-1">
            <div className="w-16"></div>
            {Array.from({ length: 24 }, (_, i) => (
              <div key={i} className="flex-1 text-center text-xs text-muted-foreground">
                {i % 3 === 0 ? `${i}:00` : ""}
              </div>
            ))}
          </div>
          {data.map((dayData, dayIndex) => (
            <div key={dayIndex} className="flex items-center mb-1">
              <div className="w-16 text-xs font-medium">{dayData.day}</div>
              <div className="flex flex-1">
                {dayData.hours.map((hourData, hourIndex) => (
                  <div
                    key={hourIndex}
                    className="flex-1 h-8 rounded-sm border border-border"
                    style={{ backgroundColor: getColor(hourData.intensity) }}
                    title={`${dayData.day} ${hourData.hour}:00 - Activity: ${Math.round(hourData.intensity * 100)}%`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
          <div className="flex items-center mt-4 justify-center">
            <div className="flex items-center">
              <span className="text-xs mr-2">Low</span>
              <div className="flex">
                {[0.1, 0.3, 0.5, 0.7, 0.9].map((intensity, i) => (
                  <div
                    key={i}
                    className="w-6 h-4 border border-border"
                    style={{ backgroundColor: getColor(intensity) }}
                  ></div>
                ))}
              </div>
              <span className="text-xs ml-2">High</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
