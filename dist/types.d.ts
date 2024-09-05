import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonProps as ButtonProps$1, TypographyProps, SxProps, Theme, SlideProps, TextFieldProps, SelectProps } from '@mui/material';
import * as React$1 from 'react';
import React__default, { FC } from 'react';
import { SxProps as SxProps$1, Theme as Theme$1 } from '@mui/material/styles';
import { DatePickerProps, PickerValidDate } from '@mui/x-date-pickers';
import * as i18next from 'i18next';

type BdType = 'primary' | 'secondary' | 'outlined' | 'remove';
type BdSize = 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
interface ButtonProps extends ButtonProps$1 {
    bdType?: BdType;
    bdSize?: BdSize;
    icon?: JSX.Element;
    text?: string | JSX.Element;
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
    sx?: SxProps<Theme>;
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
    sx?: SxProps<Theme>;
}
declare const P1: (props: ParagraphProps) => react_jsx_runtime.JSX.Element;
declare const P2: (props: ParagraphProps) => react_jsx_runtime.JSX.Element;
declare const Lead1: (props: ParagraphProps) => react_jsx_runtime.JSX.Element;
declare const Lead2: (props: ParagraphProps) => react_jsx_runtime.JSX.Element;

interface SmallProps {
    text: string;
    color?: string;
    sx?: SxProps<Theme>;
}
declare const Mini: (props: SmallProps) => react_jsx_runtime.JSX.Element;
declare const Tiny: (props: SmallProps) => react_jsx_runtime.JSX.Element;

interface StylizeProps {
    text: string;
    color?: string;
    sx?: SxProps<Theme>;
}
declare const Badges: (props: StylizeProps) => react_jsx_runtime.JSX.Element;
declare const BadgesBold: (props: StylizeProps) => react_jsx_runtime.JSX.Element;

interface BottomSheetProps extends SlideProps {
    height?: string;
    open?: boolean;
    onClose: () => void;
    isCloseIcon?: boolean;
    children: React__default.ReactElement;
}
declare const BottomSheet: (props: BottomSheetProps) => react_jsx_runtime.JSX.Element;

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
declare const PhoneNoForm: React__default.FC<PhoneNoFormProps>;

interface OtpFormProps {
    length: number;
    value: string;
    refcode: string;
    onChange: (val: string) => void;
    onResend: () => void;
    errorMessage?: string;
    refcodeLabel?: string;
    resendLabel?: string;
    unitLabel?: string;
    resendBtnText?: string;
    timeRemain: number;
}
declare const OtpForm: React__default.FC<OtpFormProps>;

interface IPinForm {
    onKeyboard: (val: string) => void;
    onDelete: () => void;
    codeList: string[];
    error?: string;
}
declare const PinForm: React__default.FC<IPinForm>;

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
    containerStyled?: React__default.CSSProperties;
    inputStyled?: React__default.CSSProperties;
    rightComponent?: React__default.ReactNode;
}
declare const MobileInput: React__default.FC<InputProps>;

interface IOTP {
    length: number;
    value: string;
    onChange: (val: string) => void;
}
declare const OtpInput: (props: IOTP) => react_jsx_runtime.JSX.Element;

interface Option {
    value: string;
    label: React__default.ReactNode;
}
interface SelectionGroupInputProps {
    name: string;
    options: Option[];
    label?: string;
    exclusive?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    sx?: SxProps<Theme>;
    inputSx?: SxProps<Theme>;
    helperText?: string;
    error?: boolean;
}
declare const SelectionGroupInput: React__default.FC<SelectionGroupInputProps>;

interface TextInputProps extends Omit<TextFieldProps, "variant"> {
    label?: string;
    helperText?: string;
    inputSx?: SxProps$1<Theme$1>;
    backgroundColor?: string;
}
declare const TextInput: React__default.FC<TextInputProps>;

interface DropdownInputProps extends Omit<SelectProps, "variant"> {
    label?: string;
    helperText?: string;
    options: {
        value: string;
        label: string;
    }[];
    inputSx?: SxProps$1<Theme$1>;
    backgroundColor?: string;
}
declare const DropdownInput: React__default.FC<DropdownInputProps>;

