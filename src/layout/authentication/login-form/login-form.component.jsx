import { Grid, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useMemo } from "react";
import { LoginButton } from "./login-form.styles";

const LoginForm = () => {
    // debugger;

    const form = useMemo(() =>({
        email:'',
        password:''
    }), []);

    const handleSubmit = (values) => {
        // alert('Login successful');

        console.log('Form submitted with email value:', values.email);
        console.log('Password value:', values.password);
        window.alert(values.email + values.password);
        window.location.href = '/';
        // try{    
        // }
        // catch(error){
        //     alert('There is some Error');
        // }
    };
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