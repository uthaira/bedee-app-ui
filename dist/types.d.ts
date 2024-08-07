import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonProps as ButtonProps$1, SlideProps } from '@mui/material';
import React from 'react';

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

export { Badges, BadgesBold, BottomSheet as BdBottomSheet, Button as BdButton, OutlinedBtn as BdOutlinedButton, PrimaryBtn as BdPrimaryButton, RemoveBtn as BdRemoveButton, SecondaryBtn as BdSecondaryButton, Colors, H1, H2, H3, H4, H5, H6, type HeadingProps, Lead1, Lead2, Mini, P1, P2, type ParagraphProps, type SmallProps, type StylizeProps, Tiny };
