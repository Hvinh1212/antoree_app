import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onDetail, onFavorite, favorites }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onDetail={onDetail}
                    onFavorite={onFavorite}
                    isFavorite={favorites.includes(product.id)}
                />
            ))}
        </div>
    );
} 