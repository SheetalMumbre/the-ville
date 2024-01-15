import { Grid } from "@material-ui/core";
import { FieldArray } from "formik";
import { FormTextField } from "../common/forms/form-text-field";

const ContactPersons = (props) => {
    const newContact = {id:0 , name:"", phoneNumber:"" , email:""};
    return(
        <div>aaaaaaaaaaaaaaaaaaaaaaa
            <FieldArray name={props.name} 
                render={(arrayHelpers) => {
                debugger
                return( console.log('hi'+ props.contactpersons),
                    <div>sssssssss
                        {props.contactpersons.map((contactperson,i) => (
                            <Grid container key={i} spacing={2}>
                                <Grid item xs={2}>aaaaa
                                    <FormTextField xs={12} label="Contact Person"/>
                                </Grid>
                                <Grid item xs={2}>
                                    <FormTextField xs={12} label="Phone Number"/>
                                </Grid>
                                <Grid item xs={2}>
                                    <FormTextField xs={12} label="Email Address"/>
                                </Grid>
                            </Grid>
                        ))}
                    </div>
                )
            }}/>
        </div>
    )
};

export default ContactPersons;