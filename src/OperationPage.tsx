"use client";

import { useState } from "react";
import { OperationDetails } from "./types";
import { O } from "from-anywhere";
import Markdown from "react-markdown";

export type OperationState = {
  /** State to prefil form with an example from the schema */
  exampleIndex?: number;
  /** State to prefil form with input from a previous run */
  runId?: string;
};

/** Page that shows a form, docs, examples, previous runs */
export const OperationPage = (props: {
  operationDetails: OperationDetails;
  state: OperationState;
  setState: (state: OperationState) => void;
  /** Can be stored locally */
  previousRuns?: { id: string; run: any }[];
}) => {
  const { operationDetails, setState, state, previousRuns } = props;

  const [formData, setFormData] = useState<O | undefined>({});
  return (
    <div className="p-20">
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
      {/* <ReactJsonSchemaForm
        schema={operationDetails.resolvedRequestBodySchema}
        formData={formData}
        id={operationDetails.id}
        // TODO: remove this and alter the schema as booleans should then be strings
        isBooleanTextField={false}
        onChange={(v) => setFormData(v)}
        onSubmit={() => {
          console.log("SUBMIT BUTTON HIT");
        }}
        variableJsonSchema={undefined}
      /> */}
    </div>
  );
};
