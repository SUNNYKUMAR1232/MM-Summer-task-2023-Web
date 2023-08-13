import React, { useContext, useState } from "react";
import  {Sidebar,Menu,MenuItem, SubMenu} from "react-pro-sidebar";
import {FiChevronsLeft, FiChevronsRight} from "react-icons/fi";
import "../Sidebar/styleSidebar.css";
import { AllArticles } from "../../App";
import { Button } from "@mui/material";
import { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { filterItem } from "../filterfunction/filter";
const Sidebars = () => {
  const { themeMode, setThemeMode,menuItems,setItem,articleData } = useContext(AllArticles);
  const [toggled, setToggled] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const {  themeColor } = useContext(AllArticles);

  const [theme, setTheme] = useState("white");
  

   const get = localStorage.getItem("themeMode");
   
    const setMode=()=>{
    get==="white"?setTheme("black"):setTheme("white")
    localStorage.setItem("themeMode", theme);
    setThemes(get);

     
    }
    const [themes, setThemes] = useState(get);


    useEffect(()=>{
    setThemeMode(themes);
    
    },[themes,theme])
   

   

    
  const handleCollepsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = () => {
    setToggled(!toggled);
  };
  return (
    <>
      <Sidebar
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="all"
        collapsed={collapsed}
        style={{
          position: "fixed",
          height: "100vh",
          zIndex: "100",
          top: "80px",
          fontSize: "20px",
          letterSpacing: "1px",
          border: "none",
          boxShadow: "none",
          color: themeColor,
        }}
        backgroundColor={themeMode}
      >
        <Menu>
          {collapsed ? (
            <MenuItem
              iconShape="circle"
              icon={<FiChevronsRight />}
              onClick={handleCollepsedChange}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<FiChevronsLeft />}
              onClick={handleCollepsedChange}
              rootStyles={{ color: themeColor }}
            >
              <div
                style={{
                  padding: "9px",
                  fontWeight: "bold",
                  fontSize: "30px",
                  letterSpacing: "1px",
                  color: themeColor,
                }}
              >
                Dashboard
              </div>
            </MenuItem>
          )}

          <hr />

          <SubMenu defaultOpen label={"FILTER"}>
            <Menu iconShape="square">
              {menuItems &&
                menuItems.map((val, id) => {
                  return (
                    <MenuItem >
                      <Button
                        style={{
                          color: themeColor === "black" ? "black" : "blue",width:"100%"
                        }}
                        onClick={() => filterItem(val,articleData,setItem)}
                        key={id}
                      >
                        {val}
                      </Button>
                    </MenuItem>
                  );
                })}
              <MenuItem>
                <Button
                  sx={{ color: themeColor === "black" ? "black" : "blue" }}
                  onClick={() => setItem(articleData)}
                >
                  All
                </Button>
              </MenuItem>
            </Menu>
          </SubMenu>
          <Menu>
            <MenuItem>
              <Button onClick={setMode}>{theme}</Button>
            </MenuItem>
            <MenuItem>
              <h3 style={{ color: themeColor }}>LogOut</h3>
            </MenuItem>
          </Menu>
        </Menu>
      </Sidebar>

      <div>
        <Button onClick={handleToggleSidebar}>
          <MenuIcon
            sx={{
              height: "40px",
              width: "40px",
              background: themeColor,
              borderRadius: "12px",
            }}
          />
        </Button>
      </div>
    </>
  );
};






export default Sidebars;