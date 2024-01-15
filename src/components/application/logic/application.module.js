import { applicationReducer, applicationState } from "./application.reducer";
import { applicationFlows } from "./application.flows";

export const applicationModule = {
    name: "application",
    reducer: applicationReducer,
    flows: applicationFlows,
    state: applicationState
};
