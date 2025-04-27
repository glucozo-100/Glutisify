import type * as React from "react"
import { cn } from "@/lib/utils"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts"

interface ChartContainerProps {
  children: React.ReactNode
  config: Record<string, { label: string; color: string }>
  className?: string
}

const ChartContainer = ({ children, config, className }: ChartContainerProps) => {
  // Define CSS variables based on the config
  const style: React.CSSProperties = {}
  Object.entries(config).forEach(([key, value]) => {
    style[`--color-${key}`] = value.color
  })

  return (
    <div className={cn("rounded-md border bg-card text-card-foreground shadow-sm", className)} style={style}>
      {children}
    </div>
  )
}

interface ChartTooltipProps {
  children?: React.ReactNode
  active?: boolean
  payload?: any[]
}

const ChartTooltip = ({ active, payload }: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border rounded-md p-2 shadow-md">
        {payload.map((item, index) => (
          <p key={`item-${index}`} className="text-sm">
            {item.name}: {item.value}
          </p>
        ))}
      </div>
    )
  }

  return null
}

interface ChartTooltipContentProps {
  children?: React.ReactNode
  active?: boolean
  payload?: any[]
}

const ChartTooltipContent = ({ active, payload }: ChartTooltipContentProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border rounded-md p-2 shadow-md">
        {payload.map((item, index) => (
          <div key={`item-${index}`} className="flex items-center gap-2">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: `var(--color-${item.dataKey})` }}
            />
            <span className="text-sm">
              {item.name}: {item.value}
            </span>
          </div>
        ))}
      </div>
    )
  }

  return null
}

export {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
}
