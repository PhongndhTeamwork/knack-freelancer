"use client"

import React from "react";

type Props = {
    children?: React.ReactNode
}

const HomeLayout = ({children}: Props) => {

    return (
        <div>
            <div className="flex justify-center">
            </div>
            <div className="min-h-screen mx-auto mt-[32px]">
                {children}
            </div>
            <div>
            </div>
        </div>)
}
export default HomeLayout;

