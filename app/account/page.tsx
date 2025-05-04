"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Phone, MapPin, Globe, Upload, Trash2 } from "lucide-react"
import { getUserAvatar } from "@/utils/avatar"

export default function AccountPage() {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1">
        <DashboardHeader />
        <div className="p-4 md:p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Account</h2>
              <p className="text-muted-foreground">Manage your account information and profile settings.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-blue-100 dark:border-slate-700 shadow-sm col-span-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-blue-700 dark:text-blue-300">Profile Picture</CardTitle>
                  <CardDescription>Update your profile picture and personal information.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center space-y-4 pt-4">
                  <Avatar className="h-32 w-32 border-4 border-blue-100 dark:border-slate-700">
                    <AvatarImage src={getUserAvatar("user") || "/placeholder.svg"} alt="Profile" />
                    <AvatarFallback className="bg-blue-100 dark:bg-slate-700 text-blue-700 dark:text-blue-300 text-2xl">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex gap-1">
                      <Upload className="h-4 w-4" />
                      Upload
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex gap-1 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Recommended: Square JPG, PNG, or GIF, at least 300x300 pixels.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-100 dark:border-slate-700 shadow-sm md:col-span-2">
                <CardHeader className="pb-3">
                  <CardTitle className="text-blue-700 dark:text-blue-300">Personal Information</CardTitle>
                  <CardDescription>Update your personal information and contact details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                        First Name
                      </Label>
                      <Input id="first-name" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                        Last Name
                      </Label>
                      <Input id="last-name" defaultValue="Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-1">
                        <Mail className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                        Email
                      </Label>
                      <Input id="email" type="email" defaultValue="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-1">
                        <Phone className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                        Phone
                      </Label>
                      <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address" className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                        Address
                      </Label>
                      <Input id="address" defaultValue="123 Main St, Anytown, CA 12345" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="bio" className="flex items-center gap-1">
                        <Globe className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                        Bio
                      </Label>
                      <Textarea
                        id="bio"
                        className="min-h-[100px]"
                        defaultValue="Product manager with 5+ years of experience in the tech industry. Passionate about creating user-friendly products that solve real problems."
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t border-blue-50 dark:border-slate-700 pt-4">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>

              <Card className="border-blue-100 dark:border-slate-700 shadow-sm md:col-span-3">
                <CardHeader className="pb-3">
                  <CardTitle className="text-blue-700 dark:text-blue-300">Privacy Settings</CardTitle>
                  <CardDescription>Control how your information is displayed and shared.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="public-profile">Public Profile</Label>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Make your profile visible to other users.
                      </p>
                    </div>
                    <Switch id="public-profile" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="space-y-0.5">
                      <Label htmlFor="show-email">Show Email</Label>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Display your email address on your public profile.
                      </p>
                    </div>
                    <Switch id="show-email" />
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="space-y-0.5">
                      <Label htmlFor="show-activity">Activity Status</Label>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Show when you're active on the platform.
                      </p>
                    </div>
                    <Switch id="show-activity" defaultChecked />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t border-blue-50 dark:border-slate-700 pt-4">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
