(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[3],{297:function(e,a,t){},298:function(e,a,t){},299:function(e,a,t){},300:function(e,a,t){},301:function(e,a,t){},302:function(e,a,t){},303:function(e,a,t){},304:function(e,a,t){},312:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),m=(t(297),t(298),t(299),function(){return n.a.createElement("div",{className:"messages__header"},n.a.createElement("div",{className:"messages__item_avatar"},n.a.createElement("img",{src:"https://sun9-49.userapi.com/c845122/v845122315/18e5e0/iAoBtrsGeFo.jpg",className:"messages__item_avatar avatar",alt:"avatar"})),"  ",n.a.createElement("div",{className:"messages__user_info"},n.a.createElement("h2",{className:"dialogs__item_name"},"Test 1"),n.a.createElement("p",{className:"dialogs__item_time"},"1 minute ago")),"  ",n.a.createElement("div",{className:"messages__settings"},"\u25cf\u25cf\u25cf"),"  ")}),i=(t(300),t(301),function(e){return n.a.createElement("div",{className:"message__wrapper"},n.a.createElement("div",{className:"message__item"},e.message))}),c=function(e){var a=e.messagesData.map((function(e){return n.a.createElement(i,{key:e.id,id:e.id,message:e.message})}));return n.a.createElement("div",{className:"messages__content"},a)},r=(t(302),t(303),t(81)),l=t(64),o=t(60),u=Object(o.a)(1500),d=function(e){return n.a.createElement("form",{className:"CreateMessageForm",onSubmit:e.handleSubmit},n.a.createElement(r.a,{component:l.b,name:"valueMessageText",className:"new_message",placeholder:"\u041d\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...",validate:[o.b,u]}),n.a.createElement("button",{className:"add__voice"},n.a.createElement("i",{className:"fa fa-paper-plane","aria-hidden":"true"})))},g=t(122),_=function(e){var a=Object(g.a)({form:"CreateMessageForm"})(d);return n.a.createElement("div",{className:"messages_create_message"},n.a.createElement("div",{className:"add__img"},n.a.createElement("i",{className:"fa fa-plus-circle","aria-hidden":"true"})),"     ",n.a.createElement(a,{onSubmit:function(a){e.addMessage(a.valueMessageText)}}))},v=function(e){return n.a.createElement("div",{className:"messages"},n.a.createElement(m,null),n.a.createElement(c,{messagesData:e.messagesData}),n.a.createElement(_,{valueMessageText:e.valueMessageText,addMessage:e.addMessage,updateValueMessageText:e.updateValueMessageText}))},p=t(11),E=(t(304),function(e){var a="/dialogs/"+e.id;return n.a.createElement(p.b,{to:a,className:"dialogs__item",activeClassName:"active"},n.a.createElement("div",{className:"dialogs__item_avatar"},n.a.createElement("img",{src:"https://sun9-49.userapi.com/c845122/v845122315/18e5e0/iAoBtrsGeFo.jpg",className:"dialogs__item_avatar avatar",alt:"avatar"})),n.a.createElement("div",{className:"item__wrapper"},n.a.createElement("div",{className:"dialogs__item_info"},n.a.createElement("h2",{className:"dialogs__item_name"},e.name),n.a.createElement("p",{className:"dialogs__item_time"},"1 minute ago")),n.a.createElement("div",{className:"dialogs__minimessage"},n.a.createElement("p",{className:"dialogs__minimessage_text"},"\u041f\u0440\u0438\u0432\u0435\u0442, \u044f \u0445\u043e\u0442\u0435\u043b \u0441\u043f\u0440\u043e\u0441\u0438..."))))}),f=function(e){var a=e.listData.map((function(e){return n.a.createElement(E,{key:e.id,name:e.name,id:e.id})}));return n.a.createElement("div",{className:"dialogs__list"},a)},N=function(e){return n.a.createElement("div",{className:"Dialogs"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"dialogs__wrapper wrapper"},n.a.createElement(f,{listData:e.listData}),"  ",n.a.createElement(v,{messagesData:e.messagesData,addMessage:e.addMessage}),"  ")))},b=t(17),h=t(101),M=t(47),D=t(48),j=t(50),O=t(49),w=t(10),x=function(e){return{isAuth:e.auth.isAuth}},T=t(8);a.default=Object(T.d)(Object(b.b)((function(e){return{listData:e.dialogs.dialogsData,messagesData:e.dialogs.messagesData}}),{addMessage:h.a}),(function(e){var a=function(a){Object(j.a)(s,a);var t=Object(O.a)(s);function s(){return Object(M.a)(this,s),t.apply(this,arguments)}return Object(D.a)(s,[{key:"render",value:function(){return this.props.isAuth?n.a.createElement(e,this.props):n.a.createElement(w.a,{to:"/login"})}}]),s}(n.a.Component);return Object(b.b)(x)(a)}))(N)}}]);
//# sourceMappingURL=3.a0033833.chunk.js.map