// import "./style/main.css";
// import "./style/header.css";
// import "./style/home.css";
import "./style/link_page.css";
// import "./style/chats.css";



import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useLocation,
  Redirect,
} from "react-router-dom";
// import Cookies from "js-cookie";
import { MainRouter } from "./routes/MainRouter";
import Signin from "./containers/auth/Signin";
import Signup from "./containers/auth/Signup";
// import Home from "./containers/Home";
import LinkWebsite from "./containers/public/LinkWebsite";
// import { Profile } from "./containers/Profile";
import { Test } from "./containers/Test";


export const App = () => {
  // console.log(process.env.PUBLIC_URL)
  let querry = window.location.search.split("?").slice(1, 2).join();
  // console.log(window.location);
  // console.log(querry);
  // console.log(querry2);

  return (
    <>
      <Router>
        {querry ? <Redirect to={process.env.PUBLIC_URL + querry} /> : <></>}
        <Switch>
          {/* <Route exact path="/" render={() => {
                // console.log(data)
                return (
                  <>
                    <MainRouter token={this.state.token}/>
                  </>
                );
              }}/> */}
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
          {/* <Route exact path="/profile" component={Profile} /> */}
          {/* <Route exact path="/signup" component={Signup} /> */}
          {/* <Route exact path="/home" component={Home} /> */}
          {/* <Route exact path="/link/:id" component={LinkWebsite} /> */}

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
            path={process.env.PUBLIC_URL + "/test/"}
            render={(props) => {
              return (
                <>
                  <Test/>
                </>
              );
            }}
          />

          {/* <Route
            exact
            path="/page/:id"
            render={(props) => {
              return (
                <>
                  <LinkWebsite
                    id={props.match.params.id}
                  />
                </>
              );
            }}
          /> */}

          <MainRouter path={process.env.PUBLIC_URL + "/"} />

          {/* <Redirect to={process.env.PUBLIC_URL} /> */}
        </Switch>
      </Router>
    </>
  );
};

export default App;
