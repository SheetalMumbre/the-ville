import { 
    GET_USER_COMPANY_DETAILS, UPDATE_USER_COMPANY_DETAILS 
} from "./company-details.const";

export const updateUserCompanyDetails = (form) =>  UPDATE_USER_COMPANY_DETAILS.invoke({form});
export const getUserCompanyDetails = () => GET_USER_COMPANY_DETAILS.invoke();