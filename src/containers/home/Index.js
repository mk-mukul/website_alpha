import React from "react";
import chat_list from "../../assets/images/chat_list.JPG";
import full from "../../assets/images/full.JPG";
import live_typing from "../../assets/images/live_typing.JPG";
import reply from "../../assets/images/reply.JPG";
import setting from "../../assets/images/setting.JPG";
import { NavLink } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import SecurityIcon from '@mui/icons-material/Security';

export const Index = () => {

    return (
        <>
            <section className="pt-12 min-h-screen text-light-101 bg-background-101">
                <nav
                    className={
                        " z-30 fixed top-0 w-full justify-between flex items-center bg-background-801 p-2 flex-wrap"
                    }
                >
                    <NavLink
                        to={process.env.PUBLIC_URL + "/"}
                        className="px-2 mr-4 inline-flex items-center"
                    >
                        <span className="text-3xl text-light-101 font-bold uppercase tracking-wide">
                            Alpha
                        </span>
                    </NavLink>
                    <NavLink
                        to={process.env.PUBLIC_URL + "/signin"}
                        className="px-2 mr-4 inline-flex items-center"
                    >
                        <span>Login</span>
                    </NavLink>
                </nav>

                <BoxTop />

                <Box
                    img={live_typing}
                    img2={reply}
                    bgLight={true}
                />

                <Box
                    img={setting}
                    img2={chat_list}
                    bgLight={false}
                />


            </section>
            <div className="p-4 flex flex-wrap justify-center bg-background-701 text-light-101">
                <div className="mx-2">
                    Contact us
                </div>
                <div className="mx-2">
                    <a href="mailto:mukul.raj@iitgn.ac.in" target="blank" rel="noopener noreferrer">
                        <EmailIcon />
                    </a>
                </div>
                <div className="mx-2">
                    <a href="https://www.instagram.com/mk_mucool/" target="blank" rel="noopener noreferrer">
                        <InstagramIcon />
                    </a>
                </div>
                <div className="mx-2">
                    <a href="https://www.linkedin.com/in/mk-mukul/" target="blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>
                </div>
                {/* <WhatsAppIcon /> */}

            </div>
        </>
    );
};

const Box = (props) => {
    let fill = "#807790"
    let bgTop = "bg-background-101"
    let bg = "bg-background-701"
    if (props.bgLight) {
        fill = "#231638"
        bgTop = "bg-background-701"
        bg = "bg-background-101"
    }
    return (<>
        <div className={"py-14 " + bgTop}>
            <div className="relative grid ">
                <div className=" z-10 grid sm:grid-cols-2 items-center justify-items-center gap-4 p-4">
                    {/* <div className="text-justify w-10/12 shadow-inner bg-background-301 p-4 rounded-xl">
                        {props.text}
                    </div> */}
                    <img className=" max-h-96" src={props.img} alt="Chats" />
                    <img className=" max-h-96" src={props.img2} alt="Chats" />
                </div>
                <div className={"z-0 absolute w-full h-full " + bg}>
                    <div className="h-1/2 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path
                                fill={fill}
                                fillOpacity="1"
                                d="M0,96L720,192L1440,0L1440,0L720,0L0,0Z"
                            ></path>
                        </svg>
                    </div>
                    <div className="h-1/2 transform rotate-180 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path
                                fill={fill}
                                fillOpacity="1"
                                d="M0,0L720,128L1440,32L1440,0L720,0L0,0Z"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

const BoxTop = (props) => {
    let fill = "#807790"
    let bgTop = "bg-background-101"
    let bg = "bg-background-701"
    if (props.bgLight) {
        fill = "#231638"
        bgTop = "bg-background-701"
        bg = "bg-background-101"
    }
    return (<>
        <div className={"py-14 " + bgTop}>
            <div className="relative grid ">
                <div className=" z-10 grid sm:grid-cols-2 items-center justify-items-center gap-4 p-4">
                    <div className="text-justify w-10/12 shadow-inner bg-background-301 p-4 rounded-xl">
                        <p className="mb-3">
                            This is real time CHAT application. Chat with your friends securely on this platform.
                        </p>
                        <h5>Features - </h5>
                        <div className="relative text-sm pl-3">
                            <div className="absolute left-0 top-2.5 w-1.5 h-1.5  bg-background-901 rounded-full"></div>
                            <p className="font-bold">Live Typing...</p>
                        </div>
                        <div className="relative text-sm pl-3">
                            <div className="absolute left-0 top-2.5 w-1.5 h-1.5  bg-background-901 rounded-full"></div>
                            <p>Online status</p>
                        </div>
                        <div className="relative text-sm pl-3">
                            <div className="absolute left-0 top-2.5 w-1.5 h-1.5  bg-background-901 rounded-full"></div>
                            <p>Last seen</p>
                        </div>
                        <div className="relative text-sm pl-3">
                            <div className="absolute left-0 top-2.5 w-1.5 h-1.5  bg-background-901 rounded-full"></div>
                            <p>Sound notification</p>
                        </div>


                    </div>
                    <img className=" max-h-96" src={full} alt="Full view" />
                </div>
                <div className={"z-0 absolute w-full h-full " + bg}>
                    <div className="h-1/2 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path
                                fill={fill}
                                fillOpacity="1"
                                d="M0,96L720,192L1440,0L1440,0L720,0L0,0Z"
                            ></path>
                        </svg>
                    </div>
                    <div className="h-1/2 transform rotate-180 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path
                                fill={fill}
                                fillOpacity="1"
                                d="M0,0L720,128L1440,32L1440,0L720,0L0,0Z"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
