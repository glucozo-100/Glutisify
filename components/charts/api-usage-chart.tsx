"use client"

import { ChartTooltip } from "@/components/ui/chart"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "@/components/ui/chart"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

export function ApiUsageChart() {
  // Sample data for API usage
  const data = [
    { day: "Mon", requests: 3200, errors: 120, latency: 245 },
    { day: "Tue", requests: 4500, errors: 150, latency: 256 },
    { day: "Wed", requests: 5200, errors: 180, latency: 278 },
    { day: "Thu", requests: 4800, errors: 160, latency: 267 },
    { day: "Fri", requests: 6000, errors: 210, latency: 289 },
    { day: "Sat", requests: 3500, errors: 130, latency: 234 },
    { day: "Sun", requests: 2800, errors: 100, latency: 223 },
  ]

  return (
    <ChartContainer
      config={{
        requests: {
          label: "API Requests",
          color: "hsl(var(--chart-1))",
        },
        errors: {
          label: "Errors",
          color: "hsl(var(--chart-2))",
        },
        latency: {
          label: "Avg Latency (ms)",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="w-full h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis yAxisId="left" orientation="left" stroke="var(--color-requests)" />
          <YAxis yAxisId="right" orientation="right" stroke="var(--color-latency)" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar yAxisId="left" dataKey="requests" fill="var(--color-requests)" radius={[4, 4, 0, 0]} />
          <Bar yAxisId="left" dataKey="errors" fill="var(--color-errors)" radius={[4, 4, 0, 0]} />
          <Bar yAxisId="right" dataKey="latency" fill="var(--color-latency)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
