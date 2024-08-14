import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonProps as ButtonProps$1, TypographyProps, SlideProps } from '@mui/material';
import React, { FC } from 'react';

type BdType = 'primary' | 'secondary' | 'outlined' | 'remove';
type BdSize = 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
interface ButtonProps extends ButtonProps$1 {
    bdType?: BdType;
    bdSize?: BdSize;
    icon?: JSX.Element;
    text?: string;
    loading?: boolean;
    width?: string;
    isRightIcon?: boolean;
    counter?: number;
}
declare const Button: (props: ButtonProps) => react_jsx_runtime.JSX.Element;

declare const PrimaryBtn: (props: ButtonProps) => react_jsx_runtime.JSX.Element;

declare const SecondaryBtn: (props: ButtonProps) => react_jsx_runtime.JSX.Element;

declare const OutlinedBtn: (props: ButtonProps) => react_jsx_runtime.JSX.Element;

declare const RemoveBtn: (props: ButtonProps) => react_jsx_runtime.JSX.Element;

type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'lead1' | 'lead2' | 'mini' | 'tiny' | 'badges' | 'badgesBold';
interface BaseTextProps extends TypographyProps {
    text: string;
    bdType?: TextType;
    color?: string;
}
declare const BaseText: (props: BaseTextProps) => react_jsx_runtime.JSX.Element;

interface HeadingProps {
    text: string;
    color?: string;
}
declare const H1: (props: HeadingProps) => react_jsx_runtime.JSX.Element;
declare const H2: (props: HeadingProps) => react_jsx_runtime.JSX.Element;
declare const H3: (props: HeadingProps) => react_jsx_runtime.JSX.Element;
declare const H4: (props: HeadingProps) => react_jsx_runtime.JSX.Element;
declare const H5: (props: HeadingProps) => react_jsx_runtime.JSX.Element;
declare const H6: (props: HeadingProps) => react_jsx_runtime.JSX.Element;

interface ParagraphProps {
    text: string;
    color?: string;
}
declare const P1: (props: ParagraphProps) => react_jsx_runtime.JSX.Element;
declare const P2: (props: ParagraphProps) => react_jsx_runtime.JSX.Element;
declare const Lead1: (props: ParagraphProps) => react_jsx_runtime.JSX.Element;
declare const Lead2: (props: ParagraphProps) => react_jsx_runtime.JSX.Element;

interface SmallProps {
    text: string;
    color?: string;
}
declare const Mini: (props: SmallProps) => react_jsx_runtime.JSX.Element;
declare const Tiny: (props: SmallProps) => react_jsx_runtime.JSX.Element;

interface StylizeProps {
    text: string;
    color?: string;
}
declare const Badges: (props: StylizeProps) => react_jsx_runtime.JSX.Element;
declare const BadgesBold: (props: StylizeProps) => react_jsx_runtime.JSX.Element;

interface BottomSheetProps extends SlideProps {
    height?: string;
    open?: boolean;
    onClose: () => void;
    isCloseIcon?: boolean;
    children: React.ReactElement;
}
declare const BottomSheet: (props: BottomSheetProps) => react_jsx_runtime.JSX.Element;

interface OtpFormProps {
    length: number;
    value: string;
    refcode: string;
    onChange: (val: string) => void;
    onResend: () => void;
    errorMessage?: string;
    refcodeLabel?: string;
    resendTimeSecond?: number;
    expireTimeSecond?: number;
    resendLabel?: string;
    unitLabel?: string;
    resendBtnText?: string;
}
declare const OtpForm: React.FC<OtpFormProps>;

interface ICountriesPhone {
    id: string;
    flag: string;
    flagIcon: string;
    countryName: string;
    phoneCode: string;
    countryCode: string;
    region: string | null;
    active?: boolean;
    createdAt?: string;
    updatedAt?: string;
}
interface InternationalPhoneProps {
    onChange?: (country: ICountriesPhone) => void;
    defaultCountry?: ICountriesPhone;
    countryList: ICountriesPhone[];
}
declare const InternationalPhone: FC<InternationalPhoneProps>;

