_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[82],{"8BnW":function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/managementaccount",function(){return a("SmwU")}])},SmwU:function(t,e,a){"use strict";a.r(e);var n=a("dhJC"),i=a("q1tI"),o=a.n(i),l=a("Xd8E"),r=a("WM+0"),c=a("fH4n"),d=a("Z3vd"),s=a("PSD3"),u=a.n(s),f=o.a.createElement;e.default=function(){var t=new URLSearchParams(window.location.search),e=t.has("code")&&t.has("state");Object(i.useEffect)((function(){e&&o(),a()}),[]);var a=function(){var e={sigma_key:t.get("state").split(":")[0],member_no:t.get("state").split(":")[1],auth_code:t.get("code"),url_callback:window.location.href};r.a.catchKmaBayData(e).catch((function(t){}))},o=function(){var e={menu_component:"bypassBindAccountConsent",sigma_key:t.get("state").split(":")[0],auth_code:t.get("code")};r.a.passAuthCodeConfirmBindBay(e).then((function(t){var a=Object(n.a)(e,["menu_component"]);t.RESULT?u.a.fire({title:c.a.t("BindaccountBayKMAResultTitle"),text:"".concat(c.a.t("BindaccountBayKMAResultSuccessDes"),"\nValues => ").concat(JSON.stringify(a)),type:"success",confirmButtonText:c.a.t("BindaccountBayKMAConfirm"),onClose:function(){/iPad|iPhone/.test(navigator.userAgent),/Android/.test(navigator.userAgent);window.open("egatsaving://","_blank")}}):u.a.fire({title:c.a.t("BindaccountBayKMAResultTitle"),text:"".concat(c.a.t("BindaccountBayKMAResultErrorDes")),type:"error",confirmButtonText:c.a.t("BindaccountBayKMAConfirm"),onClose:function(){/iPad|iPhone/.test(navigator.userAgent),/Android/.test(navigator.userAgent);window.open("egatsaving://","_blank")}})})).catch((function(t){u.a.fire({title:c.a.t("BindaccountBayKMAResultTitle"),text:"".concat(c.a.t("BindaccountBayKMAResultErrorDes")),type:"error",confirmButtonText:c.a.t("BindaccountBayKMAConfirm"),onClose:function(){/iPad|iPhone/.test(navigator.userAgent),/Android/.test(navigator.userAgent);window.open("egatsaving://","_blank")}})}))};return f("div",{className:"main-layout",style:{position:"relative",margin:0}},f("div",{style:{width:"100%"}},f("div",{className:"main-content",style:{display:"flex",flexDirection:"column"}},f("div",{className:"sub-content",style:{flex:1,minHeight:"unset",maxWidth:"unset"}},f("div",{style:{display:"flex",flex:1,justifyContent:"center",alignItems:"center",height:"100%",flexDirection:"column",padding:"80px 0"}},f(d.a,{variant:"outlined",color:"primary",onClick:function(){/iPad|iPhone/.test(navigator.userAgent),/Android/.test(navigator.userAgent);window.open("egatsaving://","_blank")}},"\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19"),f("div",{style:{padding:"18px 0px",opacity:"0.5",fontWeight:100,maxWidth:260,textAlign:"center"}},'\u0e01\u0e14\u0e1b\u0e38\u0e48\u0e21 "\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19" \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19 EGAT Saving'))),f(l.a,{className:"home-footer",footer_style:{maxWidth:"unset"},disabledMenu:!0}))))}},Xd8E:function(t,e,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("wx14"),l=a("Ff2n"),r=a("iuhU"),c=a("H2TA"),d=a("ye/S"),s=n.forwardRef((function(t,e){var a=t.absolute,i=void 0!==a&&a,c=t.classes,d=t.className,s=t.component,u=void 0===s?"hr":s,f=t.flexItem,g=void 0!==f&&f,p=t.light,m=void 0!==p&&p,O=t.orientation,v=void 0===O?"horizontal":O,h=t.role,y=void 0===h?"hr"!==u?"separator":void 0:h,E=t.variant,w=void 0===E?"fullWidth":E,_=Object(l.a)(t,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return n.createElement(u,Object(o.a)({className:Object(r.a)(c.root,d,"fullWidth"!==w&&c[w],i&&c.absolute,g&&c.flexItem,m&&c.light,"vertical"===v&&c.vertical),role:y,ref:e},_))})),u=Object(c.a)((function(t){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:t.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(d.a)(t.palette.divider,.08)},middle:{marginLeft:t.spacing(2),marginRight:t.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s),f=a("469l"),g=a("hlFM"),p=a("CtXQ"),m=a("BMrR"),O=a("kPKH"),v=a("fmKo"),h=a("mOvS"),y=a.n(h),E=a("/MKj"),w=a("fH4n"),C=a("9kay"),x=a("20a2"),b=a.n(x),P=a("PArb"),N=i.a.createElement,A=y()().publicRuntimeConfig,B=a("fmKo").default,R=function(t){return N(g.a,null,N(g.a,{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end",alignItem:"center",margin:"0 -8px",paddingTop:8}},B.POLICY_URL&&N(g.a,{sx:{color:t.isLightBg?"#535353":"white",cursor:"pointer",margin:"8px",opacity:.6,transition:".3s all","&:hover":{opacity:1}},onClick:function(){window.open(B.POLICY_URL)}},"\u0e19\u0e42\u0e22\u0e1a\u0e32\u0e22\u0e01\u0e32\u0e23\u0e04\u0e38\u0e49\u0e21\u0e04\u0e23\u0e2d\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e48\u0e27\u0e19\u0e1a\u0e38\u0e04\u0e04\u0e25 (Privacy Policy)"),N(g.a,{sx:{color:t.isLightBg?"#535353":"white",cursor:"pointer",margin:"8px",opacity:.6,transition:".3s all","&:hover":{opacity:1}},onClick:function(){window.open("".concat(A.prefixPath,"CookiePolicy"))}},"\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e04\u0e38\u0e01\u0e01\u0e35\u0e49 (Cookies Policy)")),N(P.a,{style:{margin:0,opacity:.4}}))},M=i.a.createElement,T=y()().publicRuntimeConfig;e.a=Object(E.b)((function(t){return{MENU_LIST:t.MENU_LIST}}),(function(t){return{}}))(Object(C.c)()((function(t){var e=t.disabledMenu,a=t.MENU_LIST,n=null!==a&&void 0!==a&&a.data&&a.data.MENU_HOME?a.data.MENU_HOME:[];return M("div",{className:t.className,style:{maxWidth:"100vw"}},!!t.isSubFooter&&!!v.default.COOP_HELP&&M("div",{className:"footer",style:{padding:"10px 40px",backgroundColor:v.default.FILTERED_FOOTER?"var(--coop-main-filter)":"var(--coop-second-color)",color:!v.default.IS_LIGHTSUBFOOTER&&"white",display:"flex",justifyContent:"center"}},!!v.default.COOP_HELP&&M("div",{onClick:function(){return window.open("".concat(v.default.COOP_HELP))},style:{textAlign:"center",padding:"0 10px",cursor:"pointer",width:"100%",maxWidth:1280,margin:"auto"}},M(p.a,{type:"question-circle",style:{fontSize:"25px"}}),M("div",null,w.a.t("FrequentlyQuestions")))),M("div",{className:"footer main-footer",style:{background:v.default.FOOTER_COLORED?"var(--gd-title-header)":"var(--gd-black)",color:"white",fontSize:"smaller",whiteSpace:"pre-wrap"}},M(m.a,{style:{width:"100%",maxWidth:1280,margin:"auto"}},M(O.a,{sm:24,md:12,lg:12,xl:14,xxl:14},M("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",paddingBottom:"10px"}},M("picture",null,M("source",{srcSet:"".concat(T.logoFolder,"/logo.webp"),type:"image/webp"}),M("source",{srcSet:"".concat(T.logoFolder,"/logo.png"),type:"image/png"}),M("img",{alt:"coop-icon",src:"".concat(T.logoFolder,"/logo.png"),type:"image/png",style:{height:"3em",maxWidth:"3em"}})),M("div",{className:v.default.COOP_WEB?"coop-web-url":"",onClick:function(){return window.open(v.default.COOP_WEB)},style:{paddingLeft:10,fontSize:"initial"}},M("div",null,"th"==w.a.language?v.default.COOP_NAME:v.default.COOP_NAME_EN),M("div",{style:{fontSize:"smaller"}},"th"==w.a.language?v.default.COOP_NAME_EN:v.default.COOP_NAME))),M("div",{style:{paddingTop:10}},M("div",{style:{fontSize:"larger",padding:"5px 0",color:v.default.FOOTER_COLORED?"white":"var(--footer-text-color)"}},w.a.t("ContactInformation")," :"),M("div",null,v.default.COOP_ADDRESS)),!!v.default.COOP_CONTRACT&&M("div",{style:{paddingTop:5}},v.default.COOP_CONTRACT),!e&&M("div",{style:{paddingTop:20}},M(u,null),M("div",{style:{fontSize:"larger",padding:"5px 0",color:v.default.FOOTER_COLORED?"white":"var(--footer-text-color)"}},w.a.t("Menu")," :"),_.take(n.filter(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return-1==t.indexOf(parseInt(e.ID_MENU))}.bind(undefined,[24,43,15,42])),6).map((function(t,e){return M("div",{onClick:function(){b.a.push("/".concat(t.MENU_COMPONENT),"".concat(T.prefixPath).concat(t.MENU_COMPONENT))},key:e,className:"footer-navigation",style:{padding:"2px 0"}},"th"==w.a.language?t.MENU_NAME:t.MENU_NAME_EN)})))),M(O.a,{sm:24,md:12,lg:12,xl:10,xxl:10},v.default.COOP_FACEBOOK||v.default.COOP_LINE||v.default.COOP_YOUTUBE?M("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",padding:"10px 0"}},!!v.default.COOP_FACEBOOK&&!v.default.IS_FACEBOOKPAGE&&M("div",{onClick:function(){return window.open(v.default.COOP_FACEBOOK)},style:{marginLeft:"10px"}},v.default.FOOTER_COLORED?M(f.a,{alt:"facebook",className:"social-contract-icon",src:"".concat(T.svgFolder,"/facebook.webp")}):M(f.a,{variant:"square",alt:"facebook",className:"social-contract-icon-dark",src:"".concat(T.svgFolder,"/facebook_white.webp")})),!!v.default.COOP_YOUTUBE&&M("div",{onClick:function(){return window.open(v.default.COOP_YOUTUBE)},style:{marginLeft:"10px"}},v.default.FOOTER_COLORED?M(f.a,{alt:"youtube",className:"social-contract-icon",src:"".concat(T.svgFolder,"/youtube.webp")}):M(f.a,{variant:"square",alt:"youtube",className:"social-contract-icon-dark",src:"".concat(T.svgFolder,"/youtube_white.webp")})),!!v.default.COOP_LINE&&M("div",{onClick:function(){return window.open(v.default.COOP_LINE)},style:{marginLeft:"10px"}},v.default.FOOTER_COLORED?M(f.a,{alt:"line",className:"social-contract-icon",src:"".concat(T.svgFolder,"/line.webp")}):M("div",{className:"social-contract-icon-dark",style:{display:"flex",alignItems:"center",width:"unset",fontSize:"1em",paddingRight:5,borderRadius:2}},M(f.a,{variant:"square",alt:"line",src:"".concat(T.svgFolder,"/line_white.webp")}),M("div",null,"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19")))):null,!!v.default.COOP_FACEBOOK&&!!v.default.IS_FACEBOOKPAGE&&M("div",{style:{display:"flex",justifyContent:"flex-end"}},M("div",{style:{width:340}},M("iframe",{src:v.default.FACEBOOKPAGE_IFRAME_URL,height:"75",style:{border:"none",overflow:"hidden",width:"100%",height:"75px"},scrolling:"no",frameBorder:"0",allowFullScreen:!0,allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"}))))),M(g.a,{style:{width:"100%",maxWidth:1280,margin:"auto"}},M(R,null)),!!v.default.POWERED_BY&&M("div",{style:{paddingTop:10,textAlign:"right",fontSize:"smaller",width:"100%",maxWidth:1280,margin:"auto"}},v.default.POWERED_BY)))})))}},[["8BnW",0,2,3,5,8,7,9,1,4,6,10,11]]]);