"use client"

import React from "react";
import {FreelancerSearch} from "@/app/client/home/freelancer-search";
import {InspirationGallery} from "@/app/client/home/inspiration-gallery";
import {FeaturedCareers} from "@/components/constitution/featured-career";
import {RelatedJobs} from "@/components/constitution/job-category";
import {WelcomeBanner} from "@/app/client/home/welcome-banner";


const HomePage = () => {
    return <div className="mt-3 mb-10">
        <div className="max-w-[1320px] mx-auto">
            <WelcomeBanner/>
        </div>
        <div className="max-w-[1320px] mx-auto">
            <FreelancerSearch/>
        </div>
        <div className="max-w-[1320px] mx-auto">
            <InspirationGallery/>
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