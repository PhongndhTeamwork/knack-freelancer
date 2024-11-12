"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import {useCallback, useEffect} from "react";

const images = [
    {
        src: "/freelancer/carousel1.svg",
        alt: "Carousel image 1"
    },
    {
        src: "/freelancer/carousel1.svg",
        alt: "Carousel image 2"
    },
    {
        src: "/freelancer/carousel1.svg",
        alt: "Carousel image 3"
    },
    {
        src: "/freelancer/carousel1.svg",
        alt: "Carousel image 4"
    }
]

export default function ImageCarousel() {
    const [api, setApi] = React.useState<any>()
    const [current, setCurrent] = React.useState(0)

    const onSelect = useCallback(() => {
        if (!api) return
        setCurrent(api.selectedScrollSnap())
    }, [api])

    useEffect(() => {
        if (!api) return
        onSelect()
        api.on("select", onSelect)
        return () => {
            api.off("select", onSelect)
        }
    }, [api, onSelect])

    return (
        <div className="relative w-full">
            <Carousel
                setApi={setApi}
                className="w-full"
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Custom Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={cn(
                            "h-2 w-2 rounded-full transition-all",
                            "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black",
                            current === index
                                ? "bg-black"
                                : "bg-white/50 hover:bg-white/75"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}