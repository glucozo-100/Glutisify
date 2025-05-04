"use client"

import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from "@/components/ui/chart"
import { ChartContainer } from "@/components/ui/chart"

export function ScatterPlot() {
  // Sample data for hashtag performance
  const data = [
    { hashtag: "#trending", reach: 45000, engagement: 5.2 },
    { hashtag: "#viral", reach: 78000, engagement: 6.8 },
    { hashtag: "#fashion", reach: 32000, engagement: 4.1 },
    { hashtag: "#beauty", reach: 28000, engagement: 3.9 },
    { hashtag: "#fitness", reach: 35000, engagement: 7.2 },
    { hashtag: "#food", reach: 42000, engagement: 5.8 },
    { hashtag: "#travel", reach: 38000, engagement: 6.3 },
    { hashtag: "#tech", reach: 25000, engagement: 3.5 },
    { hashtag: "#music", reach: 50000, engagement: 4.7 },
    { hashtag: "#art", reach: 22000, engagement: 5.5 },
    { hashtag: "#photography", reach: 30000, engagement: 4.9 },
    { hashtag: "#motivation", reach: 27000, engagement: 3.8 },
    { hashtag: "#love", reach: 65000, engagement: 5.1 },
    { hashtag: "#instagood", reach: 72000, engagement: 4.5 },
    { hashtag: "#summer", reach: 48000, engagement: 5.9 },
    { hashtag: "#nature", reach: 33000, engagement: 6.1 },
    { hashtag: "#style", reach: 29000, engagement: 4.3 },
    { hashtag: "#health", reach: 26000, engagement: 5.3 },
    { hashtag: "#business", reach: 20000, engagement: 2.9 },
    { hashtag: "#marketing", reach: 18000, engagement: 2.7 },
  ]

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-background border rounded-md p-3 shadow-md">
          <p className="text-sm font-medium mb-1">{data.hashtag}</p>
          <p className="text-xs">Reach: {data.reach.toLocaleString()}</p>
          <p className="text-xs">Engagement Rate: {data.engagement}%</p>
        </div>
      )
    }
    return null
  }

  // Calculate quadrant averages
  const avgReach = data.reduce((sum, item) => sum + item.reach, 0) / data.length
  const avgEngagement = data.reduce((sum, item) => sum + item.engagement, 0) / data.length

  return (
    <ChartContainer
      config={{
        scatter: {
          label: "Hashtag Performance",
          color: "hsl(var(--primary))",
        },
      }}
      className="w-full h-[400px]"
    >
      <div className="p-4">
        <h3 className="text-lg font-medium mb-1">Hashtag Performance Analysis</h3>
        <p className="text-sm text-muted-foreground">Reach vs. Engagement Rate</p>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            dataKey="reach"
            name="Reach"
            domain={[0, "dataMax + 5000"]}
            label={{ value: "Reach", position: "bottom", offset: 0 }}
          />
          <YAxis
            type="number"
            dataKey="engagement"
            name="Engagement Rate"
            unit="%"
            domain={[0, "dataMax + 1"]}
            label={{ value: "Engagement Rate (%)", angle: -90, position: "left" }}
          />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} content={<CustomTooltip />} />
          <Scatter
            name="Hashtags"
            data={data}
            fill="#8884d8"
            shape={(props) => {
              const { cx, cy, fill } = props
              const hashtag = props.payload.hashtag

              // Determine color based on quadrant (high/low reach and engagement)
              let color
              if (props.payload.reach > avgReach && props.payload.engagement > avgEngagement) {
                color = "#4caf50" // High reach, high engagement - green
              } else if (props.payload.reach > avgReach && props.payload.engagement <= avgEngagement) {
                color = "#ff9800" // High reach, low engagement - orange
              } else if (props.payload.reach <= avgReach && props.payload.engagement > avgEngagement) {
                color = "#2196f3" // Low reach, high engagement - blue
              } else {
                color = "#f44336" // Low reach, low engagement - red
              }

              return <circle cx={cx} cy={cy} r={6} fill={color} stroke="#fff" strokeWidth={1} />
            }}
          />
          {/* Reference lines for average values */}
          <line
            x1={0}
            y1={avgEngagement}
            x2="100%"
            y2={avgEngagement}
            stroke="#666"
            strokeDasharray="3 3"
            strokeWidth={1}
          />
          <line x1={avgReach} y1={0} x2={avgReach} y2="100%" stroke="#666" strokeDasharray="3 3" strokeWidth={1} />
        </ScatterChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap justify-center gap-4 px-4 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#4caf50]" />
          <span className="text-xs">High reach, high engagement</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff9800]" />
          <span className="text-xs">High reach, low engagement</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#2196f3]" />
          <span className="text-xs">Low reach, high engagement</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#f44336]" />
          <span className="text-xs">Low reach, low engagement</span>
        </div>
      </div>
    </ChartContainer>
  )
}
