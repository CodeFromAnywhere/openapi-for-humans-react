import { O } from "from-anywhere";
import { OpenapiListItem, SearchResult, SearchType } from "./types.js";
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
    openapis: OpenapiListItem[];
    /** Current openapiId, if any */
    openapiId?: string;
    /** Current operationId, if any */
    operationId?: string;
    /** Function to refetch one or more openapi(s) if needed */
    /** LLM Search requires a custom submit, others go instant (maybe with debounce) */
    searchType?: SearchType;
    /** NB: Took the typing from next.js. Not sure if this will work with other Link components. */
    LinkComponent?: ForwardRefExoticComponent<{
        href: string | O;
        children: ReactNode;
    }>;
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