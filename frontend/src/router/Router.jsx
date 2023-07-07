import React from "react"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from '../pages/login/Login'
import Signup from "../pages/signup/Signup";


const Routers=()=>{
            return(
            
            <Router>
                        <Routes>
                       
                        <Route  exact path="/login" component={<Login/>}/>
                        <Route  exact path="/signup" component={<Signup/>}/>
                        </Routes>
                       
            </Router>
            )
    
}
export default Routers;