"use client"

import React from "react";
import {ProfileHeader} from "@/app/freelancer/profile/profile-header";
import {ProfileDashboard} from "@/app/freelancer/profile/profile-dashboard";


const HomePage = () => {
    return <div className="mt-3 mb-10">
        <div className="mx-auto">
            <ProfileHeader/>
            <ProfileDashboard/>
        </div>
    </div>
}

export default HomePage;