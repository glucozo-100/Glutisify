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
// Add the import at the top of the file
import { useAuthCheck } from "@/utils/auth"

// Add the auth check at the beginning of the component
export default function AccountPage() {
  useAuthCheck() // This will redirect to login if not authenticated

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
      <main className="flex-1">
        <DashboardHeader />
        <div className="p-6">
          <div className="mb-6">
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
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Manage your personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center gap-4">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg?height=96&width=96" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Upload className="h-4 w-4" />
                        Change Avatar
                      </Button>
                    </div>

                    <div className="flex-1 space-y-4">
                      {isEditing ? (
                        <>
                          <div className="grid gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="space-y-1">
                            <Label>Full Name</Label>
                            <p>{name}</p>
                          </div>
                          <div className="space-y-1">
                            <Label>Email Address</Label>
                            <p>{email}</p>
                          </div>
                          <div className="space-y-1">
                            <Label>Phone Number</Label>
                            <p>{phone}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  {isEditing ? (
                    <div className="flex gap-2">
                      <Button onClick={() => setIsEditing(false)}>Save Changes</Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                  )}
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>View your account details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label>Account Type</Label>
                      <p>Professional</p>
                    </div>
                    <div className="space-y-1">
                      <Label>Member Since</Label>
                      <p>January 15, 2023</p>
                    </div>
                    <div className="space-y-1">
                      <Label>Account Status</Label>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Active
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label>Subjects Tracked</Label>
                      <p>12</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="subscription" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Subscription Details</CardTitle>
                  <CardDescription>Manage your subscription plan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
                    <div className="space-y-1">
                      <h3 className="font-medium">{subscriptionDetails.plan} Plan</h3>
                      <p className="text-sm text-muted-foreground">
                        Next billing on {subscriptionDetails.nextBilling} • {subscriptionDetails.amount}/month
                      </p>
                    </div>
                    <Badge className="bg-green-50 text-green-700 border-green-200">{subscriptionDetails.status}</Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Payment Method</h3>
                      <p className="text-sm text-muted-foreground">Manage your payment details</p>
                    </div>
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <CreditCard className="h-8 w-8 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{subscriptionDetails.paymentMethod}</p>
                        <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-auto">
                        Update
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Billing History</h3>
                      <p className="text-sm text-muted-foreground">View your recent invoices</p>
                    </div>
                    <div className="rounded-md border">
                      <div className="grid grid-cols-4 p-4 bg-muted/50 font-medium text-sm">
                        <div>Invoice</div>
                        <div>Date</div>
                        <div>Amount</div>
                        <div>Status</div>
                      </div>
                      {billingHistory.map((invoice) => (
                        <div key={invoice.id} className="grid grid-cols-4 p-4 border-t items-center">
                          <div>{invoice.id}</div>
                          <div>{invoice.date}</div>
                          <div>{invoice.amount}</div>
                          <div>
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
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
                    <Button>Upgrade Plan</Button>
                    <Button variant="outline">Cancel Subscription</Button>
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
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Change Password</h3>
                      <p className="text-sm text-muted-foreground">
                        Update your password regularly to keep your account secure
                      </p>
                    </div>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                    <Button>Update Password</Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Not Enabled</AlertTitle>
                      <AlertDescription>
                        Two-factor authentication is not enabled yet. Enable it for increased security.
                      </AlertDescription>
                    </Alert>
                    <Button>Enable 2FA</Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Active Sessions</h3>
                      <p className="text-sm text-muted-foreground">Manage your active sessions</p>
                    </div>
                    <div className="rounded-md border">
                      <div className="p-4 border-b">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="font-medium">Current Session</p>
                            <p className="text-sm text-muted-foreground">Windows • Chrome • New York, USA</p>
                          </div>
                          <Badge className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
                            <Check className="h-3 w-3" /> Active Now
                          </Badge>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="font-medium">Mobile Session</p>
                            <p className="text-sm text-muted-foreground">iOS • Safari • New York, USA</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Sign Out
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline">Sign Out All Devices</Button>
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
