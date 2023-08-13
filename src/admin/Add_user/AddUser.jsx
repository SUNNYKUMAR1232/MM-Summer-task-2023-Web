import React from 'react'
import "../Add_user/addUser.css";
const AddUser = () => {
  return (
    <>
      <header class="header_container">
        <nav>
          <div class="container">
            <div class="text-center">
              <a href="/admin" class="nav-brand text-dark">
                User Management System
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main id="site-main">
        <div class="containers">
          <div class="box-nav d-flex justify-between">
            <div class="filter">
              <a href="/userManegmement">
                <i class="fas fa-angle-double-left"></i> All Users
              </a>
            </div>
          </div>
          <div class="form-title text-center">
            <h2 class="text-dark">New User</h2>
            <span class="text-light">
              Use the below form to create a new account
            </span>
          </div>

          <form
            action="http://localhost:8000/api/users"
            method="POST"
            id="add_user"
          >
            <div class="new_user">
              <div class="form-group">
                <label for="name" class="text-light">
                  FirstName
                </label>
                <input type="hidden" name="id" />
                <input
                  type="text"
                  name="firstname"
                 
                  placeholder="FirstName"
                />
              </div>
              <div class="form-group">
                <label for="name" class="text-light">
                  LastName
                </label>
                <input
                  type="text"
                  name="lastname"
                  
                  placeholder="LastName"
                />
              </div>
              <div class="form-group">
                <label for="Email" class="text-light">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  
                  placeholder="example@gmail.com"
                />
              </div>
              <div class="form-group">
                <label for="password" class="text-light">
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                 
                  placeholder="password"
                />
              </div>

              <div class="form-group">
                <button type="submit" class="btn text-dark update">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddUser