"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { AlertCircle, Camera, Clock, Globe, Moon, Palette, Save, Sun, Upload, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function SettingsPage() {
  const [theme, setTheme] = useState("system")
  const [cacheSize, setCacheSize] = useState(512)
  const [apiThrottle, setApiThrottle] = useState(60)
  const [debugMode, setDebugMode] = useState(false)
  const [dataRetention, setDataRetention] = useState("90")
  const [isUploading, setIsUploading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const handleSaveProfile = () => {
    setIsSaving(true)
    setTimeout(() => setIsSaving(false), 1000)
  }

  const handleUploadAvatar = () => {
    setIsUploading(true)
    setTimeout(() => setIsUploading(false), 1500)
  }

  return (
    <div className="flex-1 p-4 md:p-6 max-w-[1200px] mx-auto w-full">
      <div className="space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 blur-3xl -z-10 rounded-3xl opacity-30"></div>
          <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100 dark:border-slate-700 p-6 md:p-8">
            <h2 className="text-3xl font-bold tracking-tight gradient-text mb-2">Settings</h2>
            <p className="text-muted-foreground max-w-2xl">
              Manage your account settings and preferences. Changes will be automatically saved to your profile.
            </p>
          </div>
        </div>

        {/* Profile Settings */}
        <Card className="border-blue-100 dark:border-slate-700 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm animate-fade-in">
          <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-full"></div>
          <CardHeader className="pb-4 border-b border-blue-50 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40">
                <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-xl text-blue-700 dark:text-blue-300">Profile Settings</CardTitle>
                <CardDescription>Manage your personal information and profile details.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex flex-col items-center gap-4">
                <div className="relative group">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 opacity-70 blur-sm group-hover:opacity-100 transition-opacity"></div>
                  <Avatar className="h-32 w-32 border-4 border-white dark:border-slate-700 shadow-lg relative">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
                    <AvatarFallback className="text-2xl">JD</AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full flex gap-2 items-center"
                  onClick={handleUploadAvatar}
                  disabled={isUploading}
                >
                  {isUploading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Uploading...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4" />
                      <span>Change Avatar</span>
                    </>
                  )}
                </Button>
                <div className="text-center">
                  <Badge
                    variant="outline"
                    className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                  >
                    Pro Member
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                <div className="space-y-3">
                  <Label htmlFor="first-name" className="text-sm font-medium">
                    First Name
                  </Label>
                  <Input
                    id="first-name"
                    defaultValue="John"
                    className="h-11 bg-slate-50/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="last-name" className="text-sm font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="last-name"
                    defaultValue="Doe"
                    className="h-11 bg-slate-50/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="username" className="text-sm font-medium">
                    Username
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-slate-400">@</span>
                    <Input
                      id="username"
                      defaultValue="johndoe"
                      className="h-11 pl-8 bg-slate-50/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="h-11 bg-slate-50/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>
                <div className="space-y-3 md:col-span-2">
                  <Label htmlFor="bio" className="text-sm font-medium">
                    Bio
                  </Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself"
                    defaultValue="Social media analyst with 5+ years of experience in digital marketing and analytics."
                    className="resize-none min-h-[120px] bg-slate-50/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground">Your bio will be displayed on your public profile.</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t border-blue-50 dark:border-slate-700 pt-4 bg-slate-50/50 dark:bg-slate-800/20">
            <Button variant="outline" className="border-slate-200 dark:border-slate-700">
              Cancel
            </Button>
            <Button
              className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-sm hover:shadow transition-all duration-300"
              onClick={handleSaveProfile}
              disabled={isSaving}
            >
              {isSaving ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  <span>Save Profile</span>
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        {/* Regional Settings */}
        <Card className="border-blue-100 dark:border-slate-700 shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden">
          <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-full"></div>
          <CardHeader className="pb-4 border-b border-blue-50 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                <Globe className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <CardTitle className="text-xl text-emerald-700 dark:text-emerald-300">Regional Settings</CardTitle>
                <CardDescription>Customize your language, timezone, and regional preferences.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="language" className="text-sm font-medium flex items-center gap-1">
                  Language
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <AlertCircle className="h-3.5 w-3.5 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Select your preferred language for the interface</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Select defaultValue="en">
                  <SelectTrigger
                    id="language"
                    className="w-full h-11 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"
                  >
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
              <div className="space-y-3">
                <Label htmlFor="timezone" className="text-sm font-medium flex items-center gap-1">
                  Timezone
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <AlertCircle className="h-3.5 w-3.5 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Select your timezone for accurate time display</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Select defaultValue="utc">
                  <SelectTrigger
                    id="timezone"
                    className="w-full h-11 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"
                  >
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
              <div className="space-y-3">
                <Label htmlFor="date-format" className="text-sm font-medium">
                  Date Format
                </Label>
                <Select defaultValue="mdy">
                  <SelectTrigger
                    id="date-format"
                    className="w-full h-11 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"
                  >
                    <SelectValue placeholder="Select date format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                    <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>Example: 05/15/2023</span>
                </div>
              </div>
              <div className="space-y-3">
                <Label htmlFor="time-format" className="text-sm font-medium">
                  Time Format
                </Label>
                <Select defaultValue="12h">
                  <SelectTrigger
                    id="time-format"
                    className="w-full h-11 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"
                  >
                    <SelectValue placeholder="Select time format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                    <SelectItem value="24h">24-hour</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>Example: 3:45 PM</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t border-blue-50 dark:border-slate-700 pt-4 bg-slate-50/50 dark:bg-slate-800/20">
            <Button variant="outline" className="border-slate-200 dark:border-slate-700">
              Reset to Default
            </Button>
            <Button className="gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
              <Save className="h-4 w-4" />
              <span>Save Settings</span>
            </Button>
          </CardFooter>
        </Card>

        {/* Appearance Settings */}
        <Card className="border-blue-100 dark:border-slate-700 shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden">
          <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full"></div>
          <CardHeader className="pb-4 border-b border-blue-50 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30">
                <Palette className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <CardTitle className="text-xl text-purple-700 dark:text-purple-300">Appearance</CardTitle>
                <CardDescription>Customize the look and feel of the application.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div className="space-y-4">
              <Label className="text-base font-medium">Theme</Label>
              <RadioGroup value={theme} onValueChange={setTheme} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <RadioGroupItem value="light" id="light" className="sr-only" />
                  <Label
                    htmlFor="light"
                    className="flex flex-col items-center justify-between rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white/90 p-6 hover:bg-slate-50 hover:border-purple-300 dark:hover:border-purple-700 [&:has([data-state=checked])]:border-purple-600 dark:[&:has([data-state=checked])]:border-purple-500 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 p-3 mb-3 shadow-lg">
                      <Sun className="h-8 w-8 text-white drop-shadow-md" />
                    </div>
                    <span className="text-base font-medium">Light</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="dark" id="dark" className="sr-only" />
                  <Label
                    htmlFor="dark"
                    className="flex flex-col items-center justify-between rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-950 p-6 hover:bg-slate-900 hover:border-purple-300 dark:hover:border-purple-700 [&:has([data-state=checked])]:border-purple-600 dark:[&:has([data-state=checked])]:border-purple-500 transition-all duration-200"
                  >
                    <div className="rounded-full bg-gradient-to-br from-indigo-700 to-purple-800 p-3 mb-3 shadow-lg">
                      <Moon className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-base font-medium text-white">Dark</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="system" id="system" className="sr-only" />
                  <Label
                    htmlFor="system"
                    className="flex flex-col items-center justify-between rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 hover:bg-slate-50 hover:border-purple-300 dark:hover:border-purple-700 [&:has([data-state=checked])]:border-purple-600 dark:[&:has([data-state=checked])]:border-purple-500 transition-all duration-200"
                  >
                    <div className="rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-3 mb-3 shadow-lg">
                      <div className="flex">
                        <Sun className="h-8 w-8 text-white" />
                        <Moon className="h-8 w-8 text-white -ml-4" />
                      </div>
                    </div>
                    <span className="text-base font-medium">System</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t border-blue-50 dark:border-slate-700 pt-4 bg-slate-50/50 dark:bg-slate-800/20">
            <Button variant="outline" className="border-slate-200 dark:border-slate-700">
              Reset to Default
            </Button>
            <Button className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              <Save className="h-4 w-4" />
              <span>Save Appearance</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
