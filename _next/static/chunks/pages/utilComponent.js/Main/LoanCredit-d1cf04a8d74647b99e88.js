(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8133],{7700:function(e,t,n){"use strict";n.r(t);var i=n(30266),s=n(68216),a=n(25997),l=n(14695),d=n(13444),r=n(30268),c=n(92953),o=n(92809),h=n(809),x=n.n(h),p=n(67294),u=n(9008),f=n(71230),g=n(15746),j=n(90656),m=n(9676),y=n(11163),v=n(13706),Z=n(33330),C=n(94141),b=n(11752),N=n(41561),T=n(28216),L=n(17817),S=n(62045),w=n(8801),A=n(85893);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,c.Z)(e);if(t){var s=(0,c.Z)(this).constructor;n=Reflect.construct(i,arguments,s)}else n=i.apply(this,arguments);return(0,r.Z)(this,n)}}var k=(0,b.default)().publicRuntimeConfig,R=function(e){(0,d.Z)(n,e);var t=E(n);function n(e){var a;return(0,s.Z)(this,n),a=t.call(this,e),(0,o.Z)((0,l.Z)(a),"fetchCreditLoanData",(0,i.Z)(x().mark((function e(){var t;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({loading:!0}),t={menu_component:(0,C.tk)(y.default.pathname)},v.Z.fetchCreditLoan(t).then((function(e){e.RESULT?a.setState({loanCreditList:e.CREDIT}):a.setState(_({},a.props.checkResultFalseMessage(e))),a.setState({loading:!1,isInitialLoading:!1})})).catch((function(e){a.setState({loading:!1,isInitialLoading:!1}),a.setState(_({},a.props.checkCatchMessage(e)))}));case 3:case"end":return e.stop()}}),e)})))),a.state={statusCode:200,errData:null,loading:!1,notifyOn:0,pathName:"",selectedValue:0,isSelected:0,loanCreditBalance:12e5,loanCreditList:[],isInitialLoading:!0},a}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){this.setState({pathName:(0,C.tk)(y.default.pathname)}),this.fetchCreditLoanData()}},{key:"renderLoanCreditRemark",value:function(){return(0,A.jsx)(f.Z,{children:(0,A.jsx)(g.Z,{span:24,style:{paddingBottom:"20px"},children:(0,A.jsxs)("div",{style:{padding:"20px",background:"var(--gd-title-header)",color:"white",borderRadius:5},children:[(0,A.jsx)("div",{style:{flexDirection:"row",display:"flex",padding:"0 1em 0.5em 0",width:"100%"},children:(0,A.jsx)("div",{style:{padding:"0 0.5em",fontWeight:"bold",fontSize:"1.5em"},children:S.Z.t("Annotation")})}),(0,A.jsxs)("div",{style:{paddingLeft:"20px"},children:[(0,A.jsx)("div",{style:{padding:"5px 0"},children:S.Z.t("AnnotationHeader")}),(0,A.jsx)("div",{style:{padding:"5px 0"},children:S.Z.t("AnnotationCredit1")}),(0,A.jsx)("div",{style:{padding:"5px 0"},children:S.Z.t("AnnotationCredit2")}),(0,A.jsx)("div",{style:{padding:"5px 0"},children:S.Z.t("AnnotationCredit3")})]})]})})})}},{key:"render",value:function(){var e=this;return this.state.statusCode>=300&&this.state.statusCode<500?(0,A.jsx)(N.default,{statusCode:this.state.statusCode,err:this.state.errData,showModalLogout:function(){return e.props.showModalLogout()}}):(0,A.jsx)("div",{className:"main-layout",style:{position:"relative"},children:(0,A.jsxs)("div",{style:{width:"100%"},children:[(0,A.jsx)(Z.Z,{checked:!this.state.loading||!this.state.isInitialLoading}),(0,A.jsx)(u.default,{children:(0,A.jsx)("link",{rel:"stylesheet",href:"".concat(k.cssFolder,"/loancredit.css")})}),(0,A.jsx)("div",{className:"main-content",style:{width:"100%"},children:(0,A.jsxs)("div",{className:"sub-content",children:[this.renderLoanCreditRemark(),(0,A.jsx)(f.Z,{gutter:{md:0,lg:20},children:this.state.loanCreditList.map((function(t,n){return(0,A.jsx)(g.Z,{className:"col-loan-credit",xs:24,sm:24,md:24,lg:24,xl:12,children:(0,A.jsx)("div",{className:"shadow-content",style:{backgroundColor:"white",borderRadius:"4px",overflow:"hidden",flexDirection:"row",display:"flex",alignItems:"center",marginBottom:20},children:(0,A.jsx)(f.Z,{style:{width:"100%"},children:(0,A.jsx)(g.Z,{className:"col-loan-credit",xs:24,sm:24,md:24,lg:24,xl:24,children:(0,A.jsxs)("div",{style:{padding:"20px 0"},children:[(0,A.jsxs)("div",{style:{flex:1,flexDirection:"column",display:"flex",justifyContent:"center",padding:"0 20px",borderBottom:"solid 5px #F9FAFB"},children:[(0,A.jsxs)("div",{style:{flexDirection:"row",display:"flex",padding:"0 1em 1em 0",width:"100%"},children:[(0,A.jsx)("div",{style:{width:"5px",borderRadius:"4px",background:"var(--gd-title-header)",paddingLeft:"5px"}}),(0,A.jsx)("div",{style:{padding:"0 0.5em",fontSize:"1.5em"},children:t.LOAN_DESC})]}),(0,A.jsx)("div",{style:{flexDirection:"column",display:"flex",paddingLeft:"20px"},children:(0,A.jsx)("div",{style:{flexDirection:"column",display:"flex",paddingLeft:"10px"},children:(0,A.jsxs)(f.Z,{children:[(0,A.jsx)(g.Z,{xs:0,sm:24,md:24,lg:24,xl:24,xxl:24,children:(0,A.jsx)(j.Z,{className:"description-table",useFixedHeader:!1,bordered:!1,size:"small",pagination:!1,showHeader:!1,dataSource:[{key:"DEPTACCOUNT_NO",label:"".concat(S.Z.t("MaxCommonCredit")," :"),value:(0,A.jsxs)("div",{children:[(0,A.jsx)("span",{className:"highlight-text",style:{paddingRight:"10px"},children:t.MAXLOAN_AMT})," ",S.Z.t("THB")]})},L.default.IS_ESTIMATECREDIT?{key:"LAST_OPERATE_DATE_FORMAT",label:"".concat(S.Z.t("MustAddShares")," :"),value:(0,A.jsxs)("div",{children:[(0,A.jsx)("span",{className:"highlight-text",style:{paddingRight:"10px"},children:"0.00"})," ",S.Z.t("THB")]})}:{key:"LAST_OPERATE_DATE_FORMAT",label:"".concat(S.Z.t("RemainingLoan")," :"),value:(0,A.jsxs)("div",{children:[(0,A.jsx)("span",{className:"highlight-text",style:{paddingRight:"10px"},children:t.LOAN_AMT})," ",S.Z.t("THB")]})}],columns:[{title:"label",dataIndex:"label",key:"label",className:"description-label"},{title:"value",dataIndex:"value",key:"value",render:function(e,t){t.key;return(0,A.jsx)("div",{style:{paddingBottom:0},children:e})}}]})}),(0,A.jsxs)(g.Z,{xs:24,sm:0,md:0,lg:0,xl:0,xxl:0,children:[(0,A.jsxs)(f.Z,{className:"row-header",children:[(0,A.jsx)(g.Z,{span:24,children:(0,A.jsx)("div",{className:"label-header",children:"".concat(S.Z.t("MaxCommonCredit")," : ")})}),(0,A.jsxs)(g.Z,{span:24,children:[(0,A.jsx)("span",{className:"highlight-text",children:t.MAXLOAN_AMT})," ",S.Z.t("THB")]})]}),L.default.IS_ESTIMATECREDIT&&(0,A.jsxs)(f.Z,{className:"row-header",children:[(0,A.jsx)(g.Z,{span:24,children:(0,A.jsx)("div",{className:"label-header",children:"".concat(S.Z.t("MustAddShares")," : ")})}),(0,A.jsxs)(g.Z,{span:24,children:[(0,A.jsx)("span",{className:"highlight-text",children:"0.00"})," ",S.Z.t("THB")]})]})]})]})})}),L.default.IS_ESTIMATECREDIT&&(0,A.jsxs)("div",{className:"loan-sub",onClick:function(){1==e.state.loanCreditList[n].isSelected?(e.state.loanCreditList[n].isSelected=!1,e.forceUpdate()):(e.state.loanCreditList[n].isSelected=!0,e.forceUpdate())},style:{opacity:t.isSelected?1:.5,paddingLeft:20},children:[(0,A.jsx)("div",{style:{padding:"10px 0"},children:S.Z.t("SettleOldContract")}),(0,A.jsxs)("div",{style:{paddingLeft:"10px",flexDirection:"row",alignItems:"center",display:"flex"},children:[(0,A.jsx)("div",{style:{padding:"1em"},children:(0,A.jsx)(m.Z,{checked:t.isSelected,onChange:function(t){e.state.loanCreditList[n].isSelected=t.target.checked,e.forceUpdate()}})}),(0,A.jsxs)("div",{children:[(0,A.jsxs)("div",{style:{padding:"5px 0"},children:[(0,A.jsx)("span",{className:"sub-text",children:S.Z.t("ContractNo")})," ",t.contract_no," ",(0,A.jsx)("span",{className:"sub-text",children:t.contract_type})]}),(0,A.jsxs)("div",{style:{padding:"5px 0"},children:[(0,A.jsx)("span",{className:"sub-text",children:"".concat(S.Z.t("LoanBalance")," :")})," ",(0,A.jsx)("span",{className:"highlight-text",children:(0,C.E9)(t.contract_balance)})," ",S.Z.t("THB")]})]})]})]},n)]}),L.default.IS_ESTIMATECREDIT&&(0,A.jsx)("div",{style:{flexDirection:"column",display:"flex",paddingLeft:"40px",paddingRight:"20px",paddingTop:"20px"},children:(0,A.jsxs)("div",{children:[(0,A.jsx)("span",{className:"sub-text",children:S.Z.t("LoanEstimate")})," ",(0,A.jsx)("span",{className:"highlight-text",children:t.MAXLOAN_AMT})," ",S.Z.t("THB")]})})]})})})})},n)}))})]})})]})})}}]),n}(p.PureComponent);t.default=(0,T.$j)((function(e){return{}}),(function(e){return{}}))((0,w.hr)()(R))},89906:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/utilComponent.js/Main/LoanCredit",function(){return n(7700)}])}},function(e){e.O(0,[6507,5809,6253,656,9774,2888,179],(function(){return t=89906,e(e.s=t);var t}));var t=e.O();_N_E=t}]);