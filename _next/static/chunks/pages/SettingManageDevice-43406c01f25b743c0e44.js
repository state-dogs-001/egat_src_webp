_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[69],{"8E9n":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/SettingManageDevice",function(){return n("8swe")}])},"8swe":function(e,t,n){"use strict";n.r(t);var c=n("nKUr"),s=n("vJKn"),a=n.n(s),i=n("rg98"),r=n("H+61"),o=n("UlJF"),l=n("+Css"),d=n("7LId"),u=n("VIvw"),p=n("iHvq"),j=n("cpVT"),h=n("q1tI"),f=n("g4pe"),b=n.n(f),g=n("20a2"),O=n.n(g),v=n("CtXQ"),m=n("ECub"),x=n("WM+0"),y=n("VlGh"),D=n("xtEs"),w=n("mOvS"),S=n.n(w),E=n("Y0NT"),N=n("/MKj"),_=n("MoW8"),L=n("fH4n"),A=n("9kay");function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=Object(p.a)(e);if(t){var s=Object(p.a)(this).constructor;n=Reflect.construct(c,arguments,s)}else n=c.apply(this,arguments);return Object(u.a)(this,n)}}var M=S()().publicRuntimeConfig,T=function(e){Object(d.a)(n,e);var t=I(n);function n(e){var c;return Object(r.a)(this,n),c=t.call(this,e),Object(j.a)(Object(l.a)(c),"deleteDevice",function(){var e=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.setState({isLoadDeleteDevice:t}),n={id_token:t,menu_component:"SettingManageDevice"},x.a.updateManageDevice(n).then((function(e){if("Network Error"==e.message)throw"networkError";e.RESULT?c.fetchManageDevice():(c.setState({isLoadDeleteDevice:0}),c.setState(k({},c.props.checkResultFalseMessage(e))))})).catch((function(e){c.setState({isLoadDeleteDevice:0}),c.setState(k({},c.props.checkCatchMessage(e)))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(j.a)(Object(l.a)(c),"fetchManageDevice",Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.setState({loading:!0}),t={menu_component:Object(D.i)(O.a.pathname)},x.a.fetchManageDevice(t).then((function(e){e.RESULT?c.setState({deviceArr:e.DEVICE}):c.setState(k({},c.props.checkResultFalseMessage(e,{deviceArr:[]}))),c.setState({loading:!1})})).catch((function(e){c.setState({loading:!1}),c.setState(k({},c.props.checkCatchMessage(e)))}));case 3:case"end":return e.stop()}}),e)})))),c.state={statusCode:200,isInitialLoading:!0,errData:null,loading:!0,pathName:"",deviceArr:[],isLoadDeleteDevice:0},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({pathName:Object(D.i)(O.a.pathname)}),this.fetchManageDevice()}},{key:"render",value:function(){var e=this;this.props.LANGUAGE;return this.state.statusCode>=300&&this.state.statusCode<500?Object(c.jsx)(E.default,{statusCode:this.state.statusCode,err:this.state.errData,showModalLogout:function(){return e.props.showModalLogout()}}):Object(c.jsx)("div",{className:"main-layout",style:{position:"relative"},children:Object(c.jsxs)("div",{style:{width:"100%"},children:[Object(c.jsx)(y.a,{checked:!this.state.loading||!this.state.isInitialLoading}),Object(c.jsx)(b.a,{children:Object(c.jsx)("link",{rel:"stylesheet",href:"".concat(M.cssFolder,"/devicemanage.css")})}),Object(c.jsx)("div",{className:"main-content",style:{width:"100%"},children:Object(c.jsxs)("div",{className:"sub-content",children:[Object(c.jsx)(_.a,{th:"\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e2d\u0e38\u0e1b\u0e01\u0e23\u0e13\u0e4c",en:"Manage device"}),Object(c.jsx)("div",{className:"card-shadow isc-card",style:{marginBottom:"1em",paddingBottom:"1em",flexDirection:"column",display:"flex",overflow:"hidden",flex:1},children:this.state.deviceArr&&this.state.deviceArr.length>0?this.state.deviceArr.map((function(t,n){return Object(c.jsxs)("div",{className:"device-item",style:{animationDuration:n<5?"".concat(.2*(n+1),"s"):"1s",flexDirection:"row",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px",borderBottom:"1px solid rgba(161, 177, 192, 0.3)"},children:[e.state.isLoadDeleteDevice==t.ID_TOKEN?Object(c.jsx)("div",{style:{backgroundColor:"rgba(100,100,100,0.1)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",position:"absolute",right:0,bottom:0,left:0,top:0},children:Object(c.jsx)(v.a,{type:"loading",spin:!0,style:{color:"#FFF",fontSize:"large"}})}):null,Object(c.jsxs)("div",{style:{flexDirection:"row",display:"flex",alignItems:"center"},children:["web"==t.CHANNEL?Object(c.jsx)("img",{alt:"icon",src:"".concat(M.svgFolder,"/device_computer.webp"),style:{width:"30px",height:"30px",userSelect:"none"}}):Object(c.jsx)("img",{alt:"icon",src:"".concat(M.svgFolder,"/device_phone.webp"),style:{width:"30px",height:"30px",userSelect:"none"}}),Object(c.jsxs)("div",{style:{padding:"0 1em"},children:[Object(c.jsxs)("div",{style:{fontSize:"small",padding:"5px 0"},children:[t.DEVICE_NAME," ",t.THIS_DEVICE?Object(c.jsx)("span",{style:{color:"#82C226",fontSize:"smaller"},children:"(".concat(L.a.t("ThisDevice"),")")}):null]}),!!t.LOGIN_DATE&&Object(c.jsx)("div",{className:"sub-text",style:{fontSize:"smaller",padding:"5px 0"},children:t.LOGIN_DATE?t.LOGIN_DATE:"-"}),!!t.LAST_LOGIN_DATE&&Object(c.jsxs)("div",{children:[L.a.t("LastLoginDate")," ",t.LAST_LOGIN_DATE]})]})]}),Object(c.jsx)("div",{children:t.THIS_DEVICE?Object(c.jsx)("div",{style:{color:"#82C226",userSelect:"none"},children:L.a.t("ThisDevice")}):null})]},n)})):this.state.loading?Object(c.jsxs)("div",{className:"sub-text",style:{textAlign:"center",padding:"10px"},children:[Object(c.jsx)(v.a,{type:"loading",spin:!0,style:{color:"#888E9E"}}),Object(c.jsx)("div",{className:"sub-text",style:{fontSize:"smaller"},children:L.a.t("Loading")})]}):Object(c.jsxs)("div",{style:{fontSize:"small",textAlign:"center"},children:[Object(c.jsx)(m.a,{className:"empty-div",description:L.a.t("DataNotFound"),style:{fontSize:"small"},image:Object(c.jsxs)("picture",{children:[Object(c.jsx)("source",{srcSet:"".concat(M.imageFolder,"/notfound.webp"),type:"image/webp"}),Object(c.jsx)("source",{srcSet:"".concat(M.imageFolder,"/notfound.png"),type:"image/png"}),Object(c.jsx)("img",{alt:"notfound-icon",src:"".concat(M.imageFolder,"/notfound.png"),type:"image/png",style:{userSelect:"none",opacity:.6}})]})}),Object(c.jsx)("span",{onClick:function(){return e.fetchManageDevice()},className:"link-text",style:{cursor:"pointer",userSelect:"none"},children:L.a.t("Reload")})]})})]})})]})})}}]),n}(h.PureComponent);t.default=Object(N.b)((function(e){return{LANGUAGE:e.LANGUAGE}}),(function(e){return{}}))(Object(A.c)()(T))}},[["8E9n",0,2,4,5,8,7,11,1,3,6,9,10]]]);