import { OperationDetails } from "./types";
export type OperationState = {
    /** State to prefil form with an example from the schema */
    exampleIndex?: number;
    /** State to prefil form with input from a previous run */
    runId?: string;
};
/** Page that shows a form, docs, examples, previous runs */
export declare const OperationPage: (props: {
    openapiUrl: string;
    operationDetails: OperationDetails;
    state: OperationState;
    setState: (state: OperationState) => void;
    /** Can be stored locally */
    previousRuns?: {
        id: string;
        run: any;
    }[];
}) => Promise<import("react/jsx-runtime").JSX.Element>;
//# sourceMappingURL=OperationPage.d.ts.map