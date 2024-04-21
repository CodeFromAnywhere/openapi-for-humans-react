import { notEmpty } from "from-anywhere";
import { getOpenapiOperations } from "./getOpenapiOperations";
import { OpenapiListItem } from "./types";

export const getOpenapisOperations = async (
  openapiList: OpenapiListItem[],
  selectedIds?: string[] | undefined,
) => {
  const filteredList = openapiList.filter((item) =>
    selectedIds && selectedIds.length > 0
      ? selectedIds.includes(item.key)
      : true,
  );

  return (
    await Promise.all(
      filteredList.map(async (item) => {
        const openapiUrl = `https://${item.key}.dataman.ai/${item.key}.json`;

        return getOpenapiOperations(item.key, openapiUrl);
      }),
    )
  ).filter(notEmpty);
};
