import Image from "next/image"

const galleryItems = [
    {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Misty castle architecture",
        className: "col-span-1 row-span-1"
    },
    {
        src: "/placeholder.svg?height=300&width=600",
        alt: "Photographer on hilltop",
        className: "col-span-1 row-span-1"
    },
    {
        src: "/placeholder.svg?height=400&width=300",
        alt: "Photographer with camera",
        className: "col-span-1 row-span-2"
    },
    {
        src: "/placeholder.svg?height=300&width=600",
        alt: "Film production crew",
        className: "col-span-1 row-span-1"
    },
    {
        src: "/placeholder.svg?height=400&width=400",
        alt: "Adventure photographer",
        className: "col-span-1 row-span-2"
    },
    {
        src: "/placeholder.svg?height=300&width=300",
        alt: "Portrait in blue lighting",
        className: "col-span-1 row-span-1"
    },
    {
        src: "/placeholder.svg?height=500&width=400",
        alt: "Fashion model in white",
        className: "col-span-1 row-span-2"
    },
    {
        src: "/placeholder.svg?height=300&width=600",
        alt: "Lifestyle dining photo",
        className: "col-span-2 row-span-1"
    }
]

export const InspirationGallery = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-8">
                Lấy cảm hứng từ các công việc đã hoàn thiện
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
                {galleryItems.map((item, index) => (
                    <div
                        key={index}
                        className={`group relative overflow-hidden rounded-lg ${item.className}`}
                    >
                        <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                ))}
            </div>
        </div>
    )
}