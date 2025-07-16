import React, { useState, useEffect } from 'react';
import products from '../../components/mockProducts';
import ProductList from '../../components/ProductList';
import ProductDetailModal from '../../components/ProductDetailModal';
import SearchBar from '../../components/SearchBar';
import PriceFilter from '../../components/PriceFilter';
import SuggestionButton from '../../components/SuggestionButton';
import { getSuggestions } from '../../components/mockApi';
import { useToast } from '../../components/Toast';

export default function AllProducts() {
    const [favorites, setFavorites] = useState([]);
    const [modalProduct, setModalProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [priceFilter, setPriceFilter] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loadingSuggest, setLoadingSuggest] = useState(false);
    const [errorSuggest, setErrorSuggest] = useState("");
    const [viewed, setViewed] = useState([]);
    const toast = useToast();

    useEffect(() => {
        const fav = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorites(fav);
    }, []);
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);


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
            return isFav ? prev.filter((id) => id !== product.id) : [...prev, product.id];
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

    const filteredProducts = products.filter((p) => {
        const matchName = p.name.toLowerCase().includes(search.toLowerCase());
        let matchPrice = true;
        if (priceFilter === "lt500") matchPrice = p.price < 500000;
        else if (priceFilter === "500to1m") matchPrice = p.price >= 500000 && p.price <= 1000000;
        else if (priceFilter === "gt1m") matchPrice = p.price > 1000000;
        return matchName && matchPrice;
    });

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-6">Tất cả sản phẩm</h1>
            <SearchBar value={search} onChange={setSearch} placeholder="Tìm kiếm khoá học, tài liệu..." />
            <PriceFilter value={priceFilter} onChange={setPriceFilter} />
            <SuggestionButton onSuggest={handleSuggest} loading={loadingSuggest} error={errorSuggest} />
            {suggestions.length > 0 && !loadingSuggest && !errorSuggest && (
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2 text-yellow-700">Gợi ý cho bạn</h2>
                    <ProductList
                        products={suggestions}
                        onDetail={handleDetail}
                        onFavorite={handleFavorite}
                        favorites={favorites}
                    />
                </div>
            )}
            <ProductList
                products={filteredProducts}
                onDetail={handleDetail}
                onFavorite={handleFavorite}
                favorites={favorites}
            />
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