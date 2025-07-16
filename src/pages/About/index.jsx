import { faSearch, faUserTie, faChartLine, faRocket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import tech from '../../assets/Banners/tech.jpg'

const features = [
    {
        title: "Kết nối học viên & giáo viên",
        description: "Nền tảng giúp kết nối học viên với giáo viên, trung tâm uy tín trên toàn quốc, dễ dàng tìm kiếm khoá học phù hợp mọi lĩnh vực.",
    },
    {
        title: "Hồ sơ học tập chuyên nghiệp",
        description: "Quản lý lộ trình học, chứng chỉ, đánh giá và phản hồi từ giáo viên, xây dựng hồ sơ học tập trực tuyến nổi bật.",
    },
    {
        title: "Phân tích tiến bộ học tập",
        description: "Cung cấp báo cáo, thống kê chi tiết giúp học viên và phụ huynh theo dõi tiến độ, tối ưu hiệu quả học tập.",
    },
]

export default function AboutEducationPlatform() {
    return (
        <div>
            <div>
                <title>Giới thiệu sàn giáo dục trực tuyến</title>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 bg-green-50">
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-md overflow-hidden border-[0px] border-green-400 shadow-xl">
                    <img
                        src={tech}
                        alt="Sàn giáo dục trực tuyến"
                        className="object-cover h-full"
                    />
                </div>
                <div className="mt-10 md:mt-0 md:ml-12 max-w-xl text-center md:text-left">
                    <h4 className="text-green-500 text-2xl font-bold">Sàn giáo dục trực tuyến</h4>
                    <h2 className="text-4xl font-semibold mt-2 text-black">
                        Kết nối học viên, giáo viên và khoá học chất lượng
                    </h2>
                    <p className="text-gray-600 mt-4 text-xl">
                        Chúng tôi mang đến giải pháp học tập hiện đại, dễ sử dụng, giúp hàng ngàn học viên tiếp cận tri thức, phát triển kỹ năng mỗi ngày.
                    </p>
                </div>
            </div>

            <div className="bg-white py-16 px-4 md:px-20">
                <p className="text-center text-2xl text-green-500 font-semibold">Tại sao chọn chúng tôi?</p>
                <p className="font-semibold text-4xl text-center">Nền tảng học tập toàn diện cho mọi người</p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-12 text-center px-4 md:px-10">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-green-100 text-green-500 flex items-center justify-center mb-4">
                            <FontAwesomeIcon icon={faSearch} className="text-3xl" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Tìm khoá học dễ dàng</h3>
                        <p className="text-gray-600 text-sm">Bộ lọc thông minh giúp bạn tìm kiếm khoá học, giáo viên phù hợp chỉ trong vài giây.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-green-100 text-green-500 flex items-center justify-center mb-4">
                            <FontAwesomeIcon icon={faUserTie} className="text-3xl" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Hồ sơ học tập cá nhân</h3>
                        <p className="text-gray-600 text-sm">Quản lý lộ trình, chứng chỉ, đánh giá và phản hồi từ giáo viên.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-green-100 text-green-500 flex items-center justify-center mb-4">
                            <FontAwesomeIcon icon={faChartLine} className="text-3xl" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Theo dõi tiến bộ</h3>
                        <p className="text-gray-600 text-sm">Thống kê, báo cáo giúp học viên và phụ huynh theo dõi tiến độ học tập.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-green-100 text-green-500 flex items-center justify-center mb-4">
                            <FontAwesomeIcon icon={faRocket} className="text-3xl" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Phát triển toàn diện</h3>
                        <p className="text-gray-600 text-sm">Hàng ngàn học viên đã nâng cao kiến thức, kỹ năng cùng chúng tôi.</p>
                    </div>
                </div>
            </div>

            <div className="bg-green-50 py-16 px-4 md:px-20">
                <p className="text-center text-2xl text-green-500 font-semibold">Tính năng nổi bật</p>
                <p className="font-semibold text-4xl text-center">Nâng tầm trải nghiệm học tập</p>
                <div className="flex flex-wrap gap-8 py-12 justify-center">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md border-l-4 border-green-500 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-700 mb-4">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-green-700 py-16 px-4 md:px-20">
                <p className="text-center text-2xl text-white font-semibold">Bạn đã sẵn sàng?</p>
                <p className="font-semibold text-4xl text-center text-green-100">Trải nghiệm sàn giáo dục trực tuyến ngay hôm nay</p>
                <p className="text-center text-green-100 py-5">Đăng ký tài khoản để bắt đầu hành trình học tập và phát triển bản thân.</p>
                <div className="flex justify-center gap-5">
                    <input
                        type="text"
                        placeholder="Nhập email của bạn"
                        className="bg-white pr-10 pl-5 py-4 rounded-full focus:ring-green-500 focus:outline-green-500"
                    />
                    <button className="px-9 py-2 bg-green-600 text-white rounded-full cursor-pointer hover:bg-green-800 transition">
                        Bắt đầu học
                    </button>
                </div>
            </div>
        </div>
    )
}
