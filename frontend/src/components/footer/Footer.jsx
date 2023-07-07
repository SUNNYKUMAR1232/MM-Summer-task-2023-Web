import React from "react";
import "./style.css"
const Footer = () => {  
            return (
            <div className="footer_container">
            <div className="row">
            <div className="footer-col-1">
                        <h3>Download Our App</h3>
                        <p>Download App for Android and ios mobile phone.</p>
                        <div className="app-logo">
                        <img src="images/play-store.png" alt="play-store" />
                        <img src="images/app-store.png" alt="app-store" />
                        </div>
            </div>
            <div className="footer-col-2">
                        <img src="images/logo-white.png" alt="logo-white" />
                        <p>
                        Our Purpose Is To Sustainably Make the Pleasure and Benefits of
                        Sports Accessible to the Many.
                        </p>
            </div>
          
            <div className="footer-col-4">
                        <h3>Follow Us</h3>
                        <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>YouTube</li>
                        </ul>
            </div>
            </div>
            <hr />
            <p className="copy-right-text">
            © 2021 Sports Store. All rights reserved.
            </p>
            </div>
            
            );
            }
export default Footer;