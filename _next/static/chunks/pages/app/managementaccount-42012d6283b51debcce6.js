_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[84],{"8BnW":function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/managementaccount",function(){return i("SmwU")}])},SmwU:function(e,t,i){"use strict";i.r(t);var a=i("dhJC"),n=i("q1tI"),c=i("Xd8E"),o=i("WM+0"),l=i("fH4n"),r=i("Z3vd"),s=i("PSD3"),d=i.n(s),u=i("nKUr"),O=["menu_component"];t.default=function(){var e=new URLSearchParams(window.location.search),t=e.has("code")&&e.has("state");Object(n.useEffect)((function(){t&&s(),i()}),[]);var i=function(){var t={url_callback:window.location.href,sigma_key:e.has("state")?e.get("state").split("_")[0]:void 0,member_no:e.has("state")?e.get("state").split("_")[1]:void 0,auth_code:e.has("code")?e.get("code"):void 0};o.a.catchKmaBayData(t).catch((function(e){}))},s=function(){var t={menu_component:"bypassBindAccountConsent",sigma_key:e.has("state")?e.get("state").split("_")[0]:void 0,auth_code:e.has("code")?e.get("code"):void 0};o.a.passAuthCodeConfirmBindBay(t).then((function(e){var i=Object(a.a)(t,O);e.RESULT?d.a.fire({title:l.a.t("BindaccountBayKMAResultTitle"),text:"".concat(l.a.t("BindaccountBayKMAResultSuccessDes"),"\nValues => ").concat(JSON.stringify(i)),type:"success",confirmButtonText:l.a.t("BindaccountBayKMAConfirm")}):d.a.fire({title:l.a.t("BindaccountBayKMAResultTitle"),text:"".concat(l.a.t("BindaccountBayKMAResultErrorDes")),type:"error",confirmButtonText:l.a.t("BindaccountBayKMAConfirm")})})).catch((function(e){d.a.fire({title:l.a.t("BindaccountBayKMAResultTitle"),text:"".concat(l.a.t("BindaccountBayKMAResultErrorDes")),type:"error",confirmButtonText:l.a.t("BindaccountBayKMAConfirm")})}))};return Object(u.jsx)("div",{className:"main-layout",style:{position:"relative",margin:0},children:Object(u.jsx)("div",{style:{width:"100%"},children:Object(u.jsxs)("div",{className:"main-content",style:{display:"flex",flexDirection:"column"},children:[Object(u.jsx)("div",{className:"sub-content",style:{flex:1,minHeight:"unset",maxWidth:"unset"},children:Object(u.jsxs)("div",{style:{display:"flex",flex:1,justifyContent:"center",alignItems:"center",height:"100%",flexDirection:"column",padding:"80px 0"},children:[Object(u.jsx)(r.a,{variant:"outlined",color:"primary",onClick:function(){/iPad|iPhone/.test(navigator.userAgent),/Android/.test(navigator.userAgent);window.open("egatsaving://","_blank")},children:"\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19"}),Object(u.jsx)("div",{style:{padding:"18px 0px",opacity:"0.5",fontWeight:100,maxWidth:260,textAlign:"center"},children:'\u0e01\u0e14\u0e1b\u0e38\u0e48\u0e21 "\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19" \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19 EGAT Saving'})]})}),Object(u.jsx)(c.a,{className:"home-footer",footer_style:{maxWidth:"unset"},disabledMenu:!0})]})})})}},Xd8E:function(e,t,i){"use strict";var a=i("q1tI"),n=i("wx14"),c=i("Ff2n"),o=i("iuhU"),l=i("H2TA"),r=i("ye/S"),s=a.forwardRef((function(e,t){var i=e.absolute,l=void 0!==i&&i,r=e.classes,s=e.className,d=e.component,u=void 0===d?"hr":d,O=e.flexItem,f=void 0!==O&&O,h=e.light,p=void 0!==h&&h,x=e.orientation,j=void 0===x?"horizontal":x,g=e.role,m=void 0===g?"hr"!==u?"separator":void 0:g,b=e.variant,v=void 0===b?"fullWidth":b,y=Object(c.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return a.createElement(u,Object(n.a)({className:Object(o.a)(r.root,s,"fullWidth"!==v&&r[v],l&&r.absolute,f&&r.flexItem,p&&r.light,"vertical"===j&&r.vertical),role:m,ref:t},y))})),d=Object(l.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(r.a)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s),u=i("469l"),O=i("hlFM"),f=i("CtXQ"),h=i("BMrR"),p=i("kPKH"),x=i("fmKo"),j=i("mOvS"),g=i.n(j),m=i("/MKj"),b=i("fH4n"),v=i("9kay"),y=i("20a2"),E=i.n(y),w=i("PArb"),C=i("nKUr"),N=g()().publicRuntimeConfig,P=i("fmKo").default,B=function(e){return Object(C.jsxs)(O.a,{children:[Object(C.jsxs)(O.a,{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end",alignItem:"center",margin:"0 -8px",paddingTop:8},children:[P.POLICY_URL&&Object(C.jsx)(O.a,{sx:{color:e.isLightBg?"#535353":"white",cursor:"pointer",margin:"8px",opacity:.6,transition:".3s all","&:hover":{opacity:1}},onClick:function(){window.open(P.POLICY_URL)},children:"\u0e19\u0e42\u0e22\u0e1a\u0e32\u0e22\u0e01\u0e32\u0e23\u0e04\u0e38\u0e49\u0e21\u0e04\u0e23\u0e2d\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e48\u0e27\u0e19\u0e1a\u0e38\u0e04\u0e04\u0e25 (Privacy Policy)"}),Object(C.jsx)(O.a,{sx:{color:e.isLightBg?"#535353":"white",cursor:"pointer",margin:"8px",opacity:.6,transition:".3s all","&:hover":{opacity:1}},onClick:function(){window.open("".concat(N.prefixPath,"CookiePolicy"))},children:"\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e04\u0e38\u0e01\u0e01\u0e35\u0e49 (Cookies Policy)"})]}),Object(C.jsx)(w.a,{style:{margin:0,opacity:.4}})]})},A=g()().publicRuntimeConfig;t.a=Object(m.b)((function(e){return{MENU_LIST:e.MENU_LIST}}),(function(e){return{}}))(Object(v.c)()((function(e){var t=e.disabledMenu,i=e.MENU_LIST,a=null!==i&&void 0!==i&&i.data&&i.data.MENU_HOME?i.data.MENU_HOME:[];return Object(C.jsxs)("div",{className:e.className,style:{maxWidth:"100vw"},children:[!!e.isSubFooter&&!!x.default.COOP_HELP&&Object(C.jsx)("div",{className:"footer",style:{padding:"10px 40px",backgroundColor:x.default.FILTERED_FOOTER?"var(--coop-main-filter)":"var(--coop-second-color)",color:!x.default.IS_LIGHTSUBFOOTER&&"white",display:"flex",justifyContent:"center"},children:!!x.default.COOP_HELP&&Object(C.jsxs)("div",{onClick:function(){return window.open("".concat(x.default.COOP_HELP))},style:{textAlign:"center",padding:"0 10px",cursor:"pointer",width:"100%",maxWidth:1280,margin:"auto"},children:[Object(C.jsx)(f.a,{type:"question-circle",style:{fontSize:"25px"}}),Object(C.jsx)("div",{children:b.a.t("FrequentlyQuestions")})]})}),Object(C.jsxs)("div",{className:"footer main-footer",style:{background:x.default.FOOTER_COLORED?"var(--gd-title-header)":"var(--gd-black)",color:"white",fontSize:"smaller",whiteSpace:"pre-wrap"},children:[Object(C.jsxs)(h.a,{style:{width:"100%",maxWidth:1280,margin:"auto"},children:[Object(C.jsxs)(p.a,{sm:24,md:12,lg:12,xl:14,xxl:14,children:[Object(C.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",paddingBottom:"10px"},children:[Object(C.jsxs)("picture",{children:[Object(C.jsx)("source",{srcSet:"".concat(A.logoFolder,"/logo.webp"),type:"image/webp"}),Object(C.jsx)("source",{srcSet:"".concat(A.logoFolder,"/logo.png"),type:"image/png"}),Object(C.jsx)("img",{alt:"coop-icon",src:"".concat(A.logoFolder,"/logo.png"),type:"image/png",style:{height:"3em",maxWidth:"3em"}})]}),Object(C.jsxs)("div",{className:x.default.COOP_WEB?"coop-web-url":"",onClick:function(){return window.open(x.default.COOP_WEB)},style:{paddingLeft:10,fontSize:"initial"},children:[Object(C.jsx)("div",{children:"th"==b.a.language?x.default.COOP_NAME:x.default.COOP_NAME_EN}),Object(C.jsx)("div",{style:{fontSize:"smaller"},children:"th"==b.a.language?x.default.COOP_NAME_EN:x.default.COOP_NAME})]})]}),Object(C.jsxs)("div",{style:{paddingTop:10},children:[Object(C.jsxs)("div",{style:{fontSize:"larger",padding:"5px 0",color:x.default.FOOTER_COLORED?"white":"var(--footer-text-color)"},children:[b.a.t("ContactInformation")," :"]}),Object(C.jsx)("div",{children:x.default.COOP_ADDRESS})]}),!!x.default.COOP_CONTRACT&&Object(C.jsx)("div",{style:{paddingTop:5},children:x.default.COOP_CONTRACT}),!t&&Object(C.jsxs)("div",{style:{paddingTop:20},children:[Object(C.jsx)(d,{}),Object(C.jsxs)("div",{style:{fontSize:"larger",padding:"5px 0",color:x.default.FOOTER_COLORED?"white":"var(--footer-text-color)"},children:[b.a.t("Menu")," :"]}),_.take(a.filter(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return-1==e.indexOf(parseInt(t.ID_MENU))}.bind(undefined,[24,43,15,42])),6).map((function(e,t){return Object(C.jsx)("div",{onClick:function(){E.a.push("/".concat(e.MENU_COMPONENT),"".concat(A.prefixPath).concat(e.MENU_COMPONENT))},className:"footer-navigation",style:{padding:"2px 0"},children:"th"==b.a.language?e.MENU_NAME:e.MENU_NAME_EN},t)}))]})]}),Object(C.jsxs)(p.a,{sm:24,md:12,lg:12,xl:10,xxl:10,children:[x.default.COOP_FACEBOOK||x.default.COOP_LINE||x.default.COOP_YOUTUBE?Object(C.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",padding:"10px 0"},children:[!!x.default.COOP_FACEBOOK&&!x.default.IS_FACEBOOKPAGE&&Object(C.jsx)("div",{onClick:function(){return window.open(x.default.COOP_FACEBOOK)},style:{marginLeft:"10px"},children:x.default.FOOTER_COLORED?Object(C.jsx)(u.a,{alt:"facebook",className:"social-contract-icon",src:"".concat(A.svgFolder,"/facebook.webp")}):Object(C.jsx)(u.a,{variant:"square",alt:"facebook",className:"social-contract-icon-dark",src:"".concat(A.svgFolder,"/facebook_white.webp")})}),!!x.default.COOP_YOUTUBE&&Object(C.jsx)("div",{onClick:function(){return window.open(x.default.COOP_YOUTUBE)},style:{marginLeft:"10px"},children:x.default.FOOTER_COLORED?Object(C.jsx)(u.a,{alt:"youtube",className:"social-contract-icon",src:"".concat(A.svgFolder,"/youtube.webp")}):Object(C.jsx)(u.a,{variant:"square",alt:"youtube",className:"social-contract-icon-dark",src:"".concat(A.svgFolder,"/youtube_white.webp")})}),!!x.default.COOP_LINE&&Object(C.jsx)("div",{onClick:function(){return window.open(x.default.COOP_LINE)},style:{marginLeft:"10px"},children:x.default.FOOTER_COLORED?Object(C.jsx)(u.a,{alt:"line",className:"social-contract-icon",src:"".concat(A.svgFolder,"/line.webp")}):Object(C.jsxs)("div",{className:"social-contract-icon-dark",style:{display:"flex",alignItems:"center",width:"unset",fontSize:"1em",paddingRight:5,borderRadius:2},children:[Object(C.jsx)(u.a,{variant:"square",alt:"line",src:"".concat(A.svgFolder,"/line_white.webp")}),Object(C.jsx)("div",{children:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19"})]})})]}):null,!!x.default.COOP_FACEBOOK&&!!x.default.IS_FACEBOOKPAGE&&Object(C.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(C.jsx)("div",{style:{width:340},children:Object(C.jsx)("iframe",{src:x.default.FACEBOOKPAGE_IFRAME_URL,height:"75",style:{border:"none",overflow:"hidden",width:"100%",height:"75px"},scrolling:"no",frameBorder:"0",allowFullScreen:!0,allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"})})})]})]}),Object(C.jsx)(O.a,{style:{width:"100%",maxWidth:1280,margin:"auto"},children:Object(C.jsx)(B,{})}),!!x.default.POWERED_BY&&Object(C.jsx)("div",{style:{paddingTop:10,textAlign:"right",fontSize:"smaller",width:"100%",maxWidth:1280,margin:"auto"},children:x.default.POWERED_BY})]})]})})))}},[["8BnW",2,1,4,5,7,8,11,0,3,6,9,10]]]);