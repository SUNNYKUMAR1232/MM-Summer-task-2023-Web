import React, { useEffect, useState } from 'react'
import "../user_manegment/userlist.css";
import axios from 'axios';
import { Button } from '@mui/material';
import { Deletes } from '../UpdateAndDelete';
const UserManegment = () => {
  const [userData,setUserData]=useState([])
  const [val,setVal]=useState(0)


  useEffect(()=>{
    
    axios
    .get("http://localhost:8000/api/users")
    .then((data) => {
      setUserData(data.data);
    })
    .catch((err) => console.log(err));

    
  },[val])
  const filters=(Deletes,URL,id)=>{
  
 Deletes(URL, id);
  const data = userData.filter((val) => {
    if (val._id !== id) {
      return val;
    }
  });
  setUserData(data)

  }





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
        <div class="user_container">
          <div class="box-nav d-flex justify-between">
            <a href="/add_user" class="border-shadow">
              <span class="text-gradient">
                New User <i class="fas fa-user"></i>
              </span>
            </a>
          </div>
          <form >
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>@Gmail</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((val, key) => {
                 const URL = "http://localhost:8000/api/users";
                  return (
                    <>
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{val.firstname}</td>
                        <td>{val.lastname}</td>
                        <td>{val.email}</td>
                        <td>
                          <Button
                            variant="contained"
                            onClick={() => filters(Deletes,URL,val._id)}
                          >
                            Delete
                          </Button>
                          <Button variant="contained">Update</Button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </form>
        </div>
      </main>
    </>
  );
}

export default UserManegment