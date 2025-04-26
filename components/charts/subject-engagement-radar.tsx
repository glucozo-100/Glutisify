"use client"

import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "@/components/ui/chart"

interface SubjectEngagementRadarProps {
  subjects?: string[]
}

export function SubjectEngagementRadar({ subjects = [] }: SubjectEngagementRadarProps) {
  // Map subject values to display names
  const subjectNames: Record<string, string> = {
    "john-doe": "John Doe",
    "jane-smith": "Jane Smith",
    "alex-johnson": "Alex Johnson",
    "sarah-williams": "Sarah Williams",
  }

  // Sample data
  const data = [
    {
      subject: "Likes",
      "John Doe": 80,
      "Jane Smith": 65,
      "Alex Johnson": 75,
      "Sarah Williams": 90,
      fullMark: 100,
    },
    {
      subject: "Comments",
      "John Doe": 70,
      "Jane Smith": 50,
      "Alex Johnson": 85,
      "Sarah Williams": 75,
      fullMark: 100,
    },
    {
      subject: "Shares",
      "John Doe": 60,
      "Jane Smith": 45,
      "Alex Johnson": 70,
      "Sarah Williams": 85,
      fullMark: 100,
    },
    {
      subject: "Saves",
      "John Doe": 55,
      "Jane Smith": 40,
      "Alex Johnson": 65,
      "Sarah Williams": 80,
      fullMark: 100,
    },
    {
      subject: "Click-through",
      "John Doe": 65,
      "Jane Smith": 55,
      "Alex Johnson": 60,
      "Sarah Williams": 70,
      fullMark: 100,
    },
    {
      subject: "Reach",
      "John Doe": 75,
      "Jane Smith": 60,
      "Alex Johnson": 70,
      "Sarah Williams": 95,
      fullMark: 100,
    },
  ]

  // Generate colors for each subject
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"]

  // Determine which subjects to display
  const subjectsToDisplay = subjects.length > 0 ? subjects.map((s) => subjectNames[s]) : Object.values(subjectNames)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Tooltip />
        <Legend />

        {subjectsToDisplay.map((subject, index) => (
          <Radar
            key={subject}
            name={subject}
            dataKey={subject}
            stroke={colors[index % colors.length]}
            fill={colors[index % colors.length]}
            fillOpacity={0.2}
          />
        ))}
      </RadarChart>
    </ResponsiveContainer>
  )
}
