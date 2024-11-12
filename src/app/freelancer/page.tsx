"use client"

import React from "react";
import {JobSearch} from "@/app/freelancer/job-search";
import CarouselIndicators from "@/app/freelancer/carousel-indicator";
import {ApplicationProcess} from "@/app/freelancer/application-process";
import {FeaturedCareers} from "@/components/constitution/featured-career";
import {RelatedJobs} from "@/components/constitution/job-category";

const HomePage = () => {
    return <div className="mt-3 mb-10">
        <div className="max-w-[1320px] mx-auto">
            <CarouselIndicators/>
        </div>
        <div className="max-w-[1320px] mx-auto">
            <ApplicationProcess/>
        </div>
        <div className="max-w-[1320px] mx-auto">
            <JobSearch/>
        </div>
        <div className="bg-black mt-16">
            <div className="max-w-[1320px] mx-auto">
                <FeaturedCareers/>
            </div>
        </div>
        <div className="max-w-[1320px] mx-auto">
            <RelatedJobs/>
        </div>
    </div>
}

export default HomePage;