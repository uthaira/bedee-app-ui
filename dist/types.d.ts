import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default, { FC, ReactNode } from 'react';
import { ButtonProps as ButtonProps$1, TypographyProps, SxProps, Theme, SlideProps, TextFieldProps, SelectProps } from '@mui/material';
import { SxProps as SxProps$1, Theme as Theme$1 } from '@mui/material/styles';
import { DatePickerProps, PickerValidDate } from '@mui/x-date-pickers';
import { JwtPayload } from 'jwt-decode';
import * as i18next from 'i18next';

interface AccessCodeProviderProps {
    children: React__default.ReactNode;
    domain: string;
    cookieKey: string;
    cookieValue: string;
    accessCode: string;
}
declare const AccessCodeProvider: (props: AccessCodeProviderProps) => react_jsx_runtime.JSX.Element;

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

type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'lead1' | 'lead2' | 'mini' | 'tiny' | 'badges' | 'badgesBold' | 'header1';
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
declare const Header1: (props: ParagraphProps) => react_jsx_runtime.JSX.Element;

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
    shouldCloseOnOutsideClick?: boolean;
    children: React__default.ReactElement;
}
declare const BottomSheet: (props: BottomSheetProps) => react_jsx_runtime.JSX.Element;

interface SwipeableBottomSheetProps {
    isOpen: boolean;
    configHeight?: string;
    drawerBleeding?: number;
    onOpenDrawer: () => void;
    onCloseDrawer: () => void;
    children: React__default.ReactNode;
}
declare const SwipeableBottomSheet: (props: SwipeableBottomSheetProps) => react_jsx_runtime.JSX.Element;

interface SwipeableBottomSheetV2Props {
    children: React__default.ReactNode;
    isOpen: boolean;
    isCloseButton?: boolean;
    snapPoints?: number[];
    initialSnap?: number;
    containerStyle?: React__default.CSSProperties;
    onCloseDrawer: () => void;
    onSnap?: (snapIndex: number) => void;
}
declare const SwipeableBottomSheetV2: (props: SwipeableBottomSheetV2Props) => react_jsx_runtime.JSX.Element;

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
    inputStyled?: React__default.CSSProperties;
    disabled?: boolean;
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
    fontSize?: string;
    onBlur?: (value: string, name: string, tag?: string) => void;
    disabled?: boolean;
    required?: boolean;
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
    isInvalid?: boolean;
    turnstileComponent?: React__default.ReactNode;
    isDisabledResendBtn?: boolean;
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
    required?: boolean;
    pattern?: string;
    charPattern?: string;
    isNumber?: boolean;
    limit?: number;
    onChange?: (value: string, name: string, tag?: string) => void;
    onBlur?: (value: string, name: string, tag?: string) => void;
    invalid?: boolean;
    type?: string;
    containerStyled?: React__default.CSSProperties;
    inputStyled?: React__default.CSSProperties;
    rightComponent?: React__default.ReactNode;
    sx?: SxProps$1<Theme$1>;
}
declare const MobileInput: React__default.FC<InputProps>;

interface IOTP {
    length: number;
    value: string;
    onChange: (val: string) => void;
    isInvalid: boolean;
}
declare const OtpInput: (props: IOTP) => react_jsx_runtime.JSX.Element;

interface Option {
    value: string;
    label: React__default.ReactNode;
}
interface SelectionGroupInputProps {
    name: string;
    options: Option[];
    label?: React__default.ReactNode | string;
    exclusive?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    sx?: SxProps<Theme>;
    inputSx?: SxProps<Theme>;
    inputGroupSx?: SxProps<Theme>;
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
    inputSx?: SxProps$1<Theme$1>;
    backgroundColor?: string;
    disabled?: boolean;
    error?: boolean;
    placeholder?: string;
    onBlur?: React__default.FocusEventHandler<HTMLInputElement>;
    onClear?: () => void;
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
    inputProps?: React__default.InputHTMLAttributes<HTMLTextAreaElement>;
    helperText?: string;
    error?: boolean;
    disabled?: boolean;
}
declare const TextArea: React__default.FC<TextAreaProps>;

interface RadioButtonProps {
    value?: boolean | null;
    message?: React__default.ReactNode | string;
    disabled?: boolean;
    color?: string;
    onPress?: () => void;
    checkedStyle?: React__default.CSSProperties;
    unCheckStyle?: React__default.CSSProperties;
    fontSize?: number;
    sx?: SxProps<Theme>;
    errorMessage?: string;
}
declare const RadioButton: React__default.FC<RadioButtonProps>;

interface ISearchProps {
    placeholder?: string;
    readOnly?: boolean;
    value?: string;
    onChange?: (val: string) => void;
    onKeyDown?: (event: any) => void;
    autoFocus?: boolean;
}
declare const SearchInput: React__default.FC<ISearchProps>;

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

