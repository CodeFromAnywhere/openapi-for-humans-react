import { O, Url } from "from-anywhere";
import { OpenapiDetails, SearchResult, SearchType } from "./types";
import { ForwardRefExoticComponent, ReactNode } from "react";
import { Searchbar } from "./Searchbar";

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
export const OpenapiExplorer = (props: {
  openapis: OpenapiDetails[];
  /** Current openapiId, if any */
  openapiId?: string;
  /** Current operationId, if any */
  operationId?: string;
  /** Function to refetch one or more openapi(s) if needed */
  onRefreshOpenapis: (openapiIds: string[]) => void;
  /** LLM Search requires a custom submit, others go instant (maybe with debounce) */
  onSubmitSearch: () => void;
  searchType?: SearchType;

  /** NB: Took the typing from next.js. Not sure if this will work with other Link components. */
  LinkComponent?: ForwardRefExoticComponent<{
    href: string | O;
    children: ReactNode;
  }>;

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
  const { openapis, LinkComponent, openapiId, operationId } = props;
  /**
  - Research how to sort an openapi
  - Create a sorted navigation that sorts per openapi in the regular way
  - When searching, show matches based on summary, path, method, operationId
   */

  const otherOpenapis = openapis.filter((x) =>
    !openapiId ? true : x.openapiId !== openapiId,
  );
  const currentOpenapi = openapis.find((x) => x.openapiId === openapiId);
  const branding = currentOpenapi?.document.info?.branding;

  console.log({ branding });
  const renderOpenapiHeader = (item: OpenapiDetails) => {
    const href = "/" + item.openapiId;
    const children = (
      <div
        key={item.openapiId}
        className={`p-4 cursor-pointer ${
          item.openapiId === openapiId ? "bg-green-500" : "hover:bg-gray-500/50"
        }`}
      >
        <p>
          {item.openapiId} ({item.operations.length})
        </p>
        <p className="italic text-sm line-clamp-1">
          {String(item.document?.info?.description)}
        </p>
      </div>
    );

    return LinkComponent ? (
      <LinkComponent href={href}>{children}</LinkComponent>
    ) : (
      <a href={href}>{children}</a>
    );
  };

  const renderOpenapiOperations = (item: OpenapiDetails) => {
    return item.operations.map((operationDetails) => {
      const href = `/${item.openapiId}/${operationDetails.id}`;
      const isActive = operationDetails.id === operationId;
      const children = (
        <div
          id={isActive ? "active-operation" : undefined}
          className={`p-2 cursor-pointer  ${
            isActive ? "bg-blue-200" : "hover:bg-gray-500/50"
          }`}
          key={`nav-${operationDetails.id}`}
        >
          <p className="line-clamp-1">{operationDetails.id}</p>

          {operationDetails.operation.summary ? (
            <span className="italic text-sm line-clamp-1">
              {operationDetails.operation.summary}
            </span>
          ) : null}
        </div>
      );
      return LinkComponent ? (
        <LinkComponent href={href}>{children}</LinkComponent>
      ) : (
        <a href={href}>{children}</a>
      );
    });
  };

  return (
    <div
      className="relative"
      style={{ backgroundColor: branding?.primaryColorHex }}
    >
      {currentOpenapi ? (
        <div className="sticky top-0">
          {branding?.logoImageUrl ? (
            <div>
              <img src={branding.logoImageUrl} width="200" height="200" />
            </div>
          ) : null}
          <Searchbar />
          {renderOpenapiHeader(currentOpenapi)}
        </div>
      ) : null}

      <div>
        {currentOpenapi ? (
          <div>{renderOpenapiOperations(currentOpenapi)}</div>
        ) : null}
        {otherOpenapis.map(renderOpenapiHeader)}
      </div>
    </div>
  );
};
