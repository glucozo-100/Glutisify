"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

export function BarChart3() {
  // Sample data
  const data = [
    {
      name: "Jan",
      instagram: 4000,
      facebook: 2400,
      tiktok: 2400,
    },
    {
      name: "Feb",
      instagram: 3000,
      facebook: 1398,
      tiktok: 2210,
    },
    {
      name: "Mar",
      instagram: 2000,
      facebook: 9800,
      tiktok: 2290,
    },
    {
      name: "Apr",
      instagram: 2780,
      facebook: 3908,
      tiktok: 2000,
    },
    {
      name: "May",
      instagram: 1890,
      facebook: 4800,
      tiktok: 2181,
    },
    {
      name: "Jun",
      instagram: 2390,
      facebook: 3800,
      tiktok: 2500,
    },
    {
      name: "Jul",
      instagram: 3490,
      facebook: 4300,
      tiktok: 2100,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="instagram" fill="#E1306C" />
        <Bar dataKey="facebook" fill="#4267B2" />
        <Bar dataKey="tiktok" fill="#000000" />
      </BarChart>
    </ResponsiveContainer>
  )
}
