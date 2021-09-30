// require("dotenv").config();
import React from "react";
import { Link } from "react-router-dom";

// import { Route, Switch} from "react-router-dom";
// import Cookies from "js-cookie";
// import { Header } from "./Header";
// import "../style/header.css";
// import { LinkPage } from "./LinkPage";
// import "../style/home.css";
// import { Profile } from "./Profile";


export const Home = (props) => {
  const user = props.data.user;
  const data = props.data.user_data;
  // console.log(data)
  return (<div>

    <div className="mt-16">
      <h1>Hello {user.name}</h1>
      <h2> Welcome to the Website Alpha</h2>
    </div>
    <div>
      {data.data[0] ?
      <>
      <p>Your link is available <a href={process.env.PUBLIC_URL+"/page/"+data.user_name}>Here</a></p>
      <Link to={process.env.PUBLIC_URL+"/links/"} params={{data: data}} ><button>Add Links</button></Link>
      </>
      :
      <>
      <p>You have not saved anything yet</p>
      <Link to={process.env.PUBLIC_URL+"/links/"} params={{data: data}} ><button>Add Links</button></Link>
      </>}
    </div>
  </div>)
}
