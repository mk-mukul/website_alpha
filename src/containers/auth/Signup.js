// require("dotenv").config();
import React from "react";
// import Cookies from "js-cookie";
import { Redirect, Link } from "react-router-dom";
// const cookies = require("js-cookie");

// import "fetch"
const URL = process.env.REACT_APP_SERVER+"/signup";

export default class Signup extends React.Component {
  // const token = "Bearer " + props.route.params.token;
  state = {
    islogin: false,
    data: null,
    name: "",
    user_name: "",
    email: "",
    password: "",
    phone: "",
  };
  submit = async () => {
    const res = await fetch(URL, {
      // // Fetch data for home page
      // method: "GET",
      // headers: {
      //   Accept: "*/*",
      //   Authorization: token,
      // },

      // login
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        user_name: this.state.user_name,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
      }),
    });
    const data = await res.json();
    if (data.token) {
      // const token = "Bearer " + data.token;
      //   await Cookies.set("token", token);
      alert("account created please login");
      this.setState({
        name: "",
        user_name: "",
        email: "",
        password: "",
        phone: 0,
        islogin: true,
      });
      // console.log(token)
    } else {
      // console.log(data)
      alert(data.error);
    }
    // alert(data.error)
    // console.log(data.token)
  };

  render() {
    return (
      <>
        {this.state.islogin ? (
          <Redirect to="/signin" />
        ) : (
          <>
            <section className="main_body">
              <div className="form">
                <h2 className="form-heading">Sign UP</h2>
                <div className="signup-form">
                  <div className="form-cell">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      value={this.state.name}
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                    />
                  </div>
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
                    <label htmlFor="user_name">Email</label>
                    <input
                      type="text"
                      value={this.state.email}
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
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
                    <label htmlFor="phone">Phone No</label>
                    <input
                      type="number"
                      value={this.state.phone}
                      onChange={(e) => {
                        this.setState({ phone: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-cell">
                    <button
                      onClick={() => {
                        this.submit();
                      }}
                    >
                      Signup
                    </button>
                  </div>
                </div>
                <Link className="form-link" to="/signin">
                  Already have an account ?? Login
                </Link>
              </div>
            </section>
          </>
        )}
      </>
    );
  }
}
