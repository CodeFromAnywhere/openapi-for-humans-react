import { OpenapiOperationObject } from "from-anywhere";

export type OpenapiDocument = any;
export type SearchType = "llm" | "semantic" | "regular";

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
  operations: {
    /** either the operationId or path=method */
    id: string;
    openapiId: string;
    path: string;
    method: string;
    operation: OpenapiOperationObject;
  }[];
  document: OpenapiDocument;
};
