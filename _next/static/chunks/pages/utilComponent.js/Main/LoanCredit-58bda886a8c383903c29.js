_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[87],{YjiL:function(e,t,a){"use strict";a.r(t);var n=a("rg98"),i=a("H+61"),s=a("UlJF"),c=a("+Css"),d=a("7LId"),l=a("VIvw"),r=a("iHvq"),o=a("cpVT"),j=a("vJKn"),h=a.n(j),x=a("q1tI"),p=a("g4pe"),b=a.n(p),u=a("BMrR"),O=a("kPKH"),f=a("wCAj"),g=a("kaz8"),m=a("20a2"),y=a.n(m),v=a("WM+0"),C=a("VlGh"),L=a("xtEs"),N=a("mOvS"),T=a.n(N),w=a("Y0NT"),S=a("/MKj"),A=a("fmKo"),_=a("fH4n"),E=a("9kay"),k=a("nKUr");function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(r.a)(e);if(t){var i=Object(r.a)(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(l.a)(this,a)}}var I=T()().publicRuntimeConfig,B=function(e){Object(d.a)(a,e);var t=M(a);function a(e){var s;return Object(i.a)(this,a),s=t.call(this,e),Object(o.a)(Object(c.a)(s),"fetchCreditLoanData",Object(n.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.setState({loading:!0}),t={menu_component:Object(L.i)(y.a.pathname)},v.a.fetchCreditLoan(t).then((function(e){e.RESULT?s.setState({loanCreditList:e.CREDIT}):s.setState(D({},s.props.checkResultFalseMessage(e))),s.setState({loading:!1,isInitialLoading:!1})})).catch((function(e){s.setState({loading:!1,isInitialLoading:!1}),s.setState(D({},s.props.checkCatchMessage(e)))}));case 3:case"end":return e.stop()}}),e)})))),s.state={statusCode:200,errData:null,loading:!1,notifyOn:0,pathName:"",selectedValue:0,isSelected:0,loanCreditBalance:12e5,loanCreditList:[],isInitialLoading:!0},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({pathName:Object(L.i)(y.a.pathname)}),this.fetchCreditLoanData()}},{key:"renderLoanCreditRemark",value:function(){return Object(k.jsx)(u.a,{children:Object(k.jsx)(O.a,{span:24,style:{paddingBottom:"20px"},children:Object(k.jsxs)("div",{style:{padding:"20px",background:"var(--gd-title-header)",color:"white",borderRadius:5},children:[Object(k.jsx)("div",{style:{flexDirection:"row",display:"flex",padding:"0 1em 0.5em 0",width:"100%"},children:Object(k.jsx)("div",{style:{padding:"0 0.5em",fontWeight:"bold",fontSize:"1.5em"},children:_.a.t("Annotation")})}),Object(k.jsxs)("div",{style:{paddingLeft:"20px"},children:[Object(k.jsx)("div",{style:{padding:"5px 0"},children:_.a.t("AnnotationHeader")}),Object(k.jsx)("div",{style:{padding:"5px 0"},children:_.a.t("AnnotationCredit1")}),Object(k.jsx)("div",{style:{padding:"5px 0"},children:_.a.t("AnnotationCredit2")}),Object(k.jsx)("div",{style:{padding:"5px 0"},children:_.a.t("AnnotationCredit3")})]})]})})})}},{key:"render",value:function(){var e=this;return this.state.statusCode>=300&&this.state.statusCode<500?Object(k.jsx)(w.default,{statusCode:this.state.statusCode,err:this.state.errData,showModalLogout:function(){return e.props.showModalLogout()}}):Object(k.jsx)("div",{className:"main-layout",style:{position:"relative"},children:Object(k.jsxs)("div",{style:{width:"100%"},children:[Object(k.jsx)(C.a,{checked:!this.state.loading||!this.state.isInitialLoading}),Object(k.jsx)(b.a,{children:Object(k.jsx)("link",{rel:"stylesheet",href:"".concat(I.cssFolder,"/loancredit.css")})}),Object(k.jsx)("div",{className:"main-content",style:{width:"100%"},children:Object(k.jsxs)("div",{className:"sub-content",children:[this.renderLoanCreditRemark(),Object(k.jsx)(u.a,{gutter:{md:0,lg:20},children:this.state.loanCreditList.map((function(t,a){return Object(k.jsx)(O.a,{className:"col-loan-credit",xs:24,sm:24,md:24,lg:24,xl:12,children:Object(k.jsx)("div",{className:"shadow-content",style:{backgroundColor:"white",borderRadius:"4px",overflow:"hidden",flexDirection:"row",display:"flex",alignItems:"center",marginBottom:20},children:Object(k.jsx)(u.a,{style:{width:"100%"},children:Object(k.jsx)(O.a,{className:"col-loan-credit",xs:24,sm:24,md:24,lg:24,xl:24,children:Object(k.jsxs)("div",{style:{padding:"20px 0"},children:[Object(k.jsxs)("div",{style:{flex:1,flexDirection:"column",display:"flex",justifyContent:"center",padding:"0 20px",borderBottom:"solid 5px #F9FAFB"},children:[Object(k.jsxs)("div",{style:{flexDirection:"row",display:"flex",padding:"0 1em 1em 0",width:"100%"},children:[Object(k.jsx)("div",{style:{width:"5px",borderRadius:"4px",background:"var(--gd-title-header)",paddingLeft:"5px"}}),Object(k.jsx)("div",{style:{padding:"0 0.5em",fontSize:"1.5em"},children:t.LOAN_DESC})]}),Object(k.jsx)("div",{style:{flexDirection:"column",display:"flex",paddingLeft:"20px"},children:Object(k.jsx)("div",{style:{flexDirection:"column",display:"flex",paddingLeft:"10px"},children:Object(k.jsxs)(u.a,{children:[Object(k.jsx)(O.a,{xs:0,sm:24,md:24,lg:24,xl:24,xxl:24,children:Object(k.jsx)(f.a,{className:"description-table",useFixedHeader:!1,bordered:!1,size:"small",pagination:!1,showHeader:!1,dataSource:[{key:"DEPTACCOUNT_NO",label:"".concat(_.a.t("MaxCommonCredit")," :"),value:Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{className:"highlight-text",style:{paddingRight:"10px"},children:t.MAXLOAN_AMT})," ",_.a.t("THB")]})},A.default.IS_ESTIMATECREDIT?{key:"LAST_OPERATE_DATE_FORMAT",label:"".concat(_.a.t("MustAddShares")," :"),value:Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{className:"highlight-text",style:{paddingRight:"10px"},children:"0.00"})," ",_.a.t("THB")]})}:{key:"LAST_OPERATE_DATE_FORMAT",label:"".concat(_.a.t("RemainingLoan")," :"),value:Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{className:"highlight-text",style:{paddingRight:"10px"},children:t.LOAN_AMT})," ",_.a.t("THB")]})}],columns:[{title:"label",dataIndex:"label",key:"label",className:"description-label"},{title:"value",dataIndex:"value",key:"value",render:function(e,t){t.key;return Object(k.jsx)("div",{style:{paddingBottom:0},children:e})}}]})}),Object(k.jsxs)(O.a,{xs:24,sm:0,md:0,lg:0,xl:0,xxl:0,children:[Object(k.jsxs)(u.a,{className:"row-header",children:[Object(k.jsx)(O.a,{span:24,children:Object(k.jsx)("div",{className:"label-header",children:"".concat(_.a.t("MaxCommonCredit")," : ")})}),Object(k.jsxs)(O.a,{span:24,children:[Object(k.jsx)("span",{className:"highlight-text",children:t.MAXLOAN_AMT})," ",_.a.t("THB")]})]}),A.default.IS_ESTIMATECREDIT&&Object(k.jsxs)(u.a,{className:"row-header",children:[Object(k.jsx)(O.a,{span:24,children:Object(k.jsx)("div",{className:"label-header",children:"".concat(_.a.t("MustAddShares")," : ")})}),Object(k.jsxs)(O.a,{span:24,children:[Object(k.jsx)("span",{className:"highlight-text",children:"0.00"})," ",_.a.t("THB")]})]})]})]})})}),A.default.IS_ESTIMATECREDIT&&Object(k.jsxs)("div",{className:"loan-sub",onClick:function(){1==e.state.loanCreditList[a].isSelected?(e.state.loanCreditList[a].isSelected=!1,e.forceUpdate()):(e.state.loanCreditList[a].isSelected=!0,e.forceUpdate())},style:{opacity:t.isSelected?1:.5,paddingLeft:20},children:[Object(k.jsx)("div",{style:{padding:"10px 0"},children:_.a.t("SettleOldContract")}),Object(k.jsxs)("div",{style:{paddingLeft:"10px",flexDirection:"row",alignItems:"center",display:"flex"},children:[Object(k.jsx)("div",{style:{padding:"1em"},children:Object(k.jsx)(g.a,{checked:t.isSelected,onChange:function(t){e.state.loanCreditList[a].isSelected=t.target.checked,e.forceUpdate()}})}),Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{style:{padding:"5px 0"},children:[Object(k.jsx)("span",{className:"sub-text",children:_.a.t("ContractNo")})," ",t.contract_no," ",Object(k.jsx)("span",{className:"sub-text",children:t.contract_type})]}),Object(k.jsxs)("div",{style:{padding:"5px 0"},children:[Object(k.jsx)("span",{className:"sub-text",children:"".concat(_.a.t("LoanBalance")," :")})," ",Object(k.jsx)("span",{className:"highlight-text",children:Object(L.m)(t.contract_balance)})," ",_.a.t("THB")]})]})]})]},a)]}),A.default.IS_ESTIMATECREDIT&&Object(k.jsx)("div",{style:{flexDirection:"column",display:"flex",paddingLeft:"40px",paddingRight:"20px",paddingTop:"20px"},children:Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{className:"sub-text",children:_.a.t("LoanEstimate")})," ",Object(k.jsx)("span",{className:"highlight-text",children:t.MAXLOAN_AMT})," ",_.a.t("THB")]})})]})})})})},a)}))})]})})]})})}}]),a}(x.PureComponent);t.default=Object(S.b)((function(e){return{}}),(function(e){return{}}))(Object(E.c)()(B))},seqU:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/utilComponent.js/Main/LoanCredit",function(){return a("YjiL")}])}},[["seqU",2,1,4,5,7,8,11,0,3,6,9,10,12,13,14,15]]]);