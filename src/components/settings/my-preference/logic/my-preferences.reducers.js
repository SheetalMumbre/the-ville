import { action } from "../../../../utils/action"
import { GET_MY_PREFERENCES, TOGGLE_THEME, UPDATE_MY_PREFERENCES } from "./my-preferences.const"

export const myPreferencesState = {
    myPreferencesFetching : false,
    myPreferencesUpdating : false,
    settings: null,
    myPreferencesError: null,
}

export const myPreferencesReducer = (state = myPreferencesState, action ) => {
    switch(action.type){
        case GET_MY_PREFERENCES.INVOKE:
            return{...state, myPreferencesFetching: true, settings: null};

        case GET_MY_PREFERENCES.SUCCESS:
            return{...state, myPreferencesFetching: false, settings: action.data};

        case GET_MY_PREFERENCES.FAILURE:
            return{...state, myPreferencesFetching: false, myPreferencesError: action.error};

        case UPDATE_MY_PREFERENCES.INVOKE:
            return{...state, myPreferencesUpdating: true};

        case UPDATE_MY_PREFERENCES.SUCCESS:
            return{...state, myPreferencesUpdating: false, settings: action.data};

        case UPDATE_MY_PREFERENCES.FAILURE:
            return{...state, myPreferencesUpdating: false, settings: action.error};

        case TOGGLE_THEME.INVOKE:
            return{...state};

        default:
            return state;
    }
}