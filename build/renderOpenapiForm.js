import { jsx as _jsx } from "react/jsx-runtime";
import { getFormSchema } from "openapi-util";
import { ReactJsonSchemaForm } from "./rjsf/ReactJsonSchemaForm.js";
/** Simple Openapi form
 *
 * Async Server Component that uses a client component after loading the schema
 */
export const renderOpenapiForm = async (props) => {
    const { openapiUri, method, path, onSubmit } = props;
    const formContext = await getFormSchema({
        method,
        path,
        openapiUri,
    });
    const { schema, servers, parameters, securitySchemes } = formContext;
    //1. server-component: use getFormSchema (async function)
    //2. client-component: the resolved JSON Schema can be input into <RSJF/> ()
    return (_jsx("div", { children: schema ? (_jsx(ReactJsonSchemaForm, { schema: schema, 
            // TODO: Fill this with localStorage data
            formData: undefined, onSubmit: (data) => onSubmit(data, formContext) })) : (_jsx("div", { children: "No schema" })) }));
};
//# sourceMappingURL=renderOpenapiForm.js.map