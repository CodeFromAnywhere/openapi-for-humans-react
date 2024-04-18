import { jsx as _jsx } from "react/jsx-runtime";
import { mergeObjectsArray } from "from-anywhere";
/** Page that shows a form, docs, examples, previous runs */
export const OperationPage = (props) => {
    const { openapi, operationId, setState, state, previousRuns } = props;
    const allowedMethods = [
        "get",
        "post",
        "put",
        "patch",
        "delete",
        "head",
        "options",
    ];
    // todo: find operation with id from the openapi, and render that
    const methods = openapi?.paths
        ? mergeObjectsArray(Object.keys(openapi.paths).map((path) => {
            return {
                [path]: Object.keys(openapi.paths[path]).filter((method) => allowedMethods.includes(method)),
            };
        }))
        : undefined;
    return _jsx("div", { children: JSON.stringify(methods) });
};
//# sourceMappingURL=OperationPage.js.map