import products from "./mockProducts";

export function getSuggestions(userId, viewedIds = [], favoriteIds = []) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error("Không thể lấy gợi ý lúc này. Vui lòng thử lại!"));
                return;
            }
            const excludeIds = new Set([...viewedIds, ...favoriteIds]);
            const unviewed = products.filter(p => !excludeIds.has(p.id));
            let suggestions = unviewed.slice(0, 3);
            if (suggestions.length < 3) {
                const rest = products.filter(p => !suggestions.includes(p));
                while (suggestions.length < 3 && rest.length > 0) {
                    const index = Math.floor(Math.random() * rest.length);
                    suggestions.push(rest.splice(index, 1)[0]);
                }
            }
            resolve(suggestions);
        }, 1200);
    });
} 