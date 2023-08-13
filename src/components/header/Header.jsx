
import { NavLink } from "react-router-dom";
import "./header_style.css";
import Sidebars from "../../features/Sidebar/Sidebar";
import SearchFilter from "../../features/SearchBar/SearchFilter";
import logo from "../assets/img/logo.png";
import { useContext } from "react";
import { AllArticles } from "../../App";


const Header = () => {
         const {themeMode,themeColor,setThemeColor}=useContext(AllArticles)
         const color=  themeMode === "white" ? "black" : "whitesmoke"
         setThemeColor(color)

  return (
    <>
      <nav className="nav_container" style={{ backgroundColor: themeMode  }}>
        <div>
          <Sidebars />
        </div>

        <div className="nav_subconatainer_1">
          <div className="logo_box">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="text_box">
            <span className="text" style={{ color: color }}>
              Logo
            </span>
          </div>
        </div>
        <div className="nav_subconatainer_2">
          <SearchFilter className="search_box" style={{ color: color }} />
        </div>
        <div className="nav_subconatainer_3">
          <ul className="nav_ul">
            <li className="nav_li">
              <NavLink to="/login" style={{ color: color }}>
                Login
              </NavLink>
            </li>
            <li className="nav_li">
              <NavLink to="/signup" style={{ color: color }}>
                SignUp
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
