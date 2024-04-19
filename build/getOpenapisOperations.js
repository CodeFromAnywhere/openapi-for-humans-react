import { notEmpty } from "from-anywhere";
import { getOpenapiOperations } from "./getOpenapiOperations";
export const getOpenapisOperations = async (openapiUrlObject, selectedIds) => {
    const keys = Object.keys(openapiUrlObject).filter((id) => selectedIds && selectedIds.length > 0 ? selectedIds.includes(id) : true);
    return (await Promise.all(keys.map(async (openapiId) => {
        const openapiUrl = openapiUrlObject[openapiId];
        return getOpenapiOperations(openapiId, openapiUrl);
    }))).filter(notEmpty);
};
//# sourceMappingURL=getOpenapisOperations.js.map