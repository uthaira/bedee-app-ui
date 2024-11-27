export const toPattern = (value: string, pattern: string): string => {
  if (!value) return '';

  let valueIndex = 0;
  const list = String(pattern).split('');
  const newList = [];

  for (let i = 0; i < pattern.length && valueIndex < value.length; i++) {
    if (list[i] === 'x') {
      newList.push(value[valueIndex++]);
    } else {
      newList.push(list[i]);
    }
  }

  return newList.join('');
};

export const clearPattern = (text: string = '', ch: string = '-'): string => {
  const value = (text || '').replaceAll(ch, '');
  return value;
};

export const removeZeroPrefix = (phoneNumber: string) => {
  return phoneNumber.replace(/^0+/, '');
};

export const randomString = (length: number) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// export const formatPriceWithCommas = (price: number, currentcy: string = '฿' , isThai : boolean = false): string => {
//   if(isThai){
//     return `${price.toLocaleString('en-US')} ${currentcy}`
//   }
  
// };

export const formatPrice = (price: number) => {
  return `฿ ${price.toLocaleString('en-US')}`
}

export const formatFullPrice = (price: number, isThai: boolean = false) => {
  const formattedPrice = price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits:2
  });

  if (isThai) {
    return `${formattedPrice} บาท`;
  }
  return `${formattedPrice} THB`;
};

export const to2Digits = (val: number) => {
  return `${val}`.padStart(2, '0');
};

export const numberFormat = (
  number: number,
  decimal: number,
  isAutoDecimal?: boolean
) => {
  const isDecimal = number % 1 !== 0
  const decimalConvert = isDecimal ? decimal : 0
  return isAutoDecimal
    ? number.toFixed(decimalConvert).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    : number.toFixed(decimal).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const currencyFormat = (
  number: number,
  decimal: number,
  isSymbol: boolean = true,
  isDefaultValue?: boolean
) => {
  const symbol = isSymbol ? '฿' : ''
  const defaultValue = isDefaultValue ? symbol.concat('0') : ''
  return number && number > 0 ? `${symbol}${numberFormat(number, decimal)}` : defaultValue
}
