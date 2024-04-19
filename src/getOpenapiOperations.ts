import {
  OpenapiOperationObject,
  OpenapiSchemaObject,
  fetchOpenapi,
  notEmpty,
} from "from-anywhere";
import { OpenapiDetails } from "./types";

export const getOpenapiOperations = async (
  openapiId: string,
  openapiUrl: string | undefined,
): Promise<OpenapiDetails | undefined> => {
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

        // Get it fully resolved from the openapi. Do some research to find this function
        const resolvedRequestBodySchema: OpenapiSchemaObject = {};

        return {
          openapiId,
          path,
          method,
          operation,
          resolvedRequestBodySchema,
          id: operation.operationId || path + "=" + method,
        };
      });

      return pathMethods;
    })
    .filter(notEmpty)
    .flat();

  return { openapiId, operations, document: openapi, openapiUrl };
};
