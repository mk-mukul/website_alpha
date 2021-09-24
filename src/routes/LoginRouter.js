// require("dotenv").config();
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import Cookies from "js-cookie";
import { Header } from "../containers/Header";
// import "../style/header.css";
// import "../style/home.css";
import { Profile } from "../containers/Profile";
import { Home } from "../containers/Home";
import { AddData } from "../containers/AddData";
import { Inbox } from "../containers/Inbox";

const URL = process.env.REACT_APP_SERVER + "/";
// console.log(URL)
export default class LoginRouter extends React.Component {
  // const token = "Bearer " + props.route.params.token;
  state = {
    loading: true,
    data: null,
    status: null,
  };

  // logout = () => {
  //   Cookies.remove("token");
  // };
  async componentDidMount() {
    const token = this.props.token;
    if (token) {
      // Fetch data for home page
      const res = await fetch(URL, {
        method: "GET",
        headers: {
          Accept: "*/*",
          Authorization: token,
        },
      });

      const data = await res.json();
      this.setState({
        data: data,
        loading: false,
        status: res.status,
      });
      // console.log(res.status);
      // console.log(data);
      // console.log(this.state.user);
      // console.log(this.state.data);
      // Cookies.remove("token")
    }
  }

  render() {
    // console.log(this.state.data)
    return (
      <>
        {this.state.loading ? (
          <section className="main_body"> Loading... </section>
        ) : (
          <>
            {this.state.status === 200 ? (
              <UserFound data={this.state.data} token={this.props.token} />
              ) : (
              <Redirect to={process.env.PUBLIC_URL + "/signin/"} />
            )}
          </>
        )}
      </>
    );
  }
}

const UserFound = (props) => {
  // console.log(props);
  const data = props.data;
  return (
    <>
      <Header user_name={data.user.user_name} />
      <section className="main_body">
        <Route
          path={process.env.PUBLIC_URL + "/"}
          render={() => {
            return (
              <>
                <Switch>
                  <Route
                    exact
                    path={process.env.PUBLIC_URL + "/"}
                    render={() => {
                      return (
                        <>
                          <Home data={data} />
                        </>
                      );
                    }}
                  />
                  <Route
                    exact
                    path={process.env.PUBLIC_URL + "/add_data/"}
                    render={() => {
                      return (
                        <>
                          <AddData data={data} token={props.token} />
                        </>
                      );
                    }}
                  />
                  <Route
                    exact
                    path={process.env.PUBLIC_URL + "/profile/"}
                    render={() => {
                      return (
                        <>
                          <Profile user={data.user} />
                        </>
                      );
                    }}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/inbox/"}
                    render={() => {
                      return (
                        <>
                          <Inbox user={data.user} />
                        </>
                      );
                    }}
                  />
                  {/* <Route exact path="/inbox" component={Inbox} /> */}
                </Switch>
              </>
            );
          }}
        />
      </section>
    </>
  );
};
