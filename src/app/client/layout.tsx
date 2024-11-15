"use client"

import React from "react";
import {Footer} from "@/components/constitution/footer";
import {Header} from "@/components/constitution/header";
import {NavigationItem} from "@/lib/types/nanigation-item.type";

type Props = {
    children?: React.ReactNode
}

const components: NavigationItem[] = [
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

const HomeLayout = ({children}: Props) => {

    return (
        <div>
            <div className="flex justify-center">
                <Header logoLink="/client" components={components}/>
            </div>
            <div className="min-h-screen mx-auto mt-[80px]">
                {children}
            </div>
            <div>
                <Footer/>
            </div>
        </div>)
}
export default HomeLayout;

