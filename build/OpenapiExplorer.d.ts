import { O } from "from-anywhere";
import { OpenapiDetails, SearchResult, SearchType } from "./types";
import { ForwardRefExoticComponent, ReactNode } from "react";
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
 *
 * NB: The Active Operation Div is marked with `active-operation` so you can do stuff with it.
 */
export declare const OpenapiExplorer: (props: {
    openapis: OpenapiDetails[];
    /** Current openapiId, if any */
    openapiId?: string | undefined;
    /** Current operationId, if any */
    operationId?: string | undefined;
    /** Function to refetch one or more openapi(s) if needed */
    onRefreshOpenapis: (openapiIds: string[]) => void;
    /** LLM Search requires a custom submit, others go instant (maybe with debounce) */
    onSubmitSearch: () => void;
    searchType?: SearchType | undefined;
    /** NB: Took the typing from next.js. Not sure if this will work with other Link components. */
    LinkComponent?: ForwardRefExoticComponent<{
        href: string | O;
        children: ReactNode;
    }> | undefined;
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