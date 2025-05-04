"use client"

import { ResponsiveContainer, Tooltip, Treemap } from "@/components/ui/chart"
import { ChartContainer } from "@/components/ui/chart"

export function TreemapChart() {
  // Sample data for content categories
  const data = {
    name: "Content",
    children: [
      {
        name: "Videos",
        children: [
          { name: "Tutorials", size: 3500, color: "#8884d8" },
          { name: "Product Reviews", size: 2500, color: "#9575cd" },
          { name: "Vlogs", size: 1800, color: "#b39ddb" },
          { name: "Interviews", size: 1200, color: "#d1c4e9" },
        ],
      },
      {
        name: "Images",
        children: [
          { name: "Infographics", size: 2800, color: "#4caf50" },
          { name: "Product Photos", size: 2300, color: "#66bb6a" },
          { name: "Memes", size: 1900, color: "#81c784" },
          { name: "User-Generated", size: 1400, color: "#a5d6a7" },
        ],
      },
      {
        name: "Text",
        children: [
          { name: "Articles", size: 2200, color: "#ff9800" },
          { name: "Testimonials", size: 1600, color: "#ffb74d" },
          { name: "Case Studies", size: 1100, color: "#ffcc80" },
        ],
      },
      {
        name: "Live",
        children: [
          { name: "Webinars", size: 1700, color: "#f44336" },
          { name: "Q&A Sessions", size: 1300, color: "#ef5350" },
        ],
      },
    ],
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-background border rounded-md p-3 shadow-md">
          <p className="text-sm font-medium mb-1">{data.name}</p>
          <p className="text-xs">Engagement: {data.size.toLocaleString()}</p>
        </div>
      )
    }
    return null
  }

  const CustomizedContent = (props: any) => {
    const { root, depth, x, y, width, height, index, name, color } = props

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: color || (depth < 2 ? "none" : "#4caf50"),
            stroke: "#fff",
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {depth === 1 && (
          <text
            x={x + width / 2}
            y={y + height / 2 + 7}
            textAnchor="middle"
            fill="#fff"
            fontSize={14}
            fontWeight="bold"
          >
            {name}
          </text>
        )}
        {depth === 2 && width > 50 && height > 30 && (
          <>
            <text x={x + width / 2} y={y + height / 2} textAnchor="middle" fill="#fff" fontSize={12}>
              {name}
            </text>
            <text x={x + width / 2} y={y + height / 2 + 14} textAnchor="middle" fill="#fff" fontSize={10}>
              {Math.round((props.size / root.size) * 100)}%
            </text>
          </>
        )}
      </g>
    )
  }

  return (
    <ChartContainer
      config={{
        treemap: {
          label: "Content Categories",
          color: "hsl(var(--primary))",
        },
      }}
      className="w-full h-[400px]"
    >
      <div className="p-4">
        <h3 className="text-lg font-medium mb-1">Content Category Distribution</h3>
        <p className="text-sm text-muted-foreground">Size represents engagement level</p>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <Treemap data={data} dataKey="size" ratio={4 / 3} stroke="#fff" fill="#8884d8" content={<CustomizedContent />}>
          <Tooltip content={<CustomTooltip />} />
        </Treemap>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
