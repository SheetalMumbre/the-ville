import { Grid, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useCallback, useMemo } from "react";
import { LoginButton } from "./login-form.styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../logic/authentication.action";

const LoginForm = () => {
    const dispatch = useDispatch();

    // const [values, setValues]= useState({
        
    // }); 

    const form = useMemo(() =>({
        email:'',
        password:''
    }), []);

    const handleSubmit = useCallback(values => {
        dispatch(login(values));
        // alert('Login successful');

        // console.log('Form submitted with email value:', values.email);
        // console.log('Password value:', values.password);
        // window.alert(values.email + values.password);
        // window.location.href = '/';
        
    }, [dispatch]);
    return(
        <div>
            <Formik initialValues={form} onSubmit={handleSubmit}>
            {() => (
                <Form xs={12}>
                   <Grid item xs={12}>
                        <Field name="email" type="text" label='Email' as={TextField} style={fieldStyle}
                        // onChange={(e) => console.log('Email Value:', e.target.value)}
                        />
                   </Grid>
                   <Grid item xs={12}>
                        <Field type="password" label="password" name="password" as={TextField}/>
                   </Grid>
                   <Grid item xs={12}>
                        <LoginButton type="submit" className="primary">Submit</LoginButton>
                   </Grid>
                </Form>
                 )}
            </Formik>
        </div>
    )
};

export default LoginForm;

const fieldStyle = {
    marginBottom: '10px', // Add spacing at the bottom of each field
};