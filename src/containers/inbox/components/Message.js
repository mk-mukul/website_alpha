import React, { useEffect, useState } from "react";
import { format } from "timeago.js";
import ReplyIcon from "@mui/icons-material/Reply";

export const Message = (props) => {
  // let name = "";
  let classes = "middle";
  let classes2 = "";
  let reply = "";
  if (props.data) {
    // name = props.own ? "" : props.data.name;
    classes = props.own ? " flex-row-reverse pl-6" : "pr-6";
    classes2 = props.own ? "bg-background-501" : "bg-background-401";
  }
  if (props.data.reply) {
    reply =
      props.data.reply.name === props.user
        ? "bg-background-501"
        : "bg-background-401";
  }
  if (props.friend) {
    classes2 = "bg-background-201";
  }

  const [isTime, setIsTime] = useState(props.first);
  const time = () => {
    isTime ? setIsTime(false) : setIsTime(true);
    // console.log(props.first && !props.isSeen)
  };
  useEffect(() => {
    setIsTime(props.first && !props.isSeen);
  }, [props.first, props.isSeen]);

  const [isReply, setIsReply] = useState("truncate");
  const showReply = () => {
    isReply ? setIsReply("") : setIsReply("truncate");
  };

  return (
    <>
      <div
        ref={props.first ? props.scrollRef : null}
        className={"w-full clear-both mb-1 px-2"}
      >
        <div className={"flex " + classes}>
          <div
            className={
              " overflow-x-hidden px-1 py-1 rounded-xl cursor-default " +
              classes2
            }
          >
            {props.data.reply ? (
              <div
                onClick={() => showReply()}
                className={
                  " px-3 pb-1 border-black rounded-xl cursor-pointer " + reply
                }
              >
                <p className="text-xs text-light-701">
                  {props.data.reply.name === props.user
                    ? "you"
                    : props.data.reply.name}
                </p>
                <p className={"text-xs text-light-501 pb-0.5 " + isReply}>
                  {props.data.reply.message}
                </p>
                <hr className="border-white opacity-20" />
              </div>
            ) : (
              <></>
            )}
            <div
              className="px-2.5 py-0.5 text-light-201 text-sm"
              onClick={() => {
                time();
              }}
            >
              <p className="">{props.data.message}</p>
            </div>
          </div>
          {props.friend ? (
            <></>
          ) : (
            <div
              className="flex cursor-pointer text-white opacity-10 hover:opacity-80 flex-col mx-1 justify-center"
              onClick={() => {
                props.selectMsg(props.data);
              }}
            >
              <ReplyIcon />
            </div>
          )}
        </div>
        <div
          className={
            props.own
              ? "justify-end flex text-xsm p-0 m-0"
              : "justify-start flex text-xsm p-0 m-0"
          }
        >
          <span className="text-white opacity-80 cursor-default">
            {props.friend ? <label>typing...</label> : <></>}
            {isTime ? (
              <>
                {/* <label className="text-xs text-white opacity-70">{name} </label> */}
                {props.data.time ? format(props.data.time) : ""}
              </>
            ) : (
              <>
                {props.first && props.isSeen && props.own ? (
                  <div className="flex justify-end">seen {props.seenTime?format(props.seenTime):""}</div>
                ) : (
                  ""
                )}
              </>
            )}
          </span>
        </div>
      </div>
    </>
  );
};
