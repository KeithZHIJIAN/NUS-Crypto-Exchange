"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountProfile = void 0;

var React = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var user = {
  photoURL: '/static/mock-images/avatars/avatar_default.jpg',
  city: 'GuangZhou',
  country: 'China',
  jobTitle: 'TBC',
  displayName: 'Katarina Smith',
  timezone: 'GTM-8'
};

function AccountProfileContent(props) {
  return /*#__PURE__*/React.createElement(_material.Card, null, /*#__PURE__*/React.createElement(_material.CardContent, null, /*#__PURE__*/React.createElement(_material.Box, {
    sx: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(_material.Avatar, {
    src: props.currentUser.photoURL != undefined ? props.currentUser.photoURL : user.photoURL,
    sx: {
      height: 64,
      mb: 2,
      width: 64
    }
  }), /*#__PURE__*/React.createElement(_material.Typography, {
    color: "textPrimary",
    gutterBottom: true,
    variant: "h5"
  }, props.currentUser.displayName != undefined ? props.currentUser.displayName : user.displayName), /*#__PURE__*/React.createElement(_material.Typography, {
    color: "textSecondary",
    variant: "body2"
  }, props.currentUser.city != undefined && props.currentUser.country != undefined ? "".concat(props.currentUser.city, " ").concat(props.currentUser.country) : "".concat(user.city, " ").concat(user.country)), /*#__PURE__*/React.createElement(_material.Typography, {
    color: "textSecondary",
    variant: "body2"
  }, props.currentUser.timezone != undefined ? props.currentUser.timezone : user.timezone))), /*#__PURE__*/React.createElement(_material.Divider, null), /*#__PURE__*/React.createElement(_material.CardActions, null, /*#__PURE__*/React.createElement(_material.Button, {
    color: "primary",
    fullWidth: true,
    variant: "text",
    disabled: true
  }, "Upload picture")));
}

;

var AccountProfile = /*#__PURE__*/function (_React$Component) {
  _inherits(AccountProfile, _React$Component);

  var _super = _createSuper(AccountProfile);

  function AccountProfile() {
    _classCallCheck(this, AccountProfile);

    return _super.apply(this, arguments);
  }

  _createClass(AccountProfile, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(AccountProfileContent, {
        currentUser: this.context.currentUser
      });
    }
  }]);

  return AccountProfile;
}(React.Component);

exports.AccountProfile = AccountProfile;

_defineProperty(AccountProfile, "contextTypes", {
  currentUser: _propTypes.default.object
});