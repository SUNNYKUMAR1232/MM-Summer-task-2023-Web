import React, { useContext } from "react";
import "./style.css"
import { AllArticles } from "../../App";
const Footer = () => { 
            const {themeColor,themeMode}=useContext(AllArticles) 
            return (
            <div className="footer_container" style={{background:themeMode,color:"red"}}>
           
            <hr />
            <p className="copy-right-text" style={{color:themeColor}}>
            © 2021 Sports Store. All rights reserved.
            </p>
            </div>
            
            );
            }
export default Footer;