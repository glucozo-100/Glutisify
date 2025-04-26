"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, MessageSquare, Shield, Users, Video, Zap } from "lucide-react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Check if running in browser
    if (typeof window !== "undefined") {
      const isAuthenticated = localStorage.getItem("isAuthenticated") === "true"
      if (isAuthenticated) {
        router.push("/dashboard")
      }
    }
  }, [router])

  const features = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Subject Tracking",
      description: "Track and monitor profiles across multiple social media platforms in one place.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Advanced Analytics",
      description: "Get detailed insights and analytics on social media performance and engagement.",
    },
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: "Video Monitoring",
      description: "Automatically detect and save videos from tracked subjects across platforms.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "AI Chatbot",
      description: "Ask questions about your tracked subjects and get instant insights.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Real-time Updates",
      description: "Receive notifications and alerts for new activities from tracked subjects.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure & Private",
      description: "Your data is encrypted and securely stored with advanced privacy controls.",
    },
  ]

  const testimonials = [
    {
      quote: "This platform has revolutionized how we track social media influencers for our marketing campaigns.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "Brand Solutions",
    },
    {
      quote: "The analytics provided are incredibly detailed and have helped us make data-driven decisions.",
      author: "Michael Chen",
      role: "Social Media Manager",
      company: "Digital Trends",
    },
    {
      quote: "The ability to track subjects across multiple platforms in one dashboard has saved us countless hours.",
      author: "Emily Rodriguez",
      role: "Content Strategist",
      company: "Media Insights",
    },
  ]

  const platforms = ["Facebook", "Instagram", "TikTok", "LinkedIn", "Twitter", "YouTube"]

  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1 overflow-auto">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0" />
          <div className="relative z-10 px-6 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
            <Badge className="mb-4 px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">
              Social Media Intelligence Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Track, Analyze, and Monitor Social Media Profiles
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl text-muted-foreground">
              Comprehensive tracking and analytics for profiles across Facebook, Instagram, LinkedIn, TikTok and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/support">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-16 bg-muted/50">
          <div className="px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Supported Platforms</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Track subjects across all major social media platforms in one unified dashboard
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {platforms.map((platform) => (
                <div
                  key={platform}
                  className="flex items-center justify-center bg-background rounded-lg shadow-sm border p-6 w-40 h-20"
                >
                  <span className="font-semibold">{platform}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-3 py-1 text-sm">Powerful Features</Badge>
              <h2 className="text-3xl font-bold mb-4">Everything You Need to Track Social Media</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive suite of tools helps you monitor, analyze, and gain insights from social media
                profiles
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border border-muted transition-all hover:shadow-md hover:border-primary/20"
                >
                  <CardContent className="pt-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-muted/30">
          <div className="px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-3 py-1 text-sm">Testimonials</Badge>
              <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover how SocialTrack is helping professionals track and analyze social media profiles
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-background">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <svg
                        width="45"
                        height="36"
                        viewBox="0 0 45 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M13.5 18H9C9 12.477 13.477 8 19 8V12C15.686 12 13 14.686 13 18H13.5C15.433 18 17 19.567 17 21.5V30.5C17 32.433 15.433 34 13.5 34H4.5C2.567 34 1 32.433 1 30.5V21.5C1 19.567 2.567 18 4.5 18H13.5ZM40.5 18H36C36 12.477 40.477 8 46 8V12C42.686 12 40 14.686 40 18H40.5C42.433 18 44 19.567 44 21.5V30.5C44 32.433 42.433 34 40.5 34H31.5C29.567 34 28 32.433 28 30.5V21.5C28 19.567 29.567 18 31.5 18H40.5Z" />
                      </svg>
                    </div>
                    <p className="mb-6 italic">{testimonial.quote}</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Tracking?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Join thousands of professionals who use SocialTrack to monitor and analyze social media profiles
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/auth/register">Sign Up Now</Link>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-muted/80">
          <div className="px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-6 md:mb-0">
                <div className="rounded-full bg-primary w-8 h-8 flex items-center justify-center text-primary-foreground font-bold">
                  SM
                </div>
                <span className="font-bold text-xl">SocialTrack</span>
              </div>
              <div className="flex gap-8">
                <Link href="/support" className="text-muted-foreground hover:text-foreground">
                  Help & Support
                </Link>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} SocialTrack. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
