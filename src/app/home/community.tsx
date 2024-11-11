import {Button} from "@/components/ui/button"
import {Illustration} from "@/components/custom/illustration";

export const CommunitySection = () => {
    return (
        <div className="container mx-auto py-12 mt-16">
            <div className="flex justify-between">
                {/* Text Content */}
                <div className="space-y-6 md:w-[463px]">
                    <div>
                        <h2 className="text-[40px] font-bold mb-1">
                            Cộng đồng của chúng tôi.
                        </h2>
                        <p className="text-[40px] font-bold text-[#8A8A8A]">
                            Kết nối và Chia sẻ
                        </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Sed quam tristique et nullam tincidunt in scelerisque.
                        Eu urna nam dapibus felis a. Tortor morbi mauris nisl purus scelerisque convallis mauris in
                        duis.
                    </p>

                    <Button
                        variant="dark"
                    >
                        Tham gia ngay
                    </Button>
                </div>
                {/* Image Grid */}
                <div className="flex">
                    {/* Main Large Image */}
                    <div className="relative rounded-xl w-[360px] h-[364px]">
                        <Illustration width={360} height={364} url="/home/community1.svg" rounded={12}/>
                    </div>

                    <div className="ml-3">
                        <div className="relative flex flex-col w-[170px] h-[176px] rounded-[12px]">
                            <Illustration width={170} height={176} url="/home/community3.svg" rounded={12}/>
                        </div>
                        <div className="relative flex flex-col w-[170px] h-[176px] mt-3 rounded-[12px]">
                            <Illustration width={170} height={176} url="/home/community4.svg" rounded={12}/>
                        </div>
                    </div>


                    {/* Right Column Images */}
                    {/*<div className="space-y-4">*/}
                    {/*    <div className="relative h-[210px] w-[578px] rounded-xl overflow-hidden">*/}
                    {/*        <Image*/}
                    {/*            src="/home/community2.svg"*/}
                    {/*            alt="Community event"*/}
                    {/*            fill*/}
                    {/*            className="object-cover"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className="relative h-[240px] rounded-2xl overflow-hidden">*/}
                    {/*        <Image*/}
                    {/*            src="/placeholder.svg?height=300&width=400"*/}
                    {/*            alt="Artistic eye through leaf"*/}
                    {/*            fill*/}
                    {/*            className="object-cover"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}