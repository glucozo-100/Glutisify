"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, Download, Filter, Search } from "lucide-react"
import { useAuthCheck } from "@/utils/auth"

export default function HistoryPage() {
  useAuthCheck()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")

  // Sample history data
  const historyData = [
    {
      id: 1,
      subject: "Sarah Williams",
      platform: "Instagram",
      action: "Post Analysis",
      date: "2023-04-25",
      time: "14:32",
      details: "Analyzed engagement metrics for recent carousel post",
      status: "completed",
    },
    {
      id: 2,
      subject: "John Doe",
      platform: "TikTok",
      action: "Audience Analysis",
      date: "2023-04-24",
      time: "10:15",
      details: "Generated demographic report for growing audience segment",
      status: "completed",
    },
    {
      id: 3,
      subject: "Alex Johnson",
      platform: "LinkedIn",
      action: "Content Audit",
      date: "2023-04-23",
      time: "16:45",
      details: "Performed content audit for professional articles",
      status: "completed",
    },
    {
      id: 4,
      subject: "Jane Smith",
      platform: "Facebook",
      action: "Performance Report",
      date: "2023-04-22",
      time: "09:30",
      details: "Generated monthly performance report",
      status: "completed",
    },
    {
      id: 5,
      subject: "Sarah Williams",
      platform: "TikTok",
      action: "Trend Analysis",
      date: "2023-04-21",
      time: "11:20",
      details: "Analyzed trending hashtags and content formats",
      status: "completed",
    },
    {
      id: 6,
      subject: "John Doe",
      platform: "Instagram",
      action: "Competitor Analysis",
      date: "2023-04-20",
      time: "15:10",
      details: "Compared performance metrics with top 3 competitors",
      status: "completed",
    },
    {
      id: 7,
      subject: "Alex Johnson",
      platform: "Twitter",
      action: "Sentiment Analysis",
      date: "2023-04-19",
      time: "13:45",
      details: "Analyzed sentiment trends in audience responses",
      status: "completed",
    },
    {
      id: 8,
      subject: "Jane Smith",
      platform: "YouTube",
      action: "Content Strategy",
      date: "2023-04-18",
      time: "10:30",
      details: "Developed content strategy recommendations based on performance data",
      status: "completed",
    },
  ]

  // Filter history data based on search query and active filter
  const filteredData = historyData.filter((item) => {
    const matchesSearch =
      searchQuery === "" ||
      item.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.platform.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.details.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "reports" && item.action.includes("Report")) ||
      (activeFilter === "analysis" && item.action.includes("Analysis")) ||
      (activeFilter === "strategy" && item.action.includes("Strategy"))

    return matchesSearch && matchesFilter
  })

  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <main className="flex-1">
        <DashboardHeader />
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold">Activity History</h2>
              <p className="text-muted-foreground">Track your analysis and reporting activities</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search history..."
                  className="pl-8 w-full sm:w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Calendar className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="gap-1">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="space-y-4" onValueChange={setActiveFilter}>
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="all">All Activities</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="analysis">Analysis</TabsTrigger>
                <TabsTrigger value="strategy">Strategy</TabsTrigger>
              </TabsList>
              <Button variant="outline" size="sm" className="gap-1">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Your recent analysis and reporting activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 p-4 bg-muted/50 text-sm font-medium">
                      <div className="col-span-3 md:col-span-2">Date & Time</div>
                      <div className="col-span-3 md:col-span-2">Subject</div>
                      <div className="col-span-2 hidden md:block">Platform</div>
                      <div className="col-span-4 md:col-span-2">Action</div>
                      <div className="col-span-2 md:col-span-4 hidden md:block">Details</div>
                    </div>
                    {filteredData.length > 0 ? (
                      filteredData.map((item) => (
                        <div key={item.id} className="grid grid-cols-12 p-4 border-t items-center text-sm">
                          <div className="col-span-3 md:col-span-2">
                            <div>{item.date}</div>
                            <div className="text-xs text-muted-foreground">{item.time}</div>
                          </div>
                          <div className="col-span-3 md:col-span-2 font-medium">{item.subject}</div>
                          <div className="col-span-2 hidden md:block">
                            <Badge variant="outline">{item.platform}</Badge>
                          </div>
                          <div className="col-span-4 md:col-span-2">{item.action}</div>
                          <div className="col-span-2 md:col-span-4 hidden md:block text-muted-foreground">
                            {item.details}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-muted-foreground">No matching activities found</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Report Activities</CardTitle>
                  <CardDescription>Your report generation activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 p-4 bg-muted/50 text-sm font-medium">
                      <div className="col-span-3 md:col-span-2">Date & Time</div>
                      <div className="col-span-3 md:col-span-2">Subject</div>
                      <div className="col-span-2 hidden md:block">Platform</div>
                      <div className="col-span-4 md:col-span-2">Action</div>
                      <div className="col-span-2 md:col-span-4 hidden md:block">Details</div>
                    </div>
                    {filteredData.length > 0 ? (
                      filteredData.map((item) => (
                        <div key={item.id} className="grid grid-cols-12 p-4 border-t items-center text-sm">
                          <div className="col-span-3 md:col-span-2">
                            <div>{item.date}</div>
                            <div className="text-xs text-muted-foreground">{item.time}</div>
                          </div>
                          <div className="col-span-3 md:col-span-2 font-medium">{item.subject}</div>
                          <div className="col-span-2 hidden md:block">
                            <Badge variant="outline">{item.platform}</Badge>
                          </div>
                          <div className="col-span-4 md:col-span-2">{item.action}</div>
                          <div className="col-span-2 md:col-span-4 hidden md:block text-muted-foreground">
                            {item.details}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-muted-foreground">No matching activities found</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analysis" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Analysis Activities</CardTitle>
                  <CardDescription>Your data analysis activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 p-4 bg-muted/50 text-sm font-medium">
                      <div className="col-span-3 md:col-span-2">Date & Time</div>
                      <div className="col-span-3 md:col-span-2">Subject</div>
                      <div className="col-span-2 hidden md:block">Platform</div>
                      <div className="col-span-4 md:col-span-2">Action</div>
                      <div className="col-span-2 md:col-span-4 hidden md:block">Details</div>
                    </div>
                    {filteredData.length > 0 ? (
                      filteredData.map((item) => (
                        <div key={item.id} className="grid grid-cols-12 p-4 border-t items-center text-sm">
                          <div className="col-span-3 md:col-span-2">
                            <div>{item.date}</div>
                            <div className="text-xs text-muted-foreground">{item.time}</div>
                          </div>
                          <div className="col-span-3 md:col-span-2 font-medium">{item.subject}</div>
                          <div className="col-span-2 hidden md:block">
                            <Badge variant="outline">{item.platform}</Badge>
                          </div>
                          <div className="col-span-4 md:col-span-2">{item.action}</div>
                          <div className="col-span-2 md:col-span-4 hidden md:block text-muted-foreground">
                            {item.details}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-muted-foreground">No matching activities found</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="strategy" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Strategy Activities</CardTitle>
                  <CardDescription>Your strategy development activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 p-4 bg-muted/50 text-sm font-medium">
                      <div className="col-span-3 md:col-span-2">Date & Time</div>
                      <div className="col-span-3 md:col-span-2">Subject</div>
                      <div className="col-span-2 hidden md:block">Platform</div>
                      <div className="col-span-4 md:col-span-2">Action</div>
                      <div className="col-span-2 md:col-span-4 hidden md:block">Details</div>
                    </div>
                    {filteredData.length > 0 ? (
                      filteredData.map((item) => (
                        <div key={item.id} className="grid grid-cols-12 p-4 border-t items-center text-sm">
                          <div className="col-span-3 md:col-span-2">
                            <div>{item.date}</div>
                            <div className="text-xs text-muted-foreground">{item.time}</div>
                          </div>
                          <div className="col-span-3 md:col-span-2 font-medium">{item.subject}</div>
                          <div className="col-span-2 hidden md:block">
                            <Badge variant="outline">{item.platform}</Badge>
                          </div>
                          <div className="col-span-4 md:col-span-2">{item.action}</div>
                          <div className="col-span-2 md:col-span-4 hidden md:block text-muted-foreground">
                            {item.details}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-muted-foreground">No matching activities found</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
