import React from "react";
import { Redirect, Link } from "react-router-dom";

const URL = process.env.REACT_APP_SERVER + "/signup";

export default class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      islogin: false,
      data: null,
      name: "",
      user_name: "",
      email: "",
      password: "",
      phone: "",
    };
    this.inputNameRef = React.createRef();
    this.inputUserNameRef = React.createRef();
    this.inputEmailRef = React.createRef();
    this.inputPasswordRef = React.createRef();
    this.inputPhoneRef = React.createRef();
  }
  submit = async () => {
    try {
      const res = await fetch(URL, {
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
        alert("account created please login");
        this.setState({
          name: "",
          user_name: "",
          email: "",
          password: "",
          phone: 0,
          islogin: true,
        });
      } else {
        if (data.change==="name") {
          this.inputNameRef.current.focus();
          alert(data.error)
        }
        if (data.change==="user_name") {
          this.inputUserNameRef.current.focus();
          alert(data.error)
        }
        if (data.change==="email") {
          this.inputEmailRef.current.focus();
          alert(data.error)
        }
        if (data.change==="password") {
          this.inputPasswordRef.current.focus();
          alert(data.error)
        }
        // console.log(data);
      }
    } catch (err) {
      console.log(err)
    }
  };
  componentDidMount() {
    this.inputNameRef.current.focus();
  }

  render() {
    return (
      <>
        {this.state.islogin ? (
          <Redirect to={process.env.PUBLIC_URL + "/signin/"} />
        ) : (
          <>
            <section className="w-screen min-h-screen flex justify-center items-center text-light-101 bg-background-101">
              <div className="flex items-center w-56 flex-col">
                <h2 className="mb-2 font-medium">Sign Up</h2>
                <div className="grid gap-2 w-full bg-background-201 text-dark-901 px-3 py-6 rounded-md shadow-xl">
                  <div className="w-full">
                    <label className="text-xs text-light-201" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="py-1 w-full px-2 rounded-md bg-light-101 focus:border-dark-501"
                      type="text"
                      placeholder=" Alpha"
                      ref={this.inputNameRef}
                      value={this.state.name}
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                      onKeyDownCapture={(e) =>
                        e.key === "Enter" ? this.inputUserNameRef.current.focus() : null
                      }
                    />
                  </div>
                  <div className="w-full">
                    <label
                      className="text-xs text-light-201"
                      htmlFor="user_name"
                    >
                      User Name
                    </label>
                    <input
                      className="py-1 w-full px-2 rounded-md bg-light-101 focus:border-dark-501"
                      type="text"
                      placeholder=" alpha"
                      ref={this.inputUserNameRef}
                      value={this.state.user_name}
                      onChange={(e) => {
                        this.setState({ user_name: e.target.value });
                      }}
                      onKeyDownCapture={(e) =>
                        e.key === "Enter" ? this.inputEmailRef.current.focus() : null
                      }
                    />
                  </div>
                  <div className="w-full">
                    <label
                      className="text-xs text-light-201"
                      htmlFor="user_name"
                    >
                      Email
                    </label>
                    <input
                      className="py-1 w-full px-2 rounded-md bg-light-101 focus:border-dark-501"
                      type="text"
                      placeholder=" example@alpha.in"
                      ref={this.inputEmailRef}
                      value={this.state.email}
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                      onKeyDownCapture={(e) =>
                        e.key === "Enter" ? this.inputPasswordRef.current.focus() : null
                      }
                    />
                  </div>
                  <div className="w-full">
                    <label
                      className="text-xs text-light-201"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="py-1 w-full px-2 rounded-md bg-light-101 focus:border-dark-501"
                      type="text"
                      placeholder=" Password"
                      ref={this.inputPasswordRef}
                      value={this.state.password}
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                      onKeyDownCapture={(e) =>
                        e.key === "Enter" ? this.inputPhoneRef.current.focus() : null
                      }
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-xs text-light-201" htmlFor="phone">
                      Phone No
                    </label>
                    <input
                      className="py-1 w-full px-2 rounded-md bg-light-101 focus:border-dark-501"
                      type="number"
                      placeholder=" 123..."
                      ref={this.inputPhoneRef}
                      value={this.state.phone}
                      onChange={(e) => {
                        this.setState({ phone: e.target.value });
                      }}
                      onKeyDownCapture={(e) =>
                        e.key === "Enter" ? this.submit() : null
                      }
                    />
                  </div>
                  <div className="w-full">
                    <button
                      className="w-full mt-4 p-0 bg-background-401 text-light-101"
                      onClick={() => {
                        this.submit();
                      }}
                    >
                      Signup
                    </button>
                  </div>
                </div>
                <div className="text-sm text-light-101 mt-4">
                  {"Already have an account?? "}
                  <Link
                    className="hover:text-blue-800 font-medium"
                    to={process.env.PUBLIC_URL + "/signin/"}
                  >
                    Log In
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
