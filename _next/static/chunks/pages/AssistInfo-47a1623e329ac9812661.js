_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[38],{V2f7:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/AssistInfo",function(){return a("bIqo")}])},bIqo:function(e,t,a){"use strict";a.r(t);var s=a("cpVT"),n=a("nKUr"),l=a("z7pX"),c=a("vJKn"),i=a.n(c),r=a("rg98"),o=a("q1tI"),d=a("g4pe"),b=a.n(d),p=a("BMrR"),j=a("kPKH"),u=a("wCAj"),x=a("CtXQ"),S=a("ECub"),h=a("jsC+"),O=a("BvKs"),g=a("2/Rp"),f=a("wd/R"),v=a.n(f),m=a("QL2g"),y=a.n(m),A=a("20a2"),T=a.n(A),E=a("VlGh"),_=a("mOvS"),I=a.n(_),N=a("Y0NT"),C=a("WM+0"),w=a("/MKj"),k=a("xtEs"),R=a("FoaG"),D=a.n(R),M=a("JQEk"),B=a("kKU3"),Y=a("MoW8"),P=a("fmKo"),F=a("fH4n"),H=a("9kay");function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}var W=I()().publicRuntimeConfig;t.default=Object(w.b)((function(e){return{}}),(function(e){return{}}))(Object(H.c)()((function(e){var t=Object(o.useState)(200),a=t[0],c=t[1],d=Object(o.useState)(!0),f=d[0],m=d[1],A=Object(o.useState)(null),_=A[0],I=A[1],w=Object(o.useState)(!0),R=w[0],H=w[1],z=Object(o.useState)(!1),V=z[0],G=z[1],K=Object(o.useState)([]),U=K[0],X=K[1],J=Object(o.useState)(-1),q=J[0],Q=J[1],Z=Object(o.useState)([]),$=Z[0],ee=Z[1],te=Object(o.useState)(null),ae=(te[0],te[1]),se=Object(o.useState)(null),ne=se[0],le=se[1],ce=Object(o.useState)(null),ie=ce[0],re=ce[1],oe=Object(o.useState)(null),de=oe[0],be=oe[1],pe=Object(o.useState)(null),je=pe[0],ue=(pe[1],Object(o.useState)(null)),xe=ue[0],Se=(ue[1],Object(o.useState)(0)),he=Se[0],Oe=Se[1],ge=Object(o.useState)([]),fe=ge[0],ve=ge[1],me=Object(o.useState)(!1),ye=me[0],Ae=me[1];Object(o.useEffect)((function(){v.a.locale(F.a.language),Te()}),[]);var Te=function(){var t=Object(r.a)(i.a.mark((function t(){var a,s,n=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n.length>0&&void 0!==n[0]?n[0]:null,H(!0),s={ass_year:a,menu_component:Object(k.i)(T.a.pathname)},C.a.fetchAssistType(s).then((function(t){if(t.RESULT)X(t.ASSIST),Q(0),ve(t.YEAR),Ae(t.IS_STM),t.IS_STM&&t.ASSIST.length>0&&Ee(t.ASSIST[0].ASSCONTRACT_NO);else{var a=e.checkResultFalseMessage(t,{},F.a.t("WelfareTypeNotFound"));(null===a||void 0===a?void 0:a.statusCode)&&c(null===a||void 0===a?void 0:a.statusCode),a&&X([]),a&&Q(-1),a&&Ae(!1)}H(!1),m(!1)})).catch((function(t){H(!1),m(!1);var a=e.checkCatchMessage(t);(null===a||void 0===a?void 0:a.statusCode)&&c(null===a||void 0===a?void 0:a.statusCode),(null===a||void 0===a?void 0:a.errData)&&I(null===a||void 0===a?void 0:a.errData)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Ee=function(){var t=Object(r.a)(i.a.mark((function t(a){var s,n,l,r,o,d=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=d.length>1&&void 0!==d[1]?d[1]:null,n=d.length>2&&void 0!==d[2]?d[2]:null,G(!0),l=s?v()(s).format("YYYY-MM-DD"):null,r=n?v()(n).format("YYYY-MM-DD"):null,o={asscontract_no:a,date_start:l,date_end:r,menu_component:"AssistStatement"},C.a.fetchAssistStatement(o).then((function(t){if(t.RESULT)ee(t.ASSIST_STM.STATEMENT?t.ASSIST_STM.STATEMENT:[]),ae(t.LIMIT_DURATION),le(t.ASSIST_STM.ACCOUNT_RECEIVE),re(t.ASSIST_STM.BANK_BRANCH_NAME),be(t.ASSIST_STM.BANK_NAME);else{var a=e.checkResultFalseMessage(t,{},F.a.t("WelfareTypeNotFound"));(null===a||void 0===a?void 0:a.statusCode)&&c(null===a||void 0===a?void 0:a.statusCode),a&&ee([]),a&&ae(null),a&&le(null),a&&re(null),a&&be(null)}G(!1)})).catch((function(t){G(!1);var a=e.checkCatchMessage(t);(null===a||void 0===a?void 0:a.statusCode)&&c(null===a||void 0===a?void 0:a.statusCode),(null===a||void 0===a?void 0:a.errData)&&I(null===a||void 0===a?void 0:a.errData)}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return a>=300&&a<=500?Object(n.jsx)(N.default,{statusCode:a,err:_,showModalLogout:function(){return e.showModalLogout()}}):Object(n.jsx)("div",{className:"main-layout",style:{position:"relative"},children:Object(n.jsxs)("div",{style:{width:"100%"},children:[Object(n.jsx)(E.a,{checked:!R||!f}),Object(n.jsxs)(b.a,{children:[Object(n.jsx)("link",{rel:"stylesheet",href:"".concat(W.cssFolder,"/assist.css")}),Object(n.jsx)("link",{rel:"stylesheet",href:"".concat(W.cssFolder,"/static_css_ext_table.css")})]}),Object(n.jsx)("div",{className:"main-content",children:Object(n.jsxs)("div",{className:"sub-content sub-content-assist",children:[Object(n.jsx)(Y.a,{th:"\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e34\u0e01\u0e32\u0e23",en:"Welfare"}),Object(n.jsxs)("div",{id:"assist-dropdown",className:"assist-list-dropdown",children:[Object(n.jsx)(h.a,{disabled:fe.length<1,trigger:["click"],overlay:Object(n.jsx)(O.a,{onClick:function(e){H(!0),X([]),ee([]),ae(null),le(null),re(null),be(null),Oe(e.key),Te(fe[e.key].ASSIST_YEAR)},children:fe.map((function(e,t){var a=(fe[he]&&fe[he].ASSIST_YEAR)==e.ASSIST_YEAR;return Object(n.jsx)(O.a.Item,{style:{borderBottom:"1px solid #F4F6F8",backgroundColor:a&&"rgba(0, 123, 255, 0.1)"},children:Object(n.jsx)("div",{style:{padding:"5px 0",cursor:"pointer",animationDuration:t<5?"".concat(.2*(t+1),"s"):"1s"},children:Object(n.jsxs)("span",{style:{color:a&&"var(--link-text-color)"},children:[" ",F.a.t("Year")," ",parseInt(e.ASSIST_YEAR)+543]})})},t)}))}),children:Object(n.jsxs)(g.a,{loading:R,className:he>-1?"":"sub-text",style:{marginLeft:"10px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",fontWeight:he>-1?400:200},children:[he>-1&&fe[he]?"".concat(F.a.t("Year")," ")+(fe[he]&&parseInt(fe[he].ASSIST_YEAR)+543):F.a.t("SelectYearAssist"),Object(n.jsx)(x.a,{type:"down"})]})}),ye&&Object(n.jsx)(h.a,{disabled:U.length<1,trigger:["click"],overlay:Object(n.jsx)(O.a,{onClick:function(e){return t=e.key,Q(t),void Ee(U[t]?U[t].ASSCONTRACT_NO:null,je,xe);var t},children:U.map((function(e,t){return Object(n.jsx)(O.a.Item,{children:Object(n.jsx)("div",{style:{padding:"5px 0",borderBottom:"1px solid #F4F6F8",maxWidth:"50vw",cursor:"pointer",animationDuration:t<5?"".concat(.2*(t+1),"s"):"1s"},children:Object(n.jsx)("span",{style:{color:q==t&&"var(--link-text-color)"},children:e.ASSISTTYPE_DESC})})},t)}))}),children:Object(n.jsxs)(g.a,{className:q>-1?"":"sub-text",style:{marginLeft:"10px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",fontWeight:q>-1?400:200},children:[U[q]?U[q].ASSISTTYPE_DESC:F.a.t("SelectAssistType"),Object(n.jsx)(x.a,{type:"down"})]})})]}),Object(n.jsxs)("div",{style:{padding:10},children:[Object(n.jsxs)("div",{className:"bal-large",style:{display:"flex",alignItems:"center"},children:[Object(n.jsx)("img",{alt:"icon",src:"".concat(W.svgFolder,"/menu_assist.webp"),style:{width:"1.2em",height:"1.2em",marginRight:10,zIndex:1}}),Object(n.jsxs)("span",{className:"header-title",style:{wordBreak:"break-all",transform:"translateX(-25px)",borderRadius:5,padding:"0px 10px 0px 20px",backgroundColor:"rgba(96, 125, 139, 0.1",fontWeight:"bold"},children:[Object(n.jsx)("span",{className:"header-title highlight-text bal-large",style:{paddingRight:"5px"},children:fe[he]&&fe[he].ASS_RECEIVED||"0.00"})," ",F.a.t("THB")]})]}),Object(n.jsx)("div",{children:Object(n.jsx)("span",{style:{fontWeight:200},children:"".concat(F.a.t("TotalWelfareYear")," ").concat(fe[he]&&fe[he].ASSIST_YEAR||"-"," :")})})]}),Object(n.jsx)("div",{id:"assist-scroll",onScrollCapture:function(e){var t,a;t="assist-scroll",a="assist-dropdown",document.getElementById(t).scrollTop>=100?document.getElementById(a).className="assist-list-dropdown assist-dropdown-shadow":document.getElementById(a).className="assist-list-dropdown"},className:"hidden-scrollbar",style:{overflowY:"auto",flex:1},children:ye?function(){var e=[];$.map((function(t,a){e.push(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({Index:a},t))}));var t={pageStartIndex:1,firstPageText:"<<",prePageText:"<",nextPageText:">",lastPageText:">>",showTotal:!0,paginationTotalRenderer:function(e,t,a){return Object(n.jsxs)("span",{className:"react-bootstrap-table-pagination-total beforePageper",children:[F.a.t("Total")," ",a]})},hideSizePerPage:!0};return Object(n.jsx)("div",{className:"assist-detail-table",children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{style:{padding:"20px 20px 0"},children:[Object(n.jsx)("div",{style:{flexDirection:"row",display:"flex"},children:Object(n.jsx)("div",{style:{fontSize:"1.5em",fontWeight:"bold"},children:U[q]?U[q].ASSISTTYPE_DESC:F.a.t("SelectYearAssist")})}),Object(n.jsx)(M.a,{in:!!U[q],children:Object(n.jsx)(B.a,{in:!!U[q],children:Object(n.jsx)("div",{children:!!U[q]&&Object(n.jsx)("div",{style:{padding:"10px 0px"},children:Object(n.jsx)(u.a,{className:"description-table",useFixedHeader:!1,bordered:!1,size:"small",pagination:!1,showHeader:!1,dataSource:[].concat(Object(l.a)(U[q].ASSCONTRACT_NO?[{key:"ASSCONTRACT_NO",colSpan:1,label:Object(n.jsxs)("div",{children:[F.a.t("AssistNo")," :"]}),value:Object(n.jsx)("div",{style:{textAlign:"left"},children:U[q].ASSCONTRACT_NO})}]:[]),Object(l.a)(U[q].ASSIST_RECVAMT?[{key:"ASSIST_RECVAMT",colSpan:1,label:Object(n.jsxs)("div",{children:[F.a.t("AssistPayDate")," :"]}),value:Object(n.jsx)("div",{style:{textAlign:"left"},children:U[q].PAY_DATE})}]:[]),Object(l.a)(U[q].PAY_DATE?[{key:"PAY_DATE",colSpan:1,label:Object(n.jsxs)("div",{children:[F.a.t("AssistBal")," :"]}),value:Object(n.jsx)("div",{style:{textAlign:"left",fontWeight:"bold"},children:Object(n.jsxs)("span",{className:"link-text",children:[U[q].ASSIST_RECVAMT," ",F.a.t("THB")]})})}]:[])),columns:[{title:"label",dataIndex:"label",key:"label",className:"description-label",render:function(e,t,a){var s={children:e,props:{}};return s.props.colSpan=t.colSpan||1,s.props.style={paddingBottom:0},s}},{title:"value",dataIndex:"value",key:"value",render:function(e,t,a){var s={children:e,props:{}};return s.props.colSpan=t.colSpan||1,s.props.style={paddingBottom:0},s}}]})})})})}),ne||de||ie?Object(n.jsxs)("div",{className:"assist-receive-detail",style:{padding:"10px 0px"},children:[Object(n.jsx)("span",{style:{textDecoration:"underline"},children:F.a.t("ReceivingMoney")}),Object(n.jsx)(u.a,{className:"description-table",useFixedHeader:!1,bordered:!1,size:"small",pagination:!1,showHeader:!1,dataSource:[].concat(Object(l.a)(de?[{key:"BankName",colSpan:2,label:Object(n.jsx)("div",{children:de})}]:[]),Object(l.a)(ie?[{key:"BankBranchName",colSpan:1,label:Object(n.jsxs)("div",{children:[F.a.t("Branch")," :"]}),value:Object(n.jsx)("div",{children:ie})}]:[]),Object(l.a)(ne?[{key:"AccountReceive",colSpan:1,label:Object(n.jsxs)("div",{children:[F.a.t("AccountNumber")," :"]}),value:Object(n.jsx)("div",{style:{},children:ne})}]:[])),columns:[{title:"label",dataIndex:"label",key:"label",className:"description-label",render:function(e,t,a){var s={children:e,props:{}};return s.props.colSpan=t.colSpan||1,s.props.style={paddingBottom:0},s}},{title:"value",dataIndex:"value",key:"value",render:function(e,t,a){var s={children:e,props:{}};return s.props.colSpan=t.colSpan||1,s.props.style={paddingBottom:0},s}}]})]}):null]}),Object(n.jsx)("div",{style:{fontSize:"small",flexDirection:"row",display:"flex",justifyContent:"flex-end",alignItems:"center",padding:"0 5px 5px",fontWeight:200}}),ye&&Object(n.jsx)("div",{children:Object(n.jsx)(y.a,{pagination:D()(t),keyField:"Index",data:e,columns:[{dataField:"OPERATE_DATE",text:F.a.t("TransactionDate"),headerClasses:"assist-table-header-first",headerStyle:{color:!P.default.IS_LIGHTHEADER&&"white",backgroundColor:P.default.MAIN_TABLECOLOR&&"var(--coop-main-color)",border:P.default.IS_LIGHTHEADER&&"1px solid rgba(70, 99, 98, 0.5)"},formatter:function(e,t,a){return Object(n.jsx)("div",{style:{fontSize:"small",textAlign:"center",padding:"10px"},children:e})},style:{border:"1px solid rgba(70, 99, 98, 0.5)"}},{dataField:"ITEM_DESC",text:F.a.t("TransactionDes"),sort:!0,headerClasses:"assist-table-header",headerStyle:{color:!P.default.IS_LIGHTHEADER&&"white",backgroundColor:P.default.MAIN_TABLECOLOR&&"var(--coop-main-color)",border:P.default.IS_LIGHTHEADER&&"1px solid rgba(70, 99, 98, 0.5)"},formatter:function(e,t,a){return Object(n.jsx)("div",{style:{fontSize:"small",textAlign:"center",padding:"10px"},children:e})},style:{border:"1px solid rgba(70, 99, 98, 0.5)"}},{dataField:"RECEIVE_BALANCE",text:F.a.t("TBTransactionAmt"),headerClasses:"assist-table-header",headerStyle:{color:!P.default.IS_LIGHTHEADER&&"white",backgroundColor:P.default.MAIN_TABLECOLOR&&"var(--coop-main-color)",border:P.default.IS_LIGHTHEADER&&"1px solid rgba(70, 99, 98, 0.5)"},formatter:function(e,t,a){return 1==t.SIGN_FLAG?Object(n.jsxs)("div",{style:{textAlign:"right",padding:"10px",backgroundColor:"rgba(130, 194, 38, 0.1)"},children:[Object(n.jsx)("span",{className:"highlight-text",style:{fontWeight:"bold",fontSize:"1.2em"},children:"+"})," ",e]}):-1==t.SIGN_FLAG?Object(n.jsxs)("div",{style:{textAlign:"center",padding:"10px",backgroundColor:"rgba(235, 77, 75, 0.1)"},children:[Object(n.jsx)("span",{style:{color:"#eb4d4b",fontWeight:"bold",fontSize:"1.2em"},children:"-"})," ",e]}):Object(n.jsxs)("div",{className:"sub-text",style:{textAlign:"center",padding:"10px"},children:[Object(n.jsx)("span",{children:e})," ",Object(n.jsx)("span",{style:{fontSize:"small"}})]})},style:{border:"1px solid rgba(70, 99, 98, 0.5)"}}],wrapperClasses:"assist-wrapper-table hidden-scrollbar",classes:"assist-table hidden-scrollbar",rowClasses:"statement-row",rowStyle:function(e,t){return{borderBottom:"1px solid rgba(70, 99, 98, 0.5)",backgroundColor:t%2==0?"transparent":"rgba(200, 200, 200, 0.05)",animationDuration:t<5?"".concat(.2*(t+1),"s"):"1s"}},noDataIndication:function(){return Object(n.jsx)("div",{children:V?Object(n.jsx)("div",{style:{margin:"auto",textAlign:"center",padding:"20px"},children:Object(n.jsxs)("div",{className:"sub-text",style:{fontSize:"smaller"},children:[F.a.t("LoadingStatement")," ",Object(n.jsx)("span",{style:{padding:"0 5px"},children:Object(n.jsx)(x.a,{type:"loading",spin:!0})})]})}):Object(n.jsx)(S.a,{className:"empty-div",description:F.a.t("StatementWelfareNotFound"),style:{fontSize:"small"},image:Object(n.jsxs)("picture",{children:[Object(n.jsx)("source",{srcSet:"".concat(W.imageFolder,"/notfound.webp"),type:"image/webp"}),Object(n.jsx)("source",{srcSet:"".concat(W.imageFolder,"/notfound.png"),type:"image/png"}),Object(n.jsx)("img",{alt:"notfound-icon",src:"".concat(W.imageFolder,"/notfound.png"),type:"image/png",style:{userSelect:"none",opacity:.6}})]})})})}})})]})})}():Object(n.jsx)(p.a,{gutter:[24,24],type:"flex",children:U.map((function(e,t){return Object(n.jsx)(j.a,{xs:24,sm:24,md:12,lg:12,xl:8,xxl:8,children:Object(n.jsx)("div",{className:"card-shadow isc-card",style:{position:"relative",padding:20,height:"100%"},children:Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{style:{flexDirection:"row",display:"flex"},children:Object(n.jsx)("div",{style:{fontSize:"1.5em",fontWeight:"bold"},children:e.ASSISTTYPE_DESC})}),Object(n.jsx)("div",{style:{padding:"10px 0px"},children:Object(n.jsx)(u.a,{className:"description-table",useFixedHeader:!1,bordered:!1,size:"small",pagination:!1,showHeader:!1,dataSource:[].concat(Object(l.a)(e.ASSCONTRACT_NO?[{key:"ASSCONTRACT_NO",colSpan:1,label:Object(n.jsxs)("div",{children:[F.a.t("AssistNo")," :"]}),value:Object(n.jsx)("div",{style:{textAlign:"left"},children:e.ASSCONTRACT_NO})}]:[]),Object(l.a)(e.ASSIST_RECVAMT?[{key:"ASSIST_RECVAMT",colSpan:1,label:Object(n.jsxs)("div",{children:[F.a.t("AssistPayDate")," :"]}),value:Object(n.jsx)("div",{style:{textAlign:"left"},children:e.PAY_DATE})}]:[]),Object(l.a)(e.PAY_DATE?[{key:"PAY_DATE",colSpan:1,label:Object(n.jsxs)("div",{children:[F.a.t("AssistBal")," :"]}),value:Object(n.jsxs)("div",{className:"link-text",style:{textAlign:"left",fontSize:"1.2em",fontWeight:"bold"},children:[Object(n.jsx)("span",{children:e.ASSIST_RECVAMT})," ",F.a.t("THB")]})}]:[])),columns:[{title:"label",dataIndex:"label",key:"label",className:"description-label",render:function(e,t,a){var s={children:e,props:{}};return s.props.colSpan=t.colSpan||1,s.props.style={paddingBottom:0},s}},{title:"value",dataIndex:"value",key:"value",render:function(e,t,a){var s={children:e,props:{}};return s.props.colSpan=t.colSpan||1,s.props.style={paddingBottom:0},s}}]})})]})})},t)}))})})]})})]})})})))}},[["V2f7",0,2,4,5,8,7,11,1,3,6,9,10,12,13,14,15,16,22]]]);