_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[85],{YjiL:function(t,e,a){"use strict";a.r(e);var n=a("vJKn"),i=a.n(n),s=a("rg98"),l=a("H+61"),d=a("UlJF"),o=a("+Css"),r=a("7LId"),c=a("VIvw"),p=a("iHvq"),u=a("cpVT"),f=a("q1tI"),h=a.n(f),g=a("g4pe"),m=a.n(g),y=a("BMrR"),x=a("kPKH"),v=a("wCAj"),b=a("kaz8"),C=a("20a2"),O=a.n(C),L=a("WM+0"),N=a("VlGh"),T=a("xtEs"),w=a("mOvS"),S=a.n(w),A=a("Y0NT"),j=a("/MKj"),E=a("fmKo"),_=a("fH4n"),k=a("9kay"),D=h.a.createElement;function R(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function M(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?R(Object(a),!0).forEach((function(e){Object(u.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function I(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=Object(p.a)(t);if(e){var i=Object(p.a)(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(c.a)(this,a)}}var P=S()().publicRuntimeConfig,B=function(t){Object(r.a)(a,t);var e=I(a);function a(t){var n;return Object(l.a)(this,a),n=e.call(this,t),Object(u.a)(Object(o.a)(n),"fetchCreditLoanData",Object(s.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.setState({loading:!0}),e={menu_component:Object(T.i)(O.a.pathname)},L.a.fetchCreditLoan(e).then((function(t){t.RESULT?n.setState({loanCreditList:t.CREDIT}):n.setState(M({},n.props.checkResultFalseMessage(t))),n.setState({loading:!1,isInitialLoading:!1})})).catch((function(t){n.setState({loading:!1,isInitialLoading:!1}),n.setState(M({},n.props.checkCatchMessage(t)))}));case 3:case"end":return t.stop()}}),t)})))),n.state={statusCode:200,errData:null,loading:!1,notifyOn:0,pathName:"",selectedValue:0,isSelected:0,loanCreditBalance:12e5,loanCreditList:[],isInitialLoading:!0},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.setState({pathName:Object(T.i)(O.a.pathname)}),this.fetchCreditLoanData()}},{key:"renderLoanCreditRemark",value:function(){return D(y.a,null,D(x.a,{span:24,style:{paddingBottom:"20px"}},D("div",{style:{padding:"20px",background:"var(--gd-title-header)",color:"white",borderRadius:5}},D("div",{style:{flexDirection:"row",display:"flex",padding:"0 1em 0.5em 0",width:"100%"}},D("div",{style:{padding:"0 0.5em",fontWeight:"bold",fontSize:"1.5em"}},_.a.t("Annotation"))),D("div",{style:{paddingLeft:"20px"}},D("div",{style:{padding:"5px 0"}},_.a.t("AnnotationHeader")),D("div",{style:{padding:"5px 0"}},_.a.t("AnnotationCredit1")),D("div",{style:{padding:"5px 0"}},_.a.t("AnnotationCredit2")),D("div",{style:{padding:"5px 0"}},_.a.t("AnnotationCredit3"))))))}},{key:"render",value:function(){var t=this;return this.state.statusCode>=300&&this.state.statusCode<500?D(A.default,{statusCode:this.state.statusCode,err:this.state.errData,showModalLogout:function(){return t.props.showModalLogout()}}):D("div",{className:"main-layout",style:{position:"relative"}},D("div",{style:{width:"100%"}},D(N.a,{checked:!this.state.loading||!this.state.isInitialLoading}),D(m.a,null,D("link",{rel:"stylesheet",href:"".concat(P.cssFolder,"/loancredit.css")})),D("div",{className:"main-content",style:{width:"100%"}},D("div",{className:"sub-content"},this.renderLoanCreditRemark(),D(y.a,{gutter:{md:0,lg:20}},this.state.loanCreditList.map((function(e,a){return D(x.a,{key:a,className:"col-loan-credit",xs:24,sm:24,md:24,lg:24,xl:12},D("div",{className:"shadow-content",style:{backgroundColor:"white",borderRadius:"4px",overflow:"hidden",flexDirection:"row",display:"flex",alignItems:"center",marginBottom:20}},D(y.a,{style:{width:"100%"}},D(x.a,{className:"col-loan-credit",xs:24,sm:24,md:24,lg:24,xl:24},D("div",{style:{padding:"20px 0"}},D("div",{style:{flex:1,flexDirection:"column",display:"flex",justifyContent:"center",padding:"0 20px",borderBottom:"solid 5px #F9FAFB"}},D("div",{style:{flexDirection:"row",display:"flex",padding:"0 1em 1em 0",width:"100%"}},D("div",{style:{width:"5px",borderRadius:"4px",background:"var(--gd-title-header)",paddingLeft:"5px"}}),D("div",{style:{padding:"0 0.5em",fontSize:"1.5em"}},e.LOAN_DESC)),D("div",{style:{flexDirection:"column",display:"flex",paddingLeft:"20px"}},D("div",{style:{flexDirection:"column",display:"flex",paddingLeft:"10px"}},D(y.a,null,D(x.a,{xs:0,sm:24,md:24,lg:24,xl:24,xxl:24},D(v.a,{className:"description-table",useFixedHeader:!1,bordered:!1,size:"small",pagination:!1,showHeader:!1,dataSource:[{key:"DEPTACCOUNT_NO",label:"".concat(_.a.t("MaxCommonCredit")," :"),value:D("div",null,D("span",{className:"highlight-text",style:{paddingRight:"10px"}},e.MAXLOAN_AMT)," ",_.a.t("THB"))},E.default.IS_ESTIMATECREDIT?{key:"LAST_OPERATE_DATE_FORMAT",label:"".concat(_.a.t("MustAddShares")," :"),value:D("div",null,D("span",{className:"highlight-text",style:{paddingRight:"10px"}},"0.00")," ",_.a.t("THB"))}:{key:"LAST_OPERATE_DATE_FORMAT",label:"".concat(_.a.t("RemainingLoan")," :"),value:D("div",null,D("span",{className:"highlight-text",style:{paddingRight:"10px"}},e.LOAN_AMT)," ",_.a.t("THB"))}],columns:[{title:"label",dataIndex:"label",key:"label",className:"description-label"},{title:"value",dataIndex:"value",key:"value",render:function(t,e){e.key;return D("div",{style:{paddingBottom:0}},t)}}]})),D(x.a,{xs:24,sm:0,md:0,lg:0,xl:0,xxl:0},D(y.a,{className:"row-header"},D(x.a,{span:24},D("div",{className:"label-header"},"".concat(_.a.t("MaxCommonCredit")," : "))),D(x.a,{span:24},D("span",{className:"highlight-text"},e.MAXLOAN_AMT)," ",_.a.t("THB"))),E.default.IS_ESTIMATECREDIT&&D(y.a,{className:"row-header"},D(x.a,{span:24},D("div",{className:"label-header"},"".concat(_.a.t("MustAddShares")," : "))),D(x.a,{span:24},D("span",{className:"highlight-text"},"0.00")," ",_.a.t("THB"))))))),E.default.IS_ESTIMATECREDIT&&D("div",{key:a,className:"loan-sub",onClick:function(){1==t.state.loanCreditList[a].isSelected?(t.state.loanCreditList[a].isSelected=!1,t.forceUpdate()):(t.state.loanCreditList[a].isSelected=!0,t.forceUpdate())},style:{opacity:e.isSelected?1:.5,paddingLeft:20}},D("div",{style:{padding:"10px 0"}},_.a.t("SettleOldContract")),D("div",{style:{paddingLeft:"10px",flexDirection:"row",alignItems:"center",display:"flex"}},D("div",{style:{padding:"1em"}},D(b.a,{checked:e.isSelected,onChange:function(e){t.state.loanCreditList[a].isSelected=e.target.checked,t.forceUpdate()}})),D("div",null,D("div",{style:{padding:"5px 0"}},D("span",{className:"sub-text"},_.a.t("ContractNo"))," ",e.contract_no," ",D("span",{className:"sub-text"},e.contract_type)),D("div",{style:{padding:"5px 0"}},D("span",{className:"sub-text"},"".concat(_.a.t("LoanBalance")," :"))," ",D("span",{className:"highlight-text"},Object(T.m)(e.contract_balance))," ",_.a.t("THB")))))),E.default.IS_ESTIMATECREDIT&&D("div",{style:{flexDirection:"column",display:"flex",paddingLeft:"40px",paddingRight:"20px",paddingTop:"20px"}},D("div",null,D("span",{className:"sub-text"},_.a.t("LoanEstimate"))," ",D("span",{className:"highlight-text"},e.MAXLOAN_AMT)," ",_.a.t("THB"))))))))})))))))}}]),a}(f.PureComponent);e.default=Object(j.b)((function(t){return{}}),(function(t){return{}}))(Object(k.c)()(B))},seqU:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/utilComponent.js/Main/LoanCredit",function(){return a("YjiL")}])}},[["seqU",0,2,3,5,8,7,9,1,4,6,10,11,12,13,14,15]]]);