import React from "react";

export default function SearchBar({ value, onChange, placeholder }) {
    return (
        <div className="flex items-center w-full max-w-md mb-4">
            <input
                type="text"
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder={placeholder}
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <span className="bg-green-600 text-white px-4 py-2 rounded-r-lg text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4-4m0 0A7 7 0 104 4a7 7 0 0013 13z" />
                </svg>
            </span>
        </div>
    );
} 