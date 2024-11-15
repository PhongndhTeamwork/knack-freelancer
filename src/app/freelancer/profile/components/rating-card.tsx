import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, MessageSquare, Star } from 'lucide-react'
import Link from "next/link"
import {Illustration} from "@/components/custom/illustration";

export const RatingCard = () => {
    return (
        <Card className="bg-black text-white ">
            <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-[24px]">
                    <span className="font-semibold">Rate: </span>
                    <div className="flex items-center">
                        <span className="font-bold">4.8</span>
                        <span className="font-bold">/5</span>
                    </div>
                </div>

                <p className="text-[16px] text-gray-300">
                    Cho phép doanh nghiệp sử dụng lãnh anh 06 tháng
                </p>

                <div className="flex items-center gap-4 justify-between text-[16px]">
                    <Link
                        href="#"
                        className="h-[24px] flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                        <Illustration width={24} height={24} url="/freelancer/icon/contact.svg"/>
                        <span className="ml-2 text-[16px]">Liên hệ</span>

                    </Link>
                    <div className="flex items-center space-x-4">
                        <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                            <Illustration width={32} height={32} url="/freelancer/icon/facebook.svg"/>
                        </Link>
                        <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                            <Illustration width={32} height={32} url="/freelancer/icon/instagram.svg"/>
                        </Link>
                        <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                            <Illustration width={32} height={32} url="/freelancer/icon/tiktok.svg"/>
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}