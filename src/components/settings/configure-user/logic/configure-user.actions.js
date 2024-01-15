import { GET_USERS, SAVE_CONFIGURE_USER } from "./configure-user.const"

export const saveConfigureUser = (form) => SAVE_CONFIGURE_USER.invoke({form});
export const getUsers = (pageNumber, filter) => GET_USERS.invoke({pageNumber, filter})
debugger;