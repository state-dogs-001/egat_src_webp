_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[77],{"+Hdy":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/TransactionWithdrawDeposit",function(){return n("yWDd")}])},pIR8:function(t,e,n){"use strict";var a=n("q1tI"),i=n("5AJ6");e.a=Object(i.a)(a.createElement("path",{d:"M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13l-4-4h8z"}),"ArrowDropDownCircleOutlined")},sdZm:function(t,e,n){"use strict";var a=n("q1tI"),i=n("5AJ6");e.a=Object(i.a)(a.createElement("path",{d:"M12 8V4l8 8-8 8v-4H4V8z"}),"Forward")},yWDd:function(t,e,n){"use strict";n.r(e);var a=n("vJKn"),i=n.n(a),o=n("rg98"),s=n("H+61"),l=n("UlJF"),r=n("+Css"),c=n("7LId"),d=n("VIvw"),u=n("iHvq"),p=n("cpVT"),f=n("q1tI"),A=n.n(f),m=n("g4pe"),g=n.n(m),x=n("BMrR"),y=n("kPKH"),T=n("PArb"),O=n("wCAj"),h=n("ECub"),N=n("CtXQ"),v=n("20a2"),C=n.n(v),E=n("WM+0"),D=n("VlGh"),S=n("xtEs"),B=n("mOvS"),b=n.n(B),w=n("Y0NT"),P=n("/MKj"),M=n("fmKo"),k=n("sdZm"),F=n("pIR8"),I=n("n0zQ"),U=n("Xd8E"),L=n("ZiQX"),R=n("DObr"),K=n("Z3vd"),j=n("PsDL"),G=n("469l"),H=n("ADg1"),W=n("KmP9"),z=n("iae6"),V=n("JQEk"),Y=n("kKU3"),q=n("Xt1q"),X=n("+Isj"),J=n("olcQ"),Q=n("KPTR"),Z=n("bkve"),$=n("1AYd"),tt=n("pdwK"),et=n("hQDC"),nt=n("MoW8"),at=n("fH4n"),it=n("9kay"),ot=A.a.createElement;function st(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?st(Object(n),!0).forEach((function(e){Object(p.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):st(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function rt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(u.a)(t);if(e){var i=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(d.a)(this,n)}}var ct=b()().publicRuntimeConfig,dt=function(t){Object(c.a)(n,t);var e=rt(n);function n(t){var a;return Object(s.a)(this,n),a=e.call(this,t),Object(p.a)(Object(r.a)(a),"requestWithdraw",(function(){var t=M.default.isAllowSelectedSource;a.setState({loadingConfirm:!0});var e={};if(t){var n=a.state,i=n.transferAmount,o=n.transferRemark,s=n.selectedAccountTransferFrom,l=n.selectedAccountTransferTo,r=n.verifyAccountData;e={menu_component:"TransactionWithdrawDeposit",sigma_key:l.SIGMA_KEY,amt_transfer:parseFloat(i)||0,kbank_ref_no:r.REF_KBANK||void 0,citizen_id_enc:r.CITIZEN_ID_ENC||void 0,dept_account_enc:r.BANK_ACCOUNT_ENC||void 0,tran_id:r.TRAN_ID||void 0,fee_amt:parseFloat(r.FEE_AMT)||0,penalty_amt:parseFloat(r.PENALTY_AMT)||0,coop_account_no:s.DEPTACCOUNT_NO||void 0,remark:o}}else{var c=a.state,d=c.transferAmount,u=c.transferRemark,p=c.verifyAccountData,f=c.selectedBindAccountTransaction;e={menu_component:"TransactionWithdrawDeposit",sigma_key:f.SIGMA_KEY,amt_transfer:parseFloat(d)||0,kbank_ref_no:p.REF_KBANK||void 0,citizen_id_enc:p.CITIZEN_ID_ENC||void 0,dept_account_enc:p.BANK_ACCOUNT_ENC||void 0,tran_id:p.TRAN_ID||void 0,fee_amt:parseFloat(p.FEE_AMT)||0,penalty_amt:parseFloat(p.PENALTY_AMT)||0,coop_account_no:f.DEPTACCOUNT_NO||void 0,remark:u}}E.a.requestWithdrawBankPayment(e).then((function(t){t.RESULT?a.setState({loadingConfirm:!1,transactionResponse:t,currentStep:2}):a.setState({failedTransfer:t.RESPONSE_MESSAGE?t.RESPONSE_MESSAGE:at.a.t("FailedAndTryagain"),transactionResponse:null,loadingConfirm:!1})})).catch((function(t){a.setState({failedTransfer:res.RESPONSE_MESSAGE?res.RESPONSE_MESSAGE:at.a.t("FailedAndTryagain"),transactionResponse:null,loadingConfirm:!1})}))})),Object(p.a)(Object(r.a)(a),"fetchBindAccountDepositTransaction",Object(o.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.setState({loading:!0}),e={menu_component:"TransactionDeposit"},E.a.fetchBindAccountDepositTransaction(e).then((function(t){if(t.RESULT)if(!M.default.isAllowSelectedSource&&!_.isEmpty(t.ACCOUNT)&&t.ACCOUNT&&t.ACCOUNT.length>0||M.default.isAllowSelectedSource&&!_.isEmpty(t.ACCOUNT))if(M.default.isAllowSelectedSource){var e,n,i,o,s,l,r,c,d=(null===(e=response)||void 0===e||null===(n=e.ACCOUNT)||void 0===n||null===(i=n.BIND)||void 0===i?void 0:i.length)>0?null===(o=response.ACCOUNT)||void 0===o?void 0:o.BIND[0]:{},u=(null===(s=response)||void 0===s||null===(l=s.ACCOUNT)||void 0===l||null===(r=l.COOP)||void 0===r?void 0:r.length)>0?null===(c=response.ACCOUNT)||void 0===c?void 0:c.COOP[0]:{};a.setState({customAccountTransactionData:t.ACCOUNT,selectedAccountTransferFrom:lt({},d),selectedAccountTransferTo:lt({},u),isLazyLoadingBindAccount:!1})}else a.setState({bindAccountTransactionData:t.ACCOUNT,selectedBindAccountTransaction:lt(lt({},t.ACCOUNT[0]),{},{indexData:0}),isLazyLoadingBindAccount:!1});else a.setState(lt({},a.props.checkResultFalseMessage(t,{customAccountTransactionData:[],selectedAccountTransferFrom:{},selectedAccountTransferTo:{}},at.a.t("allowBeforeTransaction"))));else a.setState(lt({},a.props.checkResultFalseMessage(t,{customAccountTransactionData:[],selectedAccountTransferFrom:{},selectedAccountTransferTo:{}},at.a.t("allowBeforeTransaction"))));a.setState({loading:!1,isInitialLoading:!1})})).catch((function(t){a.setState({loading:!1,isInitialLoading:!1}),a.setState(lt({},a.props.checkCatchMessage(t)))}));case 3:case"end":return t.stop()}}),t)})))),Object(p.a)(Object(r.a)(a),"requestVerifyData",(function(){var t={};if(M.default.isAllowSelectedSource){var e=a.state,n=e.transferAmount,i=e.selectedAccountTransferFrom,o=e.selectedAccountTransferTo;t={menu_component:"TransactionWithdrawDeposit",deptaccount_no:i.DEPTACCOUNT_NO||void 0,amt_transfer:Number(n)||0,sigma_key:o.SIGMA_KEY||void 0,bank_code:o.BANK_CODE||void 0,bank_account_no:o.DEPTACCOUNT_NO_BANK||void 0}}else{var s=a.state,l=s.transferAmount,r=s.selectedBindAccountTransaction;t={menu_component:"TransactionWithdrawDeposit",deptaccount_no:r.DEPTACCOUNT_NO||void 0,amt_transfer:Number(l)||0,sigma_key:r.SIGMA_KEY||void 0,bank_code:r.BANK_CODE||void 0,bank_account_no:r.DEPTACCOUNT_NO_BANK||void 0}}E.a.requestWithdrawVerifyData(t).then((function(t){t.RESULT?t.CAUTION?a.setState({alertData:{isOpen:!0,title:null,detail:t.CAUTION.RESPONSE_MESSAGE,type:"confirm",icon:null,loading:!1,onClose:function(){a.setState({alertData:{}})},onConfirm:function(){a.setState({verifyAccountData:t,failedVerify:null,alertData:{}},(function(){return a.setState({currentStep:1})}))},confirmText:t.CAUTION.CONFIRM_TEXT,cancelText:t.CAUTION.CANCEL_TEXT,disabledConfirm:!t.CAUTION.CONFIRM_TEXT}}):a.setState({verifyAccountData:t,failedVerify:null},(function(){return a.setState({currentStep:1})})):a.setState({failedVerify:t.RESPONSE_MESSAGE?t.RESPONSE_MESSAGE:at.a.t("FailedAndTryagain"),verifyAccountData:null}),a.setState({loadingNext:!1})})).catch((function(t){a.setState(lt(lt({},a.props.checkCatchMessage(t)),{},{loadingNext:!1}))}))})),Object(p.a)(Object(r.a)(a),"onPressSelectedCustomAccount",(function(t){var e=t.item,n=(t.index,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"sender");"sender"==n?a.setState({selectedAccountTransferFrom:e,transferAmount:"",disabledButton:!0,openSelectAcc:!1}):a.setState({selectedAccountTransferTo:e,openSelectAcc:!1})})),a.state={isInitialLoading:!0,statusCode:200,errData:null,loading:!1,currentStep:0,pathName:"",failedVerify:null,loadingNext:!1,openSelectBindAcc:!1,openSelectAcc:!1,select_acc_on:"sender",selectedBindAccountTransaction:{},bindAccountTransactionData:[],customAccountTransactionData:[],selectedAccountTransferFrom:{},selectedAccountTransferTo:{},alertData:{}},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({pathName:Object(S.i)(C.a.pathname)}),this.fetchBindAccountDepositTransaction()}},{key:"componentDidUpdate",value:function(t,e){0==t.isSuccessOTP&&1==this.props.isSuccessOTP&&this.requestWithdraw()}},{key:"onVerify",value:function(){var t=M.default.isAllowSelectedSource;if(this.setState({loadingNext:!0}),t){var e=this.state,n=e.selectedAccountTransferFrom,a=e.selectedAccountTransferTo;if(_.isEmpty(n))this.setState({failedVerify:at.a.t("pleaseSelectAccountForTransactions"),verifyAccountData:null,loadingNext:!1});else if(_.isEmpty(a))this.setState({failedVerify:at.a.t("pleaseSelectDestinationAccount"),verifyAccountData:null,loadingNext:!1});else{(parseFloat(this.state.transferAmount)||0)>(_.has(n,"BALANCE")&&parseFloat(n.BALANCE)||0)?this.setState({failedVerify:at.a.t("notEnoughMoneyForTransaction"),verifyAccountData:null,loadingNext:!1}):this.requestVerifyData()}}else{var i=this.state.selectedBindAccountTransaction;if(_.isEmpty(i))this.setState({failedVerify:at.a.t("pleaseSelectAccountForTransactions"),verifyAccountData:null,loadingNext:!1});else(parseFloat(this.state.transferAmount)||0)>(_.has(i,"BALANCE")&&parseFloat(i.BALANCE)||0)?this.setState({failedVerify:at.a.t("notEnoughMoneyForTransaction"),verifyAccountData:null,loadingNext:!1}):this.requestVerifyData()}}},{key:"renderAccount",value:function(){var t=this,e=this.props.HIDE_ACCOUNT_NO.data,n=this.state,a=n.selectedBindAccountTransaction,i=n.selectedAccountTransferFrom,o=n.selectedAccountTransferTo,s=M.default.isAllowSelectedSource,l=function(){return s?{DEPT_TYPE:i.DEPT_TYPE,ACCOUNT_NAME:i.ACCOUNT_NAME,DEPTACCOUNT_NO:e?i.DEPTACCOUNT_NO_FORMAT_HIDE:i.DEPTACCOUNT_NO_FORMAT,BALANCE:i.BALANCE_FORMAT}:{DEPT_TYPE:a.DEPT_TYPE,ACCOUNT_NAME:a.ACCOUNT_NAME,DEPTACCOUNT_NO:e?a.DEPTACCOUNT_NO_FORMAT_HIDE:a.DEPTACCOUNT_NO_FORMAT,BALANCE:a.BALANCE_FORMAT}},r=function(){return s?{BANK_LOGO:_.isEmpty(o.BANK_LOGO_WEBP)&&_.isEmpty(o.BANK_LOGO)?void 0:_.has(o,"BANK_LOGO_WEBP")?o.BANK_LOGO_WEBP||void 0:_.has(o,"BANK_LOGO")&&o.BANK_LOGO||void 0,DEPTACCOUNT_NO:e?o.DEPTACCOUNT_NO_BANK_FORMAT_HIDE:o.DEPTACCOUNT_NO_BANK_FORMAT}:{BANK_LOGO:_.isEmpty(a.BANK_LOGO_WEBP)&&_.isEmpty(a.BANK_LOGO)?void 0:_.has(a,"BANK_LOGO_WEBP")?a.BANK_LOGO_WEBP||void 0:_.has(a,"BANK_LOGO")&&a.BANK_LOGO||void 0,DEPTACCOUNT_NO:e?a.DEPTACCOUNT_NO_BANK_FORMAT_HIDE:a.DEPTACCOUNT_NO_BANK_FORMAT}};return ot("div",null,ot(x.a,{type:"flex"},ot(y.a,{xs:24,sm:24,md:24,lg:24,xl:{span:16,offset:4},xxl:{span:16,offset:4},style:{textAlign:"center"}},ot("div",{className:"isc-card card-shadow",style:{background:"linear-gradient(0deg, #5c68b7 0%, #4e9ae3 100%)"}},ot(x.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}]},ot(y.a,{xs:24,sm:24,md:12,lg:12,xl:12,xxl:12,style:{textAlign:"center"}},ot(K.a,{onClick:function(){s?t.setState({select_acc_on:"sender",openSelectAcc:!0}):t.setState({openSelectBindAcc:!0})},variant:"outlined",color:"primary",style:{textTransform:"none",backgroundColor:"white",padding:"20px",height:"100%",minWidth:"50%"}},ot("div",null,ot("div",null,l().DEPT_TYPE||at.a.t("CoopAccount")),ot("div",{style:{paddingTop:10}},l().DEPTACCOUNT_NO||"xxx-xxx-xxxx"),ot("div",null,l().BALANCE||"x.xx"))),ot("div",{className:"transfer-right-arrow"},ot("div",{style:{textAlign:"center"}},ot(j.a,{color:"primary",style:{color:"white"},disableRipple:!0},ot(k.a,null))))),ot(y.a,{className:"transfer-down-arrow",xs:24,sm:24,md:12,lg:12,xl:{span:8,offset:4},xxl:{span:8,offset:4},style:{textAlign:"center"}},ot(T.a,null,ot(F.a,{style:{color:"#FFF"}}))),ot(y.a,{xs:24,sm:24,md:12,lg:12,xl:12,xxl:12,style:{textAlign:"center"}},ot(K.a,{onClick:function(){s?t.setState({select_acc_on:"receiver",openSelectAcc:!0}):t.setState({openSelectBindAcc:!0})},variant:"outlined",color:"primary",style:{textTransform:"none",backgroundColor:"white",padding:"20px",height:"100%",minWidth:"50%"}},ot("div",null,ot("div",null,_.isEmpty(r().BANK_LOGO)?ot(G.a,{style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:null}):ot("img",{alt:"bank-logo",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:r().BANK_LOGO?r().BANK_LOGO:null})),ot("div",{style:{paddingTop:10}},r().DEPTACCOUNT_NO||"xxx-xxx-xxxx")))))),ot(x.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}]},ot(y.a,{xs:0,sm:0,md:24,lg:24,xl:24,xxl:24,style:{textAlign:"center",paddingTop:40,paddingLeft:8}},ot(O.a,{className:"description-table",useFixedHeader:!1,bordered:!1,size:"small",pagination:!1,showHeader:!1,dataSource:[{key:"Value",label:"".concat(at.a.t("TransactionAmtTHB")," : "),value:ot("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end"}},ot("div",{style:{marginBottom:10}},ot(H.a,{size:"small",variant:"outlined"},ot(W.a,{id:"transfer-value-outlined",key:"transfer-value",value:this.state.transferAmount,onChange:function(e){t.setState({transferAmount:e.target.value})},placeholder:"0.00",inputProps:{autoComplete:"off"},name:"formatted-numberformat-input",variant:"outlined",onKeyDown:function(e){"Enter"==e.key&&t.state.transferAmount&&t.onVerify()},inputComponent:S.a}))),ot("div",{style:{marginBottom:10,marginLeft:40}},ot(K.a,{disabled:!this.state.transferAmount,disableRipple:!!this.state.loadingNext,onClick:function(){!t.state.loadingNext&&t.onVerify()},color:"primary",variant:"contained",endIcon:this.state.loadingNext?ot(z.a,{style:{width:"1em",height:"1em",color:"white"}}):ot(k.a,null),style:{whiteSpace:"nowrap"}},at.a.t("Next"))))}],columns:[{title:"label",dataIndex:"label",key:"label",className:"description-label"},{title:"value",dataIndex:"value",key:"value"}]})),ot(y.a,{xs:24,sm:24,md:0,lg:0,xl:0,xxl:0,style:{paddingTop:40}},ot("div",null,ot("div",null,"".concat(at.a.t("TransactionAmtTHB")," : ")),ot("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end"}},ot("div",{style:{marginBottom:10,width:"100%"}},ot(H.a,{size:"small",variant:"outlined",fullWidth:!0},ot(W.a,{id:"transfer-value-outlined",key:"transfer-value",value:this.state.transferAmount,onChange:function(e){t.setState({transferAmount:e.target.value})},placeholder:"0.00",inputProps:{autoComplete:"off"},name:"formatted-numberformat-input",variant:"outlined",onKeyDown:function(e){"Enter"==e.key&&t.state.transferAmount&&t.onVerify()},inputComponent:S.a}))),ot("div",{style:{marginBottom:10,marginLeft:40}},ot(K.a,{disabled:!this.state.transferAmount,disableRipple:!!this.state.loadingNext,onClick:function(){!t.state.loadingNext&&t.onVerify()},color:"primary",variant:"contained",endIcon:this.state.loadingNext?ot(z.a,{style:{width:"1em",height:"1em",color:"white"}}):ot(k.a,null),style:{whiteSpace:"nowrap"}},at.a.t("Next"))))))),ot(V.a,{in:!!this.state.failedVerify},ot(Y.a,{in:!!this.state.failedVerify},ot(x.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}]},ot(y.a,{xs:24,sm:24,md:24,lg:24,xl:{span:16,offset:4},xxl:{span:16,offset:4},style:{textAlign:"center",paddingTop:24}},ot("div",null,ot(L.a,{severity:"error",style:{position:"relative"},onClick:function(){t.setState({failedVerify:null})}},ot(I.a,{style:{cursor:"pointer",position:"absolute",top:10,right:10}}),ot(R.a,{style:{textAlign:"left"}},this.state.failedVerify))))))))))}},{key:"renderModalSelectAccount",value:function(){var t,e,n=this,a=this.props.HIDE_ACCOUNT_NO.data,i=this.state,o=i.selectedBindAccountTransaction,s=i.customAccountTransactionData,l=i.select_acc_on,r="sender"==c?null!==(t=s.COOP)&&void 0!==t?t:[]:null!==(e=s.BIND)&&void 0!==e?e:[],c=l;return ot(q.a,{open:this.state.openSelectAcc,onClose:function(){n.setState({openSelectAcc:!1})},closeAfterTransition:!0,BackdropComponent:X.a,BackdropProps:{timeout:500},style:{}},ot("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",overflow:"auto",width:"100%",height:"100vh",padding:"20px 0"}},ot("div",{style:{position:"absolute",top:20,right:40,zIndex:3}},ot(j.a,{onClick:function(){n.setState({openSelectAcc:!1})},style:{backgroundColor:"rgba(255,255,255,0.5)"}},ot(I.a,null))),ot("div",{onClick:function(){n.setState({openSelectAcc:!1})},style:{position:"fixed",top:0,right:0,width:"100%",height:"100%"}}),ot("div",{className:"sub-content",style:{backgroundColor:"white",margin:"auto",minHeight:"unset",width:"unset",zIndex:2}},ot("div",{style:{paddingBottom:20,position:"sticky",top:60,zIndex:2}},ot("div",{style:{fontSize:"1.2em",textDecoration:"underline",backgroundColor:"white"}},at.a.t("SelectAcc"))),r.length>0?r.map((function(t,e){return ot("div",{key:e,style:{marginBottom:20}},ot(K.a,{onClick:function(){n.onPressSelectedCustomAccount({item:t,index:e},c)},color:o.indexData==e?"primary":"text",variant:"outlined",style:{textTransform:"none",color:"var(--normal-text-color)"}},ot("div",null,"sender"==c?ot("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 0"}},ot("div",{style:{padding:"0 20px",textAlign:"left"}},ot("div",null,t.DEPT_TYPE||"-"),ot("div",{style:{paddingTop:10}},(a?t.DEPTACCOUNT_NO_FORMAT_HIDE:t.DEPTACCOUNT_NO_FORMAT)||"xxx-xxx-xxxx"),ot("div",null,t.DEPTACCOUNT_NAME||"")),ot("div",{style:{textAlign:"right",padding:"0 20px"}},ot("div",{style:{fontSize:"smaller"}},at.a.t("WithdrawableAmtTHB")),ot("div",{style:{paddingTop:10}},t.BALANCE_FORMAT||"-"))):ot("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 0"}},ot("div",{style:{padding:"0 20px"}},_.isEmpty(t.BANK_LOGO)?ot(G.a,{style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:null}):ot("img",{alt:"bank-logo",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:t.BANK_LOGO?t.BANK_LOGO:null})),ot("div",{style:{textAlign:"right",padding:"0 20px"}},ot("div",{style:{paddingTop:10}},(a?t.DEPTACCOUNT_NO_BANK_FORMAT_HIDE:t.DEPTACCOUNT_NO_BANK_FORMAT)||"xxx-x-xxxxx-x"))))))})):ot(h.a,{className:"empty-div",description:at.a.t("DataNotFound"),style:{fontSize:"small"},image:ot("picture",null,ot("source",{srcSet:"".concat(ct.imageFolder,"/notfound.webp"),type:"image/webp"}),ot("source",{srcSet:"".concat(ct.imageFolder,"/notfound.png"),type:"image/png"}),ot("img",{alt:"notfound-icon",src:"".concat(ct.imageFolder,"/notfound.png"),type:"image/png",style:{userSelect:"none",opacity:.6}}))}))))}},{key:"renderModalBindAccount",value:function(){var t=this,e=this.props.HIDE_ACCOUNT_NO.data,n=this.state,a=n.selectedBindAccountTransaction,i=n.bindAccountTransactionData;return ot(q.a,{open:this.state.openSelectBindAcc,onClose:function(){t.setState({openSelectBindAcc:!1})},closeAfterTransition:!0,BackdropComponent:X.a,BackdropProps:{timeout:500},style:{}},ot("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",overflow:"auto",width:"100%",height:"100vh"}},ot("div",{style:{position:"absolute",top:20,right:40,zIndex:3}},ot(j.a,{onClick:function(){t.setState({openSelectBindAcc:!1})},style:{backgroundColor:"rgba(255,255,255,0.5)"}},ot(I.a,null))),ot("div",{onClick:function(){t.setState({openSelectBindAcc:!1})},style:{position:"fixed",top:0,right:0,width:"100%",height:"100%"}}),ot("div",{className:"sub-content",style:{backgroundColor:"white",margin:"auto",minHeight:"unset",width:"unset",zIndex:2}},ot("div",{style:{paddingBottom:20,position:"sticky",top:60,zIndex:2}},ot("div",{style:{fontSize:"1.2em",textDecoration:"underline",backgroundColor:"white"}},at.a.t("SelectAcc"))),i.length>0?i.map((function(n,i){return ot("div",{key:i,style:{marginBottom:20}},ot(K.a,{onClick:function(){t.setState({selectedBindAccountTransaction:lt(lt({},n),{},{indexData:indexedDB}),openSelectBindAcc:!1,transferAmount:""})},color:a.indexData==i?"primary":"text",variant:"outlined",style:{textTransform:"none",color:"var(--normal-text-color)"}},ot("div",null,ot("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:20}},ot("div",{style:{padding:"0 20px",textAlign:"left"}},ot("div",null,n.DEPT_TYPE||"-"),ot("div",{style:{paddingTop:10}},e?n.DEPTACCOUNT_NO_FORMAT_HIDE:n.DEPTACCOUNT_NO_FORMAT||"xxx-xxx-xxxx")),ot("div",{style:{textAlign:"right",padding:"0 20px"}},ot("div",{style:{fontSize:"smaller"}},at.a.t("WithdrawableAmtTHB")),ot("div",{style:{paddingTop:10}},n.BALANCE_FORMAT||"-"))),ot(T.a,null,ot(F.a,{style:{color:"grey"}})),ot("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:20}},ot("div",{style:{padding:"0 20px"}},_.isEmpty(n.BANK_LOGO)?ot(G.a,{style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:null}):ot("img",{alt:"bank-logo",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:n.BANK_LOGO?n.BANK_LOGO:null})),ot("div",{style:{textAlign:"right",padding:"0 20px"}},ot("div",null,(e?n.DEPTACCOUNT_NO_BANK_FORMAT_HIDE:n.DEPTACCOUNT_NO_BANK_FORMAT)||"xxx-x-xxxxx-x"))))))})):ot(h.a,{className:"empty-div",description:at.a.t("DataNotFound"),style:{fontSize:"small"},image:ot("picture",null,ot("source",{srcSet:"".concat(ct.imageFolder,"/notfound.webp"),type:"image/webp"}),ot("source",{srcSet:"".concat(ct.imageFolder,"/notfound.png"),type:"image/png"}),ot("img",{alt:"notfound-icon",src:"".concat(ct.imageFolder,"/notfound.png"),type:"image/png",style:{userSelect:"none",opacity:.6}}))}))))}},{key:"render",value:function(){var t=this,e=(this.props.MENU_LIST,this.props.HIDE_ACCOUNT_NO.data),n=this.state,a=n.selectedBindAccountTransaction,i=n.selectedAccountTransferFrom,o=n.selectedAccountTransferTo,s=M.default.isAllowSelectedSource,l=function(){return s?{DEPT_TYPE:i.DEPT_TYPE,ACCOUNT_NAME:i.ACCOUNT_NAME,DEPTACCOUNT_NO:e?i.DEPTACCOUNT_NO_FORMAT_HIDE:i.DEPTACCOUNT_NO_FORMAT,BALANCE:i.BALANCE_FORMAT}:{DEPT_TYPE:a.DEPT_TYPE,ACCOUNT_NAME:a.ACCOUNT_NAME,DEPTACCOUNT_NO:e?a.DEPTACCOUNT_NO_FORMAT_HIDE:a.DEPTACCOUNT_NO_FORMAT,BALANCE:a.BALANCE_FORMAT}},r=function(){return s?{BANK_LOGO:_.isEmpty(o.BANK_LOGO_WEBP)&&_.isEmpty(o.BANK_LOGO)?void 0:_.has(o,"BANK_LOGO_WEBP")?o.BANK_LOGO_WEBP||void 0:_.has(o,"BANK_LOGO")&&o.BANK_LOGO||void 0,DEPTACCOUNT_NO:e?o.DEPTACCOUNT_NO_BANK_FORMAT_HIDE:o.DEPTACCOUNT_NO_BANK_FORMAT}:{BANK_LOGO:_.isEmpty(a.BANK_LOGO_WEBP)&&_.isEmpty(a.BANK_LOGO)?void 0:_.has(a,"BANK_LOGO_WEBP")?a.BANK_LOGO_WEBP||void 0:_.has(a,"BANK_LOGO")&&a.BANK_LOGO||void 0,DEPTACCOUNT_NO:e?a.DEPTACCOUNT_NO_BANK_FORMAT_HIDE:a.DEPTACCOUNT_NO_BANK_FORMAT}};return this.state.statusCode>=300&&this.state.statusCode<500?ot(w.default,{statusCode:this.state.statusCode,err:this.state.errData,showModalLogout:function(){return t.props.showModalLogout()}}):ot("div",{className:"main-layout",style:{position:"relative"}},ot("div",{style:{width:"100%"}},ot(D.a,{checked:!this.state.loading||!this.state.isInitialLoading}),ot(g.a,null,ot("link",{rel:"stylesheet",href:"".concat(ct.cssFolder,"/transfer.css")})),ot(et.a,{isOpen:!!this.state.alertData.isOpen,title:this.state.alertData.title,description:this.state.alertData.detail,type:this.state.alertData.type,svgIcon:this.state.alertData.icon,loading:!!this.state.alertData.loading,onClose:this.state.alertData.onClose,onConfirm:this.state.alertData.onConfirm,confirmText:this.state.alertData.confirmText,cancelText:this.state.alertData.cancelText,disabledConfirm:!!this.state.alertData.disabledConfirm}),this.renderModalSelectAccount(),this.renderModalBindAccount(),ot("div",{className:"main-content",style:{width:"100%"}},ot("div",{className:"sub-content",style:{display:"flex",flexDirection:"column",padding:0}},ot("div",{className:"sub-content",style:{flex:1,width:"100%"}},ot(x.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}]},ot(y.a,{xs:24,sm:24,md:24,lg:24,xl:{span:16,offset:4},xxl:{span:16,offset:4}},ot(nt.a,{th:"\u0e16\u0e2d\u0e19\u0e40\u0e07\u0e34\u0e19\u0e1d\u0e32\u0e01",en:"Withdraw deposits"}))),ot(x.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}]},ot(y.a,{xs:24,sm:24,md:24,lg:24,xl:{span:16,offset:4},xxl:{span:16,offset:4},style:{textAlign:"center"}},ot(J.a,{style:{backgroundColor:"transparent"},color:"second",activeStep:this.state.currentStep,alternativeLabel:!0},ot(Q.a,null,ot(Z.a,{disabled:1!=this.state.currentStep,onClick:function(){return t.setState({currentStep:0})}},at.a.t("FillInfo"))),ot(Q.a,null,ot(Z.a,{disabled:!0},at.a.t("CheckInfo"))),ot(Q.a,null,ot(Z.a,{disabled:!0},at.a.t("SuccessfulTransaction")))))),ot("div",{style:{padding:"40px 0"}},0==this.state.currentStep?this.renderAccount():1==this.state.currentStep?ot("div",null,ot(x.a,{type:"flex",gutter:[{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48},{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48}]},ot(y.a,{className:"card-shadow isc-card",xs:24,sm:24,md:{span:12,offset:6},lg:{span:12,offset:6},xl:{span:12,offset:6},xxl:{span:8,offset:8}},ot("div",{style:{textAlign:"center",fontSize:"1.5em",fontWeight:"bold"}},at.a.t("CheckInfo")),ot("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:20}},ot("div",null,ot("picture",null,ot("source",{srcSet:"".concat(ct.logoFolder,"/logo.webp"),type:"image/webp"}),ot("source",{srcSet:"".concat(ct.logoFolder,"/logo.png"),type:"image/png"}),ot("img",{alt:"coop-icon",src:"".concat(ct.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}}))),ot("div",{style:{textAlign:"right"}},ot("div",null,l().ACCOUNT_NAME||"-"),ot("div",{style:{paddingTop:10}},l().DEPTACCOUNT_NO||"xxx-xxx-xxxx"))),ot(T.a,null,ot(F.a,{style:{color:"grey"}})),ot("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},ot("div",null,_.isEmpty(r().BANK_LOGO)?ot(G.a,{style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:null}):ot("img",{alt:"bank-logo",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:r().BANK_LOGO?r().BANK_LOGO:null})),ot("div",{style:{textAlign:"right"}},ot("div",null,this.state.verifyAccountData&&this.state.verifyAccountData.ACCOUNT_NAME||at.a.t("BankAccount")),ot("div",{style:{paddingTop:10}},r().DEPTACCOUNT_NO||"xxx-xxx-xxxx"))),ot("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:24}},ot("div",null,at.a.t("Amount")),ot("div",{style:{textAlign:"right",fontSize:"1.2em"}},ot("span",{style:{color:"var(--balance-text-color)"}},Object(S.m)(this.state.transferAmount)||"0.00")," ",at.a.t("THB"))),!!this.state.verifyAccountData&&!!this.state.verifyAccountData.FEE_AMT&&ot("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12}},ot("div",null,at.a.t("Fee")),ot("div",{style:{textAlign:"right"}},Object(S.m)(this.state.verifyAccountData&&this.state.verifyAccountData.FEE_AMT||"0.00")," ",at.a.t("THB"))),!!this.state.verifyAccountData&&!!this.state.verifyAccountData.PENALTY_AMT&&ot("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12}},ot("div",null,at.a.t("PenaltyCoop")),ot("div",{style:{textAlign:"right"}},Object(S.m)(this.state.verifyAccountData&&this.state.verifyAccountData.PENALTY_AMT||"0.00")," ",at.a.t("THB"))),ot("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:24}},ot(H.a,{size:"small",variant:"standard",fullWidth:!0},ot($.a,null,at.a.t("Memo")),ot(tt.a,{key:"transfer-value",value:this.state.transferRemark,label:at.a.t("Memo"),onChange:function(e){t.setState({transferRemark:e.target.value})},inputProps:{autoComplete:"off"},name:"transferRemark-input",id:"transferRemark-input"}))),ot("div",{style:{paddingTop:32}},ot(K.a,{disableRipple:!!this.state.loadingConfirm,onClick:function(){!t.state.loadingConfirm&&(M.default.transactionOTP?t.props.onOTPTransfer(t.props.MEMBER_INFO.data.PHONE,t.props.MEMBER_INFO.data.MEMBER_NO,Object(S.i)(C.a.pathname)):t.requestWithdraw())},color:"primary",variant:"contained",size:"large",fullWidth:!0,endIcon:this.state.loadingConfirm&&ot(z.a,{style:{width:"1em",height:"1em",color:"white"}})},at.a.t("Confirm"))),ot(V.a,{in:!!this.state.failedTransfer},ot(Y.a,{in:!!this.state.failedTransfer},ot("div",null,ot(L.a,{severity:"error",style:{position:"relative",marginTop:24},onClick:function(){t.setState({failedTransfer:null})}},ot(I.a,{style:{cursor:"pointer",position:"absolute",top:10,right:10}}),ot(R.a,{style:{textAlign:"left"}},this.state.failedTransfer)))))))):ot("div",null,ot(x.a,{type:"flex",gutter:[{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48},{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48}]},ot(y.a,{className:"card-shadow isc-card",xs:24,sm:24,md:{span:12,offset:6},lg:{span:12,offset:6},xl:{span:12,offset:6},xxl:{span:8,offset:8}},ot("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},ot("div",{style:{textAlign:"center",fontSize:"1.5em",fontWeight:"bold"}},at.a.t("SuccessfulTransfer")),ot("div",{className:"success-slip-icon",style:{marginLeft:10,fontSize:"x-large",color:"white",height:"1em",width:"1em",borderRadius:"1em",right:"0",top:"0",background:"var(--gd-success-color)",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",position:"relative"}},ot(N.a,{type:"check",style:{position:"relative",fontSize:"small"}}),ot("div",{className:"success-slip-overlay",style:{fontSize:"x-large",color:"white",height:"1.5em",width:"1.5em",borderRadius:"1.5em",right:"0",top:"0",background:"var(--gd-success-color)",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute"}}))),ot("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:20}},ot("div",null,ot("picture",null,ot("source",{srcSet:"".concat(ct.logoFolder,"/logo.webp"),type:"image/webp"}),ot("source",{srcSet:"".concat(ct.logoFolder,"/logo.png"),type:"image/png"}),ot("img",{alt:"coop-icon",src:"".concat(ct.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}}))),ot("div",{style:{textAlign:"right"}},ot("div",null,l().ACCOUNT_NAME||"-"),ot("div",{style:{paddingTop:10}},l().DEPTACCOUNT_NO||"xxx-xxx-xxxx"))),ot(T.a,null,ot(F.a,{style:{color:"grey"}})),ot("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},ot("div",null,_.isEmpty(r().BANK_LOGO)?ot(G.a,{style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:null}):ot("img",{alt:"bank-logo",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:r().BANK_LOGO?r().BANK_LOGO:null})),ot("div",{style:{textAlign:"right"}},ot("div",null,this.state.verifyAccountData&&this.state.verifyAccountData.ACCOUNT_NAME||"\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e18\u0e19\u0e32\u0e04\u0e32\u0e23"),ot("div",{style:{paddingTop:10}},r().DEPTACCOUNT_NO||"xxx-xxx-xxxx"))),ot("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:24}},ot("div",null,at.a.t("Amount")),ot("div",{style:{textAlign:"right",fontSize:"1.2em"}},ot("span",{style:{color:"var(--balance-text-color)"}},Object(S.m)(this.state.transferAmount)||"0.00")," ",at.a.t("THB"))),!!this.state.verifyAccountData&&!!this.state.verifyAccountData.FEE_AMT&&ot("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12}},ot("div",null,at.a.t("Fee")),ot("div",{style:{textAlign:"right"}},Object(S.m)(this.state.verifyAccountData&&this.state.verifyAccountData.FEE_AMT||"0.00")," ",at.a.t("THB"))),!!this.state.verifyAccountData&&!!this.state.verifyAccountData.PENALTY_AMT&&ot("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12}},ot("div",null,at.a.t("PenaltyCoop")),ot("div",{style:{textAlign:"right"}},Object(S.m)(this.state.verifyAccountData&&this.state.verifyAccountData.PENALTY_AMT||"0.00")," ",at.a.t("THB"))),this.state.transferRemark&&ot("div",{style:{paddingTop:24}},ot("div",{style:{fontSize:"smaller"}},at.a.t("Memo")),ot("div",null,this.state.transferRemark)),ot("div",{style:{paddingTop:32}},ot(K.a,{onClick:function(){t.setState({transferAmount:"",currentStep:0,transferRemark:null})},color:"primary",variant:"outlined",size:"large",fullWidth:!0,endIcon:this.state.loadingConfirm&&ot(z.a,{style:{width:"1em",height:"1em",color:"white"}})},at.a.t("ReturnMainPage")))))))),ot(U.a,null)))))}}]),n}(f.PureComponent);e.default=Object(P.b)((function(t){return{HIDE_ACCOUNT_NO:t.HIDE_ACCOUNT_NO,MEMBER_INFO:t.MEMBER_INFO,MENU_LIST:t.MENU_LIST}}),(function(t){return{}}))(Object(it.c)()(dt))}},[["+Hdy",0,2,4,5,10,7,11,1,3,6,8,9,12,13,14,15,17,18]]]);