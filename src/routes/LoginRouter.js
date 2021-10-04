import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Header } from "../components/Header";
import { Profile } from "../containers/profile/Profile";
import { Home } from "../containers/home/Home";
import { AddLinks } from "../containers/addLink/AddLink";
import { Inbox } from "../containers/inbox/Inbox";
import { Loading } from "../components/Loading";

const URL = process.env.REACT_APP_SERVER + "/";
export default class LoginRouter extends React.Component {
  state = {
    loading: true,
    data: null,
    status: null,
  };
  async componentDidMount() {
    const token = this.props.token;
    if (token) {
      // Fetch data for home page
      try {
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
      } catch (err) {
        console.log(err)
      }
    }
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <Loading />
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
  const data = props.data;
  return (
    <>
      <Header user_name={data.user.user_name} className="z-10" />
      <section className="grid justify-center align-middle h-full bg-background-101">
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
                    path={process.env.PUBLIC_URL + "/links/"}
                    render={() => {
                      return (
                        <>
                          <AddLinks data={data} token={props.token} />
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
                </Switch>
              </>
            );
          }}
        />
      </section>
    </>
  );
};
