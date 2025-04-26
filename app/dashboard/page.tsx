"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { RecentActivities } from "@/components/recent-activities"
import { SubjectOverview } from "@/components/subject-overview"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calendar, Download, Filter, RefreshCw } from "lucide-react"
import { DatePickerWithRange } from "@/components/date-range-picker"
import { EngagementChart } from "@/components/charts/engagement-chart"
import { PlatformDistributionChart } from "@/components/charts/platform-distribution-chart"
import { ActivityTimelineChart } from "@/components/charts/activity-timeline-chart"
import { ContentTypeChart } from "@/components/charts/content-type-chart"
import { GrowthChart } from "@/components/charts/growth-chart"
import { SentimentAnalysisChart } from "@/components/charts/sentiment-analysis-chart"
import { SubjectComparisonChart } from "@/components/charts/subject-comparison-chart"
import { SubjectPerformanceTable } from "@/components/subject-performance-table"
import { SubjectMetricsCards } from "@/components/subject-metrics-cards"
import { SubjectActivityHeatmap } from "@/components/charts/subject-activity-heatmap"
import { SubjectEngagementRadar } from "@/components/charts/subject-engagement-radar"
import { SubjectGrowthComparison } from "@/components/charts/subject-growth-comparison"
import { SubjectInsightsCard } from "@/components/subject-insights-card"
import { SubjectAudienceChart } from "@/components/charts/subject-audience-chart"
import { SubjectContentPerformance } from "@/components/charts/subject-content-performance"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useAuthCheck } from "@/utils/auth"

