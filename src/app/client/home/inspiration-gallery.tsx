import Image from "next/image"

const galleryItems = [
    {
        src: "/client/home/home1.svg",
        alt: "Misty castle architecture",
        className: "col-span-1 row-span-1"
    },
    {
        src: "/client/home/home6.svg",
        alt: "Photographer on hilltop",
        className: "col-span-1 row-span-1"
    },
    {
        src: "/client/home/home5.svg",
        alt: "Photographer with camera",
        className: "col-span-1 row-span-2"
    },
    {
        src: "/client/home/home7.svg",
        alt: "Film production crew",
        className: "col-span-1 row-span-1"
    },
    {
        src: "/client/home/home2.svg",
        alt: "Adventure photographer",
        className: "col-span-1 row-span-2"
    },
    {
        src: "/client/home/home8.svg",
        alt: "Portrait in blue lighting",
        className: "col-span-1 row-span-1"
    },
    {
        src: "/client/home/home3.svg",
        alt: "Fashion model in white",
        className: "col-span-1 row-span-2"
    },
    {
        src: "/client/home/home4.svg",
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