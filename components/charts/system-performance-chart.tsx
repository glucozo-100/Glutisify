"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "@/components/ui/chart"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function SystemPerformanceChart() {
  // Sample data for system performance metrics
  const data = [
    { time: "00:00", cpu: 45, memory: 62, network: 15, disk: 22 },
    { time: "03:00", cpu: 52, memory: 64, network: 18, disk: 25 },
    { time: "06:00", cpu: 48, memory: 60, network: 16, disk: 23 },
    { time: "09:00", cpu: 70, memory: 72, network: 35, disk: 38 },
    { time: "12:00", cpu: 90, memory: 85, network: 52, disk: 45 },
    { time: "15:00", cpu: 75, memory: 80, network: 45, disk: 40 },
    { time: "18:00", cpu: 85, memory: 82, network: 48, disk: 42 },
    { time: "21:00", cpu: 65, memory: 70, network: 30, disk: 35 },
  ]

  return (
    <ChartContainer
      config={{
        cpu: {
          label: "CPU Usage",
          color: "hsl(var(--chart-1))",
        },
        memory: {
          label: "Memory Usage",
          color: "hsl(var(--chart-2))",
        },
        network: {
          label: "Network",
          color: "hsl(var(--chart-3))",
        },
        disk: {
          label: "Disk I/O",
          color: "hsl(var(--chart-4))",
        },
      }}
      className="w-full h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <XAxis dataKey="time" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line type="monotone" dataKey="cpu" stroke="var(--color-cpu)" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="memory" stroke="var(--color-memory)" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="network" stroke="var(--color-network)" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="disk" stroke="var(--color-disk)" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
