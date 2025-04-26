"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

export function SentimentAnalysisChart() {
  // Sample data
  const data = [
    {
      name: "Instagram",
      positive: 65,
      neutral: 25,
      negative: 10,
    },
    {
      name: "Facebook",
      positive: 55,
      neutral: 30,
      negative: 15,
    },
    {
      name: "TikTok",
      positive: 70,
      neutral: 20,
      negative: 10,
    },
    {
      name: "LinkedIn",
      positive: 80,
      neutral: 15,
      negative: 5,
    },
  ]

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
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="positive" stackId="a" fill="#4ade80" />
        <Bar dataKey="neutral" stackId="a" fill="#94a3b8" />
        <Bar dataKey="negative" stackId="a" fill="#f87171" />
      </BarChart>
    </ResponsiveContainer>
  )
}
