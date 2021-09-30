
import React, { useState } from "react";

import { NavLink } from "react-router-dom";
// import { IconName } from "react-icons/vsc";
import MenuIcon from '@mui/icons-material/Menu';

export const Header = (props) => {

  const [navToggle, setNavToggle] = useState("hidden");
  const navToggler = () =>{
    if (navToggle === "") {
      setNavToggle("hidden");
      // console.log(navToggle)
    }
    else{
      // console.log(navToggle, "else")
      setNavToggle("");
    }
  }
  

  return (
    <>
        <nav className={ props.className + " fixed top-0 w-full flex items-center bg-mukul-400 p-2 flex-wrap"}>
          <NavLink to="#" className="px-2 mr-4 inline-flex items-center">
            <span className="text-xl text-white font-bold uppercase tracking-wide" data-target="#navigation">Alpha</span>
          </NavLink>
          <button className="nav-toggler text-white inline-flex p-2 hover:bg-gray-900 lg:hidden ml-auto" onClick={()=>navToggler()}>
            <MenuIcon />
          </button>
          <div className={navToggle+" top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto"} id="navigation"  onClick={()=>navToggler()}>
            <div className="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">
              <NavLink to={process.env.PUBLIC_URL + "/"} className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-white hover:text-gray-800 hover:bg-red-50">
                <span>Home</span>
              </NavLink>
              <NavLink  to={process.env.PUBLIC_URL + "/inbox/"} params={{ data: props.user_name }} className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-white hover:text-gray-800 hover:bg-red-50">
                <span>Inbox</span>
              </NavLink>
              <NavLink to={process.env.PUBLIC_URL + "/profile/"} className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-white hover:text-gray-800 hover:bg-red-50">
                <span>{props.user_name}</span>
              </NavLink>
            </div>
          </div>
        </nav>
    </>
  );
};
