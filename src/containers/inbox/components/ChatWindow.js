import React from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Message } from "./Message";



export const ChatWindow = (props) => {
    return (
      <>
        <div className="fixed w-full z-10 sm:w-96 flex justify-center p-3 bg-gray-700 text-white">
          <div
            onClick={() => {
              props.back();
            }}
            className="sm:hidden absolute left-3 text-white cursor-pointer"
          >
            <ArrowBackIosNewRoundedIcon />
          </div>
          <h2>{props.currentChat}</h2>
        </div>
        <div className="flex-grow pt-16 overflow-y-auto" id="scrollBottom">
          {props.messages.map((val, ind) => {
            return (
              //   <div>
              <Message
                key={ind}
                user={props.user}
                data={val}
                own={props.user === val.name}
                scrollRef={props.scrollRef}
              />
              //   </div>
            );
          })}
          {props.inMsgLive.from_user_name === props.currentChat && props.inMsgLive.message ? (
            <>
              <Message
                friend={props.currentChat}
                inMsgLive={props.inMsgLive}
                scrollRef={props.scrollRef}
              />
            </>
          ) : (
            <></>
          )}
        </div>
        <form className="flex h-12" id="chats-send-container">
          <input
            className="flex-grow p-2.5"
            type="text"
            placeholder=" Message..."
            value={props.msg}
            onChange={(e) => props.setMsg(e.currentTarget.value)}
            id="chats-messageInp"
            onKeyDownCapture={(e) => (e.key === "Enter" ? props.submit(e) : null)}
          />
          <button
            className="px-4 border-none rounded-none"
            id="chats-btn"
            onClick={(e) => {
              props.submit(e);
            }}
          >
            Send
          </button>
        </form>
      </>
    );
  };
  