// import React, { useState, useEffect } from "react";

// import { io } from "socket.io-client";

// import { animateScroll } from "react-scroll";

// const socket = io(URL);

// const [msg, setMsg] = useState("");
// const [messages, setMeassages] = useState([]);

// useEffect(() => {
//   // console.log("useffect runs");
//   socket.emit("new-user-joined", props.user.user_name);
// }, [props.user.user_name]);

// // useEffect(() => {
// //     socket.on('receive', data => {
// //         // console.log(data)
// //         setMeassages([...messages, data]);
// //     });
// // }, [messages])

// // received message
// useEffect(() => {
//   socket.on("receive", (data) => {
//     // console.log(data)
//     setMeassages([...messages, data]);
//     scrollBottom();
//   });
// }, [messages]);

// // admin message for user joined
// useEffect(() => {
//   socket.on("user-joined", (data) => {
//     setMeassages([...messages, data]);
//   });
//   scrollBottom();
// }, [messages]);

// // admin message for user left
// useEffect(() => {
//   socket.on("leave", (data) => {
//     setMeassages([...messages, data]);
//   });
//   scrollBottom();
// }, [messages]);

// const submit = (e) => {
//   e.preventDefault();
//   // console.log("submmit")
//   if (msg) {
//     // append(msg, 'right');
//     socket.emit("send", msg);
//     const data = {
//       message: msg,
//       name: props.user.user_name,
//     };
//     setMeassages([...messages, data]);
//     setMsg("");
//   }
// };

// const scrollBottom = () => {
//   setTimeout(() => {
//     animateScroll.scrollToBottom({
//       containerId: "scrollBottom",
//       behavior: "smooth",
//     });
//   }, 100);
// };
