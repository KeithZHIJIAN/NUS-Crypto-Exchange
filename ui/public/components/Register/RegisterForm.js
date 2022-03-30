"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _react = require("react");

var _formik = require("formik");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _lab = require("@mui/lab");

var _Iconify = _interopRequireDefault(require("../Iconify"));

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// ----------------------------------------------------------------------
function RegisterFormContent(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showPassword = _useState2[0],
      setShowPassword = _useState2[1];

  var RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });
  var formik = (0, _formik.useFormik)({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: function () {
      var _onSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var firstName, lastName, email, password, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                firstName = document.getElementById('firstName').value;
                lastName = document.getElementById('lastName').value;
                email = document.getElementById('email').value;
                password = document.getElementById('password').value;
                _context.next = 6;
                return props.register(firstName, lastName, email, password);

              case 6:
                result = _context.sent;

                if (result == true) {
                  setTimeout(function () {
                    setFieldValue("email", '');
                    setFieldValue("password", '');
                    props.webHistory.replace('/');
                  }, 100); //wait for sometime
                } else {
                  setTimeout(function () {
                    setFieldValue("email", '');
                    setFieldValue("password", '');
                    props.webHistory.replace('/register');
                  }, 10); //wait for sometime
                }

                ;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onSubmit() {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  });
  var errors = formik.errors,
      touched = formik.touched,
      handleSubmit = formik.handleSubmit,
      isSubmitting = formik.isSubmitting,
      getFieldProps = formik.getFieldProps,
      setFieldValue = formik.setFieldValue;
  return /*#__PURE__*/React.createElement(_formik.FormikProvider, {
    value: formik
  }, /*#__PURE__*/React.createElement(_formik.Form, {
    autoComplete: "off",
    noValidate: true,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(_material.Stack, {
    spacing: 3
  }, /*#__PURE__*/React.createElement(_material.Stack, {
    direction: {
      xs: 'column',
      sm: 'row'
    },
    spacing: 2
  }, /*#__PURE__*/React.createElement(_material.TextField, _extends({
    fullWidth: true,
    label: "First name",
    id: "firstName"
  }, getFieldProps('firstName'), {
    error: Boolean(touched.firstName && errors.firstName),
    helperText: touched.firstName && errors.firstName
  })), /*#__PURE__*/React.createElement(_material.TextField, _extends({
    fullWidth: true,
    label: "Last name",
    id: "lastName"
  }, getFieldProps('lastName'), {
    error: Boolean(touched.lastName && errors.lastName),
    helperText: touched.lastName && errors.lastName
  }))), /*#__PURE__*/React.createElement(_material.TextField, _extends({
    fullWidth: true,
    autoComplete: "username",
    type: "email",
    label: "Email address",
    id: "email"
  }, getFieldProps('email'), {
    error: Boolean(touched.email && errors.email),
    helperText: touched.email && errors.email
  })), /*#__PURE__*/React.createElement(_material.TextField, _extends({
    fullWidth: true,
    autoComplete: "current-password",
    type: showPassword ? 'text' : 'password',
    label: "Password",
    id: "password"
  }, getFieldProps('password'), {
    InputProps: {
      endAdornment: /*#__PURE__*/React.createElement(_material.InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React.createElement(_material.IconButton, {
        edge: "end",
        onClick: function onClick() {
          return setShowPassword(function (prev) {
            return !prev;
          });
        }
      }, /*#__PURE__*/React.createElement(_Iconify.default, {
        icon: showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'
      })))
    },
    error: Boolean(touched.password && errors.password),
    helperText: touched.password && errors.password
  })), /*#__PURE__*/React.createElement(_lab.LoadingButton, {
    fullWidth: true,
    size: "large",
    type: "submit",
    variant: "contained",
    loading: isSubmitting
  }, "Register"))));
}

var RegisterForm = /*#__PURE__*/function (_React$Component) {
  _inherits(RegisterForm, _React$Component);

  var _super = _createSuper(RegisterForm);

  function RegisterForm() {
    _classCallCheck(this, RegisterForm);

    return _super.apply(this, arguments);
  }

  _createClass(RegisterForm, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(RegisterFormContent, {
        register: this.context.register,
        webHistory: this.context.webHistory
      });
    }
  }]);

  return RegisterForm;
}(React.Component);

exports.default = RegisterForm;

_defineProperty(RegisterForm, "contextTypes", {
  register: _propTypes.default.func,
  webHistory: _propTypes.default.object
});