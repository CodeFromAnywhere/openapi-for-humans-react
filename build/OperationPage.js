import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Markdown from "react-markdown";
import { renderOpenapiForm } from "./renderOpenapiForm";
/** Page that shows a form, docs, examples, previous runs */
export const OperationPage = async (props) => {
    const { operationDetails, setState, state, previousRuns, openapiUrl } = props;
    const { method, path } = operationDetails;
    const openapiForm = await renderOpenapiForm({
        method: method,
        path,
        openapiUri: openapiUrl,
        withResponse: () => { },
    });
    return (_jsxs("div", { className: "p-20", children: [_jsx("h1", { className: "text-3xl font-bold pb-10", children: operationDetails.id }), _jsx(Markdown, { components: {
                    h1: (props) => _jsx("h1", { className: "text-3xl py-8", children: props.children }),
                    h2: (props) => _jsx("h2", { className: "text-2xl py-8", children: props.children }),
                    code: (props) => _jsx("code", { className: "font-bold", children: props.children }),
                    li: (props) => _jsx("li", { className: "list-disc list-inside", ...props }),
                    a: (props) => _jsx("a", { className: "text-blue-500", ...props }),
                    p: (props) => _jsx("p", { className: "py-2", ...props }),
                    pre: (props) => (_jsx("pre", { className: "w-full p-4 my-4 border border-orange-300", ...props })),
                }, children: operationDetails.operation?.description ||
                    operationDetails.operation?.summary }), openapiForm] }));
};
//# sourceMappingURL=OperationPage.js.map