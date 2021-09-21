import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";

// import { Link } from "react-router-dom";

import { io } from "socket.io-client";
// import { animateScroll } from 'react-scroll'

import "../style/chats.css";
import "../script/chats";

const URL = process.env.REACT_APP_SERVER;
const GET_URL = process.env.REACT_APP_SERVER + "/add/chats";
const SEND_URL = process.env.REACT_APP_SERVER + "/update/chat";
// console.log(URL)

export const Inbox = (props) => {
  // console.log(props.user.chats_id);

  const [msg, setMsg] = useState("");
  const [currentChat, setCurrentChat] = useState(null);
  const [inMsg, setInMsg] = useState(null);
  const [messages, setMeassages] = useState([]);
  const socket = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io(URL);
    socket.current.on("getMessage", (data) => {
      setInMsg({
        message: data.message,
        name: data.from_user_name,
      });
    });
  }, []);

  useEffect(() => {
    inMsg && setMeassages((prev) => [...prev, inMsg]);
  }, [inMsg]);

  useEffect(() => {
    socket.current.emit("addUser", props.user.user_name);
    // console.log(socket)
    socket.current.on("getUsers", (users) => {
      // console.log(users);
    });
  }, [props.user]);

  const submit = (e) => {
    e.preventDefault();
    if (msg) {
      const to_user_name = currentChat;
      socket.current.emit("sendMessage", {
        from_user_name: props.user.user_name,
        to_user_name: to_user_name,
        message: msg,
      });

      const data = {
        message: msg,
        name: props.user.user_name,
      };
      updateChat(currentChat, data);
      setMeassages([...messages, data]);
      setMsg("");
      // console.log(data);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const openChat = async (user_name) => {
    // console.log("open chat run");
    const messages = await getChat(user_name);
    setCurrentChat(user_name);
    // console.log(messages);
    setMeassages(messages);
  };

  return (
    <>
      <section className="chats_page">
        <div className="partition">
          <div className="chat_list">
            <div className="user_name">
              <h2>{props.user.user_name}</h2>
            </div>
            <div className="chat_wrapper">
              {props.user.chats_id.map((val, ind) => {
                return <Friend key={ind} data={val} openChat={openChat} />;
              })}
            </div>
          </div>
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
              <button className="btn" id="chats-btn" onClick={(e) =>{submit(e);}}>Send</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};






const updateChat = async (to_user_name, message) => {
  const token = Cookies.get("token");
  try {
    // const res = 
    await fetch(SEND_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        to_user_name,
        message,
      }),
    });
    // const result = await res.json();
    // console.log(res);
  } catch (err) {
    console.log(err);
    alert("Something went wrong");
  }
};


const getChat = async (chat_id) => {
  const token = Cookies.get("token");
  try {
    const res = await fetch(GET_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        user_name: chat_id,
      }),
    });
    const messages = await res.json();
    // console.log(messages);
    return messages;
  } catch (err) {
    console.log(err);
    alert("Something went wrong");
  }
};


const Friend = (props) => {
  // console.log(props.data.to_user_name);
  return (
    <>
      <div onClick={() => {props.openChat(props.data.to_user_name);}}>
        <div className="chat">
          <h2>{props.data.to_user_name}</h2>
        </div>
      </div>
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
