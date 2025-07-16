import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ProductCard({ product, onDetail, onFavorite, isFavorite }) {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">{product.name}</h3>
            <div className="text-green-600 font-semibold mb-1">{product.price.toLocaleString()} vnđ</div>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.shortDesc}</p>
            <div className="flex items-center mt-auto gap-2">
                <button
                    onClick={() => onDetail(product)}
                    className="flex-1 bg-green-600 text-white py-1 px-3 rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                    Xem chi tiết
                </button>
                <button
                    onClick={() => onFavorite(product)}
                    className="text-xl focus:outline-none"
                    aria-label="Yêu thích"
                >
                    <FontAwesomeIcon
                        icon={isFavorite ? faHeartSolid : faHeartRegular}
                        className={`text-${isFavorite ? "green-500" : "gray-400"} text-xl`}
                    />
                </button>
            </div>
        </div>
    );
}
