import React, { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toast, setToast] = useState(null);
    const showToast = useCallback((msg, type = "success") => {
        setToast({ msg, type });
        setTimeout(() => setToast(null), 2000);
    }, []);
    return (
        <ToastContext.Provider value={showToast}>
            {children}
            {toast && (
                <div className={`fixed bottom-6 right-6 z-[9999] px-6 py-3 rounded-lg shadow-lg text-white font-semibold transition-all animate-fadeIn ${toast.type === "success" ? "bg-green-600" : "bg-red-500"}`}>
                    {toast.msg}
                </div>
            )}
        </ToastContext.Provider>
    );
}

export function useToast() {
    return useContext(ToastContext);
} 