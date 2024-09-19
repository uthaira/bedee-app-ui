export const isJsonString = (str: string) => {
  try {
    JSON.parse(str);
    return true;
  } catch (error: any) {
    return false;
  }
};

export const setItem = (name: string, value: any) => {
  if (typeof window === 'undefined') return;
  if (value === null) {
    window.localStorage.removeItem(name);
  } else {
    let stringValue = value;

    if (typeof value !== 'string' || !isJsonString(value)) {
      stringValue = JSON.stringify(value);
    }

    window.localStorage.setItem(name, stringValue);
  }
};

export const getItem = (name: string) => {
  if (typeof window === 'undefined') return null;
  const value = window.localStorage.getItem(name);

  try {
    return value ? JSON.parse(value) : null;
  } catch (error: any) {
    return value;
  }
};

export const removeItem = (name: string) => {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(name);
};
