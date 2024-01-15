import {
     GET_USER_COMPANY_DETAILS, UPDATE_USER_COMPANY_DETAILS 
    } from "./company-details.const"

export const companyDetailsState = {
    companyDetailsData : null,
    isFetching: false,
    isSaving: false,
    companyDetailsError: null
}

export const companyDetailsReducer = (state = companyDetailsState, action) => {//debugger;
    switch (action.type) {

        case GET_USER_COMPANY_DETAILS.INVOKE:
            return{...state, isFetching: true, companyDetailsData: null, isSaving: false};

        case GET_USER_COMPANY_DETAILS.SUCCESS:
            return{...state, isFetching: false, companyDetailsData: action.data};

        case GET_USER_COMPANY_DETAILS.FAILURE:
            return{...state, isFetching:false, companyDetailsError: action.error};

        case UPDATE_USER_COMPANY_DETAILS.INVOKE:
            return{...state, isSaving: true};
        
        case UPDATE_USER_COMPANY_DETAILS.SUCCESS:
            return{...state, isSaving: false,companyDetailsData: action.data };

        case UPDATE_USER_COMPANY_DETAILS.FAILURE:
            return{...state, isSaving: false, companyDetailsError: action.error};

        default:
            return state;
    }
};