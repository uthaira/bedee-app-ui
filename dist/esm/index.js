import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Box, Stack, Typography, Button as Button$1, Slide, IconButton, InputBase, Menu, MenuItem, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import React__default, { useRef, useEffect, useState, useMemo } from 'react';
import styled$1 from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var neutral = {
    black: '#000000',
    white: '#FFFFFF'
};

var grayscale = {
    gray0: "#C7C9D9",
    gray1: "#F3F6F9",
    gray2: "#EAEEF6",
    gray3: "#C3CAD4",
    gray4: "#939CA9",
    gray5: "#747B84",
    gray6: "#4A5568",
    gray7: "#323A43",
};

var primary = {
    primary001: "#1E6AF6",
    primary002: "#4B88F8",
    primary003: "#78A6FA",
    primary004: "#A5C3FB",
    primary005: "#E8F0FE",
    primary006: "#F4F8FF",
};

var secondary = {
    secondary001: "#07236D",
    secondary002: "#264189",
    secondary003: "#455FA5",
    secondary004: "#849CDD",
    secondary005: "#A3BAF9",
};

var trinary = {
    trinary001: "#EE6E3A",
    trinary002: "#F18B61",
    trinary003: "#F5A889",
    trinary004: "#F8C5B0",
    trinary005: "#FAD3C4",
};

var functional = {
    success: "#13C186",
    warning: "#EFB110",
    error: "#EA5540",
    completed: "#1E6AF6",
    pending: "#F9A01B",
};

var brand = {
    brandBlack: '#3A4248',
    darkBlue: '#07236D',
    royalBlue: '#1E6AF6',
    cherry: '#EE6E3A',
    offWhite: '#F7F8F9',
};

var Colors = __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, neutral), grayscale), primary), secondary), trinary), functional), brand);

var Button = function (props) {
    var bdType = props.bdType, icon = props.icon, text = props.text, loading = props.loading, bdSize = props.bdSize, _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.isRightIcon, isRightIcon = _b === void 0 ? false : _b, counter = props.counter, rest = __rest(props, ["bdType", "icon", "text", "loading", "bdSize", "width", "isRightIcon", "counter"]);
    var getTheme = function () {
        switch (bdType) {
            case 'secondary':
                return {
                    color: Colors.primary001,
                    borderColor: Colors.primary001,
                    backgroundColor: Colors.white,
                };
            case 'outlined':
                return {
                    color: Colors.primary001,
                    borderColor: Colors.white,
                    backgroundColor: Colors.white,
                };
            case 'remove':
                return {
                    color: Colors.error,
                    borderColor: Colors.error,
                    backgroundColor: Colors.white,
                };
            default:
                return {
                    color: Colors.white,
                    borderColor: Colors.primary001,
                    backgroundColor: Colors.primary001,
                };
        }
    };
    var getSize = function () {
        switch (bdSize) {
            case 'lg':
                return {
                    borderRadius: '32px',
                    fontSize: '16px',
                    height: '52px',
                    icon: 12,
                    loading: '18px',
                };
            case 'md':
                return {
                    borderRadius: '32px',
                    fontSize: '16px',
                    height: '48px',
                    icon: 12,
                    loading: '16px',
                };
            case 'sm':
                return {
                    borderRadius: '32px',
                    fontSize: '14px',
                    height: '40px',
                    icon: 12,
                    loading: '14px',
                };
            case 'xs':
                return {
                    borderRadius: '32px',
                    fontSize: '12px',
                    height: '30px',
                    icon: 12,
                    loading: '12px',
                };
            case 'xxs':
                return {
                    borderRadius: '32px',
                    fontSize: '12px',
                    height: '24px',
                    icon: 12,
                    loading: '12px',
                };
            default:
                return {
                    borderRadius: '32px',
                    fontSize: '12px',
                    height: '30px',
                    icon: 12,
                    loading: '12px',
                };
        }
    };
    var c = getTheme();
    var s = getSize();
    var iconStyle = {
        width: s.loading,
        height: s.loading,
        border: "2px solid ".concat(c.color),
        borderBottomColor: c.backgroundColor,
    };
    var iconImg = loading ? jsx(Loading, { style: iconStyle }) : icon;
    var displayCounter = counter && (jsx(Stack, { justifyContent: "center", alignItems: "center", borderRadius: "50%", bgcolor: c.color, width: 18, height: 18, children: jsx(Typography, { fontSize: s.fontSize, color: c.backgroundColor, children: counter }) }));
    return (jsx(Button$1, __assign({ sx: {
            borderRadius: s.borderRadius,
            fontSize: s.fontSize,
            paddingY: '8px',
            borderColor: c.borderColor,
            backgroundColor: c.backgroundColor,
            width: width,
            height: s.height,
            '&.MuiButton-outlined': {
                color: c.color,
                backgroundColor: c.backgroundColor,
            },
            '&:hover': {
                borderColor: c.borderColor,
            },
            '&.Mui-disabled': {
                color: c.color,
                backgroundColor: c.backgroundColor,
                opacity: 0.6,
            },
        }, variant: "outlined" }, rest, { children: jsxs(TextStyled, { children: [!isRightIcon && iconImg, jsx(Box, { style: { color: c.color, fontSize: s.fontSize }, children: text }), isRightIcon && iconImg, displayCounter] }) })));
};
var TextStyled = styled(Box)(function () { return ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '70px',
    columnGap: '8px',
    lineHeight: '16px',
    textTransform: 'none',
}); });
var Loading = styled(Box)(function () { return ({
    borderRadius: '50%',
    display: 'inline-block',
    boxSizing: 'border-box',
    animation: 'rotation 1s linear infinite',
    '@keyframes rotation': {
        '0%': {
            transform: 'rotate(0deg)',
        },
        '100%': {
            transform: 'rotate(360deg)',
        },
    },
}); });

