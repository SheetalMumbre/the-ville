import { handle } from "../../../store/redux-flow";
import { redirectToUrl } from "../../../utils/location";
import { ACTIVATE_USER, LOGIN } from "./authentication.const";

export const authenticationFlow = [
    handle(LOGIN.invoke, handleLogin)
];
// debugger;
// async function handleLogin({ form }, dispatch){
//     debugger;
//     console.log('here');
//     dispatch({type:LOGIN.REQUEST});
// }




async function handleLogin({ form }, dispatch) {
    dispatch({ type: LOGIN.REQUEST });
debugger;
    try {

// const response = await post('/api/authentication/login', form);

        // Simulating a successful login
        const response = {
            isSuccess: true,
            error: null,
            value: {
                isLoginSuccessful: true,
                email: 'replace your-email',
                errorMessage: null,
            },
        };

        // Simulating an unsuccessful login
        // const response = {
        //     isSuccess: true,
        //     error: {
        //         message: "Error message",
        //         stackTrace: "Stack trace",
        //         metadata: "Metadata",
        //         operationId: "Operation ID",
        //     },
        //     value: {
        //         isLoginSuccessful: false,
        //         email: form.email,
        //         errorMessage: "Login failed",
        //     },
        // };

        if (!response.value.isLoginSuccessful) {
            if (response.value.errorMessage === "TwoFactorAuthenticationCodeVerificationNeeded") {
                // Dispatch action to go to code verification
                // dispatch(goToCodeVerification(form.email));
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