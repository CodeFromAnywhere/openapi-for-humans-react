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
        id: string;
        document: OpenapiDocument;
        status?: OpenapiStatus;
    }[];
    /** Function to refetch one or more openapi(s) if needed */
    onRefreshOpenapis: (openapiIds: string[]) => void;
    onClickOperation: (openapiId: string, operationId: string) => void;
    search: string;
    setSearch: (query: string, type: SearchType) => void;
    /** LLM Search requires a custom submit, others go instant (maybe with debounce) */
    onSubmitSearch: () => void;
    searchType?: SearchType | undefined;
    setSearchType?: ((searchType: SearchType) => void) | undefined;
    lastSearchResults: SearchResult[];
    showSelectBoxes?: boolean | undefined;
    selectedOperations?: {
        operationId: string;
        openapiId: string;
    }[] | undefined;
    /** Needed to perform LLM prompts */
    openapiKey?: string | undefined;
    /** Would require an openapi key */
    isLlmSearchEnabled?: boolean | undefined;
    /** Probably can be done locally */
    isSemanticSearchEnabled?: boolean | undefined;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=OpenapiExplorer.d.ts.map