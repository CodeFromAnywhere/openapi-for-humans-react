import { JSONSchema7 } from "json-schema";
import { O } from "from-anywhere";
/** General purpose component with all my widgets and templates */
export declare const ReactJsonSchemaForm: (props: {
    id?: string;
    formData?: O;
    isBooleanTextField?: boolean;
    variableJsonSchema?: JSONSchema7;
    onSubmit?: (formData?: O) => void;
    /** If given, will show no submit button */
    onChange?: (formData?: O) => void;
    schema: JSONSchema7;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ReactJsonSchemaForm.d.ts.map