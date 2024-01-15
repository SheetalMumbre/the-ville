import {
  CLOSE_CONFIRMATION_DIALOG,
  CLOSE_WHATS_NEW_DIALOG, confirmationDialogButtons,
  GET_COUNTRIES,
  GET_CURRENCIES,
  GET_SERVICE_MESSAGE, GET_USER_NOTIFICATION_SETTINGS,
  HIDE_SERVICE_MESSAGE,
  INITIALIZE_APPLICATION,
  OPEN_MODULE,
  OPEN_WHATS_NEW_DIALOG, SAVE_USER_NOTIFICATION_SETTINGS,
  SET_APPLICATION_READY_STATE,
  SET_FOCUS_STATE,
  SET_PAGE_TITLE_ADDITIONAL_INFO,
  SHOW_CONFIRMATION_DIALOG,
  TOGGLE_SIDE_MENU_COLLAPSED,
  TOGGLE_THEME, TOGGLE_USER_SETTINGS_DIALOG
} from "./application.const";

export const initializeApplication = (appData) => INITIALIZE_APPLICATION.invoke({ appData });
export const initializeApplicationFailure = (error) => INITIALIZE_APPLICATION.failure({ error });
export const setApplicationReadyState = (isReady) => ({ type: SET_APPLICATION_READY_STATE, isReady });
export const openModule = (params) => OPEN_MODULE.invoke({ params });
export const getCountries = () => GET_COUNTRIES.invoke();
export const getCurrencies = () => GET_CURRENCIES.invoke({});
export const toggleTheme = () => TOGGLE_THEME.invoke();
export const toggleSideMenuCollapsed = (headerKey) => TOGGLE_SIDE_MENU_COLLAPSED.invoke({ headerKey });
export const showConfirmationDialog = (header, message, callback, closeCallback = null, denyCallback = null, buttons = confirmationDialogButtons.OkCancel, okButtonLabelKey = null) => SHOW_CONFIRMATION_DIALOG.invoke({ header, message, callback, closeCallback, denyCallback, buttons, okButtonLabelKey });
export const closeConfirmationDialog = () => CLOSE_CONFIRMATION_DIALOG.invoke();
export const setFocusState = (hasFocus) => SET_FOCUS_STATE.invoke({ hasFocus });
export const hideServiceMessage = (version) => HIDE_SERVICE_MESSAGE.invoke({ version });
export const getServiceMessage = () => GET_SERVICE_MESSAGE.invoke();
export const openWhatsNewDialog = () => OPEN_WHATS_NEW_DIALOG.invoke();
export const closeWhatsNewDialog = () => CLOSE_WHATS_NEW_DIALOG.invoke();
export const setPageTitleAdditionalInfo = (info) => SET_PAGE_TITLE_ADDITIONAL_INFO.invoke({ info });
export const toggleUserSettingsDialog = (visibility) => TOGGLE_USER_SETTINGS_DIALOG.invoke({ visibility });
export const getUserNotificationSettings = () => GET_USER_NOTIFICATION_SETTINGS.invoke();
export const saveUserNotificationSettings = (form) => SAVE_USER_NOTIFICATION_SETTINGS.invoke(form);
