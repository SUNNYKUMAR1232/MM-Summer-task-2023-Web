
import { NavLink } from "react-router-dom";
import "./header_style.css";
import { FaBars } from "react-icons/fa";

const Header = ({handleToggleSidebar}) => {
  


  return (
    <>
      <nav className="nav_container">
        <button onClick={() => handleToggleSidebar(true)} className="menu_box">
          <FaBars />
        </button>
        <div className="nav_subconatainer_1">
          <div className="logo_box">
            <img className="logo" src="er" alt="logo" />
          </div>
          <div className="text_box">
            <span className="text">Logo</span>
          </div>
        </div>
        <div className="nav_subconatainer_2">
          <input type="search" placeholder="Search" className="search_box" />
        </div>
        <div className="nav_subconatainer_3">
          <ul className="nav_ul">
            <li className="nav_li">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="nav_li">
             <NavLink
              to="/signup">SignUp</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
