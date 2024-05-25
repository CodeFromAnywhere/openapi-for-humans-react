import { OpenAPIV3 } from "openapi-types";
import { Keys, O } from "from-anywhere";
import { HttpMethodEnum } from "openapi-util";
import { JSONSchema7 } from "json-schema";
export type OperationPartial = {
    responses: {
        "200": {
            content: {
                "application/json": {
                    schema: any;
                };
            };
        };
    };
};
/** Simple Openapi form
 *
 * Async Server Component that uses a client component after loading the schema
 */
export declare const renderOpenapiForm: <T extends {
    paths: {
        [key: string]: {
            head?: OperationPartial | undefined;
            options?: OperationPartial | undefined;
            get?: OperationPartial | undefined;
            put?: OperationPartial | undefined;
            post?: OperationPartial | undefined;
            delete?: OperationPartial | undefined;
            patch?: OperationPartial | undefined;
            trace?: OperationPartial | undefined;
        };
    };
}, P extends Keys<T["paths"]>, M extends keyof T["paths"][P] & HttpMethodEnum>(props: {
    /** You can provide a direct JSON import of the OpenAPI here just in order to gain typescript type inference for the paths and methods */
    openapi?: T | undefined;
    openapiUri: string;
    path: P;
    method: M;
    /**
     * Do something after you get a response back
     *
     * NB: tried to get the response type but it's nearly impossible from such a deep JSON. `json-schema-to-ts` doesn't work so well: Type instantiation is excessively deep and possibly infinite
     */
    onSubmit: (data: O | undefined, context: {
        schema?: JSONSchema7 | undefined;
        servers?: OpenAPIV3.ServerObject[] | undefined;
        parameters?: OpenAPIV3.ParameterObject[] | undefined;
        securitySchemes?: {
            [key: string]: OpenAPIV3.SecuritySchemeObject;
        } | undefined;
    }) => void;
}) => Promise<import("react/jsx-runtime").JSX.Element>;
//# sourceMappingURL=renderOpenapiForm.d.ts.map