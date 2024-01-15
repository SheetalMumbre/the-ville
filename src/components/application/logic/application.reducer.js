import { setProperty } from "../../../utils/immutable";
import { readFromLocalStorage } from "../../../utils/storage";
import { CLOSE_CONFIRMATION_DIALOG, CLOSE_WHATS_NEW_DIALOG, GET_COUNTRIES, GET_CURRENCIES, GET_SERVICE_MESSAGE, GET_USER_NOTIFICATION_SETTINGS, HIDE_SERVICE_MESSAGE, INITIALIZE_APPLICATION, OPEN_MODULE, OPEN_WHATS_NEW_DIALOG, ROUTE_CHANGED, SET_APPLICATION_READY_STATE, SET_FOCUS_STATE, SET_PAGE_TITLE_ADDITIONAL_INFO, SHOW_CONFIRMATION_DIALOG, TOGGLE_SIDE_MENU_COLLAPSED, TOGGLE_THEME, TOGGLE_USER_SETTINGS_DIALOG, } from "./application.const";

export const applicationState = {
    isAuthenticated: false,
    user: null,
    isReady: false,
    isError: false,
    route: null,
    siteMap: null,
    version: null,
    isProduction: false,
    isDevelopment: false,
    moduleFetching: false,
    userManualFetching: null,
    theme: readFromLocalStorage("theme"),
    collapsedSideMenus: readFromLocalStorage("sideMenu.collapsedState"),
    lastHiddenServiceMessageVersion: readFromLocalStorage("serviceMessage.lastHiddenVersion"),
    common: {
        countries: null,
        currencies: null,
        currencyRates: {},
    },
    confirmationDialog: {
        open: false,
        header: null,
        message: null,
        callback: null,
        denyCallback: null,
    },
    configuration: {
        stockPackageConstants: {}
    },
    hasFocus: true,
    whatsNewDialogOpened: false,
    whatsNewDialogFetching: false,
    newsEntries: null,
    additionalPageTitleInformation: null,
    userSettingsDialogOpen: false,
    userSettings: {
        isFetchingNotificationSettings: false,
        notifications: null,
    },
};

export const applicationReducer = (state = applicationState, action) => {
    switch (action.type) {
        case INITIALIZE_APPLICATION.SUCCESS:
            debugger;

            return {
                ...state,
                isAuthenticated: action.appData.currentUser.isAuthenticated,
                user: action.appData.currentUser.user,
                version: action.appData.version,
                isProduction: action.appData.isProduction,
                isDevelopment: action.appData.isDevelopment,
                isReady: true,
                isError: false,
                accessRules: action.appData.accessRules,
                configuration: action.appData.configuration,
                serviceMessage: action.appData.serviceMessage
            }

        case INITIALIZE_APPLICATION.FAILURE:
            return {
                ...state,
                isReady: false,
                isError: true
            }

        case SET_APPLICATION_READY_STATE:
            return { ...state, isReady: action.isReady }

        case ROUTE_CHANGED:
            return { ...state, route: { url: action.url, path: action.path, params: action.params } };

        case OPEN_MODULE.REQUEST:
            return { ...state, moduleFetching: true, additionalPageTitleInformation: null }

        case OPEN_MODULE.SUCCESS:
            return {
                ...state,
                moduleFetching: false,
                siteMap: {
                    path: action.path,
                    parameters: action.parameters,
                    breadcrumb: action.breadcrumb,
                    sideMenu: action.sideMenu,
                    tabMenu: action.tabMenu,
                    title: action.title
                }
            }

        case OPEN_MODULE.FAILURE:
            return { ...state, moduleFetching: false }

        case SET_PAGE_TITLE_ADDITIONAL_INFO.INVOKE:
            return { ...state, additionalPageTitleInformation: action.info }

        case GET_COUNTRIES.SUCCESS:
            return { ...state, common: { ...state.common, countries: action.countries } }

        case GET_CURRENCIES.SUCCESS:
            return { ...state, common: { ...state.common, currencies: action.currencies } }

        case TOGGLE_THEME.SUCCESS:
            return { ...state, theme: action.theme }

        case TOGGLE_SIDE_MENU_COLLAPSED.SUCCESS:
            return { ...state, collapsedSideMenus: setProperty(state.collapsedSideMenus, action.headerKey, action.isCollapsed) }

        case SHOW_CONFIRMATION_DIALOG.INVOKE:
            return {
                ...state,
                confirmationDialog: {
                    open: true,
                    buttons: action.buttons,
                    header: action.header,
                    message: action.message,
                    callback: action.callback,
                    okButtonLabelKey: action.okButtonLabelKey,
                    closeCallback: action.closeCallback,
                    denyCallback: action.denyCallback
                }
            }

        case CLOSE_CONFIRMATION_DIALOG.INVOKE:
            return { ...state, confirmationDialog: { ...state.confirmationDialog, open: false } }

        case SET_FOCUS_STATE.INVOKE:
            return { ...state, hasFocus: action.hasFocus }

        case HIDE_SERVICE_MESSAGE.SUCCESS:
            return { ...state, lastHiddenServiceMessageVersion: action.lastHiddenVersion }

        case GET_SERVICE_MESSAGE.SUCCESS:
            return { ...state, serviceMessage: action.data }

        case OPEN_WHATS_NEW_DIALOG.INVOKE:
            return { ...state, whatsNewDialogOpened: true, newsEntries: null }

        case OPEN_WHATS_NEW_DIALOG.REQUEST:
            return { ...state, whatsNewDialogFetching: true }

        case OPEN_WHATS_NEW_DIALOG.SUCCESS:
            return { ...state, whatsNewDialogFetching: false, newsEntries: action.data, user: { ...state.user, hasUnreadNews: false } }

        case OPEN_WHATS_NEW_DIALOG.FAILURE:
            return { ...state, whatsNewDialogFetching: false }

        case CLOSE_WHATS_NEW_DIALOG.INVOKE:
            return { ...state, whatsNewDialogOpened: false }

        case TOGGLE_USER_SETTINGS_DIALOG.INVOKE:
            return { ...state, userSettingsDialogOpen: action.visibility }

        case GET_USER_NOTIFICATION_SETTINGS.REQUEST:
            return { ...state, userSettings: { ...state.userSettings, isFetchingNotificationSettings: true, notifications: null } }

        case GET_USER_NOTIFICATION_SETTINGS.SUCCESS:
            return { ...state, userSettings: { ...state.userSettings, isFetchingNotificationSettings: false, notifications: action.data } }

        case GET_USER_NOTIFICATION_SETTINGS.FAILURE:
            return { ...state, userSettings: { ...state.userSettings, isFetchingNotificationSettings: false } }

        default:
            return state;
    }
}
