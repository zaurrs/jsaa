import { object, string, number, date } from 'yup';
import * as Yup from 'yup';
export const registerSchema = Yup.object({
    name: string().min(2, "Name must be at least 2 characters long").required("Name is required"),
    surname: string().min(4, "Surname must be at least 4 characters long").required("Surname is required"),
    username: string().required("Username is required"),
    email: string().email("enter valid email").required("email is required"),
    password: string()
        .min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol'),
    confirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required("Confirm password is required"),
});
