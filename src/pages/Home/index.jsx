import React, { useState } from 'react';
import Hero from '../../components/Hero';
import { Link } from 'react-router-dom';
import products from '../../components/mockProducts';
import ProductList from '../../components/ProductList';
import ProductDetailModal from '../../components/ProductDetailModal';
import SuggestionButton from '../../components/SuggestionButton';
import { getSuggestions } from '../../components/mockApi';
import { useToast } from '../../components/Toast';

export default function Home() {
    const [modalProduct, setModalProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem("favorites") || "[]");
    });
    const [viewed, setViewed] = useState(() => {
        return JSON.parse(localStorage.getItem("viewed") || "[]");
    });
    const [suggestions, setSuggestions] = useState([]);
    const [loadingSuggest, setLoadingSuggest] = useState(false);
    const [errorSuggest, setErrorSuggest] = useState("");
    const toast = useToast();

    const handleDetail = (product) => {
        setModalProduct(product);
        setModalOpen(true);
        setViewed((prev) => {
            if (prev.includes(product.id)) return prev;
            const updated = [...prev, product.id];
            localStorage.setItem("viewed", JSON.stringify(updated));
            return updated;
        });
    };
    const handleFavorite = (product) => {
        setFavorites((prev) => {
            const isFav = prev.includes(product.id);
            if (isFav) toast('Đã xoá khỏi yêu thích', 'error');
            else toast('Đã thêm vào yêu thích', 'success');
            const updated = isFav ? prev.filter((id) => id !== product.id) : [...prev, product.id];
            localStorage.setItem("favorites", JSON.stringify(updated));
            return updated;
        });
    };
    const handleSuggest = async () => {
        setLoadingSuggest(true);
        setErrorSuggest("");
        try {
            const res = await getSuggestions("user1", viewed, favorites);
            setSuggestions(res);
        } catch (err) {
            setErrorSuggest(err.message);
            setSuggestions([]);
        } finally {
            setLoadingSuggest(false);
        }
    };

    return (
        <div>
            <div className="bg-gradient-to-r from-green-100 to-yellow-100 shadow-lg px-12">
                <section className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-4 py-12 px-4 sm:px-6">
                    <div className="text-center md:text-left w-full md:w-[50%]">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-800 mt-4 leading-tight">
                            Sàn giáo dục trực tuyến <br />
                            <span className="bg-gradient-to-r from-yellow-600 to-green-600 text-transparent bg-clip-text">hàng đầu Việt Nam</span>
                        </h2>
                        <p className="mt-6 text-gray-700 text-lg max-w-lg mx-auto md:mx-0">
                            Kết nối học viên với hàng ngàn khoá học, giáo viên uy tín, tài liệu chất lượng. Học mọi lúc, mọi nơi, mọi lĩnh vực.
                        </p>
                        <div className="mt-8 flex flex-col md:flex-row gap-4">
                            <Link to="/product" className="bg-green-600 text-white px-8 py-4 rounded-xl shadow-lg font-semibold hover:bg-green-700 transition-all text-center">
                                Khám phá khoá học
                            </Link>
                            <Link to="/wishlist" className="bg-yellow-500 text-white px-8 py-4 rounded-xl shadow-lg font-semibold hover:bg-yellow-600 transition-all text-center">
                                Danh sách yêu thích
                            </Link>
                            <Link to="/history" className="bg-blue-200 text-blue-700 px-8 py-4 rounded-xl shadow-lg font-semibold hover:bg-blue-300 transition-all text-center">
                                Lịch sử xem
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-[50%] mt-8 md:mt-0">
                        <img src={require('../../assets/Banners/tech.jpg')} alt="Education Banner" className="rounded-2xl shadow-xl w-full object-cover" />
                    </div>
                </section>
            </div>

            <section className="container mx-auto py-8 px-4">
                <h2 className="text-2xl font-bold mb-4 text-green-700">Khoá học nổi bật</h2>
                <ProductList
                    products={products.slice(0, 8)}
                    onDetail={handleDetail}
                    onFavorite={handleFavorite}
                    favorites={favorites}
                />
            </section>

            <section className="container mx-auto py-8 px-4">
                <h2 className="text-2xl font-bold mb-4 text-green-700">Học viên nói gì về chúng tôi?</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                        <img src={require('../../assets/Users/avatar1.jpg')} alt="user1" className="w-16 h-16 rounded-full mb-2" />
                        <p className="italic text-gray-700 mb-2">"Mình đã tìm được khoá học IELTS chất lượng."</p>
                        <span className="font-bold text-green-600">Mai Hoàng Vinh</span>
                    </div>
                    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                        <img src={require('../../assets/Users/avatar2.jpg')} alt="user2" className="w-16 h-16 rounded-full mb-2" />
                        <p className="italic text-gray-700 mb-2">"Giao diện dễ dùng, nhiều khoá học miễn phí, rất hữu ích cho sinh viên."</p>
                        <span className="font-bold text-green-600">Mai Hoàng Vinh</span>
                    </div>
                    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                        <img src={require('../../assets/Users/avatar3.jpg')} alt="user3" className="w-16 h-16 rounded-full mb-2" />
                        <p className="italic text-gray-700 mb-2">"Tôi đã nâng cao kỹ năng lập trình."</p>
                        <span className="font-bold text-green-600">Mai Hoàng Vinh</span>
                    </div>
                    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                        <img src={require('../../assets/Users/avatar3.jpg')} alt="user3" className="w-16 h-16 rounded-full mb-2" />
                        <p className="italic text-gray-700 mb-2">"Tôi đã nâng cao kỹ năng lập trình."</p>
                        <span className="font-bold text-green-600">Mai Hoàng Vinh</span>
                    </div>
                </div>
            </section>

            <ProductDetailModal
                product={modalProduct}
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onFavorite={handleFavorite}
                isFavorite={modalProduct ? favorites.includes(modalProduct.id) : false}
            />

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


    );
}