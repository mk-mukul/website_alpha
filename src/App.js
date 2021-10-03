
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

export const App = () => {
  let querry = window.location.search.split("?").slice(1, 2).join();

  return (
    <>
      <Router>
        {querry ? <Redirect to={process.env.PUBLIC_URL + querry} /> : <></>}
        <Switch>
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
          <MainRouter path={process.env.PUBLIC_URL + "/"} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
