import { OpenapiOperationObject } from "from-anywhere";
import { OpenapiDocument, OpenapiStatus, SearchResult, SearchType } from "./types";
/**
 * Component to search through one or multiple OpenAPIs.
 *
 * Should not be opinionated in state or navigation, so it can be used in multiple ways.
 *
 * Ideally this becomes the type of explorer that allows for hierarchical search through tousands of APIs.
 *
 * It could help you in the process of choosing the right services and endpoints for bigger tasks.
 *
 * It would help to create a subset of OpenAPI Operations before starting to make an ActionSchema.
 */
export declare const OpenapiExplorer: (props: {
    openapis: {
        openapiId: string;
        document: OpenapiDocument;
        operations: {
            openapiId: string;
            path: string;
            method: string;
            operation: OpenapiOperationObject;
        }[];
        status?: OpenapiStatus;
    }[];
    /** Function to refetch one or more openapi(s) if needed */
    onRefreshOpenapis: (openapiIds: string[]) => void;
    search: string;
    setSearch: (query: string, type: SearchType) => void;
    /** LLM Search requires a custom submit, others go instant (maybe with debounce) */
    onSubmitSearch: () => void;
    searchType?: SearchType;
    LinkComponent?: (props: {
        href: string;
        children: JSX.Element;
    }) => JSX.Element;
    setSearchType?: (searchType: SearchType) => void;
    lastSearchResults: SearchResult[];
    showSelectBoxes?: boolean;
    selectedOperations?: {
        operationId: string;
        openapiId: string;
    }[];
    /** Needed to perform LLM prompts */
    openapiKey?: string;
    /** Would require an openapi key */
    isLlmSearchEnabled?: boolean;
    /** Probably can be done locally */
    isSemanticSearchEnabled?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=OpenapiExplorer.d.ts.map