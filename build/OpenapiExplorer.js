import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
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
 */
export const OpenapiExplorer = (props) => {
    const { openapis, LinkComponent } = props;
    /**
    - Research how to sort an openapi
    - Create a sorted navigation that sorts per openapi in the regular way
    - When searching, show matches based on summary, path, method, operationId
     */
    return (_jsx("div", { children: openapis.map((item) => {
            const href = "/" + item.openapiId;
            const children = (_jsxs("div", { children: [item.openapiId, " (", item.operations.length, ")"] }));
            return (_jsx("div", { className: "p-4 hover:bg-gray-200/50 cursor-pointer", children: LinkComponent ? (_jsx(LinkComponent, { href: href, children: children })) : (_jsx("a", { href: href, children: children })) }, item.openapiId));
        }) }));
};
//# sourceMappingURL=OpenapiExplorer.js.map