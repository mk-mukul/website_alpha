import React from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";

export const Friend = (props) => {
  var active = false;
  for (let i = 0; i < props.actives.length; i++) {
    active =
      props.actives[i].user_name === props.data.to_user_name ? true : false;
    if (active) {
      break;
    }
  }
  const mySeen = props.data.seen;
  // const [mySeen, setMySeen] = useState(props.data.seen);
  // const setSeen = () => {
  // if (props.data.lastMsg.name!==props.user_name) {
  // setMySeen(true);
  // }
  // }

  return (
    <>
      <Link to={props.data.chat_id} className="">
        <div
          ref={props.scrollRef ? props.scrollRef : null}
          className="flex cursor-pointer mt-0.5 px-2 py-2 hover:bg-background-301 text-light-101"
        >
          <div className="h-10 w-10 flex-shrink-0 relative rounded-full bg-light-301">
            {active ? (
              <>
                <div className="h-2.5 w-2.5 rounded-full absolute bottom-0 right-1 bg-green-400"></div>
              </>
            ) : (
              <></>
            )}
          </div>
          {[props.data.lastMsg].map((val, ind) => {
            return (
              <LastMsg
                key={ind}
                to_user_name={props.data.to_user_name}
                user_name={props.user_name}
                lastMsg={val}
                isSeen={props.data.seen}
                mySeen={mySeen}
              />
            );
          })}
        </div>
      </Link>
    </>
  );
};

const LastMsg = (props) => {
  let seenClass = "";

  if (props.lastMsg) {
    seenClass =
      props.mySeen || props.lastMsg.name === props.user_name
        ? "text-light-401"
        : "font-medium text-light-201 pl-2";
  }
  // if (props.lastMsg&&(props.isSeen || props.lastMsg.name === props.user_name)) {
  //   seenClass = "font-medium text-light-201";
  //   console.log("props.isSeen")
  // }
  return (
    <>
      <div className="pl-2 flex-grow w-20">
        <div className="flex justify-between">
          <h4 className="font-bold text-sm truncate">{props.to_user_name}</h4>
          <p className="text-xs text-light-401 truncate">
            {props.lastMsg
              ? props.lastMsg.time
                ? format(props.lastMsg.time)
                : ""
              : ""}
          </p>
        </div>
        {props.lastMsg ? (
          <div className="text-sm relative flex text-center text-light-401">
            {props.lastMsg.name === props.user_name ? (
              <>
                {props.isSeen ? (
                  <DoneAllRoundedIcon
                    fontSize="small"
                    className="text-blue-500"
                  />
                ) : (
                  <DoneRoundedIcon fontSize="small" />
                )}
              </>
            ) : (
              <>
                {props.mySeen || props.lastMsg.name === props.user_name ? (
                  <></>
                ) : (
                  <>
                    <div className="h-1 w-1 absolute bottom-1.5 rounded-full bg-light-201" ></div>
                  </>
                )}
              </>
            )}

            <p className={"truncate " + seenClass}>{props.lastMsg.message}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

// {props.mySeen || props.lastMsg.name === props.user_name ? (
//   <><div>54646</div></>
// ) : (
//   <></>
// )}
