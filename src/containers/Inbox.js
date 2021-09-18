import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import { io } from "socket.io-client";
import { animateScroll } from 'react-scroll'

import "../style/chats.css";
import "../script/chats"

const URL = process.env.REACT_APP_SERVER
// console.log(URL)

const socket = io(URL);
let currentMessages = [];
// console.log(currentMessages)

export const Inbox = (props) => {
    // console.log(props.user.user_name)

    const [msg, setMsg] = useState("");
    const [messages, setMeassages] = useState(currentMessages);

    useEffect(() => {
        // console.log("useffect runs");
        socket.emit('new-user-joined', props.user.user_name);
        socket.on('all-message', data => {
            setMeassages(data);
            currentMessages = data;
            // console.log(currentMessages)
            // scrollBottom();
        });
    }, [props.user.user_name])


    // received message
    useEffect(() => {
        socket.on('receive', data => {
            setMeassages([...messages, data]);
            setTimeout(() => {
                currentMessages.push(data);
            }, 10);
            console.log(data)
            // scrollBottom();
        });

        // socket.on('user-joined', data => {
        //     setMeassages([...messages, data]);
        //     // scrollBottom();
        // });

        // socket.on('leave', data => {
        //     setMeassages([...messages, data]);
        //     // scrollBottom();
        // });

    }, [messages])

    const submit = (e) => {
        e.preventDefault();
        // console.log("submmit")
        if (msg) {
            // append(msg, 'right');
            socket.emit('send', msg);
            const data = {
                message: msg,
                name: props.user.user_name,
            };
            setMeassages([...messages, data]);
            currentMessages.push(data);
            setMsg("");
            console.log(data);
        }
    }

    return (
        <>
            <section className="chats_page">
                <div className="partition">
                    {/* <div className="chat_list">
                    <div className="user_name">
                        <h2>{props.user.user_name}</h2>
                    </div>
                </div> */}
                    <div className="chat_window">
                        <div className="chats_display scroll-y" id="scrollBottom">
                            {/* <div className="message right">Rohan: Hey how are you?</div>
                        <div className="message left">Harry: I am fine rohan.fasdasfa sdsaffsafsdfa sdfasfdsfasdfasdfasfas dfasd</div> */}
                            {messages.map((val, ind) => {
                                return (
                                    <Message
                                        key={ind}
                                        user={props.user.user_name}
                                        data={val}
                                    />
                                )
                            })}
                        </div>

                        <form className="send" id="chats-send-container" >
                            <input className="formchat" type="text" placeholder=" Message..." value={msg} onChange={(e) => setMsg(e.currentTarget.value)} id="chats-messageInp" onKeyDownCapture={e => e.key === 'Enter' ? submit(e) : null} />
                            <button className="btn" id="chats-btn" onClick={(e) => { submit(e) }}>Send</button>
                        </form>

                    </div>
                </div>
            </section>
        </>
    );
};

const Message = (props) => {
    const scrollBottom = () => {
        setTimeout(() => {
            animateScroll.scrollToBottom({
                containerId: 'scrollBottom',
                behavior: 'smooth',
            });
        }, 100);
    };
    scrollBottom();

    let name = "";
    let classes = "middle";
    if (props.data.name) {
        name = props.data.name === props.user ? "" : props.data.name;
        classes = props.data.name === props.user ? "right" : "left";
    }

    // console.log(classes)
    return (
        <>
            <div className={"message_box " + classes}>
                <label className="message_label">{name}</label>
                <p className={"message message_" + classes}>{props.data.message}</p>
            </div>
        </>
    )
}
