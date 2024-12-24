import Image from "next/image"
import {Card, CardContent} from "@/components/ui/card"

const steps = [
    {
        number: 1,
        title: "Tạo hồ sơ cá nhân",
        image: "/freelancer/home/home1.jpg",
        alt: "Person creating profile"
    },
    {
        number: 2,
        title: "Tìm kiếm công việc phù hợp",
        image: "/freelancer/home/home2.jpg",
        alt: "Person searching for jobs"
    },
    {
        number: 3,
        title: "Đăng ký gửi hồ sơ ứng tuyển",
        image: "/freelancer/home/home3.jpg",
        alt: "Person submitting application"
    },
    {
        number: 4,
        title: "Nhận công việc",
        image: "/freelancer/home/home3.jpg",
        alt: "Handshake representing job acceptance"
    },
    {
        number: 5,
        title: "Hoàn thiện công việc",
        image: "/freelancer/home/home1.jpg",
        alt: "People completing work"
    },
    {
        number: 6,
        title: "Nhận thanh toán một cách an toàn",
        image: "/freelancer/home/home2.jpg",
        alt: "Person receiving secure payment"
    }
]

export const ApplicationProcess = () => {
    return (
        <div className="mx-auto py-12">
            <div className="mb-8">
                <h2 className="text-[48px] font-bold mb-0">
                    Quy trình ứng tuyển.
                </h2>
                <p className="text-[48px] text-[#8A8A8A] font-bold mt-0">
                    Nhanh chóng, tinh gọn
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((step) => (
                    <Card
                        key={step.number}
                        className="group relative overflow-hidden rounded-lg hover:shadow-lg transition-shadow"
                    >
                        <CardContent className="p-0">
                            <div className="relative aspect-[3/2]">
                                <Image
                                    src={step.image}
                                    alt={step.alt}
                                    fill
                                    className="object-cover"
                                />
                                <div
                                    className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"/>
                                <div
                                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                  <span className="text-sm font-semibold">
                                    {step.number}
                                  </span>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-[24px] font-bold text-white">
                                        {step.title}
                                    </h3>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}