import { jsx as _jsx } from "react/jsx-runtime";
export const OpenapiOverviewPage = (props) => {
    const { openapiDetails } = props;
    return (_jsx("div", { children: openapiDetails.operations.map((item) => {
            //
            return (_jsx("div", { children: item.operation.operationId }, item.operation.operationId));
        }) }));
};
//# sourceMappingURL=OpenapiOverviewPage.js.map