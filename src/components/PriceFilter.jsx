import React from "react";

const options = [
    { label: "< 500K", value: "lt500" },
    { label: "500K – 1 triệu", value: "500to1m" },
    { label: "> 1 triệu", value: "gt1m" },
];

export default function PriceFilter({ value, onChange }) {
    return (
        <div className="flex gap-4 mb-4">
            {options.map(opt => (
                <label key={opt.value} className="flex items-center cursor-pointer">
                    <input
                        type="radio"
                        name="price"
                        value={opt.value}
                        checked={value === opt.value}
                        onChange={() => onChange(opt.value)}
                        className="accent-green-600 mr-2"
                    />
                    <span className="text-gray-700 text-sm">{opt.label}</span>
                </label>
            ))}
            <button
                className="ml-2 text-xs text-gray-500 underline hover:text-green-600"
                onClick={() => onChange("")}
                type="button"
            >
                Xoá lọc
            </button>
        </div>
    );
} 