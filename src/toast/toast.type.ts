export enum ToastType {
  Success = 'SUCCESS',
  Error = 'ERROR',
  Info = 'INFO',
  Warning = 'WARNING',
  Notice = 'NOTICE'
}

export enum ToastStyle {
  Plain = 'PLAIN',
  Fill = 'FILL'
}

export enum ToastAlignmentEnum {
  Top = 'top',
  Center = 'center',
  Bottom = 'bottom'
}

export enum ToastCloseReason {
  ClickAway = 'clickaway',
}

export enum ToastPositionEnum {
  TopLeft = 'top-left',
  TopCenter = 'top-center',
  TopRight = 'top-right',
  BottomLeft = 'bottom-left',
  BottomCenter = 'bottom-center',
  BottomRight = 'bottom-right',
}


export type ToastAlignment = `${ToastAlignmentEnum}`;
export type ToastPosition = `${ToastPositionEnum}`;