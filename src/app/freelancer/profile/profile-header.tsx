import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Button} from "@/components/ui/button"
import {Illustration} from "@/components/custom/illustration";

interface ProfileHeaderProps {
    name?: string
    subtitle?: string
    avatarUrl?: string
    followers?: number
    following?: number,
    address?: string
}

export const ProfileHeader = ({
                                  name = "Nguyễn Văn Cường",
                                  subtitle = "Người mẫu - Diễn viên/Người mẫu • TP HCM | 175 kg",
                                  avatarUrl = "/avatar/avatar.svg",
                                  followers = 2800,
                                  following = 240,
                                  address = "Hà Nội, Việt Nam"
                              }: ProfileHeaderProps) => {
    return (
        <div className="w-full overflow-hidden rounded-none">
            <div className="h-24 bg-gradient-to-r rounded-none from-[#FFA6F6] to-[#FF7173]"/>
            <div className="relative pt-4 sm:pt-8 rounded-none max-w-[1320px] mx-auto">
                <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4">
                    <Avatar className="w-32 h-32 border-4 border-white absolute -top-12 sm:-top-16 left-4">
                        <AvatarImage src={avatarUrl} alt={name}/>
                        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex justify-between">
                    <div>
                        <div className="sm:ml-40 text-center sm:text-left mt-12 sm:mt-0 space-y-2">
                            <h1 className="text-2xl font-bold">{name}</h1>
                            <p className="text-sm text-muted-foreground">{subtitle}</p>
                            <div className="text-sm text-black h-[20px] flex items-center">
                                <div className="h-[20px] w-[20px] mr-2">
                                    <Illustration width={20} height={20} url="/social/map-pin.svg" />
                                </div>
                                {address}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center sm:justify-start space-x-4 mt-4 sm:ml-32">
                        <div className="text-center bg-[#D8D8D8] rounded-[8px] p-3 h-fit">
                            <p className="font-semibold text-start">{followers.toLocaleString()}</p>
                            <p className="text-sm text-muted-foreground text-start">Người theo dõi</p>
                        </div>
                        <div className="text-center bg-[#D8D8D8] rounded-[8px] p-3 h-fit">
                            <p className="font-semibold text-start">{following.toLocaleString()}</p>
                            <p className="text-sm text-muted-foreground text-start">Đang theo dõi</p>
                        </div>
                        <Button variant="dark" size="sm">
                            Chỉnh sửa thông tin
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}