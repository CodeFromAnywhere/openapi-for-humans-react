"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { MatchingText } from "./MatchingText";
import Markdown from "react-markdown";
export const OpenapiOverviewPage = (props) => {
    const { openapiDetails } = props;
    const [search, setSearch] = useState("");
    const filteredOperations = !search || search.trim() === ""
        ? openapiDetails.operations
        : openapiDetails.operations.filter((item) => !search ||
            item.id.toLowerCase().includes(search.toLowerCase()) ||
            item.operation.summary
                ?.toLowerCase()
                .includes(search.toLowerCase()));
    const links = [
        {
            title: "Swagger",
            url: `https://petstore.swagger.io/?url=${openapiDetails.openapiUrl}`,
        },
        {
            title: "Swagger Editor",
            url: `https://editor.swagger.io/?url=${openapiDetails.openapiUrl}`,
        },
        {
            title: "OpenAPI GUI",
            url: `https://mermade.github.io/openapi-gui/?url=${openapiDetails.openapiUrl}`,
        },
        {
            title: "Stoplight",
            url: `https://elements-demo.stoplight.io/?spec=${openapiDetails.openapiUrl}`,
        },
        {
            title: "Source",
            url: openapiDetails.openapiUrl,
        },
    ];
    return (_jsxs("div", { className: "p-20", children: [_jsx("h1", { className: "text-3xl", children: openapiDetails.document.info?.title }), _jsxs("div", { className: "flex flex-row flex-wrap", children: [links.map((link) => {
                        return (_jsx("a", { className: "pr-6 text-blue-500 hover:text-blue-600", href: link.url, children: link.title }, link.url));
                    }), _jsx("button", { onClick: () => { }, children: "Refresh" })] }), _jsx("div", { className: "my-10", children: _jsx(Markdown, { children: openapiDetails.document.info.description }) }), _jsx("p", { className: "", children: "Operations:" }), _jsx("input", { type: "text", placeholder: "Search", className: "p-2 m-2  bg-transparent", value: search, onChange: (e) => setSearch(e.target.value) }), _jsx("ul", { className: "py-10", children: filteredOperations.map((item) => {
                    return (_jsx("li", { className: "list-disc list-inside", children: _jsx("a", { href: `/${openapiDetails.openapiId}/${item.id}`, children: _jsx(MatchingText, { search: search || "", text: `${item.id} - ${item.operation.summary}`, defaultTextClassName: "", matchTextClassName: "text-blue-500" }) }) }, item.operation.operationId));
                }) })] }));
};
//# sourceMappingURL=OpenapiOverviewPage.js.map