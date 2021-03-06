import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { io } from "socket.io-client";
import { Friend } from "./components/Friend";
import { ChatWindow } from "./components/ChatWindow";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
// import LogoutIcon from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import VolumeUpIcon from "@mui/icons-material/VolumeUp";
// import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import message_in from "../../assets/sounds/message_in.mp3";

const URL = process.env.REACT_APP_SERVER;
const GET_URL = process.env.REACT_APP_SERVER + "/add/chats";
const SETINGS_URL = process.env.REACT_APP_SERVER + "/update/settings";

export const Inbox = (props) => {
  const [addFrndInp, setAddFrndInp] = useState("");
  const [actives, setActives] = useState([]);
  const [friends, setFriends] = useState(props.user.chats_id);
  // const [inMsg, setInMsg] = useState(null);
  const [getMessage, setGetMessage] = useState(null);
  const [playSound, setPlaySound] = useState(
    props.user.settings.notificationSound
  );
  const [showTyping, setShowTyping] = useState(props.user.settings.showTyping);

  const [isOptions, setIsOptions] = useState(false);

  const [seenData, setSeenData] = useState(null);
  const [mySeenData, setMySeenData] = useState(null);

  const socket = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    let unMounted = false;
    if (!unMounted) {
      socket.current = io(URL);
      socket.current.emit("addUser", {
        user_name: props.user.user_name,
        user_id: props.user._id,
      });
      socket.current.on("getUsers", (users) => {
        setActives(users);
      });
      socket.current.on("getMessage", (data) => {
        setGetMessage(data);
      });
      socket.current.on("getSeen", (data) => {
        setSeenData(data);
      });
      socket.current.on("getSelf", (data) => {
        setMySeenData(data);
      });
    }
    return () => {
      unMounted = true;
    };
  }, [props.user]);

  // update incoming message in friends list
  useEffect(() => {
    let unMounted = false;
    const audio = new Audio(message_in);
    if (!unMounted) {
      if (getMessage) {
        const arr = friends;
        const i = updateFriends(arr, getMessage, props.user.user_name);
        if (i !== -1) {
          const data = friends[i];
          data.lastMsg = getMessage;
          data.seen = false;
          data.mySeen = false;
          // console.log(data.lastMsg.name)
          setFriends([...friends], (friends[i] = data));
          if (data.lastMsg.name !== props.user.user_name && playSound) {
            // audio.pause();
            audio.play();
          }
        }
        setGetMessage(null);
      }
    }
    return () => {
      unMounted = true;
    };
  }, [getMessage, friends, props.user, playSound]);

  // update seen by friends in message list
  useEffect(() => {
    let unMounted = false;
    if (!unMounted) {
      if (seenData) {
        const arr = friends;
        const i = updateFriends(arr, seenData, props.user.user_name);
        setSeenData(null);
        if (i !== -1) {
          setFriends([...friends], (friends[i].seen = true));
        }
      }
    }
    return () => {
      unMounted = true;
    };
  }, [seenData, friends, props.user]);

  // update seen my me in friends list
  useEffect(() => {
    let unMounted = false;
    if (!unMounted) {
      if (mySeenData) {
        const arr = friends;
        const i = updateFriends(arr, mySeenData, props.user.user_name);
        setMySeenData(null);
        if (i !== -1) {
          setFriends([...friends], (friends[i].mySeen = true));
        }
      }
    }
    return () => {
      unMounted = true;
    };
  }, [mySeenData, friends, props.user]);

  // logic for mobile or small device
  const path = window.location.pathname.split("/").slice(2, 4);
  const [chat_window, setChat_windoe] = useState("hidden");
  const [chat_list, setChat_list] = useState("flex");
  useEffect(() => {
    let unMounted = false;
    if (!unMounted) {
      if (path[0] === "inbox" && path[1]) {
        setChat_windoe("flex");
        setChat_list("hidden");
      } else {
        setChat_windoe("hidden");
        setChat_list("flex");
      }
    }
    return () => {
      unMounted = true;
    };
  }, [path]);

  // add new friend
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

  const logout = async () => {
    await Cookies.remove("token");
    window.location.reload();
  };

  useEffect(() => {
    let unMounted = false;
    if (!unMounted) {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    return () => {
      unMounted = true;
    };
  }, []);

  const updateSoundSetting = () => {
    updateSeetings("notificationSound", !playSound);
    setPlaySound(!playSound);
  };
  const updateShowTypingSetting = async () => {
    await updateSeetings("showTyping", !showTyping);
    setShowTyping(!showTyping);
    window.location.reload();
  };

  return (
    <>
      <section className="flex sm:pt-16 h-screen sm:pb-2 justify-center">
        <div className="flex h-full w-auto sm:border-2">
          <div
            className={
              chat_list +
              " chat_list z-50 sm:z-0 h-screen sm:h-auto w-screen sm:w-auto bg-background-701 sm:border-r-2 sm:flex flex-col"
            }
          >
            <div className=" z-50 w-full font-semibold sm:relative flex justify-between bg-background-801 text-light-101 px-3 py-3">
              <Link to={process.env.PUBLIC_URL + "/profile/"}>
                <div className="h-6 w-6 relative rounded-full bg-white"></div>
              </Link>
              <Link to={process.env.PUBLIC_URL + "/inbox/"}>
                <h3 className="cursor-pointer">{props.user.user_name}</h3>
              </Link>
              <div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setIsOptions((prev) => !prev);
                  }}
                >
                  <MoreVertIcon />
                </div>
              </div>
            </div>
            {isOptions ? (
              <>
                <div className="cursor-pointer text-light-101 grid p-3 gap-3 right-12 rounded-sm bg-background-801">
                  <div
                    className="flex"
                    onClick={() => {
                      updateSoundSetting();
                    }}
                  >
                    {playSound ? <>Mute</> : <>Unmute</>}
                  </div>
                  <div
                    className="flex"
                    onClick={() => {
                      updateShowTypingSetting();
                    }}
                  >
                    {showTyping ? <>Live Typing on</> : <>Live Typing off</>}
                  </div>
                  <div className="cursor-pointer" onClick={() => logout()}>
                    Logout
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}

            <div className="overflow-y-auto w-screen sm:w-60">
              {friends ? (
                sortTime(friends).map((val, ind) => {
                  return (
                    <Friend
                      key={val.chat_id}
                      data={val}
                      // user_name={props.user.user_name}
                      actives={actives}
                      scrollRef={ind === 0 ? scrollRef : null}
                      path={path[0] === "inbox" && path[1] ? path[1] : null}
                    />
                  );
                })
              ) : (
                <></>
              )}
              <div className="flex flex-col m-1">
                <input
                  className="rounded-sm"
                  type="text"
                  placeholder="Enter friend's user name"
                  value={addFrndInp}
                  onChange={(e) => setAddFrndInp(e.currentTarget.value)}
                />
                <button
                  className="mt-1 bg-background-301 text-light-101"
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
              " sm:flex h-screen sm:h-auto z-50 sm:z-0 flex-col w-screen sm:w-96 bg-background-701"
            }
          >
            <Switch>
              <Route
                exact
                path={process.env.PUBLIC_URL + "/inbox/"}
                render={() => {
                  return (
                    <>
                      <span className="flex justify-center text-3xl mt-16 text-primary-101 p-3 opacity-50 cursor-default">
                        Welcome to Alpha Chats
                      </span>
                    </>
                  );
                }}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/inbox/:id"}
                render={(props) => {
                  return (
                    <>
                      <ChatWindow chat_id={props.match.params.id} />
                    </>
                  );
                }}
              />
            </Switch>
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
    return messages;
  } catch (err) {
    console.log(err);
    alert("user not found");
  }
};

const sortTime = (chats_id) => {
  const chats = chats_id;
  chats.sort((a, b) => {
    if (a.lastMsg && b.lastMsg) {
      return a.lastMsg.time < b.lastMsg.time
        ? 1
        : b.lastMsg.time < a.lastMsg.time
        ? -1
        : 0;
    } else if (a.lastMsg && !b.lastMsg) {
      return -1;
    } else if (!a.lastMsg && b.lastMsg) {
      return 1;
    } else {
      return 0;
    }
  });
  return chats;
};

const updateFriends = (friends, data, user_name) => {
  // console.log(data)
  for (let i = 0; i < friends.length; i++) {
    if (
      friends[i].to_user_name === data.from_user_name &&
      friends[i].to_user_name !== user_name
    ) {
      return i;
    }
  }
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].to_user_name === data.to_user_name) {
      return i;
    }
  }
  return -1;
};

const updateSeetings = async (setting, value) => {
  const token = Cookies.get("token");
  try {
    // const res =
    await fetch(SETINGS_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ setting, value }),
    });
    // const result = await res.json();
    // console.log(res);
  } catch (err) {
    console.log(err);
    // alert("Something went wrong, Please Refress the page");
  }
};
