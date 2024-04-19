import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const OpenapiOverviewPage = (props) => {
    const { openapiDetails } = props;
    return (_jsxs("div", { className: "p-20", children: [_jsx("a", { className: "text-blue-500", href: openapiDetails.openapiUrl, children: openapiDetails.openapiUrl }), _jsx("p", { children: "Operations:" }), _jsx("ul", { children: openapiDetails.operations.map((item) => {
                    //
                    return (_jsx("li", { className: "list-disc list-inside", children: item.operation.operationId }, item.operation.operationId));
                }) })] }));
};
//# sourceMappingURL=OpenapiOverviewPage.js.map