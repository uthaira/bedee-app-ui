import{r as y}from"./index-8b3efc3f.js";import"./styled-42a03f3b.js";import{_ as i}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7ec6486c.js";function a(e,s){const n=i({},s);return Object.keys(e).forEach(t=>{if(t.toString().match(/^(components|slots)$/))n[t]=i({},e[t],n[t]);else if(t.toString().match(/^(componentsProps|slotProps)$/)){const r=e[t]||{},o=s[t];n[t]={},!o||!Object.keys(o)?n[t]=r:!r||!Object.keys(r)?n[t]=o:(n[t]=i({},o),Object.keys(r).forEach(c=>{n[t][c]=a(r[c],o[c])}))}else n[t]===void 0&&(n[t]=e[t])}),n}function x(e,s,n=void 0){const t={};return Object.keys(e).forEach(r=>{t[r]=e[r].reduce((o,c)=>{if(c){const u=s(c);u!==""&&o.push(u),n&&n[c]&&o.push(n[c])}return o},[]).join(" ")}),t}const F=y.createContext(void 0);function f(e){const{theme:s,name:n,props:t}=e;if(!s||!s.components||!s.components[n])return t;const r=s.components[n];return r.defaultProps?a(r.defaultProps,t):!r.styleOverrides&&!r.variants?a(r,t):t}function A({props:e,name:s}){const n=y.useContext(F);return f({props:e,name:s,theme:{components:n}})}function j(e){return A(e)}const d={black:"#000000",white:"#FFFFFF"},E={gray0:"#C7C9D9",gray1:"#F3F6F9",gray2:"#EAEEF6",gray3:"#C3CAD4",gray4:"#939CA9",gray5:"#747B84",gray6:"#4A5568",gray7:"#323A43"},l={primary001:"#1E6AF6",primary002:"#4B88F8",primary003:"#78A6FA",primary004:"#A5C3FB",primary005:"#E8F0FE",primary006:"#F4F8FF"},C={secondary001:"#07236D",secondary002:"#264189",secondary003:"#455FA5",secondary004:"#849CDD",secondary005:"#A3BAF9"},g={trinary001:"#EE6E3A",trinary002:"#F18B61",trinary003:"#F5A889",trinary004:"#F8C5B0",trinary005:"#FAD3C4"},h={success:"#13C186",warning:"#EFB110",error:"#EA5540",completed:"#1E6AF6",pending:"#F9A01B"},B={brandBlack:"#3A4248",darkBlue:"#07236D",royalBlue:"#1E6AF6",cherry:"#EE6E3A",offWhite:"#F7F8F9"},O={...d,...E,...l,...C,...g,...h,...B};export{O as C,x as c,a as r,j as u};