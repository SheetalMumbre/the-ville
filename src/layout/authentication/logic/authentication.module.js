import { authenticationFlow } from "./authentication.flow";
import { authenticationReducer, authenticationState } from "./authentication.reducer";

export const authenticationModule = {
 name: "authentication",
 reducer: authenticationReducer,
 flows: authenticationFlow, 
 state: authenticationState
};