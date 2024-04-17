import { OpenapiDocument } from "./types";
export type OperationState = {
    /** State to prefil form with an example from the schema */
    exampleIndex?: number;
    /** State to prefil form with input from a previous run */
    runId?: string;
};
/** Page that shows a form, docs, examples, previous runs */
export declare const OperationPage: (props: {
    openapi: OpenapiDocument;
    operationId: string;
    state: OperationState;
    setState: (state: OperationState) => void;
    /** Can be stored locally */
    previousRuns?: {
        id: string;
        run: any;
    }[];
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=OperationPage.d.ts.map