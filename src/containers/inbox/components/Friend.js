import React from "react";
import { Link } from "react-router-dom";

export const Friend = (props) => {
  var active = false;
  // console.log(props.actives);
  // console.log(props.data.to_user_name);
  for (let i = 0; i < props.actives.length; i++) {
    active =
      props.actives[i].user_name === props.data.to_user_name ? true : false;
      if (active) {
        break;
      }
    console.log(props.actives[i].user_name);
  }

  return (
    <>
      <Link to={props.data.chat_id} className="">
        <div className="flex cursor-pointer mt-0.5 px-2 py-2 hover:bg-background-301 text-light-101">
          <div className="h-10 w-10 relative rounded-full bg-white">
            {active ? (
              <>
                <div className="h-2 w-2 rounded-full absolute bottom-0 right-1 bg-green-400"></div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="ml-2 flex-grow">
            <h4 className="font-medium text-sm">{props.data.to_user_name}</h4>
            <p className="text-xs text-light-401 truncate">Hellloooooooo...</p>
          </div>
        </div>
        {/* </div> */}
      </Link>
    </>
  );
};
