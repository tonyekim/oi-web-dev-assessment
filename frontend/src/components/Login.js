import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginValidation from "./LoginValidation";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = LoginValidation(values);
    setError(errors);
  };

  const handleInput = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100 ">
      <div className="bg-white p-3 rounded w-25">
        <div className="d-flex justify-content-center align-items-center">
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {error.email && <span className="text-danger">{error.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={handleInput}
              name="password"
              className="form-control rounded-0"
            />

<span>
              {error.password && (
                <span className="text-danger">{error.password}</span>
              )}
            </span>
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            <strong>Login</strong>
          </button>
          <p>You are to agree to our terms and conditions</p>
          <NavLink
            to="/signup"
            className="btn btn-default border w-100 rounded-0"
          >
            Create Account
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;
