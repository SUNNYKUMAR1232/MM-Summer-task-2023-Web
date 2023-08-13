/* import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";

const Slidder = () => {
             const [collased, setCollased] = useState(false);
             const [toggle, setToggle] = useState(false);
             const handleCollasedChange = () => {
               setCollased(!collased);
             };

             const handleToggleSidebar = (value) => {
               setToggle(value);
             };
            return(
            <>
            <div className="home_container">
                        <Sidebar
        collapsed={collased}
        className="sidebar"
        toggle={toggle}
        handleToggleSidebar={handleToggleSidebar}
        handleCollasedChange={handleCollasedChange}
      />
      </div>
            </>
            )
}
export default Slidder; */