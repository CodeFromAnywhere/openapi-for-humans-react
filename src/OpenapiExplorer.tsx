import { OpenapiOperationObject } from "from-anywhere";
import {
  OpenapiDocument,
  OpenapiStatus,
  SearchResult,
  SearchType,
} from "./types";
import { ReactNode } from "react";

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
  selectedOperations?: { operationId: string; openapiId: string }[];
  /** Needed to perform LLM prompts */
  openapiKey?: string;
  /** Would require an openapi key */
  isLlmSearchEnabled?: boolean;
  /** Probably can be done locally */
  isSemanticSearchEnabled?: boolean;
}) => {
  const { openapis, LinkComponent } = props;
  /**
  - Research how to sort an openapi
  - Create a sorted navigation that sorts per openapi in the regular way
  - When searching, show matches based on summary, path, method, operationId
   */
  return (
    <div>
      {openapis.map((item) => {
        const href = "/" + item.openapiId;
        const children = (
          <div>
            {item.openapiId} ({item.operations.length})
          </div>
        );
        return (
          <div
            key={item.openapiId}
            className="p-4 hover:bg-gray-200/50 cursor-pointer"
          >
            {LinkComponent ? (
              <LinkComponent href={href}>{children}</LinkComponent>
            ) : (
              <a href={href}>{children}</a>
            )}
          </div>
        );
      })}
    </div>
  );
};
