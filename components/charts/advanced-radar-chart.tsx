"use client"

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "@/components/ui/chart"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

interface AdvancedRadarChartProps {
  title?: string
  data: any[]
  categories: string[]
  index: string
  colors?: string[]
  valueFormatter?: (value: number) => string
  height?: number
}

export function AdvancedRadarChart({
  title,
  data,
  categories,
  index,
  colors = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))"],
  valueFormatter = (value: number) => value.toString(),
  height = 300,
}: AdvancedRadarChartProps) {
  // Create config object for ChartContainer
  const config: Record<string, { label: string; color: string }> = {}
  categories.forEach((category, i) => {
    config[category] = {
      label: category,
      color: colors[i % colors.length],
    }
  })

  return (
    <ChartContainer config={config} className={`w-full ${title ? "pt-4" : ""}`}>
      {title && <h3 className="text-sm font-medium px-6 mb-2">{title}</h3>}
      <ResponsiveContainer width="100%" height={height}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey={index} />
          <PolarRadiusAxis />
          <Tooltip content={<ChartTooltipContent />} />
          {categories.map((category, i) => (
            <Radar
              key={category}
              name={category}
              dataKey={category}
              stroke={`var(--color-${category})`}
              fill={`var(--color-${category})`}
              fillOpacity={0.2}
            />
          ))}
        </RadarChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap justify-center gap-4 py-2">
        {categories.map((category, index) => (
          <div key={`legend-${index}`} className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: colors[index % colors.length] }} />
            <span className="text-xs">{category}</span>
          </div>
        ))}
      </div>
    </ChartContainer>
  )
}
