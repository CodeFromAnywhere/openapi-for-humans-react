import { Keys } from "from-anywhere";
import { FormContext, HttpMethodEnum } from "openapi-util";
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
/**
 * Simple Openapi form
 */
export declare const OpenapiForm: <T extends {
    paths: {
        [key: string]: {
            get?: OperationPartial | undefined;
            put?: OperationPartial | undefined;
            post?: OperationPartial | undefined;
            delete?: OperationPartial | undefined;
            options?: OperationPartial | undefined;
            head?: OperationPartial | undefined;
            patch?: OperationPartial | undefined;
            trace?: OperationPartial | undefined;
        };
    };
}, P extends Keys<T["paths"]>, M extends keyof T["paths"][P] & HttpMethodEnum>(props: {
    /** You can provide a direct JSON import of the OpenAPI here just in order to gain typescript type inference for the paths and methods */
    openapi?: T | undefined;
    path: P;
    method: M;
    formContext: FormContext;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=OpenapiForm.d.ts.map