interface ProviderBadgeProps {
    text: string;
    onClick: () => void;
    withArrow?: boolean;
}
declare const ProviderBadge: ({ text, onClick, withArrow, }: ProviderBadgeProps) => react_jsx_runtime.JSX.Element;

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
    badgeText?: string;
    updatedSwitchData?: (lang: ELanguage) => void;
    onActivity?: () => void;
    onCart?: () => void;
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

interface ConfirmModalProps {
    title: string;
    message: string;
    isVisible: boolean;
    isCloseIcon?: boolean;
    handleClose?: () => void;
    handleClickPrimary?: () => void;
    handleClickSecondary?: () => void;
    textPrimaryButton?: string;
    textSecondaryButton?: string;
    image?: React.ReactNode;
    padding?: string;
    button?: React.ReactNode;
}
declare const ConfirmModal: ({ title, message, isVisible, isCloseIcon, handleClose, handleClickPrimary, handleClickSecondary, textPrimaryButton, textSecondaryButton, image, button, padding, }: ConfirmModalProps) => react_jsx_runtime.JSX.Element;

interface CustomConfirmModalProps {
    title: string;
    message?: string;
    content?: React__default.ReactNode;
    isVisible: boolean;
    isCloseIcon?: boolean;
    handleClose?: () => void;
    handleClickPrimary?: () => void;
    handleClickSecondary?: () => void;
    textPrimaryButton?: string;
    textSecondaryButton?: string;
    image?: React__default.ReactNode;
    padding?: string;
    button?: React__default.ReactNode;
}
declare const CustomConfirmModal: ({ title, message, content, isVisible, isCloseIcon, handleClose, handleClickPrimary, handleClickSecondary, textPrimaryButton, textSecondaryButton, image, button, padding, }: CustomConfirmModalProps) => react_jsx_runtime.JSX.Element;

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
    sx?: SxProps<Theme>;
    onClose?: () => void;
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

interface ProviderAvatarProps {
    width?: string;
    height?: string;
    imageUrl?: string;
    hidIcon?: boolean;
    customIcon?: React.ReactNode;
}
declare const ProviderAvatar: (props: ProviderAvatarProps) => react_jsx_runtime.JSX.Element;

interface Content {
    captureInstruction: string;
    placementInstruction: string;
    cameraOverlayFrame: JSX.Element;
}
interface KycCameraProps {
    isReady: boolean;
    onTakePhoto?: (photoBase64: string) => void;
    onSelectGallery?: (photoBase64: string, mimeType: string, extension: string) => void;
    content?: Content;
    textGallery?: string;
    isGallery?: boolean;
}
declare const KycCamera: React__default.FC<KycCameraProps>;

