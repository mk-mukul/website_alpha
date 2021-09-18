import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import Cookies from "js-cookie";
import "./style/main.css";
import { MainRouter } from "./routes/MainRouter";
import Signin from "./containers/auth/Signin";
import Signup from "./containers/auth/Signup";
// import Home from "./containers/Home";
import LinkWebsite from "./containers/LinkWebsite";
// import { Profile } from "./containers/Profile";

export const App = () => {




  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path="/" render={() => {
                // console.log(data)
                return (
                  <>
                    <MainRouter token={this.state.token}/>
                  </>
                );
              }}/> */}
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/profile" component={Profile} /> */}
          {/* <Route exact path="/signup" component={Signup} /> */}
          {/* <Route exact path="/home" component={Home} /> */}
          {/* <Route exact path="/link/:id" component={LinkWebsite} /> */}

          <Route
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


            <MainRouter exact path="/" />

          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
