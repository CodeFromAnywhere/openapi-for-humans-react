import { notEmpty } from "from-anywhere";
import { getOpenapiOperations } from "./getOpenapiOperations";
export const getOpenapisOperations = async (openapiUrlObject) => {
    return (await Promise.all(Object.keys(openapiUrlObject).map(async (openapiId) => {
        const openapiUrl = openapiUrlObject[openapiId];
        return getOpenapiOperations(openapiId, openapiUrl);
    }))).filter(notEmpty);
};
//# sourceMappingURL=getOpenapisOperations.js.map