_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[79],{I1E3:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/TransferDepInsideCoop",function(){return n("gBVf")}])},gBVf:function(t,e,n){"use strict";n.r(e);var s=n("rg98"),a=n("H+61"),c=n("UlJF"),i=n("+Css"),l=n("7LId"),o=n("VIvw"),r=n("iHvq"),d=n("cpVT"),x=n("vJKn"),j=n.n(x),h=n("q1tI"),u=n("g4pe"),p=n.n(u),f=n("ECub"),O=n("BMrR"),m=n("kPKH"),g=n("PArb"),b=n("wCAj"),y=n("CtXQ"),A=n("20a2"),T=n.n(A),v=n("WM+0"),N=n("xtEs"),C=n("fmKo"),E=n("VlGh"),S=n("mOvS"),w=n.n(S),D=n("Y0NT"),M=n("/MKj"),F=n("5VHT"),I=n.n(F),k=n("n0zQ"),P=n("sdZm"),R=n("pIR8"),B=n("Xd8E"),U=n("ZiQX"),L=n("DObr"),V=n("Xt1q"),H=n("+Isj"),K=n("PsDL"),z=n("Z3vd"),G=n("ADg1"),W=n("iae6"),X=n("KmP9"),Y=n("JQEk"),J=n("kKU3"),Q=n("olcQ"),q=n("KPTR"),Z=n("bkve"),$=n("1AYd"),tt=n("pdwK"),et=n("hQDC"),nt=n("MoW8"),st=n("fH4n"),at=n("9kay"),ct=n("nKUr");function it(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?it(Object(n),!0).forEach((function(e){Object(d.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):it(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ot(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=Object(r.a)(t);if(e){var a=Object(r.a)(this).constructor;n=Reflect.construct(s,arguments,a)}else n=s.apply(this,arguments);return Object(o.a)(this,n)}}var rt=w()().publicRuntimeConfig,dt=function(t){Object(l.a)(n,t);var e=ot(n);function n(t){var c,l;return Object(a.a)(this,n),l=e.call(this,t),Object(d.a)(Object(i.a)(l),"fetchAllowAccount",Object(s.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l.setState({loading:!0}),e={menu_component:"TransferDepInsideCoop"},v.a.fetchAllowAccountTransfer(e).then((function(t){if(t.RESULT){var e=[];if(t.FORMAT_DEPT)t.FORMAT_DEPT.split("-").map((function(t){e.push(t.length)}));l.setState({accArr:t.ACCOUNT_ALLOW,favArr:t.ACCOUNT_FAV||[],dept_format:e},(function(){l.state.accArr[0]&&l.setState({myAccount:l.state.accArr[0],onSelectAccList:0,transferValue:null})}))}else l.setState(lt({},l.props.checkResultFalseMessage(t,{},st.a.t("SavingAccNotFound"))));l.setState({loading:!1,isInitialLoading:!1})})).catch((function(t){l.setState({loading:!1,isInitialLoading:!1}),l.setState(lt({},l.props.checkCatchMessage(t)))}));case 3:case"end":return t.stop()}}),t)})))),Object(d.a)(Object(i.a)(l),"getFeeFundTransfer",Object(s.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l.setState({loadingNext:!0,failedVerify:null}),e={deptaccount_no:l.state.myAccount.DEPTACCOUNT_NO,amt_transfer:l.state.transferValue,menu_component:"TransferDepInsideCoop"},v.a.FeefundTransfer(e).then((function(t){t.RESULT?t.CAUTION?l.setState({alertData:{isOpen:!0,title:null,detail:t.CAUTION.RESPONSE_MESSAGE,type:"confirm",icon:null,loading:!1,onClose:function(){l.setState({alertData:{}})},onConfirm:function(){l.setState({penaltyAMT:t.PENALTY_AMT,feeAMT:t.FEE_AMT,failedTransfer:null,currentStep:1,alertData:{}})},confirmText:t.CAUTION.CONFIRM_TEXT,cancelText:t.CAUTION.CANCEL_TEXT,disabledConfirm:!t.CAUTION.CONFIRM_TEXT}}):l.setState({penaltyAMT:t.PENALTY_AMT,feeAMT:t.FEE_AMT,failedTransfer:null,currentStep:1}):l.setState({penaltyAMT:null,feeAMT:null,failedVerify:t.RESPONSE_MESSAGE?t.RESPONSE_MESSAGE:st.a.t("ErrorAndTryagain")}),l.setState({loadingNext:!1})})).catch((function(t){l.setState({loadingNext:!1}),l.setState({penaltyAMT:null,feeAMT:null,failedVerify:st.a.t("ErrorAndTryagain")})}));case 3:case"end":return t.stop()}}),t)})))),Object(d.a)(Object(i.a)(l),"FundTransfer",Object(s.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l.setState({loadingConfirm:!0,failedTransfer:null}),e={from_deptaccount_no:l.state.myAccount.DEPTACCOUNT_NO,to_deptaccount_no:l.state.toAccount.DEPTACCOUNT_NO,amt_transfer:l.state.transferValue,penalty_amt:l.state.penaltyAMT,fee_amt:l.state.feeAMT,remark:l.state.transferRemark,menu_component:"TransferDepInsideCoop"},v.a.fundTransferInCoop(e).then((function(t){t.RESULT?l.setState({slip_no:t.TRANSACTION_NO,transaction_date:t.TRANSACTION_DATE,currentStep:2}):l.setState({failedTransfer:t.RESPONSE_MESSAGE?t.RESPONSE_MESSAGE:st.a.t("FailedAndTryagain")}),l.setState({loadingConfirm:!1})})).catch((function(t){l.setState({loadingConfirm:!1}),l.setState({failedTransfer:st.a.t("FailedAndTryagain")})}));case 3:case"end":return t.stop()}}),t)})))),Object(d.a)(Object(i.a)(l),"fetchDesAccount",Object(s.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l.setState({loadingDes:!0,failedVerify:null}),e={source_deptaccount_no:l.state.myAccount.DEPTACCOUNT_NO,deptaccount_no:l.state.transferAccNo,menu_component:"TransferDepInsideCoop"},v.a.fetchAccountDestination(e).then((function(t){t.RESULT?l.setState({onSelectedTo:!0,toAccount:t.ACCOUNT_DATA,onSelectAccList:3}):l.setState({failedVerify:t.RESPONSE_MESSAGE?t.RESPONSE_MESSAGE:st.a.t("ErrorAndTryagain")}),l.setState({loadingDes:!1})})).catch((function(t){l.setState({loadingDes:!1}),l.setState({failedVerify:st.a.t("ErrorAndTryagain")})}));case 3:case"end":return t.stop()}}),t)})))),Object(d.a)(Object(i.a)(l),"onPressSelectedCustomAccount",(function(t){var e=t.item,n=(t.index,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"sender");"sender"==n?l.setState({myAccount:e,transferValue:"",openSelectAcc:!1}):l.setState({toAccount:e,openSelectAcc:!1})})),l.state=(c={statusCode:200,errData:null,loading:!0,notifyOn:0,pathName:"",transferValue:null,accArr:[],favArr:[],myAccount:{},toAccount:{},onSelectAccList:1,isShowSlip:!1,transferAccNo:null,onSelectedTo:!1,dept_format:[],isConfirmTrans:!1,feeAMT:null,penaltyAMT:null,loadingTransfer:!1,loadingFund:!1,slip_no:"",transaction_date:"",isInitialLoading:!0},Object(d.a)(c,"transaction_date",""),Object(d.a)(c,"currentStep",0),Object(d.a)(c,"openSelectAcc",!1),Object(d.a)(c,"select_acc_on","sender"),Object(d.a)(c,"transferRemark",null),Object(d.a)(c,"alertData",{}),c),l}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({pathName:Object(N.i)(T.a.pathname)}),this.fetchAllowAccount()}},{key:"componentDidUpdate",value:function(t,e){0==t.isSuccessOTP&&1==this.props.isSuccessOTP&&this.FundTransfer()}},{key:"renderModalSelectAccount",value:function(){var t,e,n=this,s=this.props.HIDE_ACCOUNT_NO.data,a=this.state.select_acc_on,c="sender"==a?null!==(t=this.state.accArr)&&void 0!==t?t:[]:(null!==(e=this.state.accArr)&&void 0!==e?e:[]).filter((function(t){return _.isEmpty(n.state.myAccount)?t:t.DEPTACCOUNT_NO!=n.state.myAccount.DEPTACCOUNT_NO}));return Object(ct.jsx)(V.a,{open:this.state.openSelectAcc,onClose:function(){n.setState({openSelectAcc:!1})},closeAfterTransition:!0,BackdropComponent:H.a,BackdropProps:{timeout:500},style:{},children:Object(ct.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",overflow:"auto",width:"100%",height:"100vh",padding:"20px 0"},children:[Object(ct.jsx)("div",{style:{position:"absolute",top:20,right:40,zIndex:3},children:Object(ct.jsx)(K.a,{onClick:function(){n.setState({openSelectAcc:!1})},style:{backgroundColor:"rgba(255,255,255,0.5)"},children:Object(ct.jsx)(k.a,{})})}),Object(ct.jsx)("div",{onClick:function(){n.setState({openSelectAcc:!1})},style:{position:"fixed",top:0,right:0,width:"100%",height:"100%"}}),Object(ct.jsxs)("div",{className:"sub-content",style:{backgroundColor:"white",margin:"auto",minHeight:"unset",width:"unset",zIndex:2},children:[Object(ct.jsx)("div",{style:{paddingBottom:20,position:"sticky",top:60},children:Object(ct.jsx)("div",{style:{fontSize:"1.2em",textDecoration:"underline",backgroundColor:"white"},children:st.a.t("SelectAcc")})}),c.length>0?c.map((function(t,e){return"sender"==a?Object(ct.jsx)("div",{style:{marginBottom:20},children:Object(ct.jsx)(z.a,{onClick:function(){n.onPressSelectedCustomAccount({item:t,index:e},a)},color:n.state.myAccount.DEPTACCOUNT_NO==t.DEPTACCOUNT_NO?"primary":"default",variant:"outlined",style:{textTransform:"none"},children:Object(ct.jsxs)("div",{style:{padding:"20px 0"},children:[Object(ct.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:t.DEPT_TYPE||"-"}),Object(ct.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(ct.jsxs)("div",{style:{padding:"0 20px",textAlign:"left"},children:[Object(ct.jsx)("div",{style:{paddingTop:10},children:(s?t.DEPTACCOUNT_NO_FORMAT_HIDE:t.DEPTACCOUNT_NO_FORMAT)||"xxx-xxx-xxxx"}),Object(ct.jsx)("div",{children:t.DEPTACCOUNT_NAME||""})]}),Object(ct.jsxs)("div",{style:{textAlign:"right",padding:"0 20px"},children:[Object(ct.jsx)("div",{style:{paddingTop:10},children:st.a.t("WithdrawableAmtTHB")}),Object(ct.jsx)("div",{className:"highlight-text",style:{fontSize:"1.2em"},children:t.BALANCE_FORMAT||"-"})]})]})]})})},e):Object(ct.jsx)("div",{style:{marginBottom:20},children:Object(ct.jsx)(z.a,{onClick:function(){n.onPressSelectedCustomAccount({item:t,index:e},a)},disabled:n.state.myAccount.DEPTACCOUNT_NO==t.DEPTACCOUNT_NO,color:n.state.toAccount.DEPTACCOUNT_NO==t.DEPTACCOUNT_NO?"primary":"default",variant:"outlined",style:{textTransform:"none"},children:Object(ct.jsx)("div",{children:Object(ct.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 0"},children:[Object(ct.jsx)("div",{style:{padding:"0 20px"},children:_.isEmpty(t.BANK_LOGO)?Object(ct.jsxs)("picture",{children:[Object(ct.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.webp"),type:"image/webp"}),Object(ct.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.png"),type:"image/png"}),Object(ct.jsx)("img",{alt:"coop-icon",src:"".concat(rt.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}})]}):Object(ct.jsx)("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:t.BANK_LOGO?t.BANK_LOGO:null})}),Object(ct.jsxs)("div",{style:{textAlign:"right",padding:"0 20px"},children:[Object(ct.jsx)("div",{children:t.DEPTACCOUNT_NO_FORMAT||"xxx-xxx-xxxx"}),Object(ct.jsx)("div",{children:t.DEPTACCOUNT_NAME||""})]})]})})})},e)})):Object(ct.jsx)(f.a,{className:"empty-div",description:st.a.t("DataNotFound"),style:{fontSize:"small"},image:Object(ct.jsxs)("picture",{children:[Object(ct.jsx)("source",{srcSet:"".concat(rt.imageFolder,"/notfound.webp"),type:"image/webp"}),Object(ct.jsx)("source",{srcSet:"".concat(rt.imageFolder,"/notfound.png"),type:"image/png"}),Object(ct.jsx)("img",{alt:"notfound-icon",src:"".concat(rt.imageFolder,"/notfound.png"),type:"image/png",style:{userSelect:"none",opacity:.6}})]})})]})]})})}},{key:"onVerify",value:function(){C.default.isAllowSelectedSource;if(this.setState({loadingNext:!0}),_.isEmpty(this.state.myAccount))this.setState({failedVerify:st.a.t("pleaseSelectAccountForTransactions"),loadingNext:!1});else if(_.isEmpty(this.state.toAccount))this.setState({failedVerify:st.a.t("pleaseSelectDestinationAccount"),loadingNext:!1});else{(parseFloat(this.state.transferValue)||0)>(_.has(this.state.myAccount,"BALANCE")&&parseFloat(this.state.myAccount.BALANCE)||0)?this.setState({failedVerify:st.a.t("notEnoughMoneyForTransaction"),loadingNext:!1}):this.getFeeFundTransfer()}}},{key:"renderAccount",value:function(){var t,e,n=this,s=this.props.HIDE_ACCOUNT_NO.data;return Object(ct.jsx)("div",{children:Object(ct.jsx)(O.a,{type:"flex",children:Object(ct.jsxs)(m.a,{xs:24,sm:24,md:24,lg:24,xl:{span:16,offset:4},xxl:{span:16,offset:4},style:{textAlign:"center"},children:[Object(ct.jsx)("div",{className:"isc-card card-shadow",style:{background:"linear-gradient(0deg, #5c68b7 0%, #4e9ae3 100%)"},children:Object(ct.jsxs)(O.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}],children:[Object(ct.jsxs)(m.a,{xs:24,sm:24,md:12,lg:12,xl:12,xxl:12,style:{textAlign:"center"},children:[Object(ct.jsx)(z.a,{onClick:function(){n.setState({select_acc_on:"sender",openSelectAcc:!0})},variant:"outlined",color:_.isEmpty(this.state.myAccount)?"default":"primary",style:{textTransform:"none",backgroundColor:"white",padding:"20px",height:"100%",minWidth:"50%"},children:Object(ct.jsxs)("div",{children:[Object(ct.jsx)("div",{children:this.state.myAccount.DEPT_TYPE||st.a.t("CoopAccount")}),Object(ct.jsx)("div",{style:{paddingTop:10},children:_.isEmpty(this.state.myAccount)?"xxx-xxx-xxxx":s?this.state.myAccount.DEPTACCOUNT_NO_FORMAT_HIDE:this.state.myAccount.DEPTACCOUNT_NO_FORMAT}),Object(ct.jsx)("div",{children:this.state.myAccount.BALANCE_FORMAT||"x.xx"})]})}),Object(ct.jsx)("div",{className:"transfer-right-arrow",children:Object(ct.jsx)("div",{style:{textAlign:"center"},children:Object(ct.jsx)(K.a,{color:"primary",style:{color:"white"},disableRipple:!0,children:Object(ct.jsx)(P.a,{})})})})]}),Object(ct.jsx)(m.a,{className:"transfer-down-arrow",xs:24,sm:24,md:12,lg:12,xl:{span:8,offset:4},xxl:{span:8,offset:4},style:{textAlign:"center"},children:Object(ct.jsx)(g.a,{children:Object(ct.jsx)(R.a,{style:{color:"#FFF"}})})}),Object(ct.jsx)(m.a,{xs:24,sm:24,md:12,lg:12,xl:12,xxl:12,style:{textAlign:"center"},children:Object(ct.jsx)(z.a,{onClick:function(){document.getElementById("input-accountno")&&document.getElementById("input-accountno").focus()},variant:"outlined",color:_.isEmpty(this.state.toAccount)?"default":"primary",style:{textTransform:"none",backgroundColor:"white",padding:"20px",height:"100%",minWidth:"50%"},children:Object(ct.jsxs)("div",{children:[Object(ct.jsx)("div",{children:_.isEmpty(this.state.toAccount.BANK_LOGO)?Object(ct.jsxs)("picture",{children:[Object(ct.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.webp"),type:"image/webp"}),Object(ct.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.png"),type:"image/png"}),Object(ct.jsx)("img",{alt:"coop-icon",src:"".concat(rt.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}})]}):Object(ct.jsx)("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:this.state.toAccount.BANK_LOGO?this.state.toAccount.BANK_LOGO:null})}),Object(ct.jsxs)("div",{style:{paddingTop:10},children:[Object(ct.jsx)("div",{children:null===(t=this.state.toAccount)||void 0===t?void 0:t.ACCOUNT_NAME}),Object(ct.jsx)("div",{children:(null===(e=this.state.toAccount)||void 0===e?void 0:e.DEPTACCOUNT_NO_FORMAT)||this.state.transferAccNoFormat||"xxx-xxx-xxxx"})]})]})})})]})}),Object(ct.jsxs)(O.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}],children:[Object(ct.jsx)(m.a,{xs:0,sm:0,md:24,lg:24,xl:24,xxl:24,style:{textAlign:"center",paddingTop:40,paddingLeft:8},children:Object(ct.jsx)(b.a,{className:"description-table",useFixedHeader:!1,bordered:!1,size:"small",pagination:!1,showHeader:!1,dataSource:[{key:"accNo",label:"".concat(st.a.t("ToAccountNo")," : "),value:Object(ct.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start"},children:[Object(ct.jsx)("div",{style:{marginBottom:10},children:Object(ct.jsx)(G.a,{size:"small",variant:"outlined",children:this.state.dept_format.length>0?Object(ct.jsx)(I.a,{id:"input-accountno",disabled:!(this.state.myAccount&&!this.state.loadingDes),name:"transferAccNo",className:"cleave-input-number ant-input-number",placeholder:_.isEmpty(this.state.myAccount)?st.a.t("pleaseSelectAccountForTransactions"):st.a.t("EnterDesAccountNo"),options:{numericOnly:!0,blocks:this.state.dept_format,delimiter:"-"},value:this.state.transferAccNo||"",onChange:function(t){return n.setState({transferAccNo:t.target.rawValue,transferAccNoFormat:t.target.value})},onKeyDown:function(t){"Enter"==t.key&&n.state.transferAccNo&&n.fetchDesAccount()}}):Object(ct.jsx)(I.a,{id:"input-accountno",disabled:!(this.state.myAccount&&!this.state.loadingDes),name:"transferAccNo",className:"cleave-input-number ant-input-number",placeholder:_.isEmpty(this.state.myAccount)?st.a.t("pleaseSelectAccountForTransactions"):st.a.t("EnterDesAccountNo"),options:{numericOnly:!0,blocks:[3,2,5],delimiter:"-"},value:this.state.transferAccNo||"",onChange:function(t){return n.setState({transferAccNo:t.target.rawValue,transferAccNoFormat:t.target.value})},onKeyDown:function(t){"Enter"==t.key&&n.state.transferAccNo&&n.fetchDesAccount()}})})}),Object(ct.jsx)("div",{style:{marginBottom:10,marginLeft:40},children:Object(ct.jsx)(z.a,{disabled:!this.state.transferAccNo||_.isEmpty(this.state.myAccount)||!!this.state.loadingDes,disableRipple:!!this.state.loadingDes,onClick:function(){!n.state.loadingDes&&n.fetchDesAccount()},color:"primary",variant:"contained",endIcon:this.state.loadingDes?Object(ct.jsx)(W.a,{style:{width:"1em",height:"1em",color:"white"}}):Object(ct.jsx)(P.a,{}),style:{whiteSpace:"nowrap"},children:st.a.t("CheckTransfer")})})]})},!_.isEmpty(this.state.toAccount)&&{key:"Value",label:"".concat(st.a.t("TransactionAmtTHB")," : "),value:Object(ct.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end"},children:[Object(ct.jsx)("div",{style:{marginBottom:10},children:Object(ct.jsx)(G.a,{size:"small",variant:"outlined",children:Object(ct.jsx)(X.a,{id:"transfer-value-outlined",disabled:_.isEmpty(this.state.myAccount),value:this.state.transferValue,onChange:function(t){t.target.value&&parseFloat(t.target.value)>parseFloat(n.state.myAccount.BALANCE)?n.setState({transferValue:n.state.myAccount.BALANCE}):n.setState({transferValue:t.target.value})},placeholder:_.isEmpty(this.state.myAccount)?st.a.t("pleaseSelectAccountForTransactions"):"0.00",inputProps:{autoComplete:"off"},name:"formatted-numberformat-input",variant:"outlined",onKeyDown:function(t){"Enter"==t.key&&n.state.transferValue&&n.onVerify()},inputComponent:N.a},"transfer-value")})}),Object(ct.jsx)("div",{style:{marginBottom:10,marginLeft:40},children:Object(ct.jsx)(z.a,{disabled:!this.state.transferValue||!this.state.transferAccNo,disableRipple:!!this.state.loadingNext,onClick:function(){!n.state.loadingNext&&n.onVerify()},color:"primary",variant:"contained",endIcon:this.state.loadingNext?Object(ct.jsx)(W.a,{style:{width:"1em",height:"1em",color:"white"}}):Object(ct.jsx)(P.a,{}),style:{whiteSpace:"nowrap"},children:st.a.t("Next")})})]})}],columns:[{title:"label",dataIndex:"label",key:"label",className:"description-label"},{title:"value",dataIndex:"value",key:"value"}]})}),Object(ct.jsx)(m.a,{xs:24,sm:24,md:0,lg:0,xl:0,xxl:0,style:{paddingTop:40},children:Object(ct.jsxs)("div",{children:[Object(ct.jsx)("div",{children:"".concat(st.a.t("ToAccountNo")," : ")}),Object(ct.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end"},children:[Object(ct.jsx)("div",{style:{marginBottom:10,width:"100%"},children:Object(ct.jsx)(G.a,{size:"small",variant:"outlined",fullWidth:!0,children:this.state.dept_format.length>0?Object(ct.jsx)(I.a,{id:"input-accountno",disabled:!(this.state.myAccount&&!this.state.loadingDes),name:"transferAccNo",className:"cleave-input-number ant-input-number",placeholder:_.isEmpty(this.state.myAccount)?st.a.t("pleaseSelectAccountForTransactions"):st.a.t("EnterDesAccountNo"),options:{numericOnly:!0,blocks:this.state.dept_format,delimiter:"-"},value:this.state.transferAccNo||"",onChange:function(t){return n.setState({transferAccNo:t.target.rawValue,transferAccNoFormat:t.target.value})},onKeyDown:function(t){"Enter"==t.key&&n.state.transferAccNo&&n.fetchDesAccount()}}):Object(ct.jsx)(I.a,{id:"input-accountno",disabled:!(this.state.myAccount&&!this.state.loadingDes),name:"transferAccNo",className:"cleave-input-number ant-input-number",placeholder:_.isEmpty(this.state.myAccount)?st.a.t("pleaseSelectAccountForTransactions"):st.a.t("EnterDesAccountNo"),options:{numericOnly:!0,blocks:[3,2,5],delimiter:"-"},value:this.state.transferAccNo||"",onChange:function(t){return n.setState({transferAccNo:t.target.rawValue,transferAccNoFormat:t.target.value})},onKeyDown:function(t){"Enter"==t.key&&n.state.transferAccNo&&n.fetchDesAccount()}})})}),Object(ct.jsx)("div",{style:{marginBottom:10,marginLeft:40},children:Object(ct.jsx)(z.a,{disabled:!this.state.transferAccNo||_.isEmpty(this.state.myAccount)||!!this.state.loadingDes,disableRipple:!!this.state.loadingDes,onClick:function(){!n.state.loadingDes&&n.fetchDesAccount()},color:"primary",variant:"contained",endIcon:this.state.loadingDes?Object(ct.jsx)(W.a,{style:{width:"1em",height:"1em",color:"white"}}):Object(ct.jsx)(P.a,{}),style:{whiteSpace:"nowrap"},children:st.a.t("CheckTransfer")})})]}),!_.isEmpty(this.state.toAccount)&&Object(ct.jsxs)("div",{children:[Object(ct.jsx)("div",{children:"".concat(st.a.t("TransactionAmtTHB")," : ")}),Object(ct.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end"},children:[Object(ct.jsx)("div",{style:{marginBottom:10,width:"100%"},children:Object(ct.jsx)(G.a,{size:"small",variant:"outlined",fullWidth:!0,children:Object(ct.jsx)(X.a,{id:"transfer-value-outlined",disabled:_.isEmpty(this.state.myAccount),value:this.state.transferValue,onChange:function(t){t.target.value&&parseFloat(t.target.value)>parseFloat(n.state.myAccount.BALANCE)?n.setState({transferValue:n.state.myAccount.BALANCE}):n.setState({transferValue:t.target.value})},placeholder:_.isEmpty(this.state.myAccount)?st.a.t("pleaseSelectAccountForTransactions"):"0.00",inputProps:{autoComplete:"off"},name:"formatted-numberformat-input",variant:"outlined",onKeyDown:function(t){"Enter"==t.key&&n.state.transferValue&&n.onVerify()},inputComponent:N.a},"transfer-value")})}),Object(ct.jsx)("div",{style:{marginBottom:10,marginLeft:40},children:Object(ct.jsx)(z.a,{disabled:!this.state.transferValue||!this.state.transferAccNo,disableRipple:!!this.state.loadingNext,onClick:function(){!n.state.loadingNext&&n.onVerify()},color:"primary",variant:"contained",endIcon:this.state.loadingNext?Object(ct.jsx)(W.a,{style:{width:"1em",height:"1em",color:"white"}}):Object(ct.jsx)(P.a,{}),style:{whiteSpace:"nowrap"},children:st.a.t("Next")})})]})]})]})})]}),Object(ct.jsx)(Y.a,{in:!!this.state.failedVerify,children:Object(ct.jsx)(J.a,{in:!!this.state.failedVerify,children:Object(ct.jsx)(O.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}],children:Object(ct.jsx)(m.a,{xs:24,sm:24,md:24,lg:24,xl:{span:16,offset:4},xxl:{span:16,offset:4},style:{textAlign:"center",paddingTop:24},children:Object(ct.jsx)("div",{children:Object(ct.jsxs)(U.a,{severity:"error",style:{position:"relative"},onClick:function(){n.setState({failedVerify:null})},children:[Object(ct.jsx)(k.a,{style:{cursor:"pointer",position:"absolute",top:10,right:10}}),Object(ct.jsx)(L.a,{style:{textAlign:"left"},children:this.state.failedVerify})]})})})})})})]})})})}},{key:"render",value:function(){var t=this,e=this.props,n=(e.MENU_LIST,e.HIDE_ACCOUNT_NO.data);return this.state.statusCode>=300&&this.state.statusCode<500?Object(ct.jsx)(D.default,{statusCode:this.state.statusCode,err:this.state.errData,showModalLogout:function(){return t.props.showModalLogout()}}):Object(ct.jsx)("div",{className:"main-layout",style:{position:"relative"},children:Object(ct.jsxs)("div",{style:{width:"100%"},children:[Object(ct.jsx)(E.a,{checked:!this.state.loading||!this.state.isInitialLoading}),Object(ct.jsx)(p.a,{children:Object(ct.jsx)("link",{rel:"stylesheet",href:"".concat(rt.cssFolder,"/transfer.css")})}),Object(ct.jsx)(et.a,{isOpen:!!this.state.alertData.isOpen,title:this.state.alertData.title,description:this.state.alertData.detail,type:this.state.alertData.type,svgIcon:this.state.alertData.icon,loading:!!this.state.alertData.loading,onClose:this.state.alertData.onClose,onConfirm:this.state.alertData.onConfirm,confirmText:this.state.alertData.confirmText,cancelText:this.state.alertData.cancelText,disabledConfirm:!!this.state.alertData.disabledConfirm}),this.renderModalSelectAccount(),Object(ct.jsx)("div",{className:"main-content",style:{width:"100%"},children:Object(ct.jsxs)("div",{className:"sub-content",style:{display:"flex",flexDirection:"column",padding:0},children:[Object(ct.jsxs)("div",{className:"sub-content",style:{flex:1,width:"100%"},children:[Object(ct.jsx)(O.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}],children:Object(ct.jsx)(m.a,{xs:24,sm:24,md:24,lg:24,xl:{span:16,offset:4},xxl:{span:16,offset:4},children:Object(ct.jsx)(nt.a,{th:"\u0e42\u0e2d\u0e19\u0e20\u0e32\u0e22\u0e43\u0e19\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e2a\u0e2b\u0e01\u0e23\u0e13\u0e4c",en:"Transfer in Coop"})})}),Object(ct.jsx)(O.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}],children:Object(ct.jsx)(m.a,{xs:24,sm:24,md:24,lg:24,xl:{span:16,offset:4},xxl:{span:16,offset:4},style:{textAlign:"center"},children:Object(ct.jsxs)(Q.a,{style:{backgroundColor:"transparent"},color:"second",activeStep:this.state.currentStep,alternativeLabel:!0,children:[Object(ct.jsx)(q.a,{children:Object(ct.jsx)(Z.a,{disabled:1!=this.state.currentStep,onClick:function(){return t.setState({currentStep:0})},children:st.a.t("FillInfo")})}),Object(ct.jsx)(q.a,{children:Object(ct.jsx)(Z.a,{disabled:!0,children:st.a.t("CheckInfo")})}),Object(ct.jsx)(q.a,{children:Object(ct.jsx)(Z.a,{disabled:!0,children:st.a.t("SuccessfulTransaction")})})]})})}),Object(ct.jsx)("div",{style:{padding:"40px 0"},children:0==this.state.currentStep?this.renderAccount():1==this.state.currentStep?Object(ct.jsx)("div",{children:Object(ct.jsx)(O.a,{type:"flex",gutter:[{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48},{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48}],children:Object(ct.jsxs)(m.a,{className:"card-shadow isc-card",xs:24,sm:24,md:{span:12,offset:6},lg:{span:12,offset:6},xl:{span:12,offset:6},xxl:{span:8,offset:8},children:[Object(ct.jsx)("div",{style:{textAlign:"center",fontSize:"1.5em",fontWeight:"bold"},children:st.a.t("CheckInfo")}),Object(ct.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:20},children:[Object(ct.jsx)("div",{children:Object(ct.jsxs)("picture",{children:[Object(ct.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.webp"),type:"image/webp"}),Object(ct.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.png"),type:"image/png"}),Object(ct.jsx)("img",{alt:"coop-icon",src:"".concat(rt.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}})]})}),Object(ct.jsxs)("div",{style:{textAlign:"right"},children:[Object(ct.jsx)("div",{children:this.state.myAccount.DEPTACCOUNT_NAME||"-"}),Object(ct.jsx)("div",{style:{paddingTop:10},children:_.isEmpty(this.state.myAccount)?"xxx-xxx-xxxx":n?this.state.myAccount.DEPTACCOUNT_NO_FORMAT_HIDE:this.state.myAccount.DEPTACCOUNT_NO_FORMAT})]})]}),Object(ct.jsx)(g.a,{children:Object(ct.jsx)(R.a,{style:{color:"grey"}})}),Object(ct.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(ct.jsx)("div",{children:_.isEmpty(this.state.toAccount.BANK_LOGO)?Object(ct.jsxs)("picture",{children:[Object(ct.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.webp"),type:"image/webp"}),Object(ct.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.png"),type:"image/png"}),Object(ct.jsx)("img",{alt:"coop-icon",src:"".concat(rt.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}})]}):Object(ct.jsx)("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:this.state.toAccount.BANK_LOGO?this.state.toAccount.BANK_LOGO:null})}),Object(ct.jsxs)("div",{style:{textAlign:"right"},children:[Object(ct.jsx)("div",{children:this.state.toAccount&&this.state.toAccount.DEPTACCOUNT_NAME||st.a.t("ToAccount")}),Object(ct.jsx)("div",{style:{paddingTop:10},children:this.state.toAccount.DEPTACCOUNT_NO_FORMAT||"xxx-xxx-xxxx"})]})]}),Object(ct.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:24},children:[Object(ct.jsx)("div",{children:st.a.t("Amount")}),Object(ct.jsxs)("div",{style:{textAlign:"right",fontSize:"1.2em"},children:[Object(ct.jsx)("span",{style:{color:"var(--balance-text-color)"},children:Object(N.m)(this.state.transferValue)||"0.00"})," ",st.a.t("THB")]})]}),!!this.state.feeAMT&&Object(ct.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12},children:[Object(ct.jsx)("div",{children:st.a.t("Fee")}),Object(ct.jsxs)("div",{style:{textAlign:"right"},children:[Object(ct.jsx)("span",{style:{color:"var(--red-text-color)"},children:Object(N.m)(this.state.feeAMT&&this.state.feeAMT||"0.00")})," ",st.a.t("THB")]})]}),!!this.state.penaltyAMT&&Object(ct.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12},children:[Object(ct.jsx)("div",{children:st.a.t("PenaltyCoop")}),Object(ct.jsxs)("div",{style:{textAlign:"right"},children:[Object(ct.jsx)("span",{style:{color:"var(--red-text-color)"},children:Object(N.m)(this.state.penaltyAMT&&this.state.penaltyAMT||"0.00")})," ",st.a.t("THB")]})]}),Object(ct.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:24},children:Object(ct.jsxs)(G.a,{size:"small",variant:"standard",fullWidth:!0,children:[Object(ct.jsx)($.a,{children:st.a.t("Memo")}),Object(ct.jsx)(tt.a,{value:this.state.transferRemark,label:st.a.t("Memo"),onChange:function(e){t.setState({transferRemark:e.target.value})},inputProps:{autoComplete:"off"},name:"transferRemark-input",id:"transferRemark-input"},"transfer-value")]})}),Object(ct.jsx)("div",{style:{paddingTop:32},children:Object(ct.jsx)(z.a,{disableRipple:!!this.state.loadingConfirm,onClick:function(){!t.state.loadingConfirm&&(C.default.transactionOTP?t.props.onOTPTransfer(MEMBER_INFO.data&&MEMBER_INFO.data.PHONE.replace(/\s/g,""),MEMBER_INFO.data&&MEMBER_INFO.data.MEMBER_NO,Object(N.i)(T.a.pathname)):t.FundTransfer())},color:"primary",variant:"contained",size:"large",fullWidth:!0,endIcon:this.state.loadingConfirm&&Object(ct.jsx)(W.a,{style:{width:"1em",height:"1em",color:"white"}}),children:st.a.t("Confirm")})}),Object(ct.jsx)("div",{style:{marginTop:16},children:Object(ct.jsx)(z.a,{onClick:function(){t.setState({currentStep:0})},color:"default",variant:"text",fullWidth:!0,style:{whiteSpace:"nowrap"},children:st.a.t("Back")})}),Object(ct.jsx)(Y.a,{in:!!this.state.failedTransfer,children:Object(ct.jsx)(J.a,{in:!!this.state.failedTransfer,children:Object(ct.jsx)("div",{children:Object(ct.jsxs)(U.a,{severity:"error",style:{position:"relative",marginTop:24},onClick:function(){t.setState({failedTransfer:null})},children:[Object(ct.jsx)(k.a,{style:{cursor:"pointer",position:"absolute",top:10,right:10}}),Object(ct.jsx)(L.a,{style:{textAlign:"left"},children:this.state.failedTransfer})]})})})})]})})}):Object(ct.jsx)("div",{children:Object(ct.jsx)(O.a,{type:"flex",gutter:[{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48},{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48}],children:Object(ct.jsxs)(m.a,{className:"card-shadow isc-card",xs:24,sm:24,md:{span:12,offset:6},lg:{span:12,offset:6},xl:{span:12,offset:6},xxl:{span:8,offset:8},children:[Object(ct.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(ct.jsx)("div",{style:{textAlign:"center",fontSize:"1.5em",fontWeight:"bold"},children:st.a.t("SuccessfulTransaction")}),Object(ct.jsxs)("div",{className:"success-slip-icon",style:{marginLeft:10,fontSize:"x-large",color:"white",height:"1em",width:"1em",borderRadius:"1em",right:"0",top:"0",background:"var(--gd-success-color)",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",position:"relative"},children:[Object(ct.jsx)(y.a,{type:"check",style:{position:"relative",fontSize:"small"}}),Object(ct.jsx)("div",{className:"success-slip-overlay",style:{fontSize:"x-large",color:"white",height:"1.5em",width:"1.5em",borderRadius:"1.5em",right:"0",top:"0",background:"var(--gd-success-color)",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute"}})]})]}),Object(ct.jsxs)("div",{style:{paddingBottom:"10px"},children:[Object(ct.jsx)(O.a,{type:"flex",gutter:{xs:1,sm:1,md:1,lg:2,xl:2},style:{padding:"0px 20px"},children:Object(ct.jsx)(m.a,{span:24,style:{textAlign:"center"},children:this.state.transaction_date})}),Object(ct.jsx)(O.a,{type:"flex",gutter:{xs:1,sm:1,md:1,lg:2,xl:2},align:"middle",style:{padding:"10px 20px 0px 20px"},children:Object(ct.jsx)(m.a,{span:24,style:{display:"flex",flexDirection:"column",alignItems:"center"},children:"".concat(st.a.t("RefNo")," : ")+this.state.slip_no})})]}),Object(ct.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:20},children:[Object(ct.jsx)("div",{children:Object(ct.jsxs)("picture",{children:[Object(ct.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.webp"),type:"image/webp"}),Object(ct.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.png"),type:"image/png"}),Object(ct.jsx)("img",{alt:"coop-icon",src:"".concat(rt.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}})]})}),Object(ct.jsxs)("div",{style:{textAlign:"right"},children:[Object(ct.jsx)("div",{children:this.state.myAccount.DEPTACCOUNT_NAME||"-"}),Object(ct.jsx)("div",{style:{paddingTop:10},children:_.isEmpty(this.state.myAccount)?"xxx-xxx-xxxx":n?this.state.myAccount.DEPTACCOUNT_NO_FORMAT_HIDE:this.state.myAccount.DEPTACCOUNT_NO_FORMAT})]})]}),Object(ct.jsx)(g.a,{children:Object(ct.jsx)(R.a,{style:{color:"grey"}})}),Object(ct.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(ct.jsx)("div",{children:_.isEmpty(this.state.myAccount.BANK_LOGO)?Object(ct.jsxs)("picture",{children:[Object(ct.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.webp"),type:"image/webp"}),Object(ct.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.png"),type:"image/png"}),Object(ct.jsx)("img",{alt:"coop-icon",src:"".concat(rt.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}})]}):Object(ct.jsx)("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:this.state.myAccount.BANK_LOGO?this.state.myAccount.BANK_LOGO:null})}),Object(ct.jsxs)("div",{style:{textAlign:"right"},children:[Object(ct.jsx)("div",{children:this.state.toAccount&&this.state.toAccount.DEPTACCOUNT_NAME||st.a.t("ToAccount")}),Object(ct.jsx)("div",{style:{paddingTop:10},children:this.state.toAccount.DEPTACCOUNT_NO_FORMAT||"xxx-xxx-xxxx"})]})]}),Object(ct.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:24},children:[Object(ct.jsx)("div",{children:st.a.t("Amount")}),Object(ct.jsxs)("div",{style:{textAlign:"right",fontSize:"1.2em"},children:[Object(ct.jsx)("span",{style:{color:"var(--balance-text-color)"},children:Object(N.m)(this.state.transferValue)||"0.00"})," ",st.a.t("THB")]})]}),!!this.state.feeAMT&&Object(ct.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12},children:[Object(ct.jsx)("div",{children:st.a.t("Fee")}),Object(ct.jsxs)("div",{style:{textAlign:"right"},children:[Object(ct.jsx)("span",{style:{color:"var(--red-text-color)"},children:Object(N.m)(this.state.feeAMT&&this.state.feeAMT||"0.00")})," ",st.a.t("THB")]})]}),!!this.state.penaltyAMT&&Object(ct.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12},children:[Object(ct.jsx)("div",{children:st.a.t("PenaltyCoop")}),Object(ct.jsxs)("div",{style:{textAlign:"right"},children:[Object(ct.jsx)("span",{style:{color:"var(--red-text-color)"},children:Object(N.m)(this.state.penaltyAMT&&this.state.penaltyAMT||"0.00")})," ",st.a.t("THB")]})]}),this.state.transferRemark&&Object(ct.jsxs)("div",{style:{paddingTop:24},children:[Object(ct.jsx)("div",{style:{fontSize:"smaller"},children:st.a.t("Memo")}),Object(ct.jsx)("div",{children:this.state.transferRemark})]}),Object(ct.jsx)("div",{style:{paddingTop:32},children:Object(ct.jsx)(z.a,{onClick:function(){T.a.push("".concat(rt.prefixPath))},color:"primary",variant:"outlined",size:"large",fullWidth:!0,endIcon:this.state.loadingConfirm&&Object(ct.jsx)(W.a,{style:{width:"1em",height:"1em",color:"white"}}),children:st.a.t("ReturnMainPage")})})]})})})})]}),Object(ct.jsx)(B.a,{})]})})]})})}}]),n}(h.PureComponent);e.default=Object(M.b)((function(t){return{HIDE_ACCOUNT_NO:t.HIDE_ACCOUNT_NO,MEMBER_INFO:t.MEMBER_INFO,MENU_LIST:t.MENU_LIST,HISTORY_BADGE:t.HISTORY_BADGE}}),(function(t){return{}}))(Object(at.c)()(dt))},pIR8:function(t,e,n){"use strict";var s=n("q1tI"),a=n("5AJ6");e.a=Object(a.a)(s.createElement("path",{d:"M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13l-4-4h8z"}),"ArrowDropDownCircleOutlined")},sdZm:function(t,e,n){"use strict";var s=n("q1tI"),a=n("5AJ6");e.a=Object(a.a)(s.createElement("path",{d:"M12 8V4l8 8-8 8v-4H4V8z"}),"Forward")}},[["I1E3",2,1,4,5,7,8,11,0,3,6,9,10,12,13,14,15,17,18]]]);