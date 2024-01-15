import {
    ACTIVATE_USER,
    CHECK_ACTIVATION_LINK_IS_EXPIRED,
    LOGIN,
    LOGOUT,
    OPEN_TWO_FACTOR_AUTHENTICATION_CODE_VERIFICATION,
    OPEN_LOGIN,
    OPEN_RESET_PASSWORD,
    SEND_RESET_PASSWORD_LINK,
    SET_NEW_PASSWORD,
    VERIFY_TWO_FACTOR_AUTHENTICATON_CODE,
    RESEND_TWO_FACTOR_AUTHENTICATION_CODE,
    SET_APPLICATION_READY_STATE
} from "./authentication.const";
import { push } from "connected-react-router";

export const setApplicationReadyState = (isReady) => ({type: SET_APPLICATION_READY_STATE, isReady});
export const login = (form) => LOGIN.invoke({ form });

export const logout = () => LOGOUT.invoke();

export const goToLogin = () => push("/login");
export const goToCodeVerification = (email) => OPEN_TWO_FACTOR_AUTHENTICATION_CODE_VERIFICATION.invoke({ email });

export const activateUser = (form) => ACTIVATE_USER.invoke({ form });

export const setNewPassword = (form) => SET_NEW_PASSWORD.invoke({ form });

export const sendResetPasswordLink = (form) => SEND_RESET_PASSWORD_LINK.invoke({ form });

export const openResetPassword = () => ({ type: OPEN_RESET_PASSWORD });

export const openLogin = () => ({ type: OPEN_LOGIN });

export const checkActivationLinkIsExpired = (token) => CHECK_ACTIVATION_LINK_IS_EXPIRED.invoke({ token });

export const verifyCode = (form) => VERIFY_TWO_FACTOR_AUTHENTICATON_CODE.invoke({ form });

export const resendVerificationCode = (form) => RESEND_TWO_FACTOR_AUTHENTICATION_CODE.invoke({ form });