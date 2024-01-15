import { myPreferencesFlows } from "./my-preferences.flows";
import { myPreferencesReducer, myPreferencesState } from "./my-preferences.reducers";

export const myPreferencesModule = {
  name: "myPreferences",
  reducer: myPreferencesReducer,
  flows: myPreferencesFlows,
  state: myPreferencesState,
}