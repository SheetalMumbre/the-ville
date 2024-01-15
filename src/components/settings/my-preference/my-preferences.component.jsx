import { Grid } from "@material-ui/core";
import { FormProvider } from "../../common/form-layout";
import { FormSwitchField } from "../../common/forms/form-switch-field";
import styled from "@emotion/styled";
import { SubmitButton } from "../../common/forms/form-button";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../utils/form";
import { useCallback } from "react";
import { toggleTheme, updateMyPreferences } from "./logic/my-preferences.actions";

const MyPreferences = () => {
    const dispatch = useDispatch();
    const formValues = {
        hasDarkModeActive: false,
        hasNotificationsAboutNewsletters: false,
        hasNotificationsAboutShipmentUpdates: false
    };
    const isSaving = useSelector((state)=> state.application.theme) ;
    //debugger;

    const toggleDarkMode = useCallback(value => {
         dispatch(toggleTheme(value));
         console.log(value);
    },[dispatch]);

    const handleSubmit = useCallback(values => {
        // debugger;
        console.log("submitted values",values);
        dispatch(updateMyPreferences(values));
    }, [dispatch]);

    const form = useForm({
        initialValues: formValues,
        onSubmit: handleSubmit,
    });
    return(
        <div>
            <PageTitle>My Preference</PageTitle>
            <FormProvider form={form} >
                <Grid container spacing={2}>
                    <Grid item>
                        <FormSwitchField
                        name="hasDarkModeActive"
                        label="DarkMode"
                        onFieldChange={(value)=> toggleDarkMode(value)}/>
                    </Grid>
                    <PageSectionDivider />
                    <Grid item>
                        <FormSwitchField
                        name="hasNotificationsAboutNewsletters"
                        label="Newsletters"/>
                    </Grid>
                    <PageSectionDivider />
                    <Grid item>
                        <FormSwitchField
                        name="hasNotificationsAboutShipmentUpdates"
                        label="Shipment Updates"/>
                    </Grid>
                    <PageSectionDivider />
                </Grid>
                <Grid item>
                    <SubmitButton onClick={form.submitForm} fetching={isSaving}>Save</SubmitButton>
                </Grid>
            </FormProvider>
        </div>
    )
};
export default MyPreferences;


const PageSectionDivider = styled.div`
  width: 100%;
  height: 0.011em;
  background: #3cacac;
  margin: 7px 0;
`;

const PageTitle = styled.div`
  font-size: 25px;
  text-align: center;
  color: #616161;
  padding-bottom: 20px;
`;