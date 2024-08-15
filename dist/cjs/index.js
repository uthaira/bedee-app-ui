"use strict";var e=require("react/jsx-runtime"),n=require("@mui/material"),t=require("@mui/material/styles"),r=require("react"),o=require("@mui/icons-material/KeyboardArrowDown");function i(e){var n=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}})),n.default=e,Object.freeze(n)}var l=i(r),a=function(){return a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},a.apply(this,arguments)};function d(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}function c(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var s=a(a(a(a(a(a(a({},{black:"#000000",white:"#FFFFFF"}),{gray0:"#C7C9D9",gray1:"#F3F6F9",gray2:"#EAEEF6",gray3:"#C3CAD4",gray4:"#939CA9",gray5:"#747B84",gray6:"#4A5568",gray7:"#323A43"}),{primary001:"#1E6AF6",primary002:"#4B88F8",primary003:"#78A6FA",primary004:"#A5C3FB",primary005:"#E8F0FE",primary006:"#F4F8FF"}),{secondary001:"#07236D",secondary002:"#264189",secondary003:"#455FA5",secondary004:"#849CDD",secondary005:"#A3BAF9"}),{trinary001:"#EE6E3A",trinary002:"#F18B61",trinary003:"#F5A889",trinary004:"#F8C5B0",trinary005:"#FAD3C4"}),{success:"#13C186",warning:"#EFB110",error:"#EA5540",completed:"#1E6AF6",pending:"#F9A01B"}),{brandBlack:"#3A4248",darkBlue:"#07236D",royalBlue:"#1E6AF6",cherry:"#EE6E3A",offWhite:"#F7F8F9"}),x=function(t){var r=t.bdType,o=t.icon,i=t.text,l=t.loading,c=t.bdSize,x=t.width,h=void 0===x?"100%":x,f=t.isRightIcon,g=void 0!==f&&f,C=t.counter,y=d(t,["bdType","icon","text","loading","bdSize","width","isRightIcon","counter"]),v=function(){switch(r){case"secondary":return{color:s.primary001,borderColor:s.primary001,backgroundColor:s.white};case"outlined":return{color:s.primary001,borderColor:s.white,backgroundColor:s.white};case"remove":return{color:s.error,borderColor:s.error,backgroundColor:s.white};default:return{color:s.white,borderColor:s.primary001,backgroundColor:s.primary001}}}(),b=function(){switch(c){case"lg":return{borderRadius:"32px",fontSize:"16px",height:"52px",icon:12,loading:"18px"};case"md":return{borderRadius:"32px",fontSize:"16px",height:"48px",icon:12,loading:"16px"};case"sm":return{borderRadius:"32px",fontSize:"14px",height:"40px",icon:12,loading:"14px"};case"xs":default:return{borderRadius:"32px",fontSize:"12px",height:"30px",icon:12,loading:"12px"};case"xxs":return{borderRadius:"32px",fontSize:"12px",height:"24px",icon:12,loading:"12px"}}}(),j={width:b.loading,height:b.loading,border:"2px solid ".concat(v.color),borderBottomColor:v.backgroundColor},m=l?e.jsx(p,{style:j}):o,w=C&&e.jsx(n.Stack,{justifyContent:"center",alignItems:"center",borderRadius:"50%",bgcolor:v.color,width:18,height:18,children:e.jsx(n.Typography,{fontSize:b.fontSize,color:v.backgroundColor,children:C})});return e.jsx(n.Button,a({sx:{borderRadius:b.borderRadius,fontSize:b.fontSize,paddingY:"8px",borderColor:v.borderColor,backgroundColor:v.backgroundColor,width:h,height:b.height,"&.MuiButton-outlined":{color:v.color,backgroundColor:v.backgroundColor},"&:hover":{borderColor:v.borderColor},"&.Mui-disabled":{color:v.color,backgroundColor:v.backgroundColor,opacity:.6}},variant:"outlined"},y,{children:e.jsxs(u,{children:[!g&&m,e.jsx(n.Box,{style:{color:v.color,fontSize:b.fontSize},children:i}),g&&m,w]})}))},u=t.styled(n.Box)((function(){return{display:"flex",alignItems:"center",justifyContent:"center",minWidth:"70px",columnGap:"8px",lineHeight:"16px",textTransform:"none"}})),p=t.styled(n.Box)((function(){return{borderRadius:"50%",display:"inline-block",boxSizing:"border-box",animation:"rotation 1s linear infinite","@keyframes rotation":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}}})),h=function(n){return e.jsx(x,a({},n))},f=function(n){return e.jsx(x,a({},n,{bdType:"secondary"}))},g=function(n){return e.jsx(x,a({},n,{bdType:"outlined"}))},C=function(){return e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5L1.5 13.5Z",stroke:"#EA5540",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})},y=function(t){var r,o=t.text,i=t.bdType,l=t.color,c=void 0===l?s.black:l,x=d(t,["text","bdType","color"]),u=i?{h1:{fontSize:61,fontWeight:600},h2:{fontSize:49,fontWeight:600},h3:{fontSize:39,fontWeight:600},h4:{fontSize:31,fontWeight:600},h5:{fontSize:25,fontWeight:600},h6:{fontSize:20,fontWeight:600},p1:{fontSize:16,fontWeight:400},p2:{fontSize:14,fontWeight:400},lead1:{fontSize:16,fontWeight:600},lead2:{fontSize:14,fontWeight:600},mini:{fontSize:12,fontWeight:400},tiny:{fontSize:10,fontWeight:600},badges:{fontSize:12,fontWeight:500},badgesBold:{fontSize:12,fontWeight:600}}[i]:{fontSize:16,fontWeight:400},p=(null==(r=null==i?void 0:i.toString())?void 0:r.includes("h"))?r:"body1";return e.jsx(n.Typography,a({},x,u,{color:c,variant:p,children:o}))},v=function(n){return e.jsx(y,a({},n,{bdType:"p1"}))},b=function(n){return e.jsx(y,a({},n,{bdType:"p2"}))},j=function(n){return e.jsx(y,a({},n,{bdType:"lead1"}))},m=function(n){return e.jsx(y,a({},n,{bdType:"mini"}))};function w(n){return e.jsx("svg",{className:n.className,width:n.width||"13",height:n.height||"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.77539 1.0752L11.9263 11.2261M1.77539 11.2261L11.9263 1.0752L1.77539 11.2261Z",stroke:n.color||"#3A4248",strokeWidth:"1.69181",strokeLinecap:"round",strokeLinejoin:"round"})})}var B,k,S,F,z,M,T,H,I,A,L,E,D,R,O={id:"91a3acd7-d985-494f-b589-be4d1a1208ed",countryName:"Thailand",countryCode:"TH",phoneCode:"+66",region:null,flag:"U+1F1F9 U+1F1ED",active:!0,createdAt:"2024-05-17T04:30:01.155Z",updatedAt:"2024-05-21T02:44:02.660Z"},V=function(t){var i=t.onChange,l=t.defaultCountry,a=void 0===l?O:l,d=t.countryList,c=void 0===d?[]:d,x=r.useState(a),u=x[0],p=x[1],h=r.useState(null),f=h[0],g=h[1],C=Boolean(f),y=r.useRef(null),v=function(e){return e.split(" ").map((function(e){return e.replace("U+","")})).map((function(e){return String.fromCodePoint(parseInt(e,16))})).join("")},b=r.useMemo((function(){return(null==c?void 0:c.length)?c.findIndex((function(e){return e.countryName===O.countryName})):0}),[c]);r.useEffect((function(){C&&y.current&&(y.current.scrollTop=59*b)}),[C,b]);return e.jsxs(n.Box,{display:"flex",alignItems:"center",children:[e.jsxs("div",{children:[e.jsx(n.Button,{"aria-controls":C?"demo-customized-menu":void 0,"aria-haspopup":"true","aria-expanded":C?"true":void 0,variant:"text",disableElevation:!0,onClick:function(e){g(e.currentTarget)},endIcon:e.jsx(o,{sx:{color:s.black}}),children:e.jsx(n.Box,{display:"flex",gap:1,paddingLeft:"4px",alignItems:"center",children:v(u.flag)})}),e.jsx(Z,{MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:f,open:C,onClose:function(){g(null)},children:c.map((function(t){var r=t.countryName,o=t.flag,l=t.phoneCode,a=v(o);return e.jsx(n.MenuItem,{selected:t.id===u.id,onClick:function(){return function(e){p(e),null==i||i(e),g(null)}(t)},children:e.jsxs(n.Box,{display:"flex",gap:2,alignItems:"center",children:[e.jsx(n.Box,{height:"33px",fontSize:25,children:a}),e.jsx(n.Box,{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"220px",children:r}),e.jsxs(n.Box,{children:["(",l,")"]})]})},t.id)}))})]}),e.jsxs(n.Typography,{"data-testid":"international-selected-code",fontWeight:"500",fontSize:"16px",borderLeft:"1px solid #c3cad4",margin:"6px 10px",paddingLeft:"12px",lineHeight:"30px",children:["(",u.phoneCode,")"]})]})},Z=t.styled((function(t){return e.jsx(n.Menu,a({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},t))}))({"& .MuiPaper-root":{borderRadius:6,marginTop:4,maxHeight:400,width:300,border:"1px solid ".concat(s.gray1),"& .MuiMenu-list":{padding:"0"}}}),P=function(e,n){if(!e)return"";for(var t=0,r=String(n).split(""),o=[],i=0;i<n.length&&t<e.length;i++)"x"===r[i]?o.push(e[t++]):o.push(r[i]);return o.join("")},W=function(e,n){return void 0===e&&(e=""),void 0===n&&(n="-"),(e||"").replaceAll(n,"")},N=Object.freeze({__proto__:null,clearPattern:W,randomString:function(e){for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)n+=t.charAt(Math.floor(62*Math.random()));return n},removeZeroPrefix:function(e){return e.replace(/^0+/,"")},toPattern:P}),q=function(t){var o=t.name,i=t.label,l=t.value,a=void 0===l?"":l,d=t.tag,c=t.disabled,s=void 0!==c&&c,x=t.pattern,u=t.charPattern,p=t.isNumber,h=t.limit,f=void 0===h?9e5:h,g=t.onChange,C=void 0===g?function(){}:g,y=t.invalid,v=t.type,b=void 0===v?"text":v,j=t.containerStyled,m=t.inputStyled,w=t.rightComponent,B=r.useState(!1),k=B[0],S=B[1],F=x?P(a,x):a+"",z=y?" invalid":"",M=k?" active":"",T=s?" disabled":"";return e.jsxs(K,{className:"".concat(z).concat(M).concat(T),style:j,children:[w,e.jsx(n.InputBase,{sx:{ml:1,flex:1},id:o,className:"".concat(z).concat(M).concat(T),placeholder:i,type:b,autoComplete:"off",required:!0,disabled:s,value:F,onChange:function(e){if(C){var n=e.target.value;if(x&&(n=W(n,u)),p&&""!==n){var t=+n;n=0===t||t?n:a}n.length<=f&&C(n,o,d)}},onFocus:function(){return S(!0)},onBlur:function(){return S(!1)},style:m}),e.jsxs(U,{children:[y||""," "]})]})},K=t.styled("div")({width:"100%",height:"56px",backgroundColor:"#f7f8f9",borderRadius:"8px",padding:"0px 10px",border:"1px solid ".concat(s.gray2),display:"flex","&.active":{border:"1px solid ".concat(s.primary001)},"&.disabled":{backgroundColor:"".concat(s.gray3)},"&.invalid":{border:"1px solid ".concat(s.error)}}),U=t.styled("div")(B||(B=c(["\n  color: #f95247;\n  margin-top: 4px;\n  font-size: 13px;\n  font-weight: 500;\n  text-align: left;\n  display: none;\n\n  &.invalid {\n    display: block;\n  }\n"],["\n  color: #f95247;\n  margin-top: 4px;\n  font-size: 13px;\n  font-weight: 500;\n  text-align: left;\n  display: none;\n\n  &.invalid {\n    display: block;\n  }\n"]))),Y=t.styled("div")(k||(k=c(["\n  width: 100%;\n"],["\n  width: 100%;\n"]))),G=function(n){var t=n.timerResend,r=Math.floor(t/60),o=Math.floor(t%60),i=function(e){return"".concat(e).padStart(2,"0")};return e.jsx(j,{text:"".concat(i(r),":").concat(i(o)),color:s.royalBlue})},X=function(t){var r=t.length,o=t.value,i=t.onChange,a=l.useRef(new Array(r).fill(null)),d=function(e){var n=a.current[e];null==n||n.focus()},c=function(e){var n=a.current[e];null==n||n.select()};return e.jsx(n.Box,{sx:{display:"flex",gap:2,alignItems:"center",justifyContent:"center"},children:new Array(r).fill(null).map((function(t,s){var x;return e.jsx(l.Fragment,{children:e.jsx(n.TextField,{inputRef:function(e){a.current[s]=e},inputProps:{style:{textAlign:"center",color:"#176AFC"}},onKeyDown:function(e){return function(e,n){switch(e.key){case"ArrowUp":case"ArrowDown":case" ":e.preventDefault();break;case"ArrowLeft":e.preventDefault(),n>0&&(d(n-1),c(n-1));break;case"ArrowRight":e.preventDefault(),n<r-1&&(d(n+1),c(n+1));break;case"Delete":e.preventDefault();var t=o.slice(0,n)+o.slice(n+1);i(t);break;case"Backspace":e.preventDefault(),n>0&&(d(n-1),c(n-1));var l=o.slice(0,n)+o.slice(n+1);i(l)}}(e,s)},onChange:function(e){return function(e,n){var t=e.target.value.replace(/\D/g,"");if(0!==t.length){for(var l=0;l<=n&&a.current[l]&&l<n;)l+=1;var c=o.split(""),s=t[t.length-1];c[l]=s;var x=c.join("");i(x),""!==t&&n<r-1&&d(n+1)}}(e,s)},onClick:function(e){c(s)},onPaste:function(e){return function(e,n){e.preventDefault();var t=e.clipboardData;if(t.types.includes("text/plain")){var l=t.getData("text/plain");l=l.substring(0,r).trim();for(var d=0;d<=n&&a.current[d]&&d<n;)d+=1;for(var c=o.split(""),s=d;s<r;s+=1){var x=l[s-d];c[s]=x}i(c.join(""))}}(e,s)},value:null!==(x=o[s])&&void 0!==x?x:"-"})},s)}))})},_=t.styled("div")(S||(S=c(["\n  margin-top: 12px;\n  text-align: center;\n"],["\n  margin-top: 12px;\n  text-align: center;\n"]))),J=t.styled("div")(F||(F=c(["\n  margin-top: 48px;\n  text-align: center;\n"],["\n  margin-top: 48px;\n  text-align: center;\n"]))),Q=t.styled("div")(z||(z=c(["\n  text-align: center;\n"],["\n  text-align: center;\n"]))),$=function(n){var t=n.size,r=void 0===t?1:t,o=n.color,i=void 0===o?"#07236D":o,l="".concat(Math.ceil(15*r)),a="".concat(Math.ceil(15*r));return e.jsx("svg",{width:l,height:a,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"7.5",cy:"7.5",r:"7.5",fill:i})})},ee=function(n){var t=n.size,r=void 0===t?1:t,o=n.color,i=void 0===o?"white":o,l="".concat(Math.ceil(41*r)),a="".concat(Math.ceil(41*r));return e.jsx("svg",{width:l,height:a,viewBox:"0 0 41 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M20.5 23.9141L23.9167 20.4974M23.9167 20.4974L27.3333 17.0807M23.9167 20.4974L20.5 17.0807M23.9167 20.4974L27.3333 23.9141M5.125 20.4974L16.0822 31.4546C16.7228 32.0954 17.5918 32.4555 18.4978 32.4557H32.4583C33.3645 32.4557 34.2335 32.0958 34.8743 31.455C35.515 30.8143 35.875 29.9452 35.875 29.0391V11.9557C35.875 11.0496 35.515 10.1805 34.8743 9.53978C34.2335 8.89903 33.3645 8.53906 32.4583 8.53906H18.4978C17.5918 8.53926 16.7228 8.89935 16.0822 9.54015L5.125 20.4974Z",stroke:i,strokeWidth:"1.82472",strokeLinecap:"round",strokeLinejoin:"round"})})},ne=[{label:"1",text:""},{label:"2",text:"A B C"},{label:"3",text:"D E F"}],te=[{label:"4",text:"G H I"},{label:"5",text:"J K L"},{label:"6",text:"M N O"}],re=[{label:"7",text:"P Q R S"},{label:"8",text:"T U V"},{label:"9",text:"W X Y Z"}],oe=[{status:"space"},{label:"0",text:""},{status:"delete"}],ie=function(n){var t=n.onClick,r=n.onDelete,o=function(n){return void 0===n&&(n=[]),n.map((function(n,o){var i=n.status,l=n.label;if("space"===i)return e.jsx(ce,{},o);if("delete"===i)return e.jsx(se,{onClick:r,children:e.jsx(ee,{})},o);return e.jsx(de,{onClick:function(){return t(l)},children:l},o)}))};return e.jsxs(le,{children:[e.jsx(ae,{children:o(ne)}),e.jsx(ae,{children:o(te)}),e.jsx(ae,{children:o(re)}),e.jsx(ae,{children:o(oe)})]})},le=t.styled(n.Box)(M||(M=c(["\n  width: 100%;\n"],["\n  width: 100%;\n"]))),ae=t.styled(n.Box)(T||(T=c(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 40px;\n  padding: 10px 0px;\n"],["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 40px;\n  padding: 10px 0px;\n"]))),de=t.styled(n.Box)(H||(H=c(["\n  width: 68px;\n  height: 68px;\n  font-weight: 300;\n  font-size: 32px;\n  line-height: 40px;\n  color: #07236d;\n  border: 0.9px solid #07236d;\n  border-radius: 50%;\n  text-align: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  width: 68px;\n  height: 68px;\n  font-weight: 300;\n  font-size: 32px;\n  line-height: 40px;\n  color: #07236d;\n  border: 0.9px solid #07236d;\n  border-radius: 50%;\n  text-align: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ce=t.styled(de)(I||(I=c(["\n  border: 0px solid #07236d;\n"],["\n  border: 0px solid #07236d;\n"]))),se=t.styled(de)(A||(A=c(["\n  background-color: #07236d;\n  box-shadow: none;\n  font-size: 20px;\n  line-height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  background-color: #07236d;\n  box-shadow: none;\n  font-size: 20px;\n  line-height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),xe=t.styled("div")(L||(L=c(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  column-gap: 8px;\n  padding: 20px 0;\n"],["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  column-gap: 8px;\n  padding: 20px 0;\n"]))),ue=t.styled("div")(E||(E=c(["\n  width: 48px;\n  height: 48px;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 8px;\n\n  &.active {\n    font-weight: 600;\n    color: ",";\n    border: 1px solid ",";\n  }\n"],["\n  width: 48px;\n  height: 48px;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 8px;\n\n  &.active {\n    font-weight: 600;\n    color: ",";\n    border: 1px solid ",";\n  }\n"])),s.gray2,s.offWhite,s.gray2,s.royalBlue,s.royalBlue),pe=t.styled("div")(D||(D=c(["\n  padding: 12px 0;\n  text-align: center;\n"],["\n  padding: 12px 0;\n  text-align: center;\n"]))),he=n.styled(n.Box)((function(e){var n=e.theme,t=e.color,r=e.variant;return{backgroundColor:"default"===r?t:"transparent",color:n.palette.common.white,borderRadius:"4px",padding:n.spacing(.5,.75),display:"inline-flex",alignItems:"center",border:"outlined"===r?"1px solid ".concat(t):"none"}})),fe=function(){return e.jsxs("svg",{width:"91",height:"18",viewBox:"0 0 91 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M33.1337 9.54103C33.4189 9.35187 33.6764 9.12439 33.8991 8.86503C34.3904 8.28083 34.6366 7.50573 34.6377 6.53972V6.22675C34.6377 4.83198 34.1557 3.75852 33.1919 3.00636C32.228 2.25421 30.8466 1.87709 29.0478 1.875H23.1797V17.6906H29.6685C30.8954 17.6906 31.9237 17.5127 32.7534 17.157C33.5227 16.851 34.1803 16.3195 34.6393 15.6329C35.0827 14.9198 35.3062 14.0927 35.282 13.2543V12.957C35.282 11.9618 35.0395 11.1726 34.5544 10.5895C34.1684 10.1355 33.6822 9.77668 33.1337 9.54103ZM29.2693 4.62126C29.9262 4.62126 30.4082 4.78817 30.7152 5.12199C31.0295 5.4553 31.1756 5.92161 31.1756 6.51781C31.2006 7.01468 31.0361 7.50262 30.7152 7.8839C30.4092 8.22503 29.9273 8.39559 29.2693 8.39559H26.6135V4.62126H29.2693ZM31.3123 14.4311C30.9823 14.7722 30.4894 14.9428 29.8335 14.9428H26.6056V11.0401H29.8398C30.4967 11.0401 30.9896 11.207 31.3186 11.5409C31.6476 11.8747 31.8116 12.3546 31.8105 12.9805C31.8105 13.6064 31.6444 14.09 31.3123 14.4311Z",fill:"#091089"}),e.jsx("path",{d:"M45.8137 6.31156C44.9483 5.75031 43.887 5.46969 42.6298 5.46969C41.751 5.45446 40.879 5.62514 40.0713 5.97043C39.3527 6.28196 38.7095 6.74356 38.1855 7.324C37.6813 7.8894 37.2889 8.54454 37.0289 9.25498C36.7643 9.97584 36.6302 10.7377 36.6328 11.5052V11.9308C36.6328 12.6843 36.7669 13.4319 37.0289 14.1388C37.2924 14.856 37.6885 15.5179 38.1965 16.0901C38.7269 16.6854 39.3811 17.1586 40.1138 17.4765C40.949 17.8319 41.8506 18.0063 42.7587 17.9882C43.6577 18.0061 44.5497 17.8277 45.3721 17.4656C46.104 17.1372 46.7495 16.6444 47.2579 16.0259C47.7574 15.4177 48.1033 14.6993 48.2668 13.9306H45.1238C44.9601 14.3113 44.6737 14.6269 44.3098 14.8273C43.839 15.0866 43.3057 15.2122 42.7681 15.1903C42.0829 15.1903 41.5261 15.0479 41.0976 14.7631C40.6627 14.4715 40.3324 14.0494 40.1546 13.5582C40.0412 13.2511 39.9616 12.9326 39.9173 12.6084H48.4869V11.4567C48.496 10.4323 48.2611 9.42041 47.8017 8.50387C47.3484 7.60882 46.6618 6.85161 45.8137 6.31156ZM40.1704 9.83083C40.3529 9.35062 40.6828 8.93994 41.1133 8.65722C41.571 8.3825 42.0988 8.24555 42.6329 8.26289C43.1509 8.24409 43.6625 8.38153 44.1007 8.65722C44.5042 8.93463 44.8112 9.32996 44.9792 9.78858C45.0867 10.0741 45.1621 10.3706 45.2039 10.6727H39.9346C39.9823 10.3844 40.0613 10.1021 40.1704 9.83083Z",fill:"#091089"}),e.jsx("path",{d:"M62.6785 4.16904C61.9201 3.43043 61.0156 2.85704 60.0226 2.4853C58.9655 2.06802 57.7303 1.85938 56.3169 1.85938H50.5117V17.6875H56.3169C57.586 17.7011 58.8454 17.4649 60.0226 16.9927C61.0212 16.597 61.9259 15.9979 62.6785 15.2339C63.3722 14.5247 63.9148 13.6832 64.2736 12.7599C64.6203 11.8686 64.7983 10.921 64.7985 9.96512V9.49568C64.8028 8.50839 64.6249 7.52872 64.2736 6.60546C63.9218 5.68969 63.378 4.85909 62.6785 4.16904ZM60.9105 11.6442C60.7045 12.196 60.3831 12.6979 59.9676 13.1167C59.5456 13.5332 59.0378 13.8535 58.4794 14.0555C57.8442 14.3007 57.1694 14.428 56.4882 14.4311H54.0241V5.15175H56.4882C57.1639 5.14176 57.8366 5.24274 58.4794 5.45062C59.0377 5.63235 59.5468 5.93909 59.9676 6.34727C60.3827 6.75729 60.7043 7.25149 60.9105 7.79628C61.3527 9.04166 61.3527 10.4004 60.9105 11.6457V11.6442Z",fill:"#091089"}),e.jsx("path",{d:"M75.2067 6.31156C74.3423 5.75031 73.2821 5.46969 72.0259 5.46969C71.1466 5.45443 70.2741 5.6251 69.4659 5.97043C68.7469 6.28141 68.1037 6.74309 67.5801 7.324C67.0753 7.88902 66.6828 8.54427 66.4234 9.25498C66.1581 9.97565 66.024 10.7376 66.0274 11.5052V11.9308C66.0265 12.6844 66.1606 13.4321 66.4234 14.1388C66.6864 14.856 67.0819 15.5178 67.5895 16.0901C68.1198 16.6854 68.7741 17.1586 69.5068 17.4765C70.342 17.8319 71.2435 18.0063 72.1516 17.9882C73.0507 18.0061 73.9427 17.8277 74.7651 17.4656C75.4968 17.137 76.1423 16.6443 76.6509 16.0259C77.148 15.4184 77.4928 14.7018 77.6567 13.9354H74.5136C74.349 14.3154 74.0628 14.6306 73.6996 14.832C73.2281 15.0911 72.6944 15.2166 72.1564 15.195C71.4712 15.195 70.9143 15.0526 70.4858 14.7678C70.0512 14.4758 69.721 14.0539 69.5429 13.5629C69.428 13.2563 69.3484 12.9376 69.3056 12.6131H77.8736V11.4614C77.8834 10.4369 77.6486 9.42484 77.1884 8.50856C76.7372 7.6128 76.0528 6.85406 75.2067 6.31156ZM69.5618 9.83083C69.7449 9.35094 70.0747 8.94042 70.5047 8.65722C70.9629 8.38229 71.4912 8.24534 72.0259 8.26289C72.5434 8.24432 73.0544 8.38175 73.4921 8.65722C73.8956 8.93463 74.2026 9.32997 74.3706 9.78859C74.4789 10.0739 74.5542 10.3705 74.5954 10.6727H69.326C69.3737 10.3844 69.4527 10.1021 69.5618 9.83083Z",fill:"#091089"}),e.jsx("path",{d:"M90.9907 11.4629C90.9998 10.4386 90.765 9.42666 90.3055 8.51011C89.8538 7.61642 89.1694 6.85985 88.3238 6.31937C87.4595 5.75812 86.3993 5.4775 85.1431 5.4775C84.2638 5.46224 83.3912 5.63291 82.5831 5.97824C81.8641 6.28922 81.2208 6.7509 80.6972 7.33181C80.1925 7.89683 79.8 8.55207 79.5406 9.26279C79.2761 9.98365 79.142 10.7455 79.1446 11.513V11.9386C79.1445 12.6921 79.2786 13.4397 79.5406 14.1466C79.8041 14.8639 80.2002 15.5257 80.7082 16.0979C81.2383 16.6935 81.8927 17.1667 82.6255 17.4843C83.4607 17.8397 84.3623 18.0141 85.2704 17.996C86.1714 18.0126 87.0652 17.832 87.8885 17.4671C88.6204 17.1388 89.2659 16.646 89.7744 16.0275C90.2721 15.4203 90.6169 14.7036 90.7801 13.9369H87.6371C87.4724 14.317 87.1862 14.6322 86.823 14.8335C86.3522 15.0926 85.8189 15.2182 85.2814 15.1966C84.5962 15.1966 84.0394 15.0542 83.6108 14.7694C83.1759 14.4777 82.8457 14.0557 82.6679 13.5645C82.553 13.2578 82.4734 12.9392 82.4306 12.6146H91.0001L90.9907 11.4629ZM82.6805 9.83238C82.8634 9.35239 83.1933 8.94182 83.6234 8.65877C84.0817 8.38401 84.61 8.24707 85.1446 8.26444C85.6626 8.24584 86.1742 8.38327 86.6125 8.65877C87.0158 8.93596 87.3223 9.33143 87.4894 9.79014C87.5983 10.0752 87.6737 10.3719 87.7141 10.6743H82.4448C82.4917 10.3858 82.5708 10.1034 82.6805 9.83238Z",fill:"#091089"}),e.jsx("path",{d:"M0 7.31641H10.5968V17.8617H1.98798C1.72699 17.8619 1.46852 17.8109 1.22733 17.7116C0.986148 17.6123 0.766982 17.4666 0.582361 17.2829C0.397739 17.0993 0.251281 16.8811 0.151357 16.6411C0.051432 16.401 -8.16772e-08 16.1437 0 15.8838V7.31641Z",fill:"#081288"}),e.jsx("path",{d:"M0.000785819 7.31718V5.36742C-0.01133 4.66695 0.116764 3.97109 0.377594 3.32044C0.638423 2.66978 1.02677 2.07736 1.51997 1.57773C2.01317 1.07811 2.60136 0.681274 3.25021 0.410392C3.89907 0.139509 4.5956 0 5.29918 0C6.00276 0 6.69929 0.139509 7.34815 0.410392C7.99701 0.681274 8.58519 1.07811 9.0784 1.57773C9.5716 2.07736 9.95994 2.66978 10.2208 3.32044C10.4816 3.97109 10.6097 4.66695 10.5976 5.36742V7.31718H0.000785819Z",fill:"#007AFF"}),e.jsx("path",{d:"M10.6094 7.31641H12.5581C13.9631 7.31641 15.3105 7.87217 16.304 8.86142C17.2975 9.85068 17.8557 11.1924 17.8557 12.5914C17.8557 13.9904 17.2975 15.3321 16.304 16.3214C15.3105 17.3106 13.9631 17.8664 12.5581 17.8664H10.6094V7.31641Z",fill:"#FF3500"})]})},ge=function(){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M1.19922 8.40964C1.36864 8.02694 1.63205 7.77293 2.0767 7.77124C2.41498 7.76955 2.66488 7.92759 2.84781 8.20531C3.05944 8.52648 3.2722 8.84709 3.47764 9.15698C3.68928 8.60325 3.85813 8.04048 4.11029 7.51836C5.64181 4.35346 8.13806 2.41285 11.6114 1.915C15.2159 1.39853 18.2401 2.64372 20.5467 5.44399C23.4932 9.02095 23.5439 14.1236 20.7274 17.7988C19.0506 19.9861 16.8116 21.2764 14.0722 21.544C10.2898 21.9137 7.25719 20.4997 4.9889 17.4455C4.57746 16.8912 4.8026 16.1856 5.42961 16.001C5.80391 15.8904 6.17877 16.023 6.42417 16.3707C6.96057 17.1305 7.59997 17.7853 8.35532 18.3283C12.8733 21.5773 19.3073 19.2404 20.7043 13.8431C21.8137 9.55661 19.3523 5.23909 15.0859 4.05034C10.7705 2.84749 6.3617 5.43721 5.22811 9.72821C5.21967 9.76095 5.21573 9.79425 5.20391 9.8569C5.67502 9.53912 6.11911 9.23318 6.57051 8.93741C6.89303 8.72573 7.27802 8.73364 7.57858 8.95152C7.8949 9.18069 8.03505 9.50356 7.9298 9.8744C7.87239 10.0759 7.73787 10.3 7.5707 10.4174C6.58852 11.1083 5.59003 11.7761 4.58984 12.441C4.12323 12.7509 3.6026 12.621 3.27839 12.1288C2.58271 11.0727 1.89209 10.0155 1.19922 8.95942C1.19922 8.77654 1.19922 8.59309 1.19922 8.4102V8.40964Z",fill:"#1E6AF6"}),e.jsx("path",{d:"M11.9866 9.40651C11.9866 8.64619 11.9804 7.88587 11.9888 7.12611C11.9939 6.68301 12.3327 6.31555 12.7616 6.25797C13.1877 6.20096 13.6036 6.4544 13.7308 6.86589C13.7714 6.99741 13.7837 7.14248 13.7843 7.28133C13.7883 8.56265 13.7894 9.8434 13.7832 11.1247C13.7826 11.2794 13.8299 11.3849 13.9368 11.4922C14.6961 12.2536 15.4509 13.0196 16.2051 13.7867C16.4635 14.0497 16.5496 14.3647 16.4337 14.7175C16.3205 15.0629 16.0689 15.2616 15.7143 15.3203C15.4262 15.3677 15.165 15.2848 14.9607 15.0793C14.0483 14.1632 13.1404 13.2414 12.2342 12.3191C12.053 12.1351 11.9837 11.9025 11.9849 11.6446C11.9871 10.8984 11.986 10.1522 11.986 9.40651H11.9866Z",fill:"#1E6AF6"})]})},Ce=function(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.9981 2C14.4301 2 16.3981 3.968 16.3981 6.39999C16.3981 8.83198 14.4301 10.8 11.9981 10.8C9.56605 10.8 7.59803 8.83198 7.59803 6.39999C7.59803 3.968 9.56605 2 11.9981 2ZM17.6 12.4004C18.9248 12.4004 20 13.4756 20 14.8004V15.6004C20 18.7571 17.0256 22.0003 12 22.0003C6.9744 22.0003 4 18.7571 4 15.6004V14.8004C4 13.4756 5.0752 12.4004 6.4 12.4004H17.6Z",fill:"#1E6AF6"})})};!function(e){e.TH="th",e.EN="en"}(R||(R={}));var ye=t.styled(n.Box)((function(){return{height:"32px",borderRadius:25,display:"flex",justifyContent:"center",backgroundColor:s.gray5}})),ve=function(t){var r=t.localeLanguage,o=t.updatedSwitchData,i=t.width;return e.jsx(n.Box,{display:"flex",flex:1,children:e.jsx(ye,{width:i,children:e.jsxs(n.ToggleButtonGroup,{value:r,exclusive:!0,onChange:function(e,n){null!==n&&o(n)},sx:{width:"100%"},children:[e.jsx(n.ToggleButton,{value:"th",sx:{"&.MuiToggleButton-root":{backgroundColor:r===R.TH?s.primary001:s.gray5,color:r===R.TH?s.white:s.gray3,borderRadius:25,border:"none","&:hover":{backgroundColor:r===R.TH?s.primary002:s.gray5}}},children:"ไทย"}),e.jsx(n.ToggleButton,{value:"en",sx:{"&.MuiToggleButton-root":{backgroundColor:r===R.EN?s.primary001:s.gray5,color:r===R.EN?s.white:s.gray3,borderRadius:25,border:"none","&:hover":{backgroundColor:r===R.EN?s.primary002:s.gray5}}},children:"ENG"})]})})})};exports.Badge=function(t){var r=t.color,o=t.icon,i=t.text,l=t.variant,a=void 0===l?"default":l;return e.jsxs(he,{color:r,variant:a,children:[o&&e.jsx(n.Box,{sx:{display:"flex",alignItems:"center",marginRight:"4px"},children:o}),i]})},exports.Badges=function(n){return e.jsx(y,a({},n,{bdType:"badges"}))},exports.BadgesBold=function(n){return e.jsx(y,a({},n,{bdType:"badgesBold"}))},exports.BaseText=y,exports.BdBottomSheet=function(t){var o=t.height,i=void 0===o?"50%":o,l=t.open,d=t.onClose,c=t.isCloseIcon,s=t.children,x=r.useRef(null);return r.useEffect((function(){var e=function(e){x.current&&!x.current.contains(e.target)&&d()};return l&&document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[l,d]),e.jsxs(e.Fragment,{children:[l&&e.jsx(n.Box,{sx:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.3)",zIndex:function(e){return e.zIndex.modal-1}},onClick:d}),e.jsx(n.Slide,a({direction:"up",in:l,mountOnEnter:!0,unmountOnExit:!0},t,{children:e.jsxs(n.Box,{ref:x,sx:{borderRadius:"32px 32px 0px 0px",position:"fixed",bottom:0,left:0,right:0,height:i,backgroundColor:"background.paper",boxShadow:24,p:2,overflowY:"auto",zIndex:function(e){return e.zIndex.modal}},children:[c&&e.jsx(n.Box,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center",pb:1},children:e.jsx(n.IconButton,{onClick:d,children:e.jsx(w,{})})}),e.jsx(n.Box,{sx:{mt:2},children:s})]})}))]})},exports.BdButton=x,exports.BdOutlinedButton=g,exports.BdPrimaryButton=h,exports.BdRemoveButton=function(n){return e.jsx(x,a({},n,{icon:e.jsx(C,{}),bdType:"remove"}))},exports.BdSecondaryButton=f,exports.CircleIcon=$,exports.CloseIcon=w,exports.Colors=s,exports.DelIcon=ee,exports.Format=N,exports.H1=function(n){return e.jsx(y,a({},n,{bdType:"h1"}))},exports.H2=function(n){return e.jsx(y,a({},n,{bdType:"h2"}))},exports.H3=function(n){return e.jsx(y,a({},n,{bdType:"h3"}))},exports.H4=function(n){return e.jsx(y,a({},n,{bdType:"h4"}))},exports.H5=function(n){return e.jsx(y,a({},n,{bdType:"h5"}))},exports.H6=function(n){return e.jsx(y,a({},n,{bdType:"h6"}))},exports.InternationalPhone=V,exports.LanguageSwitch=ve,exports.Lead1=j,exports.Lead2=function(n){return e.jsx(y,a({},n,{bdType:"lead2"}))},exports.LogoIcon=function(n){var t=n.size,r=void 0===t?1:t,o="".concat(Math.ceil(31*r)),i="".concat(Math.ceil(29*r));return e.jsxs("svg",{width:o,height:i,viewBox:"0 0 31 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M0 12H18V29H3.37684C2.93351 29.0003 2.49446 28.9181 2.08478 28.758C1.6751 28.5979 1.30284 28.3631 0.989241 28.067C0.675638 27.7709 0.426837 27.4192 0.257102 27.0322C0.0873679 26.6452 -1.38739e-07 26.2303 0 25.8114V12Z",fill:"#081288"}),e.jsx("path",{d:"M0.00133446 12V8.80244C-0.0192427 7.65369 0.198337 6.5125 0.641323 5.44544C1.08431 4.37838 1.74385 3.40682 2.58149 2.58744C3.41913 1.76807 4.4181 1.11727 5.5201 0.673032C6.6221 0.228792 7.80508 0 9.00002 0C10.195 0 11.3779 0.228792 12.4799 0.673032C13.5819 1.11727 14.5809 1.76807 15.4185 2.58744C16.2562 3.40682 16.9157 4.37838 17.3587 5.44544C17.8017 6.5125 18.0192 7.65369 17.9987 8.80244V12H0.00133446Z",fill:"#007AFF"}),e.jsx("path",{d:"M18 12H21.496C24.0166 12 26.434 12.8955 28.2163 14.4896C29.9987 16.0837 31 18.2457 31 20.5C31 22.7543 29.9987 24.9163 28.2163 26.5104C26.434 28.1045 24.0166 29 21.496 29H18V12Z",fill:"#FF3500"})]})},exports.Mini=m,exports.MobileInput=q,exports.OtpForm=function(t){var r=t.length,o=t.value,i=t.onChange,l=t.errorMessage,a=void 0===l?"":l,d=t.refcode,c=t.refcodeLabel,x=void 0===c?"หมายเลขอ้างอิง":c,u=t.resendLabel,p=void 0===u?"ขอรหัสอีกครั้งใน":u,h=t.unitLabel,f=void 0===h?"นาที":h,C=t.onResend,y=t.resendBtnText,m=void 0===y?"ขอรหัสอีกครั้ง":y,w=t.timeRemain,B=void 0===w?0:w;return e.jsxs(n.Box,{sx:{display:"flex",flexDirection:"column"},children:[e.jsxs(n.Box,{children:[e.jsx(X,{value:o,onChange:i,length:r}),a&&e.jsx(_,{children:e.jsx(b,{text:a,color:s.error})})]}),e.jsx(J,{children:e.jsxs(n.Box,{sx:{display:"flex",alignItems:"end",justifyContent:"center",gap:1},children:[e.jsx(b,{text:x}),e.jsx(b,{text:d})]})}),B>0?e.jsx(Q,{children:e.jsxs(n.Box,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:1},children:[e.jsx(v,{text:p}),e.jsx(G,{timerResend:B}),e.jsx(j,{text:f,color:s.royalBlue})]})}):e.jsx(n.Box,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:1},children:e.jsx(g,{bdSize:"md",onClick:C,text:m,width:"fit"})})]})},exports.OtpInput=X,exports.P1=v,exports.P2=b,exports.PhoneNumberForm=function(t){var r=t.countryList,o=t.onChangeCountry,i=t.onChangeMobile,l=t.isInvalid,a=t.mobile,d=t.placeholder,c=void 0===d?"":d,s=t.defaultCountry;return e.jsx(Y,{children:e.jsx(q,{name:"",type:"tel",label:c,value:a,onChange:i,isNumber:!0,invalid:l,rightComponent:e.jsx(n.Box,{margin:"6px 0 6px -10px",children:e.jsx(V,{countryList:r,onChange:o,defaultCountry:s})}),containerStyled:{background:"none"},inputStyled:{background:"none"}})})},exports.PinForm=function(t){var r=t.onKeyboard,o=t.onDelete,i=t.codeList,l=t.error,a=i.map((function(n,t){var r=""!==n?e.jsx($,{}):"";return e.jsx(ue,{children:r},t)}));return e.jsxs(n.Box,{sx:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[e.jsx(xe,{children:a}),l&&e.jsx(pe,{children:e.jsx(b,{text:l,color:s.error})}),e.jsx(ie,{onClick:r,onDelete:o})]})},exports.PinKeyboard=ie,exports.ProfileHeader=function(t){var r=t.headerText,o=void 0===r?"":r,i=t.loginText,l=void 0===i?"":i,a=t.registerText,d=void 0===a?"":a,c=t.welcomeText,x=void 0===c?"":c,u=t.nameText,p=void 0===u?"":u,g=t.isLogin,C=void 0!==g&&g,v=t.localeLanguage,j=void 0===v?"":v,w=t.updatedSwitchData,B=void 0===w?function(){}:w,k=t.onActivity,S=void 0===k?function(){}:k,F=t.onProfile,z=void 0===F?function(){}:F,M=t.onLogin,T=void 0===M?function(){}:M,H=t.onRegister,I=void 0===H?function(){}:H;return e.jsxs(e.Fragment,{children:[e.jsxs(n.Stack,{width:"100%",direction:"row",justifyContent:"space-between",alignItems:"center",paddingX:"16px",paddingY:"12px",children:[e.jsxs(n.Box,{children:[e.jsx(fe,{}),C&&e.jsxs(n.Stack,{direction:"row",gap:1,alignItems:"baseline",children:[e.jsx(m,{text:x,color:s.gray7}),e.jsx(y,{text:p,color:s.gray7,fontSize:14,fontWeight:700})]})]}),e.jsx(n.Stack,{direction:"row",alignItems:"center",children:C?e.jsxs(e.Fragment,{children:[e.jsx(n.IconButton,{onClick:S,children:e.jsx(ge,{})}),e.jsx(n.Divider,{orientation:"vertical",variant:"middle",flexItem:!0,sx:{height:"22px"}}),e.jsx(n.IconButton,{onClick:z,children:e.jsx(Ce,{})})]}):e.jsx(ve,{localeLanguage:j,updatedSwitchData:B})})]}),C?void 0:e.jsxs(n.Box,{width:"100%",paddingX:"16px",children:[e.jsx(b,{text:o,color:s.gray6}),e.jsxs(n.Stack,{paddingY:"16px",direction:"row",gap:2,justifyContent:"center",alignItems:"center",children:[e.jsx(f,{text:l,onClick:T,width:"fit",bdSize:"sm"}),e.jsx(h,{text:d,onClick:I,width:"fit",bdSize:"sm"})]})]})]})},exports.RemoveIcon=C,exports.Tiny=function(n){return e.jsx(y,a({},n,{bdType:"tiny"}))};
