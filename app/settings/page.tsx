"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { AlertCircle, Globe, Moon, Palette, Shield, Sun, User, Zap } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SettingsPage() {
  const [theme, setTheme] = useState("system")
  const [cacheSize, setCacheSize] = useState(512)
  const [apiThrottle, setApiThrottle] = useState(60)
  const [debugMode, setDebugMode] = useState(false)
  const [dataRetention, setDataRetention] = useState("90")

  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <main className="flex-1 flex flex-col min-h-screen">
        <DashboardHeader />
        <div className="flex-1 p-4 md:p-6 max-w-[1600px] mx-auto w-full">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight gradient-text">Settings</h2>
              <p className="text-muted-foreground">Manage your account settings and preferences.</p>
            </div>

            {/* Profile Settings */}
            <Card className="border-blue-100 dark:border-slate-700 shadow-sm card-hover">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="text-blue-700 dark:text-blue-300">Profile Settings</CardTitle>
                </div>
                <CardDescription>Manage your personal information and profile details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex flex-col items-center gap-3">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Button size="sm" variant="outline">
                      Change Avatar
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" defaultValue="Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="johndoe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john.doe@example.com" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        placeholder="Tell us about yourself"
                        defaultValue="Social media analyst with 5+ years of experience in digital marketing and analytics."
                        className="resize-none"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-blue-50 dark:border-slate-700 pt-4">
                <Button variant="outline">Cancel</Button>
                <Button>Save Profile</Button>
              </CardFooter>
            </Card>

            {/* Regional Settings */}
            <Card className="border-blue-100 dark:border-slate-700 shadow-sm card-hover">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="text-blue-700 dark:text-blue-300">Regional Settings</CardTitle>
                </div>
                <CardDescription>Customize your language, timezone, and regional preferences.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger id="language" className="w-full">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="vi">Vietnamese</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="utc">
                      <SelectTrigger id="timezone" className="w-full">
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
                  <div className="space-y-2">
                    <Label htmlFor="date-format">Date Format</Label>
                    <Select defaultValue="mdy">
                      <SelectTrigger id="date-format" className="w-full">
                        <SelectValue placeholder="Select date format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                        <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                        <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time-format">Time Format</Label>
                    <Select defaultValue="12h">
                      <SelectTrigger id="time-format" className="w-full">
                        <SelectValue placeholder="Select time format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                        <SelectItem value="24h">24-hour</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-blue-50 dark:border-slate-700 pt-4">
                <Button variant="outline">Reset to Default</Button>
                <Button>Save Settings</Button>
              </CardFooter>
            </Card>

            {/* Appearance Settings */}
            <Card className="border-blue-100 dark:border-slate-700 shadow-sm card-hover">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="text-blue-700 dark:text-blue-300">Appearance</CardTitle>
                </div>
                <CardDescription>Customize the look and feel of the application.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Theme</Label>
                  <RadioGroup value={theme} onValueChange={setTheme} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <RadioGroupItem value="light" id="light" className="sr-only" />
                      <Label
                        htmlFor="light"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-100 hover:border-accent [&:has([data-state=checked])]:border-primary"
                      >
                        <Sun className="h-6 w-6 mb-2" />
                        <span className="text-sm font-medium">Light</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="dark" id="dark" className="sr-only" />
                      <Label
                        htmlFor="dark"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-slate-950 p-4 hover:bg-slate-900 hover:border-accent [&:has([data-state=checked])]:border-primary"
                      >
                        <Moon className="h-6 w-6 mb-2 text-white" />
                        <span className="text-sm font-medium text-white">Dark</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="system" id="system" className="sr-only" />
                      <Label
                        htmlFor="system"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-gradient-to-b from-white to-slate-950 p-4 hover:border-accent [&:has([data-state=checked])]:border-primary"
                      >
                        <div className="h-6 w-6 mb-2 flex items-center justify-center">
                          <Sun className="h-4 w-4 absolute" />
                          <Moon className="h-4 w-4 absolute opacity-40" />
                        </div>
                        <span className="text-sm font-medium">System</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="animations">Animations</Label>
                      <p className="text-sm text-muted-foreground">Enable animations throughout the interface.</p>
                    </div>
                    <Switch id="animations" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="reduce-motion">Reduce Motion</Label>
                      <p className="text-sm text-muted-foreground">Minimize animations for accessibility.</p>
                    </div>
                    <Switch id="reduce-motion" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="compact-view">Compact View</Label>
                      <p className="text-sm text-muted-foreground">Use a more compact layout to show more content.</p>
                    </div>
                    <Switch id="compact-view" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-blue-50 dark:border-slate-700 pt-4">
                <Button variant="outline">Reset to Default</Button>
                <Button>Save Appearance</Button>
              </CardFooter>
            </Card>

            {/* Security Settings */}
            <Card className="border-blue-100 dark:border-slate-700 shadow-sm card-hover">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="text-blue-700 dark:text-blue-300">Security</CardTitle>
                </div>
                <CardDescription>Manage your account security and authentication settings.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Password</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">
                        Require a verification code in addition to your password when signing in.
                      </p>
                    </div>
                    <Switch id="two-factor" />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Session Management</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="session-timeout">Session Timeout</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically log out after a period of inactivity.
                      </p>
                    </div>
                    <Switch id="session-timeout" defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeout-duration">Timeout Duration</Label>
                    <Select defaultValue="30">
                      <SelectTrigger id="timeout-duration">
                        <SelectValue placeholder="Select timeout duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                        <SelectItem value="240">4 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-blue-50 dark:border-slate-700 pt-4">
                <Button variant="outline">Sign Out All Devices</Button>
                <Button>Save Security Settings</Button>
              </CardFooter>
            </Card>

            {/* Advanced Settings */}
            <Card className="border-blue-100 dark:border-slate-700 shadow-sm card-hover">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="text-blue-700 dark:text-blue-300">Advanced Settings</CardTitle>
                </div>
                <CardDescription>Configure advanced system settings and performance options.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert variant="warning" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription>
                    These settings are for advanced users. Incorrect configuration may affect system performance.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Performance</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="cache-size">Cache Size (MB): {cacheSize}</Label>
                      </div>
                      <Slider
                        id="cache-size"
                        min={128}
                        max={1024}
                        step={128}
                        value={[cacheSize]}
                        onValueChange={(value) => setCacheSize(value[0])}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="api-throttle">API Requests per minute: {apiThrottle}</Label>
                      </div>
                      <Slider
                        id="api-throttle"
                        min={10}
                        max={120}
                        step={10}
                        value={[apiThrottle]}
                        onValueChange={(value) => setApiThrottle(value[0])}
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Data Management</h3>
                  <div className="space-y-2">
                    <Label htmlFor="data-retention">Keep Analytics Data For</Label>
                    <Select value={dataRetention} onValueChange={setDataRetention}>
                      <SelectTrigger id="data-retention">
                        <SelectValue placeholder="Select retention period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="180">180 days</SelectItem>
                        <SelectItem value="365">1 year</SelectItem>
                        <SelectItem value="forever">Forever</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-archive">Auto Archive Old Data</Label>
                      <p className="text-sm text-muted-foreground">Automatically archive data instead of deleting.</p>
                    </div>
                    <Switch id="auto-archive" defaultChecked />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">System</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="debug-mode">Debug Mode</Label>
                      <p className="text-sm text-muted-foreground">Enable detailed logging and debugging tools.</p>
                    </div>
                    <Switch id="debug-mode" checked={debugMode} onCheckedChange={setDebugMode} />
                  </div>

                  {debugMode && (
                    <div className="pt-2 space-y-2">
                      <Label htmlFor="log-level">Log Level</Label>
                      <Select defaultValue="info">
                        <SelectTrigger id="log-level">
                          <SelectValue placeholder="Select log level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="error">Error</SelectItem>
                          <SelectItem value="warn">Warning</SelectItem>
                          <SelectItem value="info">Info</SelectItem>
                          <SelectItem value="debug">Debug</SelectItem>
                          <SelectItem value="trace">Trace</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-blue-50 dark:border-slate-700 pt-4">
                <Button variant="outline">Reset to Default</Button>
                <Button>Save Advanced Settings</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
