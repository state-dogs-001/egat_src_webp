_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[84],{"8BnW":function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/managementaccount",function(){return i("SmwU")}])},SmwU:function(e,t,i){"use strict";i.r(t);var a=i("nKUr"),n=i("dhJC"),c=i("q1tI"),o=i("Xd8E"),l=i("WM+0"),r=i("fH4n"),s=i("Z3vd"),d=i("PSD3"),u=i.n(d);t.default=function(){var e=new URLSearchParams(window.location.search),t=e.has("code")&&e.has("state");Object(c.useEffect)((function(){t&&d(),i()}),[]);var i=function(){var t={url_callback:window.location.href,sigma_key:e.has("state")?e.get("state").split("_")[0]:void 0,member_no:e.has("state")?e.get("state").split("_")[1]:void 0,auth_code:e.has("code")?e.get("code"):void 0};l.a.catchKmaBayData(t).catch((function(e){}))},d=function(){var t={menu_component:"bypassBindAccountConsent",sigma_key:e.has("state")?e.get("state").split("_")[0]:void 0,auth_code:e.has("code")?e.get("code"):void 0};l.a.passAuthCodeConfirmBindBay(t).then((function(e){var i=Object(n.a)(t,["menu_component"]);e.RESULT?u.a.fire({title:r.a.t("BindaccountBayKMAResultTitle"),text:"".concat(r.a.t("BindaccountBayKMAResultSuccessDes"),"\nValues => ").concat(JSON.stringify(i)),type:"success",confirmButtonText:r.a.t("BindaccountBayKMAConfirm")}):u.a.fire({title:r.a.t("BindaccountBayKMAResultTitle"),text:"".concat(r.a.t("BindaccountBayKMAResultErrorDes")),type:"error",confirmButtonText:r.a.t("BindaccountBayKMAConfirm")})})).catch((function(e){u.a.fire({title:r.a.t("BindaccountBayKMAResultTitle"),text:"".concat(r.a.t("BindaccountBayKMAResultErrorDes")),type:"error",confirmButtonText:r.a.t("BindaccountBayKMAConfirm")})}))};return Object(a.jsx)("div",{className:"main-layout",style:{position:"relative",margin:0},children:Object(a.jsx)("div",{style:{width:"100%"},children:Object(a.jsxs)("div",{className:"main-content",style:{display:"flex",flexDirection:"column"},children:[Object(a.jsx)("div",{className:"sub-content",style:{flex:1,minHeight:"unset",maxWidth:"unset"},children:Object(a.jsxs)("div",{style:{display:"flex",flex:1,justifyContent:"center",alignItems:"center",height:"100%",flexDirection:"column",padding:"80px 0"},children:[Object(a.jsx)(s.a,{variant:"outlined",color:"primary",onClick:function(){/iPad|iPhone/.test(navigator.userAgent),/Android/.test(navigator.userAgent);window.open("egatsaving://","_blank")},children:"\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19"}),Object(a.jsx)("div",{style:{padding:"18px 0px",opacity:"0.5",fontWeight:100,maxWidth:260,textAlign:"center"},children:'\u0e01\u0e14\u0e1b\u0e38\u0e48\u0e21 "\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19" \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19 EGAT Saving'})]})}),Object(a.jsx)(o.a,{className:"home-footer",footer_style:{maxWidth:"unset"},disabledMenu:!0})]})})})}},Xd8E:function(e,t,i){"use strict";var a=i("nKUr"),n=i("q1tI"),c=i("wx14"),o=i("Ff2n"),l=i("iuhU"),r=i("H2TA"),s=i("ye/S"),d=n.forwardRef((function(e,t){var i=e.absolute,a=void 0!==i&&i,r=e.classes,s=e.className,d=e.component,u=void 0===d?"hr":d,O=e.flexItem,f=void 0!==O&&O,h=e.light,p=void 0!==h&&h,x=e.orientation,j=void 0===x?"horizontal":x,g=e.role,m=void 0===g?"hr"!==u?"separator":void 0:g,b=e.variant,v=void 0===b?"fullWidth":b,y=Object(o.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return n.createElement(u,Object(c.a)({className:Object(l.a)(r.root,s,"fullWidth"!==v&&r[v],a&&r.absolute,f&&r.flexItem,p&&r.light,"vertical"===j&&r.vertical),role:m,ref:t},y))})),u=Object(r.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(s.a)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(d),O=i("469l"),f=i("hlFM"),h=i("CtXQ"),p=i("BMrR"),x=i("kPKH"),j=i("fmKo"),g=i("mOvS"),m=i.n(g),b=i("/MKj"),v=i("fH4n"),y=i("9kay"),E=i("20a2"),w=i.n(E),C=i("PArb"),N=m()().publicRuntimeConfig,P=i("fmKo").default,B=function(e){return Object(a.jsxs)(f.a,{children:[Object(a.jsxs)(f.a,{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end",alignItem:"center",margin:"0 -8px",paddingTop:8},children:[P.POLICY_URL&&Object(a.jsx)(f.a,{sx:{color:e.isLightBg?"#535353":"white",cursor:"pointer",margin:"8px",opacity:.6,transition:".3s all","&:hover":{opacity:1}},onClick:function(){window.open(P.POLICY_URL)},children:"\u0e19\u0e42\u0e22\u0e1a\u0e32\u0e22\u0e01\u0e32\u0e23\u0e04\u0e38\u0e49\u0e21\u0e04\u0e23\u0e2d\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e48\u0e27\u0e19\u0e1a\u0e38\u0e04\u0e04\u0e25 (Privacy Policy)"}),Object(a.jsx)(f.a,{sx:{color:e.isLightBg?"#535353":"white",cursor:"pointer",margin:"8px",opacity:.6,transition:".3s all","&:hover":{opacity:1}},onClick:function(){window.open("".concat(N.prefixPath,"CookiePolicy"))},children:"\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e04\u0e38\u0e01\u0e01\u0e35\u0e49 (Cookies Policy)"})]}),Object(a.jsx)(C.a,{style:{margin:0,opacity:.4}})]})},A=m()().publicRuntimeConfig;t.a=Object(b.b)((function(e){return{MENU_LIST:e.MENU_LIST}}),(function(e){return{}}))(Object(y.c)()((function(e){var t=e.disabledMenu,i=e.MENU_LIST,n=null!==i&&void 0!==i&&i.data&&i.data.MENU_HOME?i.data.MENU_HOME:[];return Object(a.jsxs)("div",{className:e.className,style:{maxWidth:"100vw"},children:[!!e.isSubFooter&&!!j.default.COOP_HELP&&Object(a.jsx)("div",{className:"footer",style:{padding:"10px 40px",backgroundColor:j.default.FILTERED_FOOTER?"var(--coop-main-filter)":"var(--coop-second-color)",color:!j.default.IS_LIGHTSUBFOOTER&&"white",display:"flex",justifyContent:"center"},children:!!j.default.COOP_HELP&&Object(a.jsxs)("div",{onClick:function(){return window.open("".concat(j.default.COOP_HELP))},style:{textAlign:"center",padding:"0 10px",cursor:"pointer",width:"100%",maxWidth:1280,margin:"auto"},children:[Object(a.jsx)(h.a,{type:"question-circle",style:{fontSize:"25px"}}),Object(a.jsx)("div",{children:v.a.t("FrequentlyQuestions")})]})}),Object(a.jsxs)("div",{className:"footer main-footer",style:{background:j.default.FOOTER_COLORED?"var(--gd-title-header)":"var(--gd-black)",color:"white",fontSize:"smaller",whiteSpace:"pre-wrap"},children:[Object(a.jsxs)(p.a,{style:{width:"100%",maxWidth:1280,margin:"auto"},children:[Object(a.jsxs)(x.a,{sm:24,md:12,lg:12,xl:14,xxl:14,children:[Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",paddingBottom:"10px"},children:[Object(a.jsxs)("picture",{children:[Object(a.jsx)("source",{srcSet:"".concat(A.logoFolder,"/logo.webp"),type:"image/webp"}),Object(a.jsx)("source",{srcSet:"".concat(A.logoFolder,"/logo.png"),type:"image/png"}),Object(a.jsx)("img",{alt:"coop-icon",src:"".concat(A.logoFolder,"/logo.png"),type:"image/png",style:{height:"3em",maxWidth:"3em"}})]}),Object(a.jsxs)("div",{className:j.default.COOP_WEB?"coop-web-url":"",onClick:function(){return window.open(j.default.COOP_WEB)},style:{paddingLeft:10,fontSize:"initial"},children:[Object(a.jsx)("div",{children:"th"==v.a.language?j.default.COOP_NAME:j.default.COOP_NAME_EN}),Object(a.jsx)("div",{style:{fontSize:"smaller"},children:"th"==v.a.language?j.default.COOP_NAME_EN:j.default.COOP_NAME})]})]}),Object(a.jsxs)("div",{style:{paddingTop:10},children:[Object(a.jsxs)("div",{style:{fontSize:"larger",padding:"5px 0",color:j.default.FOOTER_COLORED?"white":"var(--footer-text-color)"},children:[v.a.t("ContactInformation")," :"]}),Object(a.jsx)("div",{children:j.default.COOP_ADDRESS})]}),!!j.default.COOP_CONTRACT&&Object(a.jsx)("div",{style:{paddingTop:5},children:j.default.COOP_CONTRACT}),!t&&Object(a.jsxs)("div",{style:{paddingTop:20},children:[Object(a.jsx)(u,{}),Object(a.jsxs)("div",{style:{fontSize:"larger",padding:"5px 0",color:j.default.FOOTER_COLORED?"white":"var(--footer-text-color)"},children:[v.a.t("Menu")," :"]}),_.take(n.filter(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return-1==e.indexOf(parseInt(t.ID_MENU))}.bind(undefined,[24,43,15,42])),6).map((function(e,t){return Object(a.jsx)("div",{onClick:function(){w.a.push("/".concat(e.MENU_COMPONENT),"".concat(A.prefixPath).concat(e.MENU_COMPONENT))},className:"footer-navigation",style:{padding:"2px 0"},children:"th"==v.a.language?e.MENU_NAME:e.MENU_NAME_EN},t)}))]})]}),Object(a.jsxs)(x.a,{sm:24,md:12,lg:12,xl:10,xxl:10,children:[j.default.COOP_FACEBOOK||j.default.COOP_LINE||j.default.COOP_YOUTUBE?Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",padding:"10px 0"},children:[!!j.default.COOP_FACEBOOK&&!j.default.IS_FACEBOOKPAGE&&Object(a.jsx)("div",{onClick:function(){return window.open(j.default.COOP_FACEBOOK)},style:{marginLeft:"10px"},children:j.default.FOOTER_COLORED?Object(a.jsx)(O.a,{alt:"facebook",className:"social-contract-icon",src:"".concat(A.svgFolder,"/facebook.webp")}):Object(a.jsx)(O.a,{variant:"square",alt:"facebook",className:"social-contract-icon-dark",src:"".concat(A.svgFolder,"/facebook_white.webp")})}),!!j.default.COOP_YOUTUBE&&Object(a.jsx)("div",{onClick:function(){return window.open(j.default.COOP_YOUTUBE)},style:{marginLeft:"10px"},children:j.default.FOOTER_COLORED?Object(a.jsx)(O.a,{alt:"youtube",className:"social-contract-icon",src:"".concat(A.svgFolder,"/youtube.webp")}):Object(a.jsx)(O.a,{variant:"square",alt:"youtube",className:"social-contract-icon-dark",src:"".concat(A.svgFolder,"/youtube_white.webp")})}),!!j.default.COOP_LINE&&Object(a.jsx)("div",{onClick:function(){return window.open(j.default.COOP_LINE)},style:{marginLeft:"10px"},children:j.default.FOOTER_COLORED?Object(a.jsx)(O.a,{alt:"line",className:"social-contract-icon",src:"".concat(A.svgFolder,"/line.webp")}):Object(a.jsxs)("div",{className:"social-contract-icon-dark",style:{display:"flex",alignItems:"center",width:"unset",fontSize:"1em",paddingRight:5,borderRadius:2},children:[Object(a.jsx)(O.a,{variant:"square",alt:"line",src:"".concat(A.svgFolder,"/line_white.webp")}),Object(a.jsx)("div",{children:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19"})]})})]}):null,!!j.default.COOP_FACEBOOK&&!!j.default.IS_FACEBOOKPAGE&&Object(a.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(a.jsx)("div",{style:{width:340},children:Object(a.jsx)("iframe",{src:j.default.FACEBOOKPAGE_IFRAME_URL,height:"75",style:{border:"none",overflow:"hidden",width:"100%",height:"75px"},scrolling:"no",frameBorder:"0",allowFullScreen:!0,allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"})})})]})]}),Object(a.jsx)(f.a,{style:{width:"100%",maxWidth:1280,margin:"auto"},children:Object(a.jsx)(B,{})}),!!j.default.POWERED_BY&&Object(a.jsx)("div",{style:{paddingTop:10,textAlign:"right",fontSize:"smaller",width:"100%",maxWidth:1280,margin:"auto"},children:j.default.POWERED_BY})]})]})})))}},[["8BnW",0,2,4,5,8,7,11,1,3,6,9,10]]]);