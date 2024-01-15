import React, { useCallback } from 'react'
import { FormProvider } from "../../common/form-layout";
import { Grid, MenuItem } from "@material-ui/core";
import { FormTextField } from "../../common/forms/form-text-field";
import { useForm } from '../../../utils/form';
import { SubmitButton } from '../../common/forms/form-button';
import { getUsers, saveConfigureUser } from './logic/configure-user.actions';
import { useDispatch } from 'react-redux';
import { FormDropdownField } from '../../common/forms/form-dropdown-field';
import { useNavigate } from 'react-router-dom';

const ConfigureUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const formValues = {
    username: "",
    emailId:"",
    phoneNumber:"",
    role:"",
    customer:""
  };

  const handleSubmit = useCallback((values) => { debugger;
    console.log(values);
    dispatch(saveConfigureUser(values));
    navigate("/users-list");

    dispatch (getUsers(values));
  }, [dispatch]);

  const form = useForm({
    initialValues: formValues,
    onSubmit: handleSubmit,
  });

  const roleOptions = ['Admin', 'User'];
  const customerOptions = ['ABC', 'XYZ'];

  return (
    <div>
      <h2>Configure User</h2>
      <FormProvider form={form}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormTextField xs={12} name="username" label="User Name" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormTextField xs={12} name="emailId" label="Email Id"/>
          </Grid>
          <Grid item xs={6}>
            <FormTextField xs={12} name="phoneNumber" label="Phone Number"/>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormDropdownField xs={12} name="role" label="Role" options={roleOptions.map((role)=>({key:role,label:role}))}  />
          </Grid>
          <Grid item xs={6}>
            <FormDropdownField xs={12} name="customer" label="Customer" 
            options={customerOptions.map((cust)=>({key:cust,label:cust}))}/>
          </Grid>
        </Grid>
        <SubmitButton onClick={form.submitForm}>Save</SubmitButton>
      </FormProvider>
    </div>
  );
};

export default ConfigureUser;