
import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

export const Header = (props) => {

  const [navToggle, setNavToggle] = useState("hidden");
  const navToggler = () =>{
    if (navToggle === "") {
      setNavToggle("hidden");
    }
    else{
      setNavToggle("");
    }
  }
  

  return (
    <>
        <nav className={ props.className + " fixed top-0 w-full flex items-center bg-background-801 p-2 flex-wrap"}>
          <NavLink to="#" className="px-2 mr-4 inline-flex items-center">
            <span className="text-xl text-light-101 font-bold uppercase tracking-wide" data-target="#navigation">Alpha</span>
          </NavLink>
          <button className="nav-toggler text-light-101 inline-flex p-2 hover:bg-background-301 lg:hidden ml-auto" onClick={()=>navToggler()}>
            <MenuIcon />
          </button>
          <div className={navToggle+" top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto"} id="navigation"  onClick={()=>navToggler()}>
            <div className="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">
              {/* <NavLink to={process.env.PUBLIC_URL + "/"} className="lg:inline-flex lg:w-auto px-3 py-2 rounded font-medium text-light-101 hover:text-dark-801 hover:bg-primary-101">
                <span>Home</span>
              </NavLink> */}
              <NavLink  to={process.env.PUBLIC_URL + "/inbox/"} params={{ data: props.user_name }} className="lg:inline-flex lg:w-auto px-3 py-2 rounded font-medium text-light-101 hover:text-dark-801 hover:bg-primary-101">
                <span>Inbox</span>
              </NavLink>
              <NavLink to={process.env.PUBLIC_URL + "/profile/"} className="lg:inline-flex lg:w-auto px-3 py-2 rounded font-medium text-light-101 hover:text-dark-801 hover:bg-primary-101">
                <span>{props.user_name}</span>
              </NavLink>
            </div>
          </div>
        </nav>
    </>
  );
};
