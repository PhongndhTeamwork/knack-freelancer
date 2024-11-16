import React from "react";
import {Banner} from "@/app/home/banner";
import {CareerCategories} from "@/app/home/career-category";
import {PlatformSections} from "@/app/home/platform";
import {CommunitySection} from "@/app/home/community";
import {RecruitmentFeatures} from "@/app/home/recruitment-feature";
import {WhyKnackSection} from "@/app/home/why-knack";
import {JobCategories} from "@/app/home/job-category";
import Marquee from "react-fast-marquee"
import Image from "next/image";
import {Button} from "@/components/ui/button";

const brands = [
    {
        url : "/partner/brand1.png"
    },
    {
        url : "/partner/brand2.png"
    },
    {
        url : "/partner/brand3.png"
    },
    {
        url : "/partner/brand4.png"
    },
    {
        url : "/partner/brand5.png"
    },
    {
        url : "/partner/brand6.png"
    },
    {
        url : "/partner/brand7.png"
    },
]

const HomePage = () => {
    return <div className="mt-3 mb-10">
        <div className="max-w-[1320px] mx-auto">
            <Banner/>
        </div>
        <div className="relative flex items-center">
            <div className="h-[100px] left-0 absolute bg-gradient-to-r from-white to-transparent z-10" style={{
                width: "calc((100vw - 1320px) / 2)"
            }}/>
            <Marquee className="">
                {brands.map((brand, index) =>
                    <Button key={index} className="w-[240px] h-[120px] mx-6" variant="ghost">
                        <Image src={brand.url} alt="Image" width={200} height={100}
                               layout="intrinsic"
                               className="mx-12"/>
                    </Button>
                )}
            </Marquee>
            <div className="h-[100px] right-0 absolute bg-gradient-to-l from-white to-transparent z-10" style={{
                width: "calc((100vw - 1320px) / 2)"
            }}/>
        </div>
        <div className="bg-black mt-16">
            <div className="max-w-[1320px] mx-auto">
                <CareerCategories/>
            </div>
        </div>
        <div className="max-w-[1320px] mx-auto">
            <PlatformSections/>
        </div>
        <div className="max-w-[1320px] mx-auto">
            <CommunitySection/>
        </div>
        <div className="max-w-[1320px] mx-auto ">
            <RecruitmentFeatures/>
        </div>
        <div className="max-w-[1320px] mx-auto">
            <WhyKnackSection/>
        </div>
        <div className="max-w-[1320px] mx-auto">
            <JobCategories/>
        </div>
    </div>
}

export default HomePage;