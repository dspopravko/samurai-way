"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[433],{7562:function(e,a,s){s.d(a,{W:function(){return c}});var t=s(5705),n=(s(2791),"MessageForm_form__HG9on"),r=s(184),c=function(e){return(0,r.jsx)(t.J9,{initialValues:{messageText:e.initialValue||""},onSubmit:function(a,s){var t=s.resetForm;e.onSubmit(a),t()},children:(0,r.jsxs)(t.l0,{className:n,children:[(0,r.jsx)("textarea",{id:"messageText",name:"messageText",placeholder:e.placeholder}),(0,r.jsx)("button",{type:"submit",children:"Send"})]})})}},4034:function(e,a,s){s.d(a,{D:function(){return o}});var t=s(8683),n=s(5987),r=(s(2791),s(9271)),c=s(364),i=s(184),l=["isAuth"],d=function(e){return{isAuth:e.authReducer.isAuth}};function o(e){return(0,c.$j)(d)((function(a){var s=a.isAuth,c=(0,n.Z)(a,l);return s?(0,i.jsx)(e,(0,t.Z)({},c)):(0,i.jsx)(r.l_,{to:"/login"})}))}},4433:function(e,a,s){s.r(a),s.d(a,{default:function(){return W}});var t=s(946),n=(s(2791),"Dialogs_dialogsWrapper__pnlug"),r="Dialogs_chats__mWkkn",c="Dialogs_messagesPage__AMile",i="Dialogs_message__dJ0Wz",l="Chats_message__M5-GC",d="Chats_messageActive__z79Ft",o="Chats_chat__tjNP4",u="Chats_date__3C4vP",m="Chats_logo__89GSZ",_=s(1523),h=s(9271),g=s(184);function v(e){var a=e.chatHeader,s="/messages/"+a.id,t=s===(0,h.TH)().pathname?d:l;return(0,g.jsx)(_.OL,{to:s,children:(0,g.jsxs)("div",{className:t,children:[(0,g.jsx)("div",{className:m,children:(0,g.jsx)("img",{alt:"Chat logo ".concat(a.author),src:a.chatLogo})}),(0,g.jsxs)("div",{className:o,children:[(0,g.jsx)("pre",{children:a.author.slice(0,8)+".."}),(0,g.jsx)("div",{className:u,children:a.date})]})]})})}var p="Messages_message__fmc6x",x={message_container:"Message_message_container__-nBH2",myMessage_container:"Message_myMessage_container__6XpyB",message:"Message_message__7RF6j",myMessage:"Message_myMessage__BLnmx",avatar_container:"Message_avatar_container__kkPAG",time_container:"Message_time_container__dNLJ0",text:"Message_text__Av5Ru",time:"Message_time__OM3oc",name:"Message_name__FCq6s",svgWrapper:"Message_svgWrapper__JkEuA",mySvgWrapper:"Message_mySvgWrapper__84C2f"},f=s(1607),j=function(e){var a=e.authorId,s=e.avatar,t=void 0===s?"https://180dc.org/wp-content/uploads/2022/04/Blank-Avatar.png":s,n=e.name,r=e.message,c=e.date;return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:0===a?x.myMessage:x.message,children:[(0,g.jsx)("div",{className:x.avatar_container,children:(0,g.jsx)("img",{alt:"avatar",src:t||f})}),(0,g.jsx)("div",{className:0===a?x.mySvgWrapper:x.svgWrapper,children:(0,g.jsx)("svg",{viewBox:"0 0 100 100",children:(0,g.jsx)("path",{d:"M100,0v100H18.2c0.3-1.2,3.6-1.8,13.6-5.2c14.8-5,28.1-13.3,38.9-24.1C88.8,52.6,100,27.6,100,0z"})})}),(0,g.jsxs)("div",{className:0===a?x.myMessage_container:x.message_container,children:[(0,g.jsx)("div",{className:x.name,children:n}),(0,g.jsxs)("div",{className:x.body_container,children:[(0,g.jsx)("div",{className:x.text_wrapper,children:(0,g.jsx)("p",{className:x.text,children:r})}),(0,g.jsx)("div",{className:x.time_container,children:(0,g.jsx)("div",{className:x.time,children:c})})]})]})]})})};function M(e){return(0,g.jsx)("div",{className:p,children:e.chatMessages.map((function(e,a){return(0,g.jsx)(j,{id:e.id,authorId:e.authorId,avatar:e.avatar,name:e.name,message:e.body,date:e.date},a)}))})}var N="Dialog_chatWrapper__ggWvv",y=s(7562),b=function(e){var a=e.chat,s=e.sendMessageHandler;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:N,children:(0,g.jsx)(M,{chatMessages:a.chatMessages,chatHeader:a.chatHeader,chatNewMessage:a.chatNewMessage},a.chatHeader.id)}),(0,g.jsx)(y.W,{placeholder:"Write a message...",onSubmit:function(e){s(a.chatHeader.id,e.messageText)}})]})},C=s(364),H=(0,s(4034).D)((function(e){var a=e.chats,s=e.sendMessageCallback,t=e.profile,l=function(e,a){var n=t.photos.small?t.photos.small:null;s(e,n,t.fullName,a)},d=a.map((function(e,a){return(0,g.jsx)(v,{chatHeader:e.chatHeader},a)})),o=a.map((function(e,a){return(0,g.jsx)(h.AW,{path:"/messages/".concat(a),render:function(){return(0,g.jsx)(b,{chat:e,sendMessageHandler:l})}},a)}));return(0,g.jsxs)("div",{className:n,children:[(0,g.jsx)("div",{className:r,children:d}),(0,g.jsx)("div",{className:c,children:(0,g.jsx)("div",{className:i,children:o})})]})})),W=(0,C.$j)((function(e){return{chats:e.chatsReducer,profile:e.profileReducer.profile,isAuth:e.authReducer.isAuth}}),(function(e){return{inputHandler:function(a,s){return e((0,t.H2)(a,s))},sendMessageCallback:function(a,s,n,r){return e((0,t.dI)(a,s,n,r))}}}))(H)},1607:function(e,a,s){e.exports=s.p+"static/media/defaultUser.c11a54191cd8df7f7198.png"},5987:function(e,a,s){s.d(a,{Z:function(){return n}});var t=s(3366);function n(e,a){if(null==e)return{};var s,n,r=(0,t.Z)(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)s=c[n],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}}}]);
//# sourceMappingURL=433.e84ea421.chunk.js.map