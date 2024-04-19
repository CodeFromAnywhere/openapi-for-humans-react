import { OpenapiDetails } from "./types";

export const OpenapiOverviewPage = (props: {
  openapiDetails: OpenapiDetails;
}) => {
  const { openapiDetails } = props;

  return (
    <div>
      {openapiDetails.operations.map((item) => {
        //
        return (
          <div key={item.operation.operationId}>
            {item.operation.operationId}
          </div>
        );
      })}
    </div>
  );
};
