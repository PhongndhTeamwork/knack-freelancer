
type Props = {
    width : number,
    height : number,
    url : string,
    rounded ?: number
}

export const Illustration = ({width, height, url, rounded} : Props) => {
    return (
        <div
            className={`relative w-[${width}px] h-[${height}px] ${rounded && `rounded-[${rounded}px]`}`}
            style={{
                backgroundImage: `url('${url}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        />
    )
}