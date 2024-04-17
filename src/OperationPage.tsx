import { OpenapiDocument } from "./types";
import { mergeObjectsArray } from "./mergeObjectsArray";

export type OperationState = {
  /** State to prefil form with an example from the schema */
  exampleIndex?: number;
  /** State to prefil form with input from a previous run */
  runId?: string;
};

/** Page that shows a form, docs, examples, previous runs */
export const OperationPage = (props: {
  openapi: OpenapiDocument;
  operationId: string;
  state: OperationState;
  setState: (state: OperationState) => void;
  /** Can be stored locally */
  previousRuns?: { id: string; run: any }[];
}) => {
  const { openapi, operationId, setState, state, previousRuns } = props;
  const allowedMethods = [
    "get",
    "post",
    "put",
    "patch",
    "delete",
    "head",
    "options",
  ];

  // todo: find operation with id from the openapi, and render that
  const methods = openapi?.paths
    ? mergeObjectsArray(
        Object.keys(openapi.paths).map((path) => {
          return {
            [path]: Object.keys((openapi as any).paths[path]).filter((method) =>
              allowedMethods.includes(method),
            ),
          };
        }),
      )
    : undefined;

  return <div>{JSON.stringify(methods)}</div>;
};
