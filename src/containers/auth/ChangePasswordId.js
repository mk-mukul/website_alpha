import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

const url = process.env.REACT_APP_SERVER + "/changePassword/";

export const ChangePasswordId = (props) => {
  const [password, setPassword] = useState("");
  const inputRef = React.createRef();
  const [status, setStatus] = useState(false);

  const submit = async () => {
    try {
      const res = await fetch(url+props.id, {
        // login
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
        }),
      });
      const data = await res.json();
      if (res.status === 200) {
        alert(data.status);
        setStatus(true);
      } else {
        alert(data.error);
      }
      console.log(data);
    } catch (err) {
      console.log(err);
      alert("Invalid Link");
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <>
      {status ? (
        <Redirect to={process.env.PUBLIC_URL + "/inbox/"} />
      ) : (
        <></>
      )}
      <section className="pt-4 pb-4 min-h-screen flex justify-center items-center text-light-101 bg-background-101">
        <div className="flex items-center w-56 flex-col">
          <div className="grid gap-2 w-full bg-background-201 text-dark-901 px-3 py-6 rounded-md shadow-xl">
            <div className="w-full">
              <input
                className="py-1 w-full px-2 rounded-md bg-light-101 focus:border-light-201"
                type="text"
                placeholder=" Password"
                ref={inputRef}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="w-full">
              <button
                className="w-full mt-4 p-0 bg-background-401 text-light-101"
                onClick={() => {
                  submit();
                }}
              >
                Submit Password
              </button>
            </div>
          </div>
          <div className="text-sm text-light-101 mt-4">
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
  );
};
