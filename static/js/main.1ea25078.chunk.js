(this.webpackJsonptracker=this.webpackJsonptracker||[]).push([[0],{198:function(t,e,i){"use strict";i.r(e);var c=i(0),n=i.n(c),a=i(38),s=i.n(a),r=(i(94),i(95),i(80)),o=i.n(r),m=i(9),j=i(200),u=i(199),d=i(21),b=i(7),l="START_STATE",O="ADD_NAME",h="DELETE_ITEM",A="SET_TIME",p={itemList:{},data:{}},S=function(t,e,i,c){return{type:A,sec:t,min:e,hour:i,id:c}},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0,i=JSON.parse(JSON.stringify(t));switch(e.type){case l:var c=e.id;return Object(b.a)(Object(b.a)({},t),{},{itemList:Object(b.a)(Object(b.a)({},t.itemList),{},Object(d.a)({},e.id,Object(b.a)(Object(b.a)({},t.itemList[c]),{},{isActive:e.condition})))});case h:var n=e.id;return Object(b.a)(Object(b.a)({},t),{},{itemList:Object(b.a)(Object(b.a)({},t.itemList),{},Object(d.a)({},e.id,Object(b.a)(Object(b.a)({},t.itemList[n]),{},{delete:e.del})))});case O:var a={isActive:!0,name:e.text,sec:0,minute:0,hour:0,id:Object.keys(t.itemList).length,delete:!1};return i.itemList[Object.keys(t.itemList).length]=a,i;case A:var s=e.id;return Object(b.a)(Object(b.a)({},t),{},{itemList:Object(b.a)(Object(b.a)({},t.itemList),{},Object(d.a)({},e.id,Object(b.a)(Object(b.a)({},t.itemList[s]),{},{sec:e.sec,minute:e.min,hour:e.hour})))});default:return t}},v=i(4),x=function(t){return function(e){if(e&&e.length>t)return"Too long"}}(15),g=Object(u.a)({form:"itemName"})((function(t){return Object(v.jsxs)("form",{className:"form",onSubmit:t.handleSubmit,children:[Object(v.jsx)(j.a,{type:"text",placeholder:"Enter name",component:"input",name:"name",validate:[x]}),Object(v.jsx)("button",{children:Object(v.jsx)("img",{className:"btn__img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAyElEQVRYw+2UoRUCMRAFTyAQCCQSiUQi8RRAAQgkBSCQFEABFICkAASCAhAIJBJx4sSJE0MFCXnJfsFjp4Cd95LZrSrHcf4ADgy0Anix0AoAToy0AqhZawUAVyZaAbTs6CkFAA9mWgF0hvESwipeYljES5yalVYAcCmKlxRattnxkso9M95kwZulUnBkqHuiJ3PdJ3fs6esyvTHVLVrDxuSuBsafGeuOXW6QiYL8IBMEZUF+EZQHGRVYBBkUWAUZENgF6TjOz/IBUMmB5S3AXkIAAAAASUVORK5CYII=",alt:"none"})})]})})),k=Object(m.b)((function(t){return{leng:t.trackerPage.itemList}}),{addName:function(t){return{type:O,text:t}}})((function(t){return Object(v.jsx)(g,{onSubmit:function(e){e.name?t.addName(e.name):t.addName(o()().format("LTS"))}})})),L=function(t){return Object(v.jsx)("header",{className:"header",children:Object(v.jsx)("p",{children:"tracker"})})},N=i(83),T=i(84),C=i(85),E=i(88),y=i(87),_=function(t){Object(E.a)(i,t);var e=Object(y.a)(i);function i(){return Object(T.a)(this,i),e.apply(this,arguments)}return Object(C.a)(i,[{key:"render",value:function(){return this.props.timeToState(this.props.sec,this.props.min,this.props.hour,this.props.id),Object(v.jsx)("div",{className:"item__time ".concat(this.props.id),children:"".concat(this.props.hourState," : ").concat(this.props.minState," : ").concat(this.props.secState)},this.props.id)}}]),i}(n.a.Component),I=Object(m.b)((function(t){return{}}),{timeToState:S})(_),B=function(t){var e=Object(N.useStopwatch)({autoStart:!0}),i=e.seconds,c=e.minutes,n=e.hours,a=e.start,s=e.pause;return Object(v.jsxs)("li",{className:"".concat(t.delete?"d-none":"item"," ").concat(t.isActive?"active":"unactive"),children:[Object(v.jsx)("div",{className:"item__name",children:t.name}),Object(v.jsxs)("div",{className:"item__manage",children:[Object(v.jsx)(I,{sec:i,min:c,hour:n,secState:t.secState,minState:t.minState,hourState:t.hourState,id:t.id}),Object(v.jsx)("div",{onClick:function(){t.setState(!t.isActive,t.id)},children:t.isActive?Object(v.jsx)("div",{className:"item__stop",onClick:s}):Object(v.jsx)("div",{className:"item__play",onClick:a})}),Object(v.jsx)("div",{className:"item__delete",onClick:function(){t.deleteItem(!t.delete,t.id)}})]})]})},F=function(t){var e=Object.values(t.itemList).map((function(e){if(!e.delete)return Object(v.jsx)(B,{isActive:e.isActive,delete:e.delete,name:e.name,time:e.time,setState:t.setState,deleteItem:t.deleteItem,id:e.id,secState:e.sec,minState:e.minute,hourState:e.hour,timeToState:t.timeToState})}));return Object(v.jsx)("ul",{className:"list",children:e})},U=Object(m.b)((function(t){return{itemList:t.trackerPage.itemList,text:t.trackerPage.text}}),{setState:function(t,e){return{type:l,condition:t,id:e}},deleteItem:function(t,e){return{type:h,del:t,id:e}},timeToState:S})(F);var w=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)(L,{}),Object(v.jsx)(k,{}),Object(v.jsx)(U,{})]})})})},J=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,202)).then((function(e){var i=e.getCLS,c=e.getFID,n=e.getFCP,a=e.getLCP,s=e.getTTFB;i(t),c(t),n(t),a(t),s(t)}))},M=i(6),R=i(86),Q=i(201),D=Object(M.c)({trackerPage:f,form:Q.a}),V=Object(M.d)(D,Object(M.a)(R.a));s.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(m.a,{store:V,children:Object(v.jsx)(w,{})})}),document.getElementById("root")),J()},94:function(t,e,i){},95:function(t,e,i){}},[[198,1,2]]]);
//# sourceMappingURL=main.1ea25078.chunk.js.map