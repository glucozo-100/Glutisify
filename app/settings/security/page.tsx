import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "Security Settings",
  description: "Manage your account security settings",
}

export default function SecurityPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Security Settings</h1>
        <p className="text-muted-foreground">Manage your account security and authentication methods.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>Change your account password</CardDescription>
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
        </CardContent>
        <CardFooter>
          <Button>Update Password</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>Add an extra layer of security to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="enable-2fa" className="flex flex-col space-y-1">
              <span>Enable Two-Factor Authentication</span>
              <span className="text-xs font-normal text-muted-foreground">
                Require a verification code when logging in
              </span>
            </Label>
            <Switch id="enable-2fa" />
          </div>

          <div className="rounded-md bg-muted p-4">
            <div className="flex items-center gap-4">
              <div className="h-24 w-24 rounded-md bg-background flex items-center justify-center text-muted-foreground">
                QR Code
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Scan this QR code with your authenticator app</p>
                <p className="text-xs text-muted-foreground">
                  If you can't scan the QR code, you can manually enter this code in your app:
                </p>
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  ABCD EFGH IJKL MNOP
                </code>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled>Setup 2FA</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Login Sessions</CardTitle>
          <CardDescription>Manage your active login sessions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md border p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Current Session</p>
                <p className="text-xs text-muted-foreground">Windows • Chrome • New York, USA</p>
                <p className="text-xs text-muted-foreground">Started 2 hours ago</p>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
            </div>
          </div>

          <div className="rounded-md border p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Previous Session</p>
                <p className="text-xs text-muted-foreground">Mac • Safari • San Francisco, USA</p>
                <p className="text-xs text-muted-foreground">Last active 2 days ago</p>
              </div>
              <Button variant="outline" size="sm">
                Revoke
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="destructive">Logout of All Sessions</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
