"use client"

import React from "react";
import {Footer} from "@/components/constitution/footer";
import {Header} from "@/components/constitution/header";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

type Props = {
    children?: React.ReactNode
}

const HomeLayout = ({children}: Props) => {
    const pathname = usePathname();
    return (
        <div>
            <div className="flex justify-center">
                {!pathname.includes("chat") && <Header/>}
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