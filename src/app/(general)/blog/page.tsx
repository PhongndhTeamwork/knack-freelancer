import {Badge} from "@/components/ui/badge"
import {Card, CardContent} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
    const articles = Array(4).fill({
        title: "Công bố Nghệ sĩ danh giá của năm",
        image: "/placeholder.svg?height=400&width=600",
        platform: "TikTok"
    })

    const tips = Array(8).fill({
        title: "Mẹo nhỏ",
        content: "Làm sao để triển chiếu thẳng khi dùng trước đám đông",
        url: ""
    })

    return (
        <div className="container mx-auto py-4 w-[1320px] mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    {/* Featured Article */}
                    <Card className="group relative overflow-hidden">
                        <Link href="#" className="block">
                            <div className="relative aspect-[16/9]">
                                <Image
                                    src="/placeholder.svg?height=400&width=600"
                                    alt="Featured artist in gallery"
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                                <Badge
                                    className="absolute top-4 left-4 bg-white text-black hover:bg-white/90"
                                    variant="secondary"
                                >
                                    TikTok
                                </Badge>
                            </div>
                            <div className="absolute bottom-0 p-4 text-white">
                                <h2 className="text-2xl font-bold">
                                    Công bố Nghệ sĩ danh giá của năm
                                </h2>
                            </div>
                        </Link>
                    </Card>

                    {/* Article Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {articles.map((article, index) => (
                            <Card key={index} className="group relative overflow-hidden">
                                <Link href="#" className="block">
                                    <div className="relative aspect-[16/9]">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                                        <Badge
                                            className="absolute top-4 left-4 bg-white text-black hover:bg-white/90"
                                            variant="secondary"
                                        >
                                            {article.platform}
                                        </Badge>
                                    </div>
                                    <div className="absolute bottom-0 p-4 text-white">
                                        <h3 className="font-bold">{article.title}</h3>
                                    </div>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Tips Sidebar */}
                <div className="lg:col-span-1">
                    <div className="w-full mx-auto">
                        <div className="">
                            {/*<ScrollArea className="h-[600px] pr-4">*/}
                                <div className="space-y-4">
                                    {tips.map((tip, index) => (
                                        <Card key={index} className="bg-muted">
                                            <CardContent className="p-4 space-y-2 grid grid-cols-1 lg:grid-cols-3 gap-4">
                                                <div className="lg:col-span-2">
                                                    <h3 className="text-sm text-muted-foreground font-medium">{tip.title}</h3>
                                                    <p className="text-sm mt-3 h-15 line-clamp-2">
                                                        {tip.content}
                                                    </p>
                                                </div>
                                                <div className="w-full rounded-xl bg-gray-200">
                                                    <Image
                                                        src={tip.url}
                                                        alt={tip.title}
                                                        className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            {/*</ScrollArea>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
