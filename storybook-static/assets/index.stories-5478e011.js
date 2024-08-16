import{a,j as o,s as F}from"./styled-42a03f3b.js";import{r as n}from"./index-8b3efc3f.js";import{D as O,P as N,C as _}from"./PhoneNumberForm-6b20dbf1.js";import"./OutlinedBtn-766ce843.js";import"./RemoveBtn-0c19a171.js";import{P as l}from"./index-7480f490.js";import"./BaseBottomSheet-a9a4d1e1.js";import"./index-36a05961.js";import{O as M}from"./OtpForm-39a114eb.js";import{P as U}from"./PinForm-58bad192.js";import"./Badge-1cfcd4f7.js";import"./ProfileHeader-83e9faaa.js";import"./LanguageSwitch-3040b00c.js";import{B as j}from"./Box-8279020a.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7ec6486c.js";import"./Menu-a2cf9556.js";import"./index-bb548427.js";import"./ButtonBase-9b2420d0.js";import"./assertThisInitialized-4a3ff4d4.js";import"./utils-9156a3c6.js";import"./index-a38d0dca.js";import"./useTheme-bf446437.js";import"./react-is.production.min-a192e302.js";import"./useTheme-3af89c05.js";import"./Button-b9b3ec02.js";import"./dividerClasses-be14c76c.js";import"./Typography-306c9b9a.js";import"./Stack-6313b12d.js";import"./useThemeProps-0886b657.js";import"./BaseText-4b149750.js";import"./CloseIcon-3b4c15b6.js";import"./IconButton-59debbc7.js";const s=()=>{const[E,f]=n.useState(!1),[y,I]=n.useState(""),[h,v]=n.useState(""),[g,S]=n.useState(O),[t,c]=n.useState(["","","","","",""]),[m,L]=n.useState(180),[p,b]=n.useState(180),R=e=>{I(e),f(!1)},P=e=>{S(e)},r=t.findIndex(e=>e===""),T=e=>{if(r===-1)return;const i=t.length;r<i&&(t[r]=e,c([...t]))},D=()=>{const e=r===-1?t.length-1:r-1;e>=0&&(t[e]="",c([...t]))};return n.useEffect(()=>{const e=setInterval(()=>{b(p-1)},1e3),i=setInterval(()=>{L(m-1)},1e3);return m===0&&clearInterval(i),p===0&&clearInterval(e),()=>{clearInterval(i),clearInterval(e)}}),a(j,{sx:{display:"flex",alignItems:"start",justifyContent:"center",gap:0,flexDirection:"column"},children:[a(d,{children:[o(l,{text:"Phone Number Form Component"}),o(N,{countryList:_,mobile:y,isInvalid:E,placeholder:"ระบุหมายเลขโทรศัพท์",defaultCountry:g,onChangeCountry:P,onChangeMobile:R})]}),a(d,{children:[o(l,{text:"OTP Form Component"}),o(M,{length:4,onChange:e=>v(e),refcode:"1EC2",value:h,onResend:()=>{},timeRemain:m})]}),a(d,{children:[o(l,{text:"Pin Form Component"}),o(U,{codeList:t,onKeyboard:T,onDelete:D})]})]})},Ee={title:"Sample/Form",component:s},d=F("div")`
  width: 100%;
  padding: 50px 0;
  border-bottom: 1px solid #eee;
`;var u,x,C;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(DEFAULT_COUNTRY_PHONE);
  const [codeList, setCodeList] = useState(['', '', '', '', '', '']);
  const [delayResend, setDelayResend] = useState(180);
  const [timerExpire, setTimerExpire] = useState(180);
  const onChangeMobile = (val: string) => {
    setMobile(val);
    setIsInvalid(false);
  };
  const onChangeCountry = (item: any) => {
    setSelectedCountry(item);
  };
  const index = codeList.findIndex(it => it === '');
  const onKeyboard = (val: string) => {
    if (index === -1) return;
    const len = codeList.length;
    if (index < len) {
      codeList[index] = val;
      setCodeList([...codeList]);
    }
    if (index === len - 1) {
      //TODO handle submit
    }
  };
  const onDelete = () => {
    const i = index === -1 ? codeList.length - 1 : index - 1;
    if (i >= 0) {
      codeList[i] = '';
      setCodeList([...codeList]);
    }
  };
  useEffect(() => {
    const timerTimerExpire = setInterval(() => {
      setTimerExpire(timerExpire - 1);
    }, 1000);
    const timerDelayResend = setInterval(() => {
      setDelayResend(delayResend - 1);
    }, 1000);
    if (delayResend === 0) {
      clearInterval(timerDelayResend);
    }
    if (timerExpire === 0) {
      clearInterval(timerTimerExpire);
    }
    return () => {
      clearInterval(timerDelayResend);
      clearInterval(timerTimerExpire);
    };
  });
  return <Box sx={{
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    gap: 0,
    flexDirection: 'column'
  }}>
      <Item>
        <P1 text='Phone Number Form Component' />
        <PhoneNoForm countryList={COUNTRY_LIST} mobile={mobile} isInvalid={isInvalid} placeholder='ระบุหมายเลขโทรศัพท์' defaultCountry={selectedCountry} onChangeCountry={onChangeCountry} onChangeMobile={onChangeMobile} />
      </Item>
      <Item>
        <P1 text='OTP Form Component' />
        <OtpForm length={4} onChange={val => setOtp(val)} refcode='1EC2' value={otp} onResend={() => {}} timeRemain={delayResend} />
      </Item>
      <Item>
        <P1 text='Pin Form Component' />
        <PinForm codeList={codeList} onKeyboard={onKeyboard} onDelete={onDelete} />
      </Item>
    </Box>;
}`,...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const fe=["SampleForm"];export{s as SampleForm,fe as __namedExportsOrder,Ee as default};
