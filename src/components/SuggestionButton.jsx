import React from "react";

export default function SuggestionButton({ onSuggest, loading, error }) {
    return (
        <div className="mb-4">
            <button
                onClick={onSuggest}
                disabled={loading}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition-colors disabled:opacity-60"
            >
                {loading ? "Đang gợi ý..." : "Gợi ý sản phẩm phù hợp (AI)"}
            </button>
            {loading && (
                <div className="mt-2 animate-pulse text-gray-400 text-sm">Đang lấy gợi ý thông minh...</div>
            )}
            {error && (
                <div className="mt-2 text-red-500 text-sm">{error}</div>
            )}
        </div>
    );
} 