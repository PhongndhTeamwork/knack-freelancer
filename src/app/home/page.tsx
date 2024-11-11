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

const HomePage = () => {
    return <div className="mt-3 mb-10">
        <div className="max-w-[1320px] mx-auto">
            <Banner/>
        </div>
        <div>
            <Marquee className="">
                <Image src="/logo/logo-black.svg" alt="Image" width={200} height={100} layout="intrinsic" className="mx-6 filter grayscale"/>
                <Image src="/logo/logo-black.svg" alt="Image" width={200} height={100} layout="intrinsic" className="mx-6"/>
                <Image src="/logo/logo-black.svg" alt="Image" width={200} height={100} layout="intrinsic" className="mx-6"/>
                <Image src="/logo/logo-black.svg" alt="Image" width={200} height={100} layout="intrinsic" className="mx-6"/>
                <Image src="/logo/logo-black.svg" alt="Image" width={200} height={100} layout="intrinsic" className="mx-6"/>
                <Image src="/logo/logo-black.svg" alt="Image" width={200} height={100} layout="intrinsic" className="mx-6"/>
                <Image src="/logo/logo-black.svg" alt="Image" width={200} height={100} layout="intrinsic" className="mx-6"/>
                <Image src="/logo/logo-black.svg" alt="Image" width={200} height={100} layout="intrinsic" className="mx-6"/>
            </Marquee>
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