import React, { useEffect, useState } from "react";
import products from "../../components/mockProducts";
import ProductList from "../../components/ProductList";
import ProductDetailModal from "../../components/ProductDetailModal";
import { useToast } from '../../components/Toast';

export default function Wishlist() {
    const [favorites, setFavorites] = useState([]);
    const [modalProduct, setModalProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const toast = useToast();

    useEffect(() => {
        const fav = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorites(fav);
    }, []);

    const handleDetail = (product) => {
        setModalProduct(product);
        setModalOpen(true);
        const prev = JSON.parse(localStorage.getItem("viewed") || "[]");
        if (!prev.includes(product.id)) {
            const updated = [...prev, product.id];
            localStorage.setItem("viewed", JSON.stringify(updated));
        }
    };
    const handleFavorite = (product) => {
        setFavorites((prev) => {
            const isFav = prev.includes(product.id);
            if (isFav) toast('Đã xoá khỏi yêu thích', 'error');
            else toast('Đã thêm vào yêu thích', 'success');
            return isFav ? prev.filter((id) => id !== product.id) : [...prev, product.id];
        });
    };

    const favProducts = products.filter((p) => favorites.includes(p.id));

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-6">Danh sách yêu thích</h1>
            {favProducts.length === 0 ? (
                <div className="text-gray-500">Bạn chưa có sản phẩm nào trong danh sách yêu thích.</div>
            ) : (
                <ProductList
                    products={favProducts}
                    onDetail={handleDetail}
                    onFavorite={handleFavorite}
                    favorites={favorites}
                />
            )}
            <ProductDetailModal
                product={modalProduct}
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onFavorite={handleFavorite}
                isFavorite={modalProduct ? favorites.includes(modalProduct.id) : false}
            />
        </div>
    );
}