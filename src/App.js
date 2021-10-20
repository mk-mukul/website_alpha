
import "./style/link_page.css";


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { MainRouter } from "./routes/MainRouter";
import Signin from "./containers/auth/Signin";
import Signup from "./containers/auth/Signup";
import LinkWebsite from "./containers/public/LinkWebsite";
import { VerificationId } from "./containers/auth/VerificationId";
import { Verification } from "./containers/auth/Verification";
import { ChangePassword } from "./containers/auth/ChangePassword";
import { ChangePasswordId } from "./containers/auth/ChangePasswordId";
import { Index } from "./containers/home/Index";

export const App = () => {
  let querry = window.location.search.split("?").slice(1, 2).join();

  return (
    <>
      <Router>
        {querry ? <Redirect to={process.env.PUBLIC_URL + querry} /> : <></>}
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            component={Index}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/signin/"}
            component={Signin}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/signup/"}
            component={Signup}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/page/:id"}
            render={(props) => {
              return (
                <>
                  <LinkWebsite id={props.match.params.id} />
                </>
              );
            }}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/verification/"}
            render={() => {
              return (
                <>
                  <Verification />
                </>
              );
            }}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/changePassword/"}
            render={() => {
              return (
                <>
                  <ChangePassword />
                </>
              );
            }}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/verification/:id"}
            render={(props) => {
              return (
                <>
                  <VerificationId id={props.match.params.id} />
                </>
              );
            }}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/changePassword/:id"}
            render={(props) => {
              return (
                <>
                  <ChangePasswordId id={props.match.params.id} />
                </>
              );
            }}
          />
          <MainRouter path={process.env.PUBLIC_URL + "/"} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
