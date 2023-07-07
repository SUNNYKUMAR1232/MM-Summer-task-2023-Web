import React from "react";
import{Sidebar,Menu,MenuItem} from "react-pro-sidebar";

import "./sidebar_style.css";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
const Sidebars = ({collapsed,toggled,handleToggleSidebar,HandleCollapsedChange}) => {
            return (
              <>
              <div className="nav_container">
                <Sidebar
                  collapsed={collapsed}
                  toggled={toggled}
                  breakPoint="md"
                  onToggle={handleToggleSidebar}
                  onCollapse={HandleCollapsedChange}
                >
                  <Menu iconShape="circle">
                    {collapsed ? (
                      <MenuItem
                        icon={<FaAngleDoubleRight />}
                        onClick={HandleCollapsedChange}
                      ></MenuItem>
                    ) : (
                      <MenuItem
                        suffix={<FaAngleDoubleLeft />}
                        onClick={HandleCollapsedChange}
                      >
                        <div
                          style={{
                            padding: "9px",
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            fontSize: 15,
                            letterSpacing: "1px",
                          }}
                        >
                          Admin Dashboard
                        </div>
                      </MenuItem>
                    )}
                    ;
                  </Menu>
                  <Menu iconShape="circle">
                    <MenuItem icon={<FaAngleDoubleRight />}>
                      Dashboard 
                    </MenuItem>
                    <MenuItem icon={<FaAngleDoubleRight />}>
                      Dashboard 
                    </MenuItem>
                    <MenuItem icon={<FaAngleDoubleRight />}>
                      Dashboard 
                    </MenuItem>
                    <MenuItem icon={<FaAngleDoubleRight />}>
                      Dashboard 
                    </MenuItem>
                    <MenuItem icon={<FaAngleDoubleRight />}>
                      Dashboard 
                    </MenuItem>
                  </Menu>

                  <Menu iconShape="circle">
                    <MenuItem icon={<FaAngleDoubleRight />}>
                      Dashboard 
                    </MenuItem>
                  </Menu>
                  
                </Sidebar>
                </div>
              </>
            );};

export default Sidebars;
            