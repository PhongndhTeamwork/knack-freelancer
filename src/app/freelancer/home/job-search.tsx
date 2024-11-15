"use client"

import * as React from "react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Avatar, AvatarFallback} from "@/components/ui/avatar"
import {Badge} from "@/components/ui/badge"
import {Card, CardContent, CardFooter} from "@/components/ui/card"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {Search} from "lucide-react"

const jobs = [
    {
        id: 1,
        title: "Diễn viên lồng giọng",
        company: "Giggles Studio - Hà Nội",
        timeAgo: "5 giờ trước",
        salary: "7.600.000 VND",
        description: "Chúng tôi cần tuyển 2 diễn viên lồng giọng cho nhân vật nữ của bộ phim hoạt hình sắp tới",
        requirements: ["Không yêu cầu kinh nghiệm"],
        duration: "Làm việc 2 tháng",
        deadline: "Còn 28 ngày để ứng tuyển",
        negotiable: "Có thể thỏa thuận"
    },
    {
        id: 2,
        title: "Cast chính",
        company: "Moian Entertainment - Hà Nội",
        timeAgo: "2 giờ trước",
        salary: "8.400.000 VND",
        description: "Chúng tôi cần một diễn viên cho vị trí nam chính cho bộ phim lần này",
        requirements: ["01 năm kinh nghiệm"],
        duration: "Làm việc 6 tháng",
        deadline: "Còn 28 ngày để ứng tuyển",
        negotiable: "Có thể thỏa thuận"
    },
    {
        id: 3,
        title: "Cast chính",
        company: "Moian Entertainment - Hà Nội",
        timeAgo: "2 giờ trước",
        salary: "8.400.000 VND",
        description: "Chúng tôi cần một diễn viên cho vị trí nam chính cho bộ phim lần này",
        requirements: ["01 năm kinh nghiệm"],
        duration: "Làm việc 6 tháng",
        deadline: "Còn 28 ngày để ứng tuyển",
        negotiable: "Có thể thỏa thuận"
    },
    {
        id: 4,
        title: "Cast chính",
        company: "Moian Entertainment - Hà Nội",
        timeAgo: "2 giờ trước",
        salary: "8.400.000 VND",
        description: "Chúng tôi cần một diễn viên cho vị trí nam chính cho bộ phim lần này",
        requirements: ["01 năm kinh nghiệm"],
        duration: "Làm việc 6 tháng",
        deadline: "Còn 28 ngày để ứng tuyển",
        negotiable: "Có thể thỏa thuận"
    },
    {
        id: 5,
        title: "Cast chính",
        company: "Moian Entertainment - Hà Nội",
        timeAgo: "2 giờ trước",
        salary: "8.400.000 VND",
        description: "Chúng tôi cần một diễn viên cho vị trí nam chính cho bộ phim lần này",
        requirements: ["01 năm kinh nghiệm"],
        duration: "Làm việc 6 tháng",
        deadline: "Còn 28 ngày để ứng tuyển",
        negotiable: "Có thể thỏa thuận"
    },
    {
        id: 6,
        title: "Cast chính",
        company: "Moian Entertainment - Hà Nội",
        timeAgo: "2 giờ trước",
        salary: "8.400.000 VND",
        description: "Chúng tôi cần một diễn viên cho vị trí nam chính cho bộ phim lần này",
        requirements: ["01 năm kinh nghiệm"],
        duration: "Làm việc 6 tháng",
        deadline: "Còn 28 ngày để ứng tuyển",
        negotiable: "Có thể thỏa thuận"
    },
    // Add more jobs as needed
]

export const JobSearch = () => {
    // const [currentPage, setCurrentPage] = useState(1);
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-[40px] font-semibold mb-8">Tìm kiếm công việc cho bạn</h1>

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
                            <SelectValue placeholder="Mức lương cho job"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1-3">1-3 triệu</SelectItem>
                            <SelectItem value="3-5">3-5 triệu</SelectItem>
                            <SelectItem value="5-10">5-10 triệu</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="bg-[#D8D8D8]">
                            <SelectValue placeholder="Kinh nghiệm yêu cầu"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="none">Không yêu cầu</SelectItem>
                            <SelectItem value="1-year">1 năm</SelectItem>
                            <SelectItem value="2-year">2 năm</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Button variant="dark" size="sm">Tìm kiếm</Button>
                </div>

            </div>

            {/* Job Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {jobs.map((job) => (
                    <Card key={job.id} className="border rounded-lg">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarFallback>{job.company[0]}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-semibold">{job.title}</h3>
                                            <p className="text-sm text-gray-500">
                                                {job.company}, {job.timeAgo}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold">{job.salary}</p>
                                            <p className="text-sm text-gray-500">{job.negotiable}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mt-3 text-sm">{job.description}</p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {job.requirements.map((req, index) => (
                                                <Badge key={index} variant="secondary"
                                                       className="bg-[#D8D8D8] font-thin">
                                                    {req}
                                                </Badge>
                                            ))}
                                            <Badge variant="secondary"
                                                   className="bg-[#D8D8D8] font-thin">{job.duration}</Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="px-6 py-4 flex justify-between items-center border-t">
                            <Button variant="dark" size="sm">
                                Tìm hiểu thêm
                            </Button>
                            <span className="text-sm text-gray-500">{job.deadline}</span>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Pagination */}
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