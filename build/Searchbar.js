"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { mergeObjectsArray } from "from-anywhere";
import { useEffect, useState } from "react";
export const Searchbar = () => {
    const [query, setQuery] = useState("");
    useEffect(() => {
        if (typeof document === "undefined") {
            return;
        }
        const query = mergeObjectsArray(document.location.search
            .slice(1)
            .split("&")
            .map((chunk) => chunk.split("="))
            .map(([key, value]) => {
            return { [key]: value };
        })).query;
        setQuery(query);
    }, []);
    return (_jsxs("div", { className: "flex flex-row", children: [_jsx("input", { value: query, placeholder: "Search", onChange: (e) => {
                    setQuery(e.target.value);
                    window.history.replaceState(null, document.title, "?query=" + e.target.value);
                }, className: "border border-black p-2" }), _jsx("button", { className: "bg-green-500 w-full", children: "Search" })] }));
};
//# sourceMappingURL=Searchbar.js.map