import React from "react";
import { Link } from "react-router-dom";



export const Friend = (props) => {
    // console.log(props.data.chat_id);
    return (
      <>
        {/* <div
          onClick={() => {
            props.openChat(props.data.to_user_name);
          }}
        > */}
        <Link to={props.data.chat_id} className="bg-white">
          <div className="flex sm:justify-center cursor-pointer mt-0.5 px-4 py-2 bg-gray-300">
            <h3>{props.data.to_user_name}</h3>
          </div>
        {/* </div> */}
        </Link>
        {/* <Link to={props.data.chat_id} className="bg-white">Open chat</Link> */}
      </>
    );
  };
  