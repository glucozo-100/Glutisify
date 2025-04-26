"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function useAuthCheck() {
  const router = useRouter()

  useEffect(() => {
    // Check if running in browser
    if (typeof window !== "undefined") {
      const isAuthenticated = localStorage.getItem("isAuthenticated") === "true"
      if (!isAuthenticated) {
        router.push("/auth/login")
      }
    }
  }, [router])

  return null
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("isAuthenticated")
    window.location.href = "/auth/login"
  }
}
