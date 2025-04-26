"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

export function ActivityTimelineChart() {
  // Sample data
  const data = [
    {
      date: "2023-01",
      instagram: 40,
      facebook: 24,
      tiktok: 10,
      linkedin: 15,
    },
    {
      date: "2023-02",
      instagram: 30,
      facebook: 13,
      tiktok: 23,
      linkedin: 8,
    },
    {
      date: "2023-03",
      instagram: 20,
      facebook: 98,
      tiktok: 30,
      linkedin: 12,
    },
    {
      date: "2023-04",
      instagram: 27,
      facebook: 39,
      tiktok: 45,
      linkedin: 20,
    },
    {
      date: "2023-05",
      instagram: 18,
      facebook: 48,
      tiktok: 38,
      linkedin: 25,
    },
    {
      date: "2023-06",
      instagram: 23,
      facebook: 38,
      tiktok: 43,
      linkedin: 30,
    },
    {
      date: "2023-07",
      instagram: 34,
      facebook: 43,
      tiktok: 52,
      linkedin: 35,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="instagram" stackId="1" stroke="#E1306C" fill="#E1306C" />
        <Area type="monotone" dataKey="facebook" stackId="1" stroke="#4267B2" fill="#4267B2" />
        <Area type="monotone" dataKey="tiktok" stackId="1" stroke="#000000" fill="#000000" />
        <Area type="monotone" dataKey="linkedin" stackId="1" stroke="#0077B5" fill="#0077B5" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
