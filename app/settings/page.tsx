"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useAuthCheck } from "@/utils/auth"

export default function SettingsPage() {
  useAuthCheck()

  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const [theme, setTheme] = useState("system")
  const [language, setLanguage] = useState("english")
  const [dataRetention, setDataRetention] = useState(30)
  const [refreshRate, setRefreshRate] = useState("medium")

  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1 overflow-auto">
        <DashboardHeader />
        <div className="p-4 md:p-6 max-w-6xl mx-auto">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">Settings</h2>
            <p className="text-muted-foreground">Manage your application preferences</p>
          </div>

          <Tabs defaultValue="general" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="privacy">Privacy & Data</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Manage your general application settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-medium">Appearance</h3>
                      <p className="text-xs text-muted-foreground">Customize how the application looks</p>
                    </div>
                    <div className="grid gap-1.5">
                      <Label htmlFor="theme" className="text-sm">
                        Theme
                      </Label>
                      <Select value={theme} onValueChange={setTheme}>
                        <SelectTrigger id="theme" className="h-9">
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-medium">Language</h3>
                      <p className="text-xs text-muted-foreground">Choose your preferred language</p>
                    </div>
                    <div className="grid gap-1.5">
                      <Label htmlFor="language" className="text-sm">
                        Language
                      </Label>
                      <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger id="language" className="h-9">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="spanish">Spanish</SelectItem>
                          <SelectItem value="french">French</SelectItem>
                          <SelectItem value="german">German</SelectItem>
                          <SelectItem value="vietnamese">Vietnamese</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-medium">Dashboard Preferences</h3>
                      <p className="text-xs text-muted-foreground">Customize your dashboard experience</p>
                    </div>
                    <div className="grid gap-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="show-welcome" className="text-sm">
                          Show welcome screen
                        </Label>
                        <Switch id="show-welcome" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="auto-refresh" className="text-sm">
                          Auto-refresh dashboard
                        </Label>
                        <Switch id="auto-refresh" defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Manage how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-medium">Notification Channels</h3>
                      <p className="text-xs text-muted-foreground">Choose how you want to be notified</p>
                    </div>
                    <div className="grid gap-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-notifications" className="text-sm">
                            Email Notifications
                          </Label>
                          <p className="text-xs text-muted-foreground">Receive notifications via email</p>
                        </div>
                        <Switch
                          id="email-notifications"
                          checked={emailNotifications}
                          onCheckedChange={setEmailNotifications}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="push-notifications" className="text-sm">
                            Push Notifications
                          </Label>
                          <p className="text-xs text-muted-foreground">Receive notifications in your browser</p>
                        </div>
                        <Switch
                          id="push-notifications"
                          checked={pushNotifications}
                          onCheckedChange={setPushNotifications}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="sms-notifications" className="text-sm">
                            SMS Notifications
                          </Label>
                          <p className="text-xs text-muted-foreground">Receive notifications via SMS</p>
                        </div>
                        <Switch
                          id="sms-notifications"
                          checked={smsNotifications}
                          onCheckedChange={setSmsNotifications}
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-medium">Notification Types</h3>
                      <p className="text-xs text-muted-foreground">Choose what you want to be notified about</p>
                    </div>
                    <div className="grid gap-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="new-posts" className="text-sm">
                          New posts from subjects
                        </Label>
                        <Switch id="new-posts" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="new-videos" className="text-sm">
                          New videos from subjects
                        </Label>
                        <Switch id="new-videos" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="profile-changes" className="text-sm">
                          Profile changes
                        </Label>
                        <Switch id="profile-changes" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="system-updates" className="text-sm">
                          System updates
                        </Label>
                        <Switch id="system-updates" defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Privacy & Data Settings</CardTitle>
                  <CardDescription>Manage your data and privacy preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-medium">Data Retention</h3>
                      <p className="text-xs text-muted-foreground">Control how long we keep your data</p>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-1.5">
                        <div className="flex justify-between">
                          <Label htmlFor="data-retention" className="text-sm">
                            Keep data for {dataRetention} days
                          </Label>
                          <span className="text-xs text-muted-foreground">{dataRetention} days</span>
                        </div>
                        <Slider
                          id="data-retention"
                          min={7}
                          max={90}
                          step={1}
                          value={[dataRetention]}
                          onValueChange={(value) => setDataRetention(value[0])}
                        />
                        <p className="text-xs text-muted-foreground">
                          Data older than this will be automatically deleted
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-medium">Data Export</h3>
                      <p className="text-xs text-muted-foreground">Download a copy of your data</p>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-xs">You can export all your data in various formats</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Export as CSV
                        </Button>
                        <Button variant="outline" size="sm">
                          Export as JSON
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-medium">Account Deletion</h3>
                      <p className="text-xs text-muted-foreground">Permanently delete your account and data</p>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-xs">
                        This action cannot be undone. All your data will be permanently deleted.
                      </p>
                      <Button variant="destructive" size="sm">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Advanced Settings</CardTitle>
                  <CardDescription>Configure advanced application settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-medium">Data Refresh Rate</h3>
                      <p className="text-xs text-muted-foreground">How often the application checks for new data</p>
                    </div>
                    <RadioGroup value={refreshRate} onValueChange={setRefreshRate} className="grid gap-1.5">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="low" id="low" />
                        <Label htmlFor="low" className="text-sm">
                          Low (Every 24 hours)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="medium" />
                        <Label htmlFor="medium" className="text-sm">
                          Medium (Every 6 hours)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="high" id="high" />
                        <Label htmlFor="high" className="text-sm">
                          High (Every hour)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="realtime" id="realtime" />
                        <Label htmlFor="realtime" className="text-sm">
                          Real-time (As it happens)
                        </Label>
                      </div>
                    </RadioGroup>
                    <p className="text-xs text-muted-foreground">
                      Higher refresh rates may use more system resources and data
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-medium">API Access</h3>
                      <p className="text-xs text-muted-foreground">Manage your API keys and access</p>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="api-access" className="text-sm">
                          Enable API Access
                        </Label>
                        <Switch id="api-access" defaultChecked />
                      </div>
                      <div className="grid gap-1.5">
                        <Label htmlFor="api-key" className="text-sm">
                          API Key
                        </Label>
                        <div className="flex gap-2">
                          <Input id="api-key" value="••••••••••••••••••••••••••••••" readOnly className="h-9" />
                          <Button variant="outline" size="sm">
                            Regenerate
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-medium">Developer Options</h3>
                      <p className="text-xs text-muted-foreground">Advanced options for developers</p>
                    </div>
                    <div className="grid gap-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="debug-mode" className="text-sm">
                          Debug Mode
                        </Label>
                        <Switch id="debug-mode" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="verbose-logging" className="text-sm">
                          Verbose Logging
                        </Label>
                        <Switch id="verbose-logging" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
