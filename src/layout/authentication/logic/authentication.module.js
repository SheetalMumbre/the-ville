import { authenticationReducer, authenticationState } from "./authentication.reducer";
import { authenticationFlows } from "./authentication.flow";

export const authenticationModule = {
  name: "authentication",
  reducer: authenticationReducer,
  flows: authenticationFlows,
  state: authenticationState
};
