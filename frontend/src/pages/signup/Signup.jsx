import React from "react";
import "./style.css";
const Signup = () => {
  return (
    <>
      <div className="signup_conatainer">
        <div className="signup_subconatainer">
          <div className="heading">
            <span className="heading_text">Sign Up</span>
          </div>

          <div className="firstname">
            <label className="firstname_text">First Name</label>
            <input
              type="text"
              className="firstname_input"
              placeholder="First Name"
              autoComplete
              required
            />
          </div>
          <div className="firstname">
            <label className="firstname_text">Last Name</label>
            <input
              type="text"
              className="firstname_input"
              placeholder="Last Name"
              autoComplete
              required
            />
          </div>

          <div className="firstname">
            <label htmlFor="password" className="firstname_text">
              Email
            </label>
            <input
              type="email"
              className="firstname_input"
              placeholder="example@gmail.com"
              autoComplete
              required
            />
          </div>
          <div className="firstname">
            <label htmlFor="password" className="firstname_text">
              Password
            </label>
            <input
              type="password"
              className="firstname_input"
              placeholder="Password"
              autoComplete
              required
            />
          </div>

          <div className="ckeckbox">
            <label htmlFor="gender" className="ckeckbox_text">
              Gender
            </label>

            <input
              type="checkbox"
              name=""
              className="ckeckbox_input"
              autoComplete
              required
            />
            <label htmlFor="gender" className="ckeckbox_text">
              Male
            </label>
            <input
              type="checkbox"
              name=""
              className="ckeckbox_input"
              autoComplete
              required
            />
            <label htmlFor="gender" className="ckeckbox_text">
              Female
            </label>
          </div>
          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
