_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[78],{Uksg:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/TransferDepPayLoan",function(){return a("ib1Q")}])},ib1Q:function(t,e,a){"use strict";a.r(e);var n=a("vJKn"),i=a.n(n),s=a("rg98"),l=a("H+61"),o=a("UlJF"),r=a("+Css"),c=a("7LId"),d=a("VIvw"),u=a("iHvq"),p=a("cpVT"),f=a("q1tI"),m=a.n(f),y=a("g4pe"),g=a.n(y),h=a("2fM7"),x=a("ECub"),A=a("BMrR"),T=a("kPKH"),v=a("PArb"),O=a("wCAj"),N=a("CtXQ"),C=(a("QL2g"),a("20a2")),E=a.n(C),b=a("WM+0"),I=(a("wd/R"),a("xtEs")),S=a("fmKo"),P=a("VlGh"),w=a("mOvS"),D=a.n(w),R=a("Y0NT"),M=a("/MKj"),B=a("n0zQ"),j=a("sdZm"),F=a("pIR8"),L=a("Xd8E"),k=a("ZiQX"),H=a("DObr"),V=a("Xt1q"),U=a("+Isj"),Y=a("PsDL"),z=a("Z3vd"),K=a("ADg1"),G=a("KmP9"),W=a("iae6"),Q=a("JQEk"),X=a("kKU3"),J=a("olcQ"),q=a("KPTR"),Z=a("bkve"),$=a("1AYd"),tt=a("pdwK"),et=a("hQDC"),at=a("MoW8"),nt=a("fH4n"),it=a("9kay"),st=m.a.createElement;function lt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function ot(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?lt(Object(a),!0).forEach((function(e){Object(p.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):lt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function rt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=Object(u.a)(t);if(e){var i=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(d.a)(this,a)}}var ct=D()().publicRuntimeConfig,dt=(h.a.Option,function(t){Object(c.a)(a,t);var e=rt(a);function a(t){var n;return Object(l.a)(this,a),n=e.call(this,t),Object(p.a)(Object(r.a)(n),"getFeeFundTransfer",Object(s.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.setState({loadingNext:!0,failedTransfer:null}),e={loancontract_no:n.state.toAccount.CONTRACT_NO,amt_transfer:n.state.transferValue,menu_component:"TransferDepPayLoan"},b.a.confirmRepayLoan(e).then((function(t){var e;t.RESULT?t.CAUTION?n.setState({alertData:{isOpen:!0,title:null,detail:t.CAUTION.RESPONSE_MESSAGE,type:"confirm",icon:null,loading:!1,onClose:function(){n.setState({alertData:{}})},onConfirm:function(){var e;n.setState((e={confirmData:{BF_BAL:t.BF_BAL,BF_INT:t.BF_INT,INT_PERIOD:t.INT_PERIOD,PAYMENT_INT:t.PAYMENT_INT,PAYMENT_PRIN:t.PAYMENT_PRIN,PERIOD:t.PERIOD},isConfirmTrans:!0,failedTransfer:null,currentStep:1,penaltyAMT:t.PENALTY_AMT,feeAMT:t.FEE_AMT},Object(p.a)(e,"failedTransfer",null),Object(p.a)(e,"currentStep",1),e))},confirmText:t.CAUTION.CONFIRM_TEXT,cancelText:t.CAUTION.CANCEL_TEXT,disabledConfirm:!t.CAUTION.CONFIRM_TEXT}}):n.setState((e={confirmData:{BF_BAL:t.BF_BAL,BF_INT:t.BF_INT,INT_PERIOD:t.INT_PERIOD,PAYMENT_INT:t.PAYMENT_INT,PAYMENT_PRIN:t.PAYMENT_PRIN,PERIOD:t.PERIOD},isConfirmTrans:!0,failedTransfer:null,currentStep:1,penaltyAMT:t.PENALTY_AMT,feeAMT:t.FEE_AMT},Object(p.a)(e,"failedTransfer",null),Object(p.a)(e,"currentStep",1),e)):n.setState({confirmData:{},penaltyAMT:null,feeAMT:null,failedVerify:t.RESPONSE_MESSAGE?t.RESPONSE_MESSAGE:nt.a.t("ErrorAndTryagain")});n.setState({loadingNext:!1})})).catch((function(t){n.setState({loadingNext:!1}),n.setState({confirmData:{},penaltyAMT:null,feeAMT:null,failedVerify:nt.a.t("ErrorAndTryagain")})}));case 3:case"end":return t.stop()}}),t)})))),Object(p.a)(Object(r.a)(n),"FundTransfer",Object(s.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.setState({loadingConfirm:!0,failedTransfer:null}),e={deptaccount_no:n.state.myAccount.DEPTACCOUNT_NO,contract_no:n.state.toAccount.CONTRACT_NO,amt_transfer:n.state.transferValue||0,penalty_amt:n.state.penaltyAMT||0,fee_amt:n.state.fee_amt||0,remark:n.state.transferRemark,menu_component:"TransferDepPayLoan"},b.a.requestPaymentLoan(e).then((function(t){t.RESULT?n.setState({confirmData:{BF_BAL:t.BF_BAL,BF_INT:t.BF_INT,INT_PERIOD:t.INT_PERIOD,PAYMENT_INT:t.INTEREST_PAYMENT,PAYMENT_PRIN:t.PRIN_PAYMENT,PERIOD:t.PERIOD},slip_no:t.TRANSACTION_NO,transaction_date:t.TRANSACTION_DATE,loadingConfirm:!1,currentStep:2}):n.setState({failedTransfer:t.RESPONSE_MESSAGE?t.RESPONSE_MESSAGE:nt.a.t("FailedAndTryagain")}),n.setState({loadingConfirm:!1})})).catch((function(t){n.setState({loadingConfirm:!1}),n.setState({failedTransfer:nt.a.t("FailedAndTryagain")})}));case 3:case"end":return t.stop()}}),t)})))),Object(p.a)(Object(r.a)(n),"fetchAllowAccount",Object(s.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.setState({loading:!0}),e={menu_component:"TransferDepPayLoan"},b.a.fetchAllowAccountTransferLoan(e).then((function(t){if(t.RESULT){var e=[];if(t.FORMAT_DEPT)t.FORMAT_DEPT.split("-").map((function(t){e.push(t.length)}));n.setState({accArr:t.ACCOUNT_ALLOW,favArr:t.ACCOUNT_FAV||[],dept_format:e,loanArr:t.LOAN},(function(){n.state.accArr[0]&&n.setState({myAccount:n.state.accArr[0],onSelectAccList:0,transferValue:null})}))}else n.setState(ot({},n.props.checkResultFalseMessage(t,{},nt.a.t("SavingAccNotFound"))));n.setState({loading:!1,isInitialLoading:!1})})).catch((function(t){n.setState({loading:!1,isInitialLoading:!1}),n.setState(ot({},n.props.checkCatchMessage(t)))}));case 3:case"end":return t.stop()}}),t)})))),Object(p.a)(Object(r.a)(n),"onPressSelectedCustomAccount",(function(t){var e=t.item,a=(t.index,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"sender");"sender"==a?n.setState({myAccount:e,transferValue:"",openSelectAcc:!1}):n.setState({toAccount:e,openSelectAcc:!1})})),n.state={statusCode:200,errData:null,loading:!0,isInitialLoading:!0,notifyOn:0,pathName:"",transferValue:null,accArr:[],favArr:[],loanArr:[],myAccount:{},toAccount:{},onSelectAccList:0,isShowSlip:!1,isConfirmTrans:!1,feeAMT:null,penaltyAMT:null,loadingTransfer:!1,loadingFund:!1,slip_no:"",transaction_date:"",currentStep:0,openSelectAcc:!1,select_acc_on:"sender",transferRemark:null,confirmData:{},alertData:{}},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({pathName:Object(I.i)(E.a.pathname)}),this.fetchAllowAccount()}},{key:"componentDidUpdate",value:function(t,e){0==t.isSuccessOTP&&1==this.props.isSuccessOTP&&this.FundTransfer()}},{key:"renderModalSelectAccount",value:function(){var t,e,a=this,n=this.props.HIDE_ACCOUNT_NO.data,i=this.state.select_acc_on,s="sender"==i?null!==(t=this.state.accArr)&&void 0!==t?t:[]:null!==(e=this.state.loanArr)&&void 0!==e?e:[];return st(V.a,{open:this.state.openSelectAcc,onClose:function(){a.setState({openSelectAcc:!1})},closeAfterTransition:!0,BackdropComponent:U.a,BackdropProps:{timeout:500},style:{}},st("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",overflow:"auto",width:"100%",height:"100vh",padding:"20px 0"}},st("div",{style:{position:"absolute",top:20,right:40,zIndex:3}},st(Y.a,{onClick:function(){a.setState({openSelectAcc:!1})},style:{backgroundColor:"rgba(255,255,255,0.5)"}},st(B.a,null))),st("div",{onClick:function(){a.setState({openSelectAcc:!1})},style:{position:"fixed",top:0,right:0,width:"100%",height:"100%"}}),st("div",{className:"sub-content",style:{backgroundColor:"white",margin:"auto",minHeight:"unset",width:"unset",zIndex:2}},st("div",{style:{paddingBottom:20,position:"sticky",top:60}},st("div",{style:{fontSize:"1.2em",textDecoration:"underline",backgroundColor:"white"}},nt.a.t("SelectAcc"))),s.length>0?s.map((function(t,e){return st("div",{key:e,style:{marginBottom:20}},"sender"==i?st(z.a,{onClick:function(){a.onPressSelectedCustomAccount({item:t,index:e},i)},color:a.state.myAccount.DEPTACCOUNT_NO==t.DEPTACCOUNT_NO?"primary":"default",variant:"outlined",style:{textTransform:"none"}},st("div",{style:{padding:"20px 0"}},st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},t.DEPT_TYPE||"-"),st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},st("div",{style:{padding:"0 20px",textAlign:"left"}},st("div",{style:{paddingTop:10}},(n?t.DEPTACCOUNT_NO_FORMAT_HIDE:t.DEPTACCOUNT_NO_FORMAT)||"xxx-xxx-xxxx"),st("div",null,t.DEPTACCOUNT_NAME||"")),st("div",{style:{textAlign:"right",padding:"0 20px"}},st("div",{style:{paddingTop:10}},nt.a.t("WithdrawableAmtTHB")),st("div",{className:"highlight-text",style:{fontSize:"1.2em"}},t.BALANCE_FORMAT||"-"))))):st(z.a,{onClick:function(){a.onPressSelectedCustomAccount({item:t,index:e},i)},color:a.state.toAccount.CONTRACT_NO==t.CONTRACT_NO?"primary":"default",variant:"outlined",style:{textTransform:"none"}},st("div",null,st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 0"}},st("div",{style:{padding:"0 20px"}},_.isEmpty(t.BANK_LOGO)?st("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:"".concat(ct.svgFolder,"/menu_loan.webp")}):st("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:t.BANK_LOGO?t.BANK_LOGO:null})),st("div",{style:{textAlign:"right",padding:"0 20px"}},st("div",{style:{fontWeight:"bold",fontSize:"1.2em"}},t.CONTRACT_NO||nt.a.t("LoanContracts")),st("div",null,t.LOAN_TYPE||""),t.PERIOD_PAYMENT&&st("div",null,st("span",null,"".concat(nt.a.t("PayPerPeriod")," :"))," ",st("span",null,t.PERIOD_PAYMENT)," ",nt.a.t("THB")),t.PERIOD_BALANCE&&t.PERIOD_ALL&&st("div",null,st("span",null,"".concat(nt.a.t("Period")," :"))," ",st("span",null,t.PERIOD_BALANCE,"/",t.PERIOD_ALL)),st("div",{style:{fontSize:"1.2em"}},st("span",null,"".concat(nt.a.t("LoanBalance")," :"))," ",st("span",{className:"acc-balance",style:{fontWeight:"bold"}},t.BALANCE)," ",st("span",{style:{fontWeight:"bold"}},nt.a.t("THB"))))))))})):st(x.a,{className:"empty-div",description:nt.a.t("DataNotFound"),style:{fontSize:"small"},image:st("picture",null,st("source",{srcSet:"".concat(ct.imageFolder,"/notfound.webp"),type:"image/webp"}),st("source",{srcSet:"".concat(ct.imageFolder,"/notfound.png"),type:"image/png"}),st("img",{alt:"notfound-icon",src:"".concat(ct.imageFolder,"/notfound.png"),type:"image/png",style:{userSelect:"none",opacity:.6}}))}))))}},{key:"onVerify",value:function(){S.default.isAllowSelectedSource;if(this.setState({loadingNext:!0}),_.isEmpty(this.state.myAccount))this.setState({failedVerify:nt.a.t("pleaseSelectAccountForTransactions"),loadingNext:!1});else if(_.isEmpty(this.state.toAccount))this.setState({failedVerify:nt.a.t("pleaseSelectDestinationAccount"),loadingNext:!1});else{(parseFloat(this.state.transferValue)||0)>(_.has(this.state.myAccount,"BALANCE")&&parseFloat(this.state.myAccount.BALANCE)||0)?this.setState({failedVerify:nt.a.t("notEnoughMoneyForTransaction"),loadingNext:!1}):this.getFeeFundTransfer()}}},{key:"renderAccount",value:function(){var t,e,a=this,n=this.props.HIDE_ACCOUNT_NO.data;return st("div",null,st(A.a,{type:"flex"},st(T.a,{xs:24,sm:24,md:24,lg:24,xl:{span:16,offset:4},xxl:{span:16,offset:4},style:{textAlign:"center"}},st("div",{className:"isc-card card-shadow",style:{background:"linear-gradient(0deg, #5c68b7 0%, #4e9ae3 100%)"}},st(A.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}]},st(T.a,{xs:24,sm:24,md:12,lg:12,xl:12,xxl:12,style:{textAlign:"center"}},st(z.a,{onClick:function(){a.setState({select_acc_on:"sender",openSelectAcc:!0})},variant:"text",color:_.isEmpty(this.state.myAccount)?"default":"primary",style:{textTransform:"none",backgroundColor:"white",padding:"20px",height:"100%",minWidth:"50%"}},st("div",null,st("div",null,this.state.myAccount.DEPT_TYPE||nt.a.t("CoopAccount")),st("div",{style:{paddingTop:10}},_.isEmpty(this.state.myAccount)?"xxx-xxx-xxxx":n?this.state.myAccount.DEPTACCOUNT_NO_FORMAT_HIDE:this.state.myAccount.DEPTACCOUNT_NO_FORMAT),st("div",null,this.state.myAccount.BALANCE_FORMAT||"x.xx"))),st("div",{className:"transfer-right-arrow"},st("div",{style:{textAlign:"center"}},st(Y.a,{color:"primary",style:{color:"white"},disableRipple:!0},st(j.a,null))))),st(T.a,{className:"transfer-down-arrow",xs:24,sm:24,md:12,lg:12,xl:{span:8,offset:4},xxl:{span:8,offset:4},style:{textAlign:"center"}},st(v.a,null,st(F.a,{style:{color:"#FFF"}}))),st(T.a,{xs:24,sm:24,md:12,lg:12,xl:12,xxl:12,style:{textAlign:"center"}},st(z.a,{onClick:function(){a.setState({select_acc_on:"receiver",openSelectAcc:!0})},disabled:_.isEmpty(this.state.myAccount),variant:"text",color:_.isEmpty(this.state.toAccount)?"default":"primary",style:{textTransform:"none",backgroundColor:"white",padding:"20px",height:"100%",minWidth:"50%"}},st("div",null,st("div",null,_.isEmpty(this.state.toAccount.BANK_LOGO)?st("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:"".concat(ct.svgFolder,"/menu_loan.webp")}):st("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:this.state.toAccount.BANK_LOGO?this.state.toAccount.BANK_LOGO:null})),st("div",{style:{paddingTop:10}},st("div",{style:{fontSize:"1.2em"}},this.state.toAccount.CONTRACT_NO||nt.a.t("LoanContracts")),st("div",null,this.state.toAccount.LOAN_TYPE||""),this.state.toAccount.CONTRACT_NO&&st("div",{style:{fontSize:"1.2em"}},st("span",null,"".concat(nt.a.t("LoanBalance")," :"))," ",st("span",null,this.state.toAccount.BALANCE)," ",st("span",null,nt.a.t("THB"))))))))),st(A.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}]},st(T.a,{xs:0,sm:0,md:24,lg:24,xl:24,xxl:24,style:{textAlign:"center",paddingTop:40,paddingLeft:8}},st(O.a,{className:"description-table",useFixedHeader:!1,bordered:!1,size:"small",pagination:!1,showHeader:!1,dataSource:[{key:"Value",label:"".concat(nt.a.t("TransactionAmtTHB")," : "),value:st("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end"}},st("div",{style:{marginBottom:10}},st(K.a,{size:"small",variant:"outlined"},st(G.a,(t={id:"transfer-value-outlined",disabled:_.isEmpty(this.state.toAccount)||_.isEmpty(this.state.myAccount),key:"transfer-value",value:this.state.transferValue,onChange:function(t){t.target.value&&parseFloat(t.target.value)>parseFloat(a.state.myAccount.BALANCE)?a.setState({transferValue:a.state.myAccount.BALANCE}):a.setState({transferValue:t.target.value})},placeholder:_.isEmpty(this.state.toAccount)||_.isEmpty(this.state.myAccount)?nt.a.t("pleaseSelectAccountForTransactions"):"0.00",inputProps:{autoComplete:"off"},name:"formatted-numberformat-input"},Object(p.a)(t,"id","formatted-numberformat-input"),Object(p.a)(t,"variant","outlined"),Object(p.a)(t,"onKeyDown",(function(t){"Enter"==t.key&&a.state.transferValue&&a.onVerify()})),Object(p.a)(t,"inputComponent",I.a),t)))),st("div",{style:{marginBottom:10,marginLeft:40}},st(z.a,{disabled:!this.state.transferValue,disableRipple:!!this.state.loadingNext,onClick:function(){!a.state.loadingNext&&a.onVerify()},color:"primary",variant:"contained",endIcon:this.state.loadingNext?st(W.a,{style:{width:"1em",height:"1em",color:"white"}}):st(j.a,null),style:{whiteSpace:"nowrap"}},nt.a.t("Next"))))}],columns:[{title:"label",dataIndex:"label",key:"label",className:"description-label"},{title:"value",dataIndex:"value",key:"value"}]})),st(T.a,{xs:24,sm:24,md:0,lg:0,xl:0,xxl:0,style:{paddingTop:40}},st("div",null,st("div",null,"".concat(nt.a.t("TransactionAmtTHB")," : ")),st("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end"}},st("div",{style:{marginBottom:10,width:"100%"}},st(K.a,{size:"small",variant:"outlined",fullWidth:!0},st(G.a,(e={id:"transfer-value-outlined",disabled:_.isEmpty(this.state.toAccount)||_.isEmpty(this.state.myAccount),key:"transfer-value",value:this.state.transferValue,onChange:function(t){t.target.value&&parseFloat(t.target.value)>parseFloat(a.state.myAccount.BALANCE)?a.setState({transferValue:a.state.myAccount.BALANCE}):a.setState({transferValue:t.target.value})},placeholder:_.isEmpty(this.state.toAccount)||_.isEmpty(this.state.myAccount)?nt.a.t("pleaseSelectAccountForTransactions"):"0.00",inputProps:{autoComplete:"off"},name:"formatted-numberformat-input"},Object(p.a)(e,"id","formatted-numberformat-input"),Object(p.a)(e,"variant","outlined"),Object(p.a)(e,"onKeyDown",(function(t){"Enter"==t.key&&a.state.transferValue&&a.onVerify()})),Object(p.a)(e,"inputComponent",I.a),e)))),st("div",{style:{marginBottom:10,marginLeft:40}},st(z.a,{disabled:!this.state.transferValue,disableRipple:!!this.state.loadingNext,onClick:function(){!a.state.loadingNext&&a.onVerify()},color:"primary",variant:"contained",endIcon:this.state.loadingNext?st(W.a,{style:{width:"1em",height:"1em",color:"white"}}):st(j.a,null),style:{whiteSpace:"nowrap"}},nt.a.t("Next"))))))),st(Q.a,{in:!!this.state.failedVerify},st(X.a,{in:!!this.state.failedVerify},st(A.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}]},st(T.a,{xs:24,sm:24,md:24,lg:24,xl:24,xxl:24,style:{textAlign:"center",paddingTop:24}},st("div",null,st(k.a,{severity:"error",style:{position:"relative"},onClick:function(){a.setState({failedVerify:null})}},st(B.a,{style:{cursor:"pointer",position:"absolute",top:10,right:10}}),st(H.a,{style:{textAlign:"left"}},this.state.failedVerify))))))))))}},{key:"render",value:function(){var t,e,a,n,i,s,l,o,r,c,d=this,u=this.props.HIDE_ACCOUNT_NO.data;return this.state.statusCode>=300&&this.state.statusCode<500?st(R.default,{statusCode:this.state.statusCode,err:this.state.errData,showModalLogout:function(){return d.props.showModalLogout()}}):st("div",{className:"main-layout",style:{position:"relative"}},st("div",{style:{width:"100%"}},st(P.a,{checked:!this.state.loading||!this.state.isInitialLoading}),st(g.a,null,st("link",{rel:"stylesheet",href:"".concat(ct.cssFolder,"/transfer.css")})),st(et.a,{isOpen:!!this.state.alertData.isOpen,title:this.state.alertData.title,description:this.state.alertData.detail,type:this.state.alertData.type,svgIcon:this.state.alertData.icon,loading:!!this.state.alertData.loading,onClose:this.state.alertData.onClose,onConfirm:this.state.alertData.onConfirm,confirmText:this.state.alertData.confirmText,cancelText:this.state.alertData.cancelText,disabledConfirm:!!this.state.alertData.disabledConfirm}),this.renderModalSelectAccount(),st("div",{className:"main-content",style:{width:"100%"}},st("div",{className:"sub-content",style:{display:"flex",flexDirection:"column",padding:0}},st("div",{className:"sub-content",style:{flex:1,width:"100%"}},st(A.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}]},st(T.a,{xs:24,sm:24,md:24,lg:24,xl:{span:16,offset:4},xxl:{span:16,offset:4}},st(at.a,{th:"\u0e42\u0e2d\u0e19\u0e40\u0e07\u0e34\u0e19\u0e1d\u0e32\u0e01\u0e0a\u0e33\u0e23\u0e30\u0e2b\u0e19\u0e35\u0e49",en:"Transfer payment loan"}))),st(A.a,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}]},st(T.a,{xs:24,sm:24,md:24,lg:24,xl:{span:16,offset:4},xxl:{span:16,offset:4},style:{textAlign:"center"}},st(J.a,{style:{backgroundColor:"transparent"},color:"second",activeStep:this.state.currentStep,alternativeLabel:!0},st(q.a,null,st(Z.a,{disabled:1!=this.state.currentStep,onClick:function(){return d.setState({currentStep:0})}},nt.a.t("FillInfo"))),st(q.a,null,st(Z.a,{disabled:!0},nt.a.t("CheckInfo"))),st(q.a,null,st(Z.a,{disabled:!0},nt.a.t("SuccessfulTransfer")))))),st("div",{style:{padding:"40px 0"}},0==this.state.currentStep?this.renderAccount():1==this.state.currentStep?st("div",null,st(A.a,{type:"flex",gutter:[{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48},{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48}]},st(T.a,{className:"card-shadow isc-card",xs:24,sm:24,md:{span:12,offset:6},lg:{span:12,offset:6},xl:{span:12,offset:6},xxl:{span:8,offset:8}},st("div",{style:{textAlign:"center",fontSize:"1.5em",fontWeight:"bold"}},nt.a.t("CheckInfo")),st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:20}},st("div",null,st("picture",null,st("source",{srcSet:"".concat(ct.logoFolder,"/logo.webp"),type:"image/webp"}),st("source",{srcSet:"".concat(ct.logoFolder,"/logo.png"),type:"image/png"}),st("img",{alt:"coop-icon",src:"".concat(ct.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}}))),st("div",{style:{textAlign:"right"}},st("div",null,this.state.myAccount.DEPTACCOUNT_NAME||"-"),st("div",{style:{paddingTop:10}},_.isEmpty(this.state.myAccount)?"xxx-xxx-xxxx":u?this.state.myAccount.DEPTACCOUNT_NO_FORMAT_HIDE:this.state.myAccount.DEPTACCOUNT_NO_FORMAT))),st(v.a,null,st(F.a,{style:{color:"grey"}})),st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},st("div",null,_.isEmpty(this.state.toAccount.BANK_LOGO)?st("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:"".concat(ct.svgFolder,"/menu_loan.webp")}):st("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:this.state.toAccount.BANK_LOGO?this.state.toAccount.BANK_LOGO:null})),st("div",{style:{textAlign:"right"}},st("div",null,this.state.toAccount&&this.state.toAccount.LOAN_TYPE||nt.a.t("LoanContracts")),st("div",{style:{paddingTop:10}},this.state.toAccount.CONTRACT_NO||"xxx-xxx-xxxx"))),(null===(t=this.state.confirmData)||void 0===t?void 0:t.BF_BAL)&&st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:24}},st("div",null,nt.a.t("RemainingDeptbeforPayment")),st("div",{style:{textAlign:"right"}},st("span",null,Object(I.m)(this.state.confirmData.BF_BAL)||"0.00")," ",nt.a.t("THB"))),(null===(e=this.state.confirmData)||void 0===e?void 0:e.BF_INT)&&st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12}},st("div",null,nt.a.t("OutstandingInt")),st("div",{style:{textAlign:"right"}},st("span",null,Object(I.m)(this.state.confirmData.BF_INT)||"0.00")," ",nt.a.t("THB"))),(null===(a=this.state.confirmData)||void 0===a?void 0:a.PERIOD)&&st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12}},st("div",null,nt.a.t("Period")),st("div",{style:{textAlign:"right"}},st("span",null,this.state.confirmData.PERIOD||""))),(null===(n=this.state.confirmData)||void 0===n?void 0:n.INT_PERIOD)&&st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12}},st("div",null,nt.a.t("IntInThisPeriod")),st("div",{style:{textAlign:"right"}},st("span",null,Object(I.m)(this.state.confirmData.INT_PERIOD)||"0.00")," ",nt.a.t("THB"))),!!this.state.feeAMT&&st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12}},st("div",null,nt.a.t("Fee")),st("div",{style:{textAlign:"right"}},st("span",{style:{color:"var(--red-text-color)"}},Object(I.m)(this.state.feeAMT&&this.state.feeAMT||"0.00"))," ",nt.a.t("THB"))),!!this.state.penaltyAMT&&st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12}},st("div",null,nt.a.t("PenaltyCoop")),st("div",{style:{textAlign:"right"}},st("span",{style:{color:"var(--red-text-color)"}},Object(I.m)(this.state.penaltyAMT&&this.state.penaltyAMT||"0.00"))," ",nt.a.t("THB"))),st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",paddingTop:12}},st("div",null,nt.a.t("Amount")),st("div",{style:{textAlign:"right"}},st("div",{style:{fontSize:"1.2em"}},st("span",{style:{color:"var(--balance-text-color)"}},Object(I.m)(this.state.transferValue)||"0.00")," ",nt.a.t("THB")),(null===(i=this.state.confirmData)||void 0===i?void 0:i.PAYMENT_PRIN)&&st("div",null,"( ",nt.a.t("Principle")," ",st("span",null,this.state.confirmData.PAYMENT_PRIN||"0.00")," / ",nt.a.t("Interest")," ",st("span",null,this.state.confirmData.PAYMENT_INT||"0.00")," )"))),st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:24}},st(K.a,{size:"small",variant:"standard",fullWidth:!0},st($.a,null,nt.a.t("Memo")),st(tt.a,{key:"transfer-value",value:this.state.transferRemark,label:nt.a.t("Memo"),onChange:function(t){d.setState({transferRemark:t.target.value})},inputProps:{autoComplete:"off"},name:"transferRemark-input",id:"transferRemark-input"}))),st("div",{style:{paddingTop:32}},st(z.a,{disableRipple:!!this.state.loadingConfirm,onClick:function(){!d.state.loadingConfirm&&(S.default.transactionOTP?d.props.onOTPTransfer(MEMBER_INFO.data&&MEMBER_INFO.data.PHONE.replace(/\s/g,""),MEMBER_INFO.data&&MEMBER_INFO.data.MEMBER_NO,Object(I.i)(E.a.pathname)):d.FundTransfer())},color:"primary",variant:"contained",size:"large",fullWidth:!0,endIcon:this.state.loadingConfirm&&st(W.a,{style:{width:"1em",height:"1em",color:"white"}})},nt.a.t("Confirm"))),st("div",{style:{marginTop:16}},st(z.a,{onClick:function(){d.setState({currentStep:0})},color:"default",variant:"text",fullWidth:!0,style:{whiteSpace:"nowrap"}},nt.a.t("Back"))),st(Q.a,{in:!!this.state.failedTransfer},st(X.a,{in:!!this.state.failedTransfer},st("div",null,st(k.a,{severity:"error",style:{position:"relative",marginTop:24},onClick:function(){d.setState({failedTransfer:null})}},st(B.a,{style:{cursor:"pointer",position:"absolute",top:10,right:10}}),st(H.a,{style:{textAlign:"left"}},this.state.failedTransfer)))))))):st("div",null,st(A.a,{type:"flex",gutter:[{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48},{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48}]},st(T.a,{className:"card-shadow isc-card",xs:24,sm:24,md:{span:12,offset:6},lg:{span:12,offset:6},xl:{span:12,offset:6},xxl:{span:8,offset:8}},st("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},st("div",{style:{textAlign:"center",fontSize:"1.5em",fontWeight:"bold"}},nt.a.t("SuccessfulTransaction")),st("div",{className:"success-slip-icon",style:{marginLeft:10,fontSize:"x-large",color:"white",height:"1em",width:"1em",borderRadius:"1em",right:"0",top:"0",background:"var(--gd-success-color)",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",position:"relative"}},st(N.a,{type:"check",style:{position:"relative",fontSize:"small"}}),st("div",{className:"success-slip-overlay",style:{fontSize:"x-large",color:"white",height:"1.5em",width:"1.5em",borderRadius:"1.5em",right:"0",top:"0",background:"var(--gd-success-color)",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute"}}))),st("div",{style:{paddingBottom:"10px"}},st(A.a,{type:"flex",gutter:{xs:1,sm:1,md:1,lg:2,xl:2},style:{padding:"0px 20px"}},st(T.a,{span:24,style:{textAlign:"center"}},this.state.transaction_date)),st(A.a,{type:"flex",gutter:{xs:1,sm:1,md:1,lg:2,xl:2},align:"middle",style:{padding:"10px 20px 0px 20px"}},st(T.a,{span:24,style:{display:"flex",flexDirection:"column",alignItems:"center"}},"".concat(nt.a.t("RefNo")," : ")+this.state.slip_no))),st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:20}},st("div",null,st("picture",null,st("source",{srcSet:"".concat(ct.logoFolder,"/logo.webp"),type:"image/webp"}),st("source",{srcSet:"".concat(ct.logoFolder,"/logo.png"),type:"image/png"}),st("img",{alt:"coop-icon",src:"".concat(ct.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}}))),st("div",{style:{textAlign:"right"}},st("div",null,this.state.myAccount.DEPTACCOUNT_NAME||"-"),st("div",{style:{paddingTop:10}},_.isEmpty(this.state.myAccount)?"xxx-xxx-xxxx":u?this.state.myAccount.DEPTACCOUNT_NO_FORMAT_HIDE:this.state.myAccount.DEPTACCOUNT_NO_FORMAT))),st(v.a,null,st(F.a,{style:{color:"grey"}})),st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},st("div",null,_.isEmpty(this.state.myAccount.BANK_LOGO)?st("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:"".concat(ct.svgFolder,"/menu_loan.webp")}):st("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:this.state.myAccount.BANK_LOGO?this.state.myAccount.BANK_LOGO:null})),st("div",{style:{textAlign:"right"}},st("div",null,this.state.toAccount&&this.state.toAccount.LOAN_TYPE||"\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e1b\u0e25\u0e32\u0e22\u0e17\u0e32\u0e07"),st("div",{style:{paddingTop:10}},this.state.toAccount.CONTRACT_NO||"xxx-xxx-xxxx"))),(null===(s=this.state.confirmData)||void 0===s?void 0:s.BF_BAL)&&st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:24}},st("div",null,nt.a.t("RemainingDeptbeforPayment")),st("div",{style:{textAlign:"right"}},st("span",null,Object(I.m)(this.state.confirmData.BF_BAL)||"0.00")," ",nt.a.t("THB"))),(null===(l=this.state.confirmData)||void 0===l?void 0:l.BF_INT)&&st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12}},st("div",null,nt.a.t("OutstandingInt")),st("div",{style:{textAlign:"right"}},st("span",null,Object(I.m)(this.state.confirmData.BF_INT)||"0.00")," ",nt.a.t("THB"))),(null===(o=this.state.confirmData)||void 0===o?void 0:o.PERIOD)&&st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12}},st("div",null,nt.a.t("Period")),st("div",{style:{textAlign:"right"}},st("span",null,this.state.confirmData.PERIOD||""))),(null===(r=this.state.confirmData)||void 0===r?void 0:r.INT_PERIOD)&&st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12}},st("div",null,nt.a.t("IntInThisPeriod")),st("div",{style:{textAlign:"right"}},st("span",null,Object(I.m)(this.state.confirmData.INT_PERIOD)||"0.00")," ",nt.a.t("THB"))),!!this.state.feeAMT&&st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12}},st("div",null,nt.a.t("Fee")),st("div",{style:{textAlign:"right"}},st("span",{style:{color:"var(--red-text-color)"}},Object(I.m)(this.state.feeAMT&&this.state.feeAMT||"0.00"))," ",nt.a.t("THB"))),!!this.state.penaltyAMT&&st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12}},st("div",null,nt.a.t("PenaltyCoop")),st("div",{style:{textAlign:"right"}},st("span",{style:{color:"var(--red-text-color)"}},Object(I.m)(this.state.penaltyAMT&&this.state.penaltyAMT||"0.00"))," ",nt.a.t("THB"))),st("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",paddingTop:12}},st("div",null,nt.a.t("Amount")),st("div",{style:{textAlign:"right"}},st("div",{style:{fontSize:"1.2em"}},st("span",{style:{color:"var(--balance-text-color)"}},Object(I.m)(this.state.transferValue)||"0.00")," ",nt.a.t("THB")),(null===(c=this.state.confirmData)||void 0===c?void 0:c.PAYMENT_PRIN)&&st("div",null,"( ",nt.a.t("Principle")," ",st("span",null,this.state.confirmData.PAYMENT_PRIN||"0.00")," / ",nt.a.t("Interest")," ",st("span",null,this.state.confirmData.PAYMENT_INT||"0.00")," )"))),this.state.transferRemark&&st("div",{style:{paddingTop:24}},st("div",{style:{fontSize:"smaller"}},nt.a.t("Memo")),st("div",null,this.state.transferRemark)),st("div",{style:{paddingTop:32}},st(z.a,{onClick:function(){E.a.push("".concat(ct.prefixPath))},color:"primary",variant:"outlined",size:"large",fullWidth:!0,endIcon:this.state.loadingConfirm&&st(W.a,{style:{width:"1em",height:"1em",color:"white"}})},nt.a.t("ReturnMainPage")))))))),st(L.a,null)))))}}]),a}(f.PureComponent));e.default=Object(M.b)((function(t){return{HIDE_ACCOUNT_NO:t.HIDE_ACCOUNT_NO,MEMBER_INFO:t.MEMBER_INFO,MENU_LIST:t.MENU_LIST,HISTORY_BADGE:t.HISTORY_BADGE}}),(function(t){return{}}))(Object(it.c)()(dt))}},[["Uksg",0,2,3,5,8,7,9,1,4,6,10,11,12,13,14,15,16,17,22]]]);