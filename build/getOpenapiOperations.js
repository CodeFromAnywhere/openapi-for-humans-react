import { notEmpty, } from "from-anywhere";
import { fetchOpenapi } from "openapi-util";
export const getOpenapiOperations = async (openapiId, openapiUrl) => {
    if (!openapiUrl) {
        return;
    }
    const openapi = await fetchOpenapi(openapiUrl);
    if (!openapi?.paths) {
        return;
    }
    const allowedMethods = [
        "get",
        "post",
        "put",
        "patch",
        "delete",
        "head",
        "options",
    ];
    const operations = Object.keys(openapi.paths)
        .map((path) => {
        const item = openapi.paths[path];
        if (!item) {
            return;
        }
        const methods = Object.keys(item).filter((method) => allowedMethods.includes(method));
        const pathMethods = methods.map((method) => {
            const operation = item[method];
            // Get it fully resolved from the openapi. Do some research to find this function
            const resolvedRequestBodySchema = {};
            return {
                openapiId,
                path,
                method,
                operation,
                resolvedRequestBodySchema,
                id: operation.operationId || path.slice(1) + "=" + method,
            };
        });
        return pathMethods;
    })
        .filter(notEmpty)
        .flat();
    //@ts-ignore
    return { openapiId, operations, document: openapi, openapiUrl };
};
//# sourceMappingURL=getOpenapiOperations.js.map