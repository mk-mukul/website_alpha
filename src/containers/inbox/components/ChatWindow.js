import React, { useState, useEffect, useRef } from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { Message } from "./Message";
import Cookies from "js-cookie";
import { io } from "socket.io-client";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import SendIcon from "@mui/icons-material/Send";
import { format } from "timeago.js";

const URL = process.env.REACT_APP_SERVER;
const GET_URL = process.env.REACT_APP_SERVER + "/add/chats/";
const SEND_URL = process.env.REACT_APP_SERVER + "/update/chat";

export const ChatWindow = (props) => {
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
  const [chatData, setChatData] = useState(null);
  const [selectedMsg, setSelectedMsg] = useState(null);
  const [actives, setActives] = useState([]);
  const [isActive, setIsActives] = useState(false);

  const socket = useRef();
  const scrollRef = useRef();

  // get message from socket io
  useEffect(() => {
    socket.current = io(URL);
    socket.current.on("getMessage", (data) => {
      // console.log(data)
      setInMsg(data);
      setMsgLive({ from_user_name: "", message: "" });
    });
    socket.current.on("getMsgLive", (data) => {
      setInMsgLive(data);
    });
  }, []);

  // inform socket io that user has joined
  useEffect(() => {
    if (userName) {
      socket.current.emit("addUser", { user_name: userName });
    }
  }, [userName]);

  useEffect(() => {
    socket.current.on("getUsers", (users) => {
      setActives(users);
    });
  }, [currentChat]);

  // find whether friend is active or not
  useEffect(() => {
    setIsActives(false);
    for (let i = 0; i < actives.length; i++) {
      if (actives[i].user_name === currentChat) {
        setIsActives(true);
      }
    }
  }, [currentChat, actives]);

  // display live typing...
  useEffect(() => {
    if (inMsgLive && currentChat === inMsgLive.from_user_name) {
      setMsgLive(inMsgLive);
    }
  }, [inMsgLive, currentChat]);

  // desplay new message
  useEffect(() => {
    if (inMsg && currentChat === inMsg.from_user_name) {
      setMeassages((prev) => [...prev, inMsg]);
      socket.current.emit("seen", {
        from_user_name: userName,
        to_user_name: currentChat,
        name: userName,
        isSeen: true,
      });
    }
  }, [inMsg, currentChat, userName]);

  // send seen status
  useEffect(() => {
    socket.current.emit("seen", {
      from_user_name: userName,
      to_user_name: currentChat,
      name: userName,
      isSeen: true,
    });
  }, [currentChat, userName]);

  // fetch chat data
  useEffect(() => {
    async function fetchData() {
      const data = await getChat(props.chat_id);
      setChatData(data);
      setMeassages(data.chat_data);
      setCurrentChat(data.chats_of.with);
      setUserName(data.chats_of.owner);
    }
    fetchData();
  }, [props.chat_id]);

  // send message
  const submit = (e) => {
    e.preventDefault();
    if (msg) {
      socket.current.emit("sendMessage", {
        from_user_name: userName,
        to_user_name: currentChat,
        name: userName,
        message: msg,
        reply: selectedMsg,
        time: new Date(),
      });
      const data = {
        message: msg,
        name: userName,
        reply: selectedMsg,
        time: new Date(),
      };
      updateChat(currentChat, data);
      setMeassages([...messages, data]);
      setMsg("");
      setSelectedMsg(null);
    }
  };

  // send live typing...
  useEffect(() => {
    const to_user_name = currentChat;
    socket.current.emit("sendMsgLive", {
      from_user_name: userName,
      to_user_name: to_user_name,
      name: to_user_name,
      message: msg,
      reply: selectedMsg,
    });
  }, [msg, currentChat, userName, selectedMsg]);

  // automatic scroll
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, msgLive]);

  // set delected message for reply
  const selectMsg = (data) => {
    // console.log(data)
    setSelectedMsg(data);
  };

  const info = () => {
    console.log(currentChat);
  };

  return (
    <>
      {!chatData ? (
        <>
          <span className="flex justify-center text-6xl mt-16 text-primary-101 p-3 opacity-50 cursor-default">
            Loading...
          </span>
        </>
      ) : (
        <>
          <div className="fixed w-full z-10 sm:w-96 flex items-center justify-between py-2 px-3 bg-background-801 text-primary-101">
            <Link
              to={process.env.PUBLIC_URL + "/inbox/"}
              className=" cursor-pointer"
            >
              <ArrowBackIosNewRoundedIcon />
            </Link>
            <div className="relative grid justify-items-center">
              <h3>{currentChat}</h3>
              {isActive ? (
                <div className="text-xsm">online</div>
              ) : chatData.lastSeen ? (
                <div className="text-xsm">
                  {"Active " + format(chatData.lastSeen)}
                </div>
              ) : (
                <></>
              )}
            </div>
            <div onClick={() => info()} className="cursor-pointer">
              <InfoIcon />
            </div>
          </div>
          <div
            className="flex-grow pt-16 pb-2 overflow-y-auto"
            id="scrollBottom"
          >
            {messages.map((val, ind) => {
              return (
                <Message
                  key={ind}
                  last={messages.length === ind + 1}
                  user={userName}
                  data={val}
                  own={userName === val.name}
                  scrollRef={scrollRef}
                  selectMsg={selectMsg}
                />
              );
            })}
            {msgLive.message ? (
              <>
                <Message
                  user={userName}
                  friend={currentChat}
                  data={msgLive}
                  scrollRef={scrollRef}
                />
              </>
            ) : (
              <></>
            )}
          </div>
          {selectedMsg ? (
            <>
              <div className="clear-both px-3 py-1 bg-background-301">
                <div className="flex text-sm justify-between text-light-301 opacity-60">
                  {selectedMsg.name === userName ? "you" : selectedMsg.name}
                  <div
                    onClick={() => {
                      setSelectedMsg(null);
                    }}
                    className="mr-1"
                  >
                    <ClearRoundedIcon />
                  </div>
                </div>
                <div className="truncate text-sm text-light-101 ">
                  {selectedMsg.message}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          <form
            className=" bottom-0 sm:static w-full flex "
            id="chats-send-container"
          >
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
              className="px-4 border-none rounded-none text-light-101 bg-background-301"
              id="chats-btn"
              onClick={(e) => {
                submit(e);
              }}
            >
              <SendIcon />
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
