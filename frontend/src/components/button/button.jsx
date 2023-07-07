import React from "react";
import "./button.css";
 const Buttons = ({ value }) => {
   return (
     <>
       <div className="btn_container">
         <button className="btn">{value}</button>
       </div>
     </>
   );
 };
 export default Buttons;