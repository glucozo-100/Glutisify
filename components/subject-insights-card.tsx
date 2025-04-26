import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb } from "lucide-react"

interface SubjectInsightsCardProps {
  title: string
  subject: string
  platform: string
  metric: string
  insight: string
  recommendation: string
}

export function SubjectInsightsCard({
  title,
  subject,
  platform,
  metric,
  insight,
  recommendation,
}: SubjectInsightsCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge>{platform}</Badge>
        </div>
        <CardDescription>{subject}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-xl font-bold mb-2">{metric}</div>
        <p className="text-sm text-muted-foreground mb-4">{insight}</p>
        <div className="flex items-start gap-2 bg-muted/50 p-3 rounded-md">
          <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="text-sm font-medium">Recommendation</p>
            <p className="text-sm text-muted-foreground">{recommendation}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
