
import React, { useState } from "react";

import { NavLink } from "react-router-dom";
// import { IconName } from "react-icons/vsc";
import MenuIcon from '@mui/icons-material/Menu';

export const Header = (props) => {

  const [navToggle, setNavToggle] = useState("hidden");
  const navToggler = () =>{
    if (navToggle === "") {
      setNavToggle("hidden");
      console.log(navToggle)
    }
    else{
      console.log(navToggle, "else")
      setNavToggle("");
    }
  }

  return (
    <>
      <header>
        <nav className="fixed top-0 w-full flex items-center bg-gray-800 p-3 flex-wrap">
          <NavLink to="#" className="p-2 mr-4 inline-flex items-center">
            <span className="text-xl text-white font-bold uppercase tracking-wide" data-target="#navigation">Alpha</span>
          </NavLink>
          <button className="nav-toggler text-white inline-flex p-2 hover:bg-gray-900 lg:hidden ml-auto" onClick={()=>navToggler()}>
            <MenuIcon />
          </button>
          <div className={navToggle+" top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto"} id="navigation">
            <div className="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">
              <NavLink className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-white hover:text-gray-800 hover:bg-red-50" to={process.env.PUBLIC_URL + "/"}>
                <span>Home</span>
              </NavLink>
              <NavLink className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-white hover:text-gray-800 hover:bg-red-50" to={process.env.PUBLIC_URL + "/inbox/"} params={{ data: props.user_name }}>
                <span>Inbox</span>
              </NavLink>
              <NavLink className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-white hover:text-gray-800 hover:bg-red-50" to={process.env.PUBLIC_URL + "/profile/"}>
                <span>{props.user_name}</span>
              </NavLink>
            </div>
          </div>






          {/* <input type="checkbox" id="check" />
          <label htmlFor="check" className="nav-checkbtn">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </label> */}
          {/* <div className="nav-link">
            <NavLink className="lg:inline-flex" to={process.env.PUBLIC_URL+"/"}>
              <span>Home</span>
            </NavLink>
            <NavLink className="lg:inline-flex" to={process.env.PUBLIC_URL+"/inbox/"} params={{ data: props.user_name }}>
              <span>Inbox</span>
            </NavLink>
            <NavLink className="lg:inline-flex" to={process.env.PUBLIC_URL+"/profile/"}>
              <span>{props.user_name}</span>
            </NavLink>
          </div> */}
        </nav>
      </header>
    </>
  );
};
