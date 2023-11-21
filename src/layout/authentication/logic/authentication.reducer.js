import { LOGIN } from "./authentication.const";


export const authenticationState = {
    loginFetching: false,
    email: null
};

export const authenticationReducer = (state = authenticationState, action) => {
    const {type, payload} = action;
    // debugger;
    switch(action.type){
        case LOGIN.INVOKE:
            return { ...state, loginError: null };

        case LOGIN.REQUEST:
            return { ...state, loginFetching: true };

        case LOGIN.SUCCESS:
            return { ...state, loginFetching: false };

        case LOGIN.FAILURE:
            return { ...state, loginFetching: false, loginError: action.error };

        default:
            return state;
    }
}