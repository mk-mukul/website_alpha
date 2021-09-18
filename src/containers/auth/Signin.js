import React from "react";
import Cookies from "js-cookie";
import { Redirect, Link } from "react-router-dom";

// const cookies = require("js-cookie");

// import "fetch"

const URL = process.env.REACT_APP_SERVER+"/signin";
// console.log(URL)

export default class Signin extends React.Component {
  state = {
    islogin: false,
    data: null,
    user_name: "",
    password: "",
  };
  submit = async () => {
    const res = await fetch(URL, {

      // login
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: this.state.user_name,
        password: this.state.password,
      }),
    });
    const data = await res.json();
    if (data.token) {
      const token = "Bearer " + data.token;
      await Cookies.set("token", token);
      this.setState({ username: "", password: "", islogin: true });
    } else {
      // console.log(data)
      alert(data.error);
      this.setState({ user_name: "", password: "" });
    }
  };

  render() {
    return (
      <>
        {this.state.islogin ? (
          <Redirect to={process.env.PUBLIC_URL+"/"} />
        ) : (
          <>
            <section className="main_body">
              <div className="form">
                <h2 className="form-heading">Login</h2>
                <div className="signin-form">
                  <div className="form-cell">
                    <label htmlFor="user_name">User Name</label>
                    <input
                      type="text"
                      value={this.state.user_name}
                      onChange={(e) => {
                        this.setState({ user_name: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-cell">
                    <label htmlFor="password">Password</label>
                    <input
                      type="text"
                      value={this.state.password}
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-cell">
                    <button
                      onClick={() => {
                        this.submit();
                      }}
                    >
                      Login
                    </button>
                  </div>
                </div>
                <Link className="form-link" to={process.env.PUBLIC_URL+"/signup"}>
                  Click to make an account
                </Link>
              </div>
            </section>
          </>
        )}
      </>
    );
  }
}
