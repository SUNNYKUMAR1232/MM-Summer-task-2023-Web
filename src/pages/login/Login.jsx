import React from "react";
import "../login/style.css"

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="sub_container">
          <div className="login_heading ">
            <h1 className="login_heading__text">Log In</h1>
          </div>
          <div className="login_username">
            <span className="login_username__text">Username</span>
          </div>
          <div className="login_username__input">
            <input type="text" className="login_username__input__text" placeholder="Username" />
          </div>
          <div className="login_password">
            <span className="login_password__text">Password</span>
          </div>
          <div className="login_password__input">
            <input type="password" className="login_password__input__text" placeholder="Password" />
          </div>
          <div className="login_submit">
            <button className="login_submit__button">Log In</button>
          </div>
          <div className="signup">
            <button className="signup_button">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
