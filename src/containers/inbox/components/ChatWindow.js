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
const GET_URL = process.env.REACT_APP_SERVER + "/chats/";
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
  const [chatId, setChatId] = useState(null);
  const [selectedMsg, setSelectedMsg] = useState(null);
  const [actives, setActives] = useState([]);
  const [isActive, setIsActives] = useState(false);
  const [seen, setSeen] = useState(false);
  const [mySeen, setMySeen] = useState(true);
  const [seenTime, setSeenTime] = useState("");
  const [lastSeen, setLastSeen] = useState(null);
  const [settings, setSettings] = useState({});
  const [showTyping, setShowTyping] = useState(true);

  const socket = useRef();
  const scrollRef = useRef();
  const inputMessageRef = useRef();

  useEffect(() => {
    let unMounted = false;
    if (!unMounted) {
      if (chatId !== props.chat_id) {
        setChatId(null);
        setMeassages([]);
        setCurrentChat("");
        setUserName(null);
        setSeen(false);
        setSeenTime("");
        setMySeen(true);
        setLastSeen(null);
        setSelectedMsg(null);
        setMsg("");
        setInMsg(null);
        setMsgLive({
          from_user_name: "",
          message: "",
        });
      }
    }
    return () => {
      unMounted = true;
    };
  }, [props.chat_id, chatId]);

  // get message from socket io
  useEffect(() => {
    let unMounted = false;
    if (!unMounted) {
      socket.current = io(URL);
      socket.current.on("getMessage", (data) => {
        if (!unMounted) {
          setInMsg(data);
        }
        setMsgLive({ from_user_name: "", message: "" });
      });
      socket.current.on("getMsgLive", (data) => {
        if (!unMounted) {
          setInMsgLive(data);
        }
      });
    }
    return () => {
      unMounted = true;
    };
  }, []);

  // inform socket io that user has joined
  useEffect(() => {
    let unMounted = false;
    if (!unMounted) {
      if (userName) {
        socket.current.emit("addUser", { user_name: userName });
      }
    }
    return () => {
      unMounted = true;
    };
  }, [userName]);

  useEffect(() => {
    let unMounted = false;
    if (!unMounted) {
      socket.current.on("getUsers", (users) => {
        if (!unMounted) {
          setActives(users);
        }
      });
      socket.current.on("getSeen", (data) => {
        if (data.from_user_name === currentChat) {
          if (!unMounted) {
            setSeen(true);
            setSeenTime(data.seenTime);
            // console.log(data);
          }
        }
      });
    }
    return () => {
      unMounted = true;
    };
  }, [currentChat]);

  // find whether friend is active or not
  useEffect(() => {
    let unMounted = false;
    if (!unMounted) {
      setIsActives(false);
      setMsgLive({
        from_user_name: "",
        message: "",
      });
    }
    for (let i = 0; i < actives.length; i++) {
      if (actives[i].user_name === currentChat) {
        if (!unMounted) {
          setIsActives(true);
        }
      }
    }
    return () => {
      unMounted = true;
    };
  }, [currentChat, actives]);

  // set active on offline
  useEffect(() => {
    let unMounted = false;
    if (!unMounted) {
      if (isActive === false) {
        setLastSeen(new Date());
      }
    }
    return () => {
      unMounted = true;
    };
  }, [isActive]);

  // display live typing...
  useEffect(() => {
    let unMounted = false;
    if (inMsgLive && currentChat === inMsgLive.from_user_name) {
      if (!unMounted) {
        setMsgLive(inMsgLive);
      }
    }
    return () => {
      unMounted = true;
    };
  }, [inMsgLive, currentChat]);

  // desplay new message
  useEffect(() => {
    let unMounted = false;
    if (
      inMsg &&
      (currentChat === inMsg.from_user_name ||
        userName === inMsg.from_user_name)
    ) {
      if (!unMounted) {
        setMeassages((prev) => [inMsg, ...prev]);
        setInMsg(null);
      }
      socket.current.emit("seen", {
        from_user_name: userName,
        to_user_name: currentChat,
        name: userName,
        isSeen: true,
        lastMsg: inMsg,
        seenTime: new Date(),
        from: "live",
      });
      socket.current.emit("self", {
        from_user_name: userName,
        to_user_name: currentChat,
        name: userName,
        lastMsg: inMsg,
        from: "live",
      });
    }
    setInMsg(null);
    return () => {
      unMounted = true;
    };
  }, [inMsg, currentChat, userName]);

  // send seen status
  useEffect(() => {
    let unMounted = false;
    const lastMsg = messages.length > 0 ? messages[0] : "";
    if (
      !mySeen &&
      !unMounted &&
      currentChat === lastMsg.name &&
      lastMsg.name !== userName &&
      userName
    ) {
      socket.current.emit("seen", {
        from_user_name: userName,
        to_user_name: currentChat,
        name: userName,
        isSeen: true,
        lastMsg: lastMsg,
        seenTime: new Date(),
        from: "open",
      });
      socket.current.emit("self", {
        from_user_name: userName,
        to_user_name: currentChat,
        name: userName,
        lastMsg: lastMsg,
        from: "open",
      });
    }
    return () => {
      unMounted = true;
    };
  }, [currentChat, userName, messages, mySeen]);

  // fetch chat data
  useEffect(() => {
    let unMounted = false;
    async function fetchData() {
      try {
        const data = await getChat(props.chat_id, setLastSeen, setSettings);
        if (!data) {
          return;
        }
        if (!unMounted) {
          setChatId(data.chat_id);
          setMeassages(reverseArr(data.chat_data));
          setCurrentChat(data.chats_of.with);
          setUserName(data.chats_of.owner);
          setSeen(data.seen);
          setSeenTime(data.updatedAt);
          setMySeen(data.mySeen);
        }
        inputMessageRef.current.focus();
        setTimeout(() => {
          scrollRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 1000);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    return () => {
      unMounted = true;
    };
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
      setSeen(false);
      setMeassages([data, ...messages]);
      setMsg("");
      setSelectedMsg(null);
    }
    inputMessageRef.current.focus();
  };

  // send live typing...
  useEffect(() => {
    const to_user_name = currentChat;
    if (showTyping) {
      socket.current.emit("sendMsgLive", {
        from_user_name: userName,
        to_user_name: to_user_name,
        name: to_user_name,
        message: msg,
        reply: selectedMsg,
      });
    }
  }, [msg, currentChat, userName, selectedMsg, showTyping]);

  // automatic scroll
  useEffect(() => {
    let unMounted = false;
    if (!unMounted) {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    return () => {
      unMounted = true;
    };
  }, [messages, msgLive]);

  // set selected message for reply
  const selectMsg = (data) => {
    inputMessageRef.current.focus();
    let unMounted = false;
    if (!unMounted) {
      setSelectedMsg(data);
      // setTimeout(() => {
      //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      // }, 1000);
    }
    return () => {
      unMounted = true;
    };
  };

  useEffect(() => {
    let unMounted = false;
    if (!unMounted) {
      setShowTyping(settings.showTyping);
    }
    return () => {
      unMounted = true;
    };
  }, [settings]);

  const info = () => {
    // console.log(chatId);
    // console.log(props.chat_id);
  };

  return (
    <>
      {props.chat_id !== chatId ? (
        <>
          {false ? (
            <></>
          ) : (
            <span className="flex justify-center text-6xl mt-16 text-primary-101 p-3 opacity-50 cursor-default">
              Loading...
            </span>
          )}
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
            <div className="relative grid justify-items-center cursor-default">
              <h3>{currentChat}</h3>
              {isActive ? (
                <>
                  <div className="pl-2.5 text-xsm relative flex">
                    <div className="w-1.5 h-1.5 absolute rounded-full top-1 left-0 bg-green-400"></div>
                    Active now
                  </div>
                </>
              ) : lastSeen ? (
                <div className="text-xsm">{"Active " + format(lastSeen)}</div>
              ) : (
                <></>
              )}
            </div>
            <div onClick={() => info()} className="cursor-not-allowed ">
              <InfoIcon />
            </div>
          </div>
          <div
            className="flex-grow flex flex-col-reverse pt-16 pb-2 overflow-y-auto"
            id="scrollBottom"
          >
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
            {messages.map((val, ind) => {
              const last = messages.length === ind + 1;
              const own = userName === val.name;
              const first = ind === 0;
              return (
                <Message
                  key={ind}
                  first={first}
                  last={last}
                  user={userName}
                  data={val}
                  own={own}
                  scrollRef={scrollRef}
                  selectMsg={selectMsg}
                  isSeen={seen}
                  seenTime={seenTime}
                />
              );
            })}
          </div>

          <div>
            {selectedMsg ? (
              <>
                <div className="clear-both px-3 py-1 bg-background-301">
                  <div className="flex text-sm justify-between items-center text-light-301 opacity-60">
                    {selectedMsg.name === userName ? "you" : selectedMsg.name}
                    <div
                      onClick={() => {
                        setSelectedMsg(null);
                        inputMessageRef.current.focus();
                      }}
                      className="mr-1 cursor-pointer"
                    >
                      <ClearRoundedIcon fontSize="medium" />
                    </div>
                  </div>
                  <div className="truncate text-sm pt-1 pb-2 text-light-101 ">
                    {selectedMsg.message}
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            <form className=" bottom-0 w-full flex " id="chats-send-container">
              <input
                className="flex-grow p-2.5"
                type="text"
                placeholder=" Message..."
                ref={inputMessageRef}
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
          </div>
        </>
      )}
    </>
  );
};

const reverseArr = (arr) => {
  const reverseArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i]);
  }
  // console.log(reverseArray);
  return reverseArray;
};

const getChat = async (chat_id, setLastSeen, setSettings) => {
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
    const data = await res.json();
    setLastSeen(data.lastSeen);
    setSettings(data.settings);
    return data.chat;
  } catch (err) {
    console.log(err);

    return false;
    // alert("user not found");
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
    // alert("Something went wrong, Please Refress the page");
  }
};
