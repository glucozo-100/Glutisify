"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

// Simple authentication state management
export const isAuthenticated = () => {
  if (typeof window === "undefined") return false
  return localStorage.getItem("isAuthenticated") === "true"
}

export const login = () => {
  if (typeof window === "undefined") return
  localStorage.setItem("isAuthenticated", "true")
}

export const logout = () => {
  if (typeof window === "undefined") return
  localStorage.removeItem("isAuthenticated")
}

// Hook to check authentication and redirect if not authenticated
export const useAuthCheck = () => {
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/auth/login")
    }
  }, [router])
}
