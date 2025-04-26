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
  useAuthCheck() // This will redirect to login if not authenticated

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
      <main className="flex-1">
        <DashboardHeader />
        <div className="p-6">
          <div className="mb-6">
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
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Manage your general application settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Appearance</h3>
                      <p className="text-sm text-muted-foreground">Customize how the application looks</p>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="theme">Theme</Label>
                      <Select value={theme} onValueChange={setTheme}>
                        <SelectTrigger id="theme">
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

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Language</h3>
                      <p className="text-sm text-muted-foreground">Choose your preferred language</p>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="language">Language</Label>
                      <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger id="language">
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

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Dashboard Preferences</h3>
                      <p className="text-sm text-muted-foreground">Customize your dashboard experience</p>
                    </div>
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="show-welcome">Show welcome screen</Label>
                        <Switch id="show-welcome" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="auto-refresh">Auto-refresh dashboard</Label>
                        <Switch id="auto-refresh" defaultChecked />
                      </div>
                    </div>
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
                  <CardDescription>Manage how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Notification Channels</h3>
                      <p className="text-sm text-muted-foreground">Choose how you want to be notified</p>
                    </div>
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-notifications">Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                        </div>
                        <Switch
                          id="email-notifications"
                          checked={emailNotifications}
                          onCheckedChange={setEmailNotifications}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="push-notifications">Push Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive notifications in your browser</p>
                        </div>
                        <Switch
                          id="push-notifications"
                          checked={pushNotifications}
                          onCheckedChange={setPushNotifications}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="sms-notifications">SMS Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
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

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Notification Types</h3>
                      <p className="text-sm text-muted-foreground">Choose what you want to be notified about</p>
                    </div>
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="new-posts">New posts from subjects</Label>
                        <Switch id="new-posts" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="new-videos">New videos from subjects</Label>
                        <Switch id="new-videos" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="profile-changes">Profile changes</Label>
                        <Switch id="profile-changes" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="system-updates">System updates</Label>
                        <Switch id="system-updates" defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy & Data Settings</CardTitle>
                  <CardDescription>Manage your data and privacy preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Data Retention</h3>
                      <p className="text-sm text-muted-foreground">Control how long we keep your data</p>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="data-retention">Keep data for {dataRetention} days</Label>
                          <span className="text-sm text-muted-foreground">{dataRetention} days</span>
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

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Data Export</h3>
                      <p className="text-sm text-muted-foreground">Download a copy of your data</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm">You can export all your data in various formats</p>
                      <div className="flex gap-2">
                        <Button variant="outline">Export as CSV</Button>
                        <Button variant="outline">Export as JSON</Button>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Account Deletion</h3>
                      <p className="text-sm text-muted-foreground">Permanently delete your account and data</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm">
                        This action cannot be undone. All your data will be permanently deleted.
                      </p>
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Settings</CardTitle>
                  <CardDescription>Configure advanced application settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Data Refresh Rate</h3>
                      <p className="text-sm text-muted-foreground">How often the application checks for new data</p>
                    </div>
                    <RadioGroup value={refreshRate} onValueChange={setRefreshRate} className="grid gap-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="low" id="low" />
                        <Label htmlFor="low">Low (Every 24 hours)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="medium" />
                        <Label htmlFor="medium">Medium (Every 6 hours)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="high" id="high" />
                        <Label htmlFor="high">High (Every hour)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="realtime" id="realtime" />
                        <Label htmlFor="realtime">Real-time (As it happens)</Label>
                      </div>
                    </RadioGroup>
                    <p className="text-xs text-muted-foreground">
                      Higher refresh rates may use more system resources and data
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">API Access</h3>
                      <p className="text-sm text-muted-foreground">Manage your API keys and access</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="api-access">Enable API Access</Label>
                        <Switch id="api-access" defaultChecked />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="api-key">API Key</Label>
                        <div className="flex gap-2">
                          <Input id="api-key" value="••••••••••••••••••••••••••••••" readOnly />
                          <Button variant="outline">Regenerate</Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Developer Options</h3>
                      <p className="text-sm text-muted-foreground">Advanced options for developers</p>
                    </div>
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="debug-mode">Debug Mode</Label>
                        <Switch id="debug-mode" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="verbose-logging">Verbose Logging</Label>
                        <Switch id="verbose-logging" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
