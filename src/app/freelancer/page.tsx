"use client"

import React from "react";
import {JobSearch} from "@/app/freelancer/job-search";
import CarouselIndicators from "@/app/freelancer/carousel-indicator";

const HomePage = () => {
    return <div className="mt-3 mb-10">
        <div className="max-w-[1320px] mx-auto">
            <CarouselIndicators total={4} current={0}/>
        </div>
        <div className="max-w-[1320px] mx-auto">
            <JobSearch/>
        </div>
    </div>
}

export default HomePage;