export default function DashboardPage() {
  useAuthCheck() // This will redirect to login if not authenticated

  const [selectedSubject, setSelectedSubject] = useState("all")
  const [selectedPlatform, setSelectedPlatform] = useState("all")
  const [dateRange, setDateRange] = useState({ from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), to: new Date() })
  const [comparisonMode, setComparisonMode] = useState(false)
  const [comparedSubjects, setComparedSubjects] = useState<string[]>([])

  const subjects = [
    { value: "all", label: "All Subjects" },
    { value: "john-doe", label: "John Doe" },
    { value: "jane-smith", label: "Jane Smith" },
    { value: "alex-johnson", label: "Alex Johnson" },
    { value: "sarah-williams", label: "Sarah Williams" },
  ]

  const platforms = [
    { value: "all", label: "All Platforms" },
    { value: "instagram", label: "Instagram" },
    { value: "facebook", label: "Facebook" },
    { value: "tiktok", label: "TikTok" },
    { value: "linkedin", label: "LinkedIn" },
  ]

  const toggleComparisonMode = () => {
    setComparisonMode(!comparisonMode)
    if (comparisonMode) {
      setComparedSubjects([])
    }
  }

  const toggleSubjectComparison = (subjectValue: string) => {
    if (comparedSubjects.includes(subjectValue)) {
      setComparedSubjects(comparedSubjects.filter((s) => s !== subjectValue))
    } else {
      setComparedSubjects([...comparedSubjects, subjectValue])
    }
  }

  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1">
        <DashboardHeader />
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
              <p className="text-muted-foreground">Track and analyze social media performance</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject.value} value={subject.value}>
                      {subject.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  {platforms.map((platform) => (
                    <SelectItem key={platform.value} value={platform.value}>
                      {platform.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <DatePickerWithRange date={dateRange} setDate={setDateRange} />
              <Button variant="outline" size="icon">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="subjects">Subject Analysis</TabsTrigger>
                <TabsTrigger value="engagement">Engagement</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="growth">Growth</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <Button
                  variant={comparisonMode ? "default" : "outline"}
                  size="sm"
                  className="gap-1"
                  onClick={toggleComparisonMode}
                >
                  <Filter className="h-4 w-4" />
                  {comparisonMode ? "Exit Comparison" : "Compare Subjects"}
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>

            {comparisonMode && (
              <Card className="mb-4">
                <CardHeader className="pb-3">
                  <CardTitle>Subject Comparison</CardTitle>
                  <CardDescription>Select subjects to compare their performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {subjects
                      .filter((s) => s.value !== "all")
                      .map((subject) => (
                        <Button
                          key={subject.value}
                          variant={comparedSubjects.includes(subject.value) ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleSubjectComparison(subject.value)}
                        >
                          {subject.label}
                        </Button>
                      ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <TabsContent value="overview" className="space-y-4">
              {/* Executive Summary Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Executive Summary</CardTitle>
                  <CardDescription>Key metrics and insights across all tracked subjects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Total Engagement</span>
                        <Badge>+12.5%</Badge>
                      </div>
                      <div className="text-2xl font-bold">248,392</div>
                      <Progress value={78} className="h-2" />
                      <p className="text-xs text-muted-foreground">78% of target reached</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Audience Growth</span>
                        <Badge>+8.3%</Badge>
                      </div>
                      <div className="text-2xl font-bold">15,843</div>
                      <Progress value={65} className="h-2" />
                      <p className="text-xs text-muted-foreground">65% of target reached</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Content Performance</span>
                        <Badge variant="outline">Average</Badge>
                      </div>
                      <div className="text-2xl font-bold">7.4/10</div>
                      <Progress value={74} className="h-2" />
                      <p className="text-xs text-muted-foreground">Based on engagement rate</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Sentiment Score</span>
                        <Badge className="bg-green-500">Positive</Badge>
                      </div>
                      <div className="text-2xl font-bold">8.2/10</div>
                      <Progress value={82} className="h-2" />
                      <p className="text-xs text-muted-foreground">Based on audience reactions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Subject Metrics Cards */}
              <SubjectMetricsCards />

              {/* Activity Timeline and Platform Distribution */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Activity Timeline</CardTitle>
                    <CardDescription>Activity frequency across platforms over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ActivityTimelineChart />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Platform Distribution</CardTitle>
                    <CardDescription>Activity distribution by platform</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <PlatformDistributionChart />
                  </CardContent>
                </Card>
              </div>

              {/* Subject Performance Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Subject Performance Overview</CardTitle>
                  <CardDescription>Comparative analysis of all tracked subjects</CardDescription>
                </CardHeader>
                <CardContent>
                  <SubjectPerformanceTable />
                </CardContent>
              </Card>

              {/* Content Types and Recent Activities */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Content Types</CardTitle>
                    <CardDescription>Distribution of content by type</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ContentTypeChart />
                  </CardContent>
                </Card>
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                    <CardDescription>Latest activities from your tracked subjects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentActivities />
                  </CardContent>
                </Card>
              </div>

              {/* Subject Insights Cards */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <SubjectInsightsCard
                  title="Top Performing Subject"
                  subject="Sarah Williams"
                  platform="TikTok"
                  metric="15.2K new followers"
                  insight="Content about dance tutorials is performing exceptionally well, with 43% higher engagement than other content types."
                  recommendation="Consider increasing frequency of dance tutorial content and collaborating with other dancers."
                />
                <SubjectInsightsCard
                  title="Most Improved Subject"
                  subject="Alex Johnson"
                  platform="LinkedIn"
                  metric="+127% engagement growth"
                  insight="Professional thought leadership articles are gaining significant traction with senior industry professionals."
                  recommendation="Focus on industry-specific content and increase posting frequency on LinkedIn."
                />
                <SubjectInsightsCard
                  title="Needs Attention"
                  subject="John Doe"
                  platform="Facebook"
                  metric="-12% engagement decline"
                  insight="Recent content has seen declining engagement rates and negative sentiment in comments."
                  recommendation="Review content strategy and increase community management efforts to address concerns."
                />
              </div>
            </TabsContent>

            <TabsContent value="subjects" className="space-y-4">
              {comparisonMode && comparedSubjects.length > 0 ? (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle>Subject Comparison</CardTitle>
                      <CardDescription>
                        Comparing {comparedSubjects.length} subjects across key performance metrics
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="h-[400px]">
                      <SubjectComparisonChart subjects={comparedSubjects} />
                    </CardContent>
                  </Card>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Growth Comparison</CardTitle>
                        <CardDescription>Follower growth rate comparison</CardDescription>
                      </CardHeader>
                      <CardContent className="h-[350px]">
                        <SubjectGrowthComparison subjects={comparedSubjects} />
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Engagement Metrics</CardTitle>
                        <CardDescription>Comparative engagement analysis</CardDescription>
                      </CardHeader>
                      <CardContent className="h-[350px]">
                        <SubjectEngagementRadar subjects={comparedSubjects} />
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Content Performance Comparison</CardTitle>
                      <CardDescription>How different content types perform across subjects</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[400px]">
                      <SubjectContentPerformance subjects={comparedSubjects} />
                    </CardContent>
                  </Card>
                </>
              ) : (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle>Subject Overview</CardTitle>
                      <CardDescription>Performance metrics for all tracked subjects</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <SubjectOverview />
                    </CardContent>
                  </Card>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Subject Activity Heatmap</CardTitle>
                        <CardDescription>Activity patterns by day and hour</CardDescription>
                      </CardHeader>
                      <CardContent className="h-[350px]">
                        <SubjectActivityHeatmap />
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Subject Engagement Metrics</CardTitle>
                        <CardDescription>Key engagement metrics by subject</CardDescription>
                      </CardHeader>
                      <CardContent className="h-[350px]">
                        <SubjectEngagementRadar />
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Audience Demographics</CardTitle>
                        <CardDescription>Audience breakdown by age and gender</CardDescription>
                      </CardHeader>
                      <CardContent className="h-[350px]">
                        <SubjectAudienceChart />
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Content Performance</CardTitle>
                        <CardDescription>Performance by content type</CardDescription>
                      </CardHeader>
                      <CardContent className="h-[350px]">
                        <SubjectContentPerformance />
                      </CardContent>
                    </Card>
                  </div>
                </>
              )}
            </TabsContent>

            <TabsContent value="engagement" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Engagement Metrics</CardTitle>
                    <CardDescription>Likes, comments, shares and views over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <EngagementChart />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Sentiment Analysis</CardTitle>
                    <CardDescription>Comment sentiment distribution</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <SentimentAnalysisChart />
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Engagement by Time of Day</CardTitle>
                  <CardDescription>When your audience is most active</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <SubjectActivityHeatmap />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Content</CardTitle>
                  <CardDescription>Content with highest engagement rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 p-4 bg-muted/50 font-medium text-sm">
                      <div className="col-span-5">Content</div>
                      <div className="col-span-2">Platform</div>
                      <div className="col-span-1">Likes</div>
                      <div className="col-span-1">Comments</div>
                      <div className="col-span-1">Shares</div>
                      <div className="col-span-2">Engagement Rate</div>
                    </div>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="grid grid-cols-12 p-4 border-t items-center">
                        <div className="col-span-5 flex items-center gap-3">
                          <div className="w-10 h-10 bg-muted rounded flex-shrink-0"></div>
                          <div>
                            <div className="font-medium">Summer vacation highlights</div>
                            <div className="text-xs text-muted-foreground">John Doe • 2 days ago</div>
                          </div>
                        </div>
                        <div className="col-span-2">Instagram</div>
                        <div className="col-span-1">{(Math.random() * 10000).toFixed(0)}</div>
                        <div className="col-span-1">{(Math.random() * 1000).toFixed(0)}</div>
                        <div className="col-span-1">{(Math.random() * 500).toFixed(0)}</div>
                        <div className="col-span-2 font-medium">{(Math.random() * 10).toFixed(2)}%</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="content" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Content Type Distribution</CardTitle>
                    <CardDescription>Breakdown of content by type</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ContentTypeChart />
                  </CardContent>
                </Card>
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Content Performance</CardTitle>
                    <CardDescription>Engagement by content type</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <EngagementChart />
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Content Calendar</CardTitle>
                  <CardDescription>Content posting schedule and frequency</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <div className="flex items-center justify-center h-full">
                    <Calendar className="h-16 w-16 text-muted-foreground" />
                    <p className="ml-4 text-muted-foreground">Content calendar visualization will be displayed here</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Content</CardTitle>
                  <CardDescription>Latest content from tracked subjects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="border rounded-lg overflow-hidden">
                        <div className="h-40 bg-muted"></div>
                        <div className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-primary/20"></div>
                            <span className="text-sm font-medium">John Doe</span>
                          </div>
                          <p className="text-sm line-clamp-2">
                            This is a sample content post with some description text that might span multiple lines.
                          </p>
                          <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                            <span>Instagram</span>
                            <span>2 days ago</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="growth" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Follower Growth</CardTitle>
                    <CardDescription>Follower count over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <GrowthChart />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Engagement Growth</CardTitle>
                    <CardDescription>Engagement rate over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <GrowthChart metric="engagement" />
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Growth Comparison</CardTitle>
                  <CardDescription>Compare growth metrics across subjects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-7 p-4 bg-muted/50 font-medium text-sm">
                      <div className="col-span-2">Subject</div>
                      <div className="col-span-1">Platform</div>
                      <div className="col-span-1">Current Followers</div>
                      <div className="col-span-1">Monthly Growth</div>
                      <div className="col-span-1">Engagement Rate</div>
                      <div className="col-span-1">Trend</div>
                    </div>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="grid grid-cols-7 p-4 border-t items-center">
                        <div className="col-span-2 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-muted"></div>
                          <span>John Doe</span>
                        </div>
                        <div className="col-span-1">Instagram</div>
                        <div className="col-span-1">{(Math.random() * 100000).toFixed(0)}</div>
                        <div className="col-span-1">+{(Math.random() * 10).toFixed(1)}%</div>
                        <div className="col-span-1">{(Math.random() * 5).toFixed(2)}%</div>
                        <div className="col-span-1">
                          <div className="w-20 h-10 bg-muted rounded"></div>
                        </div>
                      </div>
                    ))}
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
