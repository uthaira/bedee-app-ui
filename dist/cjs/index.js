"use strict";var e=require("react/jsx-runtime"),n=require("@mui/material"),t=require("@mui/material/styles"),r=require("react"),o=require("@emotion/styled"),i=require("@mui/icons-material/KeyboardArrowDown");function a(e){var n=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}})),n.default=e,Object.freeze(n)}var l=a(r),c=function(){return c=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},c.apply(this,arguments)};function d(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}function s(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var u=c(c(c(c(c(c(c({},{black:"#000000",white:"#FFFFFF"}),{gray0:"#C7C9D9",gray1:"#F3F6F9",gray2:"#EAEEF6",gray3:"#C3CAD4",gray4:"#939CA9",gray5:"#747B84",gray6:"#4A5568",gray7:"#323A43"}),{primary001:"#1E6AF6",primary002:"#4B88F8",primary003:"#78A6FA",primary004:"#A5C3FB",primary005:"#E8F0FE",primary006:"#F4F8FF"}),{secondary001:"#07236D",secondary002:"#264189",secondary003:"#455FA5",secondary004:"#849CDD",secondary005:"#A3BAF9"}),{trinary001:"#EE6E3A",trinary002:"#F18B61",trinary003:"#F5A889",trinary004:"#F8C5B0",trinary005:"#FAD3C4"}),{success:"#13C186",warning:"#EFB110",error:"#EA5540",completed:"#1E6AF6",pending:"#F9A01B"}),{brandBlack:"#3A4248",darkBlue:"#07236D",royalBlue:"#1E6AF6",cherry:"#EE6E3A",offWhite:"#F7F8F9"}),x=function(t){var r=t.bdType,o=t.icon,i=t.text,a=t.loading,l=t.bdSize,s=t.width,x=void 0===s?"100%":s,h=t.isRightIcon,g=void 0!==h&&h,y=t.counter,b=d(t,["bdType","icon","text","loading","bdSize","width","isRightIcon","counter"]),v=function(){switch(r){case"secondary":return{color:u.primary001,borderColor:u.primary001,backgroundColor:u.white};case"outlined":return{color:u.primary001,borderColor:u.white,backgroundColor:u.white};case"remove":return{color:u.error,borderColor:u.error,backgroundColor:u.white};default:return{color:u.white,borderColor:u.primary001,backgroundColor:u.primary001}}}(),m=function(){switch(l){case"lg":return{borderRadius:"32px",fontSize:"16px",height:"52px",icon:12,loading:"18px"};case"md":return{borderRadius:"32px",fontSize:"16px",height:"48px",icon:12,loading:"16px"};case"sm":return{borderRadius:"32px",fontSize:"14px",height:"40px",icon:12,loading:"14px"};case"xs":default:return{borderRadius:"32px",fontSize:"12px",height:"30px",icon:12,loading:"12px"};case"xxs":return{borderRadius:"32px",fontSize:"12px",height:"24px",icon:12,loading:"12px"}}}(),j={width:m.loading,height:m.loading,border:"2px solid ".concat(v.color),borderBottomColor:v.backgroundColor},w=a?e.jsx(f,{style:j}):o,C=y&&e.jsx(n.Stack,{justifyContent:"center",alignItems:"center",borderRadius:"50%",bgcolor:v.color,width:18,height:18,children:e.jsx(n.Typography,{fontSize:m.fontSize,color:v.backgroundColor,children:y})});return e.jsx(n.Button,c({sx:{borderRadius:m.borderRadius,fontSize:m.fontSize,paddingY:"8px",borderColor:v.borderColor,backgroundColor:v.backgroundColor,width:x,height:m.height,"&.MuiButton-outlined":{color:v.color,backgroundColor:v.backgroundColor},"&:hover":{borderColor:v.borderColor},"&.Mui-disabled":{color:v.color,backgroundColor:v.backgroundColor,opacity:.6}},variant:"outlined"},b,{children:e.jsxs(p,{children:[!g&&w,e.jsx(n.Box,{style:{color:v.color,fontSize:m.fontSize},children:i}),g&&w,C]})}))},p=t.styled(n.Box)((function(){return{display:"flex",alignItems:"center",justifyContent:"center",minWidth:"70px",columnGap:"8px",lineHeight:"16px",textTransform:"none"}})),f=t.styled(n.Box)((function(){return{borderRadius:"50%",display:"inline-block",boxSizing:"border-box",animation:"rotation 1s linear infinite","@keyframes rotation":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}}})),h=function(n){return e.jsx(x,c({},n,{bdType:"outlined"}))},g=function(){return e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5L1.5 13.5Z",stroke:"#EA5540",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})},y=function(t){var r,o=t.text,i=t.bdType,a=t.color,l=void 0===a?u.black:a,s=d(t,["text","bdType","color"]),x=i?{h1:{fontSize:61,fontWeight:600},h2:{fontSize:49,fontWeight:600},h3:{fontSize:39,fontWeight:600},h4:{fontSize:31,fontWeight:600},h5:{fontSize:25,fontWeight:600},h6:{fontSize:20,fontWeight:600},p1:{fontSize:16,fontWeight:400},p2:{fontSize:14,fontWeight:400},lead1:{fontSize:16,fontWeight:600},lead2:{fontSize:14,fontWeight:600},mini:{fontSize:12,fontWeight:400},tiny:{fontSize:10,fontWeight:600},badges:{fontSize:12,fontWeight:500},badgesBold:{fontSize:12,fontWeight:600}}[i]:{fontSize:16,fontWeight:400},p=(null==(r=null==i?void 0:i.toString())?void 0:r.includes("h"))?r:"body1";return e.jsx(n.Typography,c({},s,x,{color:l,variant:p,children:o}))},b=function(n){return e.jsx(y,c({},n,{bdType:"p1"}))},v=function(n){return e.jsx(y,c({},n,{bdType:"p2"}))},m=function(n){return e.jsx(y,c({},n,{bdType:"lead1"}))};function j(n){return e.jsx("svg",{className:n.className,width:n.width||"13",height:n.height||"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.77539 1.0752L11.9263 11.2261M1.77539 11.2261L11.9263 1.0752L1.77539 11.2261Z",stroke:n.color||"#3A4248",strokeWidth:"1.69181",strokeLinecap:"round",strokeLinejoin:"round"})})}var w,C,B,k,S,z,F,T,A,I,L,E,M,O=function(e,n){if(!e)return"";for(var t=0,r=String(n).split(""),o=[],i=0;i<n.length&&t<e.length;i++)"x"===r[i]?o.push(e[t++]):o.push(r[i]);return o.join("")},D=function(e,n){return void 0===e&&(e=""),void 0===n&&(n="-"),(e||"").replaceAll(n,"")},P=Object.freeze({__proto__:null,clearPattern:D,randomString:function(e){for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)n+=t.charAt(Math.floor(62*Math.random()));return n},removeZeroPrefix:function(e){return e.replace(/^0+/,"")},toPattern:O}),R=function(t){var o=t.name,i=t.label,a=t.value,l=void 0===a?"":a,c=t.tag,d=t.disabled,s=void 0!==d&&d,u=t.pattern,x=t.charPattern,p=t.isNumber,f=t.limit,h=void 0===f?9e5:f,g=t.onChange,y=void 0===g?function(){}:g,b=t.invalid,v=t.type,m=void 0===v?"text":v,j=t.containerStyled,w=t.inputStyled,C=t.rightComponent,B=r.useState(!1),k=B[0],S=B[1],z=u?O(l,u):l+"",F=b?" invalid":"",T=k?" active":"",A=s?" disabled":"";return e.jsxs(W,{className:"".concat(F).concat(T).concat(A),style:j,children:[C,e.jsx(n.InputBase,{sx:{ml:1,flex:1},id:o,className:"".concat(F).concat(T).concat(A),placeholder:i,type:m,autoComplete:"off",required:!0,disabled:s,value:z,onChange:function(e){if(y){var n=e.target.value;if(u&&(n=D(n,x)),p&&""!==n){var t=+n;n=0===t||t?n:l}n.length<=h&&y(n,o,c)}},onFocus:function(){return S(!0)},onBlur:function(){return S(!1)},style:w}),e.jsxs(H,{children:[b||""," "]})]})},W=o("div")({width:"100%",height:"56px",backgroundColor:"#f7f8f9",borderRadius:"8px",padding:"0px 10px",border:"1px solid ".concat(u.gray2),display:"flex","&.active":{border:"1px solid ".concat(u.primary001)},"&.disabled":{backgroundColor:"".concat(u.gray3)},"&.invalid":{border:"1px solid ".concat(u.error)}}),H=o("div")(w||(w=s(["\n  color: #f95247;\n  margin-top: 4px;\n  font-size: 13px;\n  font-weight: 500;\n  text-align: left;\n  display: none;\n\n  &.invalid {\n    display: block;\n  }\n"],["\n  color: #f95247;\n  margin-top: 4px;\n  font-size: 13px;\n  font-weight: 500;\n  text-align: left;\n  display: none;\n\n  &.invalid {\n    display: block;\n  }\n"]))),N={id:"91a3acd7-d985-494f-b589-be4d1a1208ed",countryName:"Thailand",countryCode:"TH",phoneCode:"+66",region:null,flag:"U+1F1F9 U+1F1ED",active:!0,createdAt:"2024-05-17T04:30:01.155Z",updatedAt:"2024-05-21T02:44:02.660Z"},q=function(t){var o=t.onChange,a=t.defaultCountry,l=void 0===a?N:a,c=t.countryList,d=void 0===c?[]:c,s=r.useState(l),x=s[0],p=s[1],f=r.useState(null),h=f[0],g=f[1],y=Boolean(h),b=r.useRef(null),v=function(e){return e.split(" ").map((function(e){return e.replace("U+","")})).map((function(e){return String.fromCodePoint(parseInt(e,16))})).join("")},m=r.useMemo((function(){return(null==d?void 0:d.length)?d.findIndex((function(e){return e.countryName===N.countryName})):0}),[d]);r.useEffect((function(){y&&b.current&&(b.current.scrollTop=59*m)}),[y,m]);return e.jsxs(n.Box,{display:"flex",alignItems:"center",children:[e.jsxs("div",{children:[e.jsx(n.Button,{"aria-controls":y?"demo-customized-menu":void 0,"aria-haspopup":"true","aria-expanded":y?"true":void 0,variant:"text",disableElevation:!0,onClick:function(e){g(e.currentTarget)},endIcon:e.jsx(i,{sx:{color:u.black}}),children:e.jsx(n.Box,{display:"flex",gap:1,paddingLeft:"4px",alignItems:"center",children:v(x.flag)})}),e.jsx(Z,{MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:h,open:y,onClose:function(){g(null)},children:d.map((function(t){var r=t.countryName,i=t.flag,a=t.phoneCode,l=v(i);return e.jsx(n.MenuItem,{selected:t.id===x.id,onClick:function(){return function(e){p(e),null==o||o(e),g(null)}(t)},children:e.jsxs(n.Box,{display:"flex",gap:2,alignItems:"center",children:[e.jsx(n.Box,{height:"33px",fontSize:25,children:l}),e.jsx(n.Box,{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"220px",children:r}),e.jsxs(n.Box,{children:["(",a,")"]})]})},t.id)}))})]}),e.jsxs(n.Typography,{"data-testid":"international-selected-code",fontWeight:"500",fontSize:"16px",borderLeft:"1px solid #c3cad4",margin:"6px 10px",paddingLeft:"12px",lineHeight:"30px",children:["(",x.phoneCode,")"]})]})},Z=o((function(t){return e.jsx(n.Menu,c({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},t))}))({"& .MuiPaper-root":{borderRadius:6,marginTop:4,maxHeight:400,width:300,border:"1px solid ".concat(u.gray1),"& .MuiMenu-list":{padding:"0"}}}),K=function(t){var r=t.length,o=t.value,i=t.onChange,a=l.useRef(new Array(r).fill(null)),c=function(e){var n=a.current[e];null==n||n.focus()},d=function(e){var n=a.current[e];null==n||n.select()};return e.jsx(n.Box,{sx:{display:"flex",gap:2,alignItems:"center",justifyContent:"center"},children:new Array(r).fill(null).map((function(t,s){var u;return e.jsx(l.Fragment,{children:e.jsx(n.TextField,{inputRef:function(e){a.current[s]=e},inputProps:{style:{textAlign:"center",color:"#176AFC"}},onKeyDown:function(e){return function(e,n){switch(e.key){case"ArrowUp":case"ArrowDown":case" ":e.preventDefault();break;case"ArrowLeft":e.preventDefault(),n>0&&(c(n-1),d(n-1));break;case"ArrowRight":e.preventDefault(),n<r-1&&(c(n+1),d(n+1));break;case"Delete":e.preventDefault();var t=o.slice(0,n)+o.slice(n+1);i(t);break;case"Backspace":e.preventDefault(),n>0&&(c(n-1),d(n-1));var a=o.slice(0,n)+o.slice(n+1);i(a)}}(e,s)},onChange:function(e){return function(e,n){var t=e.target.value.replace(/\D/g,"");if(0!==t.length){for(var l=0;l<=n&&a.current[l]&&l<n;)l+=1;var d=o.split(""),s=t[t.length-1];d[l]=s;var u=d.join("");i(u),""!==t&&n<r-1&&c(n+1)}}(e,s)},onClick:function(e){d(s)},onPaste:function(e){return function(e,n){e.preventDefault();var t=e.clipboardData;if(t.types.includes("text/plain")){var l=t.getData("text/plain");l=l.substring(0,r).trim();for(var c=0;c<=n&&a.current[c]&&c<n;)c+=1;for(var d=o.split(""),s=c;s<r;s+=1){var u=l[s-c];d[s]=u}i(d.join(""))}}(e,s)},value:null!==(u=o[s])&&void 0!==u?u:"-"})},s)}))})},U=o("div")(C||(C=s(["\n  width: 100%;\n"],["\n  width: 100%;\n"]))),Y=function(n){var t=n.timerResend,r=Math.floor(t/60),o=Math.floor(t%60),i=function(e){return"".concat(e).padStart(2,"0")};return e.jsx(m,{text:"".concat(i(r),":").concat(i(o)),color:u.royalBlue})},_=o("div")(B||(B=s(["\n  margin-top: 12px;\n  text-align: center;\n"],["\n  margin-top: 12px;\n  text-align: center;\n"]))),G=o("div")(k||(k=s(["\n  margin-top: 48px;\n  text-align: center;\n"],["\n  margin-top: 48px;\n  text-align: center;\n"]))),V=o("div")(S||(S=s(["\n  text-align: center;\n"],["\n  text-align: center;\n"]))),J=function(n){var t=n.size,r=void 0===t?1:t,o=n.color,i=void 0===o?"#07236D":o,a="".concat(Math.ceil(15*r)),l="".concat(Math.ceil(15*r));return e.jsx("svg",{width:a,height:l,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"7.5",cy:"7.5",r:"7.5",fill:i})})},Q=function(n){var t=n.size,r=void 0===t?1:t,o=n.color,i=void 0===o?"white":o,a="".concat(Math.ceil(41*r)),l="".concat(Math.ceil(41*r));return e.jsx("svg",{width:a,height:l,viewBox:"0 0 41 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M20.5 23.9141L23.9167 20.4974M23.9167 20.4974L27.3333 17.0807M23.9167 20.4974L20.5 17.0807M23.9167 20.4974L27.3333 23.9141M5.125 20.4974L16.0822 31.4546C16.7228 32.0954 17.5918 32.4555 18.4978 32.4557H32.4583C33.3645 32.4557 34.2335 32.0958 34.8743 31.455C35.515 30.8143 35.875 29.9452 35.875 29.0391V11.9557C35.875 11.0496 35.515 10.1805 34.8743 9.53978C34.2335 8.89903 33.3645 8.53906 32.4583 8.53906H18.4978C17.5918 8.53926 16.7228 8.89935 16.0822 9.54015L5.125 20.4974Z",stroke:i,strokeWidth:"1.82472",strokeLinecap:"round",strokeLinejoin:"round"})})},X=[{label:"1",text:""},{label:"2",text:"A B C"},{label:"3",text:"D E F"}],$=[{label:"4",text:"G H I"},{label:"5",text:"J K L"},{label:"6",text:"M N O"}],ee=[{label:"7",text:"P Q R S"},{label:"8",text:"T U V"},{label:"9",text:"W X Y Z"}],ne=[{status:"space"},{label:"0",text:""},{status:"delete"}],te=function(n){var t=n.onClick,r=n.onDelete,o=function(n){return void 0===n&&(n=[]),n.map((function(n,o){var i=n.status,a=n.label;if("space"===i)return e.jsx(ae,{},o);if("delete"===i)return e.jsx(le,{onClick:r,children:e.jsx(Q,{})},o);return e.jsx(ie,{onClick:function(){return t(a)},children:a},o)}))};return e.jsxs(re,{children:[e.jsx(oe,{children:o(X)}),e.jsx(oe,{children:o($)}),e.jsx(oe,{children:o(ee)}),e.jsx(oe,{children:o(ne)})]})},re=o(n.Box)(z||(z=s(["\n  width: 100%;\n"],["\n  width: 100%;\n"]))),oe=o(n.Box)(F||(F=s(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 40px;\n  padding: 10px 0px;\n"],["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 40px;\n  padding: 10px 0px;\n"]))),ie=o(n.Box)(T||(T=s(["\n  width: 68px;\n  height: 68px;\n  font-weight: 300;\n  font-size: 32px;\n  line-height: 40px;\n  color: #07236d;\n  border: 0.9px solid #07236d;\n  border-radius: 50%;\n  text-align: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  width: 68px;\n  height: 68px;\n  font-weight: 300;\n  font-size: 32px;\n  line-height: 40px;\n  color: #07236d;\n  border: 0.9px solid #07236d;\n  border-radius: 50%;\n  text-align: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ae=o(ie)(A||(A=s(["\n  border: 0px solid #07236d;\n"],["\n  border: 0px solid #07236d;\n"]))),le=o(ie)(I||(I=s(["\n  background-color: #07236d;\n  box-shadow: none;\n  font-size: 20px;\n  line-height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  background-color: #07236d;\n  box-shadow: none;\n  font-size: 20px;\n  line-height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ce=o("div")(L||(L=s(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  column-gap: 8px;\n  padding: 20px 0;\n"],["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  column-gap: 8px;\n  padding: 20px 0;\n"]))),de=o("div")(E||(E=s(["\n  width: 48px;\n  height: 48px;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 8px;\n\n  &.active {\n    font-weight: 600;\n    color: ",";\n    border: 1px solid ",";\n  }\n"],["\n  width: 48px;\n  height: 48px;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 8px;\n\n  &.active {\n    font-weight: 600;\n    color: ",";\n    border: 1px solid ",";\n  }\n"])),u.gray2,u.offWhite,u.gray2,u.royalBlue,u.royalBlue),se=o("div")(M||(M=s(["\n  padding: 12px 0;\n  text-align: center;\n"],["\n  padding: 12px 0;\n  text-align: center;\n"])));exports.Badges=function(n){return e.jsx(y,c({},n,{bdType:"badges"}))},exports.BadgesBold=function(n){return e.jsx(y,c({},n,{bdType:"badgesBold"}))},exports.BaseText=y,exports.BdBottomSheet=function(t){var o=t.height,i=void 0===o?"50%":o,a=t.open,l=t.onClose,d=t.isCloseIcon,s=t.children,u=r.useRef(null);return r.useEffect((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&l()};return a&&document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[a,l]),e.jsxs(e.Fragment,{children:[a&&e.jsx(n.Box,{sx:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.3)",zIndex:function(e){return e.zIndex.modal-1}},onClick:l}),e.jsx(n.Slide,c({direction:"up",in:a,mountOnEnter:!0,unmountOnExit:!0},t,{children:e.jsxs(n.Box,{ref:u,sx:{borderRadius:"32px 32px 0px 0px",position:"fixed",bottom:0,left:0,right:0,height:i,backgroundColor:"background.paper",boxShadow:24,p:2,overflowY:"auto",zIndex:function(e){return e.zIndex.modal}},children:[d&&e.jsx(n.Box,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center",pb:1},children:e.jsx(n.IconButton,{onClick:l,children:e.jsx(j,{})})}),e.jsx(n.Box,{sx:{mt:2},children:s})]})}))]})},exports.BdButton=x,exports.BdOutlinedButton=h,exports.BdPrimaryButton=function(n){return e.jsx(x,c({},n))},exports.BdRemoveButton=function(n){return e.jsx(x,c({},n,{icon:e.jsx(g,{}),bdType:"remove"}))},exports.BdSecondaryButton=function(n){return e.jsx(x,c({},n,{bdType:"secondary"}))},exports.Colors=u,exports.Format=P,exports.H1=function(n){return e.jsx(y,c({},n,{bdType:"h1"}))},exports.H2=function(n){return e.jsx(y,c({},n,{bdType:"h2"}))},exports.H3=function(n){return e.jsx(y,c({},n,{bdType:"h3"}))},exports.H4=function(n){return e.jsx(y,c({},n,{bdType:"h4"}))},exports.H5=function(n){return e.jsx(y,c({},n,{bdType:"h5"}))},exports.H6=function(n){return e.jsx(y,c({},n,{bdType:"h6"}))},exports.InternationalPhone=q,exports.Lead1=m,exports.Lead2=function(n){return e.jsx(y,c({},n,{bdType:"lead2"}))},exports.Mini=function(n){return e.jsx(y,c({},n,{bdType:"mini"}))},exports.MobileInput=R,exports.OtpForm=function(t){var o=t.length,i=t.value,a=t.onChange,l=t.errorMessage,c=void 0===l?"":l,d=t.refcode,s=t.refcodeLabel,x=void 0===s?"หมายเลขอ้างอิง":s,p=t.resendLabel,f=void 0===p?"ขอรหัสอีกครั้งใน":p,g=t.unitLabel,y=void 0===g?"นาที":g,j=t.resendTimeSecond,w=void 0===j?180:j,C=t.expireTimeSecond,B=void 0===C?180:C,k=t.onResend,S=t.resendBtnText,z=void 0===S?"ขอรหัสอีกครั้ง":S,F=r.useState(w),T=F[0],A=F[1],I=r.useState(B),L=I[0],E=I[1];r.useEffect((function(){var e=setInterval((function(){E(L-1)}),1e3),n=setInterval((function(){A(T-1)}),1e3);return 0===T&&clearInterval(n),0===L&&clearInterval(e),function(){clearInterval(n),clearInterval(e)}}));return e.jsxs(n.Box,{sx:{display:"flex",flexDirection:"column"},children:[e.jsxs(n.Box,{children:[e.jsx(K,{value:i,onChange:a,length:o}),c&&e.jsx(_,{children:e.jsx(v,{text:c,color:u.error})})]}),e.jsx(G,{children:e.jsxs(n.Box,{sx:{display:"flex",alignItems:"end",justifyContent:"center",gap:1},children:[e.jsx(v,{text:x}),e.jsx(v,{text:d})]})}),T>0?e.jsx(V,{children:e.jsxs(n.Box,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:1},children:[e.jsx(b,{text:f}),e.jsx(Y,{timerResend:T}),e.jsx(m,{text:y,color:u.royalBlue})]})}):e.jsx(n.Box,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:1},children:e.jsx(h,{bdSize:"md",onClick:k,text:z,width:"fit"})})]})},exports.OtpInput=K,exports.P1=b,exports.P2=v,exports.PhoneNumberForm=function(t){var r=t.countryList,o=t.onChangeCountry,i=t.onChangeMobile,a=t.isInvalid,l=t.mobile,c=t.placeholder,d=void 0===c?"":c,s=t.defaultCountry;return e.jsx(U,{children:e.jsx(R,{name:"",type:"tel",label:d,value:l,onChange:i,isNumber:!0,invalid:a,rightComponent:e.jsx(n.Box,{margin:"6px 0 6px -10px",children:e.jsx(q,{countryList:r,onChange:o,defaultCountry:s})}),containerStyled:{background:"none"},inputStyled:{background:"none"}})})},exports.PinForm=function(t){var r=t.onKeyboard,o=t.onDelete,i=t.codeList,a=t.error,l=i.map((function(n,t){var r=""!==n?e.jsx(J,{}):"";return e.jsx(de,{children:r},t)}));return e.jsxs(n.Box,{sx:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[e.jsx(ce,{children:l}),a&&e.jsx(se,{children:e.jsx(v,{text:a,color:u.error})}),e.jsx(te,{onClick:r,onDelete:o})]})},exports.PinKeyboard=te,exports.Tiny=function(n){return e.jsx(y,c({},n,{bdType:"tiny"}))};
