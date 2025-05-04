import type { Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Billing Settings",
  description: "Manage your billing settings and subscription plans.",
}

export default function BillingSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Billing Settings</h3>
        <p className="text-sm text-muted-foreground">Manage your billing settings and subscription plans.</p>
      </div>
      <Separator />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Current Plan</CardTitle>
                <CardDescription>Your current subscription plan and usage.</CardDescription>
              </div>
              <Badge>Pro Plan</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>API Requests</span>
                <span className="font-medium">8,453 / 10,000</span>
              </div>
              <Progress value={84.53} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Storage</span>
                <span className="font-medium">3.2GB / 5GB</span>
              </div>
              <Progress value={64} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Social Accounts</span>
                <span className="font-medium">12 / 15</span>
              </div>
              <Progress value={80} />
            </div>
            <div className="rounded-md bg-muted p-4">
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

        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Manage your payment methods and billing information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue="cards">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="cards">Cards</TabsTrigger>
                <TabsTrigger value="bank">Bank Account</TabsTrigger>
              </TabsList>
              <TabsContent value="cards" className="space-y-4 pt-4">
                <div className="rounded-md border p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">•••• •••• •••• 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 04/2024</p>
                    </div>
                    <Badge>Default</Badge>
                  </div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">•••• •••• •••• 5555</p>
                      <p className="text-sm text-muted-foreground">Expires 07/2025</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Add New Card
                </Button>
              </TabsContent>
              <TabsContent value="bank" className="pt-4">
                <div className="rounded-md border p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">Bank of America</p>
                      <p className="text-sm text-muted-foreground">•••• 7890</p>
                    </div>
                    <Badge>Default</Badge>
                  </div>
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  Add Bank Account
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
            <CardDescription>View your recent billing history and download invoices.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-4 text-sm font-medium">
                <div>Date</div>
                <div>Amount</div>
                <div>Status</div>
                <div className="text-right">Invoice</div>
              </div>
              <Separator />
              {[
                { date: "Apr 1, 2023", amount: "$29.00", status: "Paid" },
                { date: "Mar 1, 2023", amount: "$29.00", status: "Paid" },
                { date: "Feb 1, 2023", amount: "$29.00", status: "Paid" },
                { date: "Jan 1, 2023", amount: "$29.00", status: "Paid" },
              ].map((invoice, index) => (
                <div key={index} className="grid grid-cols-4 items-center text-sm">
                  <div>{invoice.date}</div>
                  <div>{invoice.amount}</div>
                  <div>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 hover:bg-green-50 dark:bg-green-900/20 dark:text-green-400"
                    >
                      {invoice.status}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
