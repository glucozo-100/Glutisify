"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SubjectMetricsCards } from "@/components/subject-metrics-cards"
import { SubjectPerformanceTable } from "@/components/subject-performance-table"
import { SubjectInsightsCard } from "@/components/subject-insights-card"
import { DatePickerWithRange } from "@/components/date-range-picker"
import { Button } from "@/components/ui/button"
import { Download, RefreshCw } from "lucide-react"
import { AdvancedAreaChart } from "@/components/charts/advanced-area-chart"
import { AdvancedBarChart } from "@/components/charts/advanced-bar-chart"
import { AdvancedPieChart } from "@/components/charts/advanced-pie-chart"
import { AdvancedRadarChart } from "@/components/charts/advanced-radar-chart"
import { useAuthCheck } from "@/utils/auth"

export default function DashboardPage() {
  useAuthCheck()
  const [dateRange, setDateRange] = useState({ from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), to: new Date() })

  // Sample data for charts
  const engagementData = [
    { date: "Jan", Instagram: 4000, Facebook: 2400, TikTok: 1200, LinkedIn: 800 },
    { date: "Feb", Instagram: 3000, Facebook: 1398, TikTok: 2210, LinkedIn: 900 },
    { date: "Mar", Instagram: 2000, Facebook: 9800, TikTok: 2290, LinkedIn: 1100 },
    { date: "Apr", Instagram: 2780, Facebook: 3908, TikTok: 2000, LinkedIn: 1300 },
    { date: "May", Instagram: 1890, Facebook: 4800, TikTok: 2181, LinkedIn: 1500 },
    { date: "Jun", Instagram: 2390, Facebook: 3800, TikTok: 2500, LinkedIn: 1700 },
    { date: "Jul", Instagram: 3490, Facebook: 4300, TikTok: 2100, LinkedIn: 2000 },
  ]

  const platformData = [
    { name: "Instagram", value: 40 },
    { name: "Facebook", value: 30 },
    { name: "TikTok", value: 20 },
    { name: "LinkedIn", value: 10 },
  ]

  const contentTypeData = [
    { name: "Photos", value: 45 },
    { name: "Videos", value: 35 },
    { name: "Text", value: 15 },
    { name: "Links", value: 5 },
  ]

  const subjectPerformanceData = [
    { subject: "Engagement", "John Doe": 75, "Jane Smith": 60, "Alex Johnson": 70, "Sarah Williams": 90 },
    { subject: "Growth", "John Doe": 65, "Jane Smith": 45, "Alex Johnson": 80, "Sarah Williams": 85 },
    { subject: "Consistency", "John Doe": 80, "Jane Smith": 70, "Alex Johnson": 65, "Sarah Williams": 75 },
    { subject: "Reach", "John Doe": 70, "Jane Smith": 55, "Alex Johnson": 60, "Sarah Williams": 95 },
    { subject: "Sentiment", "John Doe": 85, "Jane Smith": 65, "Alex Johnson": 75, "Sarah Williams": 80 },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <main className="flex-1">
        <DashboardHeader />
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold">Dashboard</h2>
              <p className="text-muted-foreground">Monitor and analyze your tracked subjects</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <DatePickerWithRange date={dateRange} setDate={setDateRange} />
              <Button variant="outline" size="icon">
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="gap-1">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <SubjectMetricsCards />

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Engagement Over Time</CardTitle>
                    <CardDescription>Track engagement metrics across platforms</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <AdvancedAreaChart
                      data={engagementData}
                      categories={["Instagram", "Facebook", "TikTok", "LinkedIn"]}
                      index="date"
                      valueFormatter={(value) => `${value.toLocaleString()}`}
                    />
                  </CardContent>
                </Card>

                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Platform Distribution</CardTitle>
                    <CardDescription>Activity distribution across platforms</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <AdvancedPieChart
                      data={platformData}
                      valueFormatter={(value) => `${value}%`}
                      innerRadius={30}
                      paddingAngle={2}
                    />
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Content Type Breakdown</CardTitle>
                    <CardDescription>Distribution of content types</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <AdvancedBarChart
                      data={contentTypeData.map((item) => ({ name: item.name, value: item.value }))}
                      categories={["value"]}
                      index="name"
                      valueFormatter={(value) => `${value}%`}
                    />
                  </CardContent>
                </Card>

                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Subject Performance</CardTitle>
                    <CardDescription>Performance metrics across subjects</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <AdvancedRadarChart
                      data={subjectPerformanceData}
                      categories={["John Doe", "Jane Smith", "Alex Johnson", "Sarah Williams"]}
                      index="subject"
                    />
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Subject Performance</CardTitle>
                  <CardDescription>Detailed performance metrics for tracked subjects</CardDescription>
                </CardHeader>
                <CardContent>
                  <SubjectPerformanceTable />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Growth Trends</CardTitle>
                    <CardDescription>Follower growth over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <AdvancedAreaChart
                      data={engagementData}
                      categories={["Instagram", "Facebook", "TikTok", "LinkedIn"]}
                      index="date"
                      valueFormatter={(value) => `${value.toLocaleString()}`}
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Engagement by Platform</CardTitle>
                    <CardDescription>Comparison of engagement rates</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <AdvancedBarChart
                      data={[
                        { platform: "Instagram", likes: 45, comments: 25, shares: 15 },
                        { platform: "Facebook", likes: 35, comments: 20, shares: 25 },
                        { platform: "TikTok", likes: 55, comments: 35, shares: 30 },
                        { platform: "LinkedIn", likes: 25, comments: 15, shares: 10 },
                      ]}
                      categories={["likes", "comments", "shares"]}
                      index="platform"
                      stacked={true}
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Content Performance</CardTitle>
                    <CardDescription>Performance by content type</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <AdvancedBarChart
                      data={[
                        { type: "Photos", engagement: 3.2 },
                        { type: "Videos", engagement: 5.7 },
                        { type: "Text", engagement: 2.1 },
                        { type: "Links", engagement: 1.8 },
                        { type: "Stories", engagement: 4.5 },
                      ]}
                      categories={["engagement"]}
                      index="type"
                      valueFormatter={(value) => `${value}%`}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Audience Demographics</CardTitle>
                  <CardDescription>Age and gender distribution</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <AdvancedBarChart
                    data={[
                      { age: "13-17", male: 5, female: 8, other: 1 },
                      { age: "18-24", male: 25, female: 32, other: 3 },
                      { age: "25-34", male: 30, female: 28, other: 4 },
                      { age: "35-44", male: 18, female: 15, other: 2 },
                      { age: "45-54", male: 10, female: 8, other: 1 },
                      { age: "55+", male: 7, female: 6, other: 1 },
                    ]}
                    categories={["male", "female", "other"]}
                    index="age"
                    valueFormatter={(value) => `${value}%`}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <SubjectInsightsCard
                  title="Top Performer"
                  subject="Sarah Williams"
                  platform="TikTok"
                  metric="9.5% Engagement Rate"
                  insight="Sarah's TikTok content consistently outperforms other subjects with 2.3x higher engagement than average."
                  recommendation="Focus on replicating Sarah's content style and posting frequency across other subjects."
                />

                <SubjectInsightsCard
                  title="Growth Opportunity"
                  subject="John Doe"
                  platform="Instagram"
                  metric="12.5% Growth Rate"
                  insight="John's follower growth rate has increased by 12.5% in the last 30 days, primarily from video content."
                  recommendation="Increase video content frequency and leverage trending hashtags to maintain growth momentum."
                />

                <SubjectInsightsCard
                  title="Attention Required"
                  subject="Jane Smith"
                  platform="Facebook"
                  metric="-1.3% Engagement Drop"
                  insight="Jane's Facebook engagement has dropped by 1.3% in the last 2 weeks with decreasing post frequency."
                  recommendation="Increase posting frequency and experiment with different content formats to re-engage audience."
                />

                <SubjectInsightsCard
                  title="Content Strategy"
                  subject="Alex Johnson"
                  platform="LinkedIn"
                  metric="3.9% Engagement Rate"
                  insight="Alex's thought leadership posts on LinkedIn receive 45% more engagement than other content types."
                  recommendation="Focus on creating more industry insights and thought leadership content for LinkedIn."
                />

                <SubjectInsightsCard
                  title="Optimal Timing"
                  subject="All Subjects"
                  platform="All Platforms"
                  metric="6-8 PM Peak Time"
                  insight="Content posted between 6-8 PM on weekdays receives 37% higher engagement across all platforms."
                  recommendation="Schedule important posts during this time window to maximize reach and engagement."
                />

                <SubjectInsightsCard
                  title="Hashtag Performance"
                  subject="Sarah Williams"
                  platform="Instagram"
                  metric="5 Top Performing Hashtags"
                  insight="Posts using these 5 hashtags receive 28% higher reach and 15% more engagement on average."
                  recommendation="Incorporate these high-performing hashtags in future posts to increase visibility."
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
