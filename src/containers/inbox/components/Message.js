import React from "react";
import { format } from "timeago.js";


export const Message = (props) => {
  let name = "";
  let classes = "middle";
  let classes2 = "";
  let reply = "";
  if (props.data) {
    name = props.own ? "" : props.data.name;
    classes = props.own ? "float-right clear-both" : "float-left clear-both";
    classes2 = props.own ? "bg-gray-300" : "bg-white";
  }
  if (props.data.reply) {
    reply = props.data.reply.name === props.user ? "bg-gray-300" : "bg-white";
  }
  if (props.friend) {
    classes2 = "bg-yellow-100";
  }

  return (
    <>
        <div ref={props.scrollRef} className={"message_box " + classes}>

          <div onClick={() => { props.selectMsg(props.data) }}
            className={"overflow-x-hidden px-1 py-1 rounded-xl cursor-default " + classes2}
          >

            {props.data.reply ? <div className={"opacity-80 px-3 pb-1 rounded-xl cursor-default " + reply}>
              <p className="text-xs text-gray-500">
                {props.data.reply.name === props.user ? "you" : props.data.reply.name}
              </p>
              <p className="text-xs truncate pb-0.5">
                {props.data.reply.message}
              </p>
              <hr className="border-black" />
            </div> : <></>}

            <p className="px-2.5 py-0.5">{props.data.message}</p>
          </div>
          <p
            className={
              props.own
                ? "justify-end flex text-xs p-0 m-0"
                : "justify-start flex text-xsm p-0 m-0"
            }
          >
            <span className="text-white opacity-80 cursor-default">
              {props.friend ? <label>typing...</label> :
                <>  <label className="text-xs text-white opacity-70">{name} </label>
                  {props.data.time ? format(props.data.time) : ""}</>
              }
            </span>
          </p>
        </div>
    </>
  );
};
