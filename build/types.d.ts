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
//# sourceMappingURL=types.d.ts.map