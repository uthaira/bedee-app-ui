import{jsx as r,jsxs as o,Fragment as n}from"react/jsx-runtime";import{Box as e,Stack as t,Typography as i,Button as d,Slide as a,IconButton as u}from"@mui/material";import{styled as c}from"@mui/material/styles";import{useRef as l,useEffect as s}from"react";var f=function(){return f=Object.assign||function(r){for(var o,n=1,e=arguments.length;n<e;n++)for(var t in o=arguments[n])Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t]);return r},f.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var h=f(f(f(f(f(f(f({},{black:"#000000",white:"#FFFFFF"}),{gray0:"#C7C9D9",gray1:"#F3F6F9",gray2:"#EAEEF6",gray3:"#C3CAD4",gray4:"#939CA9",gray5:"#747B84",gray6:"#4A5568",gray7:"#323A43"}),{primary001:"#1E6AF6",primary002:"#4B88F8",primary003:"#78A6FA",primary004:"#A5C3FB",primary005:"#E8F0FE",primary006:"#F4F8FF"}),{secondary001:"#07236D",secondary002:"#264189",secondary003:"#455FA5",secondary004:"#849CDD",secondary005:"#A3BAF9"}),{trinary001:"#EE6E3A",trinary002:"#F18B61",trinary003:"#F5A889",trinary004:"#F8C5B0",trinary005:"#FAD3C4"}),{success:"#13C186",warning:"#EFB110",error:"#EA5540",completed:"#1E6AF6",pending:"#F9A01B"}),{brandBlack:"#3A4248",darkBlue:"#07236D",royalBlue:"#1E6AF6",cherry:"#EE6E3A",offWhite:"#F7F8F9"}),p=function(n){var a=n.bdType,u=n.icon,c=n.text,l=n.loading,s=n.bdSize,p=n.width,y=void 0===p?"100%":p,m=n.isRightIcon,x=void 0!==m&&m,C=n.counter,S=function(){switch(a){case"secondary":return{color:h.primary001,borderColor:h.primary001,backgroundColor:h.white};case"outlined":return{color:h.primary001,borderColor:h.white,backgroundColor:h.white};case"remove":return{color:h.error,borderColor:h.error,backgroundColor:h.white};default:return{color:h.white,borderColor:h.primary001,backgroundColor:h.primary001}}}(),F=function(){switch(s){case"lg":return{borderRadius:"32px",fontSize:"16px",height:"52px",icon:12,loading:"18px"};case"md":return{borderRadius:"32px",fontSize:"16px",height:"48px",icon:12,loading:"16px"};case"sm":return{borderRadius:"32px",fontSize:"14px",height:"40px",icon:12,loading:"14px"};case"xs":default:return{borderRadius:"32px",fontSize:"12px",height:"30px",icon:12,loading:"12px"};case"xxs":return{borderRadius:"32px",fontSize:"12px",height:"24px",icon:12,loading:"12px"}}}(),z={width:F.loading,height:F.loading,border:"2px solid ".concat(S.color),borderBottomColor:S.backgroundColor},k=l?r(b,{style:z}):u,v=C&&r(t,{justifyContent:"center",alignItems:"center",borderRadius:"50%",bgcolor:S.color,width:18,height:18,children:r(i,{fontSize:F.fontSize,color:S.backgroundColor,children:C})});return r(d,f({sx:{borderRadius:F.borderRadius,fontSize:F.fontSize,paddingY:"8px",borderColor:S.borderColor,backgroundColor:S.backgroundColor,width:y,height:F.height,"&.MuiButton-outlined":{color:S.color,backgroundColor:S.backgroundColor},"&:hover":{borderColor:S.borderColor},"&.Mui-disabled":{color:S.color,backgroundColor:S.backgroundColor,opacity:.6}},variant:"outlined"},n,{children:o(g,{children:[!x&&k,r(e,{style:{color:S.color,fontSize:F.fontSize},children:c}),x&&k,v]})}))},g=c(e)((function(){return{display:"flex",alignItems:"center",justifyContent:"center",minWidth:"70px",columnGap:"8px",lineHeight:"16px",textTransform:"none"}})),b=c(e)((function(){return{borderRadius:"50%",display:"inline-block",boxSizing:"border-box",animation:"rotation 1s linear infinite","@keyframes rotation":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}}})),y=function(o){return r(p,f({},o))},m=function(o){return r(p,f({},o,{bdType:"secondary"}))},x=function(o){return r(p,f({},o,{bdType:"outlined"}))},C=function(){return r("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r("path",{d:"M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5L1.5 13.5Z",stroke:"#EA5540",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})},S=function(o){return r(p,f({},o,{icon:r(C,{}),bdType:"remove"}))},F=function(o){var n,e=o.text,t=o.bdType,d=o.color,a=void 0===d?h.black:d,u=t?{h1:{fontSize:61,fontWeight:600},h2:{fontSize:49,fontWeight:600},h3:{fontSize:39,fontWeight:600},h4:{fontSize:31,fontWeight:600},h5:{fontSize:25,fontWeight:600},h6:{fontSize:20,fontWeight:600},p1:{fontSize:16,fontWeight:400},p2:{fontSize:14,fontWeight:400},lead1:{fontSize:16,fontWeight:600},lead2:{fontSize:14,fontWeight:600},mini:{fontSize:12,fontWeight:400},tiny:{fontSize:10,fontWeight:600},badges:{fontSize:12,fontWeight:500},badgesBold:{fontSize:12,fontWeight:600}}[t]:{fontSize:16,fontWeight:400},c=(null==(n=null==t?void 0:t.toString())?void 0:n.includes("h"))?n:"body1";return r(i,f({},o,u,{color:a,variant:c,children:e}))},z=function(o){return r(F,f({},o,{bdType:"h1"}))},k=function(o){return r(F,f({},o,{bdType:"h2"}))},v=function(o){return r(F,f({},o,{bdType:"h3"}))},w=function(o){return r(F,f({},o,{bdType:"h4"}))},B=function(o){return r(F,f({},o,{bdType:"h5"}))},A=function(o){return r(F,f({},o,{bdType:"h6"}))},E=function(o){return r(F,f({},o,{bdType:"p1"}))},T=function(o){return r(F,f({},o,{bdType:"p2"}))},W=function(o){return r(F,f({},o,{bdType:"lead1"}))},L=function(o){return r(F,f({},o,{bdType:"lead2"}))},R=function(o){return r(F,f({},o,{bdType:"mini"}))},I=function(o){return r(F,f({},o,{bdType:"tiny"}))},j=function(o){return r(F,f({},o,{bdType:"badges"}))},D=function(o){return r(F,f({},o,{bdType:"badgesBold"}))};function M(o){return r("svg",{className:o.className,width:o.width||"13",height:o.height||"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r("path",{d:"M1.77539 1.0752L11.9263 11.2261M1.77539 11.2261L11.9263 1.0752L1.77539 11.2261Z",stroke:o.color||"#3A4248",strokeWidth:"1.69181",strokeLinecap:"round",strokeLinejoin:"round"})})}var O=function(t){var i=t.height,d=void 0===i?"50%":i,c=t.open,h=t.onClose,p=t.isCloseIcon,g=t.children,b=l(null);return s((function(){var r=function(r){b.current&&!b.current.contains(r.target)&&h()};return c&&document.addEventListener("mousedown",r),function(){document.removeEventListener("mousedown",r)}}),[c,h]),o(n,{children:[c&&r(e,{sx:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.3)",zIndex:function(r){return r.zIndex.modal-1}},onClick:h}),r(a,f({direction:"up",in:c,mountOnEnter:!0,unmountOnExit:!0},t,{children:o(e,{ref:b,sx:{borderRadius:"32px 32px 0px 0px",position:"fixed",bottom:0,left:0,right:0,height:d,backgroundColor:"background.paper",boxShadow:24,p:2,overflowY:"auto",zIndex:function(r){return r.zIndex.modal}},children:[p&&r(e,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center",pb:1},children:r(u,{onClick:h,children:r(M,{})})}),r(e,{sx:{mt:2},children:g})]})}))]})};export{j as Badges,D as BadgesBold,F as BaseText,O as BdBottomSheet,p as BdButton,x as BdOutlinedButton,y as BdPrimaryButton,S as BdRemoveButton,m as BdSecondaryButton,h as Colors,z as H1,k as H2,v as H3,w as H4,B as H5,A as H6,W as Lead1,L as Lead2,R as Mini,E as P1,T as P2,I as Tiny};
