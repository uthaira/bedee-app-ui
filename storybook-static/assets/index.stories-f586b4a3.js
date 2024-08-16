import{a as i,j as o}from"./styled-42a03f3b.js";import{r as s}from"./index-8b3efc3f.js";import{B as a}from"./BaseBottomSheet-a9a4d1e1.js";import"./OutlinedBtn-766ce843.js";import{P as h}from"./RemoveBtn-0c19a171.js";import"./index-7480f490.js";import"./index-36a05961.js";import"./PhoneNumberForm-6b20dbf1.js";import"./OtpForm-39a114eb.js";import"./PinForm-58bad192.js";import"./Badge-1cfcd4f7.js";import"./ProfileHeader-83e9faaa.js";import"./LanguageSwitch-3040b00c.js";import{T as l}from"./Typography-306c9b9a.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7ec6486c.js";import"./CloseIcon-3b4c15b6.js";import"./Box-8279020a.js";import"./useTheme-bf446437.js";import"./useTheme-3af89c05.js";import"./utils-9156a3c6.js";import"./assertThisInitialized-4a3ff4d4.js";import"./index-a38d0dca.js";import"./ButtonBase-9b2420d0.js";import"./index-bb548427.js";import"./IconButton-59debbc7.js";import"./Stack-6313b12d.js";import"./useThemeProps-0886b657.js";import"./Button-b9b3ec02.js";import"./BaseText-4b149750.js";import"./Menu-a2cf9556.js";import"./react-is.production.min-a192e302.js";import"./dividerClasses-be14c76c.js";const t=()=>{const[p,e]=s.useState(!1);return i("div",{children:[o(h,{bdSize:"lg",text:"Open Bottom Sheet",onClick:()=>{e(!0)}}),o(a,{open:p,onClose:()=>{e(!1)},children:o(l,{variant:"body1",children:"This is the content of the bottom sheet."})})]})},U={title:"Sample/BottomSheet",component:t};var r,n,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
  const handleOpen = () => {
    setBottomSheetOpen(true);
  };
  const handleClose = () => {
    setBottomSheetOpen(false);
  };
  return <div>
      <BdPrimaryButton bdSize="lg" text="Open Bottom Sheet" onClick={handleOpen} />
      <BottomSheet open={isBottomSheetOpen} onClose={handleClose}>
        <Typography variant="body1">This is the content of the bottom sheet.</Typography>
      </BottomSheet>
    </div>;
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const V=["SampleBottomSheet"];export{t as SampleBottomSheet,V as __namedExportsOrder,U as default};
