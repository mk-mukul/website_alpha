import React from "react";
import { Link } from "react-router-dom";


export const Home = (props) => {
  const user = props.data.user;
  const data = props.data.user_data;
  return (
    <div className="min-h-screen text-primary-101">
      <div className="mt-16 font-medium">
        <h1 className="font-semibold">Hello {user.name} !</h1>
        <h2> Welcome to the Website Alpha</h2>
      </div>
      <div>
        {data.data[0] ? (
          <>
            <p>
              Your link is available{" "}
              <a className="hover:text-blue-300" href={process.env.PUBLIC_URL + "/page/" + data.user_name}>
                Here
              </a>
            </p>
            <Link
              to={process.env.PUBLIC_URL + "/links/"}
              params={{ data: data }}
            >
              <button className="bg-background-401 hover:bg-background-501">Update Links</button>
            </Link>
          </>
        ) : (
          <>
            <p>You have not saved anything yet</p>
            <Link
              to={process.env.PUBLIC_URL + "/links/"}
              params={{ data: data }}
            >
              <button className="bg-background-401 hover:bg-background-501">Add Links</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
