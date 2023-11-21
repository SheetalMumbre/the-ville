import { handle } from "../../../store/redux-flow";
import { LOGIN } from "./authentication.const";

export const authenticationFlow = [
    handle(LOGIN.invoke, handleLogin)
];

async function handleLogin({ form }, dispatch){
    debugger;
    dispatch({type:LOGIN.REQUEST});
}