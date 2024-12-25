import { object, string, number, date } from 'yup';
import * as Yup from 'yup';
export const loginSchema = Yup.object({
    username2: string().required("Username is required"),
    password2: string()
        .min(8, 'Password must be 8 characters long')
        
   
});
