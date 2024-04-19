import { notEmpty } from "from-anywhere";
import { getOpenapiOperations } from "./getOpenapiOperations";

export const getOpenapisOperations = async (openapiUrlObject: {
  [openapiId: string]: string;
}) => {
  return (
    await Promise.all(
      Object.keys(openapiUrlObject).map(async (openapiId) => {
        const openapiUrl =
          openapiUrlObject[openapiId as keyof typeof openapiUrlObject];
        return getOpenapiOperations(openapiId, openapiUrl);
      }),
    )
  ).filter(notEmpty);
};