var PrimaryBtn = function (props) {
    return jsx(Button, __assign({}, props));
};

var SecondaryBtn = function (props) {
    return (jsx(Button, __assign({}, props, { bdType: "secondary" })));
};

var OutlinedBtn = function (props) {
    return (jsx(Button, __assign({}, props, { bdType: "outlined" })));
};

var Remove = function () {
    return (jsx("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5L1.5 13.5Z", stroke: "#EA5540", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) }));
};

var RemoveBtn = function (props) {
    return (jsx(Button, __assign({}, props, { icon: jsx(Remove, {}), bdType: "remove" })));
};

var BaseText = function (props) {
    var text = props.text, bdType = props.bdType, _a = props.color, color = _a === void 0 ? Colors.black : _a, rest = __rest(props, ["text", "bdType", "color"]);
    var getTheme = function () {
        var map = {
            h1: {
                fontSize: 61,
                fontWeight: 600,
            },
            h2: {
                fontSize: 49,
                fontWeight: 600,
            },
            h3: {
                fontSize: 39,
                fontWeight: 600,
            },
            h4: {
                fontSize: 31,
                fontWeight: 600,
            },
            h5: {
                fontSize: 25,
                fontWeight: 600,
            },
            h6: {
                fontSize: 20,
                fontWeight: 600,
            },
            p1: {
                fontSize: 16,
                fontWeight: 400,
            },
            p2: {
                fontSize: 14,
                fontWeight: 400,
            },
            lead1: {
                fontSize: 16,
                fontWeight: 600,
            },
            lead2: {
                fontSize: 14,
                fontWeight: 600,
            },
            mini: {
                fontSize: 12,
                fontWeight: 400,
            },
            tiny: {
                fontSize: 10,
                fontWeight: 600,
            },
            badges: {
                fontSize: 12,
                fontWeight: 500,
            },
            badgesBold: {
                fontSize: 12,
                fontWeight: 600,
            },
        };
        return bdType ? map[bdType] : { fontSize: 16, fontWeight: 400 };
    };
    var getVariant = function () {
        var variantStr = bdType === null || bdType === void 0 ? void 0 : bdType.toString();
        if (variantStr === null || variantStr === void 0 ? void 0 : variantStr.includes('h'))
            return variantStr;
        return 'body1';
    };
    var t = getTheme();
    var v = getVariant();
    return (jsx(Typography, __assign({}, rest, t, { color: color, variant: v, children: text })));
};

var H1 = function (props) { return jsx(BaseText, __assign({}, props, { bdType: "h1" })); };
var H2 = function (props) { return jsx(BaseText, __assign({}, props, { bdType: "h2" })); };
var H3 = function (props) { return jsx(BaseText, __assign({}, props, { bdType: "h3" })); };
var H4 = function (props) { return jsx(BaseText, __assign({}, props, { bdType: "h4" })); };
var H5 = function (props) { return jsx(BaseText, __assign({}, props, { bdType: "h5" })); };
var H6 = function (props) { return jsx(BaseText, __assign({}, props, { bdType: "h6" })); };

