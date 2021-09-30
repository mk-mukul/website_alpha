import React from "react";
import { format } from "timeago.js";


export const Message = (props) => {
    let name = "";
    let classes = "middle";
    let classes2 = "";
    if (props.data) {
      name = props.own ? "" : props.data.name;
      classes = props.own ? "float-right clear-both" : "float-left clear-both";
      classes2 = props.own ? "bg-gray-300" : "bg-white";
    }
  
    return (
      <>
        {props.data ? (
          <div ref={props.scrollRef} className={"message_box " + classes}>
            <label className="text-xs text-white opacity-40">{name}</label>
            <div
              className={"overflow-x-hidden px-3.5 py-1.5 rounded-xl " + classes2}
            >
              {props.data.message}
              <br />
              {/* <TimeAgo date={props.data.time} /> */}
            </div>
            <p
              className={
                props.own
                  ? "justify-end flex text-xs p-0 m-0"
                  : "justify-start flex text-xsm p-0 m-0"
              }
            >
              <span className="text-white opacity-80">
                {props.data.time ? format(props.data.time) : ""}
              </span>
            </p>
          </div>
        ) : (
          <div ref={props.scrollRef} className={"message_box float-left clear-both"}>
            <label className="text-xs text-white opacity-40">{props.inMsgLive.from_user_name}</label>
            <div
              className={"overflow-x-hidden px-3.5 py-1.5 rounded-xl bg-gray-200"}
            >
              {props.inMsgLive.message}
              <br />
              {/* <TimeAgo date={props.data.time} /> */}
            </div>
            <p
              className={
                props.own
                  ? "justify-end flex text-xs p-0 m-0"
                  : "justify-start flex text-xsm p-0 m-0"
              }
            >
              <span className="text-white opacity-80">
                {props.inMsgLive ? "typing..." : ""}
              </span>
            </p>
          </div>
        )}
      </>
    );
  };
  