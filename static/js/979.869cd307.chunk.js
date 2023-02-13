"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[979],{7766:function(e,t,r){r.d(t,{z:function(){return c}});var a=r(8683),s=r(5987),n=(r(2791),"Button_btn__RBtNK"),i="Button_primary__XYgy-",o=r(184),l=["name","primary"],c=function(e){var t=e.name,r=e.primary,c=void 0!==r&&r,u=(0,s.Z)(e,l),d="".concat(n,"\n    ").concat(c?i:"");return(0,o.jsx)("button",(0,a.Z)((0,a.Z)({className:d,type:"button"},u),{},{children:t}))}},7562:function(e,t,r){r.d(t,{W:function(){return i}});var a=r(5705),s=(r(2791),"MessageForm_form__HG9on"),n=r(184),i=function(e){return(0,n.jsx)(a.J9,{initialValues:{messageText:e.initialValue||""},onSubmit:function(t,r){var a=r.resetForm;e.onSubmit(t),a()},children:(0,n.jsxs)(a.l0,{className:s,children:[(0,n.jsx)("textarea",{id:"messageText",name:"messageText",placeholder:e.placeholder}),(0,n.jsx)("button",{type:"submit",children:"Send"})]})})}},4034:function(e,t,r){r.d(t,{D:function(){return u}});var a=r(8683),s=r(5987),n=(r(2791),r(9271)),i=r(364),o=r(184),l=["isAuth"],c=function(e){return{isAuth:e.authReducer.isAuth}};function u(e){return(0,i.$j)(c)((function(t){var r=t.isAuth,i=(0,s.Z)(t,l);return r?(0,o.jsx)(e,(0,a.Z)({},i)):(0,o.jsx)(n.l_,{to:"/login"})}))}},7979:function(e,t,r){r.r(t),r.d(t,{default:function(){return J}});var a=r(8683),s=r(5671),n=r(3144),i=r(136),o=r(5716),l=r(2791);var c=r(181);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,s,n=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(a=r.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(l){o=!0,s=l}finally{try{i||null==r.return||r.return()}finally{if(o)throw s}}return n}}(e,t)||(0,c.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d={contentImgWrapper:"ProfileInfo_contentImgWrapper__2Gsas",profileInfoWrapper:"ProfileInfo_profileInfoWrapper__HbYtf",profileInfo:"ProfileInfo_profileInfo__F8oFR",avatarBlock:"ProfileInfo_avatarBlock__iIu6K",avatarWrapper:"ProfileInfo_avatarWrapper__ifwEl",nameWrapper:"ProfileInfo_nameWrapper__8eue3",aboutMe:"ProfileInfo_aboutMe__tWMm3",profileAction:"ProfileInfo_profileAction__ntrcU",avatarMenuOnHover:"ProfileInfo_avatarMenuOnHover__1NA0c",changePhotoModal:"ProfileInfo_changePhotoModal__kbttt",fileInput:"ProfileInfo_fileInput__dMVhH"},p=r(1607),f=r(7766),h="Status_container__60SS1",m=r(184),v=function(e){var t=u((0,l.useState)(!1),2),r=t[0],a=t[1],s=u((0,l.useState)(e.status),2),n=s[0],i=s[1];(0,l.useEffect)((function(){i(e.status)}),[e.status]);return(0,m.jsxs)("div",{className:h,children:[!r&&(0,m.jsx)("div",{onDoubleClick:function(){return a(!0)},children:(0,m.jsx)("span",{children:e.status||"Double click to edit status.."})}),r&&(0,m.jsxs)("div",{children:[(0,m.jsx)("input",{autoFocus:!0,onChange:function(e){return i(e.currentTarget.value)},onBlur:function(){return a(!1),void e.updateStatus(n)},value:n}),(0,m.jsx)("button",{onClick:function(){return e.updateStatus(n)},children:"save status"})]})]})},_=function(e){var t=u((0,l.useState)(!1),2),r=t[0],a=t[1],s=u((0,l.useState)(null),2),n=s[0],i=s[1];return e.isFetchingProfile?(0,m.jsxs)("div",{className:d.profileInfoWrapper,children:[(0,m.jsx)("div",{className:d.contentImgWrapper,children:(0,m.jsx)("img",{alt:"profile-wallpaper",src:"https://upload.wikimedia.org/wikipedia/commons/f/f6/Swiss_National_Park_131.JPG"})}),(0,m.jsxs)("div",{className:d.profileInfo,children:[(0,m.jsxs)("div",{className:d.avatarBlock,children:[(0,m.jsx)("div",{className:d.avatarWrapper,children:(0,m.jsx)("img",{alt:"avatar",src:p})}),(0,m.jsx)("div",{className:d.nameWrapper})]}),(0,m.jsx)("div",{className:d.aboutMe}),(0,m.jsx)("div",{className:d.profileAction,children:(0,m.jsx)("div",{className:d.btnWrapper})})]})]}):(0,m.jsxs)("div",{className:d.profileInfoWrapper,children:[(0,m.jsx)("div",{className:d.contentImgWrapper,children:(0,m.jsx)("img",{alt:"profile-wallpaper",src:"https://asset.berita24.id/wallpaper/20220115/3200x1080-macos-extended-wallpaper-for-ultrawide-monitors-thumb.jpg"})}),(0,m.jsxs)("div",{className:d.profileInfo,children:[(0,m.jsxs)("div",{className:d.avatarBlock,children:[(0,m.jsxs)("div",{className:d.avatarWrapper,children:[(0,m.jsx)("img",{alt:"avatar",src:e.profile.photos.large||p}),e.isMyProfile&&(0,m.jsx)("div",{className:d.avatarMenuOnHover,children:(0,m.jsx)("button",{onClick:function(){return a(!0)},children:"Change photo"})})]}),(0,m.jsx)("div",{className:d.nameWrapper,children:e.profile.fullName})]}),r&&(0,m.jsxs)("div",{className:d.changePhotoModal,children:[(0,m.jsx)("button",{onClick:function(){return a(!1)},children:"close"}),(0,m.jsxs)("div",{className:d.fileInput,children:[(0,m.jsx)("input",{type:"file",onChange:function(e){return function(e){e.target.files&&e.target.files.length>0&&i(e.target.files[0])}(e)}}),(0,m.jsx)("button",{onClick:function(){n&&e.updatePhoto(n)},children:"Update Photo"})]})]}),(0,m.jsxs)("div",{className:d.aboutMe,children:[e.isMyProfile&&(0,m.jsx)(v,{status:e.profile.status,updateStatus:e.updateStatus}),e.profile.aboutMe&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("b",{children:"About me"})," ",e.profile.aboutMe," ",(0,m.jsx)("br",{})]}),e.profile.lookingForAJob&&(0,m.jsx)("b",{children:"Open to work "}),(0,m.jsx)("p",{children:e.profile.lookingForAJobDescription})]}),(0,m.jsxs)("div",{className:d.profileAction,children:[e.isMyProfile?"Current user account":"",e.isMyProfile?"":(0,m.jsx)("div",{className:d.btnWrapper,children:e.isFollowed?(0,m.jsx)(f.z,{name:"Unfollow",onClick:function(){return e.unfollow(e.profile.userId)}}):(0,m.jsx)(f.z,{name:"Follow",onClick:function(){return e.follow(e.profile.userId)}})})]})]})]})},x=r(81),j="Posts_myPostsWrapper__guA-o",g="Posts_post_new__Rwj7o",P="Posts_postNewCanvas__cNb4d",N="Post_authorWrapper__LmYW+",b="Post_bodyWrapper__uN6Cs",I="Post_avatarWrapper__wNFp1",w="Post_name__NdrYS",y="Post_date__2Uutp",k="Post_post__frG2k",S="Post_postInteractions__w5Iag",F="Post_likes__4OrsP",W="Post_likeSvgContainer__cTDQB",C="Post_active__eMmEh",M=function(e){var t=e.props,r=e.addLikeHandler,a=t.myLike?"".concat(F," ").concat(C):F,s=t.myLike?t.likes+1:t.likes;return(0,m.jsxs)("div",{className:k,children:[(0,m.jsxs)("div",{className:N,children:[(0,m.jsx)("div",{className:I,children:(0,m.jsx)("img",{alt:"avatar",src:t.avatar?t.avatar:p})}),(0,m.jsx)("div",{className:w,children:t.name}),(0,m.jsx)("div",{className:y,children:t.date})]}),(0,m.jsx)("div",{className:b,children:t.message}),(0,m.jsx)("div",{className:S,children:(0,m.jsxs)("div",{onClick:function(){return r(t.id)},className:a,children:[(0,m.jsx)("div",{className:W,children:(0,m.jsx)("svg",{viewBox:"0 0 52 48.35",children:(0,m.jsx)("path",{d:"M51.91,16.24C51.15,7.89,45.24,1.83,37.84,1.83a14,14,0,0,0-12,6.9,13.47,13.47,0,0,0-11.69-6.9C6.76,1.83.85,7.89.09,16.24a14.8,14.8,0,0,0,.44,5.48,23.5,23.5,0,0,0,7.2,12L25.84,50.17,44.27,33.73a23.5,23.5,0,0,0,7.2-12A14.8,14.8,0,0,0,51.91,16.24Z",transform:"translate(0 -1.83)"})})}),(0,m.jsx)("div",{className:F,children:s})]})})]})},A=r(7562);var Z=function(e){var t=u((0,l.useState)(""),2),r=t[0],a=t[1],s=e.posts.map((function(t,r){return(0,m.jsx)(M,{props:t,addLikeHandler:e.addLike},r)})),n=function(t){t.messageText.trim()?(e.addPost(t.messageText),a("")):a("Your post is empty!")};return e.isFetchingProfile?(0,m.jsx)("div",{className:j,children:(0,m.jsxs)("div",{className:g,children:[(0,m.jsx)("div",{className:P,children:(0,m.jsx)(A.W,{onSubmit:n})}),(0,m.jsx)("div",{children:r})]})}):(0,m.jsxs)("div",{className:j,children:[(0,m.jsxs)("div",{className:g,children:[(0,m.jsx)("div",{className:P,children:(0,m.jsx)(A.W,{placeholder:"Write a post...",onSubmit:n})}),(0,m.jsx)("div",{children:r})]}),s]})},R=r(364),O={addLike:x.dE,addPost:x.q2,postInputHandler:x.kY},B=(0,R.$j)((function(e){return{posts:e.profileReducer.posts,profile:e.profileReducer.profile,postInput:e.profileReducer.postInput,isFetchingProfile:e.profileReducer.isFetchingProfile}}),O)(Z),H="Profile_profileWrapper__53HCg",L=function(e){return(0,m.jsxs)("div",{className:H,children:[(0,m.jsx)(_,(0,a.Z)({},e)),(0,m.jsx)(B,{})]})},D=r(9271),T=r(4874),U=r(4034),E=r(7781),Y=function(e){(0,i.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,n.Z)(r,[{key:"componentDidMount",value:function(){var e=(0,a.Z)({},this.props),t=e.data,r=e.match,s=e.isAuth,n=e.getProfileInfo,i=e.getStatus,o=r.params.userId?+r.params.userId:t.id;(r.params.userId||s)&&(n(o),i(o))}},{key:"componentDidUpdate",value:function(e,t,r){var s=(0,a.Z)({},this.props),n=s.match,i=s.profile,o=s.data,l=s.getProfileInfo;this.props.isFetchingProfile||n.params.userId||i.userId===o.id||(l(o.id),(0,x.lR)(o.id))}},{key:"render",value:function(){var e=(0,a.Z)({},this.props),t=e.data,r=e.profile,s=e.isFollowed,n=e.isFetchingProfile,i=e.follow,o=e.unfollow,l=e.updateStatus,c=e.updatePhoto;return(0,m.jsx)(L,{isFollowed:s,isMyProfile:t.id===r.userId,profile:r,isFetchingProfile:n,follow:i,unfollow:o,updateStatus:l,updatePhoto:c})}}]),r}(l.Component),G={setUserProfile:x.$l,setFetchingProfileAC:x.Xb,getProfileInfo:x.j3,follow:T.ZN,unfollow:T.yL,updateStatus:x.Nf,getStatus:x.lR,updatePhoto:x.tU},J=(0,E.qC)(U.D,D.EN,(0,R.$j)((function(e){var t=e.profileReducer,r=e.authReducer,a=e.usersReducer;return{isFollowed:t.isFollowed,profile:t.profile,posts:t.posts,data:r.data,isAuth:r.isAuth,users:a.users,isFetchingFollow:a.isFetchingFollow,isFetchingProfile:t.isFetchingProfile,postInput:t.postInput}}),G))(Y)},1607:function(e,t,r){e.exports=r.p+"static/media/defaultUser.c11a54191cd8df7f7198.png"},5987:function(e,t,r){r.d(t,{Z:function(){return s}});var a=r(3366);function s(e,t){if(null==e)return{};var r,s,n=(0,a.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}}}]);
//# sourceMappingURL=979.869cd307.chunk.js.map