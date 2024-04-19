import { OpenapiDocument, OpenapiOperationObject, OpenapiSchemaObject } from "from-anywhere";
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
    openapiUrl: string;
    operations: OperationDetails[];
    document: OpenapiDocument;
};
export type OperationDetails = {
    /** either the operationId or path=method */
    id: string;
    openapiId: string;
    path: string;
    method: string;
    operation: OpenapiOperationObject;
    /** Can be added for convienience. Must resolve al references from the openapi */
    resolvedRequestBodySchema: OpenapiSchemaObject;
};
//# sourceMappingURL=types.d.ts.map