"use client"

import React from "react"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer } from "@/components/ui/chart"

export function CalendarHeatmap() {
  const [selectedMonth, setSelectedMonth] = useState("current")

  // Days of the month (1-31)
  const days = Array.from({ length: 31 }, (_, i) => i + 1)

  // Hours of the day (24-hour format)
  const hours = Array.from({ length: 24 }, (_, i) => i)

  // Generate realistic posting pattern data
  const generatePostingData = () => {
    const data: number[][] = []
    for (let i = 0; i < 31; i++) {
      const dayData: number[] = []
      for (let j = 0; j < 24; j++) {
        // Generate more realistic patterns:
        // - Higher activity during weekdays (assuming month starts on a Monday for simplicity)
        // - Higher activity during prime posting hours
        // - Some random variation
        let baseValue = Math.random()

        // Weekend reduction (assuming 6,7,13,14,20,21,27,28 are weekends)
        const weekends = [5, 6, 12, 13, 19, 20, 26, 27]
        if (weekends.includes(i)) baseValue *= 0.6

        // Prime posting hours boost (7-9am, 12-1pm, 5-8pm)
        if ((j >= 7 && j <= 9) || (j >= 12 && j <= 13) || (j >= 17 && j <= 20)) {
          baseValue *= 2.5
        }

        // Late night reduction (11pm-6am)
        if (j >= 23 || j <= 5) baseValue *= 0.2

        // Scale to 0-10 range (number of posts)
        dayData.push(Math.min(Math.floor(baseValue * 10), 10))
      }
      data.push(dayData)
    }
    return data
  }

  const postingData = generatePostingData()

  // Function to get color based on posting frequency
  const getColor = (value: number) => {
    if (value === 0) return "bg-gray-100 dark:bg-gray-800"
    if (value <= 2) return "bg-blue-100 dark:bg-blue-900"
    if (value <= 4) return "bg-blue-200 dark:bg-blue-800"
    if (value <= 6) return "bg-blue-300 dark:bg-blue-700"
    if (value <= 8) return "bg-blue-400 dark:bg-blue-600"
    return "bg-blue-500 dark:bg-blue-500"
  }

  // Format hour for display
  const formatHour = (hour: number) => {
    if (hour === 0) return "12am"
    if (hour === 12) return "12pm"
    return hour < 12 ? `${hour}am` : `${hour - 12}pm`
  }

  return (
    <ChartContainer
      config={{
        heatmap: {
          label: "Posting Schedule",
          color: "hsl(var(--primary))",
        },
      }}
      className="w-full"
    >
      <div className="p-4 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium mb-1">Posting Schedule Analysis</h3>
          <p className="text-sm text-muted-foreground">Optimal times based on historical data</p>
        </div>
        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="current">Current Month</SelectItem>
            <SelectItem value="previous">Previous Month</SelectItem>
            <SelectItem value="next">Next Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-x-auto px-4 pb-4">
        <div className="min-w-[700px]">
          <div className="grid grid-cols-[auto_repeat(24,1fr)]">
            {/* Empty cell for top-left corner */}
            <div className="h-8"></div>

            {/* Hour headers */}
            {hours.map((hour) => (
              <div key={hour} className="h-8 flex items-center justify-center text-xs font-medium">
                {hour % 3 === 0 ? formatHour(hour) : ""}
              </div>
            ))}

            {/* Day rows with posting cells */}
            {days.map((day, dayIndex) => (
              <React.Fragment key={`day-${day}`}>
                {/* Day label */}
                <div className="flex items-center justify-end pr-2 font-medium text-sm">{day}</div>

                {/* Posting cells for this day */}
                {hours.map((hour) => {
                  const value = postingData[dayIndex][hour]
                  return (
                    <div
                      key={`${day}-${hour}`}
                      className={`border m-[1px] h-8 ${getColor(value)} relative group`}
                      title={`Day ${day}, ${formatHour(hour)}: ${value} posts`}
                    >
                      {value > 0 && (
                        <div className="absolute inset-0 flex items-center justify-center text-xs font-medium opacity-70">
                          {value}
                        </div>
                      )}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black bg-opacity-10 flex items-center justify-center transition-opacity">
                        <span className="text-xs font-medium bg-background px-1 py-0.5 rounded shadow">
                          {value} posts
                        </span>
                      </div>
                    </div>
                  )
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-2 pb-4">
        <div className="text-xs">None</div>
        <div className="flex space-x-1">
          <div className="w-4 h-4 bg-gray-100 dark:bg-gray-800 border"></div>
          <div className="w-4 h-4 bg-blue-100 dark:bg-blue-900 border"></div>
          <div className="w-4 h-4 bg-blue-200 dark:bg-blue-800 border"></div>
          <div className="w-4 h-4 bg-blue-300 dark:bg-blue-700 border"></div>
          <div className="w-4 h-4 bg-blue-400 dark:bg-blue-600 border"></div>
          <div className="w-4 h-4 bg-blue-500 dark:bg-blue-500 border"></div>
        </div>
        <div className="text-xs">Many</div>
      </div>
    </ChartContainer>
  )
}
