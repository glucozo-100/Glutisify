"use client"

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "@/components/ui/chart"

export function PlatformDistributionChart() {
  // Sample data
  const data = [
    { name: "Instagram", value: 400, color: "#E1306C" },
    { name: "Facebook", value: 300, color: "#4267B2" },
    { name: "TikTok", value: 300, color: "#000000" },
    { name: "LinkedIn", value: 200, color: "#0077B5" },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
