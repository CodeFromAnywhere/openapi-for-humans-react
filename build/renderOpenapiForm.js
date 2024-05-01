"use server";
import { jsx as _jsx } from "react/jsx-runtime";
import { getFormSchema, submitOperation } from "openapi-util";
import { ReactJsonSchemaForm } from "./rjsf/ReactJsonSchemaForm.js";
/** Simple Openapi form
 *
 * Async Server Component that uses a client component after loading the schema
 */
export const renderOpenapiForm = async (props) => {
    const { openapiUri, method, path, withResponse } = props;
    const { schema, servers, parameters } = await getFormSchema({
        method,
        path,
        openapiUri,
    });
    //1. server-component: use getFormSchema (async function)
    //2. client-component: the resolved JSON Schema can be input into <RSJF/> ()
    return (_jsx("div", { children: schema ? (_jsx(ReactJsonSchemaForm, { schema: schema, 
            // TODO: Fill this with localStorage data
            formData: undefined, onSubmit: (data) => {
                let statusCode = undefined;
                let statusText = undefined;
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
            } })) : (_jsx("div", { children: "No schema" })) }));
};
//# sourceMappingURL=renderOpenapiForm.js.map