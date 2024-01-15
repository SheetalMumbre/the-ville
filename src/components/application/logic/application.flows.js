import { handle, handleLatest } from "../../../store/redux-flow";
import { applicationPlaceholders, GET_COUNTRIES, GET_CURRENCIES, GET_SERVICE_MESSAGE, GET_USER_NOTIFICATION_SETTINGS, HIDE_SERVICE_MESSAGE, INITIALIZE_APPLICATION, OPEN_MODULE, OPEN_WHATS_NEW_DIALOG, SAVE_USER_NOTIFICATION_SETTINGS, TOGGLE_SIDE_MENU_COLLAPSED, TOGGLE_THEME } from "./application.const";
import { get, post, setAppVersionHeader } from "../../../utils/http";
//import { get, post } from "../../../utils/api-client";
import { updateResources } from "../../string-resources/string-resources";
import { getBreadcrumb, getMenu } from "../../../utils/site-map.service";
import { generateSiteMap, siteMap } from "../../../site-map";
import { removeFromLocalStorage, saveInLocalStorage } from "../../../utils/storage";

export const applicationFlows = [
    handle(INITIALIZE_APPLICATION.INVOKE, handleInitializeApplication)
];

async function handleInitializeApplication({ appData }, dispatch, state) {
    try {
        await initializeStringResources();
        debugger;
        // if (appData?.currentUser?.isAuthenticated) {
        //     await handleGetCurrencies(null, dispatch, state);
        // }
        setAppVersionHeader(appData.version);
        generateSiteMap();
        dispatch({ type: INITIALIZE_APPLICATION.SUCCESS, appData })
    } catch (error) {
        console.error('handleInitializeApplication' + error);
        dispatch({ type: INITIALIZE_APPLICATION.FAILURE, error: error.message });
    }
}

async function initializeStringResources() {
    const response = await get(`/api/stringResources/getAll`);
    updateResources(response.stringResources);
}


