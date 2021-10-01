import React, { useState, useEffect, useRef } from "react";
// import React, { useState } from "react";
import Cookies from "js-cookie";
import { io } from "socket.io-client";
import "../../script/chats";
import { Friend } from "./components/Friend";
import { ChatWindow } from "./components/ChatWindow";
import { Route, Switch } from "react-router";

// import TimeAgo from "timeago-react";
// import { Link } from "react-router-dom";
// import "../style/chats.css";
// import { Link } from "react-router-dom";

const URL = process.env.REACT_APP_SERVER;
const GET_URL = process.env.REACT_APP_SERVER + "/add/chats";
// const SEND_URL = process.env.REACT_APP_SERVER + "/update/chat";
// console.log(URL)

export const Inbox = (props) => {

  const [addFrndInp, setAddFrndInp] = useState("");
  const socket = useRef();

  useEffect(() => {
    // console.log("props user change")
    socket.current = io(URL);
    socket.current.emit("addUser", {user_name: props.user.user_name, user_id: props.user._id });
    socket.current.on("getUsers", (users) => {
      // console.log(users);
    });
  }, [props.user]);

  const path = window.location.pathname.split("/").slice(2,4);
  // console.log(path[0])
  // console.log(path[1])

  const [chat_window, setChat_windoe] = useState("hidden");
  const [chat_list, setChat_list] = useState("flex");
  useEffect(() => {
    if (path[0]==="inbox" && path[1] ) {
      // console.log("chat open")
      setChat_windoe("flex");
      setChat_list("hidden");
    } else {
      setChat_windoe("hidden");
      setChat_list("flex");
    }
  }, [path])

  const addFriend = async (e) => {
    e.preventDefault();
    if (addFrndInp) {
      console.log(addFrndInp);
      const chat = await addChat(addFrndInp);
      if (chat) {
        window.location.reload();
      }
    }
  };

  return (
    <>
      <section className="flex sm:pt-16 h-screen justify-center">
        <div className="flex h-full sm:border-2 rounded-lg">
          <div
            className={
              chat_list +
              " chat_list mt-16 sm:mt-0 w-screen sm:w-auto bg-gray-500 sm:flex flex-col"
            }
          >
            <div className="grid justify-center bg-gray-700 text-white px-1 py-3">
              <h2>{props.user.user_name}</h2>
            </div>

            <div className="overflow-y-auto">
              {props.user.chats_id.map((val, ind) => {
                return <Friend key={ind} data={val} />;
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
          <div
            className={
              chat_window +
              " sm:flex h-screen sm:h-auto z-50 sm:z-0 flex-col w-screen sm:w-96 bg-blue-600"
            }
          >
            <Switch>
              <Route
                exact
                path={process.env.PUBLIC_URL + "/inbox/"}
                render={() => {
                  return (
                    <>
                      <span className="flex justify-center text-6xl mt-16 text-white p-3 opacity-50 cursor-default">
                        open a chat
                      </span>
                    </>
                  );
                }}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/inbox/:id"}
                render={(props) => {
                  // console.log(props.match.params.id);
                  // console.log(props);
                  return (
                    <>
                      <ChatWindow
                        chat_id={props.match.params.id}
                        // currentChat={currentChat}
                        // messages={messages}
                        // scrollRef={scrollRef}
                        // user={props.user.user_name}
                        // msg={msg}
                        // setMsg={setMsg}
                        // submit={submit}
                        // back={back}
                        // inMsgLive={inMsgLive}
                      />
                    </>
                  );
                }}
              />
            </Switch>
            {/* {currentChat ? (
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
                  inMsgLive={inMsgLive}
                />
              </>
            ) : (
              <>
                <span className="flex justify-center text-6xl mt-16 text-white p-3 opacity-50 cursor-default">
                  open a chat
                </span>
              </>
            )} */}
          </div>
        </div>
      </section>
    </>
  );
};

const addChat = async (chat_id) => {
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


// const updateChat = async (to_user_name, message) => {
//   const token = Cookies.get("token");
//   try {
//     // const res =
//     await fetch(SEND_URL, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: token,
//       },
//       body: JSON.stringify({
//         to_user_name,
//         message,
//       }),
//     });
//     // const result = await res.json();
//     // console.log(res);
//   } catch (err) {
//     console.log(err);
//     alert("Something went wrong");
//   }
// };

