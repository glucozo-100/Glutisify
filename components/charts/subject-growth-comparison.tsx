"use client"

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

interface SubjectGrowthComparisonProps {
  subjects?: string[]
}

export function SubjectGrowthComparison({ subjects = [] }: SubjectGrowthComparisonProps) {
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
      month: "Jan",
      "John Doe": 100000,
      "Jane Smith": 150000,
      "Alex Johnson": 80000,
      "Sarah Williams": 500000,
    },
    {
      month: "Feb",
      "John Doe": 120000,
      "Jane Smith": 155000,
      "Alex Johnson": 90000,
      "Sarah Williams": 580000,
    },
    {
      month: "Mar",
      "John Doe": 150000,
      "Jane Smith": 158000,
      "Alex Johnson": 110000,
      "Sarah Williams": 650000,
    },
    {
      month: "Apr",
      "John Doe": 190000,
      "Jane Smith": 162000,
      "Alex Johnson": 140000,
      "Sarah Williams": 720000,
    },
    {
      month: "May",
      "John Doe": 250000,
      "Jane Smith": 165000,
      "Alex Johnson": 180000,
      "Sarah Williams": 800000,
    },
    {
      month: "Jun",
      "John Doe": 300000,
      "Jane Smith": 170000,
      "Alex Johnson": 220000,
      "Sarah Williams": 900000,
    },
    {
      month: "Jul",
      "John Doe": 380000,
      "Jane Smith": 175000,
      "Alex Johnson": 260000,
      "Sarah Williams": 1000000,
    },
    {
      month: "Aug",
      "John Doe": 450000,
      "Jane Smith": 180000,
      "Alex Johnson": 290000,
      "Sarah Williams": 1100000,
    },
    {
      month: "Sep",
      "John Doe": 520000,
      "Jane Smith": 190000,
      "Alex Johnson": 320000,
      "Sarah Williams": 1180000,
    },
    {
      month: "Oct",
      "John Doe": 580000,
      "Jane Smith": 200000,
      "Alex Johnson": 350000,
      "Sarah Williams": 1250000,
    },
    {
      month: "Nov",
      "John Doe": 650000,
      "Jane Smith": 210000,
      "Alex Johnson": 370000,
      "Sarah Williams": 1300000,
    },
    {
      month: "Dec",
      "John Doe": 700000,
      "Jane Smith": 220000,
      "Alex Johnson": 400000,
      "Sarah Williams": 1350000,
    },
  ]

  // Generate colors for each subject
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"]

  // Determine which subjects to display
  const subjectsToDisplay = subjects.length > 0 ? subjects.map((s) => subjectNames[s]) : Object.values(subjectNames)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip formatter={(value) => new Intl.NumberFormat().format(value as number)} />
        <Legend />

        {subjectsToDisplay.map((subject, index) => (
          <Line
            key={subject}
            type="monotone"
            dataKey={subject}
            stroke={colors[index % colors.length]}
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}
