import{a as L,j as n}from"./styled-42a03f3b.js";import"./OutlinedBtn-766ce843.js";import{P as u}from"./RemoveBtn-0c19a171.js";import"./index-7480f490.js";import"./BaseBottomSheet-a9a4d1e1.js";import"./index-36a05961.js";import"./PhoneNumberForm-6b20dbf1.js";import"./OtpForm-39a114eb.js";import"./PinForm-58bad192.js";import"./Badge-1cfcd4f7.js";import{P as d}from"./ProfileHeader-83e9faaa.js";import{E as h}from"./LanguageSwitch-3040b00c.js";import{r}from"./index-8b3efc3f.js";import{C as f}from"./Container-ac1cccea.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7ec6486c.js";import"./index-bb548427.js";import"./Stack-6313b12d.js";import"./useThemeProps-0886b657.js";import"./useTheme-bf446437.js";import"./Typography-306c9b9a.js";import"./Button-b9b3ec02.js";import"./ButtonBase-9b2420d0.js";import"./assertThisInitialized-4a3ff4d4.js";import"./Box-8279020a.js";import"./BaseText-4b149750.js";import"./CloseIcon-3b4c15b6.js";import"./useTheme-3af89c05.js";import"./utils-9156a3c6.js";import"./index-a38d0dca.js";import"./IconButton-59debbc7.js";import"./Menu-a2cf9556.js";import"./react-is.production.min-a192e302.js";import"./dividerClasses-be14c76c.js";const e=()=>{const[g,p]=r.useState(h.TH),[o,t]=r.useState(!1),c=l=>{p(l)},a=()=>{t(!0)};return L(f,{sx:{height:"100vh",padding:0},children:[n(d,{nameText:"Pakorn",localeLanguage:g,updatedSwitchData:c,onLogin:a,onRegister:a,isLogin:o}),o&&n(u,{text:"Back",onClick:()=>t(!1)})]})},Z={title:"Sample/Header",component:e};var i,s,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [localeLanguage, setLocaleLanguage] = useState(ELanguage.TH);
  const [isLogin, setIsLogin] = useState(false);
  const handleLanguageChange = (lang: ELanguage) => {
    setLocaleLanguage(lang);
  };
  const onLogin = () => {
    setIsLogin(true);
  };
  return <Container sx={{
    height: '100vh',
    padding: 0
  }}>
      <ProfileHeader nameText="Pakorn" localeLanguage={localeLanguage} updatedSwitchData={handleLanguageChange} onLogin={onLogin} onRegister={onLogin} isLogin={isLogin} />
      {isLogin && <BdPrimaryButton text="Back" onClick={() => setIsLogin(false)} />}
    </Container>;
}`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const $=["SampleHeader"];export{e as SampleHeader,$ as __namedExportsOrder,Z as default};