interface DOBPickerProps extends Omit<DatePickerProps<PickerValidDate>, 'open' | 'onOpen' | 'onClose'> {
    label?: string;
    helperText?: string;
    sx?: SxProps$1<Theme$1>;
    inputSx?: SxProps$1<Theme$1>;
    backgroundColor?: string;
    disabled?: boolean;
    error?: boolean;
    placeholder?: string;
}
declare const DOBPicker: React__default.FC<DOBPickerProps>;

interface TextAreaProps {
    value: string;
    onChange?: (event: React__default.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    maxLength?: number;
    borderColor?: string;
    borderActiveColor?: string;
    fontSize?: string;
    borderRadius?: string;
    placeholderColor?: string;
    rows?: number;
    sx?: SxProps$1<Theme$1>;
    helperText?: string;
    error?: boolean;
    disabled?: boolean;
}
declare const TextArea: React__default.FC<TextAreaProps>;

interface KeyBoardProps {
    onClick: (label: string) => void;
    onDelete: () => void;
}
declare const PinKeyBoard: React__default.FC<KeyBoardProps>;

type Variant = "default" | "outlined";
type BadgeProps = {
    color: string;
    icon?: React__default.ReactNode;
    text: React__default.ReactNode;
    variant?: Variant;
    sx?: SxProps<Theme>;
};
declare const Badge: ({ color, icon, text, sx, variant }: BadgeProps) => react_jsx_runtime.JSX.Element;

interface LanguageSwitchProps {
    width?: string;
    localeLanguage: string;
    updatedSwitchData: (lang: ELanguage) => void;
}
declare enum ELanguage {
    TH = "th",
    EN = "en"
}
declare const LanguageSwitch: (props: LanguageSwitchProps) => react_jsx_runtime.JSX.Element;

interface ProfileHeaderProps {
    nameText?: string;
    isLogin?: boolean;
    localeLanguage?: string;
    updatedSwitchData?: (lang: ELanguage) => void;
    onActivity?: () => void;
    onProfile?: () => void;
    onLogin?: () => void;
    onRegister?: () => void;
}
declare const ProfileHeader: (props: ProfileHeaderProps) => react_jsx_runtime.JSX.Element;

interface PageHeaderProps {
    title: string;
    onBack?: () => void;
    elevated?: boolean;
    fixed?: boolean;
    bgColor?: string;
    color?: string;
}
declare const PageHeader: React__default.FC<PageHeaderProps>;

interface LoadingWidgetProps {
    open: boolean;
}
declare const LoadingWidget: React__default.FC<LoadingWidgetProps>;

interface SuccessWidgetProps {
    open: boolean;
    message?: string;
}
declare const SuccessWidget: React__default.FC<SuccessWidgetProps>;

interface OptionsProps {
    id: string;
    title: string;
}
interface DialogModalProps {
    open: boolean;
    onClose: () => void;
    onSelectOption: (option: string) => void;
    options?: OptionsProps[];
    hasCancelButton?: boolean;
    cancelText?: string;
}
declare const DialogModal: React__default.FC<DialogModalProps>;

interface FileWithUploadStatus$1 {
    file: File;
    isUploaded?: boolean;
    isFailed?: boolean;
    isInProgress?: boolean;
    imageKey?: string;
    imageUrl?: string;
    errorMessage?: string;
    id: number;
}
interface LabelConfig {
    uploadButtonLabel: string;
    cameraButtonLabel: string;
    photoButtonLabel: string;
    fileButtonLabel: string;
    uploadedLabel: string;
    cancelButtonLabel: string;
}
interface ErrorMessageConfig {
    maxFileSizeErrorMessage: string;
    networkErrorMessage: string;
}
interface DocumentUploaderProps {
    files: FileWithUploadStatus$1[];
    uploadPercentages: {
        [key: number]: number;
    };
    maxFileCount?: number;
    maxFileSizeMB?: number;
    fileInfo?: string;
    onFileChange?: (files: FileWithUploadStatus$1[]) => void;
    onRemoveFile?: (id: number) => void;
    labelConfig?: LabelConfig;
    errorMessageConfig?: ErrorMessageConfig;
}
declare function DocumentUploader({ files, uploadPercentages, maxFileCount, maxFileSizeMB, fileInfo, onFileChange, onRemoveFile, labelConfig, errorMessageConfig, }: DocumentUploaderProps): react_jsx_runtime.JSX.Element;

declare enum AlertType {
    Success = "SUCCESS",
    Error = "ERROR",
    Info = "INFO",
    Warning = "WARNING",
    Notice = "NOTICE"
}
declare enum AlertStyle {
    Plain = "PLAIN",
    Fill = "FILL"
}

interface IAlert {
    text: string | JSX.Element;
    type?: AlertType;
    style?: AlertStyle;
    showCloseButton?: boolean;
    elevation?: number;
}
declare const Alert: (props: IAlert) => react_jsx_runtime.JSX.Element | null;

interface SelectionCardProps {
    icon: React__default.ReactNode;
    title: string;
    selected?: boolean;
    onClick?: () => void;
    textColor?: string;
    textActiveColor?: string;
    borderColor?: string;
    borderActiveColor?: string;
    backgroundColor?: string;
    backgroundActiveColor?: string;
}
declare const SelectionCard: React__default.FC<SelectionCardProps>;

interface StepListProps {
    steps?: string[];
    stepTextColor?: string;
    stepCircleColor?: string;
    stepConnectorColor?: string;
    textColor?: string;
}
declare const StepList: React__default.FC<StepListProps>;

interface StepListItemProps {
    number: number;
    text: string;
    stepCircleColor?: string;
    stepTextColor?: string;
    stepConnectorColor?: string;
    textColor?: string;
}
declare const StepListItem: React__default.FC<StepListItemProps>;

interface PersonalImageProps {
    width?: string;
    height?: string;
    imageUrl?: string;
    hidIcon?: boolean;
    customIcon?: React.ReactNode;
}
declare const ProviderAvatar: (props: PersonalImageProps) => react_jsx_runtime.JSX.Element;

interface Content {
    captureInstruction: string;
    placementInstruction: string;
    cameraOverlayFrame: JSX.Element;
}
interface KycCameraProps {
    onTakePhoto?: (photo: string) => void;
    content?: Content;
}
declare const KycCamera: React__default.FC<KycCameraProps>;

declare enum EFacingMode {
    USER = "user",
    ENVIRONMENT = "environment"
}
interface CameraFrameProps {
    onFacingMode: (mode: EFacingMode) => void;
    onCapture: () => void;
    onToggleTorch?: () => void;
    cameraViewPortHeight?: number;
    viewportHeight?: number;
    cameraOverlayFrame?: React__default.ReactNode;
    captureInstruction?: React__default.ReactNode;
    placementInstruction?: React__default.ReactNode;
}
declare const CameraFrame: React__default.FC<CameraFrameProps>;

interface CameraFrameOverlayProps {
    overlayPosition: 'top' | 'bottom' | 'left' | 'right';
    cameraViewPortHeight?: number;
    children?: React__default.ReactNode;
    sx?: SxProps<Theme>;
}
declare const CameraFrameOverlay: React__default.FC<CameraFrameOverlayProps>;

interface CornerMarkProps {
    rotation?: number;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    cameraViewPortHeight?: number;
}
declare const CornerMark: React__default.FC<CornerMarkProps>;

declare function TakePhotoIcon(): react_jsx_runtime.JSX.Element;

declare function CameraViewPort({ viewPortHeight, children }: {
    viewPortHeight?: number;
    children?: React.ReactNode;
}): react_jsx_runtime.JSX.Element;

declare function IdCardFrame(): react_jsx_runtime.JSX.Element;

declare function PassportFrame(): react_jsx_runtime.JSX.Element;

declare const Colors: {
    textSuccess: string;
    textError: string;
    textRoyalBlue: string;
    textWarning: string;
    backgroundGreen: string;
    backgroundRed: string;
    aliceBlue: string;
    warning: string;
    backgroundOrange: string;
    formBorderActive: string;
    formTextActive: string;
    formBorder: string;
    brandBlack: string;
    darkBlue: string;
    royalBlue: string;
    cherry: string;
    offWhite: string;
    success: string;
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
    primary007: string;
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

type LogoProps = {
    size?: number;
};
declare const Logo: (props: LogoProps) => react_jsx_runtime.JSX.Element;

type IconProps$y = {
    size?: number;
    color?: string;
};
declare const Circle: (props: IconProps$y) => react_jsx_runtime.JSX.Element;

type IconProps$x = {
    size?: number;
    color?: string;
};
declare const Del: (props: IconProps$x) => react_jsx_runtime.JSX.Element;

declare const Remove: () => react_jsx_runtime.JSX.Element;

interface CloseIconProps {
    className?: string;
    width?: string;
    height?: string;
    color?: string;
}
declare function CloseIcon(props: CloseIconProps): react_jsx_runtime.JSX.Element;

type IconProps$w = {
    size?: number;
    color?: string;
};
declare const Check: (props: IconProps$w) => react_jsx_runtime.JSX.Element;

type IconProps$v = {
    size?: number;
    color?: string;
};
declare const CalendarIcon$1: (props: IconProps$v) => react_jsx_runtime.JSX.Element;

type IconProps$u = {
    size?: number;
    color?: string;
};
declare const DocumentText: (props: IconProps$u) => react_jsx_runtime.JSX.Element;

type IconProps$t = {
    size?: number;
    color?: string;
};
declare const EditIcon: (props: IconProps$t) => react_jsx_runtime.JSX.Element;

type IconProps$s = {
    size?: number;
    color?: string;
};
declare const UserIcon: (props: IconProps$s) => react_jsx_runtime.JSX.Element;

type IconProps$r = {
    size?: number;
    color?: string;
};
declare const Globe: (props: IconProps$r) => react_jsx_runtime.JSX.Element;

type IconProps$q = {
    size?: number;
    color?: string;
};
declare const Identification: (props: IconProps$q) => react_jsx_runtime.JSX.Element;

type IconProps$p = {
    size?: number;
    color?: string;
};
declare const PhoneIcon: (props: IconProps$p) => react_jsx_runtime.JSX.Element;

type IconProps$o = {
    size?: number;
    color?: string;
};
declare const ShieldCheckIcon: (props: IconProps$o) => react_jsx_runtime.JSX.Element;

type IconProps$n = {
    size?: number;
    color?: string;
};
declare const SpeakerphoneIcon: (props: IconProps$n) => react_jsx_runtime.JSX.Element;

type IconProps$m = {
    size?: number;
    color?: string;
};
declare const TrashbinIcon: (props: IconProps$m) => react_jsx_runtime.JSX.Element;

type IconProps$l = {
    size?: number;
    color?: string;
};
declare const PhoneOutgoingIcon: (props: IconProps$l) => react_jsx_runtime.JSX.Element;

type IconProps$k = {
    size?: number;
    color?: string;
};
declare const Icon$3: (props: IconProps$k) => react_jsx_runtime.JSX.Element;

type IconProps$j = {
    size?: number;
    color?: string;
};
declare const Icon$2: (props: IconProps$j) => react_jsx_runtime.JSX.Element;

type IconProps$i = {
    width?: number;
    height?: number;
    color?: string;
};
declare const Icon$1: (props: IconProps$i) => react_jsx_runtime.JSX.Element;

type IconProps$h = {
    size?: number;
    color?: string;
};
declare const CalendarIcon: (props: IconProps$h) => react_jsx_runtime.JSX.Element;

type IconProps$g = {
    size?: number;
    color?: string;
};
declare const ChatIcon: (props: IconProps$g) => react_jsx_runtime.JSX.Element;

type IconProps$f = {
    size?: number;
    color?: string;
};
declare const DrugsIcon: (props: IconProps$f) => react_jsx_runtime.JSX.Element;

type IconProps$e = {
    size?: number;
    color?: string;
};
declare const MedicalCertificateIcon: (props: IconProps$e) => react_jsx_runtime.JSX.Element;

type IconProps$d = {
    size?: number;
    color?: string;
};
declare const PhotoIcon: (props: IconProps$d) => react_jsx_runtime.JSX.Element;

type IconProps$c = {
    size?: number;
    color?: string;
};
declare const TeleIcon: (props: IconProps$c) => react_jsx_runtime.JSX.Element;

type IconProps$b = {
    size?: number;
    color?: string;
};
declare const VideoIcon: (props: IconProps$b) => react_jsx_runtime.JSX.Element;

interface IconProps$a {
    size?: number;
}
declare const IdCardIcon: (props: IconProps$a) => react_jsx_runtime.JSX.Element;

interface IconProps$9 {
    size?: number;
}
declare const PassportIcon: (props: IconProps$9) => react_jsx_runtime.JSX.Element;

interface IconProps$8 {
    size?: number;
}
declare const KycStepIcon: (props: IconProps$8) => react_jsx_runtime.JSX.Element;

type IconProps$7 = {
    width?: number;
    height?: number;
    color?: string;
};
declare const ChevronRightIcon: (props: IconProps$7) => react_jsx_runtime.JSX.Element;

declare const CouponIcon: () => react_jsx_runtime.JSX.Element;

interface IconProps$6 {
    size?: number;
    color?: string;
}
declare const CameraIcon: (props: IconProps$6) => react_jsx_runtime.JSX.Element;

interface IconProps$5 {
    size?: number;
}
declare const IdCardVerified: (props: IconProps$5) => react_jsx_runtime.JSX.Element;

interface IconProps$4 {
    size?: number;
}
declare const PassportVerified: (props: IconProps$4) => react_jsx_runtime.JSX.Element;

type IconProps$3 = {
    width?: number;
    height?: number;
    color?: string;
};
declare const ProviderIcon: (props: IconProps$3) => react_jsx_runtime.JSX.Element;

type IconProps$2 = {
    size?: number;
};
declare const LineIcon: ({ size }: IconProps$2) => react_jsx_runtime.JSX.Element;

declare const AggressionToOthersIcon: () => react_jsx_runtime.JSX.Element;

declare const ChestPainIcon: () => react_jsx_runtime.JSX.Element;

declare const DyspneaIcon: () => react_jsx_runtime.JSX.Element;

type IconProps$1 = {
    size?: number;
    color?: string;
};
declare const Icon: (props: IconProps$1) => react_jsx_runtime.JSX.Element;

declare const PalpitationIcon: () => react_jsx_runtime.JSX.Element;

declare const SelfIcon: () => react_jsx_runtime.JSX.Element;

declare const SevereAbdominalPainIcon: () => react_jsx_runtime.JSX.Element;

declare const SevereHeadache: () => react_jsx_runtime.JSX.Element;

declare const WarningIcon: () => react_jsx_runtime.JSX.Element;

declare const WeaknessIcon: () => react_jsx_runtime.JSX.Element;

declare const ConsultationIcon: () => react_jsx_runtime.JSX.Element;

declare const DoctorEducationIcon: () => react_jsx_runtime.JSX.Element;

declare const DoctorFeeIcon: () => react_jsx_runtime.JSX.Element;

declare const DoctorHospitalIcon: () => react_jsx_runtime.JSX.Element;

declare const DoctorLanguageIcon: () => react_jsx_runtime.JSX.Element;

declare const DoctorSpecializeIcon: () => react_jsx_runtime.JSX.Element;

declare const AttentionNotificationIcon: () => react_jsx_runtime.JSX.Element;

declare const CloseNotificationIcon: () => react_jsx_runtime.JSX.Element;

declare const ErrorNotificationIcon: () => react_jsx_runtime.JSX.Element;

declare const InfoNotificationIcon: () => react_jsx_runtime.JSX.Element;

interface IconProps {
    size?: number;
    color?: string;
}
declare const SuccessNotificationIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const WarningNotificationIcon: () => react_jsx_runtime.JSX.Element;

declare const toPattern: (value: string, pattern: string) => string;
declare const clearPattern: (text?: string, ch?: string) => string;
declare const removeZeroPrefix: (phoneNumber: string) => string;
declare const randomString: (length: number) => string;
declare const formatPriceWithCommas: (price: number, currentcy?: string, isThai?: boolean) => string;
declare const to2Digits: (val: number) => string;

declare const format_clearPattern: typeof clearPattern;
declare const format_formatPriceWithCommas: typeof formatPriceWithCommas;
declare const format_randomString: typeof randomString;
declare const format_removeZeroPrefix: typeof removeZeroPrefix;
declare const format_to2Digits: typeof to2Digits;
declare const format_toPattern: typeof toPattern;
declare namespace format {
  export { format_clearPattern as clearPattern, format_formatPriceWithCommas as formatPriceWithCommas, format_randomString as randomString, format_removeZeroPrefix as removeZeroPrefix, format_to2Digits as to2Digits, format_toPattern as toPattern };
}

declare const checkIsTokenExpired: (jwtToken: string, leadTime?: number) => boolean;

declare const validateOAuthToken_checkIsTokenExpired: typeof checkIsTokenExpired;
declare namespace validateOAuthToken {
  export { validateOAuthToken_checkIsTokenExpired as checkIsTokenExpired };
}

declare const setCookie: (name: string, value: string | null, options?: {
    days?: number;
    secure?: boolean;
    path?: string;
    domain?: string;
}) => void;
declare const getCookie: (name: string) => string | null;
declare const removeCookie: (name: string, options?: {
    path?: string;
    domain?: string;
}) => void;

declare const cookie_getCookie: typeof getCookie;
declare const cookie_removeCookie: typeof removeCookie;
declare const cookie_setCookie: typeof setCookie;
declare namespace cookie {
  export { cookie_getCookie as getCookie, cookie_removeCookie as removeCookie, cookie_setCookie as setCookie };
}

declare const gotoLoginPhoneNumberPage: (url: string) => void;
declare const gotoLoginPinPage: (url: string) => void;

declare const redirect_gotoLoginPhoneNumberPage: typeof gotoLoginPhoneNumberPage;
declare const redirect_gotoLoginPinPage: typeof gotoLoginPinPage;
declare namespace redirect {
  export { redirect_gotoLoginPhoneNumberPage as gotoLoginPhoneNumberPage, redirect_gotoLoginPinPage as gotoLoginPinPage };
}

interface IAuthData {
    accessToken: string;
    idToken: string;
    refreshToken: string;
}
declare const getCookieOptions: () => {
    path: string;
    days: number;
};
declare const saveAuthData: (oAuthData: IAuthData) => void;
declare const removeAuthData: () => void;
declare const getAuthData: () => {
    accessToken: string | null;
    refreshToken: string | null;
    idToken: string | null;
    otpToken: string | null;
};

type manageAuth_IAuthData = IAuthData;
declare const manageAuth_getAuthData: typeof getAuthData;
declare const manageAuth_getCookieOptions: typeof getCookieOptions;
declare const manageAuth_removeAuthData: typeof removeAuthData;
declare const manageAuth_saveAuthData: typeof saveAuthData;
declare namespace manageAuth {
  export { type manageAuth_IAuthData as IAuthData, manageAuth_getAuthData as getAuthData, manageAuth_getCookieOptions as getCookieOptions, manageAuth_removeAuthData as removeAuthData, manageAuth_saveAuthData as saveAuthData };
}

interface AuthContextProps {
    isAuthenticated: boolean | null;
    isRequiredPin: boolean | null;
    accessToken: string | null;
    refreshToken: string | null;
    idToken: string | null;
    otpToken: string | null;
    onRefresh: () => void;
}

declare const Authentication: {
    AuthProvider: ({ children }: {
        children: React$1.ReactNode;
    }) => react_jsx_runtime.JSX.Element;
    useAuth: () => AuthContextProps;
    withAuth: (WrappedComponent: React$1.FC) => (props: any) => react_jsx_runtime.JSX.Element | null;
};

interface LanguageContextProps {
    lang: string;
    changeLanguage: (language: string) => void;
}

declare const Language: {
    LanguageProvider: React$1.FC<{
        children: React$1.ReactNode;
        i18n: i18next.i18n;
    }>;
    useLanguage: () => LanguageContextProps;
};

interface CameraViewport {
    height: number;
    width: number;
}
interface CameraViewportOptions {
    maxWidth?: number;
}
declare const useCameraViewport: ({ maxWidth }?: CameraViewportOptions) => CameraViewport;

declare const useViewportHeight: () => number;

interface FileWithUploadStatus {
    file: File;
    isUploaded?: boolean;
    isFailed?: boolean;
    isInProgress?: boolean;
    imageKey?: string;
    imageUrl?: string;
    errorMessage?: string;
    id: number;
}
interface UploadService {
    (file: FileWithUploadStatus, updateProgress: (progress: number) => void): Promise<any>;
}
declare const useFileUploader: (uploadService: UploadService) => {
    files: FileWithUploadStatus[];
    uploadPercentages: {
        [key: number]: number;
    };
    addFiles: (newFiles: FileWithUploadStatus[]) => void;
    removeFile: (id: number) => void;
    handleUploadFiles: () => Promise<void>;
};

declare enum EPaymentMethod {
    promptpay = "qr_code",
    creditCard = "credit_debit_card",
    couponApplied = "coupon_applied",
    zeroAmount = "zero_amount",
    invoice = "invoice",
    insurance = "insurance"
}
interface PaymentMethodProps {
    onSelected?: (paymentType: EPaymentMethod) => void;
    allowPaymentOptions?: EPaymentMethod[];
    currentPaymentType?: EPaymentMethod;
    title?: string;
    hideTitle?: boolean;
    promptpayLabel?: string;
    creditCardLabel?: string;
    alertText?: string;
    withAlert?: boolean;
}
declare const PaymentMethod: React__default.FC<PaymentMethodProps>;

interface ProviderInfoProps {
    positionName?: string;
    fullName?: string;
    netConsultationFee?: number;
    consultationTime?: number;
    photo?: string;
    title?: string;
    unitMins?: string;
    hideTitle?: boolean;
}
declare const ProviderSection: React__default.FC<ProviderInfoProps>;

export { AggressionToOthersIcon, Alert, AlertStyle, AlertType, AttentionNotificationIcon, Authentication, Icon$1 as BGProviderIcon, Badge, type BadgeProps, Badges, BadgesBold, BaseText, BottomSheet as BdBottomSheet, Button as BdButton, OutlinedBtn as BdOutlinedButton, PrimaryBtn as BdPrimaryButton, RemoveBtn as BdRemoveButton, SecondaryBtn as BdSecondaryButton, CalendarIcon$1 as CalendarIcon, CameraFrame, CameraFrameOverlay, CameraIcon, CameraViewPort, ChatIcon, Check as CheckIcon, ChestPainIcon, ChevronRightIcon, Circle as CircleIcon, CloseIcon, CloseNotificationIcon, Colors, Icon$3 as ConsultIcon, ConsultationIcon, cookie as Cookie, CornerMark, CouponIcon, DOBPicker as DOBPickerInput, CalendarIcon as DateIcon, Del as DelIcon, DialogModal, DoctorEducationIcon, DoctorFeeIcon, DoctorHospitalIcon, DoctorLanguageIcon, DoctorSpecializeIcon, DocumentText as DocumentTextIcon, DocumentUploader, DropdownInput, DrugsIcon, DyspneaIcon, EditIcon, ErrorNotificationIcon, type FileWithUploadStatus, format as Format, Globe, H1, H2, H3, H4, H5, H6, type HeadingProps, IdCardFrame, IdCardIcon, IdCardVerified, Identification, InfoNotificationIcon, Icon as InformationIcon, InternationalPhone, KycCamera, KycStepIcon, Language, LanguageSwitch, Lead1, Lead2, LineIcon, LoadingWidget, Logo as LogoIcon, manageAuth as ManageAuth, MedicalCertificateIcon, Mini, MobileInput, OtpForm, OtpInput, P1, P2, PageHeader, PalpitationIcon, type ParagraphProps, PassportFrame, PassportIcon, PassportVerified, Icon$2 as PaymentIcon, PaymentMethod, PhoneIcon, PhoneNoForm as PhoneNumberForm, PhoneOutgoingIcon, PhotoIcon, PinForm, PinKeyBoard as PinKeyboard, ProfileHeader, ProviderAvatar, ProviderIcon, ProviderSection, redirect as Redirect, Remove as RemoveIcon, SelectionGroupInput as SelectGroupInput, SelectionCard, SelfIcon, SevereAbdominalPainIcon, SevereHeadache as SevereHeadacheIcon, ShieldCheckIcon, type SmallProps, SpeakerphoneIcon, StepList, StepListItem, type StylizeProps, SuccessNotificationIcon, SuccessWidget, TakePhotoIcon, TeleIcon, TextArea, TextInput, Tiny, TrashbinIcon, UserIcon, validateOAuthToken as ValidateOAuthToken, VideoIcon, WarningIcon, WarningNotificationIcon, WeaknessIcon, useCameraViewport, useFileUploader, useViewportHeight };
