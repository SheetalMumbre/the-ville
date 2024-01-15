import { FormikProvider } from "formik"

export const FormProvider = ({form, children}) => {
    return(
        <FormikProvider value={form}>
            {children}
        </FormikProvider>
    );
};