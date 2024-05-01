import { Keys } from "from-anywhere";
import { getFormSchema, HttpMethodEnum, submitOperation } from "openapi-util";
import { ReactJsonSchemaForm } from "./rjsf/ReactJsonSchemaForm.js";

export type OperationPartial = {
  // requestBody: { content: { "application/json": { schema: any } } };
  responses: {
    "200": { content: { "application/json": { schema: any } } };
  };
};

/** Simple Openapi form
 *
 * Async Server Component that uses a client component after loading the schema
 */
export const renderOpenapiForm = async <
  T extends {
    paths: {
      [key: string]: {
        [key in HttpMethodEnum]?: OperationPartial;
      };
    };
  },
  P extends Keys<T["paths"]>,
  M extends keyof T["paths"][P] & HttpMethodEnum,
>(props: {
  /** You can provide a direct JSON import of the OpenAPI here just in order to gain typescript type inference for the paths and methods */
  openapi?: T;
  openapiUri: string;
  path: P;
  method: M;
  /**
   * Do something after you get a response back
   *
   * NB: tried to get the response type but it's nearly impossible from such a deep JSON. `json-schema-to-ts` doesn't work so well: Type instantiation is excessively deep and possibly infinite
   */
  withResponse: (
    response: any,
    statusCode?: number,
    statusText?: string,
  ) => void;
}) => {
  const { openapiUri, method, path, withResponse } = props;
  const { schema, servers, parameters } = await getFormSchema({
    method,
    path,
    openapiUri,
  });

  //1. server-component: use getFormSchema (async function)
  //2. client-component: the resolved JSON Schema can be input into <RSJF/> ()
  return (
    <div>
      {schema ? (
        <ReactJsonSchemaForm
          schema={schema}
          // TODO: Fill this with localStorage data
          formData={undefined}
          onSubmit={(data) => {
            let statusCode: number | undefined = undefined;
            let statusText: string | undefined = undefined;
            submitOperation({
              path,
              method,
              servers,
              data: data || {},
              parameters,
            })
              .then(async (response) => {
                statusCode = response.status;
                statusText = response.statusText;
                const json = await response.json();

                return json;
              })
              .then((result) => {
                withResponse?.(result, statusCode, statusText);
              })
              .catch((e) => {
                console.log(e);
              });
          }}
        />
      ) : (
        <div>No schema</div>
      )}
    </div>
  );
};
