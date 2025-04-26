"use client"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

export function EngagementChart({ type = "line" }) {
  // Sample data
  const data = [
    {
      name: "Jan",
      likes: 4000,
      comments: 2400,
      shares: 1200,
      views: 8000,
    },
    {
      name: "Feb",
      likes: 3000,
      comments: 1398,
      shares: 800,
      views: 6500,
    },
    {
      name: "Mar",
      likes: 2000,
      comments: 9800,
      shares: 1800,
      views: 12000,
    },
    {
      name: "Apr",
      likes: 2780,
      comments: 3908,
      shares: 2000,
      views: 14000,
    },
    {
      name: "May",
      likes: 1890,
      comments: 4800,
      shares: 2300,
      views: 15000,
    },
    {
      name: "Jun",
      likes: 2390,
      comments: 3800,
      shares: 2500,
      views: 16500,
    },
    {
      name: "Jul",
      likes: 3490,
      comments: 4300,
      shares: 2800,
      views: 18000,
    },
  ]

  if (type === "area") {
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="likes" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="comments" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="shares" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    )
  }

  if (type === "bar") {
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
          <Bar dataKey="likes" fill="#8884d8" />
          <Bar dataKey="comments" fill="#82ca9d" />
          <Bar dataKey="shares" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    )
  }

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
        <Line type="monotone" dataKey="likes" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="comments" stroke="#82ca9d" />
        <Line type="monotone" dataKey="shares" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  )
}
