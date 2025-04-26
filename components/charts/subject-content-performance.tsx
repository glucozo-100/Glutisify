"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

interface SubjectContentPerformanceProps {
  subjects?: string[]
}

export function SubjectContentPerformance({ subjects = [] }: SubjectContentPerformanceProps) {
  // Map subject values to display names
  const subjectNames: Record<string, string> = {
    "john-doe": "John Doe",
    "jane-smith": "Jane Smith",
    "alex-johnson": "Alex Johnson",
    "sarah-williams": "Sarah Williams",
  }

  // Sample data for content performance by type
  const data = [
    {
      type: "Photos",
      "John Doe": 4.2,
      "Jane Smith": 3.1,
      "Alex Johnson": 3.8,
      "Sarah Williams": 5.2,
    },
    {
      type: "Videos",
      "John Doe": 6.5,
      "Jane Smith": 4.2,
      "Alex Johnson": 5.7,
      "Sarah Williams": 8.3,
    },
    {
      type: "Text Posts",
      "John Doe": 2.8,
      "Jane Smith": 2.5,
      "Alex Johnson": 3.2,
      "Sarah Williams": 3.5,
    },
    {
      type: "Stories",
      "John Doe": 5.1,
      "Jane Smith": 3.8,
      "Alex Johnson": 4.5,
      "Sarah Williams": 6.7,
    },
    {
      type: "Reels/TikToks",
      "John Doe": 7.2,
      "Jane Smith": 5.1,
      "Alex Johnson": 6.3,
      "Sarah Williams": 9.5,
    },
  ]

  // Generate colors for each subject
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"]

  // Determine which subjects to display
  const subjectsToDisplay = subjects.length > 0 ? subjects.map((s) => subjectNames[s]) : Object.values(subjectNames)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="type" />
        <YAxis label={{ value: "Engagement Rate (%)", angle: -90, position: "insideLeft" }} />
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend />

        {subjectsToDisplay.map((subject, index) => (
          <Bar key={subject} dataKey={subject} fill={colors[index % colors.length]} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  )
}
