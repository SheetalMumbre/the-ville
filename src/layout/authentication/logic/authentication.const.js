import { action } from "../../../utils/action";

export const SET_APPLICATION_READY_STATE = "SET_APPLICATION_READY_STATE";
export const LOGIN = action("LOGIN");
export const LOGOUT = action("LOGOUT");
export const ACTIVATE_USER = action("ACTIVATE_USER");
export const SET_NEW_PASSWORD = action("SET_NEW_PASSWORD");
export const SEND_RESET_PASSWORD_LINK = action("SEND_RESET_PASSWORD_LINK");
export const OPEN_RESET_PASSWORD = "OPEN_RESET_PASSWORD";
export const OPEN_LOGIN = "OPEN_LOGIN";
export const CHECK_ACTIVATION_LINK_IS_EXPIRED = action("CHECK_ACTIVATION_LINK_IS_EXPIRED");
export const OPEN_TWO_FACTOR_AUTHENTICATION_CODE_VERIFICATION = action("OPEN_TWO_FACTOR_AUTHENTICATION_CODE_VERIFICATION");
export const VERIFY_TWO_FACTOR_AUTHENTICATON_CODE = action("VERIFY_TWO_FACTOR_AUTHENTICATON_CODE");
export const RESEND_TWO_FACTOR_AUTHENTICATION_CODE = action("RESEND_TWO_FACTOR_AUTHENTICATION_CODE");

export const TwoFactorAuthenticationCodeVerificationNeeded = 'authentication.messages.twoFactorAuthenticationCodeVerificationNeeded';

export const Role = {
    Administrator: 'Administrator',
    Operations: 'Operations',
}

export const authenticationPanel = {
    login: 'login',
    resetPassword: 'resetPassword',
    codeVerification: 'codeVerification'
};

export const authenticationResources = {
  login: {
        title: 'authentication.login.title',
        email: 'authentication.login.email',
        password: 'authentication.login.password',
        submit: 'authentication.login.submit',
        forgottenPassword: 'authentication.login.forgottenPassword',
        dontHaveUser: 'authentication.login.dontHaveUser',
  },
    externalLogin: {
        loginWithMicrosoft: 'authentication.externalLogin.loginWithMicrosoft',
        externallyValidatedUserIsNotFound: 'authentication.externalLogin.externallyValidatedUserIsNotFound'
    },
    resetPassword: {
        title: 'authentication.resetPassword.title',
        email: 'authentication.resetPassword.email',
        submit: 'authentication.resetPassword.submit',
        goToLogin: 'authentication.resetPassword.goToLogin',
        successMessage: 'authentication.resetPassword.successMessage'
    },
    activateUser: {
        title: 'authentication.activateUser.title',
        password: 'authentication.activateUser.password',
        submit: 'authentication.activateUser.submit',
        successMessage: 'authentication.activateUser.successMessage',
        activationLinkExpired: 'authentication.activateUser.activationLinkExpired'
    },
    twoFactorAuthenticationCodeVerification: {
        title: 'authentication.twoFactorAuthenticationCodeVerification.title',
        subtitle: 'authentication.twoFactorAuthenticationCodeVerification.subtitle',
        code: 'authentication.twoFactorAuthenticationCodeVerification.code',
        submit: 'authentication.twoFactorAuthenticationCodeVerification.submit',
        goToLogin: 'authentication.twoFactorAuthenticationCodeVerification.goToLogin',
        resendCode: 'authentication.twoFactorAuthenticationCodeVerification.resendCode',
    },
    messages: {
        verificationCodeSent: 'authentication.messages.verificationCodeSent'
    }
}
