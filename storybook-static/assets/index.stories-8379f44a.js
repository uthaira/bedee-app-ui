import{a as b,j as t}from"./styled-42a03f3b.js";import{B as m}from"./ColumnBox-65b249b8.js";import{O as y}from"./OutlinedBtn-766ce843.js";import{P as z,S as L,R as h}from"./RemoveBtn-0c19a171.js";import{G as i}from"./Grid-6d24e6cf.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7ec6486c.js";import"./index-8b3efc3f.js";import"./Typography-306c9b9a.js";import"./index-bb548427.js";import"./Stack-6313b12d.js";import"./useThemeProps-0886b657.js";import"./useTheme-bf446437.js";import"./Button-b9b3ec02.js";import"./ButtonBase-9b2420d0.js";import"./assertThisInitialized-4a3ff4d4.js";import"./Box-8279020a.js";import"./useTheme-3af89c05.js";const n=()=>{const a=[],l=[],u=[],x=[];let e=0;for(const B of g){const{text:o,bdSize:d,disabled:r,loading:s}=B;a.push(t(z,{text:o,bdSize:d,disabled:r,loading:s},`primary-${e}`)),l.push(t(L,{text:o,bdSize:d,disabled:r,loading:s},`secondary-${e}`)),u.push(t(y,{text:o,bdSize:d,disabled:r,loading:s},`outlined-${e}`)),x.push(t(h,{text:o,bdSize:d,disabled:r,loading:s},`remove-${e}`)),e++}return b(i,{container:!0,spacing:2,children:[t(i,{item:!0,xs:3,md:3,children:t(m,{title:"Primary Button",children:a})}),t(i,{item:!0,xs:3,md:3,children:t(m,{title:"Secondary Button",children:l})}),t(i,{item:!0,xs:3,md:3,children:t(m,{title:"Outlined Button",children:u})}),t(i,{item:!0,xs:3,md:3,children:t(m,{title:"Remove Button",children:x})})]})},g=[{text:"Size LG",bdSize:"lg"},{text:"Size MD",bdSize:"md"},{text:"Size SM",bdSize:"sm"},{text:"Size XS",bdSize:"xs"},{text:"Size XXS",bdSize:"xxs"},{text:"Loading SM",bdSize:"sm",loading:!0},{text:"Disabled (XS)",bdSize:"xs",disabled:!0}],F={title:"Sample/Button",component:n};var c,p,S;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const primaryList = [];
  const secondaryList = [];
  const outlinedList = [];
  const removeList = [];
  let index = 0;
  for (const item of list) {
    const {
      text,
      bdSize,
      disabled,
      loading
    } = item;
    primaryList.push(<BdPrimaryButton key={\`primary-\${index}\`} text={text} bdSize={bdSize} disabled={disabled} loading={loading} />);
    secondaryList.push(<BdSecondaryButton key={\`secondary-\${index}\`} text={text} bdSize={bdSize} disabled={disabled} loading={loading} />);
    outlinedList.push(<BdOutlinedButton key={\`outlined-\${index}\`} text={text} bdSize={bdSize} disabled={disabled} loading={loading} />);
    removeList.push(<BdRemoveButton key={\`remove-\${index}\`} text={text} bdSize={bdSize} disabled={disabled} loading={loading} />);
    index++;
  }
  return <Grid container spacing={2}>
      <Grid item xs={3} md={3}>
        <ColumnBox title="Primary Button">{primaryList}</ColumnBox>
      </Grid>
      <Grid item xs={3} md={3}>
        <ColumnBox title="Secondary Button">{secondaryList}</ColumnBox>
      </Grid>
      <Grid item xs={3} md={3}>
        <ColumnBox title="Outlined Button">{outlinedList}</ColumnBox>
      </Grid>
      <Grid item xs={3} md={3}>
        <ColumnBox title="Remove Button">{removeList}</ColumnBox>
      </Grid>
    </Grid>;
}`,...(S=(p=n.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};const H=["SampleButton"];export{n as SampleButton,H as __namedExportsOrder,F as default};
