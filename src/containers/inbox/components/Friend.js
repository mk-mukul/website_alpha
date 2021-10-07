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
  // console.log(props.data)
//   {
//     "chat_id": "61490802a75fae2e5a28f38e614918442ace0cf953eac166",
//     "chat_with": {
//         "$oid": "614918442ace0cf953eac166"
//     },
//     "to_user_name": "test",
//     "lastMsg": {
//         "message": "xczxcvasd",
//         "name": "test",
//         "reply": null,
//         "time": "2021-10-07T19:31:31.045Z"
//     },
//     "seen": false,
//     "seenTime": {
//         "$date": "2021-10-07T10:20:39.372Z"
//     }
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
          <LastMsg user_name={props.user_name} data={props.data} />
        </div>
      </Link>
    </>
  );
};

const LastMsg = (props) => {
  let seenClass = "text-light-401";

  if (props.data.lastMsg) {
    if (props.data.lastMsg.name === props.data.to_user_name) {
      seenClass = props.data.mySeen
        ? "text-light-401"
        : "font-medium text-light-201 pl-3";
    }
  }
  // console.log(props.data.to_user_name)
  // console.log(props.data.lastMsg.name)
  return (
    <>
      <div className="pl-2 flex-grow w-20">
        <div className="flex justify-between">
          <h4 className="font-bold text-sm truncate">
            {props.data.to_user_name}
          </h4>
          <p className="text-xs text-light-401 truncate">
            {props.data.lastMsg
              ? props.data.lastMsg.time
                ? format(props.data.lastMsg.time)
                : ""
              : ""}
          </p>
        </div>
        {props.data.lastMsg ? (
          <div className="text-sm relative flex text-center text-light-401">
            {props.data.lastMsg.name !== props.data.to_user_name ? (
              <>
                {props.data.seen ? (
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
                {props.data.mySeen ? (
                  <></>
                ) : (
                  <>
                    <div className="h-2 w-2 absolute bottom-1 rounded-full bg-light-201"></div>
                  </>
                )}
              </>
            )}

            <p className={"truncate " + seenClass}>
              {props.data.lastMsg.message}
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
