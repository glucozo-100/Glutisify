"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "@/components/ui/chart"
import { ChartContainer } from "@/components/ui/chart"

interface AdvancedPieChartProps {
  title?: string
  data: { name: string; value: number }[]
  colors?: string[]
  valueFormatter?: (value: number) => string
  height?: number
  innerRadius?: number
  outerRadius?: number
  paddingAngle?: number
}

export function AdvancedPieChart({
  title,
  data,
  colors = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))"],
  valueFormatter = (value: number) => value.toString(),
  height = 300,
  innerRadius = 0,
  outerRadius = 80,
  paddingAngle = 0,
}: AdvancedPieChartProps) {
  // Create config object for ChartContainer
  const config: Record<string, { label: string; color: string }> = {}
  data.forEach((item, i) => {
    config[item.name] = {
      label: item.name,
      color: colors[i % colors.length],
    }
  })

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border rounded-md p-2 shadow-md">
          <p className="text-sm font-medium">{payload[0].name}</p>
          <p className="text-sm">{valueFormatter(payload[0].value)}</p>
        </div>
      )
    }
    return null
  }

  return (
    <ChartContainer config={config} className={`w-full ${title ? "pt-4" : ""}`}>
      {title && <h3 className="text-sm font-medium px-6 mb-2">{title}</h3>}
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={paddingAngle}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap justify-center gap-4 py-2">
        {data.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: colors[index % colors.length] }} />
            <span className="text-xs">{entry.name}</span>
          </div>
        ))}
      </div>
    </ChartContainer>
  )
}
