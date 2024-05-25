import { notEmpty } from "from-anywhere";
import { getOpenapiOperations } from "./getOpenapiOperations.js";
export const getOpenapisOperations = async (openapiList, selectedIds) => {
    const filteredList = openapiList.filter((item) => selectedIds && selectedIds.length > 0
        ? selectedIds.includes(item.key)
        : true);
    return (await Promise.all(filteredList.map(async (item) => {
        const openapiUrl = `https://openapi.actionschema.com/${item.key}/openapi.json`;
        return getOpenapiOperations(item.key, openapiUrl);
    }))).filter(notEmpty);
};
//# sourceMappingURL=getOpenapisOperations.js.map