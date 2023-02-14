import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login container">
      <div className="login__wrapper ">
        <div className="login__card">
          <h5 className="login__item">Sign In</h5>
          <div className="input__login">
            <input
              className="login__email"
              type="email"
              name="eamil"
              placeholder="enter your email"
            />
          </div>
          <div className="input__password">
            <input
              className="login__password"
              type="password"
              name="password"
              placeholder="enter your password"
            />
          </div>
          <div className="input__btn">
            <button className="login__btn">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
