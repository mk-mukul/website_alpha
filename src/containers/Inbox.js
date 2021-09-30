import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

// import { Link } from "react-router-dom";

import { io } from "socket.io-client";
// import { animateScroll } from 'react-scroll'

// import "../style/chats.css";
import "../script/chats";
// import { Link } from "react-router-dom";

const URL = process.env.REACT_APP_SERVER;
const GET_URL = process.env.REACT_APP_SERVER + "/add/chats";
const SEND_URL = process.env.REACT_APP_SERVER + "/update/chat";
// console.log(URL)

export const Inbox = (props) => {
  // console.log(props.user.chats_id);

  const [msg, setMsg] = useState("");
  const [currentChat, setCurrentChat] = useState(null);
  const [addFrndInp, setAddFrndInp] = useState("");
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
    if (inMsg && currentChat === inMsg.name) {
      setMeassages((prev) => [...prev, inMsg]);
    }
  }, [inMsg, currentChat]);

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

  const [chat_window, setChat_windoe] = useState("hidden")
  const [chat_list, setChat_list] = useState("flex")
  const openChat = async (user_name) => {
    const messages = await getChat(user_name);
    setCurrentChat(user_name);
    setChat_windoe("flex");
    setChat_list("hidden");
    setMeassages(messages);
  };
  const back = () =>{
    // console.log("i am back")
    setChat_windoe("hidden");
    setChat_list("flex");
  }


  const addFriend = async (e) => {
    e.preventDefault();
    if (addFrndInp) {
      console.log(addFrndInp);
      const chat = await getChat(addFrndInp);
      if (chat) {
        window.location.reload();
      }
    }
  };

  return (
    <>
      <section className="flex sm:pt-16 h-screen justify-center">
        <div className="flex h-full border-2 rounded-lg">
          <div className={ chat_list+" chat_list mt-16 sm:mt-0 w-screen sm:w-auto bg-gray-500 sm:flex flex-col"}>
            <div className="grid justify-center bg-gray-700 text-white px-1 py-3">
              <h2>{props.user.user_name}</h2>
            </div>
            <div className="overflow-y-auto">
              {props.user.chats_id.map((val, ind) => {
                return <Friend key={ind} data={val} openChat={openChat} />;
              })}
              <div className="flex flex-col m-1">
                <input
                  type="text"
                  placeholder="Enter friend's user name"
                  value={addFrndInp}
                  onChange={(e) => setAddFrndInp(e.currentTarget.value)}
                />
                <button
                  className="m-1"
                  onClick={(e) => {
                    addFriend(e);
                  }}
                >
                  Add friend
                </button>
              </div>
            </div>
          </div>
          <div className={chat_window+" sm:flex h-screen sm:h-auto z-50 sm:z-0 flex-col w-screen sm:w-96 bg-blue-600"}>
            {currentChat ? (
              <>
                <ChatWindow
                  currentChat={currentChat}
                  messages={messages}
                  scrollRef={scrollRef}
                  user={props.user.user_name}
                  msg={msg}
                  setMsg={setMsg}
                  submit={submit}
                  back={back}
                />
              </>
            ) : (
              <>
                <span className="flex justify-center text-6xl mt-16 text-white p-3 opacity-50 cursor-default">
                  open a chat
                </span>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

const ChatWindow = (props) => {

  return (
    <>
      <div className="flex justify-center p-3 bg-gray-700 opacity-90 text-white">
        <div onClick={()=>{props.back()}} className="sm:hidden absolute left-3 text-white cursor-pointer">
          <ArrowBackIosNewRoundedIcon />
        </div>
        <h2>{props.currentChat}</h2>
      </div>
      <div className="flex-grow overflow-y-auto" id="scrollBottom">
        {props.messages.map((val, ind) => {
          return (
            //   <div>
            <Message
              key={ind}
              user={props.user}
              data={val}
              scrollRef={props.scrollRef}
            />
            //   </div>
          );
        })}
      </div>
      <form className="flex h-12" id="chats-send-container">
        <input
          className="w-full p-2.5"
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
    alert("user not found");
  }
};

const Friend = (props) => {
  // console.log(props.data.to_user_name);
  return (
    <>
      <div
        onClick={() => {
          props.openChat(props.data.to_user_name);
        }}
      >
        <div className="flex sm:justify-center cursor-pointer mt-0.5 px-4 py-2 bg-gray-300">
          <h3>{props.data.to_user_name}</h3>
        </div>
      </div>
    </>
  );
};

const Message = (props) => {
  let name = "";
  let classes = "middle";
  let classes2 = "";
  if (props.data.name) {
    name = props.data.name === props.user ? "" : props.data.name;
    classes =
      props.data.name === props.user
        ? "float-right clear-both"
        : "float-left clear-both";
    classes2 = props.data.name === props.user ? "bg-gray-300" : "bg-white";
  }

  // console.log(classes)
  return (
    <>
      <div ref={props.scrollRef} className={"message_box " + classes}>
        <label className="text-sm text-white opacity-40">{name}</label>
        <p className={"px-3.5 py-1.5 rounded-xl " + classes2}>
          {props.data.message}
        </p>
      </div>
    </>
  );
};
