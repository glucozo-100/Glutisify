"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

interface SubjectComparisonChartProps {
  subjects?: string[]
}

export function SubjectComparisonChart({ subjects = [] }: SubjectComparisonChartProps) {
  // Map subject values to display names
  const subjectNames: Record<string, string> = {
    "john-doe": "John Doe",
    "jane-smith": "Jane Smith",
    "alex-johnson": "Alex Johnson",
    "sarah-williams": "Sarah Williams",
  }

  // Sample data
  const metrics = [
    {
      name: "Followers (K)",
      "John Doe": 850,
      "Jane Smith": 320,
      "Alex Johnson": 180,
      "Sarah Williams": 1250,
    },
    {
      name: "Engagement Rate (%)",
      "John Doe": 3.2,
      "Jane Smith": 2.1,
      "Alex Johnson": 3.9,
      "Sarah Williams": 4.8,
    },
    {
      name: "Growth Rate (%)",
      "John Doe": 5.7,
      "Jane Smith": -1.3,
      "Alex Johnson": 8.2,
      "Sarah Williams": 12.5,
    },
    {
      name: "Content Frequency",
      "John Doe": 12,
      "Jane Smith": 8,
      "Alex Johnson": 15,
      "Sarah Williams": 22,
    },
    {
      name: "Avg. Comments",
      "John Doe": 120,
      "Jane Smith": 45,
      "Alex Johnson": 85,
      "Sarah Williams": 210,
    },
  ]

  // Filter data based on selected subjects
  const filteredData = metrics.map((metric) => {
    const filteredMetric: Record<string, any> = { name: metric.name }

    if (subjects.length === 0) {
      // If no subjects selected, include all
      Object.keys(subjectNames).forEach((subjectValue) => {
        const name = subjectNames[subjectValue]
        filteredMetric[name] = metric[name]
      })
    } else {
      // Only include selected subjects
      subjects.forEach((subjectValue) => {
        const name = subjectNames[subjectValue]
        filteredMetric[name] = metric[name]
      })
    }

    return filteredMetric
  })

  // Generate colors for each subject
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={filteredData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {(subjects.length === 0 ? Object.values(subjectNames) : subjects.map((s) => subjectNames[s])).map(
          (subject, index) => (
            <Bar key={subject} dataKey={subject} fill={colors[index % colors.length]} />
          ),
        )}
      </BarChart>
    </ResponsiveContainer>
  )
}
