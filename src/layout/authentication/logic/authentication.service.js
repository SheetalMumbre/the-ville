import { readFromLocalStorage, removeFromLocalStorage, saveInLocalStorage } from "../../../utils/storage";

const localStorageKeys = {
    redirectUrl: "redirect-url"
}

export const rootUrl = "/";

export const loginUrl = "/login";

export const redirectToLogin = () => redirectTo(loginUrl);

export const redirectToRoot = () => redirectTo("/");

export const redirectTo = (path) => window.location.href = path;

export const getRedirectUrl = () => readFromLocalStorage(localStorageKeys.redirectUrl);

export const setRedirectUrl = (url) => saveInLocalStorage(localStorageKeys.redirectUrl, url);

export const removeRedirectUrl = (url) => removeFromLocalStorage(localStorageKeys.redirectUrl);
