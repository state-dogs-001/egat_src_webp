_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[63],{Wk7L:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Notification",function(){return s("wVBU")}])},wVBU:function(t,e,s){"use strict";s.r(e);var n=s("z7pX"),i=s("nKUr"),r=s("vJKn"),o=s.n(r),a=s("rg98"),c=s("H+61"),l=s("UlJF"),d=s("+Css"),h=s("7LId"),f=s("VIvw"),p=s("iHvq"),u=s("cpVT"),y=s("q1tI"),j=s("g4pe"),x=s.n(j),g=s("20a2"),b=s.n(g),O=s("BMrR"),w=s("kPKH"),m=s("KrTs"),N=s("W9HT"),S=s("CtXQ"),v=s("ECub"),T=s("NJEC"),E=s("WM+0"),_=s("VlGh"),R=s("mOvS"),I=s.n(R),A=s("Y0NT"),H=s("/MKj"),D=s("SpDg"),k=s("GgLZ"),M=s("469l"),L=s("5AJ6"),C=Object(L.a)(y.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"}),"Announcement"),Y=s("wd/R"),B=s.n(Y),V=s("E19q"),U=s("xtEs"),F=s("MoW8"),P=s("fH4n"),z=s("9kay");function G(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function W(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?G(Object(s),!0).forEach((function(e){Object(u.a)(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):G(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function X(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,n=Object(p.a)(t);if(e){var i=Object(p.a)(this).constructor;s=Reflect.construct(n,arguments,i)}else s=n.apply(this,arguments);return Object(f.a)(this,s)}}var J=I()().publicRuntimeConfig,K=function(t){Object(h.a)(s,t);var e=X(s);function s(t){var n;return Object(c.a)(this,s),n=e.call(this,t),Object(u.a)(Object(d.a)(n),"deleteHistory",function(){var t=Object(a.a)(o.a.mark((function t(e,s){var i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i={id_history:e,menu_component:"Notification"},E.a.deleteHistory(i).then((function(t){if("Network Error"==t.message)throw"networkError";t.RESULT&&(0==s?(n.props.fetchHistoryBadge(),n.state.newsArr.splice(n.state.newsArr.findIndex((function(t){return t.ID_HISTORY==e})),1),n.closeModalNoti()):(n.props.fetchHistoryBadge(),n.state.transArr.splice(n.state.transArr.findIndex((function(t){return t.ID_HISTORY==e})),1),n.closeModalNoti()))})).catch((function(t){}));case 2:case"end":return t.stop()}}),t)})));return function(e,s){return t.apply(this,arguments)}}()),Object(u.a)(Object(d.a)(n),"updateReadHistory",function(){var t=Object(a.a)(o.a.mark((function t(e,s){var i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i={id_history:e,menu_component:"Notification"},E.a.updateReadHistory(i).then((function(t){if("Network Error"==t.message)throw"networkError";t.RESULT&&(1==s?(n.state.newsArr.filter((function(t){return t.ID_HISTORY==e}))[0].READ_STATUS=1,n.forceUpdate(),n.props.fetchHistoryBadge()):(n.state.transArr.filter((function(t){return t.ID_HISTORY==e}))[0].READ_STATUS=1,n.forceUpdate(),n.props.fetchHistoryBadge()))})).catch((function(t){}));case 2:case"end":return t.stop()}}),t)})));return function(e,s){return t.apply(this,arguments)}}()),Object(u.a)(Object(d.a)(n),"fetchNotifyTransactionInfo",Object(a.a)(o.a.mark((function t(){var e,s,i=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=i.length>0&&void 0!==i[0]?i[0]:null,n.setState({loading_noti_trans:!0}),s={type_history:2,menu_component:"Notification"},E.a.fetchNotiHistory(s).then((function(t){if("Network Error"==t.message)throw"networkError";t.RESULT?(n.setState({transArr:t.HISTORY,isHasMoreTrans:!0}),e&&t.HISTORY.filter((function(t){return t.ID_HISTORY==e})).length>0&&n.setState({notiModal:t.HISTORY.filter((function(t){return t.ID_HISTORY==e}))[0]})):n.setState({transArr:[]}),n.setState({loading_noti_trans:!1}),n.props.fetchHistoryBadge()})).catch((function(t){n.setState({loading_noti_trans:!1}),"networkError"!=t||n.props.state.SwalVisible||n.props.alertNetworkError()}));case 4:case"end":return t.stop()}}),t)})))),Object(u.a)(Object(d.a)(n),"fetchNotifyNewsInfo",Object(a.a)(o.a.mark((function t(){var e,s,i=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=i.length>0&&void 0!==i[0]?i[0]:null,n.setState({loading_noti_news:!0}),s={type_history:1,menu_component:"Notification"},E.a.fetchNotiHistory(s).then((function(t){if("Network Error"==t.message)throw"networkError";t.RESULT?(n.setState({newsArr:t.HISTORY,isHasMoreNews:!0}),e&&t.HISTORY.filter((function(t){return t.ID_HISTORY==e})).length>0&&n.setState({notiModal:t.HISTORY.filter((function(t){return t.ID_HISTORY==e}))[0]})):n.setState({newsArr:[]}),n.setState({loading_noti_news:!1}),n.props.fetchHistoryBadge()})).catch((function(t){n.setState({loading_noti_news:!1}),"networkError"!=t||n.props.state.SwalVisible||n.props.alertNetworkError()}));case 4:case"end":return t.stop()}}),t)})))),Object(u.a)(Object(d.a)(n),"fetchMoreNotifyNewsInfo",function(){var t=Object(a.a)(o.a.mark((function t(e){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.setState({isHasMoreNews:!1,isLoadMoreNews:!0}),s={type_history:1,fetch_type:"more",id_history:e,menu_component:"Notification"},E.a.fetchNotiHistory(s).then((function(t){if("Network Error"==t.message)throw"networkError";var e;t.RESULT&&(null===(e=t.HISTORY)||void 0===e?void 0:e.length)>0?n.setState({newsArr:n.state.newsArr.concat(t.HISTORY),isHasMoreNews:!0}):n.setState({isHasMoreNews:!1}),n.setState({isLoadMoreNews:!1}),n.props.fetchHistoryBadge()})).catch((function(t){n.setState({isLoadMoreNews:!1}),"networkError"!=t||n.props.state.SwalVisible||n.props.alertNetworkError()}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object(u.a)(Object(d.a)(n),"fetchRefreshNotifyNewsInfo",function(){var t=Object(a.a)(o.a.mark((function t(e){var s,i,r=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=!(r.length>1&&void 0!==r[1])||r[1],n.setState({isLoadRefreshNews:s}),s&&document.getElementById("news_history").scrollTo({top:0,behavior:"auto"}),i={type_history:1,fetch_type:"refresh",id_history:e,menu_component:"Notification"},E.a.fetchNotiHistory(i).then((function(t){if("Network Error"==t.message)throw"networkError";t.RESULT&&n.setState({newsArr:t.HISTORY.concat(n.state.newsArr)}),n.setState({isLoadRefreshNews:!1}),n.props.fetchHistoryBadge()})).catch((function(t){n.setState({isLoadRefreshNews:!1}),"networkError"!=t||n.props.state.SwalVisible||n.props.alertNetworkError()}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object(u.a)(Object(d.a)(n),"fetchMoreNotifyTransactionInfo",function(){var t=Object(a.a)(o.a.mark((function t(e){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.setState({isHasMoreTrans:!1,isLoadMoreTrans:!0}),s={type_history:2,fetch_type:"more",id_history:e,menu_component:"Notification"},E.a.fetchNotiHistory(s).then((function(t){if("Network Error"==t.message)throw"networkError";var e;t.RESULT&&(null===(e=t.HISTORY)||void 0===e?void 0:e.length)>0?(n.setState({transArr:n.state.transArr.concat(t.HISTORY),isHasMoreTrans:!0}),n.props.fetchHistoryBadge()):n.setState({isHasMoreTrans:!1}),n.setState({isLoadMoreTrans:!1})})).catch((function(t){n.setState({isLoadMoreTrans:!1}),"networkError"!=t||n.props.state.SwalVisible||n.props.alertNetworkError()}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object(u.a)(Object(d.a)(n),"fetchRefreshNotifyTransactionInfo",function(){var t=Object(a.a)(o.a.mark((function t(e){var s,i,r=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=!(r.length>1&&void 0!==r[1])||r[1],n.setState({isLoadRefreshTrans:s}),s&&document.getElementById("trans_history").scrollTo({top:0,behavior:"auto"}),i={type_history:2,fetch_type:"refresh",id_history:e,menu_component:"Notification"},E.a.fetchNotiHistory(i).then((function(t){if("Network Error"==t.message)throw"networkError";t.RESULT&&(n.setState({transArr:t.HISTORY.concat(n.state.transArr)}),n.props.fetchHistoryBadge()),n.setState({isLoadRefreshTrans:!1})})).catch((function(t){n.setState({isLoadRefreshTrans:!1}),"networkError"!=t||n.props.state.SwalVisible||n.props.alertNetworkError()}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.state={statusCode:200,isInitialLoading:!1,errData:null,loading:!0,pathName:"",newsArr:[],transArr:[],notifyOn:0},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.setState({pathName:Object(U.i)(b.a.pathname)}),this.fetchNotifyNewsInfo(),this.fetchNotifyTransactionInfo()}},{key:"deleteAllNotification",value:function(){var t=this;this.setState({loadingDeleteNoti:!0});var e={type_history:0==this.state.notifyOn?1:2,menu_component:"Notification"};E.a.deleteAllHistory(e).then((function(e){if("Network Error"==e.message)throw"networkError";e.RESULT?(t.props.fetchHistoryBadge(),0==t.state.notifyOn?t.fetchNotifyNewsInfo():t.fetchNotifyTransactionInfo()):t.setState(W({},t.props.checkResultFalseMessage(e,{},""))),t.setState({loadingDeleteNoti:!1})})).catch((function(e){t.setState({loadingDeleteNoti:!1}),t.setState(W({},t.props.checkCatchMessage(e)))}))}},{key:"readAllNotification",value:function(){var t=this;this.setState({loadingReadAll:!0});var e={type_history:0==this.state.notifyOn?1:2,menu_component:"Notification"};E.a.updateReadAllHistory(e).then((function(e){if("Network Error"==e.message)throw"networkError";e.RESULT?(t.props.fetchHistoryBadge(),0==t.state.notifyOn?t.fetchNotifyNewsInfo():t.fetchNotifyTransactionInfo()):t.setState(W({},t.props.checkResultFalseMessage(e,{},""))),t.setState({loadingReadAll:!1})})).catch((function(e){t.setState({loadingReadAll:!1}),t.setState(W({},t.props.checkCatchMessage(e)))}))}},{key:"onChangeNotiTab",value:function(t){this.setState({notifyOn:t})}},{key:"closeModalNoti",value:function(){this.setState({isShowNoti:!1,notiModal:null})}},{key:"render",value:function(){var t=this,e=this.props.HISTORY_BADGE;return this.state.statusCode>=300&&this.state.statusCode<500?Object(i.jsx)(A.default,{statusCode:this.state.statusCode,err:this.state.errData,showModalLogout:function(){return t.props.showModalLogout()}}):Object(i.jsx)("div",{className:"main-layout",style:{position:"relative"},children:Object(i.jsxs)("div",{style:{width:"100%"},children:[Object(i.jsx)(_.a,{checked:!this.state.loading||!this.state.isInitialLoading}),Object(i.jsx)(x.a,{children:Object(i.jsx)("link",{rel:"stylesheet",href:"".concat(J.cssFolder,"/home.css")})}),Object(i.jsx)("div",{className:"main-content",style:{width:"100%",display:"flex",flexDirection:"column"},children:Object(i.jsxs)(O.a,{className:"sub-content isc-card card-shadow",style:{flex:1,display:"flex"},children:[Object(i.jsxs)(w.a,{xs:this.state.isShowNoti?0:24,sm:this.state.isShowNoti?0:24,md:this.state.isShowNoti?0:24,lg:8,xl:8,xxl:8,style:{display:"flex",flexDirection:"column",overflow:"hidden"},children:[Object(i.jsxs)("div",{style:{flexDirection:"row",display:"flex",cursor:"pointer",userSelect:"none"},children:[Object(i.jsx)("div",{className:"noti-header-col",children:Object(i.jsxs)("div",{onClick:function(){0==t.state.notifyOn?t.state.newsArr.length>0&&!t.state.isLoadRefreshNews&&t.fetchRefreshNotifyNewsInfo(t.state.newsArr[0].ID_HISTORY):(t.onChangeNotiTab(0),t.state.newsArr.length>0&&!t.state.isLoadRefreshNews&&t.fetchRefreshNotifyNewsInfo(t.state.newsArr[0].ID_HISTORY,!1))},className:0==this.state.notifyOn?"noti-header-left active":"noti-header-left",children:[Object(i.jsx)("div",{children:P.a.t("General")}),Object(i.jsx)("img",{alt:"icon",src:0==this.state.notifyOn?"".concat(J.svgFolder,"/news_notify_focused.webp"):"".concat(J.svgFolder,"/news_notify.webp"),style:{opacity:0==this.state.notifyOn?1:.8,width:"25px",height:"25px",marginLeft:"5px"}}),e.data?Object(i.jsx)(m.a,{count:e.data.BADGE_1,className:"badge",style:{transform:"translateY(50%) translateX(-50%) scale(0.8)",fontSize:"x-small"}}):null]})}),Object(i.jsx)("div",{className:"noti-header-col",children:Object(i.jsxs)("div",{onClick:function(){1==t.state.notifyOn?t.state.transArr.length>0&&!t.state.isLoadRefreshTrans&&t.fetchRefreshNotifyTransactionInfo(t.state.transArr[0].ID_HISTORY):(t.state.transArr.length>0&&!t.state.isLoadRefreshTrans&&t.fetchRefreshNotifyTransactionInfo(t.state.transArr[0].ID_HISTORY,!1),t.onChangeNotiTab(1))},className:1==this.state.notifyOn?"noti-header-right active":"noti-header-right",children:[P.a.t("Transactions"),Object(i.jsx)("img",{alt:"icon",src:1==this.state.notifyOn?"".concat(J.svgFolder,"/transac_notify_focused.webp"):"".concat(J.svgFolder,"/transac_notify.webp"),style:{opacity:1==this.state.notifyOn?1:.8,width:"25px",height:"25px",marginLeft:"5px"}}),e.data?Object(i.jsx)(m.a,{count:e.data.BADGE_2,className:"badge",style:{transform:"translateY(50%) translateX(-50%) scale(0.8)",fontSize:"x-small"}}):null]})})]}),0==this.state.notifyOn?Object(i.jsx)("div",{id:"news_history",style:{display:"flex",flex:1,flexDirection:"column",overflowY:"auto",overflowX:"hidden",padding:"0px 0px 10px 0",borderTop:"1px solid rgba(161, 177, 192, 0.2)"},children:Object(i.jsx)(N.a,{indicator:Object(i.jsx)(S.a,{type:"loading",style:{fontSize:24},spin:!0}),spinning:!!this.state.loadingDeleteNoti,tip:P.a.t("DeletingNoti"),children:this.state.loading_noti_news&&0==this.state.newsArr.length?Object(i.jsx)("div",{children:Object(n.a)(Array(4)).map((function(t,e){return Object(i.jsxs)("div",{style:{opacity:1/(e+1)},children:[Object(i.jsx)("div",{style:{padding:"5px 10px 0 10px"},children:Object(i.jsx)(D.a,{variant:"text",width:"60%"})}),Object(i.jsx)("div",{style:{padding:"5px 10px"},children:Object(i.jsx)(D.a,{variant:"rect",width:"100%",height:60})})]},e)}))}):0==this.state.newsArr.length?Object(i.jsxs)("div",{className:"sub-text",style:{textAlign:"center",padding:"10px"},children:[Object(i.jsx)(v.a,{description:P.a.t("NotFoundHistoryNoti"),style:{},image:Object(i.jsxs)("picture",{children:[Object(i.jsx)("source",{srcSet:"".concat(J.imageFolder,"/notfound.webp"),type:"image/webp"}),Object(i.jsx)("source",{srcSet:"".concat(J.imageFolder,"/notfound.png"),type:"image/png"}),Object(i.jsx)("img",{alt:"notfound-icon",src:"".concat(J.imageFolder,"/notfound.png"),type:"image/png",style:{userSelect:"none",opacity:.6}})]})}),Object(i.jsx)("span",{onClick:function(){return t.fetchNotifyNewsInfo()},className:"link-text",style:{cursor:"pointer",userSelect:"none"},children:P.a.t("RefreshHistoryNoti")})]}):Object(i.jsxs)(k.a,{dataLength:this.state.newsArr.length,next:function(){return t.fetchMoreNotifyNewsInfo(t.state.newsArr[t.state.newsArr.length-1].ID_HISTORY)},hasMore:this.state.isHasMoreNews,scrollableTarget:"news_history",id:"news_history_infinite",children:[Object(i.jsxs)("div",{className:"sub-text ".concat(this.state.isLoadRefreshNews?"loading-refresh ":"loading-refresh-hidden"),style:{padding:5,display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(i.jsx)(S.a,{type:"loading",spin:!0,style:{paddingRight:5}})," ",Object(i.jsx)("span",{style:{},children:P.a.t("RefreshingHistoryNoti")})]}),this.state.newsArr.map((function(e,s){return Object(i.jsx)(O.a,{className:"row-noti noti-detail-left ".concat(1==e.READ_STATUS?"readed":""),style:{animationDuration:s<5?"".concat(.2*(s+1),"s"):"1s"},children:Object(i.jsx)(w.a,{md:24,lg:24,xl:24,style:{paddingBottom:"5px",cursor:"pointer"},children:Object(i.jsxs)("div",{onClick:function(){0==e.READ_STATUS&&t.updateReadHistory(e.ID_HISTORY,1),t.setState({notiModal:e,isShowNoti:!0,notiModalType:2})},style:{flex:1},children:[Object(i.jsxs)("div",{className:1==e.READ_STATUS?"noti-list-readed":"noti-list",style:{padding:"5px 0px 5px",borderTopRightRadius:"15px",borderBottomLeftRadius:"15px",borderBottomRightRadius:"15px"},children:[Object(i.jsxs)("div",{style:{flexDirection:"row",display:"flex",justifyContent:"flex-start"},children:[Object(i.jsx)(M.a,{className:"noti-icon",src:"".concat(J.svgFolder,"/news_notify_focused.webp"),style:{padding:"3px",borderWidth:1,borderStyle:"solid",borderColor:"#82C226",height:"1em",width:"1em",overflow:"hidden"}}),Object(i.jsx)("div",{className:"noti-title-bar",style:{width:"5px",borderRadius:"4px",background:"var(--gd-title-header)"}}),Object(i.jsx)("div",{style:{padding:"0 0.5em"},children:e.TITLE})]}),Object(i.jsx)("div",{className:"noti-detail",dangerouslySetInnerHTML:{__html:e.DETAIL},style:{overflow:"hidden",textOverflow:"ellipsis",textIndent:"2em"}})]}),Object(i.jsxs)("div",{style:{color:"#A1B1C0",flexDirection:"row",display:"flex",justifyContent:"space-between"},children:[Object(i.jsx)("div",{title:e.RECEIVE_DATE,style:{paddingLeft:"5px"},children:B()(e.RECEIVE_DATE.split(" ")[0]+(U.d.monthNamesShort.indexOf(e.RECEIVE_DATE.split(" ")[1])+1<10?"0"+(U.d.monthNamesShort.indexOf(e.RECEIVE_DATE.split(" ")[1])+1):U.d.monthNamesShort.indexOf(e.RECEIVE_DATE.split(" ")[1])+1)+(e.RECEIVE_DATE.split(" ")[2]-543)+e.RECEIVE_DATE.split(" ")[4],"DDMMYYYY hh:mm:ss").locale(P.a.language).fromNow()}),1==e.READ_STATUS?Object(i.jsxs)("div",{style:{flexDirection:"row",display:"flex",alignItems:"center",paddingLeft:"5px"},children:[Object(i.jsx)("img",{alt:"icon",src:"".concat(J.svgFolder,"/email_readed.webp"),style:{margin:"0px 4px",width:"1em",height:"1em"}}),P.a.t("Readed")]}):null]})]})})},s)})),this.state.isHasMoreNews?Object(i.jsx)("div",{className:"sub-text",style:{padding:10,textAlign:"center",userSelect:"none"},children:Object(i.jsx)("span",{style:{},children:P.a.t("LoadmoreHistoryNoti")})}):this.state.isLoadMoreNews?Object(i.jsxs)("div",{className:"sub-text",style:{padding:10,display:"flex",justifyContent:"center",alignItems:"center",userSelect:"none"},children:[Object(i.jsx)(S.a,{type:"loading",spin:!0,style:{paddingRight:5}})," ",Object(i.jsx)("span",{style:{},children:P.a.t("LoadingmoreHistoryNoti")})]}):Object(i.jsx)("div",{className:"sub-text",style:{padding:"10px",textAlign:"center",userSelect:"none"},children:Object(i.jsx)("span",{onClick:function(){return t.fetchMoreNotifyNewsInfo(t.state.newsArr[t.state.newsArr.length-1].ID_HISTORY)},className:"showmore-notify",style:{padding:"5px 10px"},children:P.a.t("NomoreHistoryNoti")})})]})})}):null,1==this.state.notifyOn?Object(i.jsx)("div",{id:"trans_history",style:{display:"flex",flex:1,flexDirection:"column",overflowY:"auto",overflowX:"hidden",padding:"0px 0px 10px 0",borderTop:"1px solid rgba(161, 177, 192, 0.2)"},children:Object(i.jsx)(N.a,{indicator:Object(i.jsx)(S.a,{type:"loading",style:{fontSize:24},spin:!0}),spinning:!!this.state.loadingDeleteNoti,tip:P.a.t("DeletingNoti"),children:this.state.loading_noti_trans&&0==this.state.transArr.length?Object(i.jsx)("div",{children:Object(n.a)(Array(4)).map((function(t,e){return Object(i.jsxs)("div",{style:{opacity:1/(e+1)},children:[Object(i.jsx)("div",{style:{padding:"5px 10px 0 10px"},children:Object(i.jsx)(D.a,{variant:"text",width:"60%"})}),Object(i.jsx)("div",{style:{padding:"5px 10px"},children:Object(i.jsx)(D.a,{variant:"rect",width:"100%",height:60})})]},e)}))}):0==this.state.transArr.length?Object(i.jsxs)("div",{className:"sub-text",style:{textAlign:"center",padding:"10px"},children:[Object(i.jsx)(v.a,{description:P.a.t("NotFoundHistoryNoti"),style:{},image:Object(i.jsxs)("picture",{children:[Object(i.jsx)("source",{srcSet:"".concat(J.imageFolder,"/notfound.webp"),type:"image/webp"}),Object(i.jsx)("source",{srcSet:"".concat(J.imageFolder,"/notfound.png"),type:"image/png"}),Object(i.jsx)("img",{alt:"notfound-icon",src:"".concat(J.imageFolder,"/notfound.png"),type:"image/png",style:{userSelect:"none",opacity:.6}})]})}),Object(i.jsx)("span",{onClick:function(){return t.fetchNotifyTransactionInfo()},className:"link-text",style:{cursor:"pointer",userSelect:"none"},children:P.a.t("RefreshHistoryNoti")})]}):Object(i.jsxs)(k.a,{dataLength:this.state.transArr.length,next:function(){return t.fetchMoreNotifyTransactionInfo(t.state.transArr[t.state.transArr.length-1].ID_HISTORY)},hasMore:this.state.isHasMoreTrans,scrollableTarget:"trans_history",id:"trans_history_infinite",children:[Object(i.jsxs)("div",{className:"sub-text ".concat(this.state.isLoadRefreshTrans?"loading-refresh ":"loading-refresh-hidden"),style:{padding:5,display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(i.jsx)(S.a,{type:"loading",spin:!0,style:{paddingRight:5}})," ",Object(i.jsx)("span",{style:{},children:P.a.t("RefreshingHistoryNoti")})]}),this.state.transArr.map((function(e,s){return Object(i.jsx)("div",{children:Object(i.jsx)(O.a,{className:"row-noti noti-detail-right ".concat(1==e.READ_STATUS?"readed":""),style:{animationDuration:s<5?"".concat(.2*(s+1),"s"):"1s"},children:Object(i.jsx)(w.a,{md:24,lg:24,xl:24,style:{paddingBottom:"5px",cursor:"pointer"},children:Object(i.jsxs)("div",{onClick:function(){0==e.READ_STATUS&&t.updateReadHistory(e.ID_HISTORY,2),t.setState({notiModal:e,isShowNoti:!0,notiModalType:2})},style:{flex:1},children:[Object(i.jsxs)("div",{className:1==e.READ_STATUS?"noti-list-readed":"noti-list",style:{padding:"5px 0px 5px",borderTopRightRadius:"15px",borderBottomLeftRadius:"15px",borderBottomRightRadius:"15px"},children:[Object(i.jsxs)("div",{style:{flexDirection:"row",display:"flex",justifyContent:"flex-start"},children:[Object(i.jsx)(M.a,{className:"noti-icon",src:"".concat(J.svgFolder,"/transac_notify_focused.webp"),style:{padding:"3px",borderWidth:1,borderStyle:"solid",borderColor:"#0095DA",height:"1em",width:"1em",overflow:"hidden"}}),Object(i.jsx)("div",{className:"noti-title-bar",style:{width:"5px",borderRadius:"4px",background:"var(--gd-title-sub)"}}),Object(i.jsx)("div",{style:{padding:"0 0.5em"},children:e.TITLE})]}),Object(i.jsx)("div",{dangerouslySetInnerHTML:{__html:e.DETAIL},className:"noti-detail",style:{overflow:"hidden",textOverflow:"ellipsis",textIndent:"2em"}})]}),Object(i.jsxs)("div",{style:{color:"#A1B1C0",flexDirection:"row",display:"flex",justifyContent:"space-between"},children:[Object(i.jsx)("div",{title:e.RECEIVE_DATE,style:{},children:B()(e.RECEIVE_DATE.split(" ")[0]+(U.d.monthNamesShort.indexOf(e.RECEIVE_DATE.split(" ")[1])+1<10?"0"+(U.d.monthNamesShort.indexOf(e.RECEIVE_DATE.split(" ")[1])+1):U.d.monthNamesShort.indexOf(e.RECEIVE_DATE.split(" ")[1])+1)+(e.RECEIVE_DATE.split(" ")[2]-543)+e.RECEIVE_DATE.split(" ")[4],"DDMMYYYY hh:mm:ss").locale(P.a.language).fromNow()}),1==e.READ_STATUS?Object(i.jsxs)("div",{style:{flexDirection:"row",display:"flex",alignItems:"center",paddingLeft:"5px"},children:[Object(i.jsx)("img",{alt:"icon",src:"".concat(J.svgFolder,"/email_readed.webp"),style:{margin:"0px 4px",width:"1em",height:"1em"}}),P.a.t("Readed")]}):null]})]})})})},s)})),this.state.isHasMoreTrans?Object(i.jsx)("div",{className:"sub-text",style:{padding:10,textAlign:"center",userSelect:"none"},children:Object(i.jsx)("span",{style:{},children:P.a.t("LoadmoreHistoryNoti")})}):this.state.isLoadMoreTrans?Object(i.jsxs)("div",{className:"sub-text",style:{padding:10,display:"flex",justifyContent:"center",alignItems:"center",userSelect:"none"},children:[Object(i.jsx)(S.a,{type:"loading",spin:!0,style:{paddingRight:5}})," ",Object(i.jsx)("span",{style:{},children:P.a.t("LoadingmoreHistoryNoti")})]}):Object(i.jsx)("div",{className:"sub-text",style:{padding:"10px",textAlign:"center",userSelect:"none"},children:Object(i.jsx)("span",{onClick:function(){return t.fetchMoreNotifyTransactionInfo(t.state.transArr[t.state.transArr.length-1].ID_HISTORY)},className:"showmore-notify",style:{padding:"5px 10px"},children:P.a.t("NomoreHistoryNoti")})})]})})}):null]}),Object(i.jsxs)(w.a,{xs:this.state.isShowNoti?24:0,sm:this.state.isShowNoti?24:0,md:this.state.isShowNoti?24:0,lg:16,xl:16,xxl:16,style:{overflow:"hidden",borderRadius:5},children:[Object(i.jsx)("div",{style:{padding:"0 20px"},children:Object(i.jsx)(F.a,{th:"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19",en:"Notification"})}),this.state.notiModal?Object(i.jsxs)("div",{style:{overflow:"auto"},children:[Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",padding:"10px 20px 0 20px"},children:[Object(i.jsx)(T.a,{title:P.a.t("ConfirmDeleteNoti"),onConfirm:function(){t.deleteHistory(t.state.notiModal.ID_HISTORY,t.state.notifyOn)},okText:P.a.t("Yes"),cancelText:P.a.t("No"),children:Object(i.jsx)("div",{title:P.a.t("Delete"),className:"noti-modal-btn",style:{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(i.jsx)(S.a,{type:"delete",className:"sub-text red-hover"})})}),Object(i.jsx)("div",{title:P.a.t("Close"),className:"noti-modal-btn",onClick:function(){return t.closeModalNoti()},style:{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(i.jsx)(S.a,{type:"close",className:"sub-text red-hover"})})]}),Object(i.jsxs)("div",{style:{padding:"0 10px"},children:[Object(i.jsx)("div",{className:"sub-text",style:{fontSize:"small",padding:"0 20px"},children:this.state.notiModal.RECEIVE_DATE}),Object(i.jsx)("div",{style:{padding:"10px 20px 5px",fontSize:"larger",fontWeight:"bold"},children:this.state.notiModal.TITLE}),Object(i.jsx)("div",{style:{padding:"0 20px 20px 20px"},children:Object(i.jsx)("p",{dangerouslySetInnerHTML:{__html:this.state.notiModal.DETAIL}})})]})]}):Object(i.jsx)("div",{style:{textAlign:"center",padding:20},children:Object(i.jsx)(C,{style:{fontSize:"5em",opacity:.4,color:"grey"}})})]})]})})]})})}}]),s}(y.PureComponent);e.default=Object(H.b)((function(t){return{HISTORY_BADGE:t.HISTORY_BADGE}}),(function(t){return{fetchHistoryBadge:function(){return t(Object(V.c)())}}}))(Object(z.c)()(K))}},[["Wk7L",0,2,4,5,8,7,11,1,3,6,9,10]]]);