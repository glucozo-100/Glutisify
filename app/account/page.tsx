"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Check, CreditCard, Upload } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useAuthCheck } from "@/utils/auth"

export default function AccountPage() {
  useAuthCheck()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState("John Doe")
  const [email, setEmail] = useState("john.doe@example.com")
  const [phone, setPhone] = useState("+1 (555) 123-4567")

  const subscriptionDetails = {
    plan: "Professional",
    status: "Active",
    nextBilling: "August 15, 2023",
    amount: "$29.99",
    paymentMethod: "Visa ending in 4242",
  }

  const billingHistory = [
    {
      id: "INV-001",
      date: "July 15, 2023",
      amount: "$29.99",
      status: "Paid",
    },
    {
      id: "INV-002",
      date: "June 15, 2023",
      amount: "$29.99",
      status: "Paid",
    },
    {
      id: "INV-003",
      date: "May 15, 2023",
      amount: "$29.99",
      status: "Paid",
    },
  ]

  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1 overflow-auto">
        <DashboardHeader />
        <div className="p-4 md:p-6 max-w-6xl mx-auto">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">Account</h2>
            <p className="text-muted-foreground">Manage your account settings and subscription</p>
          </div>

          <Tabs defaultValue="profile" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="subscription">Subscription</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Manage your personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src="/placeholder.svg?height=80&width=80" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm" className="gap-1 text-xs">
                        <Upload className="h-3 w-3" />
                        Change
                      </Button>
                    </div>

                    <div className="flex-1 space-y-3">
                      {isEditing ? (
                        <>
                          <div className="grid gap-1.5">
                            <Label htmlFor="name" className="text-sm">
                              Full Name
                            </Label>
                            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="h-9" />
                          </div>
                          <div className="grid gap-1.5">
                            <Label htmlFor="email" className="text-sm">
                              Email Address
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="h-9"
                            />
                          </div>
                          <div className="grid gap-1.5">
                            <Label htmlFor="phone" className="text-sm">
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className="h-9"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="space-y-1">
                            <Label className="text-sm text-muted-foreground">Full Name</Label>
                            <p className="text-sm font-medium">{name}</p>
                          </div>
                          <div className="space-y-1">
                            <Label className="text-sm text-muted-foreground">Email Address</Label>
                            <p className="text-sm font-medium">{email}</p>
                          </div>
                          <div className="space-y-1">
                            <Label className="text-sm text-muted-foreground">Phone Number</Label>
                            <p className="text-sm font-medium">{phone}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  {isEditing ? (
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => setIsEditing(false)}>
                        Save Changes
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <Button size="sm" onClick={() => setIsEditing(true)}>
                      Edit Profile
                    </Button>
                  )}
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>View your account details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <Label className="text-muted-foreground">Account Type</Label>
                      <p className="font-medium">Professional</p>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-muted-foreground">Member Since</Label>
                      <p className="font-medium">January 15, 2023</p>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-muted-foreground">Account Status</Label>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Active
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-muted-foreground">Subjects Tracked</Label>
                      <p className="font-medium">12</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="subscription" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Subscription Details</CardTitle>
                  <CardDescription>Manage your subscription plan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg bg-muted/50">
                    <div className="space-y-0.5">
                      <h3 className="font-medium">{subscriptionDetails.plan} Plan</h3>
                      <p className="text-xs text-muted-foreground">
                        Next billing on {subscriptionDetails.nextBilling} • {subscriptionDetails.amount}/month
                      </p>
                    </div>
                    <Badge className="bg-green-50 text-green-700 border-green-200">{subscriptionDetails.status}</Badge>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Payment Method</h3>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <CreditCard className="h-6 w-6 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{subscriptionDetails.paymentMethod}</p>
                        <p className="text-xs text-muted-foreground">Expires 12/2025</p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-auto text-xs">
                        Update
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Billing History</h3>
                    <div className="rounded-md border text-sm">
                      <div className="grid grid-cols-4 p-2 bg-muted/50 font-medium text-xs">
                        <div>Invoice</div>
                        <div>Date</div>
                        <div>Amount</div>
                        <div>Status</div>
                      </div>
                      {billingHistory.map((invoice) => (
                        <div key={invoice.id} className="grid grid-cols-4 p-2 border-t items-center">
                          <div>{invoice.id}</div>
                          <div>{invoice.date}</div>
                          <div>{invoice.amount}</div>
                          <div>
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                              {invoice.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-2">
                  <div className="flex gap-2">
                    <Button size="sm">Upgrade Plan</Button>
                    <Button variant="outline" size="sm">
                      Cancel Subscription
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Cancelling your subscription will disable access to premium features at the end of your billing
                    period.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Change Password</h3>
                    <div className="grid gap-3">
                      <div className="grid gap-1.5">
                        <Label htmlFor="current-password" className="text-sm">
                          Current Password
                        </Label>
                        <Input id="current-password" type="password" className="h-9" />
                      </div>
                      <div className="grid gap-1.5">
                        <Label htmlFor="new-password" className="text-sm">
                          New Password
                        </Label>
                        <Input id="new-password" type="password" className="h-9" />
                      </div>
                      <div className="grid gap-1.5">
                        <Label htmlFor="confirm-password" className="text-sm">
                          Confirm New Password
                        </Label>
                        <Input id="confirm-password" type="password" className="h-9" />
                      </div>
                    </div>
                    <Button size="sm">Update Password</Button>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Two-Factor Authentication</h3>
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle className="text-sm">Not Enabled</AlertTitle>
                      <AlertDescription className="text-xs">
                        Two-factor authentication is not enabled yet. Enable it for increased security.
                      </AlertDescription>
                    </Alert>
                    <Button size="sm">Enable 2FA</Button>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Active Sessions</h3>
                    <div className="rounded-md border text-sm">
                      <div className="p-3 border-b">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <p className="font-medium">Current Session</p>
                            <p className="text-xs text-muted-foreground">Windows • Chrome • New York, USA</p>
                          </div>
                          <Badge className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1 text-xs">
                            <Check className="h-3 w-3" /> Active Now
                          </Badge>
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <p className="font-medium">Mobile Session</p>
                            <p className="text-xs text-muted-foreground">iOS • Safari • New York, USA</p>
                          </div>
                          <Button variant="outline" size="sm" className="text-xs">
                            Sign Out
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Sign Out All Devices
                    </Button>
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
