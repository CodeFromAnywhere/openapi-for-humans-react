import { OpenapiOperationObject, fetchOpenapi, notEmpty } from "from-anywhere";
import { OpenapiDetails } from "./types";

export const getOpenapiOperations = async (
  openapiId: string,
  openapiUrl: string,
): Promise<OpenapiDetails | undefined> => {
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
      const item = openapi.paths![path as keyof typeof openapi.paths];
      if (!item) {
        return;
      }

      const methods = Object.keys(item).filter((method) =>
        allowedMethods.includes(method),
      );
      const pathMethods = methods.map((method) => {
        const operation = item[
          method as keyof typeof item
        ] as OpenapiOperationObject;

        return {
          openapiId,
          path,
          method,
          operation,
          id: operation.operationId || path + "=" + method,
        };
      });

      return pathMethods;
    })
    .filter(notEmpty)
    .flat();

  return { openapiId, operations, document: openapi };
};
