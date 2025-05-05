"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Database, Server, Shield, Zap } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AdvancedSettingsPage() {
  const [cacheSize, setCacheSize] = useState(512)
  const [apiThrottle, setApiThrottle] = useState(60)
  const [debugMode, setDebugMode] = useState(false)
  const [experimentalFeatures, setExperimentalFeatures] = useState(false)
  const [dataRetention, setDataRetention] = useState("90")
  const [syncInterval, setSyncInterval] = useState("60")

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Advanced Settings</h2>
        <p className="text-muted-foreground">Configure advanced system settings and performance options.</p>
      </div>

      <Alert variant="warning" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          These settings are for advanced users. Incorrect configuration may affect system performance.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance" className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            Performance
          </TabsTrigger>
          <TabsTrigger value="data" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            Data Management
          </TabsTrigger>
          <TabsTrigger value="system" className="flex items-center gap-2">
            <Server className="h-4 w-4" />
            System
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cache Settings</CardTitle>
              <CardDescription>Configure application cache behavior.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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

              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <Label htmlFor="clear-on-exit">Clear Cache on Exit</Label>
                  <p className="text-sm text-muted-foreground">Automatically clear cache when application closes.</p>
                </div>
                <Switch id="clear-on-exit" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="mr-2">
                Clear Cache Now
              </Button>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Rate Limiting</CardTitle>
              <CardDescription>Configure API request throttling.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="api-throttle">Requests per minute: {apiThrottle}</Label>
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

              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <Label htmlFor="batch-requests">Batch API Requests</Label>
                  <p className="text-sm text-muted-foreground">Combine multiple API requests when possible.</p>
                </div>
                <Switch id="batch-requests" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
              <CardDescription>Configure how long data is stored.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                Purge All Data
              </Button>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Synchronization</CardTitle>
              <CardDescription>Configure data sync settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="sync-interval">Sync Interval (minutes)</Label>
                <Select value={syncInterval} onValueChange={setSyncInterval}>
                  <SelectTrigger id="sync-interval">
                    <SelectValue placeholder="Select sync interval" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="360">6 hours</SelectItem>
                    <SelectItem value="720">12 hours</SelectItem>
                    <SelectItem value="1440">24 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <Label htmlFor="background-sync">Background Sync</Label>
                  <p className="text-sm text-muted-foreground">Allow syncing when app is in background.</p>
                </div>
                <Switch id="background-sync" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="mr-2">
                Sync Now
              </Button>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Configuration</CardTitle>
              <CardDescription>Advanced system settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="debug-mode">Debug Mode</Label>
                  <p className="text-sm text-muted-foreground">Enable detailed logging and debugging tools.</p>
                </div>
                <Switch id="debug-mode" checked={debugMode} onCheckedChange={setDebugMode} />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <Label htmlFor="experimental">Experimental Features</Label>
                  <p className="text-sm text-muted-foreground">Enable experimental features and updates.</p>
                </div>
                <Switch id="experimental" checked={experimentalFeatures} onCheckedChange={setExperimentalFeatures} />
              </div>

              {debugMode && (
                <div className="pt-4 space-y-2">
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
            </CardContent>
            <CardFooter>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resource Allocation</CardTitle>
              <CardDescription>Configure system resource usage.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="max-threads">Maximum Worker Threads</Label>
                <Input type="number" id="max-threads" defaultValue="4" min="1" max="16" />
                <p className="text-xs text-muted-foreground">Number of worker threads for background processing.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-memory">Maximum Memory Usage (MB)</Label>
                <Input type="number" id="max-memory" defaultValue="1024" min="512" max="4096" step="256" />
                <p className="text-xs text-muted-foreground">Maximum memory allocation for the application.</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure advanced security options.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-logout">Auto Logout</Label>
                  <p className="text-sm text-muted-foreground">Automatically log out after period of inactivity.</p>
                </div>
                <Switch id="auto-logout" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                <Select defaultValue="30">
                  <SelectTrigger id="session-timeout">
                    <SelectValue placeholder="Select timeout period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 minutes</SelectItem>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                    <SelectItem value="never">Never</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <Label htmlFor="secure-storage">Secure Local Storage</Label>
                  <p className="text-sm text-muted-foreground">Encrypt sensitive data in local storage.</p>
                </div>
                <Switch id="secure-storage" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Security</CardTitle>
              <CardDescription>Configure API security settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="api-key-rotation">Automatic API Key Rotation</Label>
                  <p className="text-sm text-muted-foreground">Automatically rotate API keys periodically.</p>
                </div>
                <Switch id="api-key-rotation" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="api-key-rotation-period">Rotation Period</Label>
                <Select defaultValue="90">
                  <SelectTrigger id="api-key-rotation-period">
                    <SelectValue placeholder="Select rotation period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="60">60 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="180">180 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <Label htmlFor="ip-restriction">IP Address Restrictions</Label>
                  <p className="text-sm text-muted-foreground">Restrict API access to specific IP addresses.</p>
                </div>
                <Switch id="ip-restriction" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
