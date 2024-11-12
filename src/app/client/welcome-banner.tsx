import { Card, CardContent } from "@/components/ui/card"
import { Hand } from "lucide-react"

interface WelcomeBannerProps {
    userName?: string
    message?: string
    supportingText?: string
}

export const WelcomeBanner = ({
                                      userName = "Dora",
                                      message = "mừng bạn quay trở lại!",
                                      supportingText = "Hãy để Knack tìm cho bạn những nhân sự phù hợp nhất nhé!"
                                  }: WelcomeBannerProps) => {
    return (
        <Card className="border-none bg-gradient-to-r from-pink-50 to-pink-100">
            <CardContent className="p-6">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold tracking-tight">
                            Chào {userName}
                        </h1>
                        <Hand className="h-6 w-6 rotate-12 text-yellow-400" />
                        <span className="text-2xl font-bold">{message}</span>
                    </div>
                    <p className="text-muted-foreground">
                        {supportingText}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}