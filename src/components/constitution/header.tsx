"use client"

import * as React from "react"
import Link from "next/link"
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
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
import {Menu} from "lucide-react"
import {Illustration} from "@/components/custom/illustration";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {NavigationItem} from "@/lib/types/nanigation-item.type";

const components: { name: string, title: string; href: string; description: string }[] = [
    {
        name: "Tìm nhân sự",
        href: "/docs/primitives/alert-dialog",
        title: "Tìm kiếm nhân sự",
        description:
            "Tìm kiếm ứng viên phù hợp cho công ty của bạn.",
    },
    {
        name: "Tìm việc",
        href: "/docs/primitives/alert-dialog",
        title: "Tìm kiếm việc làm",
        description:
            "Khám phá cơ hội việc làm phù hợp với bạn.",
    },
    {
        name: "Cộng đồng",
        href: "/community",
        title: "Cộng đồng",
        description:
            "Tham gia cộng đồng và chia sẻ kinh nghiệm.",
    },
    {
        name: "Blog",
        href: "/blog",
        title: "Blog",
        description:
            "Đọc các bài viết về công việc và phát triển sự nghiệp.",
    },
    {
        name: "Về chúng tôi",
        href: "/docs/primitives/alert-dialog",
        title: "Về chúng tôi",
        description:
            "Tìm hiểu thêm về Knack và sứ mệnh của chúng tôi.",
    },
]

type Props = {
    logoLink: string,
    components: NavigationItem[]
}

export const Header = ({logoLink, components}: Props) => {
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
            "top-0 z-50 w-full transition-all text-[16px] fixed",
            isScrolled ? "bg-white shadow-md" : "bg-white"
        )}>
            <div className="container mx-auto max-w-[1320px]">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href={logoLink || "/home"} className="flex items-center space-x-2 w-[130px] h-[47px]">
                        <Illustration width={130} height={47} url='/logo/logo-black.svg'/>
                    </Link>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden md:flex mx-auto pb-0 relative w-[600px]">
                        <NavigationMenuList>
                            {components.map((c, index: number) => {
                                return (
                                    <NavigationMenuItem key={index}>
                                        <NavigationMenuTrigger className="text-[16px]">{c.name}</NavigationMenuTrigger>
                                        <NavigationMenuContent className="left-0">
                                            <ul className="grid w-[600px] gap-3 p-4">
                                                <li className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                            href={c.href}
                                                        >
                                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                                {c.title}
                                                            </div>
                                                            <p className="text-sm leading-tight text-muted-foreground">
                                                                {c.description}
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                )
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Search and Auth Buttons */}
                    <div className="flex items-center space-x-8">
                        <div className="hidden md:flex relative h-[24px] space-x-2 items-center">
                            <Button size="sm" variant="ghost">
                                <Illustration width={24} height={24} url="/freelancer/icon/paper-plane-tilt.svg"/>
                            </Button>
                            <Button size="sm" variant="ghost">
                                <Illustration width={24} height={24} url="/freelancer/icon/bell.svg"/>
                            </Button>
                            <Button size="sm" variant="ghost">
                                <Illustration width={24} height={24} url="/freelancer/icon/envelope.svg"/>
                            </Button>
                        </div>
                        <div className="hidden md:flex items-center space-x-2">
                            <div className="flex items-center">
                                <Avatar className="border border-gray-300 w-10 h-10">
                                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User 1"
                                                 className="w-full h-full"/>
                                    <AvatarFallback className="text-[20px]">Q</AvatarFallback>
                                </Avatar>
                                <p className="ml-3 text-[16px] font-bold">Quyền Văn</p>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu className="h-5 w-5"/>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <div className="flex flex-col space-y-4 mt-4">
                                    <Input type="search" placeholder="Tìm kiếm..."/>
                                    <div className="flex flex-col space-y-2">
                                        <Link href="/search" className="p-2 hover:bg-gray-100 rounded-md">Tìm nhân sự &
                                            việc làm</Link>
                                        <Link href="/fields" className="p-2 hover:bg-gray-100 rounded-md">Lĩnh
                                            vực</Link>
                                        <Link href="/community" className="p-2 hover:bg-gray-100 rounded-md">Cộng
                                            đồng</Link>
                                        <Link href="/blog" className="p-2 hover:bg-gray-100 rounded-md">Blog</Link>
                                        <Link href="/about" className="p-2 hover:bg-gray-100 rounded-md">Về chúng
                                            tôi</Link>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <div className="hidden md:flex relative h-[24px] space-x-4">
                                            <Illustration width={24} height={24}
                                                          url="/freelancer/icon/paper-plane-tilt.svg"/>
                                            <Illustration width={24} height={24} url="/freelancer/icon/bell.svg"/>
                                            <Illustration width={24} height={24} url="/freelancer/icon/envelope.svg"/>
                                        </div>
                                        <div className="hidden md:flex items-center space-x-2">
                                            <div className="flex items-center">
                                                <Avatar className="border border-gray-300 w-10 h-10">
                                                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User 1"
                                                                 className="w-full h-full"/>
                                                    <AvatarFallback className="text-[20px]">Q</AvatarFallback>
                                                </Avatar>
                                                <p className="ml-3 text-[16px] font-bold cursor-pointer">Quyền Văn</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}