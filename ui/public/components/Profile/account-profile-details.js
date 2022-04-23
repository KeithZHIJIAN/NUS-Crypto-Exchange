"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountProfileDetails = void 0;

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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var user = {
  photoURL: '/static/mock-images/avatars/avatar_default.jpg',
  country: 'China',
  displayName: 'Katarina Smith',
  timezone: 'GTM-8',
  email: 'test@test.com',
  phone: 'test',
  currentCity: 'GuangZhou',
  cities: [{
    value: 'Foshan',
    label: 'Foshan'
  }, {
    value: 'HK',
    label: 'HK'
  }, {
    value: 'Beijing',
    label: 'Beijing'
  }]
};

function AccountProfileDetailsContent(props) {
  var _React$useState = React.useState({
    firstName: props.currentUser.displayName != undefined ? props.currentUser.displayName.split(" ").at(0) : user.displayName.split(" ").at(0),
    lastName: props.currentUser.displayName != undefined ? props.currentUser.displayName.split(" ").at(1) : user.displayName.split(" ").at(1),
    email: props.currentUser.email != undefined ? props.currentUser.email : user.email,
    phone: props.currentUser.phone != undefined ? props.currentUser.phone : user.phone,
    country: props.currentUser.country != undefined ? props.currentUser.country : user.country,
    currentCity: props.currentUser.currentCity != undefined ? props.currentUser.currentCity : user.currentCity,
    cities: props.currentUser.cities != undefined ? props.currentUser.cities : user.cities
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, event.target.name, event.target.value)));
  };

  return /*#__PURE__*/React.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, /*#__PURE__*/React.createElement(_material.Card, null, /*#__PURE__*/React.createElement(_material.CardHeader, {
    subheader: "The information can be edited",
    title: "ProfilePage"
  }), /*#__PURE__*/React.createElement(_material.Divider, null), /*#__PURE__*/React.createElement(_material.CardContent, null, /*#__PURE__*/React.createElement(_material.Grid, {
    container: true,
    spacing: 3
  }, /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    md: 6,
    xs: 12
  }, /*#__PURE__*/React.createElement(_material.TextField, {
    fullWidth: true,
    helperText: "Please specify the first name",
    label: "First name",
    name: "firstName",
    onChange: handleChange,
    required: true,
    value: values.firstName,
    variant: "outlined"
  })), /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    md: 6,
    xs: 12
  }, /*#__PURE__*/React.createElement(_material.TextField, {
    fullWidth: true,
    label: "Last name",
    name: "lastName",
    onChange: handleChange,
    required: true,
    value: values.lastName,
    variant: "outlined"
  })), /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    md: 6,
    xs: 12
  }, /*#__PURE__*/React.createElement(_material.TextField, {
    disabled: true,
    fullWidth: true,
    label: "Email Address",
    name: "email" //onChange={handleChange}
    ,
    required: true,
    defaultValue: values.email,
    variant: "outlined"
  })), /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    md: 6,
    xs: 12
  }, /*#__PURE__*/React.createElement(_material.TextField, {
    disabled: true,
    fullWidth: true,
    label: "Phone Number",
    name: "phone" //onChange={handleChange}
    //type="number"
    ,
    defaultValue: values.phone,
    variant: "outlined"
  })), /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    md: 6,
    xs: 12
  }, /*#__PURE__*/React.createElement(_material.TextField, {
    disabled: true,
    fullWidth: true,
    label: "Country",
    name: "country" //onChange={handleChange}
    ,
    required: true,
    defaultValue: values.country,
    variant: "outlined"
  })), /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    md: 6,
    xs: 12
  }, /*#__PURE__*/React.createElement(_material.TextField, {
    disabled: true,
    fullWidth: true,
    label: "Select City",
    name: "City" //onChange={handleChange}
    ,
    required: true,
    select: true,
    SelectProps: {
      native: true
    },
    defaultValue: values.currentCity,
    variant: "outlined"
  }, values.cities.map(function (option) {
    return /*#__PURE__*/React.createElement("option", {
      key: option.value,
      value: option.value
    }, option.label);
  }))))), /*#__PURE__*/React.createElement(_material.Divider, null), /*#__PURE__*/React.createElement(_material.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'flex-end',
      p: 2
    }
  }, /*#__PURE__*/React.createElement(_material.Button, {
    color: "primary",
    variant: "contained",
    onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return props.updateProfile(values.firstName, values.lastName);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))
  }, "Save details"))));
}

;

var AccountProfileDetails = /*#__PURE__*/function (_React$Component) {
  _inherits(AccountProfileDetails, _React$Component);

  var _super = _createSuper(AccountProfileDetails);

  function AccountProfileDetails() {
    _classCallCheck(this, AccountProfileDetails);

    return _super.apply(this, arguments);
  }

  _createClass(AccountProfileDetails, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(AccountProfileDetailsContent, {
        currentUser: this.context.currentUser,
        updateProfile: this.context.updateProfile
      });
    }
  }]);

  return AccountProfileDetails;
}(React.Component);

exports.AccountProfileDetails = AccountProfileDetails;

_defineProperty(AccountProfileDetails, "contextTypes", {
  currentUser: _propTypes.default.object,
  updateProfile: _propTypes.default.func
});