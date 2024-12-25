import React, { useState } from "react";
import "./Register.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { registerSchema } from "../../components/RegisterShema";
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const navigate = useNavigate();

  const submitForm = async (values, action) => {
    await axios.post("http://localhost:3000/users", values);
    toast("succes register")
    setTimeout(() => {
      action.resetForm();
      navigate('/login');
    }, 1000);
  };

  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      confirm: "",
      isLogin: false,
    },
    onSubmit: submitForm,
    validationSchema: registerSchema,
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
          id="name"
          label="Name"
          variant="outlined"
          onChange={handleChange}
          value={values.name}
          error={Boolean(errors.name && touched.name)}
          helperText={touched.name && errors.name}
        />
      </div>
      <div className="form">
        <TextField
          id="surname"
          label="Surname"
          variant="outlined"
          onChange={handleChange}
          value={values.surname}
          error={Boolean(errors.surname && touched.surname)}
          helperText={touched.surname && errors.surname}
        />
      </div>
      <div className="form">
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          onChange={handleChange}
          value={values.username}
          error={Boolean(errors.username && touched.username)}
          helperText={touched.username && errors.username}
        />
      </div>
      <div className="form">
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          onChange={handleChange}
          value={values.email}
          error={Boolean(errors.email && touched.email)}
          helperText={touched.email && errors.email}
        />
      </div>

      <div className="form">
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange}
            error={Boolean(errors.password && touched.password)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? 'hide the password' : 'display the password'}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {touched.password && errors.password && (
          <span className="errors">{errors.password}</span>
        )}
      </div>

      <div className="form">
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-confirm">Confirm Password</InputLabel>
          <FilledInput
            id="confirm"
            type={showConfirmPassword ? 'text' : 'password'}
            value={values.confirm}
            onChange={handleChange}
            error={Boolean(errors.confirm && touched.confirm)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={showConfirmPassword ? 'hide the password' : 'display the password'}
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {touched.confirm && errors.confirm && (
          <span className="errors">{errors.confirm}</span>
        )}
      </div>

      <Button className="btn" type="submit" variant="contained">Sign Up</Button>
    </form>
  );
};

export default Register;
