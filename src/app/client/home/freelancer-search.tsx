import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Search, Star} from "lucide-react"
import * as React from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";

const talents = [
    {
        id: 1,
        name: "Hoàng Anh",
        description: "Tự giới thiệu bản thân với ứng tuyển mục quảng cáo",
        rating: 4.5,
        responseTime: "Hơi lâu",
        rate: "8.500.000 VND"
    },
    {
        id: 2,
        name: "Phú Nguyễn",
        description: "Tự giới thiệu bản thân với ứng tuyển mục quảng cáo",
        rating: 4.5,
        responseTime: "Hơi lâu",
        rate: "8.400.000 VND"
    },
    {
        id: 3,
        name: "Minh Hòa",
        description: "Tự giới thiệu bản thân với ứng tuyển mục quảng cáo",
        rating: 4.5,
        responseTime: "Hơi lâu",
        rate: "8.400.000 VND"
    },
    {
        id: 4,
        name: "Lan Thanh Cẩm",
        description: "Tự giới thiệu bản thân về vai trò diễn viên phim ngắn trên Youtube",
        rating: 4.5,
        responseTime: "Hơi lâu",
        rate: "8.500.000 VND"
    },
    {
        id: 5,
        name: "Châu Ngọc Minh",
        description: "Tự giới thiệu bản thân về vai trò diễn viên quảng cáo",
        rating: 4.5,
        responseTime: "Hơi lâu",
        rate: "8.400.000 VND"
    },
    {
        id: 6,
        name: "Nguyễn Cường Đại",
        description: "Tự giới thiệu bản thân về vai trò diễn viên quảng cáo",
        rating: 4.5,
        responseTime: "Hơi lâu",
        rate: "8.400.000 VND"
    },
    {
        id: 7,
        name: "Hoàng Phong Thanh",
        description: "Tự chuyên viên makeup hoa hồng cho chụp ảnh quảng cáo",
        rating: 4.5,
        responseTime: "Hơi lâu",
        rate: "8.400.000 VND"
    },
    {
        id: 8,
        name: "Daniel Nguyễn",
        description: "Tự diễn viên diễn xuất tốt phù hợp cho bộ phim ngắn",
        rating: 4.5,
        responseTime: "Hơi lâu",
        rate: "8.400.000 VND"
    },
    {
        id: 9,
        name: "Tuệ Hương Giang",
        description: "Model tự chuyên viên trang điểm, tốt concept cho các sự kiện",
        rating: 4.5,
        responseTime: "Hơi lâu",
        rate: "8.400.000 VND"
    }
]

export const FreelancerSearch = () => {
    return (
        <div className="container mx-auto py-8">
            {/* Search Filters */}
            <div className="flex justify-between mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                        <Input
                            placeholder="Vị trí tuyển dụng"
                            className="pl-10 bg-[#D8D8D8]"
                        />
                    </div>
                    <Select>
                        <SelectTrigger className="bg-[#D8D8D8]">
                            <SelectValue placeholder="Khu vực Tỉnh/Thành phố"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="hanoi">Hà Nội</SelectItem>
                            <SelectItem value="hcm">TP. Hồ Chí Minh</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="bg-[#D8D8D8]">
                            <SelectValue placeholder="Mức lương"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="5-10">5-10 triệu</SelectItem>
                            <SelectItem value="10-15">10-15 triệu</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Button variant="dark" size="sm">Tìm kiếm</Button>
                </div>

            </div>

            {/* Talent Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {talents.map((talent) => (
                    <Card key={talent.id} className="bg-white relative roun">
                        <div className="absolute top-0 left-0 bg-[#D8D8D8] w-full h-[60px]" style={{borderTopLeftRadius : "12px",borderTopRightRadius : "12px"}}>

                        </div>
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4 flex-col">
                                <Avatar className="h-12 w-12 bg-pink-300">
                                    <AvatarFallback>{talent.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <h3 className="font-semibold">{talent.name}</h3>
                                    <p className="text-sm text-gray-600 mt-1 h-[40px]">
                                        {talent.description}
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400"/>
                                            <span className="text-sm ml-1">{talent.rating}</span>
                                        </div>
                                        <span className="text-sm text-gray-500">•</span>
                                        <span className="text-sm text-gray-500">{talent.responseTime}</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="px-6 py-4 flex justify-between items-center border-t">
                            <div className="text-sm">
                                Rate từ <span className="font-semibold">{talent.rate}</span>
                            </div>
                            <Button variant="dark" size="sm">
                                Tìm hiểu thêm
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <Pagination>
                <PaginationContent>
                <PaginationItem>
                        <PaginationPrevious href="#"/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">67</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">68</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#"/>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}