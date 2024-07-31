import React from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material';
export interface ButtonProps extends MuiButtonProps {
    bdType?: 'primary' | 'secondary' | 'outlined' | 'remove';
    bdSize?: string;
    icon?: JSX.Element;
    text?: string;
    loading?: boolean;
    width?: string;
    isRightIcon?: boolean;
    counter?: number;
}
declare const Button: (props: ButtonProps) => React.JSX.Element;
export default Button;
