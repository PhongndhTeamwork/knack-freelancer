"use client"

import React, {useEffect} from "react";
import {Footer} from "@/components/constitution/footer";
import {Header} from "@/components/constitution/header";
import {NavigationItem} from "@/lib/types/nanigation-item.type";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import useProfileStore from "@/lib/store/profile.modal";
import useAuthStore from "@/lib/store/user.modal";

type Props = {
    children?: React.ReactNode
}

const components: NavigationItem[] = [
    {
        name: "Tìm việc",
        href: "/freelancer/home",
        title: "Tìm kiếm việc làm",
        description:
            "Khám phá cơ hội việc làm phù hợp với bạn.",
    },
    {
        name: "Profile",
        href: "/freelancer/profile",
        title: "Profile",
        description:
            "Tạo profile của riêng bạn.",
    },
    {
        name: "Chat",
        href: "/freelancer/chat",
        title: "Chat",
        description:
            "Chat với nhà tuyển dụng.",
    },
    {
        name: "Cộng đồng",
        href: "/freelancer/community",
        title: "Cộng đồng",
        description:
            "Tham gia cộng đồng và chia sẻ kinh nghiệm.",
    },
    {
        name: "Blog",
        href: "/freelancer/blog",
        title: "Blog",
        description:
            "Đọc các bài viết về công việc và phát triển sự nghiệp.",
    },
    {
        name: "Dashboard",
        href: "/freelancer/dashboard",
        title: "Dashboard",
        description:
            "Tìm hiểu thêm về chúng tôi.",
    },
    {
        name: "Về chúng tôi",
        href: "/docs/primitives/alert-dialog",
        title: "Về chúng tôi",
        description:
            "Tìm hiểu thêm về Knack và sứ mệnh của chúng tôi.",
    },
]

const HomeLayout = ({children}: Props) => {
    const pathname = usePathname();
    const {fetchProfile} = useProfileStore();
    const {token, setToken} = useAuthStore();
    useEffect(() => {
        const storedToken = localStorage.getItem("knackToken");
        setToken(storedToken || "");
    }, [setToken]);

    useEffect(() => {
        // console.log(token);
        if(!token) return;
        fetchProfile(token)
    }, [fetchProfile, token]);
    return (
        <div>
            <div className="flex justify-center">
                {!pathname.includes("chat") && <Header logoLink="/freelancer/home" components={components} navWidth={750}/>}
            </div>
            <div className={cn("min-h-screen mx-auto", !pathname.includes("chat") && "mt-[80px]")}>
                {children}
            </div>
            <div>
                {!pathname.includes("chat") && <Footer/>}
            </div>
        </div>)
}
export default HomeLayout;

