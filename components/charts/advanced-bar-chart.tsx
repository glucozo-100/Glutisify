"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "@/components/ui/chart"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface AdvancedBarChartProps {
  title?: string
  data: any[]
  categories: string[]
  index: string
  colors?: string[]
  valueFormatter?: (value: number) => string
  yAxisWidth?: number
  showLegend?: boolean
  showYAxis?: boolean
  showXAxis?: boolean
  showGridLines?: boolean
  height?: number
  stacked?: boolean
}

export function AdvancedBarChart({
  title,
  data,
  categories,
  index,
  colors = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))"],
  valueFormatter = (value: number) => value.toString(),
  yAxisWidth = 40,
  showLegend = true,
  showYAxis = true,
  showXAxis = true,
  showGridLines = true,
  height = 300,
  stacked = false,
}: AdvancedBarChartProps) {
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
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          {showGridLines && <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />}
          {showXAxis && (
            <XAxis dataKey={index} stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
          )}
          {showYAxis && (
            <YAxis
              width={yAxisWidth}
              stroke="var(--muted-foreground)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={valueFormatter}
            />
          )}
          <ChartTooltip content={<ChartTooltipContent />} />
          {showLegend && <Legend />}
          {categories.map((category, i) => (
            <Bar
              key={category}
              dataKey={category}
              fill={`var(--color-${category})`}
              stackId={stacked ? "stack" : undefined}
              radius={[4, 4, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
