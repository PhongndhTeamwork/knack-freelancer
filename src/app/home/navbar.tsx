"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, Search } from "lucide-react"

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={cn(
            "sticky top-0 z-50 w-full transition-all",
            isScrolled ? "bg-white shadow-md" : "bg-white"
        )}>
            <div className="container mx-auto px-4">
                {/* Top Bar */}
                <div className="flex items-center justify-between py-4">
                    <Button variant="outline" className="hidden md:flex">
                        Đăng nhập
                    </Button>

                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold">knack</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                                type="search"
                                placeholder="Tìm kiếm..."
                                className="pl-10 w-[200px] lg:w-[300px]"
                            />
                        </div>
                        <Button>Đăng ký</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col space-y-4 mt-4">
                                <Button variant="outline" className="w-full">Đăng nhập</Button>
                                <Button className="w-full">Đăng ký</Button>
                                <Input type="search" placeholder="Tìm kiếm..." />
                                <div className="flex flex-col space-y-2">
                                    <Link href="/tim-nhan-su" className="p-2 hover:bg-gray-100 rounded-md">Tìm nhân sự</Link>
                                    <Link href="/tim-viec" className="p-2 hover:bg-gray-100 rounded-md">Tìm việc</Link>
                                    <Link href="/cong-dong" className="p-2 hover:bg-gray-100 rounded-md">Cộng đồng</Link>
                                    <Link href="/blog" className="p-2 hover:bg-gray-100 rounded-md">Blog</Link>
                                    <Link href="/ve-chung-toi" className="p-2 hover:bg-gray-100 rounded-md">Về chúng tôi</Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Navigation Menu */}
                <NavigationMenu className="hidden md:flex max-w-full justify-start pb-4">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Tìm nhân sự</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    Tìm kiếm nhân sự
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Tìm kiếm ứng viên phù hợp cho công ty của bạn
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Tìm việc</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    Tìm kiếm việc làm
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Khám phá cơ hội việc làm phù hợp với bạn
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Cộng đồng</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    Cộng đồng
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Tham gia cộng đồng và chia sẻ kinh nghiệm
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    Blog
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Đọc các bài viết về công việc và phát triển sự nghiệp
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Về chúng tôi</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    Về chúng tôi
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Tìm hiểu thêm về Knack và sứ mệnh của chúng tôi
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    )
}