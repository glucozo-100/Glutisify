"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CreditCard,
  CheckCircle,
  AlertCircle,
  Download,
  DollarSign,
  CreditCardIcon,
  FileText,
  Calendar,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function BillingPage() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <main className="flex-1 flex flex-col min-h-screen">
        <DashboardHeader />
        <div className="flex-1 p-4 md:p-6 max-w-[1600px] mx-auto w-full">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight gradient-text">Billing</h2>
              <p className="text-muted-foreground">Manage your subscription and payment methods.</p>
            </div>

            <Tabs defaultValue="subscription" className="space-y-4 enhanced-tabs">
              <TabsList className="w-full sm:w-auto justify-start">
                <TabsTrigger value="subscription" className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <span>Subscription</span>
                </TabsTrigger>
                <TabsTrigger value="payment-methods" className="flex items-center gap-2">
                  <CreditCardIcon className="h-4 w-4" />
                  <span>Payment Methods</span>
                </TabsTrigger>
                <TabsTrigger value="billing-history" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Billing History</span>
                </TabsTrigger>
              </TabsList>

              {/* Subscription Tab */}
              <TabsContent value="subscription" className="mt-0 animate-fade-in">
                <Card className="border-blue-100 dark:border-slate-700 shadow-sm card-hover">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-blue-700 dark:text-blue-300">Current Plan</CardTitle>
                        <CardDescription>Your current subscription plan and usage.</CardDescription>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50">
                        Active
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>API Requests</span>
                        <span className="font-medium">8,453 / 10,000</span>
                      </div>
                      <Progress value={84.53} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Storage</span>
                        <span className="font-medium">3.2GB / 5GB</span>
                      </div>
                      <Progress value={64} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Social Accounts</span>
                        <span className="font-medium">12 / 15</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div className="rounded-md bg-blue-50/50 dark:bg-slate-800/50 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Pro Plan</p>
                          <p className="text-sm text-muted-foreground">$29/month</p>
                        </div>
                        <Button variant="outline">Change Plan</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-3 mt-4">
                  <Card className="border-blue-100 dark:border-slate-700 shadow-sm card-hover">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-blue-700 dark:text-blue-300">Basic</CardTitle>
                      <CardDescription>For individuals and small teams</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-2xl font-bold">
                        $9.99<span className="text-sm font-normal text-slate-500 dark:text-slate-400">/month</span>
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Up to 5 subjects</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Basic analytics</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-slate-300 dark:text-slate-600" />
                          <span className="text-slate-400 dark:text-slate-500">API access</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-slate-300 dark:text-slate-600" />
                          <span className="text-slate-400 dark:text-slate-500">Priority support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Downgrade
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border-blue-100 dark:border-slate-700 shadow-sm bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-800 card-hover">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-blue-700 dark:text-blue-300">Pro</CardTitle>
                        <Badge className="bg-blue-600 text-white hover:bg-blue-700">Current</Badge>
                      </div>
                      <CardDescription>For growing businesses</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-2xl font-bold">
                        $29.99<span className="text-sm font-normal text-slate-500 dark:text-slate-400">/month</span>
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Unlimited subjects</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Advanced analytics</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>API access</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Priority support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Current Plan</Button>
                    </CardFooter>
                  </Card>

                  <Card className="border-blue-100 dark:border-slate-700 shadow-sm card-hover">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-blue-700 dark:text-blue-300">Enterprise</CardTitle>
                      <CardDescription>For large organizations</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-2xl font-bold">
                        $99.99<span className="text-sm font-normal text-slate-500 dark:text-slate-400">/month</span>
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Unlimited everything</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Custom analytics</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Dedicated API</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>24/7 support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Upgrade
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              {/* Payment Methods Tab */}
              <TabsContent value="payment-methods" className="mt-0 animate-fade-in">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="border-blue-100 dark:border-slate-700 shadow-sm card-hover">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-blue-700 dark:text-blue-300">Payment Methods</CardTitle>
                      <CardDescription>Manage your payment methods and billing information.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="rounded-lg border border-blue-100 dark:border-slate-700 p-4 bg-white dark:bg-slate-800 shadow-sm">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="rounded-md bg-blue-100 dark:bg-slate-700 p-2">
                                <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <p className="font-medium">Visa ending in 4242</p>
                                <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                              </div>
                            </div>
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50">
                              Default
                            </Badge>
                          </div>
                        </div>

                        <div className="rounded-lg border border-blue-100 dark:border-slate-700 p-4 bg-white dark:bg-slate-800 shadow-sm">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="rounded-md bg-blue-100 dark:bg-slate-700 p-2">
                                <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <p className="font-medium">Mastercard ending in 5678</p>
                                <p className="text-sm text-muted-foreground">Expires 08/2024</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              Set as Default
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border border-dashed border-blue-100 dark:border-slate-700 p-4 bg-blue-50/30 dark:bg-slate-800/50">
                        <div className="flex flex-col items-center justify-center text-center py-4">
                          <CreditCard className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                          <h3 className="font-medium">Add New Payment Method</h3>
                          <p className="text-sm text-muted-foreground mb-4">Add a new credit card or debit card</p>
                          <Button>Add Payment Method</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-100 dark:border-slate-700 shadow-sm card-hover">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-blue-700 dark:text-blue-300">Billing Information</CardTitle>
                      <CardDescription>Update your billing address and information.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="billing-name">Name</Label>
                          <Input id="billing-name" defaultValue="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="billing-email">Email</Label>
                          <Input id="billing-email" type="email" defaultValue="john.doe@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="billing-address">Address</Label>
                          <Input id="billing-address" defaultValue="123 Main St" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="billing-city">City</Label>
                          <Input id="billing-city" defaultValue="Anytown" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="billing-state">State</Label>
                          <Input id="billing-state" defaultValue="CA" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="billing-zip">ZIP Code</Label>
                          <Input id="billing-zip" defaultValue="12345" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="billing-country">Country</Label>
                          <Select defaultValue="us">
                            <SelectTrigger id="billing-country">
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="us">United States</SelectItem>
                              <SelectItem value="ca">Canada</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="au">Australia</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t border-blue-50 dark:border-slate-700 pt-4">
                      <Button variant="outline">Cancel</Button>
                      <Button>Save Changes</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              {/* Billing History Tab */}
              <TabsContent value="billing-history" className="mt-0 animate-fade-in">
                <Card className="border-blue-100 dark:border-slate-700 shadow-sm card-hover">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <div>
                          <CardTitle className="text-blue-700 dark:text-blue-300">Billing History</CardTitle>
                          <CardDescription>View your billing history and download invoices.</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <div className="relative flex-1 sm:flex-none">
                          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="search"
                            placeholder="Search invoices..."
                            className="pl-8 h-9 w-full md:w-[200px] lg:w-[300px]"
                          />
                        </div>
                        <Select defaultValue="all">
                          <SelectTrigger className="h-9 w-[130px]">
                            <SelectValue placeholder="Filter" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Invoices</SelectItem>
                            <SelectItem value="paid">Paid</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="overdue">Overdue</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-blue-50 dark:bg-slate-700 text-left">
                              <th className="px-6 py-3 font-medium">Invoice</th>
                              <th className="px-6 py-3 font-medium">Date</th>
                              <th className="px-6 py-3 font-medium">Amount</th>
                              <th className="px-6 py-3 font-medium">Status</th>
                              <th className="px-6 py-3 font-medium text-right">Action</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-blue-100 dark:divide-slate-700">
                            <tr className="hover:bg-blue-50/30 dark:hover:bg-slate-800/60 transition-colors">
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                  <div className="rounded-md bg-blue-100 dark:bg-slate-700 p-2">
                                    <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                  </div>
                                  <div>
                                    <p className="font-medium">INV-001</p>
                                    <p className="text-xs text-muted-foreground">Pro Plan - Monthly</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-muted-foreground" />
                                  <span>May 1, 2023</span>
                                </div>
                              </td>
                              <td className="px-6 py-4 font-medium">$29.99</td>
                              <td className="px-6 py-4">
                                <Badge className="bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50">
                                  Paid
                                </Badge>
                              </td>
                              <td className="px-6 py-4 text-right">
                                <Button variant="ghost" size="sm" className="h-8 gap-1">
                                  <Download className="h-4 w-4" />
                                  <span>PDF</span>
                                </Button>
                              </td>
                            </tr>
                            <tr className="hover:bg-blue-50/30 dark:hover:bg-slate-800/60 transition-colors">
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                  <div className="rounded-md bg-blue-100 dark:bg-slate-700 p-2">
                                    <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                  </div>
                                  <div>
                                    <p className="font-medium">INV-002</p>
                                    <p className="text-xs text-muted-foreground">Pro Plan - Monthly</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-muted-foreground" />
                                  <span>Apr 1, 2023</span>
                                </div>
                              </td>
                              <td className="px-6 py-4 font-medium">$29.99</td>
                              <td className="px-6 py-4">
                                <Badge className="bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50">
                                  Paid
                                </Badge>
                              </td>
                              <td className="px-6 py-4 text-right">
                                <Button variant="ghost" size="sm" className="h-8 gap-1">
                                  <Download className="h-4 w-4" />
                                  <span>PDF</span>
                                </Button>
                              </td>
                            </tr>
                            <tr className="hover:bg-blue-50/30 dark:hover:bg-slate-800/60 transition-colors">
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                  <div className="rounded-md bg-blue-100 dark:bg-slate-700 p-2">
                                    <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                  </div>
                                  <div>
                                    <p className="font-medium">INV-003</p>
                                    <p className="text-xs text-muted-foreground">Pro Plan - Monthly</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-muted-foreground" />
                                  <span>Mar 1, 2023</span>
                                </div>
                              </td>
                              <td className="px-6 py-4 font-medium">$29.99</td>
                              <td className="px-6 py-4">
                                <Badge className="bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50">
                                  Paid
                                </Badge>
                              </td>
                              <td className="px-6 py-4 text-right">
                                <Button variant="ghost" size="sm" className="h-8 gap-1">
                                  <Download className="h-4 w-4" />
                                  <span>PDF</span>
                                </Button>
                              </td>
                            </tr>
                            <tr className="hover:bg-blue-50/30 dark:hover:bg-slate-800/60 transition-colors">
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                  <div className="rounded-md bg-blue-100 dark:bg-slate-700 p-2">
                                    <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                  </div>
                                  <div>
                                    <p className="font-medium">INV-004</p>
                                    <p className="text-xs text-muted-foreground">Pro Plan - Monthly</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-muted-foreground" />
                                  <span>Feb 1, 2023</span>
                                </div>
                              </td>
                              <td className="px-6 py-4 font-medium">$29.99</td>
                              <td className="px-6 py-4">
                                <Badge className="bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50">
                                  Paid
                                </Badge>
                              </td>
                              <td className="px-6 py-4 text-right">
                                <Button variant="ghost" size="sm" className="h-8 gap-1">
                                  <Download className="h-4 w-4" />
                                  <span>PDF</span>
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="text-sm text-muted-foreground">Showing 4 of 12 invoices</div>
                      <div className="flex items-center gap-1">
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <ChevronLeft className="h-4 w-4" />
                          <span className="sr-only">Previous page</span>
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 w-8">
                          1
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 w-8">
                          2
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 w-8">
                          3
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <ChevronRight className="h-4 w-4" />
                          <span className="sr-only">Next page</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-blue-50 dark:border-slate-700 pt-4">
                    <Button variant="outline" className="gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Select Date Range</span>
                    </Button>
                    <Button className="gap-1">
                      <Download className="h-4 w-4" />
                      <span>Export All Invoices</span>
                    </Button>
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
