import{a as m,j as e,T as p}from"./index-cb22585b.js";import{r as i}from"./index-8b3efc3f.js";import{B as h}from"./BaseBottomSheet-185ee781.js";import{P as l}from"./RemoveBtn-ea18fc7e.js";import"./index-8c42c24c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7ec6486c.js";import"./_commonjsHelpers-de833af9.js";import"./Box-496e7188.js";import"./assertThisInitialized-4a3ff4d4.js";import"./useTheme-995a67e2.js";import"./useTheme-750644a5.js";import"./index-a38d0dca.js";import"./Stack-c051bde3.js";import"./BaseText-88391736.js";const t=()=>{const[a,o]=i.useState(!1);return m("div",{children:[e(l,{bdSize:"lg",text:"Open Bottom Sheet",onClick:()=>{o(!0)}}),e(h,{open:a,onClose:()=>{o(!1)},children:e(p,{variant:"body1",children:"This is the content of the bottom sheet."})})]})},_={title:"Sample/BottomSheet",component:t};var n,s,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const k=["SampleBottomSheet"];export{t as SampleBottomSheet,k as __namedExportsOrder,_ as default};
