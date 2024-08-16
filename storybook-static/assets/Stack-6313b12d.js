import{h as R,i as k,r as p,k as T,l as D,m as F,n as B,_ as M,j as _,f as G,g as N,o as v,s as E}from"./styled-42a03f3b.js";import{_ as h}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7ec6486c.js";import{r as m}from"./index-8b3efc3f.js";import{s as O,u as U}from"./useThemeProps-0886b657.js";import{c as $,u as A}from"./index-bb548427.js";const L=["component","direction","spacing","divider","children","className","useFlexGap"],I=R(),W=O("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function q(e){return U({props:e,name:"MuiStack",defaultTheme:I})}function z(e,s){const n=m.Children.toArray(e).filter(Boolean);return n.reduce((c,a,t)=>(c.push(a),t<n.length-1&&c.push(m.cloneElement(s,{key:`separator-${t}`})),c),[])}const H=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],J=({ownerState:e,theme:s})=>{let n=h({display:"flex",flexDirection:"column"},k({theme:s},p({values:e.direction,breakpoints:s.breakpoints.values}),c=>({flexDirection:c})));if(e.spacing){const c=T(s),a=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),t=p({values:e.direction,base:a}),d=p({values:e.spacing,base:a});typeof t=="object"&&Object.keys(t).forEach((o,r,i)=>{if(!t[o]){const u=r>0?t[i[r-1]]:"column";t[o]=u}}),n=D(n,k({theme:s},d,(o,r)=>e.useFlexGap?{gap:v(c,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${H(r?t[r]:e.direction)}`]:v(c,o)}}))}return n=F(s.breakpoints,n),n};function K(e={}){const{createStyledComponent:s=W,useThemeProps:n=q,componentName:c="MuiStack"}=e,a=()=>$({root:["root"]},o=>N(c,o),{}),t=s(J);return m.forwardRef(function(o,r){const i=n(o),l=B(i),{component:u="div",direction:x="column",spacing:S=0,divider:y,children:g,className:P,useFlexGap:j=!1}=l,C=M(l,L),V={direction:x,spacing:S,useFlexGap:j},b=a();return _(t,h({as:u,ownerState:V,ref:r,className:G(b.root,P)},C,{children:y?z(g,y):g}))})}const Q=K({createStyledComponent:E("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>A({props:e,name:"MuiStack"})}),se=Q;export{se as S};
