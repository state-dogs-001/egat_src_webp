_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[69],{"8E9n":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/SettingManageDevice",function(){return n("8swe")}])},"8swe":function(e,t,n){"use strict";n.r(t);var c=n("rg98"),s=n("H+61"),a=n("UlJF"),i=n("+Css"),r=n("7LId"),o=n("VIvw"),l=n("iHvq"),d=n("cpVT"),u=n("vJKn"),p=n.n(u),j=n("q1tI"),h=n("g4pe"),f=n.n(h),b=n("20a2"),g=n.n(b),O=n("CtXQ"),v=n("ECub"),m=n("WM+0"),x=n("VlGh"),y=n("xtEs"),D=n("mOvS"),w=n.n(D),S=n("Y0NT"),E=n("/MKj"),N=n("MoW8"),_=n("fH4n"),L=n("9kay"),A=n("nKUr");function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=Object(l.a)(e);if(t){var s=Object(l.a)(this).constructor;n=Reflect.construct(c,arguments,s)}else n=c.apply(this,arguments);return Object(o.a)(this,n)}}var M=w()().publicRuntimeConfig,T=function(e){Object(r.a)(n,e);var t=I(n);function n(e){var a;return Object(s.a)(this,n),a=t.call(this,e),Object(d.a)(Object(i.a)(a),"deleteDevice",function(){var e=Object(c.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({isLoadDeleteDevice:t}),n={id_token:t,menu_component:"SettingManageDevice"},m.a.updateManageDevice(n).then((function(e){if("Network Error"==e.message)throw"networkError";e.RESULT?a.fetchManageDevice():(a.setState({isLoadDeleteDevice:0}),a.setState(k({},a.props.checkResultFalseMessage(e))))})).catch((function(e){a.setState({isLoadDeleteDevice:0}),a.setState(k({},a.props.checkCatchMessage(e)))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(d.a)(Object(i.a)(a),"fetchManageDevice",Object(c.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({loading:!0}),t={menu_component:Object(y.i)(g.a.pathname)},m.a.fetchManageDevice(t).then((function(e){e.RESULT?a.setState({deviceArr:e.DEVICE}):a.setState(k({},a.props.checkResultFalseMessage(e,{deviceArr:[]}))),a.setState({loading:!1})})).catch((function(e){a.setState({loading:!1}),a.setState(k({},a.props.checkCatchMessage(e)))}));case 3:case"end":return e.stop()}}),e)})))),a.state={statusCode:200,isInitialLoading:!0,errData:null,loading:!0,pathName:"",deviceArr:[],isLoadDeleteDevice:0},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.setState({pathName:Object(y.i)(g.a.pathname)}),this.fetchManageDevice()}},{key:"render",value:function(){var e=this;this.props.LANGUAGE;return this.state.statusCode>=300&&this.state.statusCode<500?Object(A.jsx)(S.default,{statusCode:this.state.statusCode,err:this.state.errData,showModalLogout:function(){return e.props.showModalLogout()}}):Object(A.jsx)("div",{className:"main-layout",style:{position:"relative"},children:Object(A.jsxs)("div",{style:{width:"100%"},children:[Object(A.jsx)(x.a,{checked:!this.state.loading||!this.state.isInitialLoading}),Object(A.jsx)(f.a,{children:Object(A.jsx)("link",{rel:"stylesheet",href:"".concat(M.cssFolder,"/devicemanage.css")})}),Object(A.jsx)("div",{className:"main-content",style:{width:"100%"},children:Object(A.jsxs)("div",{className:"sub-content",children:[Object(A.jsx)(N.a,{th:"\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e2d\u0e38\u0e1b\u0e01\u0e23\u0e13\u0e4c",en:"Manage device"}),Object(A.jsx)("div",{className:"card-shadow isc-card",style:{marginBottom:"1em",paddingBottom:"1em",flexDirection:"column",display:"flex",overflow:"hidden",flex:1},children:this.state.deviceArr&&this.state.deviceArr.length>0?this.state.deviceArr.map((function(t,n){return Object(A.jsxs)("div",{className:"device-item",style:{animationDuration:n<5?"".concat(.2*(n+1),"s"):"1s",flexDirection:"row",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px",borderBottom:"1px solid rgba(161, 177, 192, 0.3)"},children:[e.state.isLoadDeleteDevice==t.ID_TOKEN?Object(A.jsx)("div",{style:{backgroundColor:"rgba(100,100,100,0.1)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",position:"absolute",right:0,bottom:0,left:0,top:0},children:Object(A.jsx)(O.a,{type:"loading",spin:!0,style:{color:"#FFF",fontSize:"large"}})}):null,Object(A.jsxs)("div",{style:{flexDirection:"row",display:"flex",alignItems:"center"},children:["web"==t.CHANNEL?Object(A.jsx)("img",{alt:"icon",src:"".concat(M.svgFolder,"/device_computer.webp"),style:{width:"30px",height:"30px",userSelect:"none"}}):Object(A.jsx)("img",{alt:"icon",src:"".concat(M.svgFolder,"/device_phone.webp"),style:{width:"30px",height:"30px",userSelect:"none"}}),Object(A.jsxs)("div",{style:{padding:"0 1em"},children:[Object(A.jsxs)("div",{style:{fontSize:"small",padding:"5px 0"},children:[t.DEVICE_NAME," ",t.THIS_DEVICE?Object(A.jsx)("span",{style:{color:"#82C226",fontSize:"smaller"},children:"(".concat(_.a.t("ThisDevice"),")")}):null]}),!!t.LOGIN_DATE&&Object(A.jsx)("div",{className:"sub-text",style:{fontSize:"smaller",padding:"5px 0"},children:t.LOGIN_DATE?t.LOGIN_DATE:"-"}),!!t.LAST_LOGIN_DATE&&Object(A.jsxs)("div",{children:[_.a.t("LastLoginDate")," ",t.LAST_LOGIN_DATE]})]})]}),Object(A.jsx)("div",{children:t.THIS_DEVICE?Object(A.jsx)("div",{style:{color:"#82C226",userSelect:"none"},children:_.a.t("ThisDevice")}):null})]},n)})):this.state.loading?Object(A.jsxs)("div",{className:"sub-text",style:{textAlign:"center",padding:"10px"},children:[Object(A.jsx)(O.a,{type:"loading",spin:!0,style:{color:"#888E9E"}}),Object(A.jsx)("div",{className:"sub-text",style:{fontSize:"smaller"},children:_.a.t("Loading")})]}):Object(A.jsxs)("div",{style:{fontSize:"small",textAlign:"center"},children:[Object(A.jsx)(v.a,{className:"empty-div",description:_.a.t("DataNotFound"),style:{fontSize:"small"},image:Object(A.jsxs)("picture",{children:[Object(A.jsx)("source",{srcSet:"".concat(M.imageFolder,"/notfound.webp"),type:"image/webp"}),Object(A.jsx)("source",{srcSet:"".concat(M.imageFolder,"/notfound.png"),type:"image/png"}),Object(A.jsx)("img",{alt:"notfound-icon",src:"".concat(M.imageFolder,"/notfound.png"),type:"image/png",style:{userSelect:"none",opacity:.6}})]})}),Object(A.jsx)("span",{onClick:function(){return e.fetchManageDevice()},className:"link-text",style:{cursor:"pointer",userSelect:"none"},children:_.a.t("Reload")})]})})]})})]})})}}]),n}(j.PureComponent);t.default=Object(E.b)((function(e){return{LANGUAGE:e.LANGUAGE}}),(function(e){return{}}))(Object(L.c)()(T))}},[["8E9n",2,1,4,5,7,8,11,0,3,6,9,10]]]);