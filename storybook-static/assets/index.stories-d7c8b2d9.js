import{j as e,C as D}from"./index-cb22585b.js";import{r as c}from"./index-8b3efc3f.js";import{G as o,B as C}from"./ColumnBox-b396bf7d.js";import{H,a as M,b as g,c as P,d as B,e as S,P as f,f as u,L as y,g as G,M as k,T as L,B as b,h}from"./index-8c42c24c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7ec6486c.js";import"./_commonjsHelpers-de833af9.js";import"./useTheme-750644a5.js";import"./useTheme-995a67e2.js";import"./BaseText-88391736.js";const z=[{title:"H",items:[{text:">>MD(Dest)/H/H1",Component:H},{text:">>MD(Dest)/H/H2",Component:M},{text:">>MD(Dest)/H/H3",Component:g},{text:">>MD(Dest)/H/H4",Component:P},{text:">>MD(Dest)/H/H5",Component:B},{text:">>MD(Dest)/H/H6",Component:S}],gridProps:{xs:6,md:6}},{title:"P",items:[{text:">>MD(Dest)/P/P1",Component:f},{text:">>MD(Dest)/P/P2",Component:u},{text:">>MD(Dest)/P/Lead1",Component:y},{text:">>MD(Dest)/P/Lead2",Component:G}],gridProps:{xs:3,md:3}},{title:"Small",items:[{text:">>MD(Dest)/Small/Mini",Component:k},{text:">>MD(Dest)/Small/Tiny",Component:L}],gridProps:{xs:3,md:3}},{title:"Stylize",items:[{text:">>MD(Dest)/Stylize/Badges",Component:b},{text:">>MD(Dest)/Stylize/Badges bold",Component:h}],gridProps:{xs:3,md:3}}],t=()=>e(o,{container:!0,spacing:2,children:z.map(({title:i,items:a,gridProps:m},p)=>c.createElement(o,{item:!0,...m,key:p},e(C,{title:i,color:D.black,children:a.map(({text:d,Component:l},x)=>e(l,{text:d},x))})))}),A={title:"Sample/Fonts",component:t};var s,n,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => <Grid container spacing={2}>
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
  </Grid>`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const I=["SampleFonts"];export{t as SampleFonts,I as __namedExportsOrder,A as default};
