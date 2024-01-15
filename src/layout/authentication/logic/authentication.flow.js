import { handle } from "../../../store/redux-flow";
import { ACTIVATE_USER, CHECK_ACTIVATION_LINK_IS_EXPIRED, LOGIN, LOGOUT, SEND_RESET_PASSWORD_LINK, SET_NEW_PASSWORD, VERIFY_TWO_FACTOR_AUTHENTICATON_CODE, RESEND_TWO_FACTOR_AUTHENTICATION_CODE, authenticationResources, TwoFactorAuthenticationCodeVerificationNeeded, OPEN_TWO_FACTOR_AUTHENTICATION_CODE_VERIFICATION } from "./authentication.const.js";
import { redirectToUrl } from "../../../utils/location";
import { goToCodeVerification } from "./authentication.action";
import { setApplicationReadyState } from "../../../components/application/logic/application.actions";
import { post } from "../../../utils/http";

export const authenticationFlows = [
    handle(LOGIN.INVOKE, handleLogin),
    handle(LOGOUT.INVOKE, handleLogout)

];

async function handleLogin({ form }, dispatch) {
    //debugger;
    dispatch({ type: LOGIN.REQUEST });
    //debugger;

    try {
        //debugger;
        // const response = await post('/api/authentication/login', form);

        const response = {
            isSuccess: true,
            error: null,
            value: {
                isLoginSuccessful: true,
                email: 'test@gmail.com',
                errorMessage: null,
            },
        };


        if (!response.value.isLoginSuccessful) {
            if (response.value.errorMessage === "TwoFactorAuthenticationCodeVerificationNeeded") {
                return;
            }

            dispatch({
                type: LOGIN.FAILURE,
                error: { messageKey: response.value.errorMessage },
            });
            return;
        }

        dispatch({ type: LOGIN.SUCCESS });
        redirectToUrl("/home/dashboard");
    } catch (error) {
        dispatch(ACTIVATE_USER.failure({ error }));
    }
}

 async function handleLogout(_, dispatch) {
    //debugger;
    dispatch(setApplicationReadyState(false));
    dispatch(LOGOUT.request());
    try{
        dispatch(LOGOUT.success());
        redirectToUrl("/login");
    }
    catch(error){
        dispatch(LOGOUT.failure({error}));
    }
}

