import React from 'react'
import "./Login.css"
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { loginSchema } from "../../components/LoginShema";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
  
  const submitForm = async (values, action) => {
    const res = await axios.get("http://localhost:3000/users");
res.data.map(async (user)=>{
  console.log(user);
  
  const updateUser = {
    ...user,
    isLogin:true,
  }
  await axios.put(`http://localhost:3000/users/${user.id}`, updateUser)
})
   
    setTimeout(() => {
      action.resetForm()
      navigate('/home')
    }, 1000)

  


  }
  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      username2: "",
      password2: "",
      // isLogin: false,
    },

    onSubmit: submitForm,
    validationSchema: loginSchema,


  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <label htmlFor="username2">Username</label>
        <input
          type="text"
          id="username2"
          placeholder="Username..."
          onChange={handleChange}
          value={values.username2}
        />
        {errors && <span className="errors">{errors.username2}</span>}
      </div>

      <div className="form">
        <label htmlFor="password2">Password</label>
        <input
          placeholder="Password..."
          type="password"
          name=""
          id="password2"
          onChange={handleChange}
          value={values.password2}
        />
        {errors && <span className="errors">{errors.password2}</span>}
      </div>


      <button className="btn" type="submit">
        Sign In
      </button>
    </form>
  );
}

export default Login