"use client"

import React from "react";
import {Header} from "@/app/freelancer/header";

type Props = {
    children?: React.ReactNode
}

const HomeLayout = ({children}: Props) => {

    return (
        <div>
            <div className="flex justify-center">
                <Header/>
            </div>
            <div className="min-h-screen mx-auto mt-[32px]">
                {children}
            </div>
            <div>
            </div>
        </div>)
}
export default HomeLayout;

