import { companyDetailsFlows } from "./company-details.flows";
import { companyDetailsReducer, companyDetailsState } from "./company-details.reducers";

export const companyDetailsModule = {
    name: "companyDetails",
    reducer: companyDetailsReducer,
    flows: companyDetailsFlows,
    state: companyDetailsState,
}