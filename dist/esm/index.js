import n,{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import{Box as o,Stack as i,Typography as a,Button as l,Slide as d,IconButton as c,InputBase as u,Menu as p,MenuItem as s,TextField as f}from"@mui/material";import{styled as h}from"@mui/material/styles";import*as g from"react";import x,{useRef as y,useEffect as b,useState as v,useMemo as m}from"react";import w from"@emotion/styled";import C from"@mui/material/utils";var k=function(){return k=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},k.apply(this,arguments)};function S(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t}function z(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}"function"==typeof SuppressedError&&SuppressedError;var F=k(k(k(k(k(k(k({},{black:"#000000",white:"#FFFFFF"}),{gray0:"#C7C9D9",gray1:"#F3F6F9",gray2:"#EAEEF6",gray3:"#C3CAD4",gray4:"#939CA9",gray5:"#747B84",gray6:"#4A5568",gray7:"#323A43"}),{primary001:"#1E6AF6",primary002:"#4B88F8",primary003:"#78A6FA",primary004:"#A5C3FB",primary005:"#E8F0FE",primary006:"#F4F8FF"}),{secondary001:"#07236D",secondary002:"#264189",secondary003:"#455FA5",secondary004:"#849CDD",secondary005:"#A3BAF9"}),{trinary001:"#EE6E3A",trinary002:"#F18B61",trinary003:"#F5A889",trinary004:"#F8C5B0",trinary005:"#FAD3C4"}),{success:"#13C186",warning:"#EFB110",error:"#EA5540",completed:"#1E6AF6",pending:"#F9A01B"}),{brandBlack:"#3A4248",darkBlue:"#07236D",royalBlue:"#1E6AF6",cherry:"#EE6E3A",offWhite:"#F7F8F9"}),B=function(n){var r=n.bdType,d=n.icon,c=n.text,u=n.loading,p=n.bdSize,s=n.width,f=void 0===s?"100%":s,h=n.isRightIcon,g=void 0!==h&&h,x=n.counter,y=S(n,["bdType","icon","text","loading","bdSize","width","isRightIcon","counter"]),b=function(){switch(r){case"secondary":return{color:F.primary001,borderColor:F.primary001,backgroundColor:F.white};case"outlined":return{color:F.primary001,borderColor:F.white,backgroundColor:F.white};case"remove":return{color:F.error,borderColor:F.error,backgroundColor:F.white};default:return{color:F.white,borderColor:F.primary001,backgroundColor:F.primary001}}}(),v=function(){switch(p){case"lg":return{borderRadius:"32px",fontSize:"16px",height:"52px",icon:12,loading:"18px"};case"md":return{borderRadius:"32px",fontSize:"16px",height:"48px",icon:12,loading:"16px"};case"sm":return{borderRadius:"32px",fontSize:"14px",height:"40px",icon:12,loading:"14px"};case"xs":default:return{borderRadius:"32px",fontSize:"12px",height:"30px",icon:12,loading:"12px"};case"xxs":return{borderRadius:"32px",fontSize:"12px",height:"24px",icon:12,loading:"12px"}}}(),m={width:v.loading,height:v.loading,border:"2px solid ".concat(b.color),borderBottomColor:b.backgroundColor},w=u?e(A,{style:m}):d,C=x&&e(i,{justifyContent:"center",alignItems:"center",borderRadius:"50%",bgcolor:b.color,width:18,height:18,children:e(a,{fontSize:v.fontSize,color:b.backgroundColor,children:x})});return e(l,k({sx:{borderRadius:v.borderRadius,fontSize:v.fontSize,paddingY:"8px",borderColor:b.borderColor,backgroundColor:b.backgroundColor,width:f,height:v.height,"&.MuiButton-outlined":{color:b.color,backgroundColor:b.backgroundColor},"&:hover":{borderColor:b.borderColor},"&.Mui-disabled":{color:b.color,backgroundColor:b.backgroundColor,opacity:.6}},variant:"outlined"},y,{children:t(j,{children:[!g&&w,e(o,{style:{color:b.color,fontSize:v.fontSize},children:c}),g&&w,C]})}))},j=h(o)((function(){return{display:"flex",alignItems:"center",justifyContent:"center",minWidth:"70px",columnGap:"8px",lineHeight:"16px",textTransform:"none"}})),A=h(o)((function(){return{borderRadius:"50%",display:"inline-block",boxSizing:"border-box",animation:"rotation 1s linear infinite","@keyframes rotation":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}}})),L=function(n){return e(B,k({},n))},T=function(n){return e(B,k({},n,{bdType:"secondary"}))},I=function(n){return e(B,k({},n,{bdType:"outlined"}))},M=function(){return e("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5L1.5 13.5Z",stroke:"#EA5540",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})},D=function(n){return e(B,k({},n,{icon:e(M,{}),bdType:"remove"}))},E=function(n){var t,r=n.text,o=n.bdType,i=n.color,l=void 0===i?F.black:i,d=S(n,["text","bdType","color"]),c=o?{h1:{fontSize:61,fontWeight:600},h2:{fontSize:49,fontWeight:600},h3:{fontSize:39,fontWeight:600},h4:{fontSize:31,fontWeight:600},h5:{fontSize:25,fontWeight:600},h6:{fontSize:20,fontWeight:600},p1:{fontSize:16,fontWeight:400},p2:{fontSize:14,fontWeight:400},lead1:{fontSize:16,fontWeight:600},lead2:{fontSize:14,fontWeight:600},mini:{fontSize:12,fontWeight:400},tiny:{fontSize:10,fontWeight:600},badges:{fontSize:12,fontWeight:500},badgesBold:{fontSize:12,fontWeight:600}}[o]:{fontSize:16,fontWeight:400},u=(null==(t=null==o?void 0:o.toString())?void 0:t.includes("h"))?t:"body1";return e(a,k({},d,c,{color:l,variant:u,children:r}))},O=function(n){return e(E,k({},n,{bdType:"h1"}))},W=function(n){return e(E,k({},n,{bdType:"h2"}))},P=function(n){return e(E,k({},n,{bdType:"h3"}))},R=function(n){return e(E,k({},n,{bdType:"h4"}))},N=function(n){return e(E,k({},n,{bdType:"h5"}))},_=function(n){return e(E,k({},n,{bdType:"h6"}))},H=function(n){return e(E,k({},n,{bdType:"p1"}))},Z=function(n){return e(E,k({},n,{bdType:"p2"}))},K=function(n){return e(E,k({},n,{bdType:"lead1"}))},U=function(n){return e(E,k({},n,{bdType:"lead2"}))},Y=function(n){return e(E,k({},n,{bdType:"mini"}))},G=function(n){return e(E,k({},n,{bdType:"tiny"}))},V=function(n){return e(E,k({},n,{bdType:"badges"}))},q=function(n){return e(E,k({},n,{bdType:"badgesBold"}))};function J(n){return e("svg",{className:n.className,width:n.width||"13",height:n.height||"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M1.77539 1.0752L11.9263 11.2261M1.77539 11.2261L11.9263 1.0752L1.77539 11.2261Z",stroke:n.color||"#3A4248",strokeWidth:"1.69181",strokeLinecap:"round",strokeLinejoin:"round"})})}var Q,X,$=function(n){var i=n.height,a=void 0===i?"50%":i,l=n.open,u=n.onClose,p=n.isCloseIcon,s=n.children,f=y(null);return b((function(){var n=function(n){f.current&&!f.current.contains(n.target)&&u()};return l&&document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[l,u]),t(r,{children:[l&&e(o,{sx:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.3)",zIndex:function(n){return n.zIndex.modal-1}},onClick:u}),e(d,k({direction:"up",in:l,mountOnEnter:!0,unmountOnExit:!0},n,{children:t(o,{ref:f,sx:{borderRadius:"32px 32px 0px 0px",position:"fixed",bottom:0,left:0,right:0,height:a,backgroundColor:"background.paper",boxShadow:24,p:2,overflowY:"auto",zIndex:function(n){return n.zIndex.modal}},children:[p&&e(o,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center",pb:1},children:e(c,{onClick:u,children:e(J,{})})}),e(o,{sx:{mt:2},children:s})]})}))]})},nn=function(n,e){if(!n)return"";for(var t=0,r=String(e).split(""),o=[],i=0;i<e.length&&t<n.length;i++)"x"===r[i]?o.push(n[t++]):o.push(r[i]);return o.join("")},en=function(n,e){return void 0===n&&(n=""),void 0===e&&(e="-"),(n||"").replaceAll(e,"")},tn=Object.freeze({__proto__:null,clearPattern:en,randomString:function(n){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<n;r++)e+=t.charAt(Math.floor(62*Math.random()));return e},removeZeroPrefix:function(n){return n.replace(/^0+/,"")},toPattern:nn}),rn=function(n){var r=n.name,o=n.label,i=n.value,a=void 0===i?"":i,l=n.tag,d=n.disabled,c=void 0!==d&&d,p=n.pattern,s=n.charPattern,f=n.isNumber,h=n.limit,g=void 0===h?9e5:h,x=n.onChange,y=void 0===x?function(){}:x,b=n.invalid,m=n.type,w=void 0===m?"text":m,C=n.containerStyled,k=n.inputStyled,S=n.rightComponent,z=v(!1),F=z[0],B=z[1],j=p?nn(a,p):a+"",A=b?" invalid":"",L=F?" active":"",T=c?" disabled":"";return t(on,{className:"".concat(A).concat(L).concat(T),style:C,children:[S,e(u,{sx:{ml:1,flex:1},id:r,className:"".concat(A).concat(L).concat(T),placeholder:o,type:w,autoComplete:"off",required:!0,disabled:c,value:j,onChange:function(n){if(y){var e=n.target.value;if(p&&(e=en(e,s)),f&&""!==e){var t=+e;e=0===t||t?e:a}e.length<=g&&y(e,r,l)}},onFocus:function(){return B(!0)},onBlur:function(){return B(!1)},style:k}),t(an,{children:[b||""," "]})]})},on=w("div")({width:"100%",height:"56px",backgroundColor:"#f7f8f9",borderRadius:"8px",padding:"0px 10px",border:"1px solid ".concat(F.gray2),display:"flex","&.active":{border:"1px solid ".concat(F.primary001)},"&.disabled":{backgroundColor:"".concat(F.gray3)},"&.invalid":{border:"1px solid ".concat(F.error)}}),an=w("div")(Q||(Q=z(["\n  color: #f95247;\n  margin-top: 4px;\n  font-size: 13px;\n  font-weight: 500;\n  text-align: left;\n  display: none;\n\n  &.invalid {\n    display: block;\n  }\n"],["\n  color: #f95247;\n  margin-top: 4px;\n  font-size: 13px;\n  font-weight: 500;\n  text-align: left;\n  display: none;\n\n  &.invalid {\n    display: block;\n  }\n"]))),ln={},dn={exports:{}};(X=dn).exports=function(n){return n&&n.__esModule?n:{default:n}},X.exports.__esModule=!0,X.exports.default=X.exports;var cn,un={};var pn=dn.exports;Object.defineProperty(ln,"__esModule",{value:!0});var sn=ln.default=void 0,fn=pn((cn||(cn=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return e.createSvgIcon}});var e=C}(un)),un)),hn=n;sn=ln.default=(0,fn.default)((0,hn.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown");var gn,xn,yn,bn,vn,mn,wn,Cn,kn,Sn,zn,Fn,Bn={id:"91a3acd7-d985-494f-b589-be4d1a1208ed",countryName:"Thailand",countryCode:"TH",phoneCode:"+66",region:null,flag:"U+1F1F9 U+1F1ED",active:!0,createdAt:"2024-05-17T04:30:01.155Z",updatedAt:"2024-05-21T02:44:02.660Z"},jn=function(n){var r=n.onChange,i=n.defaultCountry,d=void 0===i?Bn:i,c=n.countryList,u=void 0===c?[]:c,p=v(d),f=p[0],h=p[1],g=x.useState(null),w=g[0],C=g[1],k=Boolean(w),S=y(null),z=function(n){return n.split(" ").map((function(n){return n.replace("U+","")})).map((function(n){return String.fromCodePoint(parseInt(n,16))})).join("")},B=m((function(){return(null==u?void 0:u.length)?u.findIndex((function(n){return n.countryName===Bn.countryName})):0}),[u]);b((function(){k&&S.current&&(S.current.scrollTop=59*B)}),[k,B]);return t(o,{display:"flex",alignItems:"center",children:[t("div",{children:[e(l,{"aria-controls":k?"demo-customized-menu":void 0,"aria-haspopup":"true","aria-expanded":k?"true":void 0,variant:"text",disableElevation:!0,onClick:function(n){C(n.currentTarget)},endIcon:e(sn,{sx:{color:F.black}}),children:e(o,{display:"flex",gap:1,paddingLeft:"4px",alignItems:"center",children:z(f.flag)})}),e(An,{MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:w,open:k,onClose:function(){C(null)},children:u.map((function(n){var i=n.countryName,a=n.flag,l=n.phoneCode,d=z(a);return e(s,{selected:n.id===f.id,onClick:function(){return function(n){h(n),null==r||r(n),C(null)}(n)},children:t(o,{display:"flex",gap:2,alignItems:"center",children:[e(o,{height:"33px",fontSize:25,children:d}),e(o,{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"220px",children:i}),t(o,{children:["(",l,")"]})]})},n.id)}))})]}),t(a,{"data-testid":"international-selected-code",fontWeight:"500",fontSize:"16px",borderLeft:"1px solid #c3cad4",margin:"6px 10px",paddingLeft:"12px",lineHeight:"30px",children:["(",f.phoneCode,")"]})]})},An=w((function(n){return e(p,k({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},n))}))({"& .MuiPaper-root":{borderRadius:6,marginTop:4,maxHeight:400,width:300,border:"1px solid ".concat(F.gray1),"& .MuiMenu-list":{padding:"0"}}}),Ln=function(n){var t=n.length,r=n.value,i=n.onChange,a=g.useRef(new Array(t).fill(null)),l=function(n){var e=a.current[n];null==e||e.focus()},d=function(n){var e=a.current[n];null==e||e.select()};return e(o,{sx:{display:"flex",gap:2,alignItems:"center",justifyContent:"center"},children:new Array(t).fill(null).map((function(n,o){var c;return e(g.Fragment,{children:e(f,{inputRef:function(n){a.current[o]=n},inputProps:{style:{textAlign:"center",color:"#176AFC"}},onKeyDown:function(n){return function(n,e){switch(n.key){case"ArrowUp":case"ArrowDown":case" ":n.preventDefault();break;case"ArrowLeft":n.preventDefault(),e>0&&(l(e-1),d(e-1));break;case"ArrowRight":n.preventDefault(),e<t-1&&(l(e+1),d(e+1));break;case"Delete":n.preventDefault();var o=r.slice(0,e)+r.slice(e+1);i(o);break;case"Backspace":n.preventDefault(),e>0&&(l(e-1),d(e-1));var a=r.slice(0,e)+r.slice(e+1);i(a)}}(n,o)},onChange:function(n){return function(n,e){var o=n.target.value.replace(/\D/g,"");if(0!==o.length){for(var d=0;d<=e&&a.current[d]&&d<e;)d+=1;var c=r.split(""),u=o[o.length-1];c[d]=u;var p=c.join("");i(p),""!==o&&e<t-1&&l(e+1)}}(n,o)},onClick:function(n){d(o)},onPaste:function(n){return function(n,e){n.preventDefault();var o=n.clipboardData;if(o.types.includes("text/plain")){var l=o.getData("text/plain");l=l.substring(0,t).trim();for(var d=0;d<=e&&a.current[d]&&d<e;)d+=1;for(var c=r.split(""),u=d;u<t;u+=1){var p=l[u-d];c[u]=p}i(c.join(""))}}(n,o)},value:null!==(c=r[o])&&void 0!==c?c:"-"})},o)}))})},Tn=function(n){var t=n.countryList,r=n.onChangeCountry,i=n.onChangeMobile,a=n.isInvalid,l=n.mobile,d=n.placeholder,c=void 0===d?"":d,u=n.defaultCountry;return e(In,{children:e(rn,{name:"",type:"tel",label:c,value:l,onChange:i,isNumber:!0,invalid:a,rightComponent:e(o,{margin:"6px 0 6px -10px",children:e(jn,{countryList:t,onChange:r,defaultCountry:u})}),containerStyled:{background:"none"},inputStyled:{background:"none"}})})},In=w("div")(gn||(gn=z(["\n  width: 100%;\n"],["\n  width: 100%;\n"]))),Mn=function(n){var t=n.timerResend,r=Math.floor(t/60),o=Math.floor(t%60),i=function(n){return"".concat(n).padStart(2,"0")};return e(K,{text:"".concat(i(r),":").concat(i(o)),color:F.royalBlue})},Dn=function(n){var r=n.length,i=n.value,a=n.onChange,l=n.errorMessage,d=void 0===l?"":l,c=n.refcode,u=n.refcodeLabel,p=void 0===u?"หมายเลขอ้างอิง":u,s=n.resendLabel,f=void 0===s?"ขอรหัสอีกครั้งใน":s,h=n.unitLabel,g=void 0===h?"นาที":h,x=n.resendTimeSecond,y=void 0===x?180:x,m=n.expireTimeSecond,w=void 0===m?180:m,C=n.onResend,k=n.resendBtnText,S=void 0===k?"ขอรหัสอีกครั้ง":k,z=v(y),B=z[0],j=z[1],A=v(w),L=A[0],T=A[1];b((function(){var n=setInterval((function(){T(L-1)}),1e3),e=setInterval((function(){j(B-1)}),1e3);return 0===B&&clearInterval(e),0===L&&clearInterval(n),function(){clearInterval(e),clearInterval(n)}}));return t(o,{sx:{display:"flex",flexDirection:"column"},children:[t(o,{children:[e(Ln,{value:i,onChange:a,length:r}),d&&e(En,{children:e(Z,{text:d,color:F.error})})]}),e(On,{children:t(o,{sx:{display:"flex",alignItems:"end",justifyContent:"center",gap:1},children:[e(Z,{text:p}),e(Z,{text:c})]})}),B>0?e(Wn,{children:t(o,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:1},children:[e(H,{text:f}),e(Mn,{timerResend:B}),e(K,{text:g,color:F.royalBlue})]})}):e(o,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:1},children:e(I,{bdSize:"md",onClick:C,text:S,width:"fit"})})]})},En=w("div")(xn||(xn=z(["\n  margin-top: 12px;\n  text-align: center;\n"],["\n  margin-top: 12px;\n  text-align: center;\n"]))),On=w("div")(yn||(yn=z(["\n  margin-top: 48px;\n  text-align: center;\n"],["\n  margin-top: 48px;\n  text-align: center;\n"]))),Wn=w("div")(bn||(bn=z(["\n  text-align: center;\n"],["\n  text-align: center;\n"]))),Pn=function(n){var t=n.size,r=void 0===t?1:t,o=n.color,i=void 0===o?"#07236D":o,a="".concat(Math.ceil(15*r)),l="".concat(Math.ceil(15*r));return e("svg",{width:a,height:l,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("circle",{cx:"7.5",cy:"7.5",r:"7.5",fill:i})})},Rn=function(n){var t=n.size,r=void 0===t?1:t,o=n.color,i=void 0===o?"white":o,a="".concat(Math.ceil(41*r)),l="".concat(Math.ceil(41*r));return e("svg",{width:a,height:l,viewBox:"0 0 41 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M20.5 23.9141L23.9167 20.4974M23.9167 20.4974L27.3333 17.0807M23.9167 20.4974L20.5 17.0807M23.9167 20.4974L27.3333 23.9141M5.125 20.4974L16.0822 31.4546C16.7228 32.0954 17.5918 32.4555 18.4978 32.4557H32.4583C33.3645 32.4557 34.2335 32.0958 34.8743 31.455C35.515 30.8143 35.875 29.9452 35.875 29.0391V11.9557C35.875 11.0496 35.515 10.1805 34.8743 9.53978C34.2335 8.89903 33.3645 8.53906 32.4583 8.53906H18.4978C17.5918 8.53926 16.7228 8.89935 16.0822 9.54015L5.125 20.4974Z",stroke:i,strokeWidth:"1.82472",strokeLinecap:"round",strokeLinejoin:"round"})})},Nn=[{label:"1",text:""},{label:"2",text:"A B C"},{label:"3",text:"D E F"}],_n=[{label:"4",text:"G H I"},{label:"5",text:"J K L"},{label:"6",text:"M N O"}],Hn=[{label:"7",text:"P Q R S"},{label:"8",text:"T U V"},{label:"9",text:"W X Y Z"}],Zn=[{status:"space"},{label:"0",text:""},{status:"delete"}],Kn=function(n){var r=n.onClick,o=n.onDelete,i=function(n){return void 0===n&&(n=[]),n.map((function(n,t){var i=n.status,a=n.label;if("space"===i)return e(Vn,{},t);if("delete"===i)return e(qn,{onClick:o,children:e(Rn,{})},t);return e(Gn,{onClick:function(){return r(a)},children:a},t)}))};return t(Un,{children:[e(Yn,{children:i(Nn)}),e(Yn,{children:i(_n)}),e(Yn,{children:i(Hn)}),e(Yn,{children:i(Zn)})]})},Un=w(o)(vn||(vn=z(["\n  width: 100%;\n"],["\n  width: 100%;\n"]))),Yn=w(o)(mn||(mn=z(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 40px;\n  padding: 10px 0px;\n"],["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 40px;\n  padding: 10px 0px;\n"]))),Gn=w(o)(wn||(wn=z(["\n  width: 68px;\n  height: 68px;\n  font-weight: 300;\n  font-size: 32px;\n  line-height: 40px;\n  color: #07236d;\n  border: 0.9px solid #07236d;\n  border-radius: 50%;\n  text-align: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  width: 68px;\n  height: 68px;\n  font-weight: 300;\n  font-size: 32px;\n  line-height: 40px;\n  color: #07236d;\n  border: 0.9px solid #07236d;\n  border-radius: 50%;\n  text-align: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Vn=w(Gn)(Cn||(Cn=z(["\n  border: 0px solid #07236d;\n"],["\n  border: 0px solid #07236d;\n"]))),qn=w(Gn)(kn||(kn=z(["\n  background-color: #07236d;\n  box-shadow: none;\n  font-size: 20px;\n  line-height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  background-color: #07236d;\n  box-shadow: none;\n  font-size: 20px;\n  line-height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Jn=function(n){var r=n.onKeyboard,i=n.onDelete,a=n.codeList,l=n.error,d=a.map((function(n,t){var r=""!==n?e(Pn,{}):"";return e(Xn,{children:r},t)}));return t(o,{sx:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[e(Qn,{children:d}),l&&e($n,{children:e(Z,{text:l,color:F.error})}),e(Kn,{onClick:r,onDelete:i})]})},Qn=w("div")(Sn||(Sn=z(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  column-gap: 8px;\n  padding: 20px 0;\n"],["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  column-gap: 8px;\n  padding: 20px 0;\n"]))),Xn=w("div")(zn||(zn=z(["\n  width: 48px;\n  height: 48px;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 8px;\n\n  &.active {\n    font-weight: 600;\n    color: ",";\n    border: 1px solid ",";\n  }\n"],["\n  width: 48px;\n  height: 48px;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 8px;\n\n  &.active {\n    font-weight: 600;\n    color: ",";\n    border: 1px solid ",";\n  }\n"])),F.gray2,F.offWhite,F.gray2,F.royalBlue,F.royalBlue),$n=w("div")(Fn||(Fn=z(["\n  padding: 12px 0;\n  text-align: center;\n"],["\n  padding: 12px 0;\n  text-align: center;\n"])));export{V as Badges,q as BadgesBold,E as BaseText,$ as BdBottomSheet,B as BdButton,I as BdOutlinedButton,L as BdPrimaryButton,D as BdRemoveButton,T as BdSecondaryButton,F as Colors,tn as Format,O as H1,W as H2,P as H3,R as H4,N as H5,_ as H6,jn as InternationalPhone,K as Lead1,U as Lead2,Y as Mini,rn as MobileInput,Dn as OtpForm,Ln as OtpInput,H as P1,Z as P2,Tn as PhoneNumberForm,Jn as PinForm,Kn as PinKeyboard,G as Tiny};
