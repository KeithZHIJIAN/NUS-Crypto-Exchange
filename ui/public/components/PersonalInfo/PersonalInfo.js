"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

var _reactGoogleLogin = require("react-google-login");

var _styles = require("@mui/material/styles");

var _material = require("@mui/material");

var _Iconify = _interopRequireDefault(require("../Iconify"));

var _MenuPopover = _interopRequireDefault(require("./MenuPopover"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* import account from '../../_mocks_/account'; */
// ----------------------------------------------------------------------
var MENU_OPTIONS = [{
  label: 'Home',
  icon: 'eva:home-fill',
  linkTo: '/'
}, {
  label: 'Profile',
  icon: 'eva:person-fill',
  linkTo: '/'
}, {
  label: 'Settings',
  icon: 'eva:settings-2-fill',
  linkTo: '/'
}]; // ----------------------------------------------------------------------

function AccountPopover(props) {
  var anchorRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var logout = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return props.logout();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function logout() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_material.IconButton, {
    ref: anchorRef,
    onClick: handleOpen,
    sx: _objectSpread({
      padding: 0,
      width: 44,
      height: 44
    }, open && {
      '&:before': {
        zIndex: 1,
        content: "''",
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        position: 'absolute',
        bgcolor: function bgcolor(theme) {
          return (0, _styles.alpha)(theme.palette.grey[900], 0.72);
        }
      }
    })
  }, /*#__PURE__*/React.createElement(_material.Avatar, {
    src: props.account.photoURL,
    alt: "photoURL"
  })), /*#__PURE__*/React.createElement(_MenuPopover.default, {
    open: open,
    onClose: handleClose,
    anchorEl: anchorRef.current,
    sx: {
      width: 220
    }
  }, /*#__PURE__*/React.createElement(_material.Box, {
    sx: {
      my: 1.5,
      px: 2.5
    }
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "subtitle1",
    noWrap: true
  }, props.account.displayName), /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    },
    noWrap: true
  }, props.account.email)), /*#__PURE__*/React.createElement(_material.Divider, {
    sx: {
      my: 1
    }
  }), MENU_OPTIONS.map(function (option) {
    return /*#__PURE__*/React.createElement(_material.MenuItem, {
      key: option.label,
      to: option.linkTo,
      component: _reactRouterDom.Link,
      onClick: function onClick(event) {
        handleClose();
        props.changePage('Assets');
      },
      sx: {
        typography: 'body2',
        py: 1,
        px: 2.5
      }
    }, /*#__PURE__*/React.createElement(_Iconify.default, {
      icon: option.icon,
      sx: {
        mr: 2,
        width: 24,
        height: 24
      }
    }), option.label);
  }), /*#__PURE__*/React.createElement(_material.Box, {
    sx: {
      p: 2,
      pt: 1.5
    }
  }, props.account.email.indexOf('Google') > 0 ? /*#__PURE__*/React.createElement(_reactGoogleLogin.GoogleLogout, {
    clientId: "610278992963-sjmc5hsd6vvui5f3a1fl2dtvfmtsm799.apps.googleusercontent.com",
    render: function render(renderProps) {
      return /*#__PURE__*/React.createElement(_material.Button, {
        fullWidth: true,
        color: "inherit",
        variant: "outlined",
        onClick: renderProps.onClick
      }, "Logout");
    }
    /* buttonText="Logout" */
    ,
    onLogoutSuccess: logout
  }) : /*#__PURE__*/React.createElement(_material.Button, {
    fullWidth: true,
    color: "inherit",
    variant: "outlined",
    onClick: function onClick() {
      props.logout();
    }
  }, "Logout"))));
}

var PersonalInfo = /*#__PURE__*/function (_React$Component) {
  _inherits(PersonalInfo, _React$Component);

  var _super = _createSuper(PersonalInfo);

  function PersonalInfo() {
    _classCallCheck(this, PersonalInfo);

    return _super.call(this);
  }

  _createClass(PersonalInfo, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AccountPopover, {
        changePage: this.context.changePage,
        account: this.context.currentUser,
        logout: this.context.logout
      }));
    }
  }]);

  return PersonalInfo;
}(React.Component);

exports.default = PersonalInfo;

_defineProperty(PersonalInfo, "contextTypes", {
  changePage: _propTypes.default.func,
  //接收传递的方法
  currentUser: _propTypes.default.object,
  logout: _propTypes.default.func
});