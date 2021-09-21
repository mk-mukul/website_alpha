// require("dotenv").config();
import React from "react";
import { Link } from "react-router-dom";

// import { Route, Switch} from "react-router-dom";
// import Cookies from "js-cookie";
// import { Header } from "./Header";
import "../style/header.css";
// import { LinkPage } from "./LinkPage";
import "../style/home.css";
// import { Profile } from "./Profile";


export const Home = (props) => {
  const user = props.data.user;
  const data = props.data.user_data;
  // console.log(data)
  return (<>

    <div className="">
      <h1>Hello {user.name}</h1>
      <h2> Welcome to the Website Alpha</h2>
    </div>
    <div>
      {data.data[0] ?
      <>
      <h3>Your link is available <a href={process.env.PUBLIC_URL+"/page/"+data.user_name}>Here</a></h3>
      <Link to={process.env.PUBLIC_URL+"/add_data/"} params={{data: data}} ><button>Add Links</button></Link>
      </>
      :
      <>
      <h3>You have not saved anything yet</h3>
      <Link to={process.env.PUBLIC_URL+"/add_data/"} params={{data: data}} ><button>Add Links</button></Link>
      </>}
    </div>
  </>)
}
