"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BookOpen,
  FileText,
  HelpCircle,
  MessageSquare,
  Search,
  Video,
  BarChart3,
  Users,
  Mail,
  Phone,
} from "lucide-react"

import { useAuthCheck } from "@/utils/auth"

export default function SupportPage() {
  useAuthCheck() // This will redirect to login if not authenticated

  const [searchQuery, setSearchQuery] = useState("")

  const faqs = [
    {
      question: "How do I add a new subject to track?",
      answer:
        "To add a new subject, navigate to the Subjects page and click on the 'Add Subject' button. Fill in the required information including name and social media profiles, then click 'Save'.",
    },
    {
      question: "Can I track private profiles?",
      answer:
        "No, SocialTrack can only track public profiles. Private profiles have privacy settings that prevent external tools from accessing their data.",
    },
    {
      question: "How often is the data updated?",
      answer:
        "Data is updated according to your plan. Basic plans update daily, while Professional and Enterprise plans offer more frequent updates, with Enterprise providing near real-time tracking.",
    },
    {
      question: "How do I export my data?",
      answer:
        "You can export data by going to the Dashboard or specific subject pages and clicking the 'Export' button. You can choose between CSV, Excel, or PDF formats.",
    },
    {
      question: "What platforms are supported?",
      answer:
        "We currently support Facebook, Instagram, TikTok, LinkedIn, Twitter, and YouTube. We're constantly working to add more platforms.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "To cancel your subscription, go to the Billing page, click on 'Cancel Subscription', and follow the prompts. Your subscription will remain active until the end of your current billing period.",
    },
  ]

  const guides = [
    {
      title: "Getting Started with SocialTrack",
      description: "Learn the basics of setting up your account and tracking your first subject",
      icon: <BookOpen className="h-8 w-8" />,
      category: "Beginner",
    },
    {
      title: "Advanced Analytics Guide",
      description: "Deep dive into the analytics features and how to interpret the data",
      icon: <BarChart3 className="h-8 w-8" />,
      category: "Advanced",
    },
    {
      title: "Subject Management Best Practices",
      description: "Tips and tricks for effectively managing multiple subjects",
      icon: <Users className="h-8 w-8" />,
      category: "Intermediate",
    },
    {
      title: "Video Tracking Features",
      description: "How to use the video tracking and analysis features",
      icon: <Video className="h-8 w-8" />,
      category: "Intermediate",
    },
    {
      title: "Using the AI Chatbot",
      description: "Get the most out of the AI assistant for insights and analysis",
      icon: <MessageSquare className="h-8 w-8" />,
      category: "Beginner",
    },
    {
      title: "Data Export and Reporting",
      description: "Create and customize reports from your tracking data",
      icon: <FileText className="h-8 w-8" />,
      category: "Advanced",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredGuides = guides.filter(
    (guide) =>
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1">
        <DashboardHeader />
        <div className="p-3 md:p-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Help & Support</h2>
            <p className="text-sm text-muted-foreground">Find answers, guides, and support resources</p>
          </div>

          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for help, guides, and FAQs..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Tabs defaultValue="guides" className="space-y-3">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
              <TabsTrigger value="contact">Contact Support</TabsTrigger>
            </TabsList>

            <TabsContent value="guides" className="space-y-4">
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {filteredGuides.map((guide, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="pb-1 pt-3 px-3">
                      <div className="flex justify-between items-start">
                        <Badge variant="outline">{guide.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-3">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 p-2 bg-primary/10 rounded-lg text-primary">{guide.icon}</div>
                        <div>
                          <h3 className="font-semibold text-lg">{guide.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{guide.description}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-3 py-2">
                      <Button variant="outline" className="w-full">
                        Read Guide
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {filteredGuides.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No guides found</h3>
                  <p className="mt-2 text-muted-foreground">Try adjusting your search terms</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="faqs" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Find answers to common questions about SocialTrack</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFaqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  {filteredFaqs.length === 0 && (
                    <div className="text-center py-12">
                      <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-medium">No FAQs found</h3>
                      <p className="mt-2 text-muted-foreground">Try adjusting your search terms</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Support</CardTitle>
                  <CardDescription>Get in touch with our support team for assistance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Support request subject" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Describe your issue in detail"
                      className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    ></textarea>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Submit Request</Button>
                </CardFooter>
              </Card>

              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Live Chat</CardTitle>
                    <CardDescription>Chat with our support team</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <MessageSquare className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Available Monday-Friday</p>
                        <p className="text-sm text-muted-foreground">9am - 5pm EST</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Start Chat
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Email Support</CardTitle>
                    <CardDescription>Send us an email</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <Mail className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                        <p className="text-sm font-medium">support@socialtrack.com</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Send Email
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Phone Support</CardTitle>
                    <CardDescription>Call our support line</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <Phone className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Available for Enterprise plans</p>
                        <p className="text-sm font-medium">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Call Support
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">Support Team</h3>
            <div className="grid gap-3 md:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardContent className="pt-6 text-center">
                    <Avatar className="h-20 w-20 mx-auto mb-4">
                      <AvatarImage src={`/placeholder.svg?height=80&width=80`} />
                      <AvatarFallback>ST</AvatarFallback>
                    </Avatar>
                    <h4 className="font-medium">Support Agent {i}</h4>
                    <p className="text-sm text-muted-foreground">Customer Support Specialist</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
