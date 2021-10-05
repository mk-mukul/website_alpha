(this["webpackJsonpwebsite-alpha"]=this["webpackJsonpwebsite-alpha"]||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(64),r=n.n(c),i=(n(79),n(80),n(6)),l=n(5),o=n(10),u=n.n(o),j=n(3),d=n.n(j),b=n(8),h=n(21),m=n(22),x=n(24),p=n(23),f=n(2),O=n(66),g=n.n(O),v=n(0),w=function(e){var t=Object(a.useState)("hidden"),n=Object(f.a)(t,2),s=n[0],c=n[1],r=function(){c(""===s?"hidden":"")};return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("nav",{className:e.className+" fixed top-0 w-full flex items-center bg-background-801 p-2 flex-wrap",children:[Object(v.jsx)(i.c,{to:"#",className:"px-2 mr-4 inline-flex items-center",children:Object(v.jsx)("span",{className:"text-xl text-light-101 font-bold uppercase tracking-wide","data-target":"#navigation",children:"Alpha"})}),Object(v.jsx)("button",{className:"nav-toggler text-light-101 inline-flex p-2 hover:bg-background-301 lg:hidden ml-auto",onClick:function(){return r()},children:Object(v.jsx)(g.a,{})}),Object(v.jsx)("div",{className:s+" top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto",id:"navigation",onClick:function(){return r()},children:Object(v.jsxs)("div",{className:"lg:inline-flex lg:flex-row lg:ml-auto flex flex-col",children:[Object(v.jsx)(i.c,{to:"/website_alpha/",className:"lg:inline-flex lg:w-auto px-3 py-2 rounded font-medium text-light-101 hover:text-dark-801 hover:bg-primary-101",children:Object(v.jsx)("span",{children:"Home"})}),Object(v.jsx)(i.c,{to:"/website_alpha/inbox/",params:{data:e.user_name},className:"lg:inline-flex lg:w-auto px-3 py-2 rounded font-medium text-light-101 hover:text-dark-801 hover:bg-primary-101",children:Object(v.jsx)("span",{children:"Inbox"})}),Object(v.jsx)(i.c,{to:"/website_alpha/profile/",className:"lg:inline-flex lg:w-auto px-3 py-2 rounded font-medium text-light-101 hover:text-dark-801 hover:bg-primary-101",children:Object(v.jsx)("span",{children:e.user_name})})]})})]})})},k=function(e){var t=e.user;return Object(v.jsxs)("div",{className:"min-h-screen text-primary-101",children:[Object(v.jsxs)("div",{className:"mt-16",children:[Object(v.jsxs)("h1",{children:["Hii... ",t.name]}),Object(v.jsxs)("h4",{children:["Name : ",t.name]}),Object(v.jsxs)("h4",{children:["User Name : ",t.user_name]}),Object(v.jsxs)("h4",{children:["email : ",t.email]}),Object(v.jsxs)("h4",{children:["Phone No : ",t.phone]})]}),Object(v.jsx)(i.b,{to:"/website_alpha/",children:Object(v.jsx)("button",{className:"bg-background-401 hover:bg-background-501",onClick:function(){u.a.remove("token"),window.location.reload()},children:"Log out"})})]})},y=function(e){var t=e.data.user,n=e.data.user_data;return Object(v.jsxs)("div",{className:"min-h-screen text-primary-101",children:[Object(v.jsxs)("div",{className:"mt-16 font-medium",children:[Object(v.jsxs)("h1",{className:"font-semibold",children:["Hello ",t.name," !"]}),Object(v.jsx)("h2",{children:" Welcome to the Website Alpha"})]}),Object(v.jsx)("div",{children:n.data[0]?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("p",{children:["Your link is available"," ",Object(v.jsx)("a",{className:"hover:text-blue-300",href:"/website_alpha/page/"+n.user_name,children:"Here"})]}),Object(v.jsx)(i.b,{to:"/website_alpha/links/",params:{data:n},children:Object(v.jsx)("button",{className:"bg-background-401 hover:bg-background-501",children:"Update Links"})})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("p",{children:"You have not saved anything yet"}),Object(v.jsx)(i.b,{to:"/website_alpha/links/",params:{data:n},children:Object(v.jsx)("button",{className:"bg-background-401 hover:bg-background-501",children:"Add Links"})})]})})]})},N=n(9),_=!0,S=[],F=function(e){_&&(S=e.data.user_data.data,_=!1);var t=Object(a.useState)(S),n=Object(f.a)(t,2),s=n[0],c=n[1];return Object(a.useEffect)((function(){C(s),S=s}),[s]),Object(v.jsxs)("div",{className:"mt-16 grid justify-center justify-items-center",children:[Object(v.jsx)(T,{addLink:function(e,t){var n={title:e,link:t};c([].concat(Object(N.a)(s),[n]))}}),Object(v.jsxs)("h3",{children:["Your link is available on"," ",Object(v.jsx)("a",{href:"/website_alpha/page/"+e.data.user_data.user_name,target:"blank",children:"/website_alpha/page/"+e.data.user_data.user_name})]}),Object(v.jsx)(M,{links:s,onDelete:function(e){c(s.filter((function(t){return t!==e})))}})]})},C=function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.a.get("token"),e.prev=1,e.next=4,fetch("https://website-alpha-backend.herokuapp.com/update/link",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:n},body:JSON.stringify({data:t})});case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0),alert("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),M=function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"grid justify-center justify-items-center",children:[Object(v.jsx)("h3",{children:"Your Links"}),0===e.links.length?"No links to display":e.links.map((function(t,n){return Object(v.jsx)(A,{link:t,onDelete:e.onDelete},n)}))]})})},A=function(e){var t=e.link,n=e.onDelete;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"grid justify-items-center pt-5",children:[Object(v.jsxs)("div",{className:"flex flex-wrap",children:[Object(v.jsx)("h3",{className:"mx-2",children:t.title}),Object(v.jsx)("button",{onClick:function(){n(t)},children:"Delete"})]}),Object(v.jsx)("p",{children:Object(v.jsx)("a",{href:t.link,target:"blank",children:t.link})})]})})},T=function(e){var t=Object(a.useState)(""),n=Object(f.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(""),i=Object(f.a)(r,2),l=i[0],o=i[1];return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{children:Object(v.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),s&&l?(e.addLink(s,l),c(""),o("")):alert("Title or Link cannot be blank")},children:[Object(v.jsx)("h2",{children:"Add a Link"}),Object(v.jsxs)("div",{className:"form-cell",children:[Object(v.jsx)("label",{htmlFor:"title",children:"Link Name"}),Object(v.jsx)("input",{type:"text",value:s,onChange:function(e){c(e.target.value)}})]}),Object(v.jsxs)("div",{className:"form-cell",children:[Object(v.jsx)("label",{htmlFor:"title",children:"Link"}),Object(v.jsx)("input",{type:"text",value:l,onChange:function(e){o(e.target.value)}})]}),Object(v.jsx)("button",{type:"submit",children:"Add Link"})]})})})},E=n(38),L=n(39),D=n(67),I=n.n(D),z=function(e){for(var t=!1,n=0;n<e.actives.length&&!(t=e.actives[n].user_name===e.data.to_user_name);n++);return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(i.b,{to:e.data.chat_id,className:"",children:Object(v.jsxs)("div",{className:"flex cursor-pointer mt-0.5 px-2 py-2 hover:bg-background-301 text-light-101",children:[Object(v.jsx)("div",{className:"h-10 w-10 flex-shrink-0 relative rounded-full bg-light-301",children:t?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"h-2.5 w-2.5 rounded-full absolute bottom-0 right-1 bg-green-400"})}):Object(v.jsx)(v.Fragment,{})}),[e.data.lastMsg].map((function(t,n){return Object(v.jsx)(P,{to_user_name:e.data.to_user_name,user_name:e.user_name,lastMsg:t},n)}))]})})})},P=function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"pl-2 flex-grow w-20",children:[Object(v.jsxs)("div",{className:"flex justify-between",children:[Object(v.jsx)("h4",{className:"font-medium text-sm truncate",children:e.to_user_name}),Object(v.jsx)("p",{className:"text-xs text-light-401 truncate",children:e.lastMsg&&e.lastMsg.time?Object(L.a)(e.lastMsg.time):""})]}),e.lastMsg?Object(v.jsxs)("div",{className:"text-sm flex text-light-401",children:[e.lastMsg.name===e.user_name?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(I.a,{fontSize:"small"})}):Object(v.jsx)(v.Fragment,{}),Object(v.jsx)("p",{className:"truncate",children:e.lastMsg.message})]}):Object(v.jsx)(v.Fragment,{})]})})},J=n(69),R=n.n(J),U=n(71),B=n.n(U),H=n(68),q=n.n(H),Y=function(e){var t="middle",n="",s="";e.data&&(t=e.own?" flex-row-reverse pl-6":"pr-6",n=e.own?"bg-background-501":"bg-background-401"),e.data.reply&&(s=e.data.reply.name===e.user?"bg-background-501":"bg-background-401"),e.friend&&(n="bg-background-201");var c=Object(a.useState)(e.last),r=Object(f.a)(c,2),i=r[0],l=r[1];Object(a.useEffect)((function(){l(e.last)}),[e.last]);var o=Object(a.useState)("truncate"),u=Object(f.a)(o,2),j=u[0],d=u[1];return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{ref:e.scrollRef,className:"w-full clear-both mb-1 px-2",children:[Object(v.jsxs)("div",{className:"flex "+t,children:[Object(v.jsxs)("div",{className:" overflow-x-hidden px-1 py-1 rounded-xl cursor-default "+n,children:[e.data.reply?Object(v.jsxs)("div",{onClick:function(){d(j?"":"truncate")},className:" px-3 pb-1 border-black rounded-xl cursor-default "+s,children:[Object(v.jsx)("p",{className:"text-xs text-light-701",children:e.data.reply.name===e.user?"you":e.data.reply.name}),Object(v.jsx)("p",{className:"text-xs text-light-501 pb-0.5 "+j,children:e.data.reply.message}),Object(v.jsx)("hr",{className:"border-white opacity-20"})]}):Object(v.jsx)(v.Fragment,{}),Object(v.jsx)("div",{className:"px-2.5 py-0.5 text-light-201 text-sm",onClick:function(){l(!i)},children:Object(v.jsx)("p",{children:e.data.message})})]}),Object(v.jsx)("div",{className:"flex text-white opacity-10 hover:opacity-80 flex-col mx-1 justify-center",onClick:function(){e.selectMsg(e.data)},children:Object(v.jsx)(q.a,{})})]}),Object(v.jsx)("p",{className:e.own?"justify-end flex text-xsm p-0 m-0":"justify-start flex text-xsm p-0 m-0",children:Object(v.jsxs)("span",{className:"text-white opacity-80 cursor-default",children:[e.friend?Object(v.jsx)("label",{children:"typing..."}):Object(v.jsx)(v.Fragment,{}),i?Object(v.jsx)(v.Fragment,{children:e.data.time?Object(L.a)(e.data.time):""}):Object(v.jsx)(v.Fragment,{})]})})]})})},W=n(70),G=n.n(W),K=n(72),V=n.n(K),Q=function(e){var t=Object(a.useState)(""),n=Object(f.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(null),l=Object(f.a)(r,2),o=l[0],u=l[1],j=Object(a.useState)(""),h=Object(f.a)(j,2),m=h[0],x=h[1],p=Object(a.useState)([]),O=Object(f.a)(p,2),g=O[0],w=O[1],k=Object(a.useState)(null),y=Object(f.a)(k,2),_=y[0],S=y[1],F=Object(a.useState)(null),C=Object(f.a)(F,2),M=C[0],A=C[1],T=Object(a.useState)({from_user_name:"",message:""}),L=Object(f.a)(T,2),D=L[0],I=L[1],z=Object(a.useState)(null),P=Object(f.a)(z,2),J=P[0],U=P[1],H=Object(a.useState)(null),q=Object(f.a)(H,2),W=q[0],K=q[1],Q=Object(a.useState)([]),$=Object(f.a)(Q,2),ee=$[0],te=$[1],ne=Object(a.useState)(!1),ae=Object(f.a)(ne,2),se=ae[0],ce=ae[1],re=Object(a.useRef)(),ie=Object(a.useRef)();Object(a.useEffect)((function(){re.current=Object(E.io)("https://website-alpha-backend.herokuapp.com"),re.current.on("getMessage",(function(e){S(e),I({from_user_name:"",message:""})})),re.current.on("getMsgLive",(function(e){A(e)}))}),[]),Object(a.useEffect)((function(){o&&re.current.emit("addUser",{user_name:o,user_id:"data"})}),[o]),Object(a.useEffect)((function(){re.current.on("getUsers",(function(e){te(e)}))}),[m]),Object(a.useEffect)((function(){ce(!1);for(var e=0;e<ee.length;e++)ee[e].user_name===m&&ce(!0)}),[m,ee]),Object(a.useEffect)((function(){M&&m===M.from_user_name&&I(M)}),[M,m]),Object(a.useEffect)((function(){_&&m===_.from_user_name&&w((function(e){return[].concat(Object(N.a)(e),[_])}))}),[_,m]),Object(a.useEffect)((function(){function t(){return(t=Object(b.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X(e.chat_id);case 2:n=t.sent,U(n),w(n.chat_data),x(n.chats_of.with),u(n.chats_of.owner);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.chat_id]);var le=function(e){if(e.preventDefault(),s){re.current.emit("sendMessage",{from_user_name:o,to_user_name:m,name:o,message:s,reply:W,time:new Date});var t={message:s,name:o,reply:W,time:new Date};Z(m,t),w([].concat(Object(N.a)(g),[t])),c(""),K(null)}};Object(a.useEffect)((function(){var e=m;re.current.emit("sendMsgLive",{from_user_name:o,to_user_name:e,name:e,message:s,reply:W})}),[s,m,o,W]),Object(a.useEffect)((function(){var e;null===(e=ie.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[g,D]);var oe=function(e){K(e)};return Object(v.jsx)(v.Fragment,{children:J?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"fixed w-full z-10 sm:w-96 flex items-center justify-between py-2 px-3 bg-background-801 text-primary-101",children:[Object(v.jsx)(i.b,{to:"/website_alpha/inbox/",className:" cursor-pointer",children:Object(v.jsx)(R.a,{})}),Object(v.jsxs)("div",{className:"relative grid justify-items-center",children:[Object(v.jsx)("h3",{children:m}),se?Object(v.jsx)("div",{className:"text-xsm",children:"online"}):Object(v.jsx)(v.Fragment,{})]}),Object(v.jsx)("div",{onClick:function(){console.log(m)},className:"cursor-pointer",children:Object(v.jsx)(G.a,{})})]}),Object(v.jsxs)("div",{className:"flex-grow pt-16 pb-2 overflow-y-auto",id:"scrollBottom",children:[g.map((function(e,t){return Object(v.jsx)(Y,{last:g.length===t+1,user:o,data:e,own:o===e.name,scrollRef:ie,selectMsg:oe},t)})),D.message?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(Y,{user:o,friend:m,data:D,scrollRef:ie})}):Object(v.jsx)(v.Fragment,{})]}),W?Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"clear-both px-3 py-1 bg-background-301",children:[Object(v.jsxs)("div",{className:"flex text-sm justify-between text-light-301 opacity-60",children:[W.name===o?"you":W.name,Object(v.jsx)("div",{onClick:function(){K(null)},className:"mr-1",children:Object(v.jsx)(B.a,{})})]}),Object(v.jsx)("div",{className:"truncate text-sm text-light-101 ",children:W.message})]})}):Object(v.jsx)(v.Fragment,{}),Object(v.jsxs)("form",{className:" bottom-0 sm:static w-full flex ",id:"chats-send-container",children:[Object(v.jsx)("input",{className:"flex-grow p-2.5",type:"text",placeholder:" Message...",value:s,onChange:function(e){return c(e.currentTarget.value)},id:"chats-messageInp",onKeyDownCapture:function(e){return"Enter"===e.key?le(e):null}}),Object(v.jsx)("button",{className:"px-4 border-none rounded-none text-light-101 bg-background-301",id:"chats-btn",onClick:function(e){le(e)},children:Object(v.jsx)(V.a,{})})]})]}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("span",{className:"flex justify-center text-6xl mt-16 text-primary-101 p-3 opacity-50 cursor-default",children:"Loading..."})})})},X=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.a.get("token"),e.prev=1,e.next=4,fetch("https://website-alpha-backend.herokuapp.com/add/chats/"+t,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:n}});case 4:return a=e.sent,e.next=7,a.json();case 7:return s=e.sent,e.abrupt("return",s);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),alert("user not found");case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(b.a)(d.a.mark((function e(t,n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.a.get("token"),e.prev=1,e.next=4,fetch("https://website-alpha-backend.herokuapp.com/update/chat",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:a},body:JSON.stringify({to_user_name:t,message:n})});case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0),alert("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n){return e.apply(this,arguments)}}(),$=n(73),ee=n.n($),te=function(e){var t=Object(a.useState)(""),n=Object(f.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)([]),o=Object(f.a)(r,2),j=o[0],h=o[1],m=Object(a.useState)(e.user.chats_id),x=Object(f.a)(m,2),p=x[0],O=x[1],g=Object(a.useState)(null),w=Object(f.a)(g,2),k=w[0],y=w[1],_=Object(a.useRef)();Object(a.useEffect)((function(){_.current=Object(E.io)("https://website-alpha-backend.herokuapp.com"),_.current.emit("addUser",{user_name:e.user.user_name,user_id:e.user._id}),_.current.on("getUsers",(function(e){h(e)})),_.current.on("getMessage",(function(e){y(e)}))}),[e.user]),Object(a.useEffect)((function(){if(k){var t=se(p,k,e.user.user_name);y(null),-1!==t&&O(Object(N.a)(p),p[t].lastMsg=k)}}),[k,p,e.user]);var S=window.location.pathname.split("/").slice(2,4),F=Object(a.useState)("hidden"),C=Object(f.a)(F,2),M=C[0],A=C[1],T=Object(a.useState)("flex"),L=Object(f.a)(T,2),D=L[0],I=L[1];Object(a.useEffect)((function(){"inbox"===S[0]&&S[1]?(A("flex"),I("hidden")):(A("hidden"),I("flex"))}),[S]);var P=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!s){e.next=7;break}return console.log(s),e.next=5,ne(s);case 5:e.sent&&window.location.reload();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("section",{className:"flex sm:pt-16 h-screen sm:pb-2 justify-center",children:Object(v.jsxs)("div",{className:"flex h-full w-auto sm:border-2",children:[Object(v.jsxs)("div",{className:D+" chat_list z-50 sm:z-0 h-screen sm:h-auto w-screen sm:w-auto bg-background-701 sm:border-r-2 sm:flex flex-col",children:[Object(v.jsxs)("div",{className:"fixed z-50 w-full font-semibold sm:relative flex justify-between bg-background-801 text-light-101 px-3 py-3",children:[Object(v.jsx)(i.b,{to:"/website_alpha/profile/",children:Object(v.jsx)("div",{className:"h-6 w-6 relative rounded-full bg-white"})}),Object(v.jsx)("h3",{children:e.user.user_name}),Object(v.jsx)(i.b,{to:"/website_alpha/",children:Object(v.jsx)(ee.a,{className:"cursor-pointer",onClick:function(){return u.a.remove("token"),void window.location.reload()}})})]}),Object(v.jsxs)("div",{className:"overflow-y-auto w-screen sm:w-60 pt-12 sm:pt-0",children:[p?ae(p).map((function(t,n){return Object(v.jsx)(z,{data:t,user_name:e.user.user_name,actives:j},t.chat_id)})):Object(v.jsx)(v.Fragment,{}),Object(v.jsxs)("div",{className:"flex flex-col m-1",children:[Object(v.jsx)("input",{className:"rounded-sm",type:"text",placeholder:"Enter friend's user name",value:s,onChange:function(e){return c(e.currentTarget.value)}}),Object(v.jsx)("button",{className:"mt-1 bg-background-301 text-light-101",onClick:function(e){P(e)},children:"Add friend"})]})]})]}),Object(v.jsx)("div",{className:M+" sm:flex h-screen sm:h-auto z-50 sm:z-0 flex-col w-screen sm:w-96 bg-background-701",children:Object(v.jsxs)(l.d,{children:[Object(v.jsx)(l.b,{exact:!0,path:"/website_alpha/inbox/",render:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("span",{className:"flex justify-center text-6xl mt-16 text-primary-101 p-3 opacity-50 cursor-default",children:"open a chat"})})}}),Object(v.jsx)(l.b,{exact:!0,path:"/website_alpha/inbox/:id",render:function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(Q,{chat_id:e.match.params.id})})}})]})})]})})})},ne=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.a.get("token"),e.prev=1,e.next=4,fetch("https://website-alpha-backend.herokuapp.com/add/chats",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:n},body:JSON.stringify({user_name:t})});case 4:return a=e.sent,e.next=7,a.json();case 7:return s=e.sent,e.abrupt("return",s);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),alert("user not found");case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(e){var t=e;return t.sort((function(e,t){return e.lastMsg&&t.lastMsg?e.lastMsg.time<t.lastMsg.time?1:t.lastMsg.time<e.lastMsg.time?-1:0:e.lastMsg&&!t.lastMsg?-1:!e.lastMsg&&t.lastMsg?1:0})),t},se=function(e,t,n){for(var a=0;a<e.length;a++){if(e[a].to_user_name===t.from_user_name&&e[a].to_user_name!==n)return a;if(e[a].to_user_name===t.to_user_name)return a}return-1},ce=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("section",{className:"grid justify-center h-screen bg-background-101",children:Object(v.jsx)("div",{className:"text-4xl text-light-101",children:"Loading..."})})})},re=function(e){Object(x.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={loading:!0,data:null,status:null},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.props.token)){e.next=15;break}return e.prev=2,e.next=5,fetch("https://website-alpha-backend.herokuapp.com/",{method:"GET",headers:{Accept:"*/*",Authorization:t}});case 5:return n=e.sent,e.next=8,n.json();case 8:a=e.sent,this.setState({data:a,loading:!1,status:n.status}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[2,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:this.state.loading?Object(v.jsx)(ce,{}):Object(v.jsx)(v.Fragment,{children:200===this.state.status?Object(v.jsx)(ie,{data:this.state.data,token:this.props.token}):Object(v.jsx)(l.a,{to:"/website_alpha/signin/"})})})}}]),n}(s.a.Component),ie=function(e){var t=e.data;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(w,{user_name:t.user.user_name,className:"z-10"}),Object(v.jsx)("section",{className:"grid justify-center align-middle h-full bg-background-101",children:Object(v.jsx)(l.b,{path:"/website_alpha/",render:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(l.d,{children:[Object(v.jsx)(l.b,{exact:!0,path:"/website_alpha/",render:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(y,{data:t})})}}),Object(v.jsx)(l.b,{exact:!0,path:"/website_alpha/links/",render:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(F,{data:t,token:e.token})})}}),Object(v.jsx)(l.b,{exact:!0,path:"/website_alpha/profile/",render:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(k,{user:t.user})})}}),Object(v.jsx)(l.b,{path:"/website_alpha/inbox/",render:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(te,{user:t.user})})}})]})})}})})]})},le=function(){var e=u.a.get("token");return Object(v.jsx)(v.Fragment,{children:e?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(l.a,{to:"/website_alpha/inbox/"}),Object(v.jsx)(re,{token:e})]}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(l.a,{to:"/website_alpha/signin/"})})})},oe="https://website-alpha-backend.herokuapp.com/signin",ue=function(e){Object(x.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={islogin:!1,data:null,user_name:"",password:""},e.submit=Object(b.a)(d.a.mark((function t(){var n,a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(oe,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({user_name:e.state.user_name,password:e.state.password})});case 2:return n=t.sent,t.next=5,n.json();case 5:if(!(a=t.sent).token){t.next=13;break}return s="Bearer "+a.token,t.next=10,u.a.set("token",s);case 10:e.setState({username:"",password:"",islogin:!0}),t.next=15;break;case 13:alert(a.error),e.setState({user_name:"",password:""});case 15:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsx)(v.Fragment,{children:this.state.islogin?Object(v.jsx)(l.a,{to:"/website_alpha/inbox/"}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("section",{className:"w-screen min-h-screen flex justify-center items-center text-light-101 bg-background-101",children:Object(v.jsxs)("div",{className:"flex items-center w-56 flex-col",children:[Object(v.jsx)("h2",{className:"mb-2 font-medium",children:"Log In"}),Object(v.jsxs)("div",{className:"grid gap-2 w-full bg-background-201 text-dark-901 px-3 py-6 rounded-md shadow-xl",children:[Object(v.jsx)("div",{className:"w-full",children:Object(v.jsx)("input",{className:"py-1 w-full px-2 rounded-md bg-light-101 focus:border-light-201",type:"text",placeholder:" username",value:this.state.user_name,onChange:function(t){e.setState({user_name:t.target.value})}})}),Object(v.jsx)("div",{className:"w-full",children:Object(v.jsx)("input",{className:"py-1 w-full px-2 rounded-md bg-light-101 focus:border-light-201",type:"password",placeholder:" Password",value:this.state.password,onChange:function(t){e.setState({password:t.target.value})},onKeyDownCapture:function(t){return"Enter"===t.key?e.submit(t):null}})}),Object(v.jsx)("div",{className:"w-full",children:Object(v.jsx)("button",{className:"w-full mt-4 p-0 bg-background-401 text-light-101",onClick:function(){e.submit()},children:"Log In"})})]}),Object(v.jsxs)("div",{className:"text-sm text-light-101 mt-4",children:["Don't have an account?? ",Object(v.jsx)(i.b,{className:"hover:text-blue-800 font-medium",to:"/website_alpha/signup/",children:"Sign Up"})]})]})})})})}}]),n}(s.a.Component),je="https://website-alpha-backend.herokuapp.com/signup",de=function(e){Object(x.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={islogin:!1,data:null,name:"",user_name:"",email:"",password:"",phone:""},e.submit=Object(b.a)(d.a.mark((function t(){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(je,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.state.name,user_name:e.state.user_name,email:e.state.email,password:e.state.password,phone:e.state.phone})});case 2:return n=t.sent,t.next=5,n.json();case 5:(a=t.sent).token?(alert("account created please login"),e.setState({name:"",user_name:"",email:"",password:"",phone:0,islogin:!0})):alert(a.error);case 7:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsx)(v.Fragment,{children:this.state.islogin?Object(v.jsx)(l.a,{to:"/website_alpha/signin/"}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("section",{className:"w-screen min-h-screen flex justify-center items-center text-light-101 bg-background-101",children:Object(v.jsxs)("div",{className:"flex items-center w-56 flex-col",children:[Object(v.jsx)("h2",{className:"mb-2 font-medium",children:"Sign Up"}),Object(v.jsxs)("div",{className:"grid gap-2 w-full bg-background-201 text-dark-901 px-3 py-6 rounded-md shadow-xl",children:[Object(v.jsxs)("div",{className:"w-full",children:[Object(v.jsx)("label",{className:"text-xs text-light-201",htmlFor:"name",children:"Name"}),Object(v.jsx)("input",{className:"py-1 w-full px-2 rounded-md bg-light-101 focus:border-dark-501",type:"text",placeholder:" Alpha",value:this.state.name,onChange:function(t){e.setState({name:t.target.value})}})]}),Object(v.jsxs)("div",{className:"w-full",children:[Object(v.jsx)("label",{className:"text-xs text-light-201",htmlFor:"user_name",children:"User Name"}),Object(v.jsx)("input",{className:"py-1 w-full px-2 rounded-md bg-light-101 focus:border-dark-501",type:"text",placeholder:" alpha",value:this.state.user_name,onChange:function(t){e.setState({user_name:t.target.value})}})]}),Object(v.jsxs)("div",{className:"w-full",children:[Object(v.jsx)("label",{className:"text-xs text-light-201",htmlFor:"user_name",children:"Email"}),Object(v.jsx)("input",{className:"py-1 w-full px-2 rounded-md bg-light-101 focus:border-dark-501",type:"text",placeholder:" example@alpha.in",value:this.state.email,onChange:function(t){e.setState({email:t.target.value})}})]}),Object(v.jsxs)("div",{className:"w-full",children:[Object(v.jsx)("label",{className:"text-xs text-light-201",htmlFor:"password",children:"Password"}),Object(v.jsx)("input",{className:"py-1 w-full px-2 rounded-md bg-light-101 focus:border-dark-501",type:"text",placeholder:" Password",value:this.state.password,onChange:function(t){e.setState({password:t.target.value})}})]}),Object(v.jsxs)("div",{className:"w-full",children:[Object(v.jsx)("label",{className:"text-xs text-light-201",htmlFor:"phone",children:"Phone No"}),Object(v.jsx)("input",{className:"py-1 w-full px-2 rounded-md bg-light-101 focus:border-dark-501",type:"number",placeholder:" 123...",value:this.state.phone,onChange:function(t){e.setState({phone:t.target.value})}})]}),Object(v.jsx)("div",{className:"w-full",children:Object(v.jsx)("button",{className:"w-full mt-4 p-0 bg-background-401 text-light-101",onClick:function(){e.submit()},children:"Signup"})})]}),Object(v.jsxs)("div",{className:"text-sm text-light-101 mt-4",children:["Already have an account?? ",Object(v.jsx)(i.b,{className:"hover:text-blue-800 font-medium",to:"/website_alpha/signin/",children:"Log In"})]})]})})})})}}]),n}(s.a.Component),be=(n(63),function(e){var t=e.data;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{id:"link-page",children:[Object(v.jsx)("header",{children:Object(v.jsxs)("nav",{children:[Object(v.jsx)("div",{children:Object(v.jsx)("h1",{children:"BTech 20"})}),Object(v.jsxs)("div",{className:"time",children:[Object(v.jsx)("div",{id:"time"}),Object(v.jsx)("div",{id:"date"})]})]})}),Object(v.jsxs)("section",{className:"body",children:[Object(v.jsxs)("div",{className:"color_code",children:[Object(v.jsx)("h5",{className:"live",children:"Running..."}),Object(v.jsx)("h5",{className:"leftToday",children:"Left"}),Object(v.jsx)("h5",{className:"today_class",children:"Todays Class"}),Object(v.jsx)("h5",{className:"status",children:"Not for Today"})]}),Object(v.jsx)("h2",{children:"Semester 3"}),Object(v.jsx)("h2",{className:"running",children:"No Class is Running Now "}),Object(v.jsx)("div",{className:"card-container",children:t.map((function(e,t){return Object(v.jsx)(he,{data:e,class:"hide"},t)}))}),Object(v.jsx)("h2",{className:"today",children:"No Classes are Left Today"}),Object(v.jsx)("div",{className:"card-container",children:t.map((function(e,t){return Object(v.jsx)(he,{data:e,class:"hide2"},t)}))}),Object(v.jsx)("h2",{children:"All Class Timing and Link"}),Object(v.jsx)("div",{className:"card-container",children:t.map((function(e,t){return Object(v.jsx)(he,{data:e,class:"course status"},t)}))})]})]})})}),he=function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:e.class,children:[Object(v.jsx)("h3",{children:e.data.course}),e.data.time.map((function(e,t){return Object(v.jsx)(me,{data:e},t)}))]})})},me=function(e){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h4",{className:"time",children:e.data.time}),e.data.section.map((function(e,t){return Object(v.jsx)(xe,{data:e},t)}))]})},xe=function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("h5",{children:Object(v.jsx)("a",{href:e.data.link,target:"blank",children:e.data.section})})})},pe=function(e){var t=e.data;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{id:"link-page",children:Object(v.jsx)("section",{className:"body",children:Object(v.jsx)("div",{className:"card-container",children:t.map((function(e,t){return Object(v.jsx)(fe,{data:e},t)}))})})})})},fe=function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"status course",children:Object(v.jsx)("a",{href:e.data.link,target:"blank",children:e.data.title})})})},Oe=function(e){Object(x.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={loading:!0,data:null},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://website-alpha-backend.herokuapp.com/link/"+this.props.id);case 2:if(404!==(t=e.sent).status){e.next=7;break}this.setState({loading:!1}),e.next=11;break;case 7:return e.next=9,t.json();case 9:n=e.sent,this.setState({data:n,loading:!1});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:this.state.loading?Object(v.jsx)(ce,{}):Object(v.jsx)(v.Fragment,{children:this.state.data?Object(v.jsx)(v.Fragment,{children:"btech20"!==this.props.id?Object(v.jsx)("div",{className:"min-h-screen bg-background-101",children:Object(v.jsx)(pe,{data:this.state.data})}):Object(v.jsx)("div",{className:"min-h-screen bg-background-401",children:Object(v.jsx)(be,{data:this.state.data})})}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("section",{className:"main_body",children:Object(v.jsx)("h2",{children:"Page not found"})})})})})}}]),n}(s.a.Component),ge=function(){var e=window.location.search.split("?").slice(1,2).join();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(i.a,{children:[e?Object(v.jsx)(l.a,{to:"/website_alpha"+e}):Object(v.jsx)(v.Fragment,{}),Object(v.jsxs)(l.d,{children:[Object(v.jsx)(l.b,{exact:!0,path:"/website_alpha/signin/",component:ue}),Object(v.jsx)(l.b,{exact:!0,path:"/website_alpha/signup/",component:de}),Object(v.jsx)(l.b,{exact:!0,path:"/website_alpha/page/:id",render:function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(Oe,{id:e.match.params.id})})}}),Object(v.jsx)(le,{path:"/website_alpha/"})]})]})})},ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,129)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(ge,{})}),document.getElementById("root")),ve()},63:function(e,t){var n=setInterval((function(){document.getElementById("time")&&(!function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],n=new Date,a=n.getDay(),s=n.getHours();s.toString().length<2&&(s="0"+s);var c=n.getMinutes();c.toString().length<2&&(c="0"+c);var r=n.getSeconds();r.toString().length<2&&(r="0"+r);var i=n.getDate();i.toString().length<2&&(i="0"+i);var l=n.getMonth(),o=s+":"+c,u=document.querySelectorAll("#link-page .course"),j=document.querySelectorAll("#link-page .hide"),d=document.querySelectorAll("#link-page .hide2");u.forEach((function(e,n){e.innerText.split("\n").forEach((function(e,s){":"===e[e.length-3]&&e.split(",").forEach((function(e,s){var c=e.split(" ");o<c[c.length-3]&&-1!==c.indexOf(t[a])&&(document.querySelectorAll(".today")[0].innerHTML="Today's Classes Left",d[n].setAttribute("class","course leftToday")),o>=c[c.length-3]&&o<c[c.length-1]&&-1!==c.indexOf(t[a])&&(document.querySelectorAll(".running")[0].innerHTML="Classes Running...",j[n].setAttribute("class","course live")),-1!==c.indexOf(t[a])&&u[n].setAttribute("class","course today_class")}))}))}));var b=setInterval((function(){n=new Date,a=n.getDay(),(s=n.getHours()).toString().length<2&&(s="0"+s),(c=n.getMinutes()).toString().length<2&&(c="0"+c),(r=n.getSeconds()).toString().length<2&&(r="0"+r);try{document.getElementById("time").innerText=s+":"+c+":"+r,document.getElementById("date").innerText=t[a]+", "+e[l]+" "+i}catch(o){clearInterval(b)}"00"!==c.toString()&&"30"!==c.toString()||"00"!==r.toString()||window.location.reload()}),1e3)}(),clearInterval(n))}),100)},79:function(e,t,n){},80:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.98e3b6d1.chunk.js.map