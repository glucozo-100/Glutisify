"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Check, CreditCard, Download } from "lucide-react"
import { useAuthCheck } from "@/utils/auth"

export default function BillingPage() {
  useAuthCheck() // This will redirect to login if not authenticated

  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      description: "For individuals tracking a few subjects",
      features: ["Track up to 5 subjects", "Basic analytics", "7-day data retention", "Email support"],
      current: false,
    },
    {
      name: "Professional",
      price: "$29.99",
      description: "For professionals needing more tracking capabilities",
      features: [
        "Track up to 20 subjects",
        "Advanced analytics",
        "30-day data retention",
        "Priority email support",
        "API access",
      ],
      current: true,
    },
    {
      name: "Enterprise",
      price: "$99.99",
      description: "For teams and organizations with advanced needs",
      features: [
        "Unlimited subjects",
        "Real-time analytics",
        "90-day data retention",
        "24/7 phone & email support",
        "Advanced API access",
        "Custom integrations",
        "Dedicated account manager",
      ],
      current: false,
    },
  ]

  const invoices = [
    {
      id: "INV-001",
      date: "July 15, 2023",
      amount: "$29.99",
      status: "Paid",
      downloadUrl: "#",
    },
    {
      id: "INV-002",
      date: "June 15, 2023",
      amount: "$29.99",
      status: "Paid",
      downloadUrl: "#",
    },
    {
      id: "INV-003",
      date: "May 15, 2023",
      amount: "$29.99",
      status: "Paid",
      downloadUrl: "#",
    },
    {
      id: "INV-004",
      date: "April 15, 2023",
      amount: "$29.99",
      status: "Paid",
      downloadUrl: "#",
    },
    {
      id: "INV-005",
      date: "March 15, 2023",
      amount: "$29.99",
      status: "Paid",
      downloadUrl: "#",
    },
  ]

  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1">
        <DashboardHeader />
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Billing & Subscription</h2>
            <p className="text-muted-foreground">Manage your subscription plan and billing information</p>
          </div>

          <Tabs defaultValue="subscription" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="subscription">Subscription</TabsTrigger>
              <TabsTrigger value="invoices">Invoices</TabsTrigger>
            </TabsList>

            <TabsContent value="subscription" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Current Plan</CardTitle>
                  <CardDescription>You are currently on the Professional plan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
                    <div className="space-y-1">
                      <h3 className="font-medium">Professional Plan</h3>
                      <p className="text-sm text-muted-foreground">Next billing on August 15, 2023 • $29.99/month</p>
                    </div>
                    <Badge className="bg-green-50 text-green-700 border-green-200">Active</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-2">
                  <div className="flex gap-2">
                    <Button variant="outline">Change Plan</Button>
                    <Button variant="outline" className="text-red-500 hover:text-red-600">
                      Cancel Subscription
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Cancelling your subscription will disable access to premium features at the end of your billing
                    period.
                  </p>
                </CardFooter>
              </Card>

              <div className="grid gap-4 md:grid-cols-3">
                {plans.map((plan) => (
                  <Card key={plan.name} className={plan.current ? "border-primary" : ""}>
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-3xl font-bold">
                        {plan.price}
                        <span className="text-sm font-normal text-muted-foreground"> / month</span>
                      </div>
                      <ul className="space-y-2 text-sm">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      {plan.current ? (
                        <Button className="w-full" disabled>
                          Current Plan
                        </Button>
                      ) : (
                        <Button variant="outline" className="w-full">
                          Switch to {plan.name}
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Manage your payment details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 p-4 border rounded-lg">
                    <CreditCard className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      Update
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="invoices" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Billing History</CardTitle>
                  <CardDescription>View and download your past invoices</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-5 p-4 bg-muted/50 font-medium text-sm">
                      <div>Invoice</div>
                      <div>Date</div>
                      <div>Amount</div>
                      <div>Status</div>
                      <div className="text-right">Actions</div>
                    </div>
                    {invoices.map((invoice) => (
                      <div key={invoice.id} className="grid grid-cols-5 p-4 border-t items-center">
                        <div>{invoice.id}</div>
                        <div>{invoice.date}</div>
                        <div>{invoice.amount}</div>
                        <div>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {invoice.status}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <Button variant="ghost" size="sm" asChild>
                            <a href={invoice.downloadUrl} download>
                              <Download className="h-4 w-4 mr-1" />
                              PDF
                            </a>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Billing Address</CardTitle>
                  <CardDescription>Your billing address information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm">123 Main Street</p>
                      <p className="text-sm">Apt 4B</p>
                      <p className="text-sm">New York, NY 10001</p>
                      <p className="text-sm">United States</p>
                    </div>
                  </div>
                  <Button variant="outline">Update Billing Address</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
