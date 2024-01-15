import React, { useCallback } from 'react'
import { FormProvider } from '../../common/form-layout'
import { useForm } from '../../../utils/form';
import { Grid } from '@material-ui/core';
import { FormTextField } from '../../common/forms/form-text-field';
import { SubmitButton } from '../../common/forms/form-button';
import styled from '@emotion/styled';
import ContactPersons from '../../contact-persons/contact-persons.compoment';
import { useDispatch } from 'react-redux';
import { updateUserCompanyDetails } from './logic/company-details.actions';

const CompanyDetailsForm = () => {
    const dispatch = useDispatch();

    const newContact = [{id:0, name:"", phoneNumber:"", email:""}];

    const assignContactList = (contacts) => {
        if(contacts.length > 0){
            const list = [];
            for(let i in contacts){
                list.push({
                    id: contacts[i].id, 
                    name: contacts[i].name,
                    phoneNumber: contacts[i].phoneNumber,
                    email: contacts[i].email,
                });
            }
            return list;
        }
        return newContact;
    }

 
        const formValues = {
            customerId: 0,
            companyname: "",
            orgnumber: "",
            address:"",
            zipcode:"",
            contactpersons:[],
        };
       
    const handleSubmit = useCallback(values => {
        //console.log(values);
        dispatch(updateUserCompanyDetails(values));
    }, [dispatch])

    const form = useForm({
        initialValues: formValues,
        onSubmit: handleSubmit,
    });

  return (
    <div>
        <h2>Company Details</h2>
        <FormProvider form={form}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <FormTextField xs={12} name="companyname" label="Company Name"/>
                </Grid>
                <Grid item xs={5}>
                    <FormTextField xs={12} name="orgnumber" label="Organization number / VAT number"/>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    Country
                </Grid>
                <Grid item xs={3}>
                    <FormTextField xs={12} name="address" label="Address"/>
                </Grid>
                <Grid item xs={3}>
                    <FormTextField xs={12} name="zipcode" label="Zip Code"/>
                </Grid>
            </Grid>
            
            <PageSectionDivider/>

            <Grid container spacing={1} className='mt-2 mb-2'>
                <Grid item xs={2}>
                    <b><p>Contact persons</p></b>
                </Grid>
                <Grid item xs={12}>
                    {/* <ContactPersons name="contactpersons" contactpersons={form.values.contactpersons}/> */}
                </Grid>
            </Grid>

            <PageSectionDivider/>

            <SubmitButton onClick={form.submitForm}>Save</SubmitButton>
        </FormProvider>
    </div>
  )
};
export default CompanyDetailsForm;


const PageSectionDivider = styled.div`
  width: 100%;
  height: 0.011em;
  background: #3cacac;
  margin: 7px 0;
`;