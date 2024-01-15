import { GET_USERS, SAVE_CONFIGURE_USER } from "./configure-user.const"

export const configureUserState = {
    configureUserData : null,
    isFetching: false,
    isSaving: false,
    configureUserError: null,
    tableFetching: false,
    table: null,
}
export const configureUserReducer = (state = configureUserState, action) =>{
    switch(action.type){
        case SAVE_CONFIGURE_USER.INVOKE:
            return{...state, isFetching: true, configureUserData: null, isSaving: true };

        case SAVE_CONFIGURE_USER.SUCCESS:
            return{...state, isFetching:false, configureUserData:action.data, isSaving:false };

        case SAVE_CONFIGURE_USER.FAILURE:
            return{...state, isFetching: false, configureUserError: action.error, isSaving:false };

        case GET_USERS.REQUEST:
            return{...state, tableFetching:true }

        case GET_USERS.SUCCESS:
            debugger;
            return{ ...state, table: action.data, tableFetching: false}

        case GET_USERS.FAILURE:
            return{ ...state, tableFetching: false }

        default:
            return state;
    }
}