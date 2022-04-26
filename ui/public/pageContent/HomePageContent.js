"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HomepageContent;

var React = _interopRequireWildcard(require("react"));

var _styles = require("@mui/material/styles");

var _CssBaseline = _interopRequireDefault(require("@mui/material/CssBaseline"));

var _Drawer = _interopRequireDefault(require("@mui/material/Drawer"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _AppBar = _interopRequireDefault(require("@mui/material/AppBar"));

var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));

var _List = _interopRequireDefault(require("@mui/material/List"));

var _Typography = _interopRequireDefault(require("@mui/material/Typography"));

var _Divider = _interopRequireDefault(require("@mui/material/Divider"));

var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));

var _Menu = _interopRequireDefault(require("@mui/icons-material/Menu"));

var _ChevronLeft = _interopRequireDefault(require("@mui/icons-material/ChevronLeft"));

var _Button = _interopRequireDefault(require("@mui/material/Button"));

var _listItems = _interopRequireDefault(require("../listItems/listItems"));

var _Title = _interopRequireDefault(require("../components/Title"));

var _BuyAndSell = _interopRequireDefault(require("../components/BuyAndSell/BuyAndSell"));

var _PersonalInfo = _interopRequireDefault(require("../components/PersonalInfo/PersonalInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var drawerWidth = 220;
var AppBar = (0, _styles.styled)(_AppBar.default, {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'open';
  }
})(function (_ref) {
  var theme = _ref.theme,
      open = _ref.open;
  return _objectSpread({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }, open && {
    marginLeft: drawerWidth,
    width: "calc(100% - ".concat(drawerWidth, "px)"),
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  });
});
var Drawer = (0, _styles.styled)(_Drawer.default, {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'open';
  }
})(function (_ref2) {
  var theme = _ref2.theme,
      open = _ref2.open;
  return {
    '& .MuiDrawer-paper': _objectSpread({
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      boxSizing: 'border-box'
    }, !open && _defineProperty({
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(5)
    }, theme.breakpoints.up('sm'), {
      width: theme.spacing(9)
    }))
  };
});
var mdTheme = (0, _styles.createTheme)();

function HomepageContent(props) {
  var _React$useState = React.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var toggleDrawer = function toggleDrawer() {
    setOpen(!open);
  };

  return /*#__PURE__*/React.createElement(_styles.ThemeProvider, {
    theme: mdTheme
  }, /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(_CssBaseline.default, null), /*#__PURE__*/React.createElement(AppBar, {
    position: "absolute",
    open: open
  }, /*#__PURE__*/React.createElement(_Toolbar.default, {
    sx: {
      pr: '24px' // keep right padding when drawer closed

    }
  }, /*#__PURE__*/React.createElement(_IconButton.default, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, open && {
      display: 'none'
    })
  }, /*#__PURE__*/React.createElement(_Menu.default, null)), /*#__PURE__*/React.createElement(_Typography.default, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "pageTitle"
  }, props.state.page)), /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      width: 'fit-content',
      border: function border(theme) {
        return "1px solid ".concat(theme.palette.divider);
      },
      borderRadius: 1,
      bgcolor: 'background.paper',
      color: 'text.secondary',
      '& svg': {
        m: 1.5
      },
      '& hr': {
        mx: 0.5
      },
      marginRight: '-22px'
    }
  }, /*#__PURE__*/React.createElement(_BuyAndSell.default, null), /*#__PURE__*/React.createElement(_Divider.default, {
    orientation: "vertical",
    variant: "middle",
    flexItem: true
  }), /*#__PURE__*/React.createElement(_PersonalInfo.default, null)))), /*#__PURE__*/React.createElement(Drawer, {
    variant: "permanent",
    open: open
  }, /*#__PURE__*/React.createElement(_Toolbar.default, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/React.createElement(_Button.default, {
    onClick: function onClick() {
      props.changePage('Assets');
    }
  }, /*#__PURE__*/React.createElement(_Title.default, null, "NUSwap")), /*#__PURE__*/React.createElement(_IconButton.default, {
    onClick: toggleDrawer,
    "aria-label": "showListItems"
  }, /*#__PURE__*/React.createElement(_ChevronLeft.default, null))), /*#__PURE__*/React.createElement(_Divider.default, null), /*#__PURE__*/React.createElement(_List.default, {
    component: "nav"
  }, /*#__PURE__*/React.createElement(_listItems.default, null), /*#__PURE__*/React.createElement(_Divider.default, {
    sx: {
      my: 1
    }
  }))), props.showPage()));
}