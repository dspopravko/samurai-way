"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[433],{7562:function(e,a,s){s.d(a,{W:function(){return i}});var t=s(5705),r=(s(2791),"MessageForm_form__UoSo9"),n=s(184),i=function(e){return(0,n.jsx)(t.J9,{initialValues:{messageText:e.initialValue||""},onSubmit:function(a,s){var t=s.resetForm;e.onSubmit(a),t()},children:(0,n.jsxs)(t.l0,{className:r,children:[(0,n.jsx)("textarea",{id:"messageText",name:"messageText",placeholder:e.placeholder}),(0,n.jsx)("button",{type:"submit",children:"Send"})]})})}},4034:function(e,a,s){s.d(a,{D:function(){return o}});var t=s(8683),r=s(5987),n=(s(2791),s(9271)),i=s(364),c=s(184),l=["isAuth"],d=function(e){return{isAuth:e.authReducer.isAuth}};function o(e){return(0,i.$j)(d)((function(a){var s=a.isAuth,i=(0,r.Z)(a,l);return s?(0,c.jsx)(e,(0,t.Z)({},i)):(0,c.jsx)(n.l_,{to:"/login"})}))}},4433:function(e,a,s){s.r(a),s.d(a,{default:function(){return W}});var t=s(946),r=(s(2791),"Dialogs_dialogsWrapper__LZQ2o"),n="Dialogs_chats__T3M3L",i="Dialogs_messagesPage__bC8iD",c="Dialogs_message__hrUP8",l="Chats_message__YqaPj",d="Chats_messageActive__mf5lH",o="Chats_chat__jyiah",u="Chats_date__4-V6y",m="Chats_logo__ZoBKy",h=s(1523),_=s(9271),g=s(184);function p(e){var a=e.chatHeader,s="/messages/"+a.id,t=s===(0,_.TH)().pathname?d:l;return(0,g.jsx)(h.OL,{to:s,children:(0,g.jsxs)("div",{className:t,children:[(0,g.jsx)("div",{className:m,children:(0,g.jsx)("img",{alt:"Chat logo ".concat(a.author),src:a.chatLogo})}),(0,g.jsxs)("div",{className:o,children:[(0,g.jsx)("pre",{children:a.author.slice(0,8)+".."}),(0,g.jsx)("div",{className:u,children:a.date})]})]})})}var v="Messages_message__b3hWg",x={message_container:"Message_message_container__hJF+n",myMessage_container:"Message_myMessage_container__TS9ZF",message:"Message_message__Pqczt",myMessage:"Message_myMessage__f0wBN",avatar_container:"Message_avatar_container__XqbOp",time_container:"Message_time_container__Uj9U7",text:"Message_text__cEwYx",time:"Message_time__NNARB",name:"Message_name__-pf8K",svgWrapper:"Message_svgWrapper__Q3hXd",mySvgWrapper:"Message_mySvgWrapper__rO3d9"},f=s(1607),j=function(e){var a=e.authorId,s=e.avatar,t=void 0===s?"https://180dc.org/wp-content/uploads/2022/04/Blank-Avatar.png":s,r=e.name,n=e.message,i=e.date;return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:0===a?x.myMessage:x.message,children:[(0,g.jsx)("div",{className:x.avatar_container,children:(0,g.jsx)("img",{alt:"avatar",src:t||f})}),(0,g.jsx)("div",{className:0===a?x.mySvgWrapper:x.svgWrapper,children:(0,g.jsx)("svg",{viewBox:"0 0 100 100",children:(0,g.jsx)("path",{d:"M100,0v100H18.2c0.3-1.2,3.6-1.8,13.6-5.2c14.8-5,28.1-13.3,38.9-24.1C88.8,52.6,100,27.6,100,0z"})})}),(0,g.jsxs)("div",{className:0===a?x.myMessage_container:x.message_container,children:[(0,g.jsx)("div",{className:x.name,children:r}),(0,g.jsxs)("div",{className:x.body_container,children:[(0,g.jsx)("div",{className:x.text_wrapper,children:(0,g.jsx)("p",{className:x.text,children:n})}),(0,g.jsx)("div",{className:x.time_container,children:(0,g.jsx)("div",{className:x.time,children:i})})]})]})]})})};function M(e){return(0,g.jsx)("div",{className:v,children:e.chatMessages.map((function(e,a){return(0,g.jsx)(j,{id:e.id,authorId:e.authorId,avatar:e.avatar,name:e.name,message:e.body,date:e.date},a)}))})}var N="Dialog_chatWrapper__Y7pO9",y=s(7562),b=function(e){var a=e.chat,s=e.sendMessageHandler;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:N,children:(0,g.jsx)(M,{chatMessages:a.chatMessages,chatHeader:a.chatHeader,chatNewMessage:a.chatNewMessage},a.chatHeader.id)}),(0,g.jsx)(y.W,{placeholder:"Write a message...",onSubmit:function(e){s(a.chatHeader.id,e.messageText)}})]})},H=s(364),w=(0,s(4034).D)((function(e){var a=e.chats,s=e.sendMessageCallback,t=e.profile,l=function(e,a){var r=t.photos.small?t.photos.small:null;s(e,r,t.fullName,a)},d=a.map((function(e,a){return(0,g.jsx)(p,{chatHeader:e.chatHeader},a)})),o=a.map((function(e,a){return(0,g.jsx)(_.AW,{path:"/messages/".concat(a),render:function(){return(0,g.jsx)(b,{chat:e,sendMessageHandler:l})}},a)}));return(0,g.jsxs)("div",{className:r,children:[(0,g.jsx)("div",{className:n,children:d}),(0,g.jsx)("div",{className:i,children:(0,g.jsx)("div",{className:c,children:o})})]})})),W=(0,H.$j)((function(e){return{chats:e.chatsReducer,profile:e.profileReducer.profile,isAuth:e.authReducer.isAuth}}),(function(e){return{inputHandler:function(a,s){return e((0,t.H2)(a,s))},sendMessageCallback:function(a,s,r,n){return e((0,t.dI)(a,s,r,n))}}}))(w)},1607:function(e,a,s){e.exports=s.p+"static/media/defaultUser.c11a54191cd8df7f7198.png"},5987:function(e,a,s){s.d(a,{Z:function(){return r}});var t=s(3366);function r(e,a){if(null==e)return{};var s,r,n=(0,t.Z)(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)s=i[r],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}}}]);
//# sourceMappingURL=433.22b76598.chunk.js.map