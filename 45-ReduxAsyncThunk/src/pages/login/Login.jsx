import React, { useState } from 'react';
import "./Login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { loginSchema } from "../../components/LoginShema";
import { useNavigate } from 'react-router-dom';
import { TextField, Button, IconButton, InputAdornment   } from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Login = () => {
  

  const navigate = useNavigate();
  const submitForm = async (values, action) => {
    const res = await axios.get("http://localhost:3000/users");
    console.log(res.data);

    const user = res.data.find((user) => user.username === values.username2 && user.password === values.password2 );
    if(user){
      const updateUser = {
        ...user,
        isLogin:true,
      }
      await axios.put(`http://localhost:3000/users/${user.id}`, updateUser)

      toast.success("Successful login!");
      setTimeout(() => {
        action.resetForm()
        navigate('/home')
      }, 1000)
    } else{
      toast.error("Invalid credentials, please try again");
      
    }
  }


  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      username2: "",
      password2: "",
    },
    onSubmit: submitForm,
    validationSchema: loginSchema,
  });
   const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
    const handleClickShowPassword = () => setShowPassword((prev) => !prev);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);
    
    const handleMouseDownPassword = (event) => event.preventDefault();
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <TextField
          id="username2"
          label="Username"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          value={values.username2}
          error={Boolean(touched.username2 && errors.username2)}
          helperText={touched.username2 && errors.username2}
        />
      </div>

      <div className="form">
        <TextField
          id="password2"
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          onChange={handleChange}
          value={values.password2}
          error={Boolean(touched.password2 && errors.password2)}
          helperText={touched.password2 && errors.password2}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? "hide the password" : "display the password"}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>

      <Button className="btn" type="submit" variant="contained">Sign In</Button>
      <ToastContainer />
    </form>
  );
};

export default Login;
