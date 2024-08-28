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

export const formatPriceWithCommas = (price: number, currentcy: string = '฿'): string => {
  return `${currentcy} ${price.toLocaleString('en-US')}`
};
