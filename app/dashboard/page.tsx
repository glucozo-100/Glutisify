"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { RecentActivities } from "@/components/recent-activities"
import { SubjectOverview } from "@/components/subject-overview"
import { EngagementChart } from "@/components/charts/engagement-chart"
import { PlatformDistributionChart } from "@/components/charts/platform-distribution-chart"
import { ActivityTimelineChart } from "@/components/charts/activity-timeline-chart"
import { ContentTypeChart } from "@/components/charts/content-type-chart"
import { GrowthChart } from "@/components/charts/growth-chart"
import { SentimentAnalysisChart } from "@/components/charts/sentiment-analysis-chart"
import { BubbleChart } from "@/components/charts/bubble-chart"
import { TreemapChart } from "@/components/charts/treemap-chart"
import { FunnelChart } from "@/components/charts/funnel-chart"
import { ScatterPlot } from "@/components/charts/scatter-plot"
import { CalendarHeatmap } from "@/components/charts/calendar-heatmap"
import { useSearchParams } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { RefreshCw, Download, BarChart4, TrendingUp, Zap, Layers } from "lucide-react"
import { DatePickerWithRange } from "@/components/date-picker-with-range"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

interface DateRange {
  from: Date | null | undefined
  to: Date | null | undefined
}

export default function DashboardPage() {
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab") || "overview"
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(new Date().setDate(new Date().getDate() - 7)),
    to: new Date(),
  })

  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <main className="flex-1">
        <DashboardHeader />
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold gradient-text">Dashboard</h2>
              <p className="text-muted-foreground">Monitor and analyze your tracked subjects</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <DatePickerWithRange date={dateRange} setDate={setDateRange} />
              <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="gap-1 rounded-full px-4">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <Tabs defaultValue={tabParam} className="space-y-6 enhanced-tabs">
            <TabsList className="w-full sm:w-auto justify-start">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BarChart4 className="h-4 w-4" />
                <span>Overview</span>
              </TabsTrigger>
              <TabsTrigger value="engagement" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span>Engagement</span>
              </TabsTrigger>
              <TabsTrigger value="growth" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span>Growth</span>
              </TabsTrigger>
              <TabsTrigger value="advanced" className="flex items-center gap-2">
                <Layers className="h-4 w-4" />
                <span>Advanced</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0 animate-fade-in">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-1 card-hover shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Platform Distribution</CardTitle>
                    <CardDescription>Followers across platforms</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <PlatformDistributionChart />
                  </CardContent>
                </Card>
                <Card className="col-span-1 card-hover shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Content Types</CardTitle>
                    <CardDescription>Distribution by content format</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ContentTypeChart />
                  </CardContent>
                </Card>
                <Card className="col-span-1 card-hover shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Sentiment Analysis</CardTitle>
                    <CardDescription>Audience sentiment by platform</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <SentimentAnalysisChart />
                  </CardContent>
                </Card>
                <Card className="col-span-1 md:col-span-2 card-hover shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Activity Timeline</CardTitle>
                    <CardDescription>Posts over time by platform</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ActivityTimelineChart />
                  </CardContent>
                </Card>
                <Card className="card-hover shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Recent Activities</CardTitle>
                    <CardDescription>Latest posts and interactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentActivities />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="engagement" className="mt-0 animate-fade-in">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-1 md:col-span-2 card-hover shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Engagement Metrics</CardTitle>
                    <CardDescription>Likes, comments, and shares over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <EngagementChart />
                  </CardContent>
                </Card>
                <Card className="card-hover shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Subject Overview</CardTitle>
                    <CardDescription>Performance by subject</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SubjectOverview />
                  </CardContent>
                </Card>
                <Card className="col-span-1 md:col-span-3 card-hover shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Hashtag Performance</CardTitle>
                    <CardDescription>Reach vs. Engagement Rate</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <ScatterPlot />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="growth" className="mt-0 animate-fade-in">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-1 md:col-span-2 card-hover shadow-md">
                  <CardHeader className="pb-2 flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Follower Growth</CardTitle>
                      <CardDescription>Growth trends across platforms</CardDescription>
                    </div>
                    <Badge variant="outline" className="ml-2">
                      Last 7 months
                    </Badge>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <GrowthChart metric="followers" />
                  </CardContent>
                </Card>
                <Card className="card-hover shadow-md">
                  <CardHeader className="pb-2 flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Engagement Rate</CardTitle>
                      <CardDescription>Engagement % by platform</CardDescription>
                    </div>
                    <Badge variant="outline" className="ml-2">
                      Last 7 months
                    </Badge>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <GrowthChart metric="engagement" />
                  </CardContent>
                </Card>
                <Card className="col-span-1 md:col-span-3 card-hover shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Social Media Conversion Funnel</CardTitle>
                    <CardDescription>From impressions to conversions</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <FunnelChart />
                  </CardContent>
                </Card>
                <Card className="col-span-1 md:col-span-3 card-hover shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Growth Metrics Summary</CardTitle>
                    <CardDescription>Key performance indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Total Followers</p>
                        <h3 className="text-2xl font-bold">24.5K</h3>
                        <div className="flex items-center mt-1">
                          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                            +12.5%
                          </Badge>
                          <span className="text-xs text-muted-foreground ml-2">vs last month</span>
                        </div>
                      </div>
                      <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Avg. Engagement</p>
                        <h3 className="text-2xl font-bold">5.8%</h3>
                        <div className="flex items-center mt-1">
                          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                            +0.7%
                          </Badge>
                          <span className="text-xs text-muted-foreground ml-2">vs last month</span>
                        </div>
                      </div>
                      <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">New Followers</p>
                        <h3 className="text-2xl font-bold">3.2K</h3>
                        <div className="flex items-center mt-1">
                          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                            +18.3%
                          </Badge>
                          <span className="text-xs text-muted-foreground ml-2">vs last month</span>
                        </div>
                      </div>
                      <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Content Performance</p>
                        <h3 className="text-2xl font-bold">92.7%</h3>
                        <div className="flex items-center mt-1">
                          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                            +5.2%
                          </Badge>
                          <span className="text-xs text-muted-foreground ml-2">vs last month</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="advanced" className="mt-0 animate-fade-in">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="col-span-1 md:col-span-2 card-hover shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Platform Performance Comparison</CardTitle>
                    <CardDescription>Followers, engagement rate, and posting frequency</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <BubbleChart />
                  </CardContent>
                </Card>
                <Card className="col-span-1 md:col-span-1 card-hover shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Content Category Distribution</CardTitle>
                    <CardDescription>Engagement by content type</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <TreemapChart />
                  </CardContent>
                </Card>
                <Card className="col-span-1 md:col-span-1 card-hover shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Posting Schedule Analysis</CardTitle>
                    <CardDescription>Optimal posting times</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <CalendarHeatmap />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
