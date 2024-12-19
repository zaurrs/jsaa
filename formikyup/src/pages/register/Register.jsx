import React from "react";
import "./Register.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { registerSchema } from "../../components/RegisterShema";
const Register = () => {
  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      confirm: "",
      isLogin: false,
    },

    validationSchema: registerSchema,
    onSubmit: async (values) => {
      await axios.post("http://localhost:3000/users", values);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name..."
          onChange={handleChange}
          value={values.name}
        />
        {errors && <span className="errors">{errors.name}</span>}
      </div>
      <div className="form">
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          id="surname"
          placeholder="Surname..."
          onChange={handleChange}
          value={values.surname}
        />
        {errors && <span className="errors">{errors.surname}</span>}
      </div>
      <div className="form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username..."
          onChange={handleChange}
          value={values.username}
        />
        {errors && <span className="errors">{errors.username}</span>}
      </div>
      <div className="form">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email..."
          onChange={handleChange}
          value={values.email}
        />
        {errors && <span className="errors">{errors.email}</span>}
      </div>

      <div className="form">
        <label htmlFor="password">Password</label>
        <input
          placeholder="Password..."
          type="password"
          name=""
          id="password"
          onChange={handleChange}
          value={values.password}
        />
        {errors && <span className="errors">{errors.password}</span>}
      </div>
      <div className="form">
        <label htmlFor="confirm">Confirm Password</label>
        <input
          placeholder="Confirm password..."
          type="password"
          id="confirm"
          onChange={handleChange}
          value={values.confirm}
        />
        {errors && <span className="errors">{errors.confirm}</span>}
      </div>

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Register;
