"use client"

import { Badge } from "@/components/ui/badge"

import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { Shield, Cog, Moon, Sun, Monitor, User, Bell, Globe, Lock, Eye, Palette } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SettingsPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("general")

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab) {
      setActiveTab(tab)
    } else {
      setActiveTab("general")
    }
  }, [searchParams])

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

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 enhanced-tabs">
              <TabsList className="w-full sm:w-auto justify-start">
                <TabsTrigger value="general" className="flex items-center gap-2">
                  <Cog className="h-4 w-4" />
                  <span>Settings</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Security</span>
                </TabsTrigger>
              </TabsList>

              {/* Combined Settings Tab */}
              <TabsContent value="general" className="mt-0 animate-fade-in">
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
                <Card className="border-blue-100 dark:border-slate-700 shadow-sm card-hover mt-4">
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
                <Card className="border-blue-100 dark:border-slate-700 shadow-sm card-hover mt-4">
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
                      <RadioGroup defaultValue="system" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                            <Monitor className="h-6 w-6 mb-2" />
                            <span className="text-sm font-medium">System</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="accent-color">Accent Color</Label>
                        <Select defaultValue="blue">
                          <SelectTrigger id="accent-color">
                            <SelectValue placeholder="Select accent color" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="blue">Blue</SelectItem>
                            <SelectItem value="purple">Purple</SelectItem>
                            <SelectItem value="green">Green</SelectItem>
                            <SelectItem value="orange">Orange</SelectItem>
                            <SelectItem value="pink">Pink</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="font-size">Font Size</Label>
                        <Select defaultValue="medium">
                          <SelectTrigger id="font-size">
                            <SelectValue placeholder="Select font size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
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
                          <p className="text-sm text-muted-foreground">
                            Use a more compact layout to show more content.
                          </p>
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

                {/* Notification Settings */}
                <Card className="border-blue-100 dark:border-slate-700 shadow-sm card-hover mt-4">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Bell className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <CardTitle className="text-blue-700 dark:text-blue-300">Notifications</CardTitle>
                    </div>
                    <CardDescription>Manage how you receive notifications from the platform.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Notification Channels</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="email-notifications">Email Notifications</Label>
                            <p className="text-sm text-muted-foreground">Receive notifications via email.</p>
                          </div>
                          <Switch id="email-notifications" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="push-notifications">Push Notifications</Label>
                            <p className="text-sm text-muted-foreground">Receive push notifications in your browser.</p>
                          </div>
                          <Switch id="push-notifications" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="sms-notifications">SMS Notifications</Label>
                            <p className="text-sm text-muted-foreground">Receive notifications via SMS.</p>
                          </div>
                          <Switch id="sms-notifications" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="desktop-notifications">Desktop Notifications</Label>
                            <p className="text-sm text-muted-foreground">Receive notifications on your desktop.</p>
                          </div>
                          <Switch id="desktop-notifications" defaultChecked />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Notification Types</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="subject-updates">Subject Updates</Label>
                            <p className="text-sm text-muted-foreground">
                              Notifications about changes to your tracked subjects.
                            </p>
                          </div>
                          <Switch id="subject-updates" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="analytics-reports">Analytics Reports</Label>
                            <p className="text-sm text-muted-foreground">Weekly and monthly analytics reports.</p>
                          </div>
                          <Switch id="analytics-reports" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="security-alerts">Security Alerts</Label>
                            <p className="text-sm text-muted-foreground">Important security-related notifications.</p>
                          </div>
                          <Switch id="security-alerts" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="marketing">Marketing</Label>
                            <p className="text-sm text-muted-foreground">Promotional and marketing communications.</p>
                          </div>
                          <Switch id="marketing" />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Notification Schedule</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="do-not-disturb">Do Not Disturb</Label>
                            <p className="text-sm text-muted-foreground">
                              Pause all notifications during specified hours.
                            </p>
                          </div>
                          <Switch id="do-not-disturb" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="daily-digest">Daily Digest</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive a daily summary instead of individual notifications.
                            </p>
                          </div>
                          <Switch id="daily-digest" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-blue-50 dark:border-slate-700 pt-4">
                    <Button variant="outline">Reset to Default</Button>
                    <Button>Save Notification Settings</Button>
                  </CardFooter>
                </Card>

                {/* Privacy Settings */}
                <Card className="border-blue-100 dark:border-slate-700 shadow-sm card-hover mt-4">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Eye className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <CardTitle className="text-blue-700 dark:text-blue-300">Privacy</CardTitle>
                    </div>
                    <CardDescription>Manage your privacy settings and data preferences.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="analytics-tracking">Analytics Tracking</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow us to collect anonymous usage data to improve our service.
                        </p>
                      </div>
                      <Switch id="analytics-tracking" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="cookies">Cookies</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow us to use cookies to enhance your browsing experience.
                        </p>
                      </div>
                      <Switch id="cookies" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="profile-visibility">Profile Visibility</Label>
                        <p className="text-sm text-muted-foreground">
                          Make your profile visible to other users on the platform.
                        </p>
                      </div>
                      <Switch id="profile-visibility" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="data-sharing">Data Sharing</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow us to share your data with trusted third-party partners.
                        </p>
                      </div>
                      <Switch id="data-sharing" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-blue-50 dark:border-slate-700 pt-4">
                    <Button variant="outline">Reset to Default</Button>
                    <Button>Save Privacy Settings</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Security Settings */}
              <TabsContent value="security" className="mt-0 animate-fade-in">
                <Card className="border-blue-100 dark:border-slate-700 shadow-sm card-hover">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <CardTitle className="text-blue-700 dark:text-blue-300">Password & Authentication</CardTitle>
                    </div>
                    <CardDescription>Manage your account security and authentication settings.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
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

                    <div className="pt-2">
                      <div className="text-sm font-medium mb-2">Password Requirements:</div>
                      <ul className="text-sm text-muted-foreground space-y-1 pl-5 list-disc">
                        <li>At least 8 characters long</li>
                        <li>Include at least one uppercase letter</li>
                        <li>Include at least one number</li>
                        <li>Include at least one special character</li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-blue-50 dark:border-slate-700 pt-4">
                    <Button variant="outline">Cancel</Button>
                    <Button>Update Password</Button>
                  </CardFooter>
                </Card>

                <Card className="border-blue-100 dark:border-slate-700 shadow-sm card-hover mt-4">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-blue-700 dark:text-blue-300">Two-Factor Authentication</CardTitle>
                    <CardDescription>Add an extra layer of security to your account.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">
                          Require a verification code in addition to your password when signing in.
                        </p>
                      </div>
                      <Switch id="two-factor" />
                    </div>

                    <div className="rounded-lg border border-blue-100 dark:border-slate-700 p-4 bg-blue-50/30 dark:bg-slate-800/50">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                        <div>
                          <h3 className="font-medium mb-1">Two-Factor Authentication is disabled</h3>
                          <p className="text-sm text-muted-foreground">
                            Enable two-factor authentication for enhanced security. We recommend using an authenticator
                            app like Google Authenticator or Authy.
                          </p>
                          <Button size="sm" className="mt-3">
                            Set Up Two-Factor Authentication
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-100 dark:border-slate-700 shadow-sm card-hover mt-4">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-blue-700 dark:text-blue-300">Session Management</CardTitle>
                    <CardDescription>Manage your active sessions and security settings.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
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

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="remember-me">Remember Me</Label>
                        <p className="text-sm text-muted-foreground">Stay logged in on this device for 30 days.</p>
                      </div>
                      <Switch id="remember-me" defaultChecked />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-blue-50 dark:border-slate-700 pt-4">
                    <Button variant="outline">Sign Out All Devices</Button>
                    <Button>Save Settings</Button>
                  </CardFooter>
                </Card>

                <Card className="border-blue-100 dark:border-slate-700 shadow-sm card-hover mt-4">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-blue-700 dark:text-blue-300">Login History</CardTitle>
                    <CardDescription>View your recent login activity.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-blue-50 dark:bg-slate-700 text-left">
                              <th className="px-6 py-3 font-medium">Device</th>
                              <th className="px-6 py-3 font-medium">Location</th>
                              <th className="px-6 py-3 font-medium">IP Address</th>
                              <th className="px-6 py-3 font-medium">Date & Time</th>
                              <th className="px-6 py-3 font-medium text-right">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-blue-100 dark:divide-slate-700">
                            <tr className="hover:bg-blue-50/30 dark:hover:bg-slate-800/60 transition-colors">
                              <td className="px-6 py-4 font-medium">Chrome on Windows</td>
                              <td className="px-6 py-4">New York, USA</td>
                              <td className="px-6 py-4">192.168.1.1</td>
                              <td className="px-6 py-4">Today, 10:30 AM</td>
                              <td className="px-6 py-4 text-right">
                                <Badge className="bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50">
                                  Current
                                </Badge>
                              </td>
                            </tr>
                            <tr className="hover:bg-blue-50/30 dark:hover:bg-slate-800/60 transition-colors">
                              <td className="px-6 py-4 font-medium">Safari on macOS</td>
                              <td className="px-6 py-4">San Francisco, USA</td>
                              <td className="px-6 py-4">192.168.1.2</td>
                              <td className="px-6 py-4">Yesterday, 8:15 PM</td>
                              <td className="px-6 py-4 text-right">
                                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50">
                                  Active
                                </Badge>
                              </td>
                            </tr>
                            <tr className="hover:bg-blue-50/30 dark:hover:bg-slate-800/60 transition-colors">
                              <td className="px-6 py-4 font-medium">Firefox on Android</td>
                              <td className="px-6 py-4">Chicago, USA</td>
                              <td className="px-6 py-4">192.168.1.3</td>
                              <td className="px-6 py-4">May 1, 2023, 3:45 PM</td>
                              <td className="px-6 py-4 text-right">
                                <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600">
                                  Expired
                                </Badge>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-blue-50 dark:border-slate-700 pt-4">
                    <div className="text-sm text-muted-foreground">Showing 3 of 10 sessions</div>
                    <Button variant="outline">View All Activity</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
