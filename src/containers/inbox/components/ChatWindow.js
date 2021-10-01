import React, { useState, useEffect, useRef } from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { Message } from "./Message";
import Cookies from "js-cookie";
import { io } from "socket.io-client";
import { Link } from "react-router-dom";

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
  const socket = useRef();
  const scrollRef = useRef();

  // get message from socket io
  useEffect(() => {
    socket.current = io(URL);
    socket.current.on("getMessage", (data) => {
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
      socket.current.emit("addUser", { user_name: userName, user_id: "data" });
    }
  }, [userName]);

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
    }
  }, [inMsg, currentChat]);

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
      setSelectedMsg(null)
    }
  };

  // send live typing...
  useEffect(() => {
    const to_user_name = currentChat;
    socket.current.emit("sendMsgLive", {
      from_user_name: userName,
      to_user_name: to_user_name,
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
    setSelectedMsg(data);
  };

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
          <div
            className="flex-grow pt-16 pb-2 overflow-y-auto"
            id="scrollBottom"
          >
            {messages.map((val, ind) => {
              return (
                <Message
                  key={ind}
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
              <div className="clear-both px-3 py-1 bg-white">
                <div className="flex justify-between text-gray-600">
                  {selectedMsg.name === userName ? "you" : selectedMsg.name}
                  <div onClick={() => { setSelectedMsg(null) }} className="mr-2"><ClearRoundedIcon /></div>
                </div>
                <div className="truncate ">{selectedMsg.message}</div>
              </div>
            </>
          ) : (
            <></>
          )}
          <form
            className="bottom-0 sm:static w-full flex "
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
