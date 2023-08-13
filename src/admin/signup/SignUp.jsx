import React from 'react'
import '..//signup/Sign.css'
const SignUp = () => {
  return (
    <div class="login_container">
      <div class="back_link">
        <a class="back_link__text" href="/">
          {" "}
          Back
        </a>
      </div>
      <form action="http://localhost:8000/api/users" method='POST' class="login_form">
        <div class="login_title">
          <h1>Admin SignUp</h1>
        </div>
        <div class="name_box">
          <div class="firstname_box">
            <label for="fistname">First Name</label>
            <input type="text" name="firstname" placeholder="First Name" />
          </div>
          <div class="lastname_box">
            <label for="lastname">Last Name</label>
            <input type="text" name="lastname" placeholder="Last Name" />
          </div>
        </div>
        <div class="username_box">
          <label for="Email">Email</label>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div class="password_box">
          <label for="password">Password</label>
          <input type="password" name="password" placeholder="Password" />
        </div>

        <button class="submit_btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp