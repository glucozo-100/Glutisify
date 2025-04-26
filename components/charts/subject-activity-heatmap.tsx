"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SubjectActivityHeatmap() {
  const [selectedSubject, setSelectedSubject] = useState("all")

  // Days of the week
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  // Hours of the day (24-hour format)
  const hours = Array.from({ length: 24 }, (_, i) => i)

  // Generate random activity data
  const generateActivityData = () => {
    const data: number[][] = []
    for (let i = 0; i < 7; i++) {
      const dayData: number[] = []
      for (let j = 0; j < 24; j++) {
        // Generate more realistic patterns:
        // - Higher activity during weekdays
        // - Higher activity during business hours
        // - Some random variation
        let baseValue = Math.random()

        // Weekday boost (Mon-Fri)
        if (i < 5) baseValue *= 1.5

        // Business hours boost (9am-6pm)
        if (j >= 9 && j <= 18) baseValue *= 2

        // Evening boost for social media (7pm-10pm)
        if (j >= 19 && j <= 22) baseValue *= 1.8

        // Early morning reduction (12am-6am)
        if (j >= 0 && j <= 5) baseValue *= 0.3

        // Scale to 0-100 range
        dayData.push(Math.min(Math.floor(baseValue * 100), 100))
      }
      data.push(dayData)
    }
    return data
  }

  const activityData = generateActivityData()

  // Function to get color based on activity level
  const getColor = (value: number) => {
    if (value < 20) return "bg-green-100"
    if (value < 40) return "bg-green-200"
    if (value < 60) return "bg-green-300"
    if (value < 80) return "bg-green-400"
    return "bg-green-500"
  }

  // Format hour for display
  const formatHour = (hour: number) => {
    if (hour === 0) return "12am"
    if (hour === 12) return "12pm"
    return hour < 12 ? `${hour}am` : `${hour - 12}pm`
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Select value={selectedSubject} onValueChange={setSelectedSubject}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subjects</SelectItem>
            <SelectItem value="john-doe">John Doe</SelectItem>
            <SelectItem value="jane-smith">Jane Smith</SelectItem>
            <SelectItem value="alex-johnson">Alex Johnson</SelectItem>
            <SelectItem value="sarah-williams">Sarah Williams</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[600px]">
          <div className="grid grid-cols-[auto_repeat(24,1fr)]">
            {/* Empty cell for top-left corner */}
            <div className="h-8"></div>

            {/* Hour headers */}
            {hours.map((hour) => (
              <div key={hour} className="h-8 flex items-center justify-center text-xs font-medium">
                {hour % 3 === 0 ? formatHour(hour) : ""}
              </div>
            ))}

            {/* Day rows with activity cells */}
            {days.map((day, dayIndex) => (
              <>
                {/* Day label */}
                <div key={`${day}-label`} className="flex items-center justify-end pr-2 font-medium text-sm">
                  {day}
                </div>

                {/* Activity cells for this day */}
                {hours.map((hour) => (
                  <div
                    key={`${day}-${hour}`}
                    className={`border m-[1px] h-8 ${getColor(activityData[dayIndex][hour])}`}
                    title={`${day} ${formatHour(hour)}: ${activityData[dayIndex][hour]}% activity`}
                  ></div>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-2 pt-2">
        <div className="text-xs">Less</div>
        <div className="flex space-x-1">
          <div className="w-4 h-4 bg-green-100"></div>
          <div className="w-4 h-4 bg-green-200"></div>
          <div className="w-4 h-4 bg-green-300"></div>
          <div className="w-4 h-4 bg-green-400"></div>
          <div className="w-4 h-4 bg-green-500"></div>
        </div>
        <div className="text-xs">More</div>
      </div>
    </div>
  )
}
