_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[52],{S6g5:function(e,t,a){"use strict";a.r(t);var n=a("z7pX"),i=a("vJKn"),l=a.n(i),d=a("rg98"),s=a("q1tI"),o=a.n(s),c=a("g4pe"),r=a.n(c),u=a("BMrR"),p=a("kPKH"),g=a("wCAj"),m=a("kaz8"),f=a("PArb"),v=a("ECub"),h=a("20a2"),x=a.n(h),y=a("WM+0"),O=a("VlGh"),b=a("xtEs"),N=a("mOvS"),C=a.n(N),T=a("Y0NT"),A=a("/MKj"),S=a("fmKo"),L=a("MoW8"),E=a("fH4n"),R=a("9kay"),w=void 0,D=o.a.createElement,M=C()().publicRuntimeConfig;t.default=Object(A.b)((function(e){return{}}),(function(e){return{}}))(Object(R.c)()((function(e){var t=Object(s.useState)(200),a=t[0],i=t[1],o=Object(s.useState)(!0),c=o[0],h=o[1],N=Object(s.useState)(null),C=N[0],A=N[1],R=Object(s.useState)(!0),j=R[0],k=R[1],H=Object(s.useState)([]),B=H[0],I=H[1];Object(s.useEffect)((function(){z()}),[]);var z=function(){var t=Object(d.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:k(!0),a={menu_component:Object(b.i)(x.a.pathname)},y.a.fetchCreditLoan(a).then((function(t){if(t.RESULT)I(t.LOAN_CREDIT);else{var a=e.checkResultFalseMessage(t);(null===a||void 0===a?void 0:a.statusCode)&&i(null===a||void 0===a?void 0:a.statusCode)}k(!1),h(!1)})).catch((function(t){k(!1),h(!1);var a=e.checkCatchMessage(t);(null===a||void 0===a?void 0:a.statusCode)&&i(null===a||void 0===a?void 0:a.statusCode),(null===a||void 0===a?void 0:a.errData)&&A(null===a||void 0===a?void 0:a.errData)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return a>=300&&a<500?D(T.default,{statusCode:a,err:C,showModalLogout:function(){return w.props.showModalLogout()}}):D("div",{className:"main-layout",style:{position:"relative"}},D("div",{style:{width:"100%"}},D(O.a,{checked:!j||!c}),D(r.a,null,D("link",{rel:"stylesheet",href:"".concat(M.cssFolder,"/loancredit.css")})),D("div",{className:"main-content",style:{width:"100%"}},D("div",{className:"sub-content"},D(L.a,{th:"\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e01\u0e39\u0e49\u0e42\u0e14\u0e22\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13",en:"Loan estimate"}),S.default.IS_SHOW_REMARK&&D(u.a,null,D(p.a,{span:24,style:{paddingBottom:"20px"}},D("div",{style:{padding:"20px",background:"var(--gd-title-header)",color:"white",borderRadius:5}},D("div",{style:{flexDirection:"row",display:"flex",padding:"0 1em 0.5em 0",width:"100%"}},D("div",{style:{padding:"0 0.5em",fontWeight:"bold",fontSize:"1.5em"}},E.a.t("Annotation"))),D("div",{style:{paddingLeft:"20px"}},D("div",{style:{padding:"5px 0"}},E.a.t("AnnotationHeader")),D("div",{style:{padding:"5px 0"}},E.a.t("AnnotationCredit1")),D("div",{style:{padding:"5px 0"}},E.a.t("AnnotationCredit2")),D("div",{style:{padding:"5px 0"}},E.a.t("AnnotationCredit3")))))),D(u.a,{gutter:{md:0,lg:20},style:{marginLeft:"10px",marginRight:"10px"}},B.length>0?B.map((function(e,t){var a,i,l,d;return D(p.a,{key:t,className:"col-loan-credit",xs:24,sm:24,md:24,lg:24,xl:18,xxl:18},D("div",{className:"card-shadow isc-card",style:{borderRadius:"4px",overflow:"hidden",flexDirection:"row",display:"flex",alignItems:"flex-start",height:"100%"}},D(u.a,{style:{width:"100%"}},D(p.a,{className:"col-loan-credit",xs:24,sm:24,md:24,lg:24,xl:24,style:{padding:0}},D("div",{style:{padding:"20px 0"}},D("div",{style:{flex:1,flexDirection:"column",display:"flex",justifyContent:"center",padding:"0 20px",borderBottom:"solid 1px #d8dfe9"}},D("div",{style:{flexDirection:"row",display:"flex",padding:"0 1em 1em 0",width:"100%"}},D("div",{style:{width:"5px",borderRadius:"4px",background:"var(--gd-title-header)",paddingLeft:"5px"}}),D("div",null,D("div",{style:{padding:"0 10px",fontSize:"1.5em",fontWeight:"bold"}},e.LOANTYPE_DESC))),D("div",{style:{flexDirection:"column",display:"flex"}},D("div",{style:{flexDirection:"column",display:"flex"}},D(u.a,null,D(p.a,{xs:0,sm:24,md:24,lg:24,xl:24,xxl:24},D(g.a,{style:{width:"100%"},className:"description-table",useFixedHeader:!1,bordered:!1,size:"small",pagination:!1,showHeader:!1,dataSource:[].concat(Object(n.a)(_.has(e,"COLL_SHOULD_CHECK")&&(null===(a=e.COLL_SHOULD_CHECK)||void 0===a?void 0:a.length)>0?null===(i=e.COLL_SHOULD_CHECK)||void 0===i?void 0:i.map((function(e,t){return{key:"col_index".concat(t),label:e.LABEL}})):[{key:"DEPTACCOUNT_NO",label:"".concat(E.a.t("MaximumLoan")," :"),value:D("div",{style:{fontSize:"1.2em",fontWeight:"bold"}},D("span",{className:"highlight-text"},Object(b.m)(e.LOAN_PERMIT_AMT)," ",E.a.t("THB")))}]),Object(n.a)(_.has(e,"OTHER_INFO")&&(null===(l=e.OTHER_INFO)||void 0===l?void 0:l.length)>0?_.map(e.OTHER_INFO,(function(e,t){return{key:"info_index".concat(t),label:"".concat(e.LABEL," :"),value:D("div",{style:{fontSize:"1.2em",fontWeight:"bold"}},D("span",{className:"highlight-text"},e.VALUE))}})):[]),Object(n.a)(S.default.IS_ESTIMATECREDIT?e.BUY_SHARE_MORE?[{key:"BUY_SHARE_MORE",label:"".concat(E.a.t("MustAddShares")," :"),value:D("div",null,D("span",{className:"highlight-text",style:{fontWeight:"bold"}},Object(b.m)(e.BUY_SHARE_MORE)," ",E.a.t("THB")))}]:[]:e.LOAN_AMT?[{key:"LAST_OPERATE_DATE_FORMAT",label:"".concat(E.a.t("RemainingLoan")," :"),value:D("div",null,D("span",{className:"highlight-text",style:{fontSize:"1.2em",fontWeight:"bold"}},e.LOAN_AMT," ",E.a.t("THB")))}]:[])),columns:[{title:"label",dataIndex:"label",key:"label",className:"description-label"},{title:"value",dataIndex:"value",key:"value",render:function(e,t){t.key;return D("div",{style:{paddingBottom:0,textAlign:"right"}},e)}}]})),D(p.a,{xs:24,sm:0,md:0,lg:0,xl:0,xxl:0},D(u.a,{className:"row-header"},D(p.a,{span:24},D("div",{className:"label-header"},"".concat(E.a.t("MaxCommonCredit")," : "))),D(p.a,{span:24},D("span",{className:"highlight-text",style:{fontSize:"1.2em",fontWeight:"bold"}},e.LOAN_PERMIT_AMT," ",E.a.t("THB")))),S.default.IS_ESTIMATECREDIT&&e.BUY_SHARE_MORE?D(u.a,{className:"row-header"},D(p.a,{span:24},D("div",{className:"label-header"},"".concat(E.a.t("MustAddShares")," : "))),D(p.a,{span:24},D("span",{className:"highlight-text"},Object(b.m)(e.BUY_SHARE_MORE)," ",E.a.t("THB")))):e.LOAN_AMT?D(u.a,{className:"row-header"},D(p.a,{span:24},D("div",{className:"label-header"},"".concat(E.a.t("RemainingLoan")," : "))),D(p.a,{span:24},D("span",{className:"highlight-text"},Object(b.m)(e.LOAN_AMT)," ",E.a.t("THB")))):null))))),e.OLD_CONTRACT&&e.OLD_CONTRACT.length>0&&D("div",{style:{flexDirection:"column",display:"flex",paddingLeft:"20px",paddingRight:"20px"}},e.OLD_CONTRACT&&e.OLD_CONTRACT.length>0&&D("div",{style:{padding:"10px 0 0"}},D("div",null,E.a.t("SettleOldContract")),null===(d=e.OLD_CONTRACT)||void 0===d?void 0:d.map((function(e,a){return[D("div",{key:a,className:"loan-sub",onClick:function(){B[t].OLD_CONTRACT[a].isSelected?(B[t].OLD_CONTRACT[a].isSelected=!1,I(Object(n.a)(B))):(B[t].OLD_CONTRACT[a].isSelected=!0,I(Object(n.a)(B)))},style:{padding:"0 10px",borderRadius:5}},D("div",{style:{flexDirection:"row",alignItems:"center",display:"flex"}},D("div",{style:{padding:"1em"}},D(m.a,{checked:e.isSelected,onChange:function(e){B[t].OLD_CONTRACT[a].isSelected=e.target.checked,I(Object(n.a)(B))}})),D("div",{style:{flex:1}},D("div",{style:{padding:"5px 0",fontSize:"1.2em",fontWeight:"bold"}},e.LOANTYPE_DESC),D("div",{style:{padding:"5px 0",display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},D("div",{style:{paddingRight:5,whiteSpace:"nowrap",opacity:.9}},E.a.t("ContractNo")," :"),D("div",null,e.CONTRACT_NO)),D("div",{style:{padding:"5px 0",display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},D("div",{style:{paddingRight:5,whiteSpace:"nowrap",opacity:.9}},"".concat(E.a.t("LoanBalance")," :")),D("div",{style:{fontSize:"1.2em",fontWeight:"bold"}},D("span",{className:"link-text"},Object(b.m)(e.BALANCE)," ",E.a.t("THB"))))))),D(f.a,{key:"divider_".concat(a),style:{margin:"5px 0"}})]}))),D("div",null,D("span",null,E.a.t("LoanEstimate")," : ")," ",D("span",{style:{fontSize:"1.2em",fontWeight:"bold"},className:"highlight-text"},Object(b.m)(e.LOAN_PERMIT_AMT-_.filter(e.OLD_CONTRACT||[],{isSelected:!0}).reduce((function(e,t){return e+Object(b.n)(t.BALANCE)}),0)))," ",D("span",{className:"highlight-text",style:{fontSize:"1.2em",fontWeight:"bold"}},E.a.t("THB")))))))))})):j?D("div",{style:{margin:"auto",textAlign:"center"}},D("div",{className:"lds-ellipsis"},D("div",null),D("div",null),D("div",null),D("div",null)),D("div",{className:"sub-text",style:{fontSize:"smaller"}},E.a.t("Loading"))):D(p.a,{className:"col-left",xs:24,sm:24,md:24,lg:24,xl:24,style:{paddingBottom:"20px",animationDuration:".2s"}},D("div",{style:{backgroundColor:"white",borderRadius:"4px",overflow:"hidden",flexDirection:"column",display:"flex"}},D("div",{style:{fontSize:"small",textAlign:"center"}},D(v.a,{className:"empty-div",description:E.a.t("DataNotFound"),style:{fontSize:"small"},image:D("picture",null,D("source",{srcSet:"".concat(M.imageFolder,"/notfound.webp"),type:"image/webp"}),D("source",{srcSet:"".concat(M.imageFolder,"/notfound.png"),type:"image/png"}),D("img",{alt:"notfound-icon",src:"".concat(M.imageFolder,"/notfound.png"),type:"image/png",style:{userSelect:"none",opacity:.6}}))})))))))))})))},owcJ:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/LoanCredit",function(){return a("S6g5")}])}},[["owcJ",0,2,3,5,8,7,9,1,4,6,10,11,12,13,14,15]]]);