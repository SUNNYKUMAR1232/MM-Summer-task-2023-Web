import React from 'react'
import "../adminPanel/AdminPanel.css";
const AdminPanel = () => {
  return (
    <>
      <nav class=" admin_container">
        <div class="text_style">
          <span>Admin Dashboard</span>
        </div>
        <div class="line-style">
          <li>
            <a class="login" href="/admin/login">
              Admin Login
            </a>
          </li>
          <li>
            <a class="SignUp" href="/signup">
              Admin SignUp
            </a>
          </li>
        </div>
      </nav>

      <div class="links">
        <div class="link">
          <a href="/add_user">Add User</a>
          <a href="/userManegmement">List User</a>
        </div>
        <div class="link">
          <a href="/add_article">Add Article</a>
          <a href="/articleManegmement">List Article</a>
        </div>
      </div>
    </>
  );
}

export default AdminPanel