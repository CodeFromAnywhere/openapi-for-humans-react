"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MatchingText } from "./MatchingText";
import { makeComplexUrlStore } from "./makeComplexUrlStore";
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
    const useStore = makeComplexUrlStore();
    const [search, setSearch] = useStore("search");
    // const [search, setSearch] = useState("");
    const filteredOpenapis = !search || search.trim() === ""
        ? openapis
        : openapis.filter((item) => item.key.toLowerCase().includes(search.toLowerCase()) ||
            item.title?.toLowerCase().includes(search.toLowerCase()));
    /**
    - Research how to sort an openapi
    - Create a sorted navigation that sorts per openapi in the regular way
    - When searching, show matches based on summary, path, method, operationId
     */
    // const otherOpenapis = openapis.filter((x) =>
    //   !openapiId ? true : x.openapiId !== openapiId,
    // );
    // const currentOpenapi = openapis.find((x) => x.openapiId === openapiId);
    // const branding = currentOpenapi?.document.info?.branding;
    const renderOpenapiHeader = (item) => {
        const href = "/" +
            item.key +
            (typeof window === "undefined" ? "" : window.location.search);
        const children = (_jsx("div", { className: `p-4 cursor-pointer ${item.key === openapiId ? "bg-green-500" : "hover:bg-gray-500/50"}`, children: _jsx(MatchingText, { defaultTextClassName: "", matchTextClassName: "text-blue-500", search: search || "", text: item.title || item.key }) }));
        return LinkComponent ? (_jsx(LinkComponent, { href: href, children: children }, item.key)) : (_jsx("a", { href: href, children: children }, item.key));
    };
    // const renderOpenapiOperations = (item: OpenapiDetails) => {
    //   return item.operations.map((operationDetails) => {
    //     const href = `/${item.openapiId}/${operationDetails.id}`;
    //     const isActive = operationDetails.id === operationId;
    //     const children = (
    //       <div
    //         id={isActive ? "active-operation" : undefined}
    //         className={`p-2 cursor-pointer  ${
    //           isActive ? "bg-blue-200" : "hover:bg-gray-500/50"
    //         }`}
    //         key={`nav-${operationDetails.id}`}
    //       >
    //         <p className="line-clamp-1">{operationDetails.id}</p>
    //         {operationDetails.operation.summary ? (
    //           <span className="italic text-sm line-clamp-1">
    //             {operationDetails.operation.summary}
    //           </span>
    //         ) : null}
    //       </div>
    //     );
    //     return LinkComponent ? (
    //       <LinkComponent href={href}>{children}</LinkComponent>
    //     ) : (
    //       <a href={href}>{children}</a>
    //     );
    //   });
    // };
    return (_jsxs("div", { className: "relative", children: [_jsx("input", { type: "text", placeholder: "Search", className: "p-2 m-2 bg-transparent", value: search, onChange: (e) => setSearch(e.target.value) }), _jsx("div", { children: filteredOpenapis.map(renderOpenapiHeader) })] }));
};
//# sourceMappingURL=OpenapiExplorer.js.map