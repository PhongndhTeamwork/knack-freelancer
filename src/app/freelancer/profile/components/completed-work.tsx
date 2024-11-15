import Image from "next/image"

export const CompletedWork = () => {
    const completedWorks = [
        {
            src: "/placeholder.svg?height=300&width=400",
            alt: "Person with raised arms against light background",
            className: "col-span-1 row-span-1"
        },
        {
            src: "/placeholder.svg?height=300&width=400",
            alt: "Person in red jacket against red background",
            className: "col-span-1 row-span-1"
        },
        {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Smiling person against metal wall",
            className: "col-span-1 row-span-2"
        },
        {
            src: "/placeholder.svg?height=300&width=400",
            alt: "Dramatic portrait in shadows",
            className: "col-span-2 row-span-1"
        },
        {
            src: "/placeholder.svg?height=400&width=800",
            alt: "Action sequence scene",
            className: "col-span-3 row-span-1"
        }
    ]

    return (
        <div className="w-full space-y-6">
            <div>
                <p className="text-[24px] font-bold">Công việc đã hoàn thành</p>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
                    {completedWorks.map((work, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-lg ${work.className}`}
                        >
                            <Image
                                src={work.src}
                                alt={work.alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}