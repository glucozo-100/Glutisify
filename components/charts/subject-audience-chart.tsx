"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export function SubjectAudienceChart() {
  const [selectedSubject, setSelectedSubject] = useState("all")

  // Sample data for age demographics
  const ageData = [
    {
      age: "13-17",
      male: 5,
      female: 8,
      other: 1,
    },
    {
      age: "18-24",
      male: 25,
      female: 32,
      other: 3,
    },
    {
      age: "25-34",
      male: 30,
      female: 28,
      other: 4,
    },
    {
      age: "35-44",
      male: 18,
      female: 15,
      other: 2,
    },
    {
      age: "45-54",
      male: 10,
      female: 8,
      other: 1,
    },
    {
      age: "55+",
      male: 7,
      female: 6,
      other: 1,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Select value={selectedSubject} onValueChange={setSelectedSubject}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subjects</SelectItem>
            <SelectItem value="john-doe">John Doe</SelectItem>
            <SelectItem value="jane-smith">Jane Smith</SelectItem>
            <SelectItem value="alex-johnson">Alex Johnson</SelectItem>
            <SelectItem value="sarah-williams">Sarah Williams</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={ageData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" />
          <YAxis label={{ value: "Percentage (%)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
          <Bar dataKey="male" name="Male" fill="#8884d8" />
          <Bar dataKey="female" name="Female" fill="#82ca9d" />
          <Bar dataKey="other" name="Other" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
