(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6280],{8171:function(t,e,n){"use strict";n.r(e);var s=n(30266),i=n(68216),a=n(25997),l=n(14695),o=n(13444),r=n(30268),c=n(92953),d=n(92809),x=n(809),u=n.n(x),h=n(67294),p=n(9008),f=n(14277),m=n(71230),g=n(15746),y=n(27049),A=n(90656),j=n(83681),T=n(11163),v=n(13706),N=n(94141),C=n(17817),Z=n(33330),E=n(11752),S=n(41561),O=n(28216),w=n(52034),b=n.n(w),D=n(59544),F=n(38607),M=n(92562),k=n(52210),I=n(78715),P=n(37155),R=n(59143),B=n(32692),U=n(17812),L=n(282),V=n(64436),H=n(95477),z=n(66718),G=n(66037),K=n(73637),W=n(67661),Y=n(91594),X=n(10465),$=n(43700),q=n(38799),J=n(7734),Q=n(58724),tt=n(62045),et=n(8801),nt=n(85893);function st(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function it(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?st(Object(n),!0).forEach((function(e){(0,d.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):st(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function at(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=(0,c.Z)(t);if(e){var i=(0,c.Z)(this).constructor;n=Reflect.construct(s,arguments,i)}else n=s.apply(this,arguments);return(0,r.Z)(this,n)}}var lt=(0,E.default)().publicRuntimeConfig,ot=function(t){(0,o.Z)(n,t);var e=at(n);function n(t){var a,o;return(0,i.Z)(this,n),o=e.call(this,t),(0,d.Z)((0,l.Z)(o),"fetchAllowAccount",(0,s.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o.setState({loading:!0}),e={menu_component:"TransferDepInsideCoop"},v.Z.fetchAllowAccountTransfer(e).then((function(t){if(t.RESULT){var e=[];if(t.FORMAT_DEPT)t.FORMAT_DEPT.split("-").map((function(t){e.push(t.length)}));o.setState({accArr:t.ACCOUNT_ALLOW,favArr:t.ACCOUNT_FAV||[],dept_format:e},(function(){o.state.accArr[0]&&o.setState({myAccount:o.state.accArr[0],onSelectAccList:0,transferValue:null})}))}else o.setState(it({},o.props.checkResultFalseMessage(t,{},tt.Z.t("SavingAccNotFound"))));o.setState({loading:!1,isInitialLoading:!1})})).catch((function(t){o.setState({loading:!1,isInitialLoading:!1}),o.setState(it({},o.props.checkCatchMessage(t)))}));case 3:case"end":return t.stop()}}),t)})))),(0,d.Z)((0,l.Z)(o),"getFeeFundTransfer",(0,s.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o.setState({loadingNext:!0,failedVerify:null}),e={deptaccount_no:o.state.myAccount.DEPTACCOUNT_NO,amt_transfer:o.state.transferValue,menu_component:"TransferDepInsideCoop"},v.Z.FeefundTransfer(e).then((function(t){t.RESULT?t.CAUTION?o.setState({alertData:{isOpen:!0,title:null,detail:t.CAUTION.RESPONSE_MESSAGE,type:"confirm",icon:null,loading:!1,onClose:function(){o.setState({alertData:{}})},onConfirm:function(){o.setState({penaltyAMT:t.PENALTY_AMT,feeAMT:t.FEE_AMT,failedTransfer:null,currentStep:1,alertData:{}})},confirmText:t.CAUTION.CONFIRM_TEXT,cancelText:t.CAUTION.CANCEL_TEXT,disabledConfirm:!t.CAUTION.CONFIRM_TEXT}}):o.setState({penaltyAMT:t.PENALTY_AMT,feeAMT:t.FEE_AMT,failedTransfer:null,currentStep:1}):o.setState({penaltyAMT:null,feeAMT:null,failedVerify:t.RESPONSE_MESSAGE?t.RESPONSE_MESSAGE:tt.Z.t("ErrorAndTryagain")}),o.setState({loadingNext:!1})})).catch((function(t){o.setState({loadingNext:!1}),o.setState({penaltyAMT:null,feeAMT:null,failedVerify:tt.Z.t("ErrorAndTryagain")})}));case 3:case"end":return t.stop()}}),t)})))),(0,d.Z)((0,l.Z)(o),"FundTransfer",(0,s.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o.setState({loadingConfirm:!0,failedTransfer:null}),e={from_deptaccount_no:o.state.myAccount.DEPTACCOUNT_NO,to_deptaccount_no:o.state.toAccount.DEPTACCOUNT_NO,amt_transfer:o.state.transferValue,penalty_amt:o.state.penaltyAMT,fee_amt:o.state.feeAMT,remark:o.state.transferRemark,menu_component:"TransferDepInsideCoop"},v.Z.fundTransferInCoop(e).then((function(t){t.RESULT?o.setState({slip_no:t.TRANSACTION_NO,transaction_date:t.TRANSACTION_DATE,currentStep:2}):o.setState({failedTransfer:t.RESPONSE_MESSAGE?t.RESPONSE_MESSAGE:tt.Z.t("FailedAndTryagain")}),o.setState({loadingConfirm:!1})})).catch((function(t){o.setState({loadingConfirm:!1}),o.setState({failedTransfer:tt.Z.t("FailedAndTryagain")})}));case 3:case"end":return t.stop()}}),t)})))),(0,d.Z)((0,l.Z)(o),"fetchDesAccount",(0,s.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o.setState({loadingDes:!0,failedVerify:null}),e={source_deptaccount_no:o.state.myAccount.DEPTACCOUNT_NO,deptaccount_no:o.state.transferAccNo,menu_component:"TransferDepInsideCoop"},v.Z.fetchAccountDestination(e).then((function(t){t.RESULT?o.setState({onSelectedTo:!0,toAccount:t.ACCOUNT_DATA,onSelectAccList:3}):o.setState({failedVerify:t.RESPONSE_MESSAGE?t.RESPONSE_MESSAGE:tt.Z.t("ErrorAndTryagain")}),o.setState({loadingDes:!1})})).catch((function(t){o.setState({loadingDes:!1}),o.setState({failedVerify:tt.Z.t("ErrorAndTryagain")})}));case 3:case"end":return t.stop()}}),t)})))),(0,d.Z)((0,l.Z)(o),"onPressSelectedCustomAccount",(function(t){var e=t.item,n=(t.index,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"sender");"sender"==n?o.setState({myAccount:e,transferValue:"",openSelectAcc:!1}):o.setState({toAccount:e,openSelectAcc:!1})})),o.state=(a={statusCode:200,errData:null,loading:!0,notifyOn:0,pathName:"",transferValue:null,accArr:[],favArr:[],myAccount:{},toAccount:{},onSelectAccList:1,isShowSlip:!1,transferAccNo:null,onSelectedTo:!1,dept_format:[],isConfirmTrans:!1,feeAMT:null,penaltyAMT:null,loadingTransfer:!1,loadingFund:!1,slip_no:"",transaction_date:"",isInitialLoading:!0},(0,d.Z)(a,"transaction_date",""),(0,d.Z)(a,"currentStep",0),(0,d.Z)(a,"openSelectAcc",!1),(0,d.Z)(a,"select_acc_on","sender"),(0,d.Z)(a,"transferRemark",null),(0,d.Z)(a,"alertData",{}),a),o}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){this.setState({pathName:(0,N.tk)(T.default.pathname)}),this.fetchAllowAccount()}},{key:"componentDidUpdate",value:function(t,e){0==t.isSuccessOTP&&1==this.props.isSuccessOTP&&this.FundTransfer()}},{key:"renderModalSelectAccount",value:function(){var t,e,n=this,s=this.props.HIDE_ACCOUNT_NO.data,i=this.state.select_acc_on,a="sender"==i?null!==(t=this.state.accArr)&&void 0!==t?t:[]:(null!==(e=this.state.accArr)&&void 0!==e?e:[]).filter((function(t){return _.isEmpty(n.state.myAccount)?t:t.DEPTACCOUNT_NO!=n.state.myAccount.DEPTACCOUNT_NO}));return(0,nt.jsx)(R.Z,{open:this.state.openSelectAcc,onClose:function(){n.setState({openSelectAcc:!1})},closeAfterTransition:!0,BackdropComponent:B.Z,BackdropProps:{timeout:500},style:{},children:(0,nt.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",overflow:"auto",width:"100%",height:"100vh",padding:"20px 0"},children:[(0,nt.jsx)("div",{style:{position:"absolute",top:20,right:40,zIndex:3},children:(0,nt.jsx)(U.Z,{onClick:function(){n.setState({openSelectAcc:!1})},style:{backgroundColor:"rgba(255,255,255,0.5)"},children:(0,nt.jsx)(D.Z,{})})}),(0,nt.jsx)("div",{onClick:function(){n.setState({openSelectAcc:!1})},style:{position:"fixed",top:0,right:0,width:"100%",height:"100%"}}),(0,nt.jsxs)("div",{className:"sub-content",style:{backgroundColor:"white",margin:"auto",minHeight:"unset",width:"unset",zIndex:2},children:[(0,nt.jsx)("div",{style:{paddingBottom:20,position:"sticky",top:60},children:(0,nt.jsx)("div",{style:{fontSize:"1.2em",textDecoration:"underline",backgroundColor:"white"},children:tt.Z.t("SelectAcc")})}),a.length>0?a.map((function(t,e){return"sender"==i?(0,nt.jsx)("div",{style:{marginBottom:20},children:(0,nt.jsx)(L.Z,{onClick:function(){n.onPressSelectedCustomAccount({item:t,index:e},i)},color:n.state.myAccount.DEPTACCOUNT_NO==t.DEPTACCOUNT_NO?"primary":"default",variant:"outlined",style:{textTransform:"none"},children:(0,nt.jsxs)("div",{style:{padding:"20px 0"},children:[(0,nt.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:t.DEPT_TYPE||"-"}),(0,nt.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,nt.jsxs)("div",{style:{padding:"0 20px",textAlign:"left"},children:[(0,nt.jsx)("div",{style:{paddingTop:10},children:(s?t.DEPTACCOUNT_NO_FORMAT_HIDE:t.DEPTACCOUNT_NO_FORMAT)||"xxx-xxx-xxxx"}),(0,nt.jsx)("div",{children:t.DEPTACCOUNT_NAME||""})]}),(0,nt.jsxs)("div",{style:{textAlign:"right",padding:"0 20px"},children:[(0,nt.jsx)("div",{style:{paddingTop:10},children:tt.Z.t("WithdrawableAmtTHB")}),(0,nt.jsx)("div",{className:"highlight-text",style:{fontSize:"1.2em"},children:t.BALANCE_FORMAT||"-"})]})]})]})})},e):(0,nt.jsx)("div",{style:{marginBottom:20},children:(0,nt.jsx)(L.Z,{onClick:function(){n.onPressSelectedCustomAccount({item:t,index:e},i)},disabled:n.state.myAccount.DEPTACCOUNT_NO==t.DEPTACCOUNT_NO,color:n.state.toAccount.DEPTACCOUNT_NO==t.DEPTACCOUNT_NO?"primary":"default",variant:"outlined",style:{textTransform:"none"},children:(0,nt.jsx)("div",{children:(0,nt.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 0"},children:[(0,nt.jsx)("div",{style:{padding:"0 20px"},children:_.isEmpty(t.BANK_LOGO)?(0,nt.jsxs)("picture",{children:[(0,nt.jsx)("source",{srcSet:"".concat(lt.logoFolder,"/logo.webp"),type:"image/webp"}),(0,nt.jsx)("source",{srcSet:"".concat(lt.logoFolder,"/logo.png"),type:"image/png"}),(0,nt.jsx)("img",{alt:"coop-icon",src:"".concat(lt.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}})]}):(0,nt.jsx)("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:t.BANK_LOGO?t.BANK_LOGO:null})}),(0,nt.jsxs)("div",{style:{textAlign:"right",padding:"0 20px"},children:[(0,nt.jsx)("div",{children:t.DEPTACCOUNT_NO_FORMAT||"xxx-xxx-xxxx"}),(0,nt.jsx)("div",{children:t.DEPTACCOUNT_NAME||""})]})]})})})},e)})):(0,nt.jsx)(f.Z,{className:"empty-div",description:tt.Z.t("DataNotFound"),style:{fontSize:"small"},image:(0,nt.jsxs)("picture",{children:[(0,nt.jsx)("source",{srcSet:"".concat(lt.imageFolder,"/notfound.webp"),type:"image/webp"}),(0,nt.jsx)("source",{srcSet:"".concat(lt.imageFolder,"/notfound.png"),type:"image/png"}),(0,nt.jsx)("img",{alt:"notfound-icon",src:"".concat(lt.imageFolder,"/notfound.png"),type:"image/png",style:{userSelect:"none",opacity:.6}})]})})]})]})})}},{key:"onVerify",value:function(){C.default.isAllowSelectedSource;if(this.setState({loadingNext:!0}),_.isEmpty(this.state.myAccount))this.setState({failedVerify:tt.Z.t("pleaseSelectAccountForTransactions"),loadingNext:!1});else if(_.isEmpty(this.state.toAccount))this.setState({failedVerify:tt.Z.t("pleaseSelectDestinationAccount"),loadingNext:!1});else{(parseFloat(this.state.transferValue)||0)>(_.has(this.state.myAccount,"BALANCE")&&parseFloat(this.state.myAccount.BALANCE)||0)?this.setState({failedVerify:tt.Z.t("notEnoughMoneyForTransaction"),loadingNext:!1}):this.getFeeFundTransfer()}}},{key:"renderAccount",value:function(){var t,e,n,s,i=this,a=this.props.HIDE_ACCOUNT_NO.data;return(0,nt.jsx)("div",{children:(0,nt.jsx)(m.Z,{type:"flex",children:(0,nt.jsxs)(g.Z,{xs:24,sm:24,md:24,lg:24,xl:{span:16,offset:4},xxl:{span:16,offset:4},style:{textAlign:"center"},children:[(0,nt.jsx)("div",{className:"isc-card card-shadow",style:{background:"linear-gradient(0deg, #5c68b7 0%, #4e9ae3 100%)"},children:(0,nt.jsxs)(m.Z,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}],children:[(0,nt.jsxs)(g.Z,{xs:24,sm:24,md:12,lg:12,xl:12,xxl:12,style:{textAlign:"center"},children:[(0,nt.jsx)(L.Z,{onClick:function(){i.setState({select_acc_on:"sender",openSelectAcc:!0})},variant:"outlined",color:_.isEmpty(this.state.myAccount)?"default":"primary",style:{textTransform:"none",backgroundColor:"white",padding:"20px",height:"100%",minWidth:"50%"},children:(0,nt.jsxs)("div",{children:[(0,nt.jsx)("div",{children:this.state.myAccount.DEPT_TYPE||tt.Z.t("CoopAccount")}),(0,nt.jsx)("div",{style:{paddingTop:10},children:_.isEmpty(this.state.myAccount)?"xxx-xxx-xxxx":a?this.state.myAccount.DEPTACCOUNT_NO_FORMAT_HIDE:this.state.myAccount.DEPTACCOUNT_NO_FORMAT}),(0,nt.jsx)("div",{children:this.state.myAccount.BALANCE_FORMAT||"x.xx"})]})}),(0,nt.jsx)("div",{className:"transfer-right-arrow",children:(0,nt.jsx)("div",{style:{textAlign:"center"},children:(0,nt.jsx)(U.Z,{color:"primary",style:{color:"white"},disableRipple:!0,children:(0,nt.jsx)(F.Z,{})})})})]}),(0,nt.jsx)(g.Z,{className:"transfer-down-arrow",xs:24,sm:24,md:12,lg:12,xl:{span:8,offset:4},xxl:{span:8,offset:4},style:{textAlign:"center"},children:(0,nt.jsx)(y.Z,{children:(0,nt.jsx)(M.Z,{style:{color:"#FFF"}})})}),(0,nt.jsx)(g.Z,{xs:24,sm:24,md:12,lg:12,xl:12,xxl:12,style:{textAlign:"center"},children:(0,nt.jsx)(L.Z,{onClick:function(){document.getElementById("input-accountno")&&document.getElementById("input-accountno").focus()},variant:"outlined",color:_.isEmpty(this.state.toAccount)?"default":"primary",style:{textTransform:"none",backgroundColor:"white",padding:"20px",height:"100%",minWidth:"50%"},children:(0,nt.jsxs)("div",{children:[(0,nt.jsx)("div",{children:_.isEmpty(this.state.toAccount.BANK_LOGO)?(0,nt.jsxs)("picture",{children:[(0,nt.jsx)("source",{srcSet:"".concat(lt.logoFolder,"/logo.webp"),type:"image/webp"}),(0,nt.jsx)("source",{srcSet:"".concat(lt.logoFolder,"/logo.png"),type:"image/png"}),(0,nt.jsx)("img",{alt:"coop-icon",src:"".concat(lt.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}})]}):(0,nt.jsx)("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:this.state.toAccount.BANK_LOGO?this.state.toAccount.BANK_LOGO:null})}),(0,nt.jsxs)("div",{style:{paddingTop:10},children:[(0,nt.jsx)("div",{children:null===(t=this.state.toAccount)||void 0===t?void 0:t.ACCOUNT_NAME}),(0,nt.jsx)("div",{children:(null===(e=this.state.toAccount)||void 0===e?void 0:e.DEPTACCOUNT_NO_FORMAT)||this.state.transferAccNoFormat||"xxx-xxx-xxxx"})]})]})})})]})}),(0,nt.jsxs)(m.Z,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}],children:[(0,nt.jsx)(g.Z,{xs:0,sm:0,md:24,lg:24,xl:24,xxl:24,style:{textAlign:"center",paddingTop:40,paddingLeft:8},children:(0,nt.jsx)(A.Z,{className:"description-table",useFixedHeader:!1,bordered:!1,size:"small",pagination:!1,showHeader:!1,dataSource:[{key:"accNo",label:"".concat(tt.Z.t("ToAccountNo")," : "),value:(0,nt.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start"},children:[(0,nt.jsx)("div",{style:{marginBottom:10},children:(0,nt.jsx)(V.Z,{size:"small",variant:"outlined",children:this.state.dept_format.length>0?(0,nt.jsx)(b(),{id:"input-accountno",disabled:!(this.state.myAccount&&!this.state.loadingDes),name:"transferAccNo",className:"cleave-input-number ant-input-number",placeholder:_.isEmpty(this.state.myAccount)?tt.Z.t("pleaseSelectAccountForTransactions"):tt.Z.t("EnterDesAccountNo"),options:{numericOnly:!0,blocks:this.state.dept_format,delimiter:"-"},value:this.state.transferAccNo||"",onChange:function(t){return i.setState({transferAccNo:t.target.rawValue,transferAccNoFormat:t.target.value})},onKeyDown:function(t){"Enter"==t.key&&i.state.transferAccNo&&i.fetchDesAccount()}}):(0,nt.jsx)(b(),{id:"input-accountno",disabled:!(this.state.myAccount&&!this.state.loadingDes),name:"transferAccNo",className:"cleave-input-number ant-input-number",placeholder:_.isEmpty(this.state.myAccount)?tt.Z.t("pleaseSelectAccountForTransactions"):tt.Z.t("EnterDesAccountNo"),options:{numericOnly:!0,blocks:[3,2,5],delimiter:"-"},value:this.state.transferAccNo||"",onChange:function(t){return i.setState({transferAccNo:t.target.rawValue,transferAccNoFormat:t.target.value})},onKeyDown:function(t){"Enter"==t.key&&i.state.transferAccNo&&i.fetchDesAccount()}})})}),(0,nt.jsx)("div",{style:{marginBottom:10,marginLeft:40},children:(0,nt.jsx)(L.Z,{disabled:!this.state.transferAccNo||_.isEmpty(this.state.myAccount)||!!this.state.loadingDes,disableRipple:!!this.state.loadingDes,onClick:function(){!i.state.loadingDes&&i.fetchDesAccount()},color:"primary",variant:"contained",endIcon:this.state.loadingDes?(0,nt.jsx)(H.Z,{style:{width:"1em",height:"1em",color:"white"}}):(0,nt.jsx)(F.Z,{}),style:{whiteSpace:"nowrap"},children:tt.Z.t("CheckTransfer")})})]})},!_.isEmpty(this.state.toAccount)&&{key:"Value",label:"".concat(tt.Z.t("TransactionAmtTHB")," : "),value:(0,nt.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end"},children:[(0,nt.jsx)("div",{style:{marginBottom:10},children:(0,nt.jsx)(V.Z,{size:"small",variant:"outlined",children:(0,nt.jsx)(z.Z,(n={id:"transfer-value-outlined",disabled:_.isEmpty(this.state.myAccount),value:this.state.transferValue,onChange:function(t){t.target.value&&parseFloat(t.target.value)>parseFloat(i.state.myAccount.BALANCE)?i.setState({transferValue:i.state.myAccount.BALANCE}):i.setState({transferValue:t.target.value})},placeholder:_.isEmpty(this.state.myAccount)?tt.Z.t("pleaseSelectAccountForTransactions"):"0.00",inputProps:{autoComplete:"off"},name:"formatted-numberformat-input"},(0,d.Z)(n,"id","formatted-numberformat-input"),(0,d.Z)(n,"variant","outlined"),(0,d.Z)(n,"onKeyDown",(function(t){"Enter"==t.key&&i.state.transferValue&&i.onVerify()})),(0,d.Z)(n,"inputComponent",N.ad),n),"transfer-value")})}),(0,nt.jsx)("div",{style:{marginBottom:10,marginLeft:40},children:(0,nt.jsx)(L.Z,{disabled:!this.state.transferValue||!this.state.transferAccNo,disableRipple:!!this.state.loadingNext,onClick:function(){!i.state.loadingNext&&i.onVerify()},color:"primary",variant:"contained",endIcon:this.state.loadingNext?(0,nt.jsx)(H.Z,{style:{width:"1em",height:"1em",color:"white"}}):(0,nt.jsx)(F.Z,{}),style:{whiteSpace:"nowrap"},children:tt.Z.t("Next")})})]})}],columns:[{title:"label",dataIndex:"label",key:"label",className:"description-label"},{title:"value",dataIndex:"value",key:"value"}]})}),(0,nt.jsx)(g.Z,{xs:24,sm:24,md:0,lg:0,xl:0,xxl:0,style:{paddingTop:40},children:(0,nt.jsxs)("div",{children:[(0,nt.jsx)("div",{children:"".concat(tt.Z.t("ToAccountNo")," : ")}),(0,nt.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end"},children:[(0,nt.jsx)("div",{style:{marginBottom:10,width:"100%"},children:(0,nt.jsx)(V.Z,{size:"small",variant:"outlined",fullWidth:!0,children:this.state.dept_format.length>0?(0,nt.jsx)(b(),{id:"input-accountno",disabled:!(this.state.myAccount&&!this.state.loadingDes),name:"transferAccNo",className:"cleave-input-number ant-input-number",placeholder:_.isEmpty(this.state.myAccount)?tt.Z.t("pleaseSelectAccountForTransactions"):tt.Z.t("EnterDesAccountNo"),options:{numericOnly:!0,blocks:this.state.dept_format,delimiter:"-"},value:this.state.transferAccNo||"",onChange:function(t){return i.setState({transferAccNo:t.target.rawValue,transferAccNoFormat:t.target.value})},onKeyDown:function(t){"Enter"==t.key&&i.state.transferAccNo&&i.fetchDesAccount()}}):(0,nt.jsx)(b(),{id:"input-accountno",disabled:!(this.state.myAccount&&!this.state.loadingDes),name:"transferAccNo",className:"cleave-input-number ant-input-number",placeholder:_.isEmpty(this.state.myAccount)?tt.Z.t("pleaseSelectAccountForTransactions"):tt.Z.t("EnterDesAccountNo"),options:{numericOnly:!0,blocks:[3,2,5],delimiter:"-"},value:this.state.transferAccNo||"",onChange:function(t){return i.setState({transferAccNo:t.target.rawValue,transferAccNoFormat:t.target.value})},onKeyDown:function(t){"Enter"==t.key&&i.state.transferAccNo&&i.fetchDesAccount()}})})}),(0,nt.jsx)("div",{style:{marginBottom:10,marginLeft:40},children:(0,nt.jsx)(L.Z,{disabled:!this.state.transferAccNo||_.isEmpty(this.state.myAccount)||!!this.state.loadingDes,disableRipple:!!this.state.loadingDes,onClick:function(){!i.state.loadingDes&&i.fetchDesAccount()},color:"primary",variant:"contained",endIcon:this.state.loadingDes?(0,nt.jsx)(H.Z,{style:{width:"1em",height:"1em",color:"white"}}):(0,nt.jsx)(F.Z,{}),style:{whiteSpace:"nowrap"},children:tt.Z.t("CheckTransfer")})})]}),!_.isEmpty(this.state.toAccount)&&(0,nt.jsxs)("div",{children:[(0,nt.jsx)("div",{children:"".concat(tt.Z.t("TransactionAmtTHB")," : ")}),(0,nt.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end"},children:[(0,nt.jsx)("div",{style:{marginBottom:10,width:"100%"},children:(0,nt.jsx)(V.Z,{size:"small",variant:"outlined",fullWidth:!0,children:(0,nt.jsx)(z.Z,(s={id:"transfer-value-outlined",disabled:_.isEmpty(this.state.myAccount),value:this.state.transferValue,onChange:function(t){t.target.value&&parseFloat(t.target.value)>parseFloat(i.state.myAccount.BALANCE)?i.setState({transferValue:i.state.myAccount.BALANCE}):i.setState({transferValue:t.target.value})},placeholder:_.isEmpty(this.state.myAccount)?tt.Z.t("pleaseSelectAccountForTransactions"):"0.00",inputProps:{autoComplete:"off"},name:"formatted-numberformat-input"},(0,d.Z)(s,"id","formatted-numberformat-input"),(0,d.Z)(s,"variant","outlined"),(0,d.Z)(s,"onKeyDown",(function(t){"Enter"==t.key&&i.state.transferValue&&i.onVerify()})),(0,d.Z)(s,"inputComponent",N.ad),s),"transfer-value")})}),(0,nt.jsx)("div",{style:{marginBottom:10,marginLeft:40},children:(0,nt.jsx)(L.Z,{disabled:!this.state.transferValue||!this.state.transferAccNo,disableRipple:!!this.state.loadingNext,onClick:function(){!i.state.loadingNext&&i.onVerify()},color:"primary",variant:"contained",endIcon:this.state.loadingNext?(0,nt.jsx)(H.Z,{style:{width:"1em",height:"1em",color:"white"}}):(0,nt.jsx)(F.Z,{}),style:{whiteSpace:"nowrap"},children:tt.Z.t("Next")})})]})]})]})})]}),(0,nt.jsx)(G.Z,{in:!!this.state.failedVerify,children:(0,nt.jsx)(K.Z,{in:!!this.state.failedVerify,children:(0,nt.jsx)(m.Z,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}],children:(0,nt.jsx)(g.Z,{xs:24,sm:24,md:24,lg:24,xl:{span:16,offset:4},xxl:{span:16,offset:4},style:{textAlign:"center",paddingTop:24},children:(0,nt.jsx)("div",{children:(0,nt.jsxs)(I.Z,{severity:"error",style:{position:"relative"},onClick:function(){i.setState({failedVerify:null})},children:[(0,nt.jsx)(D.Z,{style:{cursor:"pointer",position:"absolute",top:10,right:10}}),(0,nt.jsx)(P.Z,{style:{textAlign:"left"},children:this.state.failedVerify})]})})})})})})]})})})}},{key:"render",value:function(){var t=this,e=this.props,n=(e.MENU_LIST,e.HIDE_ACCOUNT_NO.data);return this.state.statusCode>=300&&this.state.statusCode<500?(0,nt.jsx)(S.default,{statusCode:this.state.statusCode,err:this.state.errData,showModalLogout:function(){return t.props.showModalLogout()}}):(0,nt.jsx)("div",{className:"main-layout",style:{position:"relative"},children:(0,nt.jsxs)("div",{style:{width:"100%"},children:[(0,nt.jsx)(Z.Z,{checked:!this.state.loading||!this.state.isInitialLoading}),(0,nt.jsx)(p.default,{children:(0,nt.jsx)("link",{rel:"stylesheet",href:"".concat(lt.cssFolder,"/transfer.css")})}),(0,nt.jsx)(J.Z,{isOpen:!!this.state.alertData.isOpen,title:this.state.alertData.title,description:this.state.alertData.detail,type:this.state.alertData.type,svgIcon:this.state.alertData.icon,loading:!!this.state.alertData.loading,onClose:this.state.alertData.onClose,onConfirm:this.state.alertData.onConfirm,confirmText:this.state.alertData.confirmText,cancelText:this.state.alertData.cancelText,disabledConfirm:!!this.state.alertData.disabledConfirm}),this.renderModalSelectAccount(),(0,nt.jsx)("div",{className:"main-content",style:{width:"100%"},children:(0,nt.jsxs)("div",{className:"sub-content",style:{display:"flex",flexDirection:"column",padding:0},children:[(0,nt.jsxs)("div",{className:"sub-content",style:{flex:1,width:"100%"},children:[(0,nt.jsx)(m.Z,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}],children:(0,nt.jsx)(g.Z,{xs:24,sm:24,md:24,lg:24,xl:{span:16,offset:4},xxl:{span:16,offset:4},children:(0,nt.jsx)(Q.Z,{th:"\u0e42\u0e2d\u0e19\u0e20\u0e32\u0e22\u0e43\u0e19\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e2a\u0e2b\u0e01\u0e23\u0e13\u0e4c",en:"Transfer in Coop"})})}),(0,nt.jsx)(m.Z,{type:"flex",gutter:[{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24},{xs:8,sm:8,md:8,lg:16,xl:24,xxl:24}],children:(0,nt.jsx)(g.Z,{xs:24,sm:24,md:24,lg:24,xl:{span:16,offset:4},xxl:{span:16,offset:4},style:{textAlign:"center"},children:(0,nt.jsxs)(W.Z,{style:{backgroundColor:"transparent"},color:"second",activeStep:this.state.currentStep,alternativeLabel:!0,children:[(0,nt.jsx)(Y.Z,{children:(0,nt.jsx)(X.Z,{disabled:1!=this.state.currentStep,onClick:function(){return t.setState({currentStep:0})},children:tt.Z.t("FillInfo")})}),(0,nt.jsx)(Y.Z,{children:(0,nt.jsx)(X.Z,{disabled:!0,children:tt.Z.t("CheckInfo")})}),(0,nt.jsx)(Y.Z,{children:(0,nt.jsx)(X.Z,{disabled:!0,children:tt.Z.t("SuccessfulTransaction")})})]})})}),(0,nt.jsx)("div",{style:{padding:"40px 0"},children:0==this.state.currentStep?this.renderAccount():1==this.state.currentStep?(0,nt.jsx)("div",{children:(0,nt.jsx)(m.Z,{type:"flex",gutter:[{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48},{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48}],children:(0,nt.jsxs)(g.Z,{className:"card-shadow isc-card",xs:24,sm:24,md:{span:12,offset:6},lg:{span:12,offset:6},xl:{span:12,offset:6},xxl:{span:8,offset:8},children:[(0,nt.jsx)("div",{style:{textAlign:"center",fontSize:"1.5em",fontWeight:"bold"},children:tt.Z.t("CheckInfo")}),(0,nt.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:20},children:[(0,nt.jsx)("div",{children:(0,nt.jsxs)("picture",{children:[(0,nt.jsx)("source",{srcSet:"".concat(lt.logoFolder,"/logo.webp"),type:"image/webp"}),(0,nt.jsx)("source",{srcSet:"".concat(lt.logoFolder,"/logo.png"),type:"image/png"}),(0,nt.jsx)("img",{alt:"coop-icon",src:"".concat(lt.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}})]})}),(0,nt.jsxs)("div",{style:{textAlign:"right"},children:[(0,nt.jsx)("div",{children:this.state.myAccount.DEPTACCOUNT_NAME||"-"}),(0,nt.jsx)("div",{style:{paddingTop:10},children:_.isEmpty(this.state.myAccount)?"xxx-xxx-xxxx":n?this.state.myAccount.DEPTACCOUNT_NO_FORMAT_HIDE:this.state.myAccount.DEPTACCOUNT_NO_FORMAT})]})]}),(0,nt.jsx)(y.Z,{children:(0,nt.jsx)(M.Z,{style:{color:"grey"}})}),(0,nt.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,nt.jsx)("div",{children:_.isEmpty(this.state.toAccount.BANK_LOGO)?(0,nt.jsxs)("picture",{children:[(0,nt.jsx)("source",{srcSet:"".concat(lt.logoFolder,"/logo.webp"),type:"image/webp"}),(0,nt.jsx)("source",{srcSet:"".concat(lt.logoFolder,"/logo.png"),type:"image/png"}),(0,nt.jsx)("img",{alt:"coop-icon",src:"".concat(lt.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}})]}):(0,nt.jsx)("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:this.state.toAccount.BANK_LOGO?this.state.toAccount.BANK_LOGO:null})}),(0,nt.jsxs)("div",{style:{textAlign:"right"},children:[(0,nt.jsx)("div",{children:this.state.toAccount&&this.state.toAccount.DEPTACCOUNT_NAME||tt.Z.t("ToAccount")}),(0,nt.jsx)("div",{style:{paddingTop:10},children:this.state.toAccount.DEPTACCOUNT_NO_FORMAT||"xxx-xxx-xxxx"})]})]}),(0,nt.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:24},children:[(0,nt.jsx)("div",{children:tt.Z.t("Amount")}),(0,nt.jsxs)("div",{style:{textAlign:"right",fontSize:"1.2em"},children:[(0,nt.jsx)("span",{style:{color:"var(--balance-text-color)"},children:(0,N.E9)(this.state.transferValue)||"0.00"})," ",tt.Z.t("THB")]})]}),!!this.state.feeAMT&&(0,nt.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12},children:[(0,nt.jsx)("div",{children:tt.Z.t("Fee")}),(0,nt.jsxs)("div",{style:{textAlign:"right"},children:[(0,nt.jsx)("span",{style:{color:"var(--red-text-color)"},children:(0,N.E9)(this.state.feeAMT&&this.state.feeAMT||"0.00")})," ",tt.Z.t("THB")]})]}),!!this.state.penaltyAMT&&(0,nt.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12},children:[(0,nt.jsx)("div",{children:tt.Z.t("PenaltyCoop")}),(0,nt.jsxs)("div",{style:{textAlign:"right"},children:[(0,nt.jsx)("span",{style:{color:"var(--red-text-color)"},children:(0,N.E9)(this.state.penaltyAMT&&this.state.penaltyAMT||"0.00")})," ",tt.Z.t("THB")]})]}),(0,nt.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:24},children:(0,nt.jsxs)(V.Z,{size:"small",variant:"standard",fullWidth:!0,children:[(0,nt.jsx)($.Z,{children:tt.Z.t("Memo")}),(0,nt.jsx)(q.Z,{value:this.state.transferRemark,label:tt.Z.t("Memo"),onChange:function(e){t.setState({transferRemark:e.target.value})},inputProps:{autoComplete:"off"},name:"transferRemark-input",id:"transferRemark-input"},"transfer-value")]})}),(0,nt.jsx)("div",{style:{paddingTop:32},children:(0,nt.jsx)(L.Z,{disableRipple:!!this.state.loadingConfirm,onClick:function(){!t.state.loadingConfirm&&(C.default.transactionOTP?t.props.onOTPTransfer(MEMBER_INFO.data&&MEMBER_INFO.data.PHONE.replace(/\s/g,""),MEMBER_INFO.data&&MEMBER_INFO.data.MEMBER_NO,(0,N.tk)(T.default.pathname)):t.FundTransfer())},color:"primary",variant:"contained",size:"large",fullWidth:!0,endIcon:this.state.loadingConfirm&&(0,nt.jsx)(H.Z,{style:{width:"1em",height:"1em",color:"white"}}),children:tt.Z.t("Confirm")})}),(0,nt.jsx)("div",{style:{marginTop:16},children:(0,nt.jsx)(L.Z,{onClick:function(){t.setState({currentStep:0})},color:"default",variant:"text",fullWidth:!0,style:{whiteSpace:"nowrap"},children:tt.Z.t("Back")})}),(0,nt.jsx)(G.Z,{in:!!this.state.failedTransfer,children:(0,nt.jsx)(K.Z,{in:!!this.state.failedTransfer,children:(0,nt.jsx)("div",{children:(0,nt.jsxs)(I.Z,{severity:"error",style:{position:"relative",marginTop:24},onClick:function(){t.setState({failedTransfer:null})},children:[(0,nt.jsx)(D.Z,{style:{cursor:"pointer",position:"absolute",top:10,right:10}}),(0,nt.jsx)(P.Z,{style:{textAlign:"left"},children:this.state.failedTransfer})]})})})})]})})}):(0,nt.jsx)("div",{children:(0,nt.jsx)(m.Z,{type:"flex",gutter:[{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48},{xs:24,sm:24,md:24,lg:24,xl:48,xxl:48}],children:(0,nt.jsxs)(g.Z,{className:"card-shadow isc-card",xs:24,sm:24,md:{span:12,offset:6},lg:{span:12,offset:6},xl:{span:12,offset:6},xxl:{span:8,offset:8},children:[(0,nt.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,nt.jsx)("div",{style:{textAlign:"center",fontSize:"1.5em",fontWeight:"bold"},children:tt.Z.t("SuccessfulTransaction")}),(0,nt.jsxs)("div",{className:"success-slip-icon",style:{marginLeft:10,fontSize:"x-large",color:"white",height:"1em",width:"1em",borderRadius:"1em",right:"0",top:"0",background:"var(--gd-success-color)",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",position:"relative"},children:[(0,nt.jsx)(j.Z,{type:"check",style:{position:"relative",fontSize:"small"}}),(0,nt.jsx)("div",{className:"success-slip-overlay",style:{fontSize:"x-large",color:"white",height:"1.5em",width:"1.5em",borderRadius:"1.5em",right:"0",top:"0",background:"var(--gd-success-color)",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute"}})]})]}),(0,nt.jsxs)("div",{style:{paddingBottom:"10px"},children:[(0,nt.jsx)(m.Z,{type:"flex",gutter:{xs:1,sm:1,md:1,lg:2,xl:2},style:{padding:"0px 20px"},children:(0,nt.jsx)(g.Z,{span:24,style:{textAlign:"center"},children:this.state.transaction_date})}),(0,nt.jsx)(m.Z,{type:"flex",gutter:{xs:1,sm:1,md:1,lg:2,xl:2},align:"middle",style:{padding:"10px 20px 0px 20px"},children:(0,nt.jsx)(g.Z,{span:24,style:{display:"flex",flexDirection:"column",alignItems:"center"},children:"".concat(tt.Z.t("RefNo")," : ")+this.state.slip_no})})]}),(0,nt.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:20},children:[(0,nt.jsx)("div",{children:(0,nt.jsxs)("picture",{children:[(0,nt.jsx)("source",{srcSet:"".concat(lt.logoFolder,"/logo.webp"),type:"image/webp"}),(0,nt.jsx)("source",{srcSet:"".concat(lt.logoFolder,"/logo.png"),type:"image/png"}),(0,nt.jsx)("img",{alt:"coop-icon",src:"".concat(lt.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}})]})}),(0,nt.jsxs)("div",{style:{textAlign:"right"},children:[(0,nt.jsx)("div",{children:this.state.myAccount.DEPTACCOUNT_NAME||"-"}),(0,nt.jsx)("div",{style:{paddingTop:10},children:_.isEmpty(this.state.myAccount)?"xxx-xxx-xxxx":n?this.state.myAccount.DEPTACCOUNT_NO_FORMAT_HIDE:this.state.myAccount.DEPTACCOUNT_NO_FORMAT})]})]}),(0,nt.jsx)(y.Z,{children:(0,nt.jsx)(M.Z,{style:{color:"grey"}})}),(0,nt.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,nt.jsx)("div",{children:_.isEmpty(this.state.myAccount.BANK_LOGO)?(0,nt.jsxs)("picture",{children:[(0,nt.jsx)("source",{srcSet:"".concat(lt.logoFolder,"/logo.webp"),type:"image/webp"}),(0,nt.jsx)("source",{srcSet:"".concat(lt.logoFolder,"/logo.png"),type:"image/png"}),(0,nt.jsx)("img",{alt:"coop-icon",src:"".concat(lt.logoFolder,"/logo.png"),type:"image/png",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"}})]}):(0,nt.jsx)("img",{alt:"icon",style:{height:"40px",width:"40px",overflow:"hidden",margin:"auto"},src:this.state.myAccount.BANK_LOGO?this.state.myAccount.BANK_LOGO:null})}),(0,nt.jsxs)("div",{style:{textAlign:"right"},children:[(0,nt.jsx)("div",{children:this.state.toAccount&&this.state.toAccount.DEPTACCOUNT_NAME||tt.Z.t("ToAccount")}),(0,nt.jsx)("div",{style:{paddingTop:10},children:this.state.toAccount.DEPTACCOUNT_NO_FORMAT||"xxx-xxx-xxxx"})]})]}),(0,nt.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:24},children:[(0,nt.jsx)("div",{children:tt.Z.t("Amount")}),(0,nt.jsxs)("div",{style:{textAlign:"right",fontSize:"1.2em"},children:[(0,nt.jsx)("span",{style:{color:"var(--balance-text-color)"},children:(0,N.E9)(this.state.transferValue)||"0.00"})," ",tt.Z.t("THB")]})]}),!!this.state.feeAMT&&(0,nt.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12},children:[(0,nt.jsx)("div",{children:tt.Z.t("Fee")}),(0,nt.jsxs)("div",{style:{textAlign:"right"},children:[(0,nt.jsx)("span",{style:{color:"var(--red-text-color)"},children:(0,N.E9)(this.state.feeAMT&&this.state.feeAMT||"0.00")})," ",tt.Z.t("THB")]})]}),!!this.state.penaltyAMT&&(0,nt.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12},children:[(0,nt.jsx)("div",{children:tt.Z.t("PenaltyCoop")}),(0,nt.jsxs)("div",{style:{textAlign:"right"},children:[(0,nt.jsx)("span",{style:{color:"var(--red-text-color)"},children:(0,N.E9)(this.state.penaltyAMT&&this.state.penaltyAMT||"0.00")})," ",tt.Z.t("THB")]})]}),this.state.transferRemark&&(0,nt.jsxs)("div",{style:{paddingTop:24},children:[(0,nt.jsx)("div",{style:{fontSize:"smaller"},children:tt.Z.t("Memo")}),(0,nt.jsx)("div",{children:this.state.transferRemark})]}),(0,nt.jsx)("div",{style:{paddingTop:32},children:(0,nt.jsx)(L.Z,{onClick:function(){T.default.push("".concat(lt.prefixPath))},color:"primary",variant:"outlined",size:"large",fullWidth:!0,endIcon:this.state.loadingConfirm&&(0,nt.jsx)(H.Z,{style:{width:"1em",height:"1em",color:"white"}}),children:tt.Z.t("ReturnMainPage")})})]})})})})]}),(0,nt.jsx)(k.Z,{})]})})]})})}}]),n}(h.PureComponent);e.default=(0,O.$j)((function(t){return{HIDE_ACCOUNT_NO:t.HIDE_ACCOUNT_NO,MEMBER_INFO:t.MEMBER_INFO,MENU_LIST:t.MENU_LIST,HISTORY_BADGE:t.HISTORY_BADGE}}),(function(t){return{}}))((0,et.hr)()(ot))},20023:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/TransferDepInsideCoop",function(){return n(8171)}])}},function(t){t.O(0,[6507,5809,6253,656,24,8993,9774,2888,179],(function(){return e=20023,t(t.s=e);var e}));var e=t.O();_N_E=e}]);