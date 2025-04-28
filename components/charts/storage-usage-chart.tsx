"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "@/components/ui/chart"

export function StorageUsageChart() {
  // Sample data for storage usage
  const data = [
    { name: "Media Files", value: 450, color: "#3b82f6" },
    { name: "Analytics Data", value: 300, color: "#10b981" },
    { name: "User Content", value: 200, color: "#f59e0b" },
    { name: "System Files", value: 100, color: "#6366f1" },
    { name: "Cache", value: 50, color: "#ec4899" },
  ]

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: {
    cx: number
    cy: number
    midAngle: number
    innerRadius: number
    outerRadius: number
    percent: number
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) => [`${value} GB`, "Storage"]}
            contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "6px" }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {data.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: entry.color }} />
            <span className="text-xs">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
