import { configureUserFlows } from "./configure-user.flows";
import { configureUserReducer, configureUserState } from "./configure-user.reducers";

export const configureUserModule = {
    name: "configureUser",
    reducer: configureUserReducer,
    flows: configureUserFlows,
    state: configureUserState,
}