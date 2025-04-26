"use client"

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

export function GrowthChart({ metric = "followers" }) {
  // Sample data
  const followerData = [
    {
      name: "Jan",
      instagram: 4000,
      facebook: 2400,
      tiktok: 1200,
      linkedin: 800,
    },
    {
      name: "Feb",
      instagram: 5000,
      facebook: 2600,
      tiktok: 1800,
      linkedin: 900,
    },
    {
      name: "Mar",
      instagram: 6000,
      facebook: 2900,
      tiktok: 2400,
      linkedin: 1100,
    },
    {
      name: "Apr",
      instagram: 8000,
      facebook: 3200,
      tiktok: 3200,
      linkedin: 1300,
    },
    {
      name: "May",
      instagram: 9000,
      facebook: 3800,
      tiktok: 4000,
      linkedin: 1500,
    },
    {
      name: "Jun",
      instagram: 10000,
      facebook: 4200,
      tiktok: 5000,
      linkedin: 1700,
    },
    {
      name: "Jul",
      instagram: 12000,
      facebook: 4800,
      tiktok: 6500,
      linkedin: 2000,
    },
  ]

  const engagementData = [
    {
      name: "Jan",
      instagram: 4.2,
      facebook: 2.1,
      tiktok: 6.5,
      linkedin: 1.8,
    },
    {
      name: "Feb",
      instagram: 4.5,
      facebook: 2.3,
      tiktok: 7.2,
      linkedin: 1.9,
    },
    {
      name: "Mar",
      instagram: 4.8,
      facebook: 2.5,
      tiktok: 7.8,
      linkedin: 2.1,
    },
    {
      name: "Apr",
      instagram: 5.2,
      facebook: 2.7,
      tiktok: 8.5,
      linkedin: 2.3,
    },
    {
      name: "May",
      instagram: 5.5,
      facebook: 3.0,
      tiktok: 9.2,
      linkedin: 2.5,
    },
    {
      name: "Jun",
      instagram: 5.8,
      facebook: 3.2,
      tiktok: 9.8,
      linkedin: 2.7,
    },
    {
      name: "Jul",
      instagram: 6.2,
      facebook: 3.5,
      tiktok: 10.5,
      linkedin: 3.0,
    },
  ]

  const data = metric === "followers" ? followerData : engagementData

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
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
        <Line type="monotone" dataKey="instagram" stroke="#E1306C" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="facebook" stroke="#4267B2" />
        <Line type="monotone" dataKey="tiktok" stroke="#000000" />
        <Line type="monotone" dataKey="linkedin" stroke="#0077B5" />
      </LineChart>
    </ResponsiveContainer>
  )
}
