"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _component = _interopRequireDefault(require("@loadable/component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Box = (0, _component.default)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@mui/material/Box'));
  });
});
var Toolbar = (0, _component.default)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@mui/material/Toolbar'));
  });
});
var Container = (0, _component.default)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@mui/material/Container'));
  });
});
var Grid = (0, _component.default)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@mui/material/Grid'));
  });
});
var Paper = (0, _component.default)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@mui/material/Paper'));
  });
});
var Chart = (0, _component.default)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/Chart'));
  });
});
var Balance = (0, _component.default)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/Balance'));
  });
});
var Topup = (0, _component.default)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/Topup'));
  });
});
var YourAssets = (0, _component.default)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/YourAssets'));
  });
});
var OrderList = (0, _component.default)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/OrderList'));
  });
});
var Copyright = (0, _component.default)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/Copyright'));
  });
});
var WatchList = (0, _component.default)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/WatchList/WatchList'));
  });
});

var AssetsPage = /*#__PURE__*/function (_React$Component) {
  _inherits(AssetsPage, _React$Component);

  var _super = _createSuper(AssetsPage);

  function AssetsPage() {
    _classCallCheck(this, AssetsPage);

    return _super.apply(this, arguments);
  }

  _createClass(AssetsPage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Box, {
        component: "main",
        sx: {
          backgroundColor: function backgroundColor(theme) {
            return theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
          },
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto'
        }
      }, /*#__PURE__*/React.createElement(Toolbar, null), /*#__PURE__*/React.createElement(Container, {
        maxWidth: "lg",
        sx: {
          mt: 4,
          mb: 4
        }
      }, /*#__PURE__*/React.createElement(Grid, {
        container: true,
        spacing: 3
      }, /*#__PURE__*/React.createElement(Grid, {
        item: true,
        xs: 10,
        md: 8,
        lg: 9
      }, /*#__PURE__*/React.createElement(Paper, {
        sx: {
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 240
        }
      }, /*#__PURE__*/React.createElement(Chart, null))), /*#__PURE__*/React.createElement(Grid, {
        item: true,
        xs: 10,
        md: 4,
        lg: 3
      }, /*#__PURE__*/React.createElement(Paper, {
        sx: {
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 240
        }
      }, /*#__PURE__*/React.createElement(Balance, null))), /*#__PURE__*/React.createElement(Grid, {
        item: true,
        xs: 10,
        md: 8,
        lg: 9
      }, /*#__PURE__*/React.createElement(Paper, {
        sx: {
          p: 2,
          display: 'flex',
          flexDirection: 'column'
        }
      }, /*#__PURE__*/React.createElement(YourAssets, null))), /*#__PURE__*/React.createElement(Grid, {
        item: true,
        xs: 10,
        md: 4,
        lg: 3
      }, /*#__PURE__*/React.createElement(Paper, {
        sx: {
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 240
        }
      }, /*#__PURE__*/React.createElement(Topup, null))), /*#__PURE__*/React.createElement(Grid, {
        item: true,
        xs: 10,
        md: 8,
        lg: 9
      }, /*#__PURE__*/React.createElement(Paper, {
        sx: {
          p: 2,
          display: 'flex',
          flexDirection: 'column'
        }
      }, /*#__PURE__*/React.createElement(OrderList, {
        num: 5
      }))), /*#__PURE__*/React.createElement(Grid, {
        item: true,
        xs: 10,
        md: 8,
        lg: 9
      }, /*#__PURE__*/React.createElement(Paper, {
        sx: {
          p: 2,
          display: 'flex',
          flexDirection: 'column'
        }
      }, /*#__PURE__*/React.createElement(WatchList, null)))), /*#__PURE__*/React.createElement(Copyright, {
        sx: {
          pt: 4
        }
      })));
    }
  }]);

  return AssetsPage;
}(React.Component);

exports.default = AssetsPage;