import React, { useState, useEffect, useRef } from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Message } from "./Message";
import Cookies from "js-cookie";
import { io } from "socket.io-client";
import { Link } from "react-router-dom";
// import { collapseClasses } from "@mui/material";

const URL = process.env.REACT_APP_SERVER;
const GET_URL = process.env.REACT_APP_SERVER + "/add/chats/";
const SEND_URL = process.env.REACT_APP_SERVER + "/update/chat";

export const ChatWindow = (props) => {
  // console.log(props.chat_id)
  const [msg, setMsg] = useState("");
  const [userName, setUserName] = useState(null);
  const [currentChat, setCurrentChat] = useState("");
  const [messages, setMeassages] = useState([]);
  const [inMsg, setInMsg] = useState(null);
  const [inMsgLive, setInMsgLive] = useState(null);
  const [msgLive, setMsgLive] = useState({
    from_user_name: "",
    message: "",
  });
  const socket = useRef();
  const scrollRef = useRef();

  const [chatData, setChatData] = useState(null);

  useEffect(() => {
    socket.current = io(URL);
    socket.current.on("getMessage", (data) => {
      // console.log(data);
      setInMsg({
        message: data.message,
        name: data.from_user_name,
        time: data.time,
      });

      setMsgLive({ from_user_name: "", message: "" });
    });
    socket.current.on("getMsgLive", (data) => {
      // if (data.from_user_name === currentChat) {
      //   setInMsgLive(data);
      // }
      setInMsgLive({
        from_user_name: data.from_user_name,
        message: data.message,
      });
      // console.log(inMsgLive);
    });
  }, []);

  useEffect(() => {
    if (userName) {
      socket.current.emit("addUser", { user_name: userName, user_id: "data" });
    }
  }, [userName]);

  useEffect(() => {
    // console.log(inMsgLive);
    if (inMsgLive && currentChat === inMsgLive.from_user_name) {
      setMsgLive(inMsgLive);
    }
    // else if (inMsgLive && currentChat !== inMsgLive.from_user_name) {
    //   setMsgLive({ from_user_name: "", message: "" });
    // }
  }, [inMsgLive, currentChat]);

  useEffect(() => {
    // console.log(inMsg);
    if (inMsg && currentChat === inMsg.name) {
      setMeassages((prev) => [...prev, inMsg]);
    }
  }, [inMsg, currentChat]);

  // const [chat_window, setChat_windoe] = useState("hidden");
  // const [chat_list, setChat_list] = useState("flex");
  useEffect(() => {
    async function fetchData() {
      const data = await getChat(props.chat_id);
      setChatData(data);
      // console.log(data);
      // setChat_windoe("flex");
      // setChat_list("hidden");
      setMeassages(data.chat_data);
      setCurrentChat(data.chats_of.with);
      setUserName(data.chats_of.owner);
    }
    fetchData();
  }, [props.chat_id]);

  const submit = (e) => {
    e.preventDefault();
    if (msg) {
      socket.current.emit("sendMessage", {
        from_user_name: userName,
        to_user_name: currentChat,
        message: msg,
        time: new Date(),
      });

      const data = {
        message: msg,
        name: userName,
        time: new Date(),
      };
      updateChat(currentChat, data);
      setMeassages([...messages, data]);
      // console.log(msg);f
      setMsg("");
      // setTimeout(() => {

      //   console.log(msg);
      // }, 1000);
    }
  };

  useEffect(() => {
    const to_user_name = currentChat;
    // console.log(to_user_name)
    socket.current.emit("sendMsgLive", {
      from_user_name: userName,
      to_user_name: to_user_name,
      message: msg,
    });
  }, [msg, currentChat, userName]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, msgLive]);

  return (
    <>
      {!chatData ? (
        <>
          <span className="flex justify-center text-6xl mt-16 text-white p-3 opacity-50 cursor-default">
            Loading...
          </span>
        </>
      ) : (
        <>
          <div className="fixed w-full z-10 sm:w-96 flex justify-center p-3 bg-gray-700 text-white">
            <Link
              to={process.env.PUBLIC_URL + "/inbox/"}
              className="sm:hidden absolute left-3 text-white cursor-pointer"
            >
              <ArrowBackIosNewRoundedIcon />
            </Link>
            <h2>{currentChat}</h2>
          </div>
          <div className="flex-grow pt-16 overflow-y-auto" id="scrollBottom">
            {messages.map((val, ind) => {
              return (
                //   <div>
                <Message
                  key={ind}
                  user={userName}
                  data={val}
                  own={userName === val.name}
                  scrollRef={scrollRef}
                />
                //   </div>
              );
            })}
            {msgLive.message ? (
              <>
                <Message
                  friend={currentChat}
                  inMsgLive={msgLive}
                  scrollRef={scrollRef}
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
              value={msg}
              onChange={(e) => setMsg(e.currentTarget.value)}
              id="chats-messageInp"
              onKeyDownCapture={(e) => (e.key === "Enter" ? submit(e) : null)}
            />
            <button
              className="px-4 border-none rounded-none"
              id="chats-btn"
              onClick={(e) => {
                submit(e);
              }}
            >
              Send
            </button>
          </form>
        </>
      )}
    </>
  );
};

const getChat = async (chat_id) => {
  const token = Cookies.get("token");
  try {
    const res = await fetch(GET_URL + chat_id, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const messages = await res.json();
    //   console.log(messages);
    return messages;
  } catch (err) {
    console.log(err);
    alert("user not found");
  }
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
