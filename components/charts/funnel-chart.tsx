"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "@/components/ui/chart"
import { ChartContainer } from "@/components/ui/chart"

export function FunnelChart() {
  // Sample data for conversion funnel
  const data = [
    {
      name: "Impressions",
      value: 100000,
      fill: "#8884d8",
    },
    {
      name: "Profile Visits",
      value: 35000,
      fill: "#83a6ed",
    },
    {
      name: "Followers",
      value: 12000,
      fill: "#8dd1e1",
    },
    {
      name: "Engagement",
      value: 8000,
      fill: "#82ca9d",
    },
    {
      name: "Website Clicks",
      value: 3500,
      fill: "#a4de6c",
    },
    {
      name: "Conversions",
      value: 1200,
      fill: "#d0ed57",
    },
  ]

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      const nextStage = data.name !== "Conversions" ? data.nextValue : null

      const conversionRate = nextStage ? ((nextStage / data.value) * 100).toFixed(1) : null

      return (
        <div className="bg-background border rounded-md p-3 shadow-md">
          <p className="text-sm font-medium mb-1">{data.name}</p>
          <p className="text-xs">Count: {data.value.toLocaleString()}</p>
          {conversionRate && <p className="text-xs">Conversion to next stage: {conversionRate}%</p>}
        </div>
      )
    }
    return null
  }

  // Add next stage value for conversion rate calculation
  const dataWithNextStage = data.map((item, index) => ({
    ...item,
    nextValue: index < data.length - 1 ? data[index + 1].value : null,
  }))

  return (
    <ChartContainer
      config={{
        funnel: {
          label: "Conversion Funnel",
          color: "hsl(var(--primary))",
        },
      }}
      className="w-full h-[400px]"
    >
      <div className="p-4">
        <h3 className="text-lg font-medium mb-1">Social Media Conversion Funnel</h3>
        <p className="text-sm text-muted-foreground">From impressions to conversions</p>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={dataWithNextStage}
          layout="vertical"
          margin={{
            top: 20,
            right: 30,
            left: 120,
            bottom: 5,
          }}
        >
          <XAxis type="number" hide />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="value"
            fill="#8884d8"
            background={{ fill: "#eee" }}
            label={{
              position: "right",
              formatter: (value: number) => value.toLocaleString(),
              fill: "var(--foreground)",
              fontSize: 12,
            }}
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
