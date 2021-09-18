import React, {} from "react";
import { Redirect} from "react-router-dom";
import Cookies from "js-cookie";
import LoginRouter from "./LoginRouter";


export const MainRouter = () =>{
    const token = Cookies.get("token");
    

    return(<> 
        {token ? 
        <>
        <LoginRouter token={token}/> 
        </>
        :
        <>
        <Redirect to={process.env.PUBLIC_URL+"/signin"} />
        </>
        }
    </>)
}