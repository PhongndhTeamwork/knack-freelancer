import {Badge} from "@/components/ui/badge"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {CircleDot} from 'lucide-react'

export const WorkDashboard = () => {
    return (
        <div className="space-y-6">
            {/* Header Stats */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Card className="flex-1 bg-[#DDDDDD]">
                    <CardContent className="flex items-center justify-between p-4">
                        <span className="text-sm font-medium text-gray-600">Công việc đã làm</span>
                        <Badge variant="secondary">04 công việc</Badge>
                    </CardContent>
                </Card>
                <Card className="flex-1 bg-[#DDDDDD]">
                    <CardContent className="flex items-center justify-between p-4">
                        <span className="text-sm font-medium text-gray-600">Thu nhập tháng 4</span>
                        <span className="font-bold">48.400.000 VND</span>
                    </CardContent>
                </Card>
            </div>

            {/* Current Projects */}
            <div className="border-none space-y-6">
                <div>
                    <p className="text-[24px] font-bold">Công việc đang đảm nhận</p>
                </div>
                <div className="grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Card>
                            <CardContent className="p-4 space-y-4">
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-3">
                                        <CircleDot className="h-8 w-8 text-orange-500"/>
                                        <div className="space-y-1">
                                            <h3 className="font-medium">Mẫu ảnh</h3>
                                            <p className="text-sm text-muted-foreground">Loveria Dating Brand</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between flex-col">
                                        <span className="text-sm">1.600.000 VND</span>
                                        <span className="text-sm text-muted-foreground">từ 3/4/2024 đến nay</span>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <Badge variant="secondary">Hợp tác 1 lần</Badge>
                                    <Badge variant="secondary">01 Video TikTok</Badge>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4 space-y-4">
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-3">
                                        <CircleDot className="h-8 w-8 text-orange-500"/>
                                        <div className="space-y-1">
                                            <h3 className="font-medium">Diễn viên võ thuật</h3>
                                            <p className="text-sm text-muted-foreground">Loveria Dating Brand</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between flex-col">
                                        <span className="text-sm">1.600.000 VND</span>
                                        <span className="text-sm text-muted-foreground">từ 3/4/2024 đến nay</span>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <Badge variant="secondary">Hợp tác 1 lần</Badge>
                                    <Badge variant="secondary">01 Video TikTok</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Pricing Table */}
            <div className="mt-6 space-y-6">
                <div>
                    <p className="text-[24px] font-bold">Bảng giá</p>
                </div>
                <div>
                    <div className="grid gap-6 sm:grid-cols-2">
                        <Card className="">
                            <CardHeader className="font-bold">Người mẫu</CardHeader>
                            <CardContent className="space-y-2">
                                <div
                                    className="flex items-center justify-between py-2 border-b bg-[#D8D8D8] p-3 rounded-[8px]">
                                    <span>Facebook</span>
                                    <div className="text-right">
                                        <div>400.000 VND/story</div>
                                        <div>1.000.000 VND/post</div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between py-2 border-b bg-[#D8D8D8] p-3 rounded-[8px]">
                                    <span>Instagram</span>
                                    <div className="text-right">
                                        <div>350.000 VND/story</div>
                                        <div>1.000.000 VND/post</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2 bg-[#D8D8D8] p-3 rounded-[8px]">
                                    <span>Tiktok</span>
                                    <div>1.200.000 VND/post</div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="">
                            <CardHeader className="font-bold">Diễn viên phim ngắn</CardHeader>
                            <CardContent className="space-y-2">
                                <div
                                    className="flex items-center justify-between py-2 border-b bg-[#D8D8D8] p-3 rounded-[8px]">
                                    <span>Vai chính</span>
                                    <span>Thỏa thuận</span>
                                </div>
                                <div className="flex items-center justify-between py-2 bg-[#D8D8D8] p-3 rounded-[8px]">
                                    <span>Vai phụ</span>
                                    <span>Thỏa thuận</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}