import {
  OpenapiDocument,
  OpenapiStatus,
  SearchResult,
  SearchType,
} from "./types";

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
export const OpenapiExplorer = (props: {
  openapis: { id: string; document: OpenapiDocument; status?: OpenapiStatus }[];
  /** Function to refetch one or more openapi(s) if needed */
  onRefreshOpenapis: (openapiIds: string[]) => void;
  onClickOperation: (openapiId: string, operationId: string) => void;
  search: string;
  setSearch: (query: string, type: SearchType) => void;
  /** LLM Search requires a custom submit, others go instant (maybe with debounce) */
  onSubmitSearch: () => void;
  searchType?: SearchType;
  setSearchType?: (searchType: SearchType) => void;
  lastSearchResults: SearchResult[];
  showSelectBoxes?: boolean;
  selectedOperations?: { operationId: string; openapiId: string }[];
  /** Needed to perform LLM prompts */
  openapiKey?: string;
  /** Would require an openapi key */
  isLlmSearchEnabled?: boolean;
  /** Probably can be done locally */
  isSemanticSearchEnabled?: boolean;
}) => {
  /**
  - Research how to sort an openapi
  - Create a sorted navigation that sorts per openapi in the regular way
  - When searching, show matches based on summary, path, method, operationId
   */
  return <div>It's working</div>;
};
