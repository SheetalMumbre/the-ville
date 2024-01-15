import React, { useCallback, useMemo } from 'react';
import { Formik, Form } from 'formik';
import * as Validator from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, InputAdornment } from '@material-ui/core';
import { FormTextField } from '../../../components/common/forms/form-text-field';
import { FormPasswordField } from '../../../components/common/forms/form-password-field';
import { FormError } from '../../../components/common/forms/form-error';
import { LoginButton, ForgotPasswordLink, LoginIconStyle, Header, } from '../login-form/login-form.styles';
import { resource } from '../../../components/string-resources/string-resources';
import { authenticationResources } from '../logic/authentication.const';
import { validateEmail } from '../../../components/common/forms/email-validation';
import { login, openResetPassword } from '../logic/authentication.action';
import { Person, Lock } from '@material-ui/icons';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.authentication.loginFetching);
  const error = useSelector(state => state.authentication.loginError);

  const form = useMemo(() => ({
    email: '',
    password: ''
  }), []);

  const formSchema = useMemo(() => Validator.object({
    email: Validator.string().test(validateEmail).required(),
    password: Validator.string().min(8).required()
  }), []);

  const handleSubmit = useCallback(values => {
    dispatch(login(values));
  }, [dispatch]);

  const handleGoToResetPassword = useCallback(() => {
    dispatch(openResetPassword());
  }, [dispatch]);

  return (
    <div>
      <Header>{resource(authenticationResources.login.title)}</Header>
      <Formik
        initialValues={form}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
      >
        <Form xs={12}>
          <FormError error={error} />

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormTextField
                name='email'
                placeholder={resource(authenticationResources.login.email)}
                startAdornment={
                  <InputAdornment position='end'>
                    <Person style={LoginIconStyle} />
                  </InputAdornment>
                }
              />
            </Grid>

            <Grid item xs={12}>
              <FormPasswordField
                name='password'
                placeholder={resource(authenticationResources.login.password)}
                startAdornment={
                  <InputAdornment position='end'>
                    <Lock style={LoginIconStyle} />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <LoginButton type='submit' fetching={isFetching} fullWidth>
                {resource(authenticationResources.login.submit)}
              </LoginButton>
            </Grid>
            <Grid item xs={12}>
              <ForgotPasswordLink fullWidth onClick={handleGoToResetPassword}>
                {resource(authenticationResources.login.forgottenPassword)}
              </ForgotPasswordLink>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
