import {PersonalInfo} from "@/app/freelancer/profile/components/personal-info";
import {RatingCard} from "@/app/freelancer/profile/components/rating-card";
import {WorkDashboard} from "@/app/freelancer/profile/components/work-dashboard";
import {CompletedWork} from "@/app/freelancer/profile/components/completed-work";


export const ProfileDashboard = () => {
    return (
        <div className="container mx-auto space-y-4 max-w-[1320px] mt-12">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 p-4 space-y-8">
                    {/* Column 1 - 1/3 width */}
                    <PersonalInfo/>
                    <RatingCard/>
                </div>
                <div className="col-span-2 p-4 space-y-8">
                    <WorkDashboard/>
                    <CompletedWork/>
                </div>
            </div>
        </div>
    )
}