"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ApiUsageChart } from "@/components/charts/api-usage-chart"
import { SystemPerformanceChart } from "@/components/charts/system-performance-chart"
import { StorageUsageChart } from "@/components/charts/storage-usage-chart"
import { UserActivityHeatmap } from "@/components/charts/user-activity-heatmap"
import { ResourceAllocationChart } from "@/components/charts/resource-allocation-chart"

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">Manage your account settings and preferences.</p>
        </div>
      </div>
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage your general account settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Enter your username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="pt">Portuguese</SelectItem>
                    <SelectItem value="ja">Japanese</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="utc">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive notifications via email.</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive push notifications on your device.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Monthly Newsletter</p>
                  <p className="text-sm text-muted-foreground">Receive our monthly newsletter with updates.</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing Communications</p>
                  <p className="text-sm text-muted-foreground">Receive marketing communications from us.</p>
                </div>
                <Switch />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize the look and feel of the application.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Theme</Label>
                <div className="flex items-center space-x-4">
                  <Button variant="outline" className="w-full justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m4.93 4.93 1.41 1.41" />
                      <path d="m17.66 17.66 1.41 1.41" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="m6.34 17.66-1.41 1.41" />
                      <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                    Light
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                    Dark
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      <path d="M2 12h20" />
                    </svg>
                    System
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Font Size</Label>
                <Select defaultValue="medium">
                  <SelectTrigger>
                    <SelectValue placeholder="Select font size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Density</Label>
                <Select defaultValue="comfortable">
                  <SelectTrigger>
                    <SelectValue placeholder="Select density" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="compact">Compact</SelectItem>
                    <SelectItem value="comfortable">Comfortable</SelectItem>
                    <SelectItem value="spacious">Spacious</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="reduce-motion" />
                <Label htmlFor="reduce-motion">Reduce motion</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="advanced" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* System Performance Chart - Full Width */}
            <Card className="col-span-1 lg:col-span-3">
              <CardHeader className="pb-2">
                <CardTitle>System Performance</CardTitle>
                <CardDescription>Real-time monitoring of system resources</CardDescription>
              </CardHeader>
              <CardContent className="h-[350px]">
                <SystemPerformanceChart />
              </CardContent>
            </Card>

            {/* Storage and API Usage - Two Columns */}
            <Card className="col-span-1 lg:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle>API Usage Analytics</CardTitle>
                <CardDescription>Requests, errors, and latency metrics</CardDescription>
              </CardHeader>
              <CardContent className="h-[350px]">
                <ApiUsageChart />
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader className="pb-2">
                <CardTitle>Storage Distribution</CardTitle>
                <CardDescription>Storage allocation by category</CardDescription>
              </CardHeader>
              <CardContent className="h-[350px]">
                <StorageUsageChart />
              </CardContent>
            </Card>

            {/* User Activity Heatmap - Full Width */}
            <Card className="col-span-1 lg:col-span-3">
              <CardHeader className="pb-2">
                <CardTitle>User Activity Patterns</CardTitle>
                <CardDescription>Activity distribution across days and hours</CardDescription>
              </CardHeader>
              <CardContent>
                <UserActivityHeatmap />
              </CardContent>
            </Card>

            {/* System Settings and Resource Allocation - Two Columns */}
            <Card className="col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Configure advanced system parameters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cache-ttl">Cache TTL (seconds)</Label>
                      <Input id="cache-ttl" type="number" defaultValue="3600" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rate-limit">API Rate Limit (requests/min)</Label>
                      <Input id="rate-limit" type="number" defaultValue="100" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeout">Request Timeout (ms)</Label>
                      <Input id="timeout" type="number" defaultValue="30000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="max-connections">Max Connections</Label>
                      <Input id="max-connections" type="number" defaultValue="50" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Debug Mode</p>
                        <p className="text-sm text-muted-foreground">Enable detailed logging</p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Performance Metrics</p>
                        <p className="text-sm text-muted-foreground">Collect detailed performance data</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Auto-Optimization</p>
                        <p className="text-sm text-muted-foreground">Automatically optimize system resources</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Advanced Security</p>
                        <p className="text-sm text-muted-foreground">Enable enhanced security features</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Apply Settings</Button>
              </CardFooter>
            </Card>

            <Card className="col-span-1">
              <CardHeader className="pb-2">
                <CardTitle>Resource Allocation</CardTitle>
                <CardDescription>System resource distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <ResourceAllocationChart />
              </CardContent>
            </Card>

            {/* System Information and Backup/Restore - Three Columns */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>System Information</CardTitle>
                <CardDescription>Current system status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Version</span>
                    <span className="text-sm">v2.5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Last Updated</span>
                    <span className="text-sm">2 days ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Environment</span>
                    <Badge variant="outline">Production</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Database Status</span>
                    <Badge className="bg-green-500">Healthy</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Cache Status</span>
                    <Badge className="bg-green-500">Healthy</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Queue Status</span>
                    <Badge className="bg-yellow-500">Warning</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Refresh Status
                </Button>
              </CardFooter>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Backup & Restore</CardTitle>
                <CardDescription>Manage system backups</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Backup Schedule</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger>
                        <SelectValue placeholder="Select schedule" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Retention Period</Label>
                    <Select defaultValue="30">
                      <SelectTrigger>
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="365">1 year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <Button className="w-full">Create Backup Now</Button>
                <Button variant="outline" className="w-full">
                  Restore from Backup
                </Button>
              </CardFooter>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Webhooks</CardTitle>
                <CardDescription>Configure system webhooks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">User Events</p>
                      <p className="text-sm text-muted-foreground">User registration, login, etc.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Content Events</p>
                      <p className="text-sm text-muted-foreground">Content creation, updates, etc.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">System Events</p>
                      <p className="text-sm text-muted-foreground">System alerts and notifications</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="webhook-url">Webhook URL</Label>
                    <Input id="webhook-url" placeholder="https://your-server.com/webhook" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Webhook Settings</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
