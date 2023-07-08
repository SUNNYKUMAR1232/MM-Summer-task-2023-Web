import React from "react"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from '../pages/login/Login'
import Signup from "../pages/signup/Signup";
import Home from "../pages/home/Home";


const Routers=()=>{
            return (
              <>
                <Routes>
                 <Route path="*" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                </Routes>
              </>
            );
    
}
export default Routers;