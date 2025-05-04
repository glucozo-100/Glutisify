import type React from "react"
import type { Metadata } from "next"
import SettingsPage from "./page"

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your account settings and preferences.",
}

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return <SettingsPage children={children} />
}
