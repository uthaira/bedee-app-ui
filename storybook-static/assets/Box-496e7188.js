import{_}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7ec6486c.js";import{n as je,o as Ae,h as Xe,_ as G,j as F,i as y,f as se,B as ie,s as ae,u as xe,g as Ye,a as We,l as He,D as Ge,b as qe,E as Ze}from"./index-cb22585b.js";import{r as s,R as X}from"./index-8b3efc3f.js";import{_ as Je,a as Qe}from"./assertThisInitialized-4a3ff4d4.js";import{u as et}from"./useTheme-995a67e2.js";const tt=["className","component"];function nt(e={}){const{themeId:t,defaultTheme:n,defaultClassName:u="MuiBox-root",generateClassName:r}=e,o=je("div",{shouldForwardProp:c=>c!=="theme"&&c!=="sx"&&c!=="as"})(Ae);return s.forwardRef(function(l,p){const d=et(n),m=Xe(l),{className:b,component:R="div"}=m,h=G(m,tt);return F(o,_({as:R,ref:p,className:y(b,r?r(u):u),theme:t&&d[t]||d},h))})}const rt=typeof window<"u"?s.useLayoutEffect:s.useEffect,ot=rt;function st(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function H(e){const t=s.useRef(e);return ot(()=>{t.current=e}),s.useRef((...n)=>(0,t.current)(...n)).current}function he(...e){return s.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{st(n,t)})},e)}const me={};function it(e,t){const n=s.useRef(me);return n.current===me&&(n.current=e(t)),n}const at=[];function ut(e){s.useEffect(e,at)}class q{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new q}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function lt(){const e=it(q.create).current;return ut(e.disposeEffect),e}let Z=!0,re=!1;const ct=new q,pt={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function ft(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&pt[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function dt(e){e.metaKey||e.altKey||e.ctrlKey||(Z=!0)}function ne(){Z=!1}function ht(){this.visibilityState==="hidden"&&re&&(Z=!0)}function mt(e){e.addEventListener("keydown",dt,!0),e.addEventListener("mousedown",ne,!0),e.addEventListener("pointerdown",ne,!0),e.addEventListener("touchstart",ne,!0),e.addEventListener("visibilitychange",ht,!0)}function bt(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Z||ft(t)}function gt(){const e=s.useCallback(r=>{r!=null&&mt(r.ownerDocument)},[]),t=s.useRef(!1);function n(){return t.current?(re=!0,ct.start(100,()=>{re=!1}),t.current=!1,!0):!1}function u(r){return bt(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:u,onBlur:n,ref:e}}const be=X.createContext(null);function ue(e,t){var n=function(o){return t&&s.isValidElement(o)?t(o):o},u=Object.create(null);return e&&s.Children.map(e,function(r){return r}).forEach(function(r){u[r.key]=n(r)}),u}function Rt(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var u=Object.create(null),r=[];for(var o in e)o in t?r.length&&(u[o]=r,r=[]):r.push(o);var i,c={};for(var l in t){if(u[l])for(i=0;i<u[l].length;i++){var p=u[l][i];c[u[l][i]]=n(p)}c[l]=n(l)}for(i=0;i<r.length;i++)c[r[i]]=n(r[i]);return c}function S(e,t,n){return n[t]!=null?n[t]:e.props[t]}function yt(e,t){return ue(e.children,function(n){return s.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:S(n,"appear",e),enter:S(n,"enter",e),exit:S(n,"exit",e)})})}function Et(e,t,n){var u=ue(e.children),r=Rt(t,u);return Object.keys(r).forEach(function(o){var i=r[o];if(s.isValidElement(i)){var c=o in t,l=o in u,p=t[o],d=s.isValidElement(p)&&!p.props.in;l&&(!c||d)?r[o]=s.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:S(i,"exit",e),enter:S(i,"enter",e)}):!l&&c&&!d?r[o]=s.cloneElement(i,{in:!1}):l&&c&&s.isValidElement(p)&&(r[o]=s.cloneElement(i,{onExited:n.bind(null,i),in:p.props.in,exit:S(i,"exit",e),enter:S(i,"enter",e)}))}}),r}var xt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Tt={component:"div",childFactory:function(t){return t}},le=function(e){Je(t,e);function t(u,r){var o;o=e.call(this,u,r)||this;var i=o.handleExited.bind(Qe(o));return o.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},o}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,o){var i=o.children,c=o.handleExited,l=o.firstRender;return{children:l?yt(r,c):Et(r,i,c),firstRender:!1}},n.handleExited=function(r,o){var i=ue(this.props.children);r.key in i||(r.props.onExited&&r.props.onExited(o),this.mounted&&this.setState(function(c){var l=_({},c.children);return delete l[r.key],{children:l}}))},n.render=function(){var r=this.props,o=r.component,i=r.childFactory,c=G(r,["component","childFactory"]),l=this.state.contextValue,p=xt(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,o===null?X.createElement(be.Provider,{value:l},p):X.createElement(be.Provider,{value:l},X.createElement(o,c,p))},t}(X.Component);le.propTypes={};le.defaultProps=Tt;const Mt=le;function Ct(e){const{className:t,classes:n,pulsate:u=!1,rippleX:r,rippleY:o,rippleSize:i,in:c,onExited:l,timeout:p}=e,[d,m]=s.useState(!1),b=y(t,n.ripple,n.rippleVisible,u&&n.ripplePulsate),R={width:i,height:i,top:-(i/2)+o,left:-(i/2)+r},h=y(n.child,d&&n.childLeaving,u&&n.childPulsate);return!c&&!d&&m(!0),s.useEffect(()=>{if(!c&&l!=null){const E=setTimeout(l,p);return()=>{clearTimeout(E)}}},[l,c,p]),F("span",{className:b,style:R,children:F("span",{className:h})})}const Bt=se("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),g=Bt,vt=["center","classes","className"];let J=e=>e,ge,Re,ye,Ee;const oe=550,Vt=80,wt=ie(ge||(ge=J`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Pt=ie(Re||(Re=J`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Nt=ie(ye||(ye=J`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Dt=ae("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),It=ae(Ct,{name:"MuiTouchRipple",slot:"Ripple"})(Ee||(Ee=J`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),g.rippleVisible,wt,oe,({theme:e})=>e.transitions.easing.easeInOut,g.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,g.child,g.childLeaving,Pt,oe,({theme:e})=>e.transitions.easing.easeInOut,g.childPulsate,Nt,({theme:e})=>e.transitions.easing.easeInOut),Lt=s.forwardRef(function(t,n){const u=xe({props:t,name:"MuiTouchRipple"}),{center:r=!1,classes:o={},className:i}=u,c=G(u,vt),[l,p]=s.useState([]),d=s.useRef(0),m=s.useRef(null);s.useEffect(()=>{m.current&&(m.current(),m.current=null)},[l]);const b=s.useRef(!1),R=lt(),h=s.useRef(null),E=s.useRef(null),K=s.useCallback(f=>{const{pulsate:x,rippleX:T,rippleY:D,rippleSize:U,cb:O}=f;p(M=>[...M,F(It,{classes:{ripple:y(o.ripple,g.ripple),rippleVisible:y(o.rippleVisible,g.rippleVisible),ripplePulsate:y(o.ripplePulsate,g.ripplePulsate),child:y(o.child,g.child),childLeaving:y(o.childLeaving,g.childLeaving),childPulsate:y(o.childPulsate,g.childPulsate)},timeout:oe,pulsate:x,rippleX:T,rippleY:D,rippleSize:U},d.current)]),d.current+=1,m.current=O},[o]),$=s.useCallback((f={},x={},T=()=>{})=>{const{pulsate:D=!1,center:U=r||x.pulsate,fakeElement:O=!1}=x;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const M=O?null:E.current,w=M?M.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,P,N;if(U||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)B=Math.round(w.width/2),P=Math.round(w.height/2);else{const{clientX:I,clientY:v}=f.touches&&f.touches.length>0?f.touches[0]:f;B=Math.round(I-w.left),P=Math.round(v-w.top)}if(U)N=Math.sqrt((2*w.width**2+w.height**2)/3),N%2===0&&(N+=1);else{const I=Math.max(Math.abs((M?M.clientWidth:0)-B),B)*2+2,v=Math.max(Math.abs((M?M.clientHeight:0)-P),P)*2+2;N=Math.sqrt(I**2+v**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{K({pulsate:D,rippleX:B,rippleY:P,rippleSize:N,cb:T})},R.start(Vt,()=>{h.current&&(h.current(),h.current=null)})):K({pulsate:D,rippleX:B,rippleY:P,rippleSize:N,cb:T})},[r,K,R]),z=s.useCallback(()=>{$({},{pulsate:!0})},[$]),k=s.useCallback((f,x)=>{if(R.clear(),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,R.start(0,()=>{k(f,x)});return}h.current=null,p(T=>T.length>0?T.slice(1):T),m.current=x},[R]);return s.useImperativeHandle(n,()=>({pulsate:z,start:$,stop:k}),[z,$,k]),F(Dt,_({className:y(g.root,o.root,i),ref:E},c,{children:F(Mt,{component:null,exit:!0,children:l})}))}),St=Lt;function Ft(e){return Ye("MuiButtonBase",e)}const $t=se("MuiButtonBase",["root","disabled","focusVisible"]),kt=$t,Ut=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],_t=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:u,classes:r}=e,i=He({root:["root",t&&"disabled",n&&"focusVisible"]},Ft,r);return n&&u&&(i.root+=` ${u}`),i},Kt=ae("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${kt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),zt=s.forwardRef(function(t,n){const u=xe({props:t,name:"MuiButtonBase"}),{action:r,centerRipple:o=!1,children:i,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:m=!1,focusRipple:b=!1,LinkComponent:R="a",onBlur:h,onClick:E,onContextMenu:K,onDragLeave:$,onFocus:z,onFocusVisible:k,onKeyDown:f,onKeyUp:x,onMouseDown:T,onMouseLeave:D,onMouseUp:U,onTouchEnd:O,onTouchMove:M,onTouchStart:w,tabIndex:B=0,TouchRippleProps:P,touchRippleRef:N,type:I}=u,v=G(u,Ut),j=s.useRef(null),C=s.useRef(null),Te=he(C,N),{isFocusVisibleRef:ce,onFocus:Me,onBlur:Ce,ref:Be}=gt(),[L,Y]=s.useState(!1);p&&L&&Y(!1),s.useImperativeHandle(r,()=>({focusVisible:()=>{Y(!0),j.current.focus()}}),[]);const[Q,ve]=s.useState(!1);s.useEffect(()=>{ve(!0)},[]);const Ve=Q&&!d&&!p;s.useEffect(()=>{L&&b&&!d&&Q&&C.current.pulsate()},[d,b,L,Q]);function V(a,fe,Oe=m){return H(de=>(fe&&fe(de),!Oe&&C.current&&C.current[a](de),!0))}const we=V("start",T),Pe=V("stop",K),Ne=V("stop",$),De=V("stop",U),Ie=V("stop",a=>{L&&a.preventDefault(),D&&D(a)}),Le=V("start",w),Se=V("stop",O),Fe=V("stop",M),$e=V("stop",a=>{Ce(a),ce.current===!1&&Y(!1),h&&h(a)},!1),ke=H(a=>{j.current||(j.current=a.currentTarget),Me(a),ce.current===!0&&(Y(!0),k&&k(a)),z&&z(a)}),ee=()=>{const a=j.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},te=s.useRef(!1),Ue=H(a=>{b&&!te.current&&L&&C.current&&a.key===" "&&(te.current=!0,C.current.stop(a,()=>{C.current.start(a)})),a.target===a.currentTarget&&ee()&&a.key===" "&&a.preventDefault(),f&&f(a),a.target===a.currentTarget&&ee()&&a.key==="Enter"&&!p&&(a.preventDefault(),E&&E(a))}),_e=H(a=>{b&&a.key===" "&&C.current&&L&&!a.defaultPrevented&&(te.current=!1,C.current.stop(a,()=>{C.current.pulsate(a)})),x&&x(a),E&&a.target===a.currentTarget&&ee()&&a.key===" "&&!a.defaultPrevented&&E(a)});let W=l;W==="button"&&(v.href||v.to)&&(W=R);const A={};W==="button"?(A.type=I===void 0?"button":I,A.disabled=p):(!v.href&&!v.to&&(A.role="button"),p&&(A["aria-disabled"]=p));const Ke=he(n,Be,j),pe=_({},u,{centerRipple:o,component:l,disabled:p,disableRipple:d,disableTouchRipple:m,focusRipple:b,tabIndex:B,focusVisible:L}),ze=_t(pe);return We(Kt,_({as:W,className:y(ze.root,c),ownerState:pe,onBlur:$e,onClick:E,onContextMenu:Pe,onFocus:ke,onKeyDown:Ue,onKeyUp:_e,onMouseDown:we,onMouseLeave:Ie,onMouseUp:De,onDragLeave:Ne,onTouchEnd:Se,onTouchMove:Fe,onTouchStart:Le,ref:Ke,tabIndex:p?-1:B,type:I},A,v,{children:[i,Ve?F(St,_({ref:Te,center:o},P)):null]}))}),Jt=zt,Ot=se("MuiBox",["root"]),jt=Ot,At=Ge(),Xt=nt({themeId:qe,defaultTheme:At,defaultClassName:jt.root,generateClassName:Ze.generate}),Qt=Xt;export{Jt as B,be as T,Qt as a,he as u};
