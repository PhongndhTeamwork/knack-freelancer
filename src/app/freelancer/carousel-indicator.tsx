
import {cn} from "@/lib/utils"

interface CarouselIndicatorsProps {
    total: number
    current: number
    className?: string
    onClick?: (index: number) => void
}

export default function CarouselIndicators({
                                               total = 4,
                                               current = 0,
                                               className,
                                               onClick
                                           }: CarouselIndicatorsProps) {
    return (
        <div
            className={cn(
                "flex items-center justify-center gap-2",
                className
            )}
            role="tablist"
            aria-label="Carousel indicators"
        >
            {Array.from({length: total}).map((_, index) => (
                <button
                    key={index}
                    role="tab"
                    aria-selected={current === index}
                    aria-label={`Slide ${index + 1}`}
                    className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black",
                        current === index
                            ? "bg-black"
                            : "bg-transparent border border-gray-400 hover:border-gray-600"
                    )}
                    onClick={() => onClick?.(index)}
                />
            ))}
        </div>
    )
}