import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const UPDATE_URL = process.env.REACT_APP_SERVER + "/update/link";

// console.log(UPDATE_URL)

let firstRun = true;
let initLinks = [];

export const AddData = (props) => {
  // console.log(props.data.user_data.user_name)

  // let initLinks = props.data.user_data.data;

  if (firstRun) {
    // console.log("first run")
    initLinks = props.data.user_data.data;
    firstRun = false
  }

  const onDelete = (link) => {
    // console.log("deleting the link ");
    setLinks(
      links.filter((e) => {
        return e !== link;
      })
    );
  };

  const addLink = (title, link) => {
    const newLink = {
      title: title,
      link: link,
    };
    setLinks([...links, newLink]);
    // console.log(newLink)
  };

  const [links, setLinks] = useState(initLinks);

  useEffect(() => {
    update(links);
    initLinks = links;
  }, [links]);

  return (
    <>
      <AddLink addLink={addLink} />
      <h3>
        Your link is available on{" "}
        <a href={process.env.PUBLIC_URL+"/page/" + props.data.user_data.user_name} target="blank">
          {process.env.PUBLIC_URL+"/page/" + props.data.user_data.user_name}
        </a>
      </h3>
      <Links links={links} onDelete={onDelete} />
    </>
  );
};

const update = async (links) => {
  const token = Cookies.get("token");
  try {
    // const res = 
    await fetch(UPDATE_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        // public
        data: links,
      }),
    });
    // const user_data = await res.json();
    // console.log(user_data.data);
    // return user_data.data;
  } catch (err) {
    console.log(err);
    alert("Something went wrong");
  }
};

const Links = (props) => {
  return (
    <>
      <div>
        <h3>Your Links</h3>
        {props.links.length === 0
          ? "No links to display"
          : props.links.map((link, ind) => {
              return (
                <OneLink key={ind} link={link} onDelete={props.onDelete} />
              );
            })}
      </div>
    </>
  );
};

const OneLink = ({ link, onDelete }) => {
  return (
    <>
      <div>
        <h3>{link.title}</h3>
        <a href={link.link} target="blank">
          {link.link}
        </a>
        <button
          onClick={() => {
            onDelete(link);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

const AddLink = (props) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !link) {
      alert("Title or Link cannot be blank");
    } else {
      props.addLink(title, link);
      setTitle("");
      setLink("");
    }
  };
  return (
    <>
      <div>
        <form className="form" onSubmit={submit}>
          <h2>Add a Link</h2>
          <div className="form-cell">
            <label htmlFor="title">Link Name</label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="form-cell">
            <label htmlFor="title">Link</label>
            <input
              type="text"
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
          </div>
          <button type="submit">Add Link</button>
        </form>
      </div>
    </>
  );
};

/*

{"data": [{"title": "hello",
    "link": "hello.com"
},
{"title": "hello2",
    "link": "hello2.com"
}
],
"public" : true
}


*/
