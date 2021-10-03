import React from "react";
import Cookies from "js-cookie";
import { Redirect, Link } from "react-router-dom";

const URL = process.env.REACT_APP_SERVER + "/signin";

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
          <Redirect to={process.env.PUBLIC_URL + "/inbox/"} />
        ) : (
          <>
            <section className="w-screen min-h-screen flex justify-center items-center text-light-101 bg-background-101">
              <div className="flex items-center w-56 flex-col">
                <h2 className="mb-2 font-medium">Log In</h2>
                <div className="grid gap-2 w-full bg-background-201 text-dark-901 px-3 py-6 rounded-md shadow-xl">
                  <input
                    className="py-1 px-2 rounded-md bg-light-101 focus:border-light-201"
                    type="text"
                    placeholder=" username"
                    value={this.state.user_name}
                    onChange={(e) => {
                      this.setState({ user_name: e.target.value });
                    }}
                  />
                  <input
                    className="py-1 px-2 rounded-md bg-light-101 focus:border-light-201"
                    type="password"
                    placeholder=" Password"
                    value={this.state.password}
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                    onKeyDownCapture={(e) =>
                      e.key === "Enter" ? this.submit(e) : null
                    }
                  />

                  <button className="w-full mt-4 p-0 bg-background-401 text-light-101"
                    onClick={() => {
                      this.submit();
                    }}
                  >
                    Log In
                  </button>
                </div>
                <div className="text-sm text-light-101 mt-4">
                 {"Don't have an account?? "}
                  <Link
                    className="text-blue-600 font-medium"
                    to={process.env.PUBLIC_URL + "/signup/"}
                  >
                    signup
                  </Link>
                </div>
              </div>
            </section>
          </>
        )}
      </>
    );
  }
}
