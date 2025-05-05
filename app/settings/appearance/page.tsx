"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Palette, Sun, Moon, Monitor } from "lucide-react"

export default function AppearanceSettingsPage() {
  // Use useState instead of any hooks that might require suspense
  const [theme, setTheme] = useState("system")
  const [colorScheme, setColorScheme] = useState("blue")
  const [fontSize, setFontSize] = useState("medium")
  const [density, setDensity] = useState("comfortable")
  const [animations, setAnimations] = useState(true)
  const [reduceMotion, setReduceMotion] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Appearance Settings</h2>
        <p className="text-muted-foreground">Customize the look and feel of the application.</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <CardTitle>Theme</CardTitle>
            </div>
            <CardDescription>Choose your preferred theme.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup value={theme} onValueChange={setTheme} className="grid grid-cols-3 gap-4">
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Color Scheme</CardTitle>
            <CardDescription>Choose your preferred color scheme.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-blue-600 mb-2"></div>
                <RadioGroup value={colorScheme} onValueChange={setColorScheme}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="blue" id="blue" />
                    <Label htmlFor="blue">Blue</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-purple-600 mb-2"></div>
                <RadioGroup value={colorScheme} onValueChange={setColorScheme}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="purple" id="purple" />
                    <Label htmlFor="purple">Purple</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-green-600 mb-2"></div>
                <RadioGroup value={colorScheme} onValueChange={setColorScheme}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="green" id="green" />
                    <Label htmlFor="green">Green</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Apply Color Scheme</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Display Options</CardTitle>
            <CardDescription>Customize how content is displayed.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="font-size">Font Size</Label>
              <Select value={fontSize} onValueChange={setFontSize}>
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

            <div className="space-y-2">
              <Label htmlFor="density">Density</Label>
              <Select value={density} onValueChange={setDensity}>
                <SelectTrigger id="density">
                  <SelectValue placeholder="Select density" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="compact">Compact</SelectItem>
                  <SelectItem value="comfortable">Comfortable</SelectItem>
                  <SelectItem value="spacious">Spacious</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="space-y-0.5">
                <Label htmlFor="animations">Animations</Label>
                <p className="text-sm text-muted-foreground">Enable animations throughout the interface.</p>
              </div>
              <Switch id="animations" checked={animations} onCheckedChange={setAnimations} />
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="space-y-0.5">
                <Label htmlFor="reduce-motion">Reduce Motion</Label>
                <p className="text-sm text-muted-foreground">Minimize animations for accessibility.</p>
              </div>
              <Switch id="reduce-motion" checked={reduceMotion} onCheckedChange={setReduceMotion} />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Preferences</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
