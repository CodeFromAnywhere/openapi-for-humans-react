import Markdown from "react-markdown";
import { FormContext, HttpMethodEnum } from "openapi-util";
import { OperationDetails } from "./types.js";
import { OpenapiForm } from "./OpenapiForm.js";
import { submitOperation } from "openapi-util";

export type OperationState = {
  /** State to prefil form with an example from the schema */
  exampleIndex?: number;
  /** State to prefil form with input from a previous run */
  runId?: string;
};

/** Page that shows a form, docs, examples, previous runs */
export const OperationPage = async (props: {
  openapiUrl: string;
  operationDetails: OperationDetails;
  formContext: FormContext;
}) => {
  const { openapiUrl, operationDetails, formContext } = props;

  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold pb-10">{operationDetails.id}</h1>
      <Markdown
        components={{
          h1: (props) => <h1 className="text-3xl py-8">{props.children}</h1>,
          h2: (props) => <h2 className="text-2xl py-8">{props.children}</h2>,
          code: (props) => <code className="font-bold">{props.children}</code>,
          li: (props) => <li className="list-disc list-inside" {...props} />,
          a: (props) => <a className="text-blue-500" {...props} />,
          p: (props) => <p className="py-2" {...props} />,
          pre: (props) => (
            <pre
              className="w-full p-4 my-4 border border-orange-300"
              {...props}
            />
          ),
        }}
      >
        {operationDetails.operation?.description ||
          operationDetails.operation?.summary}
      </Markdown>
      <OpenapiForm
        formContext={formContext}
        method={operationDetails.method}
        path={operationDetails.path}
      />
    </div>
  );
};
