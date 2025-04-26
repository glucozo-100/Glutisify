"use client"

import { useEffect, useRef } from "react"

export function DashboardCharts() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Sample data
    const data = [12, 19, 3, 5, 2, 3, 20, 33, 23, 12, 43, 18, 24, 29]
    const labels = Array.from({ length: data.length }, (_, i) => `Day ${i + 1}`)

    // Chart dimensions
    const chartWidth = canvas.width - 60
    const chartHeight = canvas.height - 60
    const chartX = 40
    const chartY = 20

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw axes
    ctx.beginPath()
    ctx.moveTo(chartX, chartY)
    ctx.lineTo(chartX, chartY + chartHeight)
    ctx.lineTo(chartX + chartWidth, chartY + chartHeight)
    ctx.strokeStyle = "#ddd"
    ctx.stroke()

    // Find max value for scaling
    const maxValue = Math.max(...data) * 1.1

    // Draw data points and lines
    ctx.beginPath()
    ctx.moveTo(chartX + (chartWidth / (data.length - 1)) * 0, chartY + chartHeight - (data[0] / maxValue) * chartHeight)

    for (let i = 1; i < data.length; i++) {
      const x = chartX + (chartWidth / (data.length - 1)) * i
      const y = chartY + chartHeight - (data[i] / maxValue) * chartHeight
      ctx.lineTo(x, y)
    }

    ctx.strokeStyle = "#3b82f6"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw points
    for (let i = 0; i < data.length; i++) {
      const x = chartX + (chartWidth / (data.length - 1)) * i
      const y = chartY + chartHeight - (data[i] / maxValue) * chartHeight

      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fillStyle = "#3b82f6"
      ctx.fill()
    }

    // Draw labels
    ctx.fillStyle = "#888"
    ctx.font = "10px sans-serif"
    ctx.textAlign = "center"

    for (let i = 0; i < data.length; i += 2) {
      const x = chartX + (chartWidth / (data.length - 1)) * i
      ctx.fillText(labels[i], x, chartY + chartHeight + 20)
    }
  }, [])

  return (
    <div className="w-full h-[300px]">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
