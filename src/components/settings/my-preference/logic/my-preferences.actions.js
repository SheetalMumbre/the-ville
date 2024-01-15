import { GET_MY_PREFERENCES, TOGGLE_THEME, UPDATE_MY_PREFERENCES } from "./my-preferences.const";

export const getMyPreferences = () => GET_MY_PREFERENCES.invoke();
export const updateMyPreferences = (form) => UPDATE_MY_PREFERENCES.invoke(form);
export const toggleTheme = (darkTheme) => TOGGLE_THEME.invoke({darkTheme});
//debugger;