import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Image as ImageIcon, Search, Send } from 'lucide-react'
import {Illustration} from "@/components/custom/illustration";

export const CommunityFeed = () => {
    return (
        <div className="w-full mx-auto mb-20">
            <h1 className="text-[48px] font-bold mb-4">Cộng đồng</h1>

            <Tabs defaultValue="business" className="mb-6">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="business">Thảo luận doanh nghiệp</TabsTrigger>
                    <TabsTrigger value="freelancer">Thảo luận freelancer</TabsTrigger>
                </TabsList>
            </Tabs>

            <Card className="mb-6">
                <CardContent className="p-4">
                    <div className="flex gap-4">
                        <Avatar>
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>AW</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <Input
                                placeholder="Hôm nay bạn muốn chia sẻ điều gì..."
                                className="mb-2 bg-[#D8D8D8]"
                            />
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon">
                                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                        <ImageIcon className="h-5 w-5" />
                                    </Button>
                                </div>
                                <Button size="sm" variant="dark">
                                    <Send className="h-4 w-4 mr-1" />
                                    Đăng
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Post Items */}
            {[1, 2].map((post) => (
                <Card key={post} className="mb-6">
                    <CardHeader className="flex flex-row items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src="/placeholder.svg" />
                                <AvatarFallback>AW</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-semibold">Azunyan U. Wu</h3>
                                <p className="text-sm text-muted-foreground">Thiết kế thời trang</p>
                            </div>
                        </div>
                        <Button variant="secondary" size="sm">
                            Theo dõi
                        </Button>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                        <p className="mb-4">MY NEW CỔ LỆCH SƯN!!!!</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Illustration
                                url="/community/community1.png"
                                className="w-full rounded-lg object-cover aspect-square"
                            />
                            <Illustration
                                url="/community/community2.png"
                                className="w-full rounded-lg object-cover aspect-square"
                            />
                        </div>
                    </CardContent>
                </Card>
            ))}

            {/* Search and Filter Button - Fixed Position */}
            <div className="fixed bottom-4 right-4 flex gap-2">
                <Button size="icon" variant="secondary">
                    <Search className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}