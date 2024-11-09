"use client"

import {Navbar} from "@/app/home/navbar";
import React from "react";


type Props = {
    children?: React.ReactNode
}

const HomeLayout = ({children}: Props) => {

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="px-5">
                {children}
            </div>
            <div>

            </div>
        </div>)
}
export default HomeLayout;

