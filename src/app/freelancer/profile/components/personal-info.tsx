import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const PersonalInfo = () => {
    return (
        <Card className="bg-[#DDDDDD]">
            <CardHeader>
                <CardTitle className="text-[24px]">Thông tin cá nhân</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Personal Introduction */}
                <p className="text-sm leading-relaxed">
                    Tôi là một người hòa đồng, làm việc nghiêm túc, luôn tuân thủ về thời gian, timeline công việc yêu
                    cầu của bên đơn vị booking hoặc khách hàng. Luôn lắng nghe và đóng góp ý kiến để cho sản phẩm cuối
                    mình tốt nhất.
                </p>

                {/* Language Skills */}
                <div className="space-y-2">
                    <h3 className="font-semibold">Ngôn ngữ:</h3>
                    <p className="text-sm">Tiếng Việt | Tiếng Anh (B1)</p>
                </div>
                <div className="space-y-2">
                    <h3 className="font-semibold">Xác minh: </h3>
                    <p className="text-sm">Xác minh thành công CCCD</p>
                </div>

                {/* Education */}
                <div className="space-y-2">
                    <h3 className="font-semibold">Học vấn:</h3>
                    <div className="text-sm space-y-1">
                        <p>Học viện Báo chí và tuyên truyền</p>
                        <p className="text-muted-foreground">Cử nhân chuyên ngành Truyền thông đa chúng</p>
                        <p className="text-muted-foreground">2016-2021</p>
                    </div>
                </div>

                {/* Work Experience */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-[24px]">Trình độ làm việc</h3>

                    {/* Modeling Experience */}
                    <div className="space-y-2">
                        <h4 className="text-sm font-medium">Người mẫu</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                            <li>3 năm kinh nghiệm - Trung cấp</li>
                            <li>Đã từng hợp tác cùng nhãn adidas</li>
                            <li>Phong cách mẫu ưa thích: Thời trang thể thao, năng động và mạnh mẽ</li>
                        </ul>
                    </div>

                    {/* Acting Experience */}
                    <div className="space-y-2">
                        <h4 className="text-sm font-medium">Diễn viên phim ngắn</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                            <li>05 năm kinh nghiệm</li>
                            <li>Youtube: Action C (1.22m followers)</li>
                            <li>Thể loại phim ưa thích: Hành động, võ thuật</li>
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}