var P1 = function (props) { return jsx(BaseText, __assign({}, props, { bdType: "p1" })); };
var P2 = function (props) { return jsx(BaseText, __assign({}, props, { bdType: "p2" })); };
var Lead1 = function (props) { return jsx(BaseText, __assign({}, props, { bdType: "lead1" })); };
var Lead2 = function (props) { return jsx(BaseText, __assign({}, props, { bdType: "lead2" })); };

var Mini = function (props) { return jsx(BaseText, __assign({}, props, { bdType: "mini" })); };
var Tiny = function (props) { return jsx(BaseText, __assign({}, props, { bdType: "tiny" })); };

var Badges = function (props) { return jsx(BaseText, __assign({}, props, { bdType: "badges" })); };
var BadgesBold = function (props) { return jsx(BaseText, __assign({}, props, { bdType: "badgesBold" })); };

function CloseIcon(props) {
    return (jsx("svg", { className: props.className, width: props.width || '13', height: props.height || '13', viewBox: "0 0 13 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M1.77539 1.0752L11.9263 11.2261M1.77539 11.2261L11.9263 1.0752L1.77539 11.2261Z", stroke: props.color || '#3A4248', strokeWidth: "1.69181", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}

var BottomSheet = function (props) {
    var _a = props.height, height = _a === void 0 ? '50%' : _a, open = props.open, onClose = props.onClose, isCloseIcon = props.isCloseIcon, children = props.children;
    var bottomSheetRef = useRef(null);
    // Close the bottom sheet when clicking outside
    useEffect(function () {
        var handleClickOutside = function (event) {
            if (bottomSheetRef.current && !bottomSheetRef.current.contains(event.target)) {
                onClose();
            }
        };
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open, onClose]);
    return (jsxs(Fragment, { children: [open && (jsx(Box, { sx: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    zIndex: function (theme) { return theme.zIndex.modal - 1; },
                }, onClick: onClose })), jsx(Slide, __assign({ direction: "up", in: open, mountOnEnter: true, unmountOnExit: true }, props, { children: jsxs(Box, { ref: bottomSheetRef, sx: {
                        borderRadius: '32px 32px 0px 0px',
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: height,
                        backgroundColor: 'background.paper',
                        boxShadow: 24,
                        p: 2,
                        overflowY: 'auto',
                        zIndex: function (theme) { return theme.zIndex.modal; },
                    }, children: [isCloseIcon && (jsx(Box, { sx: {
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                pb: 1,
                            }, children: jsx(IconButton, { onClick: onClose, children: jsx(CloseIcon, {}) }) })), jsx(Box, { sx: { mt: 2 }, children: children })] }) }))] }));
};

var toPattern = function (value, pattern) {
    if (!value)
        return '';
    var valueIndex = 0;
    var list = String(pattern).split('');
    var newList = [];
    for (var i = 0; i < pattern.length && valueIndex < value.length; i++) {
        if (list[i] === 'x') {
            newList.push(value[valueIndex++]);
        }
        else {
            newList.push(list[i]);
        }
    }
    return newList.join('');
};
var clearPattern = function (text, ch) {
    if (text === void 0) { text = ''; }
    if (ch === void 0) { ch = '-'; }
    var value = (text || '').replaceAll(ch, '');
    return value;
};
var removeZeroPrefix = function (phoneNumber) {
    return phoneNumber.replace(/^0+/, '');
};
var randomString = function (length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

var format = /*#__PURE__*/Object.freeze({
    __proto__: null,
    clearPattern: clearPattern,
    randomString: randomString,
    removeZeroPrefix: removeZeroPrefix,
    toPattern: toPattern
});

var MobileInput = function (_a) {
    var name = _a.name, label = _a.label, _b = _a.value, value = _b === void 0 ? '' : _b, tag = _a.tag, _c = _a.disabled, disabled = _c === void 0 ? false : _c, pattern = _a.pattern, charPattern = _a.charPattern, isNumber = _a.isNumber, _d = _a.limit, limit = _d === void 0 ? 900000 : _d, _e = _a.onChange, onChange = _e === void 0 ? function () { } : _e, invalid = _a.invalid, _f = _a.type, type = _f === void 0 ? 'text' : _f, containerStyled = _a.containerStyled, inputStyled = _a.inputStyled, rightComponent = _a.rightComponent;
    var _g = useState(false), isActive = _g[0], setActive = _g[1];
    var onActive = function () { return setActive(true); };
    var onInactive = function () { return setActive(false); };
    var onValue = function (evt) {
        if (onChange) {
            var val = evt.target.value;
            if (pattern) {
                val = clearPattern(val, charPattern);
            }
            if (isNumber && val !== '') {
                var tmp = +val;
                val = tmp === 0 || tmp ? val : value;
            }
            if (val.length <= limit) {
                onChange(val, name, tag);
            }
        }
    };
    var text = pattern ? toPattern(value, pattern) : value + '';
    var invalidCss = invalid ? ' invalid' : '';
    var activeCss = isActive ? ' active' : '';
    var disableCss = disabled ? ' disabled' : '';
    return (jsxs(Content$1, { className: "".concat(invalidCss).concat(activeCss).concat(disableCss), style: containerStyled, children: [rightComponent, jsx(InputBase, { sx: { ml: 1, flex: 1 }, id: name, className: "".concat(invalidCss).concat(activeCss).concat(disableCss), placeholder: label, type: type, autoComplete: 'off', required: true, disabled: disabled, value: text, onChange: onValue, onFocus: onActive, onBlur: onInactive, style: inputStyled }), jsxs(Invalid, { children: [invalid || '', " "] })] }));
};
var Content$1 = styled$1('div')({
    width: '100%',
    height: '56px',
    backgroundColor: '#f7f8f9',
    borderRadius: '8px',
    padding: '0px 10px',
    border: "1px solid ".concat(Colors.gray2),
    display: 'flex',
    '&.active': {
        border: "1px solid ".concat(Colors.primary001),
    },
    '&.disabled': {
        backgroundColor: "".concat(Colors.gray3),
    },
    '&.invalid': {
        border: "1px solid ".concat(Colors.error),
    },
});
var Invalid = styled$1('div')(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  color: #f95247;\n  margin-top: 4px;\n  font-size: 13px;\n  font-weight: 500;\n  text-align: left;\n  display: none;\n\n  &.invalid {\n    display: block;\n  }\n"], ["\n  color: #f95247;\n  margin-top: 4px;\n  font-size: 13px;\n  font-weight: 500;\n  text-align: left;\n  display: none;\n\n  &.invalid {\n    display: block;\n  }\n"])));
var templateObject_1$4;

var DEFAULT_COUNTRY_PHONE = {
    id: '91a3acd7-d985-494f-b589-be4d1a1208ed',
    countryName: 'Thailand',
    countryCode: 'TH',
    phoneCode: '+66',
    region: null,
    flag: 'U+1F1F9 U+1F1ED',
    active: true,
    createdAt: '2024-05-17T04:30:01.155Z',
    updatedAt: '2024-05-21T02:44:02.660Z',
};

var SCROLL_POSITION_TO_SEE_DEFAULT_COUNTRY = 59;
var InternationalPhone = function (_a) {
    var onChange = _a.onChange, _b = _a.defaultCountry, defaultCountry = _b === void 0 ? DEFAULT_COUNTRY_PHONE : _b, _c = _a.countryList, countryList = _c === void 0 ? [] : _c;
    var _d = useState(defaultCountry), selectedCountry = _d[0], setSelectedCountry = _d[1];
    var _e = React__default.useState(null), anchorEl = _e[0], setAnchorEl = _e[1];
    var isOpen = Boolean(anchorEl);
    var countryListRef = useRef(null);
    var getFlag = function (flagCode) {
        var unicodeArray = flagCode
            .split(' ')
            .map(function (code) { return code.replace('U+', ''); });
        var charString = unicodeArray
            .map(function (code) { return String.fromCodePoint(parseInt(code, 16)); })
            .join('');
        return charString;
    };
    var defaultCountryIndex = useMemo(function () {
        if (countryList === null || countryList === void 0 ? void 0 : countryList.length) {
            return countryList.findIndex(function (country) {
                return country.countryName === DEFAULT_COUNTRY_PHONE.countryName;
            });
        }
        return 0;
    }, [countryList]);
    var handleItemClick = function (country) {
        setSelectedCountry(country);
        onChange === null || onChange === void 0 ? void 0 : onChange(country);
        setAnchorEl(null);
    };
    useEffect(function () {
        if (isOpen && countryListRef.current) {
            countryListRef.current.scrollTop =
                SCROLL_POSITION_TO_SEE_DEFAULT_COUNTRY * defaultCountryIndex;
        }
    }, [isOpen, defaultCountryIndex]);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    return (jsxs(Box, { display: 'flex', alignItems: 'center', children: [jsxs("div", { children: [jsx(Button$1, { "aria-controls": isOpen ? 'demo-customized-menu' : undefined, "aria-haspopup": 'true', "aria-expanded": isOpen ? 'true' : undefined, variant: 'text', disableElevation: true, onClick: handleClick, endIcon: jsx(KeyboardArrowDownIcon, { sx: { color: Colors.black } }), children: jsx(Box, { display: 'flex', gap: 1, paddingLeft: '4px', alignItems: 'center', children: getFlag(selectedCountry.flag) }) }), jsx(StyledMenu, { MenuListProps: {
                            'aria-labelledby': 'demo-customized-button',
                        }, anchorEl: anchorEl, open: isOpen, onClose: handleClose, children: countryList.map(function (country) {
                            var countryName = country.countryName, flag = country.flag, phoneCode = country.phoneCode;
                            var flagIcon = getFlag(flag);
                            return (jsx(MenuItem, { selected: country.id === selectedCountry.id, onClick: function () { return handleItemClick(country); }, children: jsxs(Box, { display: 'flex', gap: 2, alignItems: 'center', children: [jsx(Box, { height: '33px', fontSize: 25, children: flagIcon }), jsx(Box, { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '220px', children: countryName }), jsxs(Box, { children: ["(", phoneCode, ")"] })] }) }, country.id));
                        }) })] }), jsxs(Typography, { "data-testid": 'international-selected-code', fontWeight: '500', fontSize: '16px', borderLeft: '1px solid #c3cad4', margin: '6px 10px', paddingLeft: '12px', lineHeight: '30px', children: ["(", selectedCountry.phoneCode, ")"] })] }));
};
var StyledMenu = styled$1(function (props) { return (jsx(Menu, __assign({ elevation: 0, anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
    }, transformOrigin: {
        vertical: 'top',
        horizontal: 'left',
    } }, props))); })({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: 4,
        maxHeight: 400,
        width: 300,
        border: "1px solid ".concat(Colors.gray1),
        '& .MuiMenu-list': {
            padding: '0',
        },
    },
});

var OtpInput = function (props) {
    var length = props.length, value = props.value, onChange = props.onChange;
    var inputRefs = React.useRef(new Array(length).fill(null));
    var focusInput = function (targetIndex) {
        var targetInput = inputRefs.current[targetIndex];
        targetInput === null || targetInput === void 0 ? void 0 : targetInput.focus();
    };
    var selectInput = function (targetIndex) {
        var targetInput = inputRefs.current[targetIndex];
        targetInput === null || targetInput === void 0 ? void 0 : targetInput.select();
    };
    var handleKeyDown = function (event, currentIndex) {
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case ' ':
                event.preventDefault();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                if (currentIndex > 0) {
                    focusInput(currentIndex - 1);
                    selectInput(currentIndex - 1);
                }
                break;
            case 'ArrowRight':
                event.preventDefault();
                if (currentIndex < length - 1) {
                    focusInput(currentIndex + 1);
                    selectInput(currentIndex + 1);
                }
                break;
            case 'Delete':
                event.preventDefault();
                var newOtpDelete = value.slice(0, currentIndex) + value.slice(currentIndex + 1);
                onChange(newOtpDelete);
                break;
            case 'Backspace':
                event.preventDefault();
                if (currentIndex > 0) {
                    focusInput(currentIndex - 1);
                    selectInput(currentIndex - 1);
                }
                var newOtpBackspace = value.slice(0, currentIndex) + value.slice(currentIndex + 1);
                onChange(newOtpBackspace);
                break;
        }
    };
    var handleChange = function (event, currentIndex) {
        var currentValue = event.target.value.replace(/\D/g, '');
        if (currentValue.length === 0)
            return;
        var indexToEnter = 0;
        while (indexToEnter <= currentIndex) {
            if (inputRefs.current[indexToEnter] && indexToEnter < currentIndex) {
                indexToEnter += 1;
            }
            else {
                break;
            }
        }
        var otpArray = value.split('');
        var lastValue = currentValue[currentValue.length - 1];
        otpArray[indexToEnter] = lastValue;
        var newOtp = otpArray.join('');
        onChange(newOtp);
        if (currentValue !== '' && currentIndex < length - 1) {
            focusInput(currentIndex + 1);
        }
    };
    var handleClick = function (event, currentIndex) {
        selectInput(currentIndex);
    };
    var handlePaste = function (event, currentIndex) {
        event.preventDefault();
        var clipboardData = event.clipboardData;
        if (clipboardData.types.includes('text/plain')) {
            var pastedText = clipboardData.getData('text/plain');
            pastedText = pastedText.substring(0, length).trim();
            var indexToEnter = 0;
            while (indexToEnter <= currentIndex) {
                if (inputRefs.current[indexToEnter] && indexToEnter < currentIndex) {
                    indexToEnter += 1;
                }
                else {
                    break;
                }
            }
            var otpArray = value.split('');
            for (var iteration = indexToEnter; iteration < length; iteration += 1) {
                var lastValue = pastedText[iteration - indexToEnter];
                otpArray[iteration] = lastValue;
            }
            onChange(otpArray.join(''));
        }
    };
    return (jsx(Box, { sx: {
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'center',
        }, children: new Array(length).fill(null).map(function (_, index) {
            var _a;
            return (jsx(React.Fragment, { children: jsx(TextField, { inputRef: function (ele) {
                        inputRefs.current[index] = ele;
                    }, inputProps: { style: { textAlign: 'center', color: '#176AFC' } }, onKeyDown: function (event) {
                        return handleKeyDown(event, index);
                    }, onChange: function (event) {
                        return handleChange(event, index);
                    }, onClick: function (event) {
                        return handleClick(event, index);
                    }, onPaste: function (event) {
                        return handlePaste(event, index);
                    }, value: (_a = value[index]) !== null && _a !== void 0 ? _a : '-' }) }, index));
        }) }));
};

var PhoneNoForm = function (props) {
    var countryList = props.countryList, onChangeCountry = props.onChangeCountry, onChangeMobile = props.onChangeMobile, isInvalid = props.isInvalid, mobile = props.mobile, _a = props.placeholder, placeholder = _a === void 0 ? '' : _a, defaultCountry = props.defaultCountry;
    return (jsx(Phone, { children: jsx(MobileInput, { name: '', type: 'tel', label: placeholder, value: mobile, onChange: onChangeMobile, isNumber: true, invalid: isInvalid, rightComponent: jsx(Box, { margin: '6px 0 6px -10px', children: jsx(InternationalPhone, { countryList: countryList, onChange: onChangeCountry, defaultCountry: defaultCountry }) }), containerStyled: {
                background: 'none',
            }, inputStyled: {
                background: 'none',
            } }) }));
};
var Phone = styled$1('div')(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var templateObject_1$3;

var OtpTimer = function (props) {
    var timerResend = props.timerResend;
    var minutes = Math.floor(timerResend / 60);
    var seconds = Math.floor(timerResend % 60);
    var to2Digits = function (val) {
        return "".concat(val).padStart(2, '0');
    };
    return (jsx(Lead1, { text: "".concat(to2Digits(minutes), ":").concat(to2Digits(seconds)), color: Colors.royalBlue }));
};

var OtpForm = function (props) {
    var length = props.length, value = props.value, onChange = props.onChange, _a = props.errorMessage, errorMessage = _a === void 0 ? '' : _a, refcode = props.refcode, _b = props.refcodeLabel, refcodeLabel = _b === void 0 ? 'หมายเลขอ้างอิง' : _b, _c = props.resendLabel, resendLabel = _c === void 0 ? 'ขอรหัสอีกครั้งใน' : _c, _d = props.unitLabel, unitLabel = _d === void 0 ? 'นาที' : _d, _e = props.resendTimeSecond, resendTimeSecond = _e === void 0 ? 180 : _e, _f = props.expireTimeSecond, expireTimeSecond = _f === void 0 ? 180 : _f, onResend = props.onResend, _g = props.resendBtnText, resendBtnText = _g === void 0 ? 'ขอรหัสอีกครั้ง' : _g;
    var _h = useState(resendTimeSecond), delayResend = _h[0], setDelayResend = _h[1];
    var _j = useState(expireTimeSecond), timerExpire = _j[0], setTimerExpire = _j[1];
    useEffect(function () {
        var timerTimerExpire = setInterval(function () {
            setTimerExpire(timerExpire - 1);
        }, 1000);
        var timerDelayResend = setInterval(function () {
            setDelayResend(delayResend - 1);
        }, 1000);
        if (delayResend === 0) {
            clearInterval(timerDelayResend);
        }
        if (timerExpire === 0) {
            clearInterval(timerTimerExpire);
        }
        return function () {
            clearInterval(timerDelayResend);
            clearInterval(timerTimerExpire);
        };
    });
    var renderResendTimer = function () {
        if (delayResend > 0) {
            return (jsx(StyledTimmer, { children: jsxs(Box, { sx: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                    }, children: [jsx(P1, { text: resendLabel }), jsx(OtpTimer, { timerResend: delayResend }), jsx(Lead1, { text: unitLabel, color: Colors.royalBlue })] }) }));
        }
        else {
            return (jsx(Box, { sx: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                }, children: jsx(OutlinedBtn, { bdSize: "md", onClick: onResend, text: resendBtnText, width: "fit" }) }));
        }
    };
    return (jsxs(Box, { sx: {
            display: 'flex',
            flexDirection: 'column',
        }, children: [jsxs(Box, { children: [jsx(OtpInput, { value: value, onChange: onChange, length: length }), errorMessage && (jsx(StyledTextError$1, { children: jsx(P2, { text: errorMessage, color: Colors.error }) }))] }), jsx(StyledRefCode, { children: jsxs(Box, { sx: {
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                        gap: 1,
                    }, children: [jsx(P2, { text: refcodeLabel }), jsx(P2, { text: refcode })] }) }), renderResendTimer()] }));
};
var StyledTextError$1 = styled$1('div')(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  margin-top: 12px;\n  text-align: center;\n"], ["\n  margin-top: 12px;\n  text-align: center;\n"])));
var StyledRefCode = styled$1('div')(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  margin-top: 48px;\n  text-align: center;\n"], ["\n  margin-top: 48px;\n  text-align: center;\n"])));
var StyledTimmer = styled$1('div')(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  text-align: center;\n"], ["\n  text-align: center;\n"])));
var templateObject_1$2, templateObject_2$2, templateObject_3$2;

var Circle = function (props) {
    var _a = props.size, size = _a === void 0 ? 1 : _a, _b = props.color, color = _b === void 0 ? '#07236D' : _b;
    var width = "".concat(Math.ceil(15 * size));
    var height = "".concat(Math.ceil(15 * size));
    return (jsx("svg", { width: width, height: height, viewBox: '0 0 15 15', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: jsx("circle", { cx: '7.5', cy: '7.5', r: '7.5', fill: color }) }));
};

var Del = function (props) {
    var _a = props.size, size = _a === void 0 ? 1 : _a, _b = props.color, color = _b === void 0 ? 'white' : _b;
    var width = "".concat(Math.ceil(41 * size));
    var height = "".concat(Math.ceil(41 * size));
    return (jsx("svg", { width: width, height: height, viewBox: "0 0 41 41", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { 
            // eslint-disable-next-line max-len
            d: "M20.5 23.9141L23.9167 20.4974M23.9167 20.4974L27.3333 17.0807M23.9167 20.4974L20.5 17.0807M23.9167 20.4974L27.3333 23.9141M5.125 20.4974L16.0822 31.4546C16.7228 32.0954 17.5918 32.4555 18.4978 32.4557H32.4583C33.3645 32.4557 34.2335 32.0958 34.8743 31.455C35.515 30.8143 35.875 29.9452 35.875 29.0391V11.9557C35.875 11.0496 35.515 10.1805 34.8743 9.53978C34.2335 8.89903 33.3645 8.53906 32.4583 8.53906H18.4978C17.5918 8.53926 16.7228 8.89935 16.0822 9.54015L5.125 20.4974Z", stroke: color, strokeWidth: "1.82472", strokeLinecap: "round", strokeLinejoin: "round" }) }));
};

var menuA = [
    { label: '1', text: '' },
    { label: '2', text: 'A B C' },
    { label: '3', text: 'D E F' },
];
var menuB = [
    { label: '4', text: 'G H I' },
    { label: '5', text: 'J K L' },
    { label: '6', text: 'M N O' },
];
var menuC = [
    { label: '7', text: 'P Q R S' },
    { label: '8', text: 'T U V' },
    { label: '9', text: 'W X Y Z' },
];
var menuD = [
    { status: 'space' },
    { label: '0', text: '' },
    { status: 'delete' },
];
var PinKeyBoard = function (_a) {
    var onClick = _a.onClick, onDelete = _a.onDelete;
    var getBtn = function (list) {
        if (list === void 0) { list = []; }
        return list.map(function (it, i) {
            var status = it.status, label = it.label;
            if (status === 'space')
                return jsx(SpaceBtn, {}, i);
            if (status === 'delete') {
                return (jsx(DelBtn, { onClick: onDelete, children: jsx(Del, {}) }, i));
            }
            var click = function () { return onClick(label); };
            return (jsx(Btn, { onClick: click, children: label }, i));
        });
    };
    return (jsxs(Content, { children: [jsx(LineBtn, { children: getBtn(menuA) }), jsx(LineBtn, { children: getBtn(menuB) }), jsx(LineBtn, { children: getBtn(menuC) }), jsx(LineBtn, { children: getBtn(menuD) })] }));
};
var Content = styled$1(Box)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var LineBtn = styled$1(Box)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 40px;\n  padding: 10px 0px;\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 40px;\n  padding: 10px 0px;\n"])));
var Btn = styled$1(Box)(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  width: 68px;\n  height: 68px;\n  font-weight: 300;\n  font-size: 32px;\n  line-height: 40px;\n  color: #07236d;\n  border: 0.9px solid #07236d;\n  border-radius: 50%;\n  text-align: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: 68px;\n  height: 68px;\n  font-weight: 300;\n  font-size: 32px;\n  line-height: 40px;\n  color: #07236d;\n  border: 0.9px solid #07236d;\n  border-radius: 50%;\n  text-align: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var SpaceBtn = styled$1(Btn)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border: 0px solid #07236d;\n"], ["\n  border: 0px solid #07236d;\n"])));
var DelBtn = styled$1(Btn)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: #07236d;\n  box-shadow: none;\n  font-size: 20px;\n  line-height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  background-color: #07236d;\n  box-shadow: none;\n  font-size: 20px;\n  line-height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4, templateObject_5;

var PinForm = function (props) {
    var onKeyboard = props.onKeyboard, onDelete = props.onDelete, codeList = props.codeList, error = props.error;
    var codes = codeList.map(function (it, i) {
        var isActive = it !== '';
        var c = isActive ? jsx(Circle, {}) : '';
        return jsx(Code, { children: c }, i);
    });
    return (jsxs(Box, { sx: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }, children: [jsx(CodeSection, { children: codes }), error && (jsx(StyledTextError, { children: jsx(P2, { text: error, color: Colors.error }) })), jsx(PinKeyBoard, { onClick: onKeyboard, onDelete: onDelete })] }));
};
var CodeSection = styled$1('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  column-gap: 8px;\n  padding: 20px 0;\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  column-gap: 8px;\n  padding: 20px 0;\n"])));
var Code = styled$1('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 48px;\n  height: 48px;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 8px;\n\n  &.active {\n    font-weight: 600;\n    color: ", ";\n    border: 1px solid ", ";\n  }\n"], ["\n  width: 48px;\n  height: 48px;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 8px;\n\n  &.active {\n    font-weight: 600;\n    color: ", ";\n    border: 1px solid ", ";\n  }\n"])), Colors.gray2, Colors.offWhite, Colors.gray2, Colors.royalBlue, Colors.royalBlue);
var StyledTextError = styled$1('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 12px 0;\n  text-align: center;\n"], ["\n  padding: 12px 0;\n  text-align: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3;

export { Badges, BadgesBold, BaseText, BottomSheet as BdBottomSheet, Button as BdButton, OutlinedBtn as BdOutlinedButton, PrimaryBtn as BdPrimaryButton, RemoveBtn as BdRemoveButton, SecondaryBtn as BdSecondaryButton, Colors, format as Format, H1, H2, H3, H4, H5, H6, InternationalPhone, Lead1, Lead2, Mini, MobileInput, OtpForm, OtpInput, P1, P2, PhoneNoForm as PhoneNumberForm, PinForm, PinKeyBoard as PinKeyboard, Tiny };
