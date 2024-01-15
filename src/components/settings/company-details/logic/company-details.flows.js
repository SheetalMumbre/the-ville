import { handle } from "../../../../store/redux-flow";
import { GET_USER_COMPANY_DETAILS, UPDATE_USER_COMPANY_DETAILS } from "./company-details.const";

export const companyDetailsFlows = [
    handle(GET_USER_COMPANY_DETAILS.INVOKE, handleGetUserCompanyDetails),
    handle(UPDATE_USER_COMPANY_DETAILS.INVOKE, handleUpdateUserCompanyDetails)
];

async function handleGetUserCompanyDetails(_, dispatch, state){
//debugger;
    dispatch(GET_USER_COMPANY_DETAILS.request({}))

    try{
        const response = {} 
        dispatch(GET_USER_COMPANY_DETAILS.success({data:response}));
    }catch(error){
        dispatch(GET_USER_COMPANY_DETAILS.failure({error}));
    }
}

async function handleUpdateUserCompanyDetails({form}, dispatch){
//debugger;
    dispatch(UPDATE_USER_COMPANY_DETAILS.request({}))

    try{//debugger;
        dispatch(UPDATE_USER_COMPANY_DETAILS.success({data:form}));

    }catch(error){
        dispatch(UPDATE_USER_COMPANY_DETAILS.failure({error}));
    }
}