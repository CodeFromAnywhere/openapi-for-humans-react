import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Searchbar } from "./Searchbar";
/**
 * Component to search through one or multiple OpenAPIs.
 *
 * Should not be opinionated in state or navigation, so it can be used in multiple ways.
 *
 * Ideally this becomes the type of explorer that allows for hierarchical search through tousands of APIs.
 *
 * It could help you in the process of choosing the right services and endpoints for bigger tasks.
 *
 * It would help to create a subset of OpenAPI Operations before starting to make an ActionSchema.
 *
 * NB: The Active Operation Div is marked with `active-operation` so you can do stuff with it.
 */
export const OpenapiExplorer = (props) => {
    const { openapis, LinkComponent, openapiId, operationId } = props;
    /**
    - Research how to sort an openapi
    - Create a sorted navigation that sorts per openapi in the regular way
    - When searching, show matches based on summary, path, method, operationId
     */
    const otherOpenapis = openapis.filter((x) => !openapiId ? true : x.openapiId !== openapiId);
    const currentOpenapi = openapis.find((x) => x.openapiId === openapiId);
    const branding = currentOpenapi?.document.info?.branding;
    console.log({ branding });
    const renderOpenapiHeader = (item) => {
        const href = "/" + item.openapiId;
        const children = (_jsxs("div", { className: `p-4 cursor-pointer ${item.openapiId === openapiId ? "bg-green-500" : "hover:bg-gray-500/50"}`, children: [_jsxs("p", { children: [item.openapiId, " (", item.operations.length, ")"] }), _jsx("p", { className: "italic text-sm line-clamp-1", children: String(item.document?.info?.description) })] }, item.openapiId));
        return LinkComponent ? (_jsx(LinkComponent, { href: href, children: children })) : (_jsx("a", { href: href, children: children }));
    };
    const renderOpenapiOperations = (item) => {
        return item.operations.map((operationDetails) => {
            const href = `/${item.openapiId}/${operationDetails.id}`;
            const isActive = operationDetails.id === operationId;
            const children = (_jsxs("div", { id: isActive ? "active-operation" : undefined, className: `p-2 cursor-pointer  ${isActive ? "bg-blue-200" : "hover:bg-gray-500/50"}`, children: [_jsx("p", { className: "line-clamp-1", children: operationDetails.id }), operationDetails.operation.summary ? (_jsx("span", { className: "italic text-sm line-clamp-1", children: operationDetails.operation.summary })) : null] }, `nav-${operationDetails.id}`));
            return LinkComponent ? (_jsx(LinkComponent, { href: href, children: children })) : (_jsx("a", { href: href, children: children }));
        });
    };
    return (_jsxs("div", { className: "relative", style: { backgroundColor: branding?.primaryColorHex }, children: [currentOpenapi ? (_jsxs("div", { className: "sticky top-0", children: [branding?.logoImageUrl ? (_jsx("div", { children: _jsx("img", { src: branding.logoImageUrl, width: "200", height: "200" }) })) : null, _jsx(Searchbar, {}), renderOpenapiHeader(currentOpenapi)] })) : null, _jsxs("div", { children: [currentOpenapi ? (_jsx("div", { children: renderOpenapiOperations(currentOpenapi) })) : null, otherOpenapis.map(renderOpenapiHeader)] })] }));
};
//# sourceMappingURL=OpenapiExplorer.js.map