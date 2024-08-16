import{j as e}from"./styled-42a03f3b.js";import{r as D}from"./index-8b3efc3f.js";import{B as c}from"./ColumnBox-65b249b8.js";import{C}from"./index-bb548427.js";import{H,a as M,b as g,c as P,d as f,e as B,P as S,f as u,L as y,g as G,M as k,T as L,B as b,h}from"./index-7480f490.js";import{G as o}from"./Grid-6d24e6cf.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7ec6486c.js";import"./Typography-306c9b9a.js";import"./BaseText-4b149750.js";import"./useTheme-3af89c05.js";import"./useTheme-bf446437.js";const z=[{title:"H",items:[{text:">>MD(Dest)/H/H1",Component:H},{text:">>MD(Dest)/H/H2",Component:M},{text:">>MD(Dest)/H/H3",Component:g},{text:">>MD(Dest)/H/H4",Component:P},{text:">>MD(Dest)/H/H5",Component:f},{text:">>MD(Dest)/H/H6",Component:B}],gridProps:{xs:6,md:6}},{title:"P",items:[{text:">>MD(Dest)/P/P1",Component:S},{text:">>MD(Dest)/P/P2",Component:u},{text:">>MD(Dest)/P/Lead1",Component:y},{text:">>MD(Dest)/P/Lead2",Component:G}],gridProps:{xs:3,md:3}},{title:"Small",items:[{text:">>MD(Dest)/Small/Mini",Component:k},{text:">>MD(Dest)/Small/Tiny",Component:L}],gridProps:{xs:3,md:3}},{title:"Stylize",items:[{text:">>MD(Dest)/Stylize/Badges",Component:b},{text:">>MD(Dest)/Stylize/Badges bold",Component:h}],gridProps:{xs:3,md:3}}],t=()=>e(o,{container:!0,spacing:2,children:z.map(({title:m,items:i,gridProps:a},p)=>D.createElement(o,{item:!0,...a,key:p},e(c,{title:m,color:C.black,children:i.map(({text:d,Component:l},x)=>e(l,{text:d},x))})))}),K={title:"Sample/Fonts",component:t};var s,n,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => <Grid container spacing={2}>
    {fontCategories.map(({
    title,
    items,
    gridProps
  }, index) => <Grid item {...gridProps} key={index}>
        <ColumnBox title={title} color={Colors.black}>
          {items.map(({
        text,
        Component
      }, index) => <Component key={index} text={text} />)}
        </ColumnBox>
      </Grid>)}
  </Grid>`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const N=["SampleFonts"];export{t as SampleFonts,N as __namedExportsOrder,K as default};
