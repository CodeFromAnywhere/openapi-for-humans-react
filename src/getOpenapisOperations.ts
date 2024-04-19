import { notEmpty } from "from-anywhere";
import { getOpenapiOperations } from "./getOpenapiOperations";

export const getOpenapisOperations = async (
  openapiUrlObject: {
    [openapiId: string]: string;
  },
  selectedIds?: string[] | undefined,
) => {
  const keys = Object.keys(openapiUrlObject).filter((id) =>
    selectedIds && selectedIds.length > 0 ? selectedIds.includes(id) : true,
  );

  return (
    await Promise.all(
      keys.map(async (openapiId) => {
        const openapiUrl = openapiUrlObject[
          openapiId as keyof typeof openapiUrlObject
        ] as string | undefined;

        return getOpenapiOperations(openapiId, openapiUrl);
      }),
    )
  ).filter(notEmpty);
};
