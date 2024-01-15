import {
    authenticationPanel,
    CHECK_ACTIVATION_LINK_IS_EXPIRED,
    LOGIN,LOGOUT,
    OPEN_TWO_FACTOR_AUTHENTICATION_CODE_VERIFICATION,
    OPEN_LOGIN, OPEN_RESET_PASSWORD,
    RESEND_TWO_FACTOR_AUTHENTICATION_CODE,
    SEND_RESET_PASSWORD_LINK,
    VERIFY_TWO_FACTOR_AUTHENTICATON_CODE
} from "./authentication.const";

export const authenticationState = {
    isReady: false,
    loginFetching: false,
    loginError: null,
    activateUserFetching: false,
    activateUserError: null,
    isActivateUserLinkExpired: false,
    isActivateUserLinkExpiredFetching: false,
    setNewPasswordFetching: false,
    setNewPasswordError: null,
    visiblePanel: authenticationPanel.login,
    sendResetPasswordLinkSuccess: false,
    email: null
};

export const authenticationReducer = (state = authenticationState, action) => {
    //debugger;
    const { type, payload } = action;

    switch (action.type) {
        case LOGIN.INVOKE:
            return { ...state, loginError: null };

        case LOGIN.REQUEST:
            return { ...state, loginFetching: true };

        case LOGIN.SUCCESS:
            return { ...state, loginFetching: false };

        case LOGIN.FAILURE:
            return { ...state, loginFetching: false, loginError: action.error };

            case LOGOUT.SUCCESS:
                return { ...state, isReady:false };

        default:
            return state;
    }
}
