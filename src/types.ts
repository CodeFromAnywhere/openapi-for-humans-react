import { OpenapiOperationObject, OpenapiSchemaObject } from "from-anywhere";
import { OpenAPIDocument } from "actionschema/types";
import { HttpMethodEnum } from "openapi-util";

export type SearchType = "llm" | "semantic" | "regular";

export type OpenapiListItem = {
  key: string;
  title: string;
  originalUrl: string;
};

export type SearchResult = {
  openapiId: string;
  operationId: string;
  summary: string;
  /** Could potentially be provided by an LLM */
  matchBecause?: string;
};

export type OpenapiStatus = "disabled" | "favorite";

export type OpenapiDetails = {
  openapiId: string;
  openapiUrl: string;
  operations: OperationDetails[];
  document: OpenAPIDocument;
};

export type OperationDetails = {
  /** either the operationId or path=method */
  id: string;
  openapiId: string;
  path: string;
  method: HttpMethodEnum;
  operation: OpenapiOperationObject;
  /** Can be added for convienience. Must resolve al references from the openapi */
  resolvedRequestBodySchema: OpenapiSchemaObject;
};
