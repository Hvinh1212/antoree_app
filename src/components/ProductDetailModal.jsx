import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

export default function ProductDetailModal({ product, open, onClose, onFavorite, isFavorite }) {
    if (!open || !product) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 relative animate-fadeIn">
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
                    onClick={onClose}
                >
                    ×
                </button>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
                    <button onClick={() => onFavorite(product)} aria-label="Yêu thích">
                        <FontAwesomeIcon
                            icon={isFavorite ? faHeartSolid : faHeartRegular}
                            className={`text-${isFavorite ? "green-500" : "gray-400"} text-2xl`}
                        />
                    </button>
                </div>
                <div className="text-green-600 font-semibold text-lg mb-2">{product.price.toLocaleString()} vnđ</div>
                <div className="flex items-center gap-1 mb-2">
                    <span className="text-yellow-400 text-lg">★ ★ ★ ★ ★</span>
                    <span className="text-gray-500 text-sm">(123 đánh giá)</span>
                </div>
                <p className="text-gray-700 mb-2">{product.longDesc}</p>
            </div>
        </div>
    );
} 