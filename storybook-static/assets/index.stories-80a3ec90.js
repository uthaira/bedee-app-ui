import{j as e}from"./styled-42a03f3b.js";import{r as s}from"./index-8b3efc3f.js";import{E as c,L as p}from"./LanguageSwitch-3040b00c.js";import{a as m}from"./ColumnBox-65b249b8.js";import{C as u}from"./Container-ac1cccea.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7ec6486c.js";import"./index-bb548427.js";import"./Box-8279020a.js";import"./useTheme-bf446437.js";import"./react-is.production.min-a192e302.js";import"./ButtonBase-9b2420d0.js";import"./assertThisInitialized-4a3ff4d4.js";import"./Typography-306c9b9a.js";import"./useThemeProps-0886b657.js";const a=()=>{const[r,g]=s.useState(c.TH);return e(u,{sx:{height:"100vh",padding:0},children:e(m,{title:"Language Switch",children:e(p,{localeLanguage:r,updatedSwitchData:i=>{g(i)}})})})},T={title:"Sample/Switch",component:a};var t,n,o;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const [localeLanguage, setLocaleLanguage] = useState(ELanguage.TH);
  const handleLanguageChange = (lang: ELanguage) => {
    setLocaleLanguage(lang);
  };
  return <Container sx={{
    height: '100vh',
    padding: 0
  }}>
      <Box title="Language Switch">
        <LanguageSwitch localeLanguage={localeLanguage} updatedSwitchData={handleLanguageChange} />
      </Box>
    </Container>;
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const O=["SampleSwitch"];export{a as SampleSwitch,O as __namedExportsOrder,T as default};
