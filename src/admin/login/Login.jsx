import React from 'react'
import '..//login/loginStyle.css'
const Logins = () => {
  return (
    <>
      <div class="login_container">
        <div class="back_link">
          <a class="back_link__text" href="/">
            {" "}
            Back
          </a>
        </div>
        <form
          action=" http://localhost:8000/api/users/login"
          method="POST"
          class="login_form"
        >
          <div class="login_title">
            <h1>Admin Login</h1>
          </div>
          <div class="username_box">
            <label for="username">Username</label>
            <input
              type="username"
              name="email"
              placeholder="Username"
              autoComplete
              autoSave
            />
          </div>
          <div class="password_box">
            <label for="password">Password</label>
            <input type="password" name="password" placeholder="password" />
          </div>

          <button type="submit" class="submit_btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Logins