"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bot, Send, User } from "lucide-react"
import { useAuthCheck } from "@/utils/auth"

export default function ChatbotPage() {
  useAuthCheck()
  const [message, setMessage] = useState("")
  const [activeTab, setActiveTab] = useState("chat")

  // Sample chat history
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      sender: "bot",
      message: "Hello! I'm your social media analytics assistant. How can I help you today?",
      timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    },
    {
      id: 2,
      sender: "user",
      message: "Can you analyze the performance of my latest Instagram post?",
      timestamp: new Date(Date.now() - 1000 * 60 * 4).toISOString(),
    },
    {
      id: 3,
      sender: "bot",
      message:
        "I've analyzed your latest Instagram post. It's performing 23% better than your average post. The engagement rate is 4.8%, which is excellent. The post received the most engagement between 6-8 PM, primarily from users aged 25-34.",
      timestamp: new Date(Date.now() - 1000 * 60 * 3).toISOString(),
    },
    {
      id: 4,
      sender: "user",
      message: "What can I do to improve engagement further?",
      timestamp: new Date(Date.now() - 1000 * 60 * 2).toISOString(),
    },
    {
      id: 5,
      sender: "bot",
      message:
        "Based on your audience data, I recommend posting more carousel-style content with multiple images or videos. Also, try posting during peak engagement hours (6-8 PM) and use more interactive elements like polls and questions in your stories to drive engagement. Hashtag analysis shows that using 5-7 targeted hashtags performs better than using too many generic ones.",
      timestamp: new Date(Date.now() - 1000 * 60).toISOString(),
    },
  ])

  // Function to handle sending a new message
  const handleSendMessage = () => {
    if (message.trim() === "") return

    // Add user message to chat history
    const newUserMessage = {
      id: chatHistory.length + 1,
      sender: "user",
      message: message,
      timestamp: new Date().toISOString(),
    }
    setChatHistory([...chatHistory, newUserMessage])
    setMessage("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = {
        id: chatHistory.length + 2,
        sender: "bot",
        message:
          "I've analyzed your request and found some interesting insights. Your content is performing well, but there's room for improvement in your posting schedule and hashtag strategy. Would you like me to generate a detailed report?",
        timestamp: new Date().toISOString(),
      }
      setChatHistory((prev) => [...prev, botResponse])
    }, 1000)
  }

  // Sample suggested queries
  const suggestedQueries = [
    "Analyze my Instagram performance",
    "Compare engagement across platforms",
    "Generate content recommendations",
    "Identify top performing posts",
    "Analyze audience demographics",
    "Suggest optimal posting times",
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <main className="flex-1">
        <DashboardHeader />
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 md:max-w-3xl">
              <Card className="h-[calc(100vh-12rem)]">
                <CardHeader className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">AI Assistant</CardTitle>
                        <CardDescription className="text-xs">Powered by advanced analytics</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-50">
                      Online
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0 flex flex-col h-[calc(100%-8rem)]">
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {chatHistory.map((chat) => (
                      <div
                        key={chat.id}
                        className={`flex ${chat.sender === "user" ? "justify-end" : "justify-start"} gap-2`}
                      >
                        {chat.sender === "bot" && (
                          <Avatar className="h-8 w-8 mt-1">
                            <AvatarFallback>
                              <Bot className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            chat.sender === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <p className="text-sm">{chat.message}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {new Date(chat.timestamp).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                        {chat.sender === "user" && (
                          <Avatar className="h-8 w-8 mt-1">
                            <AvatarFallback>
                              <User className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 border-t">
                  <form
                    className="flex w-full gap-2"
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleSendMessage()
                    }}
                  >
                    <Input
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            </div>

            <div className="w-full md:w-80">
              <Tabs defaultValue="suggestions" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="w-full">
                  <TabsTrigger value="suggestions" className="flex-1">
                    Suggestions
                  </TabsTrigger>
                  <TabsTrigger value="history" className="flex-1">
                    History
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="suggestions" className="mt-4 space-y-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Suggested Queries</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {suggestedQueries.map((query, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="w-full justify-start text-sm h-auto py-2"
                          onClick={() => {
                            setMessage(query)
                          }}
                        >
                          {query}
                        </Button>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="history" className="mt-4 space-y-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Recent Conversations</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {[
                        "Performance analysis for Instagram",
                        "Content strategy recommendations",
                        "Audience growth tactics",
                        "Hashtag optimization",
                        "Competitor analysis report",
                      ].map((item, index) => (
                        <div key={index} className="border-b pb-2 last:border-0 last:pb-0">
                          <p className="text-sm font-medium">{item}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(Date.now() - 1000 * 60 * 60 * (index + 1)).toLocaleDateString()}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
