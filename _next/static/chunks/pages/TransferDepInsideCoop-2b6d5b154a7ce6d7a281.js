_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[79],{I1E3:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/TransferDepInsideCoop",function(){return n("gBVf")}])},gBVf:function(t,e,n){"use strict";n.r(e);var s=n("nKUr"),a=n("vJKn"),c=n.n(a),i=n("rg98"),l=n("H+61"),o=n("UlJF"),r=n("+Css"),d=n("7LId"),x=n("VIvw"),j=n("iHvq"),h=n("cpVT"),p=n("q1tI"),u=n("g4pe"),f=n.n(u),O=n("ECub"),m=n("BMrR"),g=n("kPKH"),b=n("PArb"),y=n("wCAj"),A=n("CtXQ"),T=n("20a2"),v=n.n(T),N=n("WM+0"),C=n("xtEs"),E=n("fmKo"),S=n("VlGh"),w=n("mOvS"),D=n.n(w),M=n("Y0NT"),F=n("/MKj"),I=n("5VHT"),k=n.n(I),P=n("n0zQ"),R=n("sdZm"),B=n("pIR8"),U=n("Xd8E"),L=n("ZiQX"),V=n("DObr"),H=n("Xt1q"),K=n("+Isj"),z=n("PsDL"),G=n("Z3vd"),W=n("ADg1"),X=n("iae6"),Y=n("KmP9"),J=n("JQEk"),Q=n("kKU3"),q=n("olcQ"),Z=n("KPTR"),$=n("bkve"),tt=n("1AYd"),et=n("pdwK"),nt=n("hQDC"),st=n("MoW8"),at=n("fH4n"),ct=n("9kay");function it(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?it(Object(n),!0).forEach((function(e){Object(h.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):it(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ot(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=Object(j.a)(t);if(e){var a=Object(j.a)(this).constructor;n=Reflect.construct(s,arguments,a)}else n=s.apply(this,arguments);return Object(x.a)(this,n)}}var rt=D()().publicRuntimeConfig,dt=function(t){Object(d.a)(n,t);var e=ot(n);function n(t){var s,a;return Object(l.a)(this,n),a=e.call(this,t),Object(h.a)(Object(r.a)(a),"fetchAllowAccount",Object(i.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.setState({loading:!0}),e={menu_component:"TransferDepInsideCoop"},N.a.fetchAllowAccountTransfer(e).then((function(t){if(t.RESULT){var e=[];if(t.FORMAT_DEPT)t.FORMAT_DEPT.split("-").map((function(t){e.push(t.length)}));a.setState({accArr:t.ACCOUNT_ALLOW,favArr:t.ACCOUNT_FAV||[],dept_format:e},(function(){a.state.accArr[0]&&a.setState({myAccount:a.state.accArr[0],onSelectAccList:0,transferValue:null})}))}else a.setState(lt({},a.props.checkResultFalseMessage(t,{},at.a.t("SavingAccNotFound"))));a.setState({loading:!1,isInitialLoading:!1})})).catch((function(t){a.setState({loading:!1,isInitialLoading:!1}),a.setState(lt({},a.props.checkCatchMessage(t)))}));case 3:case"end":return t.stop()}}),t)})))),Object(h.a)(Object(r.a)(a),"getFeeFundTransfer",Object(i.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.setState({loadingNext:!0,failedVerify:null}),e={deptaccount_no:a.state.myAccount.DEPTACCOUNT_NO,amt_transfer:a.state.transferValue,menu_component:"TransferDepInsideCoop"},N.a.FeefundTransfer(e).then((function(t){t.RESULT?t.CAUTION?a.setState({alertData:{isOpen:!0,title:null,detail:t.CAUTION.RESPONSE_MESSAGE,type:"confirm",icon:null,loading:!1,onClose:function(){a.setState({alertData:{}})},onConfirm:function(){a.setState({penaltyAMT:t.PENALTY_AMT,feeAMT:t.FEE_AMT,failedTransfer:null,currentStep:1,alertData:{}})},confirmText:t.CAUTION.CONFIRM_TEXT,cancelText:t.CAUTION.CANCEL_TEXT,disabledConfirm:!t.CAUTION.CONFIRM_TEXT}}):a.setState({penaltyAMT:t.PENALTY_AMT,feeAMT:t.FEE_AMT,failedTransfer:null,currentStep:1}):a.setState({penaltyAMT:null,feeAMT:null,failedVerify:t.RESPONSE_MESSAGE?t.RESPONSE_MESSAGE:at.a.t("ErrorAndTryagain")}),a.setState({loadingNext:!1})})).catch((function(t){a.setState({loadingNext:!1}),a.setState({penaltyAMT:null,feeAMT:null,failedVerify:at.a.t("ErrorAndTryagain")})}));case 3:case"end":return t.stop()}}),t)})))),Object(h.a)(Object(r.a)(a),"FundTransfer",Object(i.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.setState({loadingConfirm:!0,failedTransfer:null}),e={from_deptaccount_no:a.state.myAccount.DEPTACCOUNT_NO,to_deptaccount_no:a.state.toAccount.DEPTACCOUNT_NO,amt_transfer:a.state.transferValue,penalty_amt:a.state.penaltyAMT,fee_amt:a.state.feeAMT,remark:a.state.transferRemark,menu_component:"TransferDepInsideCoop"},N.a.fundTransferInCoop(e).then((function(t){t.RESULT?a.setState({slip_no:t.TRANSACTION_NO,transaction_date:t.TRANSACTION_DATE,currentStep:2}):a.setState({failedTransfer:t.RESPONSE_MESSAGE?t.RESPONSE_MESSAGE:at.a.t("FailedAndTryagain")}),a.setState({loadingConfirm:!1})})).catch((function(t){a.setState({loadingConfirm:!1}),a.setState({failedTransfer:at.a.t("FailedAndTryagain")})}));case 3:case"end":return t.stop()}}),t)})))),Object(h.a)(Object(r.a)(a),"fetchDesAccount",Object(i.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.setState({loadingDes:!0,failedVerify:null}),e={source_deptaccount_no:a.state.myAccount.DEPTACCOUNT_NO,deptaccount_no:a.state.transferAccNo,menu_component:"TransferDepInsideCoop"},N.a.fetchAccountDestination(e).then((function(t){t.RESULT?a.setState({onSelectedTo:!0,toAccount:t.ACCOUNT_DATA,onSelectAccList:3}):a.setState({failedVerify:t.RESPONSE_MESSAGE?t.RESPONSE_MESSAGE:at.a.t("ErrorAndTryagain")}),a.setState({loadingDes:!1})})).catch((function(t){a.setState({loadingDes:!1}),a.setState({failedVerify:at.a.t("ErrorAndTryagain")})}));case 3:case"end":return t.stop()}}),t)})))),Object(h.a)(Object(r.a)(a),"onPressSelectedCustomAccount",(function(t){var e=t.item,n=(t.index,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"sender");"sender"==n?a.setState({myAccount:e,transferValue:"",openSelectAcc:!1}):a.setState({toAccount:e,openSelectAcc:!1})})),a.state=(s={statusCode:200,errData:null,loading:!0,notifyOn:0,pathName:"",transferValue:null,accArr:[],favArr:[],myAccount:{},toAccount:{},onSelectAccList:1,isShowSlip:!1,transferAccNo:null,onSelectedTo:!1,dept_format:[],isConfirmTrans:!1,feeAMT:null,penaltyAMT:null,loadingTransfer:!1,loadingFund:!1,slip_no:"",transaction_date:"",isInitialLoading:!0},Object(h.a)(s,"transaction_date",""),Object(h.a)(s,"currentStep",0),Object(h.a)(s,"openSelectAcc",!1),Object(h.a)(s,"select_acc_on","sender"),Object(h.a)(s,"transferRemark",null),Object(h.a)(s,"alertData",{}),s),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({pathName:Object(C.i)(v.a.pathname)}),this.fetchAllowAccount()}},{key:"componentDidUpdate",value:function(t,e){0==t.isSuccessOTP&&1==this.props.isSuccessOTP&&this.FundTransfer()}},{key:"renderModalSelectAccount",value:function(){var t,e,n=this,a=this.props.HIDE_ACCOUNT_NO.data,c=this.state.select_acc_on,i="sender"==c?null!==(t=this.state.accArr)&&void 0!==t?t:[]:(null!==(e=this.state.accArr)&&void 0!==e?e:[]).filter((function(t){return _.isEmpty(n.state.myAccount)?t:t.DEPTACCOUNT_NO!=n.state.myAccount.DEPTACCOUNT_NO}));return Object(s.jsx)(H.a,{open:this.state.openSelectAcc,onClose:function(){n.setState({openSelectAcc:!1})},closeAfterTransition:!0,BackdropComponent:K.a,BackdropProps:{timeout:500},style:{},children:Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",overflow:"auto",width:"100%",height:"100vh",padding:"20px 0"},children:[Object(s.jsx)("div",{style:{position:"absolute",top:20,right:40,zIndex:3},children:Object(s.jsx)(z.a,{onClick:function(){n.setState({openSelectAcc:!1})},style:{backgroundColor:"rgba(255,255,255,0.5)"},children:Object(s.jsx)(P.a,{})})}),Object(s.jsx)("div",{onClick:function(){n.setState({openSelectAcc:!1})},style:{position:"fixed",top:0,right:0,width:"100%",height:"100%"}}),Object(s.jsxs)("div",{className:"sub-content",style:{backgroundColor:"white",margin:"auto",minHeight:"unset",width:"unset",zIndex:2},children:[Object(s.jsx)("div",{style:{paddingBottom:20,position:"sticky",top:60},children:Object(s.jsx)("div",{style:{fontSize:"1.2em",textDecoration:"underline",backgroundColor:"white"},children:at.a.t("SelectAcc")})}),i.length>0?i.map((function(t,e){return"sender"==c?Object(s.jsx)("div",{style:{marginBottom:20},children:Object(s.jsx)(G.a,{onClick:function(){n.onPressSelectedCustomAccount({item:t,index:e},c)},color:n.state.myAccount.DEPTACCOUNT_NO==t.DEPTACCOUNT_NO?"primary":"default",variant:"outlined",style:{textTransform:"none"},children:Object(s.jsxs)("div",{style:{padding:"20px 0"},children:[Object(s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:t.DEPT_TYPE||"-"}),Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(s.jsxs)("div",{style:{padding:"0 20px",textAlign:"left"},children:[Object(s.jsx)("div",{style:{paddingTop:10},children:(a?t.DEPTACCOUNT_NO_FORMAT_HIDE:t.DEPTACCOUNT_NO_FORMAT)||"xxx-xxx-xxxx"}),Object(s.jsx)("div",{children:t.DEPTACCOUNT_NAME||""})]}),Object(s.jsxs)("div",{style:{textAlign:"right",padding:"0 20px"},children:[Object(s.jsx)("div",{style:{paddingTop:10},children:at.a.t("WithdrawableAmtTHB")}),Object(s.jsx)("div",{className:"highlight-text",style:{fontSize:"1.2em"},children:t.BALANCE_FORMAT||"-"})]})]})]})})},e):Object(s.jsx)("div",{style:{marginBottom:20},children:Object(s.jsx)(G.a,{onClick:function(){n.onPressSelectedCustomAccount({item:t,index:e},c)},disabled:n.state.myAccount.DEPTACCOUNT_NO==t.DEPTACCOUNT_NO,color:n.state.toAccount.DEPTACCOUNT_NO==t.DEPTACCOUNT_NO?"primary":"default",variant:"outlined",style:{textTransform:"none"},children:Object(s.jsx)("div",{children:Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 0"},children:[Object(s.jsx)("div",{style:{padding:"0 20px"},children:_.isEmpty(t.BANK_LOGO)?Object(s.jsxs)("picture",{children:[Object(s.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.webp"),type:"image/webp"}),Object(s.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.png"),type:"image/png"}),Object(s.jsx)("img",{alt:"coop-icon",src:"".concat(rt.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}})]}):Object(s.jsx)("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:t.BANK_LOGO?t.BANK_LOGO:null})}),Object(s.jsxs)("div",{style:{textAlign:"right",padding:"0 20px"},children:[Object(s.jsx)("div",{children:t.DEPTACCOUNT_NO_FORMAT||"xxx-xxx-xxxx"}),Object(s.jsx)("div",{children:t.DEPTACCOUNT_NAME||""})]})]})})})},e)})):Object(s.jsx)(O.a,{className:"empty-div",description:at.a.t("DataNotFound"),style:{fontSize:"small"},image:Object(s.jsxs)("picture",{children:[Object(s.jsx)("source",{srcSet:"".concat(rt.imageFolder,"/notfound.webp"),type:"image/webp"}),Object(s.jsx)("source",{srcSet:"".concat(rt.imageFolder,"/notfound.png"),type:"image/png"}),Object(s.jsx)("img",{alt:"notfound-icon",src:"".concat(rt.imageFolder,"/notfound.png"),type:"image/png",style:{userSelect:"none",opacity:.6}})]})})]})]})})}},{key:"onVerify",value:function(){E.default.isAllowSelectedSource;if(this.setState({loadingNext:!0}),_.isEmpty(this.state.myAccount))this.setState({failedVerify:at.a.t("pleaseSelectAccountForTransactions"),loadingNext:!1});else if(_.isEmpty(this.state.toAccount))this.setState({failedVerify:at.a.t("pleaseSelectDestinationAccount"),loadingNext:!1});else{(parseFloat(this.state.transferValue)||0)>(_.has(this.state.myAccount,"BALANCE")&&parseFloat(this.state.myAccount.BALANCE)||0)?this.setState({failedVerify:at.a.t("notEnoughMoneyForTransaction"),loadingNext:!1}):this.getFeeFundTransfer()}}},{key:"renderAccount",value:function(){var t,e,n=this,a=this.props.HIDE_ACCOUNT_NO.data;return Object(s.jsx)("div",{children:Object(s.jsx)(m.a,{type:"flex",children:Object(s.jsxs)(g.a,{xs:24,sm:24,md:24,lg:24,xl:{span:16,offset:4},xxl:{span:16,offset:4},style:{textAlign:"center"},children:[Object(s.jsx)("div",{className:"isc-card card-shadow",style:{background:"linear-gradient(0deg, #5c68b7 0%, #4e9ae3 100%)"},children:Object(s.jsxs)(m.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}],children:[Object(s.jsxs)(g.a,{xs:24,sm:24,md:12,lg:12,xl:12,xxl:12,style:{textAlign:"center"},children:[Object(s.jsx)(G.a,{onClick:function(){n.setState({select_acc_on:"sender",openSelectAcc:!0})},variant:"outlined",color:_.isEmpty(this.state.myAccount)?"default":"primary",style:{textTransform:"none",backgroundColor:"white",padding:"20px",height:"100%",minWidth:"50%"},children:Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:this.state.myAccount.DEPT_TYPE||at.a.t("CoopAccount")}),Object(s.jsx)("div",{style:{paddingTop:10},children:_.isEmpty(this.state.myAccount)?"xxx-xxx-xxxx":a?this.state.myAccount.DEPTACCOUNT_NO_FORMAT_HIDE:this.state.myAccount.DEPTACCOUNT_NO_FORMAT}),Object(s.jsx)("div",{children:this.state.myAccount.BALANCE_FORMAT||"x.xx"})]})}),Object(s.jsx)("div",{className:"transfer-right-arrow",children:Object(s.jsx)("div",{style:{textAlign:"center"},children:Object(s.jsx)(z.a,{color:"primary",style:{color:"white"},disableRipple:!0,children:Object(s.jsx)(R.a,{})})})})]}),Object(s.jsx)(g.a,{className:"transfer-down-arrow",xs:24,sm:24,md:12,lg:12,xl:{span:8,offset:4},xxl:{span:8,offset:4},style:{textAlign:"center"},children:Object(s.jsx)(b.a,{children:Object(s.jsx)(B.a,{style:{color:"#FFF"}})})}),Object(s.jsx)(g.a,{xs:24,sm:24,md:12,lg:12,xl:12,xxl:12,style:{textAlign:"center"},children:Object(s.jsx)(G.a,{onClick:function(){document.getElementById("input-accountno")&&document.getElementById("input-accountno").focus()},variant:"outlined",color:_.isEmpty(this.state.toAccount)?"default":"primary",style:{textTransform:"none",backgroundColor:"white",padding:"20px",height:"100%",minWidth:"50%"},children:Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:_.isEmpty(this.state.toAccount.BANK_LOGO)?Object(s.jsxs)("picture",{children:[Object(s.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.webp"),type:"image/webp"}),Object(s.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.png"),type:"image/png"}),Object(s.jsx)("img",{alt:"coop-icon",src:"".concat(rt.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}})]}):Object(s.jsx)("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:this.state.toAccount.BANK_LOGO?this.state.toAccount.BANK_LOGO:null})}),Object(s.jsxs)("div",{style:{paddingTop:10},children:[Object(s.jsx)("div",{children:null===(t=this.state.toAccount)||void 0===t?void 0:t.ACCOUNT_NAME}),Object(s.jsx)("div",{children:(null===(e=this.state.toAccount)||void 0===e?void 0:e.DEPTACCOUNT_NO_FORMAT)||this.state.transferAccNoFormat||"xxx-xxx-xxxx"})]})]})})})]})}),Object(s.jsxs)(m.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}],children:[Object(s.jsx)(g.a,{xs:0,sm:0,md:24,lg:24,xl:24,xxl:24,style:{textAlign:"center",paddingTop:40,paddingLeft:8},children:Object(s.jsx)(y.a,{className:"description-table",useFixedHeader:!1,bordered:!1,size:"small",pagination:!1,showHeader:!1,dataSource:[{key:"accNo",label:"".concat(at.a.t("ToAccountNo")," : "),value:Object(s.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start"},children:[Object(s.jsx)("div",{style:{marginBottom:10},children:Object(s.jsx)(W.a,{size:"small",variant:"outlined",children:this.state.dept_format.length>0?Object(s.jsx)(k.a,{id:"input-accountno",disabled:!(this.state.myAccount&&!this.state.loadingDes),name:"transferAccNo",className:"cleave-input-number ant-input-number",placeholder:_.isEmpty(this.state.myAccount)?at.a.t("pleaseSelectAccountForTransactions"):at.a.t("EnterDesAccountNo"),options:{numericOnly:!0,blocks:this.state.dept_format,delimiter:"-"},value:this.state.transferAccNo||"",onChange:function(t){return n.setState({transferAccNo:t.target.rawValue,transferAccNoFormat:t.target.value})},onKeyDown:function(t){"Enter"==t.key&&n.state.transferAccNo&&n.fetchDesAccount()}}):Object(s.jsx)(k.a,{id:"input-accountno",disabled:!(this.state.myAccount&&!this.state.loadingDes),name:"transferAccNo",className:"cleave-input-number ant-input-number",placeholder:_.isEmpty(this.state.myAccount)?at.a.t("pleaseSelectAccountForTransactions"):at.a.t("EnterDesAccountNo"),options:{numericOnly:!0,blocks:[3,2,5],delimiter:"-"},value:this.state.transferAccNo||"",onChange:function(t){return n.setState({transferAccNo:t.target.rawValue,transferAccNoFormat:t.target.value})},onKeyDown:function(t){"Enter"==t.key&&n.state.transferAccNo&&n.fetchDesAccount()}})})}),Object(s.jsx)("div",{style:{marginBottom:10,marginLeft:40},children:Object(s.jsx)(G.a,{disabled:!this.state.transferAccNo||_.isEmpty(this.state.myAccount)||!!this.state.loadingDes,disableRipple:!!this.state.loadingDes,onClick:function(){!n.state.loadingDes&&n.fetchDesAccount()},color:"primary",variant:"contained",endIcon:this.state.loadingDes?Object(s.jsx)(X.a,{style:{width:"1em",height:"1em",color:"white"}}):Object(s.jsx)(R.a,{}),style:{whiteSpace:"nowrap"},children:at.a.t("CheckTransfer")})})]})},!_.isEmpty(this.state.toAccount)&&{key:"Value",label:"".concat(at.a.t("TransactionAmtTHB")," : "),value:Object(s.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end"},children:[Object(s.jsx)("div",{style:{marginBottom:10},children:Object(s.jsx)(W.a,{size:"small",variant:"outlined",children:Object(s.jsx)(Y.a,{id:"transfer-value-outlined",disabled:_.isEmpty(this.state.myAccount),value:this.state.transferValue,onChange:function(t){t.target.value&&parseFloat(t.target.value)>parseFloat(n.state.myAccount.BALANCE)?n.setState({transferValue:n.state.myAccount.BALANCE}):n.setState({transferValue:t.target.value})},placeholder:_.isEmpty(this.state.myAccount)?at.a.t("pleaseSelectAccountForTransactions"):"0.00",inputProps:{autoComplete:"off"},name:"formatted-numberformat-input",variant:"outlined",onKeyDown:function(t){"Enter"==t.key&&n.state.transferValue&&n.onVerify()},inputComponent:C.a},"transfer-value")})}),Object(s.jsx)("div",{style:{marginBottom:10,marginLeft:40},children:Object(s.jsx)(G.a,{disabled:!this.state.transferValue||!this.state.transferAccNo,disableRipple:!!this.state.loadingNext,onClick:function(){!n.state.loadingNext&&n.onVerify()},color:"primary",variant:"contained",endIcon:this.state.loadingNext?Object(s.jsx)(X.a,{style:{width:"1em",height:"1em",color:"white"}}):Object(s.jsx)(R.a,{}),style:{whiteSpace:"nowrap"},children:at.a.t("Next")})})]})}],columns:[{title:"label",dataIndex:"label",key:"label",className:"description-label"},{title:"value",dataIndex:"value",key:"value"}]})}),Object(s.jsx)(g.a,{xs:24,sm:24,md:0,lg:0,xl:0,xxl:0,style:{paddingTop:40},children:Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:"".concat(at.a.t("ToAccountNo")," : ")}),Object(s.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end"},children:[Object(s.jsx)("div",{style:{marginBottom:10,width:"100%"},children:Object(s.jsx)(W.a,{size:"small",variant:"outlined",fullWidth:!0,children:this.state.dept_format.length>0?Object(s.jsx)(k.a,{id:"input-accountno",disabled:!(this.state.myAccount&&!this.state.loadingDes),name:"transferAccNo",className:"cleave-input-number ant-input-number",placeholder:_.isEmpty(this.state.myAccount)?at.a.t("pleaseSelectAccountForTransactions"):at.a.t("EnterDesAccountNo"),options:{numericOnly:!0,blocks:this.state.dept_format,delimiter:"-"},value:this.state.transferAccNo||"",onChange:function(t){return n.setState({transferAccNo:t.target.rawValue,transferAccNoFormat:t.target.value})},onKeyDown:function(t){"Enter"==t.key&&n.state.transferAccNo&&n.fetchDesAccount()}}):Object(s.jsx)(k.a,{id:"input-accountno",disabled:!(this.state.myAccount&&!this.state.loadingDes),name:"transferAccNo",className:"cleave-input-number ant-input-number",placeholder:_.isEmpty(this.state.myAccount)?at.a.t("pleaseSelectAccountForTransactions"):at.a.t("EnterDesAccountNo"),options:{numericOnly:!0,blocks:[3,2,5],delimiter:"-"},value:this.state.transferAccNo||"",onChange:function(t){return n.setState({transferAccNo:t.target.rawValue,transferAccNoFormat:t.target.value})},onKeyDown:function(t){"Enter"==t.key&&n.state.transferAccNo&&n.fetchDesAccount()}})})}),Object(s.jsx)("div",{style:{marginBottom:10,marginLeft:40},children:Object(s.jsx)(G.a,{disabled:!this.state.transferAccNo||_.isEmpty(this.state.myAccount)||!!this.state.loadingDes,disableRipple:!!this.state.loadingDes,onClick:function(){!n.state.loadingDes&&n.fetchDesAccount()},color:"primary",variant:"contained",endIcon:this.state.loadingDes?Object(s.jsx)(X.a,{style:{width:"1em",height:"1em",color:"white"}}):Object(s.jsx)(R.a,{}),style:{whiteSpace:"nowrap"},children:at.a.t("CheckTransfer")})})]}),!_.isEmpty(this.state.toAccount)&&Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:"".concat(at.a.t("TransactionAmtTHB")," : ")}),Object(s.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end"},children:[Object(s.jsx)("div",{style:{marginBottom:10,width:"100%"},children:Object(s.jsx)(W.a,{size:"small",variant:"outlined",fullWidth:!0,children:Object(s.jsx)(Y.a,{id:"transfer-value-outlined",disabled:_.isEmpty(this.state.myAccount),value:this.state.transferValue,onChange:function(t){t.target.value&&parseFloat(t.target.value)>parseFloat(n.state.myAccount.BALANCE)?n.setState({transferValue:n.state.myAccount.BALANCE}):n.setState({transferValue:t.target.value})},placeholder:_.isEmpty(this.state.myAccount)?at.a.t("pleaseSelectAccountForTransactions"):"0.00",inputProps:{autoComplete:"off"},name:"formatted-numberformat-input",variant:"outlined",onKeyDown:function(t){"Enter"==t.key&&n.state.transferValue&&n.onVerify()},inputComponent:C.a},"transfer-value")})}),Object(s.jsx)("div",{style:{marginBottom:10,marginLeft:40},children:Object(s.jsx)(G.a,{disabled:!this.state.transferValue||!this.state.transferAccNo,disableRipple:!!this.state.loadingNext,onClick:function(){!n.state.loadingNext&&n.onVerify()},color:"primary",variant:"contained",endIcon:this.state.loadingNext?Object(s.jsx)(X.a,{style:{width:"1em",height:"1em",color:"white"}}):Object(s.jsx)(R.a,{}),style:{whiteSpace:"nowrap"},children:at.a.t("Next")})})]})]})]})})]}),Object(s.jsx)(J.a,{in:!!this.state.failedVerify,children:Object(s.jsx)(Q.a,{in:!!this.state.failedVerify,children:Object(s.jsx)(m.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}],children:Object(s.jsx)(g.a,{xs:24,sm:24,md:24,lg:24,xl:{span:16,offset:4},xxl:{span:16,offset:4},style:{textAlign:"center",paddingTop:24},children:Object(s.jsx)("div",{children:Object(s.jsxs)(L.a,{severity:"error",style:{position:"relative"},onClick:function(){n.setState({failedVerify:null})},children:[Object(s.jsx)(P.a,{style:{cursor:"pointer",position:"absolute",top:10,right:10}}),Object(s.jsx)(V.a,{style:{textAlign:"left"},children:this.state.failedVerify})]})})})})})})]})})})}},{key:"render",value:function(){var t=this,e=this.props,n=(e.MENU_LIST,e.HIDE_ACCOUNT_NO.data);return this.state.statusCode>=300&&this.state.statusCode<500?Object(s.jsx)(M.default,{statusCode:this.state.statusCode,err:this.state.errData,showModalLogout:function(){return t.props.showModalLogout()}}):Object(s.jsx)("div",{className:"main-layout",style:{position:"relative"},children:Object(s.jsxs)("div",{style:{width:"100%"},children:[Object(s.jsx)(S.a,{checked:!this.state.loading||!this.state.isInitialLoading}),Object(s.jsx)(f.a,{children:Object(s.jsx)("link",{rel:"stylesheet",href:"".concat(rt.cssFolder,"/transfer.css")})}),Object(s.jsx)(nt.a,{isOpen:!!this.state.alertData.isOpen,title:this.state.alertData.title,description:this.state.alertData.detail,type:this.state.alertData.type,svgIcon:this.state.alertData.icon,loading:!!this.state.alertData.loading,onClose:this.state.alertData.onClose,onConfirm:this.state.alertData.onConfirm,confirmText:this.state.alertData.confirmText,cancelText:this.state.alertData.cancelText,disabledConfirm:!!this.state.alertData.disabledConfirm}),this.renderModalSelectAccount(),Object(s.jsx)("div",{className:"main-content",style:{width:"100%"},children:Object(s.jsxs)("div",{className:"sub-content",style:{display:"flex",flexDirection:"column",padding:0},children:[Object(s.jsxs)("div",{className:"sub-content",style:{flex:1,width:"100%"},children:[Object(s.jsx)(m.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}],children:Object(s.jsx)(g.a,{xs:24,sm:24,md:24,lg:24,xl:{span:16,offset:4},xxl:{span:16,offset:4},children:Object(s.jsx)(st.a,{th:"\u0e42\u0e2d\u0e19\u0e20\u0e32\u0e22\u0e43\u0e19\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e2a\u0e2b\u0e01\u0e23\u0e13\u0e4c",en:"Transfer in Coop"})})}),Object(s.jsx)(m.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}],children:Object(s.jsx)(g.a,{xs:24,sm:24,md:24,lg:24,xl:{span:16,offset:4},xxl:{span:16,offset:4},style:{textAlign:"center"},children:Object(s.jsxs)(q.a,{style:{backgroundColor:"transparent"},color:"second",activeStep:this.state.currentStep,alternativeLabel:!0,children:[Object(s.jsx)(Z.a,{children:Object(s.jsx)($.a,{disabled:1!=this.state.currentStep,onClick:function(){return t.setState({currentStep:0})},children:at.a.t("FillInfo")})}),Object(s.jsx)(Z.a,{children:Object(s.jsx)($.a,{disabled:!0,children:at.a.t("CheckInfo")})}),Object(s.jsx)(Z.a,{children:Object(s.jsx)($.a,{disabled:!0,children:at.a.t("SuccessfulTransaction")})})]})})}),Object(s.jsx)("div",{style:{padding:"40px 0"},children:0==this.state.currentStep?this.renderAccount():1==this.state.currentStep?Object(s.jsx)("div",{children:Object(s.jsx)(m.a,{type:"flex",gutter:[{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48},{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48}],children:Object(s.jsxs)(g.a,{className:"card-shadow isc-card",xs:24,sm:24,md:{span:12,offset:6},lg:{span:12,offset:6},xl:{span:12,offset:6},xxl:{span:8,offset:8},children:[Object(s.jsx)("div",{style:{textAlign:"center",fontSize:"1.5em",fontWeight:"bold"},children:at.a.t("CheckInfo")}),Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:20},children:[Object(s.jsx)("div",{children:Object(s.jsxs)("picture",{children:[Object(s.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.webp"),type:"image/webp"}),Object(s.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.png"),type:"image/png"}),Object(s.jsx)("img",{alt:"coop-icon",src:"".concat(rt.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}})]})}),Object(s.jsxs)("div",{style:{textAlign:"right"},children:[Object(s.jsx)("div",{children:this.state.myAccount.DEPTACCOUNT_NAME||"-"}),Object(s.jsx)("div",{style:{paddingTop:10},children:_.isEmpty(this.state.myAccount)?"xxx-xxx-xxxx":n?this.state.myAccount.DEPTACCOUNT_NO_FORMAT_HIDE:this.state.myAccount.DEPTACCOUNT_NO_FORMAT})]})]}),Object(s.jsx)(b.a,{children:Object(s.jsx)(B.a,{style:{color:"grey"}})}),Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(s.jsx)("div",{children:_.isEmpty(this.state.toAccount.BANK_LOGO)?Object(s.jsxs)("picture",{children:[Object(s.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.webp"),type:"image/webp"}),Object(s.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.png"),type:"image/png"}),Object(s.jsx)("img",{alt:"coop-icon",src:"".concat(rt.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}})]}):Object(s.jsx)("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:this.state.toAccount.BANK_LOGO?this.state.toAccount.BANK_LOGO:null})}),Object(s.jsxs)("div",{style:{textAlign:"right"},children:[Object(s.jsx)("div",{children:this.state.toAccount&&this.state.toAccount.DEPTACCOUNT_NAME||at.a.t("ToAccount")}),Object(s.jsx)("div",{style:{paddingTop:10},children:this.state.toAccount.DEPTACCOUNT_NO_FORMAT||"xxx-xxx-xxxx"})]})]}),Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:24},children:[Object(s.jsx)("div",{children:at.a.t("Amount")}),Object(s.jsxs)("div",{style:{textAlign:"right",fontSize:"1.2em"},children:[Object(s.jsx)("span",{style:{color:"var(--balance-text-color)"},children:Object(C.m)(this.state.transferValue)||"0.00"})," ",at.a.t("THB")]})]}),!!this.state.feeAMT&&Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12},children:[Object(s.jsx)("div",{children:at.a.t("Fee")}),Object(s.jsxs)("div",{style:{textAlign:"right"},children:[Object(s.jsx)("span",{style:{color:"var(--red-text-color)"},children:Object(C.m)(this.state.feeAMT&&this.state.feeAMT||"0.00")})," ",at.a.t("THB")]})]}),!!this.state.penaltyAMT&&Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12},children:[Object(s.jsx)("div",{children:at.a.t("PenaltyCoop")}),Object(s.jsxs)("div",{style:{textAlign:"right"},children:[Object(s.jsx)("span",{style:{color:"var(--red-text-color)"},children:Object(C.m)(this.state.penaltyAMT&&this.state.penaltyAMT||"0.00")})," ",at.a.t("THB")]})]}),Object(s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:24},children:Object(s.jsxs)(W.a,{size:"small",variant:"standard",fullWidth:!0,children:[Object(s.jsx)(tt.a,{children:at.a.t("Memo")}),Object(s.jsx)(et.a,{value:this.state.transferRemark,label:at.a.t("Memo"),onChange:function(e){t.setState({transferRemark:e.target.value})},inputProps:{autoComplete:"off"},name:"transferRemark-input",id:"transferRemark-input"},"transfer-value")]})}),Object(s.jsx)("div",{style:{paddingTop:32},children:Object(s.jsx)(G.a,{disableRipple:!!this.state.loadingConfirm,onClick:function(){!t.state.loadingConfirm&&(E.default.transactionOTP?t.props.onOTPTransfer(MEMBER_INFO.data&&MEMBER_INFO.data.PHONE.replace(/\s/g,""),MEMBER_INFO.data&&MEMBER_INFO.data.MEMBER_NO,Object(C.i)(v.a.pathname)):t.FundTransfer())},color:"primary",variant:"contained",size:"large",fullWidth:!0,endIcon:this.state.loadingConfirm&&Object(s.jsx)(X.a,{style:{width:"1em",height:"1em",color:"white"}}),children:at.a.t("Confirm")})}),Object(s.jsx)("div",{style:{marginTop:16},children:Object(s.jsx)(G.a,{onClick:function(){t.setState({currentStep:0})},color:"default",variant:"text",fullWidth:!0,style:{whiteSpace:"nowrap"},children:at.a.t("Back")})}),Object(s.jsx)(J.a,{in:!!this.state.failedTransfer,children:Object(s.jsx)(Q.a,{in:!!this.state.failedTransfer,children:Object(s.jsx)("div",{children:Object(s.jsxs)(L.a,{severity:"error",style:{position:"relative",marginTop:24},onClick:function(){t.setState({failedTransfer:null})},children:[Object(s.jsx)(P.a,{style:{cursor:"pointer",position:"absolute",top:10,right:10}}),Object(s.jsx)(V.a,{style:{textAlign:"left"},children:this.state.failedTransfer})]})})})})]})})}):Object(s.jsx)("div",{children:Object(s.jsx)(m.a,{type:"flex",gutter:[{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48},{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48}],children:Object(s.jsxs)(g.a,{className:"card-shadow isc-card",xs:24,sm:24,md:{span:12,offset:6},lg:{span:12,offset:6},xl:{span:12,offset:6},xxl:{span:8,offset:8},children:[Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(s.jsx)("div",{style:{textAlign:"center",fontSize:"1.5em",fontWeight:"bold"},children:at.a.t("SuccessfulTransaction")}),Object(s.jsxs)("div",{className:"success-slip-icon",style:{marginLeft:10,fontSize:"x-large",color:"white",height:"1em",width:"1em",borderRadius:"1em",right:"0",top:"0",background:"var(--gd-success-color)",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",position:"relative"},children:[Object(s.jsx)(A.a,{type:"check",style:{position:"relative",fontSize:"small"}}),Object(s.jsx)("div",{className:"success-slip-overlay",style:{fontSize:"x-large",color:"white",height:"1.5em",width:"1.5em",borderRadius:"1.5em",right:"0",top:"0",background:"var(--gd-success-color)",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute"}})]})]}),Object(s.jsxs)("div",{style:{paddingBottom:"10px"},children:[Object(s.jsx)(m.a,{type:"flex",gutter:{xs:1,sm:1,md:1,lg:2,xl:2},style:{padding:"0px 20px"},children:Object(s.jsx)(g.a,{span:24,style:{textAlign:"center"},children:this.state.transaction_date})}),Object(s.jsx)(m.a,{type:"flex",gutter:{xs:1,sm:1,md:1,lg:2,xl:2},align:"middle",style:{padding:"10px 20px 0px 20px"},children:Object(s.jsx)(g.a,{span:24,style:{display:"flex",flexDirection:"column",alignItems:"center"},children:"".concat(at.a.t("RefNo")," : ")+this.state.slip_no})})]}),Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:20},children:[Object(s.jsx)("div",{children:Object(s.jsxs)("picture",{children:[Object(s.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.webp"),type:"image/webp"}),Object(s.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.png"),type:"image/png"}),Object(s.jsx)("img",{alt:"coop-icon",src:"".concat(rt.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}})]})}),Object(s.jsxs)("div",{style:{textAlign:"right"},children:[Object(s.jsx)("div",{children:this.state.myAccount.DEPTACCOUNT_NAME||"-"}),Object(s.jsx)("div",{style:{paddingTop:10},children:_.isEmpty(this.state.myAccount)?"xxx-xxx-xxxx":n?this.state.myAccount.DEPTACCOUNT_NO_FORMAT_HIDE:this.state.myAccount.DEPTACCOUNT_NO_FORMAT})]})]}),Object(s.jsx)(b.a,{children:Object(s.jsx)(B.a,{style:{color:"grey"}})}),Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(s.jsx)("div",{children:_.isEmpty(this.state.myAccount.BANK_LOGO)?Object(s.jsxs)("picture",{children:[Object(s.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.webp"),type:"image/webp"}),Object(s.jsx)("source",{srcSet:"".concat(rt.logoFolder,"/logo.png"),type:"image/png"}),Object(s.jsx)("img",{alt:"coop-icon",src:"".concat(rt.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}})]}):Object(s.jsx)("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:this.state.myAccount.BANK_LOGO?this.state.myAccount.BANK_LOGO:null})}),Object(s.jsxs)("div",{style:{textAlign:"right"},children:[Object(s.jsx)("div",{children:this.state.toAccount&&this.state.toAccount.DEPTACCOUNT_NAME||at.a.t("ToAccount")}),Object(s.jsx)("div",{style:{paddingTop:10},children:this.state.toAccount.DEPTACCOUNT_NO_FORMAT||"xxx-xxx-xxxx"})]})]}),Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:24},children:[Object(s.jsx)("div",{children:at.a.t("Amount")}),Object(s.jsxs)("div",{style:{textAlign:"right",fontSize:"1.2em"},children:[Object(s.jsx)("span",{style:{color:"var(--balance-text-color)"},children:Object(C.m)(this.state.transferValue)||"0.00"})," ",at.a.t("THB")]})]}),!!this.state.feeAMT&&Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12},children:[Object(s.jsx)("div",{children:at.a.t("Fee")}),Object(s.jsxs)("div",{style:{textAlign:"right"},children:[Object(s.jsx)("span",{style:{color:"var(--red-text-color)"},children:Object(C.m)(this.state.feeAMT&&this.state.feeAMT||"0.00")})," ",at.a.t("THB")]})]}),!!this.state.penaltyAMT&&Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12},children:[Object(s.jsx)("div",{children:at.a.t("PenaltyCoop")}),Object(s.jsxs)("div",{style:{textAlign:"right"},children:[Object(s.jsx)("span",{style:{color:"var(--red-text-color)"},children:Object(C.m)(this.state.penaltyAMT&&this.state.penaltyAMT||"0.00")})," ",at.a.t("THB")]})]}),this.state.transferRemark&&Object(s.jsxs)("div",{style:{paddingTop:24},children:[Object(s.jsx)("div",{style:{fontSize:"smaller"},children:at.a.t("Memo")}),Object(s.jsx)("div",{children:this.state.transferRemark})]}),Object(s.jsx)("div",{style:{paddingTop:32},children:Object(s.jsx)(G.a,{onClick:function(){v.a.push("".concat(rt.prefixPath))},color:"primary",variant:"outlined",size:"large",fullWidth:!0,endIcon:this.state.loadingConfirm&&Object(s.jsx)(X.a,{style:{width:"1em",height:"1em",color:"white"}}),children:at.a.t("ReturnMainPage")})})]})})})})]}),Object(s.jsx)(U.a,{})]})})]})})}}]),n}(p.PureComponent);e.default=Object(F.b)((function(t){return{HIDE_ACCOUNT_NO:t.HIDE_ACCOUNT_NO,MEMBER_INFO:t.MEMBER_INFO,MENU_LIST:t.MENU_LIST,HISTORY_BADGE:t.HISTORY_BADGE}}),(function(t){return{}}))(Object(ct.c)()(dt))},pIR8:function(t,e,n){"use strict";var s=n("q1tI"),a=n("5AJ6");e.a=Object(a.a)(s.createElement("path",{d:"M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13l-4-4h8z"}),"ArrowDropDownCircleOutlined")},sdZm:function(t,e,n){"use strict";var s=n("q1tI"),a=n("5AJ6");e.a=Object(a.a)(s.createElement("path",{d:"M12 8V4l8 8-8 8v-4H4V8z"}),"Forward")}},[["I1E3",0,2,4,5,8,7,11,1,3,6,9,10,12,13,14,15,17,18]]]);