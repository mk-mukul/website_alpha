import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

import { io } from "socket.io-client";
// import { animateScroll } from 'react-scroll'

import "../style/chats.css";
import "../script/chats";

const URL = process.env.REACT_APP_SERVER;
// console.log(URL)

let currentMessages = [];
// console.log(currentMessages)

export const Inbox = (props) => {
  // console.log(props.user.user_name)
  
  const [msg, setMsg] = useState("");
  const [inMsg, setInMsg] = useState(null);
  const [messages, setMeassages] = useState(currentMessages);
  const socket = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    socket.current= io(URL);
    socket.current.on("getMessage", data =>{
      setInMsg({
        message: data.message,
        name: data.from_user_name,
      });
    });
  }, [])

  useEffect(() => {
    inMsg && 
    setMeassages([...messages, inMsg])
  }, [inMsg])

  useEffect(() => {
    socket.current.emit("addUser", props.user.user_name);
    console.log(socket)
    socket.current.on("getUsers", users=>{
      console.log(users);
    })
  }, [props.user]);

  const submit = (e) => {
    e.preventDefault();
    if (msg) {
      const to_user_name = "test"
      socket.current.emit("sendMessage", {
        from_user_name: props.user.user_name,
        to_user_name: to_user_name,
        message: msg
      });

      const data = {
        message: msg,
        name: props.user.user_name,
      };
      setMeassages([...messages, data]);
      currentMessages.push(data);
      setMsg("");
      console.log(data);
    }
  };


  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <section className="chats_page">
        <div className="partition">
          {/* <div className="chat_list">
                    <div className="user_name">
                        <h2>{props.user.user_name}</h2>
                    </div>
                </div> */}
          <div className="chat_window">
            <div className="chats_display scroll-y" id="scrollBottom">
              {/* <div className="message right">Rohan: Hey how are you?</div>
                        <div className="message left">Harry: I am fine rohan.fasdasfa sdsaffsafsdfa sdfasfdsfasdfasdfasfas dfasd</div> */}
              {messages.map((val, ind) => {
                return (
                //   <div>
                    <Message
                      key={ind}
                      user={props.user.user_name}
                      data={val}
                      scrollRef={scrollRef}
                    />
                //   </div>
                );
              })}
            </div>

            <form className="send" id="chats-send-container">
              <input
                className="formchat"
                type="text"
                placeholder=" Message..."
                value={msg}
                onChange={(e) => setMsg(e.currentTarget.value)}
                id="chats-messageInp"
                onKeyDownCapture={(e) => (e.key === "Enter" ? submit(e) : null)}
              />
              <button
                className="btn"
                id="chats-btn"
                onClick={(e) => {
                  submit(e);
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

const Message = (props) => {

  let name = "";
  let classes = "middle";
  if (props.data.name) {
    name = props.data.name === props.user ? "" : props.data.name;
    classes = props.data.name === props.user ? "right" : "left";
  }

  // console.log(classes)
  return (
    <>
      <div ref={props.scrollRef} className={"message_box " + classes}>
        <label className="message_label">{name}</label>
        <p className={"message message_" + classes}>{props.data.message}</p>
      </div>
    </>
  );
};
