import { Keys, O } from "from-anywhere";
import { FormContext, HttpMethodEnum, submitOperation } from "openapi-util";
import { ReactJsonSchemaForm } from "./rjsf/ReactJsonSchemaForm.js";
import { useState } from "react";

export type OperationPartial = {
  // requestBody: { content: { "application/json": { schema: any } } };
  responses: {
    "200": { content: { "application/json": { schema: any } } };
  };
};

/**
 * Simple Openapi form
 */
export const OpenapiForm = <
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
  path: P;
  method: M;
  formContext: FormContext;
}) => {
  const { method, path, formContext } = props;

  const [isLoading, setIsLoading] = useState(false);

  const { schema, parameters, securitySchemes, servers } = formContext;

  //1. server-component: use getFormSchema (async function)
  //2. client-component: the resolved JSON Schema can be input into <RSJF/> ()
  return (
    <div>
      {isLoading ? <div>Loading</div> : null}

      {schema ? (
        <ReactJsonSchemaForm
          schema={schema}
          // TODO: Fill this with localStorage data
          formData={undefined}
          onSubmit={(data) => {
            if (!servers) {
              alert("No servers");
              return;
            }

            setIsLoading(true);

            let statusCode: number | undefined = undefined;
            let statusText: string | undefined = undefined;
            submitOperation({
              path,
              method,
              servers,
              data: data || {},
              parameters,

              securitySchemes,
            })
              .then(async (response) => {
                statusCode = response.status;
                statusText = response.statusText;
                const json = await response.json();

                return json;
              })
              .then((result) => {
                setIsLoading(false);
                console.log({ result });
              })
              .catch((e) => {
                setIsLoading(false);
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
