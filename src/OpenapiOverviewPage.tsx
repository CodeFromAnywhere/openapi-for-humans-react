import { OpenapiDetails } from "./types";

export const OpenapiOverviewPage = (props: {
  openapiDetails: OpenapiDetails;
}) => {
  const { openapiDetails } = props;

  return (
    <div className="p-20">
      <a className="text-blue-500" href={openapiDetails.openapiUrl}>
        {openapiDetails.openapiUrl}
      </a>

      <p>Operations:</p>
      <ul>
        {openapiDetails.operations.map((item) => {
          //
          return (
            <li
              className="list-disc list-inside"
              key={item.operation.operationId}
            >
              {item.operation.operationId}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
