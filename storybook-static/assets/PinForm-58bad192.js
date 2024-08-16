import{a as f,j as e,s as l}from"./styled-42a03f3b.js";import"./CloseIcon-3b4c15b6.js";import{B as u}from"./Box-8279020a.js";import{f as C}from"./index-7480f490.js";import{C as c}from"./index-bb548427.js";const x=t=>{const{size:n=1}=t,r=`${Math.ceil(31*n)}`,o=`${Math.ceil(29*n)}`;return f("svg",{width:r,height:o,viewBox:"0 0 31 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M0 12H18V29H3.37684C2.93351 29.0003 2.49446 28.9181 2.08478 28.758C1.6751 28.5979 1.30284 28.3631 0.989241 28.067C0.675638 27.7709 0.426837 27.4192 0.257102 27.0322C0.0873679 26.6452 -1.38739e-07 26.2303 0 25.8114V12Z",fill:"#081288"}),e("path",{d:"M0.00133446 12V8.80244C-0.0192427 7.65369 0.198337 6.5125 0.641323 5.44544C1.08431 4.37838 1.74385 3.40682 2.58149 2.58744C3.41913 1.76807 4.4181 1.11727 5.5201 0.673032C6.6221 0.228792 7.80508 0 9.00002 0C10.195 0 11.3779 0.228792 12.4799 0.673032C13.5819 1.11727 14.5809 1.76807 15.4185 2.58744C16.2562 3.40682 16.9157 4.37838 17.3587 5.44544C17.8017 6.5125 18.0192 7.65369 17.9987 8.80244V12H0.00133446Z",fill:"#007AFF"}),e("path",{d:"M18 12H21.496C24.0166 12 26.434 12.8955 28.2163 14.4896C29.9987 16.0837 31 18.2457 31 20.5C31 22.7543 29.9987 24.9163 28.2163 26.5104C26.434 28.1045 24.0166 29 21.496 29H18V12Z",fill:"#FF3500"})]})};try{x.displayName="Logo",x.__docgenInfo={description:"",displayName:"Logo",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}const m=t=>{const{size:n=1,color:r="#07236D"}=t,o=`${Math.ceil(15*n)}`,i=`${Math.ceil(15*n)}`;return e("svg",{width:o,height:i,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("circle",{cx:"7.5",cy:"7.5",r:"7.5",fill:r})})};try{m.displayName="Circle",m.__docgenInfo={description:"",displayName:"Circle",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}}}catch{}const h=t=>{const{size:n=1,color:r="white"}=t,o=`${Math.ceil(41*n)}`,i=`${Math.ceil(41*n)}`;return e("svg",{width:o,height:i,viewBox:"0 0 41 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M20.5 23.9141L23.9167 20.4974M23.9167 20.4974L27.3333 17.0807M23.9167 20.4974L20.5 17.0807M23.9167 20.4974L27.3333 23.9141M5.125 20.4974L16.0822 31.4546C16.7228 32.0954 17.5918 32.4555 18.4978 32.4557H32.4583C33.3645 32.4557 34.2335 32.0958 34.8743 31.455C35.515 30.8143 35.875 29.9452 35.875 29.0391V11.9557C35.875 11.0496 35.515 10.1805 34.8743 9.53978C34.2335 8.89903 33.3645 8.53906 32.4583 8.53906H18.4978C17.5918 8.53926 16.7228 8.89935 16.0822 9.54015L5.125 20.4974Z",stroke:r,strokeWidth:"1.82472",strokeLinecap:"round",strokeLinejoin:"round"})})};try{h.displayName="Del",h.__docgenInfo={description:"",displayName:"Del",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}}}catch{}const b=[{label:"1",text:""},{label:"2",text:"A B C"},{label:"3",text:"D E F"}],w=[{label:"4",text:"G H I"},{label:"5",text:"J K L"},{label:"6",text:"M N O"}],v=[{label:"7",text:"P Q R S"},{label:"8",text:"T U V"},{label:"9",text:"W X Y Z"}],V=[{status:"space"},{label:"0",text:""},{status:"delete"}],L=({onClick:t,onDelete:n})=>{const r=(o=[])=>o.map((i,a)=>{const{status:s,label:d}=i;return s==="space"?e(M,{},a):s==="delete"?e(k,{onClick:n,children:e(h,{})},a):e(g,{onClick:()=>t(d),children:d},a)});return f(B,{children:[e(p,{children:r(b)}),e(p,{children:r(w)}),e(p,{children:r(v)}),e(p,{children:r(V)})]})},B=l(u)`
  width: 100%;
`,p=l(u)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 40px;
  padding: 10px 0px;
`,g=l(u)`
  width: 68px;
  height: 68px;
  font-weight: 300;
  font-size: 32px;
  line-height: 40px;
  color: #07236d;
  border: 0.9px solid #07236d;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`,M=l(g)`
  border: 0px solid #07236d;
`,k=l(g)`
  background-color: #07236d;
  box-shadow: none;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;try{pinKeyboard.displayName="pinKeyboard",pinKeyboard.__docgenInfo={description:"",displayName:"pinKeyboard",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(label: string) => void"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"() => void"}}}}}catch{}const y=t=>{const{onKeyboard:n,onDelete:r,codeList:o,error:i}=t,a=o.map((s,d)=>e(z,{children:s!==""?e(m,{}):""},d));return f(u,{sx:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[e(D,{children:a}),i&&e($,{children:e(C,{text:i,color:c.error})}),e(L,{onClick:n,onDelete:r})]})},D=l("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 8px;
  padding: 20px 0;
`,z=l("div")`
  width: 48px;
  height: 48px;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${c.gray2};
  background-color: ${c.offWhite};
  border: 1px solid ${c.gray2};
  border-radius: 8px;

  &.active {
    font-weight: 600;
    color: ${c.royalBlue};
    border: 1px solid ${c.royalBlue};
  }
`,$=l("div")`
  padding: 12px 0;
  text-align: center;
`,P=y;try{y.displayName="PinForm",y.__docgenInfo={description:"",displayName:"PinForm",props:{onKeyboard:{defaultValue:null,description:"",name:"onKeyboard",required:!0,type:{name:"(val: string) => void"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"() => void"}},codeList:{defaultValue:null,description:"",name:"codeList",required:!0,type:{name:"string[]"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}}}}}catch{}export{P};