interface PhoneNoFormProps {
    countryList: ICountriesPhone[];
    mobile: string;
    onChangeCountry: (selectedCountry: ICountriesPhone) => void;
    onChangeMobile: (mobile: string) => void;
    isInvalid?: boolean;
    placeholder?: string;
    defaultCountry?: ICountriesPhone;
}
declare const PhoneNoForm: React.FC<PhoneNoFormProps>;

type IPinForm = {
    onKeyboard: (val: string) => void;
    onDelete: () => void;
    codeList: string[];
    error?: string;
};
declare const PinForm: React.FC<IPinForm>;

interface InputProps {
    name: string;
    label: string;
    value?: string;
    tag?: string;
    disabled?: boolean;
    pattern?: string;
    charPattern?: string;
    isNumber?: boolean;
    limit?: number;
    onChange?: (value: string, name: string, tag?: string) => void;
    invalid?: boolean;
    type?: string;
    containerStyled?: React.CSSProperties;
    inputStyled?: React.CSSProperties;
    rightComponent?: React.ReactNode;
}
declare const MobileInput: React.FC<InputProps>;

type IOTP = {
    length: number;
    value: string;
    onChange: (val: string) => void;
};
declare const OtpInput: (props: IOTP) => react_jsx_runtime.JSX.Element;

interface KeyBoardProps {
    onClick: (label: string) => void;
    onDelete: () => void;
}
declare const PinKeyBoard: React.FC<KeyBoardProps>;

declare const Colors: {
    brandBlack: string;
    darkBlue: string;
    royalBlue: string;
    cherry: string;
    offWhite: string;
    success: string;
    warning: string;
    error: string;
    completed: string;
    pending: string;
    trinary001: string;
    trinary002: string;
    trinary003: string;
    trinary004: string;
    trinary005: string;
    secondary001: string;
    secondary002: string;
    secondary003: string;
    secondary004: string;
    secondary005: string;
    primary001: string;
    primary002: string;
    primary003: string;
    primary004: string;
    primary005: string;
    primary006: string;
    gray0: string;
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    gray5: string;
    gray6: string;
    gray7: string;
    black: string;
    white: string;
};

declare const toPattern: (value: string, pattern: string) => string;
declare const clearPattern: (text?: string, ch?: string) => string;
declare const removeZeroPrefix: (phoneNumber: string) => string;
declare const randomString: (length: number) => string;

declare const format_clearPattern: typeof clearPattern;
declare const format_randomString: typeof randomString;
declare const format_removeZeroPrefix: typeof removeZeroPrefix;
declare const format_toPattern: typeof toPattern;
declare namespace format {
  export { format_clearPattern as clearPattern, format_randomString as randomString, format_removeZeroPrefix as removeZeroPrefix, format_toPattern as toPattern };
}

type LogoProps = {
    size?: number;
};
declare const Logo: (props: LogoProps) => react_jsx_runtime.JSX.Element;

type IconProps$1 = {
    size?: number;
    color?: string;
};
declare const Circle: (props: IconProps$1) => react_jsx_runtime.JSX.Element;

type IconProps = {
    size?: number;
    color?: string;
};
declare const Del: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const Remove: () => react_jsx_runtime.JSX.Element;

interface CloseIconProps {
    className?: string;
    width?: string;
    height?: string;
    color?: string;
}
declare function CloseIcon(props: CloseIconProps): react_jsx_runtime.JSX.Element;

export { Badges, BadgesBold, BaseText, BottomSheet as BdBottomSheet, Button as BdButton, OutlinedBtn as BdOutlinedButton, PrimaryBtn as BdPrimaryButton, RemoveBtn as BdRemoveButton, SecondaryBtn as BdSecondaryButton, Circle as CircleIcon, CloseIcon, Colors, Del as DelIcon, format as Format, H1, H2, H3, H4, H5, H6, type HeadingProps, InternationalPhone, Lead1, Lead2, Logo as LogoIcon, Mini, MobileInput, OtpForm, OtpInput, P1, P2, type ParagraphProps, PhoneNoForm as PhoneNumberForm, PinForm, PinKeyBoard as PinKeyboard, Remove as RemoveIcon, type SmallProps, type StylizeProps, Tiny };
