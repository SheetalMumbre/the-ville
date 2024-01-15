import { GET_MY_PREFERENCES, TOGGLE_THEME, UPDATE_MY_PREFERENCES } from "./my-preferences.const";
import { handle } from "../../../../store/redux-flow";

export const myPreferencesFlows = [ 
    handle(GET_MY_PREFERENCES.INVOKE,handleGetUserPreferences),
    handle(UPDATE_MY_PREFERENCES.INVOKE, handleUpdateUserPreferences),
    handle(TOGGLE_THEME.INVOKE, handleToggleTheme),
]
//debugger;
async function handleToggleTheme({darkTheme}, dispatch, state){ 
   // debugger;
    const currentTheme = state.application.theme;
    const newTheme = !currentTheme ? "dark" : null;

    dispatch({type: TOGGLE_THEME.SUCCESS, theme: newTheme});

    if(newTheme){
        console.log("if statement");
    }else{
        console.log("else statement");
    }
}

async function handleGetUserPreferences(_, dispatch) {
    try {//debugger;
      // Hardcoded response based on GetUserSettingsResponse
      const response = {
        hasDarkModeActive: true, // Set to true or false as needed
        hasNotificationsAboutNewsletters: true, // Set to true or false as needed
        hasNotificationsAboutShipmentUpdates: true, // Set to true or false as needed
      };

      dispatch(GET_MY_PREFERENCES.success({ data: response }));
    } 
    catch (error) {
      dispatch(GET_MY_PREFERENCES.failure({ error }));
    }
  }

  async function handleUpdateUserPreferences({ form }, dispatch, state) {
    try {//debugger;
      // const response = await post("/api/users/updateUserSettings", form);
  
      dispatch(UPDATE_MY_PREFERENCES.success({ data: form }));
      //dispatch(showSuccessMessage(mypreferencesResources.messages.mypreferencesSavedSuccessfully))
      //await handleToggleTheme({ darkTheme: form.hasDarkModeActive }, dispatch, state);
    } catch (error) {
      dispatch(UPDATE_MY_PREFERENCES.failure({ error }));
    }
  }