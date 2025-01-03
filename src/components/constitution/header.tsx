"use client"

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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import {useRouter} from "next/navigation";
import { SignOutButton } from '@clerk/nextjs';
import useProfileStore from "@/lib/store/profile.modal";
import useAuthStore from "@/lib/store/user.modal";
import {useEffect, useState} from "react";

type Props = {
    logoLink: string,
    components: NavigationItem[],
    navWidth: number
}

export const Header = ({logoLink, components, navWidth}: Props) => {
    // const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const {profile} = useProfileStore();
    const { removeToken} = useAuthStore();

    useEffect(() => {
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
            <div className="container mx-auto max-w-[1840px] px-5">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href={logoLink || "/home"} className="flex items-center space-x-2 w-[130px] h-[47px]">
                        <Illustration width={130} height={47} url='/logo/logo-black.svg'/>
                    </Link>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden md:flex md:justify-center mx-auto pb-0 relative" style={{
                        width: navWidth + "px"
                    }}>
                        <NavigationMenuList>
                            {components.map((c, index: number) => {
                                return (
                                    <NavigationMenuItem key={index}>
                                        <NavigationMenuTrigger className="text-[16px]">{c.name}</NavigationMenuTrigger>
                                        <NavigationMenuContent className="left-0">
                                            <ul className="grid gap-3 p-4" style={{
                                                width: navWidth + "px"
                                            }}>
                                                {c.items.map((item, itemIndex) =>
                                                <li key={itemIndex} className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-muted"
                                                            href={item.href}
                                                        >
                                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                                {item.title}
                                                            </div>
                                                            <p className="text-sm leading-tight text-muted-foreground">
                                                                {item.description}
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>)}

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
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Avatar className="border border-gray-300 w-10 h-10">
                                            <AvatarImage src={profile.avatar} alt="User 1"
                                                         className="w-full h-full"/>
                                            <AvatarFallback className="text-[20px]">{profile.username?.substring(0,1) || "P"}</AvatarFallback>
                                        </Avatar>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator/>
                                        <DropdownMenuItem>Profile</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => {
                                            removeToken();
                                        }}><SignOutButton redirectUrl="/home">
                                            <button>Logout</button>
                                        </SignOutButton></DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <p className="ml-3 text-[16px] font-bold">{profile.username}</p>
                                {/*<Button size="sm" variant="danger-outline" className="ml-2" onClick={() => {*/}
                                {/*    router.push("/home")*/}
                                {/*}}>*/}
                                {/*    Logout<LogOut width={24} height={24}/>*/}
                                {/*</Button>*/}
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
                                                    <AvatarImage src={profile?.avatar} alt="User 1"
                                                                 className="w-full h-full"/>
                                                    <AvatarFallback className="text-[20px]">{profile.username?.substring(0,1) || "P"}</AvatarFallback>
                                                </Avatar>
                                                <p className="ml-3 text-[16px] font-bold cursor-pointer">{profile.username}</p>
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