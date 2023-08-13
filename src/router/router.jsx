import React from "react"
import {Route,  Routes} from "react-router-dom";

import Signup from "../pages/signup/Signup";
import Home from "../pages/home/Home";
import Article from "../pages/Article/Article";
import AdminPanel from "../admin/adminPanel/AdminPanel";
import AddUser from "../admin/Add_user/AddUser";
import AddArticle from "../admin/Add_article/AddArticle";
import ArticleManegment from "../admin/Article_manegment/ArticleManegment";
import UserManegment from "../admin/user_manegment/UserManegment";
import Login from "../admin/login/Login";
import Logins from "../admin/login/Login";
import SignUp from "../admin/signup/SignUp";



const Routers=()=>{
            return (
              <>
                <Routes>
                 <Route path="*" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/article" element={<Article />} />
                  <Route path="/admin" element={<AdminPanel />} />
                  <Route path="/add_user" element={<AddUser />} />
                  <Route path="/admin/login" element={<Logins/>} />
                  <Route path="/admin/signup" element={<SignUp/>} />
                  <Route path="/add_article" element={<AddArticle/>} />
                  <Route path="/articleManegmement" element={<ArticleManegment />} />
                  <Route path="/userManegmement" element={<UserManegment />} />
                  
                </Routes>
              </>
            );
    
}
export default Routers;