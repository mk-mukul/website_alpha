import React from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import LoginRouter from "./LoginRouter";

export const MainRouter = () => {
  const token = Cookies.get("token");
  let querry = window.location.search.split("?").slice(1, 2).join();
  return (
    <>
      {querry ? (
        <Redirect to={process.env.PUBLIC_URL + querry} />
      ) : (
        <>
          {token ? (
            <>
              <Redirect to={process.env.PUBLIC_URL + "/inbox/"} />
              <LoginRouter token={token} />
            </>
          ) : (
            <>
              <Redirect to={process.env.PUBLIC_URL + "/"} />
            </>
          )}
        </>
      )}
    </>
  );
};
