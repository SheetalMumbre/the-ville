import { useFormik } from "formik"

export const useForm = ({initialValues, onSubmit}) => {
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
    })

    return formik;
}