declare enum EFacingMode {
    USER = "user",
    ENVIRONMENT = "environment"
}
interface CameraFrameProps {
    onFacingMode: (mode: EFacingMode) => void;
    onCapture: () => void;
    onGallery: () => void;
    onToggleTorch?: () => void;
    cameraViewPortHeight?: number;
    viewportHeight?: number;
    cameraOverlayFrame?: React__default.ReactNode;
    captureInstruction?: React__default.ReactNode;
    placementInstruction?: React__default.ReactNode;
    textGallery: string;
    isGallery: boolean;
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

interface FullModalProps extends SlideProps {
    open?: boolean;
    onClose: () => void;
    isCloseIcon?: boolean;
    children: React__default.ReactElement;
    hidePadding?: boolean;
    closeIconStyle?: 'close' | 'close-circle';
}
declare const FullModal: (props: FullModalProps) => react_jsx_runtime.JSX.Element;

interface ITabItems {
    value?: any;
    label?: any;
}
interface IProviderTabProps {
    active?: any;
    tabs?: ITabItems[];
    handleChangeTab?: (tab: any) => void;
    centered?: boolean;
    variant?: 'standard' | 'scrollable' | 'fullWidth';
}
declare const TabComponent: React__default.FC<IProviderTabProps>;

declare const Colors: {
    toastBackgroundSuccess: string;
    toastBackgroundError: string;
    toastBackgroundInfo: string;
    toastBackgroundWarning: string;
    textSuccess: string;
    textError: string;
    textRoyalBlue: string;
    textWarning: string;
    backgroundGreen: string;
    backgroundRed: string;
    aliceBlue: string;
    warning: string;
    backgroundOrange: string;
    backgroundGradient: string;
    formBorderActive: string;
    formTextActive: string;
    formBorder: string;
    brandBlack: string;
    darkBlue: string;
    royalBlue: string;
    cherry: string;
    offWhite: string;
    lightRed: string;
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
    gray8: string;
    black: string;
    white: string;
};

type LogoProps = {
    size?: number;
};
declare const Logo: (props: LogoProps) => react_jsx_runtime.JSX.Element;

type IconProps$S = {
    size?: number;
    color?: string;
};
declare const Circle: (props: IconProps$S) => react_jsx_runtime.JSX.Element;

type IconProps$R = {
    size?: number;
    color?: string;
};
declare const Del: (props: IconProps$R) => react_jsx_runtime.JSX.Element;

declare const Remove: () => react_jsx_runtime.JSX.Element;

interface CloseIconProps {
    className?: string;
    width?: string;
    height?: string;
    color?: string;
}
declare function CloseIcon(props: CloseIconProps): react_jsx_runtime.JSX.Element;

type IconProps$Q = {
    size?: number;
    color?: string;
};
declare const Check: (props: IconProps$Q) => react_jsx_runtime.JSX.Element;

type IconProps$P = {
    size?: number;
    color?: string;
};
declare const CalendarIcon$1: (props: IconProps$P) => react_jsx_runtime.JSX.Element;

type IconProps$O = {
    size?: number;
    color?: string;
};
declare const DocumentText: (props: IconProps$O) => react_jsx_runtime.JSX.Element;

type IconProps$N = {
    size?: number;
    color?: string;
};
declare const EditIcon: (props: IconProps$N) => react_jsx_runtime.JSX.Element;

type IconProps$M = {
    size?: number;
    color?: string;
};
declare const UserIcon: (props: IconProps$M) => react_jsx_runtime.JSX.Element;

declare const UserCircleIcon: () => react_jsx_runtime.JSX.Element;

type IconProps$L = {
    size?: number;
    color?: string;
};
declare const Globe: (props: IconProps$L) => react_jsx_runtime.JSX.Element;

type IconProps$K = {
    size?: number;
    color?: string;
};
declare const Identification: (props: IconProps$K) => react_jsx_runtime.JSX.Element;

type IconProps$J = {
    size?: number;
    color?: string;
};
declare const PhoneIcon: (props: IconProps$J) => react_jsx_runtime.JSX.Element;

type IconProps$I = {
    size?: number;
    color?: string;
};
declare const ShieldCheckIcon: (props: IconProps$I) => react_jsx_runtime.JSX.Element;

type IconProps$H = {
    size?: number;
    color?: string;
};
declare const SpeakerphoneIcon: (props: IconProps$H) => react_jsx_runtime.JSX.Element;

type IconProps$G = {
    size?: number;
    color?: string;
};
declare const TrashbinIcon: (props: IconProps$G) => react_jsx_runtime.JSX.Element;

type IconProps$F = {
    size?: number;
    color?: string;
};
declare const PhoneOutgoingIcon: (props: IconProps$F) => react_jsx_runtime.JSX.Element;

type IconProps$E = {
    size?: number;
    color?: string;
};
declare const Icon$3: (props: IconProps$E) => react_jsx_runtime.JSX.Element;

type IconProps$D = {
    size?: number;
    color?: string;
};
declare const Icon$2: (props: IconProps$D) => react_jsx_runtime.JSX.Element;

type IconProps$C = {
    width?: number;
    height?: number;
    color?: string;
};
declare const Icon$1: (props: IconProps$C) => react_jsx_runtime.JSX.Element;

type IconProps$B = {
    size?: number;
    color?: string;
};
declare const CalendarIcon: (props: IconProps$B) => react_jsx_runtime.JSX.Element;

type IconProps$A = {
    size?: number;
    color?: string;
};
declare const ChatIcon: (props: IconProps$A) => react_jsx_runtime.JSX.Element;

type IconProps$z = {
    size?: number;
    color?: string;
};
declare const DrugsIcon: (props: IconProps$z) => react_jsx_runtime.JSX.Element;

type IconProps$y = {
    size?: number;
    color?: string;
};
declare const MedicalCertificateIcon: (props: IconProps$y) => react_jsx_runtime.JSX.Element;

type IconProps$x = {
    size?: number;
    color?: string;
};
declare const PhotoIcon: (props: IconProps$x) => react_jsx_runtime.JSX.Element;

type IconProps$w = {
    size?: number;
    color?: string;
};
declare const TeleIcon: (props: IconProps$w) => react_jsx_runtime.JSX.Element;

type IconProps$v = {
    size?: number;
    color?: string;
};
declare const VideoIcon: (props: IconProps$v) => react_jsx_runtime.JSX.Element;

interface IconProps$u {
    size?: number;
}
declare const IdCardIcon: (props: IconProps$u) => react_jsx_runtime.JSX.Element;

interface IconProps$t {
    size?: number;
}
declare const PassportIcon: (props: IconProps$t) => react_jsx_runtime.JSX.Element;

interface IconProps$s {
    size?: number;
}
declare const KycStepIcon: (props: IconProps$s) => react_jsx_runtime.JSX.Element;

type IconProps$r = {
    width?: number;
    height?: number;
    color?: string;
};
declare const ChevronRightIcon: (props: IconProps$r) => react_jsx_runtime.JSX.Element;

type IconProps$q = {
    width?: number;
    height?: number;
    color?: string;
};
declare const ChevronUpIcon: (props: IconProps$q) => react_jsx_runtime.JSX.Element;

interface IconProps$p {
    size?: number;
    color?: string;
}
declare const ArrowLeftIcon: (props: IconProps$p) => react_jsx_runtime.JSX.Element;

declare const ArrowRightProviderBadge: () => react_jsx_runtime.JSX.Element;

interface IconProps$o {
    size?: number;
}
declare function KycPermissionIcon(props: IconProps$o): react_jsx_runtime.JSX.Element;

declare const CouponIcon: () => react_jsx_runtime.JSX.Element;

interface IconProps$n {
    size?: number;
    color?: string;
}
declare const CameraIcon: (props: IconProps$n) => react_jsx_runtime.JSX.Element;

interface IconProps$m {
    size?: number;
}
declare const IdCardVerified: (props: IconProps$m) => react_jsx_runtime.JSX.Element;

interface IconProps$l {
    size?: number;
}
declare const PassportVerified: (props: IconProps$l) => react_jsx_runtime.JSX.Element;

type IconProps$k = {
    width?: number;
    height?: number;
    color?: string;
};
declare const ProviderIcon: (props: IconProps$k) => react_jsx_runtime.JSX.Element;

interface IconProps$j {
    size?: number;
    color?: string;
}
declare const CameraOutlineIcon: (props: IconProps$j) => react_jsx_runtime.JSX.Element;

type IconProps$i = {
    width?: number;
    height?: number;
    color?: string;
};
declare const AddIcon: (props: IconProps$i) => react_jsx_runtime.JSX.Element;

type IconProps$h = {
    width?: number;
    height?: number;
    color?: string;
};
declare const AddCircleIcon: (props: IconProps$h) => react_jsx_runtime.JSX.Element;

type IconProps$g = {
    width?: number;
    height?: number;
    color?: string;
};
declare const LocationIcon: (props: IconProps$g) => react_jsx_runtime.JSX.Element;

interface IconProps$f {
    size?: number;
}
declare function UploadErrorIcon(props: IconProps$f): react_jsx_runtime.JSX.Element;

type IconProps$e = {
    size?: number;
};
declare const LineIcon: ({ size }: IconProps$e) => react_jsx_runtime.JSX.Element;

declare const AggressionToOthersIcon: () => react_jsx_runtime.JSX.Element;

declare const ChestPainIcon: () => react_jsx_runtime.JSX.Element;

declare const DyspneaIcon: () => react_jsx_runtime.JSX.Element;

type IconProps$d = {
    size?: number;
    color?: string;
};
declare const Icon: (props: IconProps$d) => react_jsx_runtime.JSX.Element;

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

interface IconProps$c {
    size?: number;
    color?: string;
}
declare const SuccessNotificationIcon: (props: IconProps$c) => react_jsx_runtime.JSX.Element;

declare const WarningNotificationIcon: () => react_jsx_runtime.JSX.Element;

declare const VisaIcon: ({ width, height }: {
    width?: number | undefined;
    height?: number | undefined;
}) => react_jsx_runtime.JSX.Element;

declare const JCBIcon: () => react_jsx_runtime.JSX.Element;

declare const MasterCardIcon: () => react_jsx_runtime.JSX.Element;

declare const ThaiQrIcon: ({ width, height }: {
    width?: number | undefined;
    height?: number | undefined;
}) => react_jsx_runtime.JSX.Element;

declare const ConsentTcTpReview: React$1.FC<React$1.SVGProps<SVGSVGElement>>;

declare const ConsentMedicalTreatmentIcon: React$1.FC<React$1.SVGProps<SVGSVGElement>>;

declare const PaymentErrorImg: () => react_jsx_runtime.JSX.Element;

declare const PaymentSuccessImg: () => react_jsx_runtime.JSX.Element;

declare const DoctorUnavailableImg: () => react_jsx_runtime.JSX.Element;

declare const PincodeLockImg: () => react_jsx_runtime.JSX.Element;

declare const GetAccessImg: () => react_jsx_runtime.JSX.Element;

declare const KycRejectImg: () => react_jsx_runtime.JSX.Element;

declare const KycExpireIcon: () => react_jsx_runtime.JSX.Element;

declare const KycBlurIcon: () => react_jsx_runtime.JSX.Element;

declare const KycInvalidIcon: () => react_jsx_runtime.JSX.Element;

interface IconProps$b {
    size?: number;
}
declare const DeleteAccountIcon: ({ size }: IconProps$b) => react_jsx_runtime.JSX.Element;

interface IconProps$a {
    size?: number;
}
declare const DeleteAccountSuccessIcon: ({ size }: IconProps$a) => react_jsx_runtime.JSX.Element;

interface IconProps$9 {
    size?: number;
}
declare const DeleteAccountEmailIcon: ({ size }: IconProps$9) => react_jsx_runtime.JSX.Element;

declare const UpdateInfoIntro: () => react_jsx_runtime.JSX.Element;

declare const UpdateInfoStep1: () => react_jsx_runtime.JSX.Element;

declare const UpdateInfoStep2: () => react_jsx_runtime.JSX.Element;

declare const UpdateInfoStep3: () => react_jsx_runtime.JSX.Element;

declare const UpdateInfoProfile: () => react_jsx_runtime.JSX.Element;

declare const UpdateInfoModal: () => react_jsx_runtime.JSX.Element;

declare const DoctorLogo: () => react_jsx_runtime.JSX.Element;

declare const AlliedHealthLogo: () => react_jsx_runtime.JSX.Element;

declare const PharmacistLogo: () => react_jsx_runtime.JSX.Element;

declare const TimeSquare: () => react_jsx_runtime.JSX.Element;

declare const DoctorAvailableImg: () => react_jsx_runtime.JSX.Element;

declare const WaitingRoomImg: () => react_jsx_runtime.JSX.Element;

interface IconProps$8 {
    size?: number;
    color?: string;
}
declare function TrashOutlineIcon(props: IconProps$8): react_jsx_runtime.JSX.Element;

interface IconProps$7 {
    size?: number;
    color?: string;
}
declare function PencilOutlineIcon(props: IconProps$7): react_jsx_runtime.JSX.Element;

declare function AddMapIcon(): react_jsx_runtime.JSX.Element;

declare function CurrentLocationIcon(): react_jsx_runtime.JSX.Element;

declare function MapPinCircleIcon(): react_jsx_runtime.JSX.Element;

interface IconProps$6 {
    size?: number;
    color?: string;
}
declare function MapPinIcon(props: IconProps$6): react_jsx_runtime.JSX.Element;

declare function MarkerIcon(): react_jsx_runtime.JSX.Element;

interface IconProps$5 {
    size?: number;
}
declare function AddressMenuIcon(props: IconProps$5): react_jsx_runtime.JSX.Element;

interface IconProps$4 {
    size?: number;
    color?: string;
}
declare function MapOutlineIcon(props: IconProps$4): react_jsx_runtime.JSX.Element;

interface IconProps$3 {
    size?: number;
    color?: string;
}
declare function OutOfServiceAreaIcon(props: IconProps$3): react_jsx_runtime.JSX.Element;

interface IconProps$2 {
    size?: number;
    color?: string;
}
declare function AddressDefaultIcon(props: IconProps$2): react_jsx_runtime.JSX.Element;

interface IconProps$1 {
    size?: number;
    color?: string;
}
declare function AddressPermissionIcon(props: IconProps$1): react_jsx_runtime.JSX.Element;

declare const BeDeeFullLogo: () => react_jsx_runtime.JSX.Element;

declare const SearchIcon: () => react_jsx_runtime.JSX.Element;

declare const EmptyIcon: () => react_jsx_runtime.JSX.Element;

interface IconProps {
    size?: number;
    color?: string;
}
declare function RefreshIcon(props: IconProps): react_jsx_runtime.JSX.Element;

declare const toPattern: (value: string, pattern: string) => string;
declare const clearPattern: (text?: string, ch?: string) => string;
declare const removeZeroPrefix: (phoneNumber: string) => string;
declare const randomString: (length: number) => string;
declare const formatPrice: (price: number) => string;
declare const formatFullPrice: (price: number, isThai?: boolean) => string;
declare const to2Digits: (val: number) => string;
declare const numberFormat: (number: number, decimal: number, isAutoDecimal?: boolean) => string;
declare const currencyFormat: (number: number, decimal: number, isSymbol?: boolean, isDefaultValue?: boolean) => string;

declare const format_clearPattern: typeof clearPattern;
declare const format_currencyFormat: typeof currencyFormat;
declare const format_formatFullPrice: typeof formatFullPrice;
declare const format_formatPrice: typeof formatPrice;
declare const format_numberFormat: typeof numberFormat;
declare const format_randomString: typeof randomString;
declare const format_removeZeroPrefix: typeof removeZeroPrefix;
declare const format_to2Digits: typeof to2Digits;
declare const format_toPattern: typeof toPattern;
declare namespace format {
  export { format_clearPattern as clearPattern, format_currencyFormat as currencyFormat, format_formatFullPrice as formatFullPrice, format_formatPrice as formatPrice, format_numberFormat as numberFormat, format_randomString as randomString, format_removeZeroPrefix as removeZeroPrefix, format_to2Digits as to2Digits, format_toPattern as toPattern };
}

declare const checkIsTokenExpired: (jwtToken: string, leadTime?: number) => boolean;
declare const getInfoFromToken: (jwtToken: string) => true | JwtPayload;

declare const validateOAuthToken_checkIsTokenExpired: typeof checkIsTokenExpired;
declare const validateOAuthToken_getInfoFromToken: typeof getInfoFromToken;
declare namespace validateOAuthToken {
  export { validateOAuthToken_checkIsTokenExpired as checkIsTokenExpired, validateOAuthToken_getInfoFromToken as getInfoFromToken };
}

interface CookieOption {
    days?: number;
    secure?: boolean;
    path?: string;
    domain?: string;
    sameSite?: 'None' | 'Lax' | 'Strict';
    httpOnly?: boolean;
}
declare const setCookie: (name: string, value: string | null, options?: CookieOption) => void;
declare const getCookie: (name: string) => string | null;
declare const removeCookie: (name: string, options?: {
    path?: string;
    domain?: string;
}) => void;

type cookie_CookieOption = CookieOption;
declare const cookie_getCookie: typeof getCookie;
declare const cookie_removeCookie: typeof removeCookie;
declare const cookie_setCookie: typeof setCookie;
declare namespace cookie {
  export { type cookie_CookieOption as CookieOption, cookie_getCookie as getCookie, cookie_removeCookie as removeCookie, cookie_setCookie as setCookie };
}

declare const checkNonProd: (url: string) => {
    isNonProd: boolean;
    isLocalhost: boolean;
    isDevOnly: boolean;
};
declare const gotoLoginPhoneNumberPage: (url: string) => void;
declare const gotoWelcomePage: (url: string) => void;
declare const gotoLoginPinPage: (url: string) => void;
declare const gotoCreatePinPage: (url: string) => void;
declare const gotoCustomPage: (path: string) => void;

declare const redirect_checkNonProd: typeof checkNonProd;
declare const redirect_gotoCreatePinPage: typeof gotoCreatePinPage;
declare const redirect_gotoCustomPage: typeof gotoCustomPage;
declare const redirect_gotoLoginPhoneNumberPage: typeof gotoLoginPhoneNumberPage;
declare const redirect_gotoLoginPinPage: typeof gotoLoginPinPage;
declare const redirect_gotoWelcomePage: typeof gotoWelcomePage;
declare namespace redirect {
  export { redirect_checkNonProd as checkNonProd, redirect_gotoCreatePinPage as gotoCreatePinPage, redirect_gotoCustomPage as gotoCustomPage, redirect_gotoLoginPhoneNumberPage as gotoLoginPhoneNumberPage, redirect_gotoLoginPinPage as gotoLoginPinPage, redirect_gotoWelcomePage as gotoWelcomePage };
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

declare const isJsonString: (str: string) => boolean;
declare const setItem: (name: string, value: any) => void;
declare const getItem: (name: string) => any;
declare const removeItem: (name: string) => void;

declare const localStorage_getItem: typeof getItem;
declare const localStorage_isJsonString: typeof isJsonString;
declare const localStorage_removeItem: typeof removeItem;
declare const localStorage_setItem: typeof setItem;
declare namespace localStorage {
  export { localStorage_getItem as getItem, localStorage_isJsonString as isJsonString, localStorage_removeItem as removeItem, localStorage_setItem as setItem };
}

interface WithAuthOptions {
    unauthenRedirectUrl: string;
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
    withAuth: (WrappedComponent: React$1.FC, options?: WithAuthOptions) => (props: any) => react_jsx_runtime.JSX.Element | null;
};

interface IWithConsentOptions {
    onFetchConsent?: () => Promise<any>;
    consentUrl?: string;
    redirectUrl?: string;
}

interface ConsentData {
    time: string;
    version: number;
    medicalTreatmentConsent: boolean;
    insuranceConsent: boolean;
    medicalTreatmentDataSharingConsent: boolean;
    marketingDataSharingConsent: boolean;
}
interface ConsentContextType {
    consentData: ConsentData | null;
    setConsentData: (consentData: ConsentData) => void;
    isRequiredFetchConsent: boolean;
}
interface ConsentProviderProps {
    children: React__default.ReactNode;
}

declare const Consent: {
    ConsentProvider: React$1.FC<ConsentProviderProps>;
    useConsent: () => ConsentContextType;
    withConsent: (Component: React.ComponentType, options?: IWithConsentOptions) => (props: any) => react_jsx_runtime.JSX.Element | null;
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
interface EPaymentOption {
    title: string;
    value: EPaymentMethod;
    image?: React__default.ReactNode;
}
interface PaymentMethodProps {
    onSelected?: (paymentType: EPaymentMethod) => void;
    paymentsOption: EPaymentOption[];
    currentPaymentType?: EPaymentMethod;
    title?: string;
    hideTitle?: boolean;
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

declare enum ToastType {
    Success = "SUCCESS",
    Error = "ERROR",
    Info = "INFO",
    Warning = "WARNING",
    Notice = "NOTICE"
}
declare enum ToastStyle {
    Plain = "PLAIN",
    Fill = "FILL"
}
declare enum ToastAlignmentEnum {
    Top = "top",
    Center = "center",
    Bottom = "bottom"
}
declare enum ToastCloseReason {
    ClickAway = "clickaway"
}
declare enum ToastPositionEnum {
    TopLeft = "top-left",
    TopCenter = "top-center",
    TopRight = "top-right",
    BottomLeft = "bottom-left",
    BottomCenter = "bottom-center",
    BottomRight = "bottom-right"
}
type ToastAlignment = `${ToastAlignmentEnum}`;
type ToastPosition = `${ToastPositionEnum}`;

interface ToastProviderProps {
    children: ReactNode;
    position?: ToastPosition;
    duration?: number;
    showCloseButton?: boolean;
    showBackdrop?: boolean;
    alignment?: ToastAlignment;
}
declare const ToastProvider: ({ children, position, duration, showCloseButton, showBackdrop, alignment, }: ToastProviderProps) => react_jsx_runtime.JSX.Element;

declare const useToast: ({ position: defaultPosition, duration: defaultDuration, showCloseButton: defaultShowCloseButton, showBackdrop: defaultShowBackdrop, alignment: defaultAlignment, }?: {
    position?: ToastPosition;
    duration?: number;
    showCloseButton?: boolean;
    showBackdrop?: boolean;
    alignment?: ToastAlignment;
}) => {
    success: (message: string, options?: {
        position?: ToastPosition;
        duration?: number;
        showCloseButton?: boolean;
        showBackdrop?: boolean;
        alignment?: ToastAlignment;
    }) => void;
    error: (message: string, options?: {
        position?: ToastPosition;
        duration?: number;
        showCloseButton?: boolean;
        showBackdrop?: boolean;
        alignment?: ToastAlignment;
    }) => void;
    info: (message: string, options?: {
        position?: ToastPosition;
        duration?: number;
        showCloseButton?: boolean;
        showBackdrop?: boolean;
        alignment?: ToastAlignment;
    }) => void;
    warn: (message: string, options?: {
        position?: ToastPosition;
        duration?: number;
        showCloseButton?: boolean;
        showBackdrop?: boolean;
        alignment?: ToastAlignment;
    }) => void;
};

interface IToast {
    text: string | JSX.Element;
    open: boolean;
    type?: ToastType;
    style?: ToastStyle;
    showCloseButton?: boolean;
    showBackdrop?: boolean;
    elevation?: number;
    duration?: number;
    position?: ToastPosition;
    alignment?: ToastAlignment;
    sx?: SxProps<Theme>;
    onClose?: () => void;
}
declare const Toast: ({ text, open, type, style, alignment, showCloseButton, showBackdrop, elevation, duration, position, onClose, sx, }: IToast) => react_jsx_runtime.JSX.Element;

interface KycContextType {
    isKyc: boolean | undefined | null;
    setKycStatus: (status: boolean | undefined | null) => void;
    checkAndRedirectForKyc: (kycUrl: string, redirectUrl: string) => void;
    handleCheckKyc: (onCheckKyc?: () => Promise<any>, kycUrl?: string, redirectUrl?: string) => void;
}

interface IWithKycOptions {
    kycUrl?: string;
    redirectUrl?: string;
    onCheckKyc?: () => Promise<any>;
}

declare const Kyc: {
    KycProvider: React$1.FC<{
        children: React$1.ReactNode;
    }>;
    useKyc: ({ kycUrl, redirectUrl, onCheckKyc, }?: IWithKycOptions) => KycContextType;
    withKyc: (Component: React.ComponentType, options?: IWithKycOptions) => (props: any) => react_jsx_runtime.JSX.Element | null;
};

interface IWithUpdateProfileOptions {
    onFetchProfile?: () => Promise<any>;
    updateInfoUrl?: string;
    redirectUrl?: string;
}

interface ProfileData {
    idCard?: string;
    passportNo?: string;
}
interface UpdateInfoContextType {
    profileData: ProfileData | null;
    setProfileData: (profileData: ProfileData) => void;
}

declare const UpdateInfo: {
    UpdateInfoProvider: React$1.FC<{
        children: React$1.ReactNode;
    }>;
    useUpdateInfo: () => UpdateInfoContextType;
    withUpdateInfo: (Component: React.ComponentType, options?: IWithUpdateProfileOptions) => (props: any) => react_jsx_runtime.JSX.Element | null;
};

export { AccessCodeProvider, AddCircleIcon, AddIcon, AddMapIcon, AddressDefaultIcon, AddressPermissionIcon, AggressionToOthersIcon, Alert, AlertStyle, AlertType, AlliedHealthLogo, ArrowLeftIcon, ArrowRightProviderBadge as ArrowRightProviderBadgeIcon, AttentionNotificationIcon, Authentication, Icon$1 as BGProviderIcon, Badge, type BadgeProps, Badges, BadgesBold, BaseText, BottomSheet as BdBottomSheet, Button as BdButton, OutlinedBtn as BdOutlinedButton, PrimaryBtn as BdPrimaryButton, RemoveBtn as BdRemoveButton, SecondaryBtn as BdSecondaryButton, BeDeeFullLogo, CalendarIcon$1 as CalendarIcon, CameraFrame, CameraFrameOverlay, CameraIcon, CameraOutlineIcon, CameraViewPort, ChatIcon, Check as CheckIcon, ChestPainIcon, ChevronRightIcon, ChevronUpIcon, Circle as CircleIcon, CloseIcon, CloseNotificationIcon, Colors, ConfirmModal, Consent, ConsentMedicalTreatmentIcon, ConsentTcTpReview, Icon$3 as ConsultIcon, ConsultationIcon, cookie as Cookie, CornerMark, CouponIcon, CurrentLocationIcon, CustomConfirmModal, DOBPicker as DOBPickerInput, CalendarIcon as DateIcon, Del as DelIcon, DeleteAccountEmailIcon, DeleteAccountIcon, DeleteAccountSuccessIcon, DialogModal, DoctorAvailableImg, DoctorEducationIcon, DoctorFeeIcon, DoctorHospitalIcon, DoctorLanguageIcon, DoctorLogo, DoctorSpecializeIcon, DoctorUnavailableImg, DocumentText as DocumentTextIcon, DocumentUploader, DropdownInput, DrugsIcon, DyspneaIcon, EditIcon, EmptyIcon, ErrorNotificationIcon, type FileWithUploadStatus, format as Format, FullModal, GetAccessImg, Globe, H1, H2, H3, H4, H5, H6, Header1, type HeadingProps, IdCardFrame, IdCardIcon, IdCardVerified, Identification, InfoNotificationIcon, Icon as InformationIcon, InternationalPhone, JCBIcon, Kyc, KycBlurIcon, KycCamera, KycExpireIcon, KycInvalidIcon, KycPermissionIcon, KycRejectImg, KycStepIcon, Language, LanguageSwitch, Lead1, Lead2, LineIcon, LoadingWidget, localStorage as LocalStorage, LocationIcon, Logo as LogoIcon, manageAuth as ManageAuth, MapOutlineIcon, MapPinCircleIcon, MapPinIcon, MarkerIcon, MasterCardIcon, MedicalCertificateIcon, AddressMenuIcon as MenuIcon, Mini, MobileInput, OtpForm, OtpInput, OutOfServiceAreaIcon, P1, P2, PageHeader, PalpitationIcon, type ParagraphProps, PassportFrame, PassportIcon, PassportVerified, PaymentErrorImg, Icon$2 as PaymentIcon, PaymentMethod, PaymentSuccessImg, PencilOutlineIcon, PharmacistLogo, PhoneIcon, PhoneNoForm as PhoneNumberForm, PhoneOutgoingIcon, PhotoIcon, PinForm, PinKeyBoard as PinKeyboard, PincodeLockImg, ProfileHeader, ProviderAvatar, type ProviderAvatarProps, ProviderBadge, type ProviderBadgeProps, ProviderIcon, ProviderSection, RadioButton, redirect as Redirect, RefreshIcon, Remove as RemoveIcon, SearchIcon, SearchInput, SelectionGroupInput as SelectGroupInput, SelectionCard, SelfIcon, SevereAbdominalPainIcon, SevereHeadache as SevereHeadacheIcon, ShieldCheckIcon, type SmallProps, SpeakerphoneIcon, StepList, StepListItem, type StylizeProps, SuccessNotificationIcon, SuccessWidget, SwipeableBottomSheet, SwipeableBottomSheetV2, TabComponent as Tab, TakePhotoIcon, TeleIcon, TextArea, TextInput, ThaiQrIcon, TimeSquare, Tiny, Toast, type ToastAlignment, ToastAlignmentEnum, ToastCloseReason, type ToastPosition, ToastPositionEnum, ToastProvider, ToastStyle, ToastType, TrashOutlineIcon, TrashbinIcon, UpdateInfo, UpdateInfoIntro, UpdateInfoModal, UpdateInfoProfile, UpdateInfoStep1, UpdateInfoStep2, UpdateInfoStep3, UploadErrorIcon, UserCircleIcon, UserIcon, validateOAuthToken as ValidateOAuthToken, VideoIcon, VisaIcon, WaitingRoomImg, WarningIcon, WarningNotificationIcon, WeaknessIcon, useCameraViewport, useFileUploader, useToast, useViewportHeight };
