import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/Sidebar.css";
import logo from "../assets/images/Keoni-logo.png";
import menu1 from "../assets/images/menu1.png";
import menu2 from "../assets/images/menu2.png";
import menu3 from "../assets/images/menu3.png";
import menu4 from "../assets/images/menu4.png";
import menu5 from "../assets/images/menu5.png";
import menu6 from "../assets/images/menu6.png";
import { IoIosArrowForward } from "react-icons/io";
interface MenuItem {
  url: string;
  icon: typeof menu1;
  name: string;
}

const Sidebar: React.FC = () => {
  const menuItems: MenuItem[] = [
    { url: "/create-content", icon: menu1, name: "Create Content" },
    { url: "/home", icon: menu2, name: "Home" },
    { url: "/get-inspired", icon: menu3, name: "Get Inspired" },
    { url: "/manage-creations", icon: menu4, name: "Manage Creations" },
    { url: "/hire-seo-specialist", icon: menu5, name: "Hire SEO Specialist" },
  ];
  const [activeMenu, setActiveMenu] = useState<string>(
    window.location.pathname
  );
  // useEffect(() => {
  //   setActiveMenu(window.location.pathname)
  // }, [window.location.pathname])
  return (
    <div className="sidebar">
      <img src={logo} alt="Keoni.ai Logo" className="logo" />
      <div className="sidebar-menu-list">
        {menuItems.map((item: MenuItem) => {
          return (
            <NavLink onClick={() => setActiveMenu(item.url)} to={item.url}>
              <div
                className={
                  item.url == activeMenu
                    ? "sidebar-menu-item sidebar-menu-item-active"
                    : "sidebar-menu-item"
                }
              >
                <img src={item.icon} className="menu-icon" />
                {item.name}
              </div>
            </NavLink>
          );
        })}

        {/* <div>
          <NavLink to="/configure">Configure</NavLink>
        </div> */}
      </div>
      <div className="sidebar-menu-list sidebar-menu-list-bottom">
        <NavLink onClick={() => setActiveMenu("/configure")} to="/configure">
          <div
            className={
              activeMenu == "/configure"
                ? "sidebar-menu-item-bottom sidebar-menu-item-active"
                : "sidebar-menu-item-bottom"
            }
          >
            <img src={menu6} className="menu-icon" />
            <div>
              <div>Configure</div>
              <div className="sidebar-menu-item-bottom-small-text">
                Configure brand voice and business references
              </div>
            </div>
          </div>
        </NavLink>
        <div>
          <div className={"sidebar-user-infor"}>
            <div>
            <div className="sidebar-avt-box">
              <div className="sidebar-avt">
                S
              </div>
            </div>
            Steph T
            </div>
            <IoIosArrowForward className="sidebar-user-infor-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
