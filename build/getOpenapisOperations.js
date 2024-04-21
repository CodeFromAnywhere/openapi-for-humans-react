import { notEmpty } from "from-anywhere";
import { getOpenapiOperations } from "./getOpenapiOperations";
export const getOpenapisOperations = async (openapiList, selectedIds) => {
    const filteredList = openapiList.filter((item) => selectedIds && selectedIds.length > 0
        ? selectedIds.includes(item.key)
        : true);
    return (await Promise.all(filteredList.map(async (item) => {
        const openapiUrl = `https://${item.key}.dataman.ai/${item.key}.json`;
        return getOpenapiOperations(item.key, openapiUrl);
    }))).filter(notEmpty);
};
//# sourceMappingURL=getOpenapisOperations.js.map