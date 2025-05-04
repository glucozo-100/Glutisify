"use client"

import { Cell, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from "@/components/ui/chart"
import { ChartContainer } from "@/components/ui/chart"

export function BubbleChart() {
  // Sample data for social media platforms
  // x: Followers (thousands)
  // y: Engagement Rate (%)
  // z: Post Frequency (posts per week)
  const data = [
    { name: "Instagram", followers: 120, engagementRate: 4.2, postFrequency: 14, color: "#E1306C" },
    { name: "Facebook", followers: 85, engagementRate: 1.8, postFrequency: 10, color: "#4267B2" },
    { name: "TikTok", followers: 65, engagementRate: 8.5, postFrequency: 21, color: "#000000" },
    { name: "LinkedIn", followers: 42, engagementRate: 2.2, postFrequency: 5, color: "#0077B5" },
    { name: "Twitter", followers: 78, engagementRate: 3.1, postFrequency: 18, color: "#1DA1F2" },
    { name: "YouTube", followers: 35, engagementRate: 5.7, postFrequency: 3, color: "#FF0000" },
    { name: "Pinterest", followers: 28, engagementRate: 6.3, postFrequency: 8, color: "#E60023" },
  ]

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-background border rounded-md p-3 shadow-md">
          <p className="text-sm font-medium mb-1">{data.name}</p>
          <p className="text-xs">Followers: {data.followers}K</p>
          <p className="text-xs">Engagement Rate: {data.engagementRate}%</p>
          <p className="text-xs">Posts per Week: {data.postFrequency}</p>
        </div>
      )
    }
    return null
  }

  return (
    <ChartContainer
      config={{
        bubble: {
          label: "Platform Metrics",
          color: "hsl(var(--primary))",
        },
      }}
      className="w-full h-[400px]"
    >
      <div className="p-4">
        <h3 className="text-lg font-medium mb-1">Platform Performance Comparison</h3>
        <p className="text-sm text-muted-foreground">Bubble size represents posting frequency</p>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <ScatterChart
          margin={{
            top: 20,
            right: 30,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis
            type="number"
            dataKey="followers"
            name="Followers"
            label={{ value: "Followers (thousands)", position: "bottom", offset: 0 }}
            domain={[0, "dataMax + 20"]}
          />
          <YAxis
            type="number"
            dataKey="engagementRate"
            name="Engagement Rate"
            label={{ value: "Engagement Rate (%)", angle: -90, position: "left" }}
            domain={[0, "dataMax + 1"]}
          />
          <ZAxis type="number" dataKey="postFrequency" range={[50, 400]} name="Post Frequency" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} content={<CustomTooltip />} />
          <Scatter name="Platforms" data={data}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap justify-center gap-4 px-4 pb-4">
        {data.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-xs">{entry.name}</span>
          </div>
        ))}
      </div>
    </ChartContainer>
  )
}
