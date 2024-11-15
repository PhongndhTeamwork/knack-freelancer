"use client"

import React from "react";
import {ImageCarousel} from "@/components/constitution/carousel-indicator";
import {CommunityFeed} from "@/app/(general)/community/community-feed";


const HomePage = () => {
    return <div className="mt-3 mb-10">
        <div className="max-w-[1320px] mx-auto">
            <ImageCarousel/>
        </div>
        <div className="max-w-[1320px] mx-auto mt-20">
            <CommunityFeed/>
        </div>
    </div>
}

export default HomePage;