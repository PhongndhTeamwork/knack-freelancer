import Link from "next/link";

const jobCategories = [
    {
        title: "Column 1",
        jobs: [
            "Diễn viên điện ảnh",
            "Diễn viên truyền hình",
            "Diễn viên võ thuật"
        ]
    },
    {
        title: "Column 2",
        jobs: [
            "Diễn viên hài",
            "Diễn viên đóng thế",
            "Diễn viên quần chúng",
            "Diễn viên lồng tiếng"
        ]
    },
    {
        title: "Column 3",
        jobs: [
            "Diễn viên kể chuyện",
            "Diễn viên múa",
            "Diễn viên kịch",
            "Diễn viên xiếc"
        ]
    },
    {
        title: "Column 4",
        jobs: [
            "Diễn viên kể chuyện",
            "Diễn viên múa",
            "Diễn viên kịch",
            "Diễn viên xiếc"
        ]
    }
]

export const RelatedJobs = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-8">
                <h2 className="text-[40px] font-bold">
                    Tìm kiếm công việc với
                </h2>
                <p className="text-[40px] font-bold text-[#8A8A8A]">
                    Kĩ năng tương tự
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {jobCategories.map((category, index) => (
                    <div key={index} className="space-y-4">
                        <ul className="space-y-2 text-[#545454]">
                            {category.jobs.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    <Link
                                        href="#"
                                        className="text-gray-600 hover:text-black transition-colors duration-200"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}