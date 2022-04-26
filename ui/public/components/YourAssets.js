"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Table = _interopRequireDefault(require("@mui/material/Table"));

var _TableBody = _interopRequireDefault(require("@mui/material/TableBody"));

var _TableCell = _interopRequireDefault(require("@mui/material/TableCell"));

var _TableHead = _interopRequireDefault(require("@mui/material/TableHead"));

var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));

var _Title = _interopRequireDefault(require("./Title"));

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

function YourAssetsContent(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_material.Box, {
    sx: {
      mt: 3
    }
  }, /*#__PURE__*/React.createElement(_material.Card, null, /*#__PURE__*/React.createElement(_material.CardContent, null, /*#__PURE__*/React.createElement(_Title.default, null, "Your assets"), /*#__PURE__*/React.createElement(_Table.default, {
    size: "small"
  }, /*#__PURE__*/React.createElement(_TableHead.default, null, /*#__PURE__*/React.createElement(_TableRow.default, null, /*#__PURE__*/React.createElement(_TableCell.default, null, "Id"), /*#__PURE__*/React.createElement(_TableCell.default, null, "Name"), /*#__PURE__*/React.createElement(_TableCell.default, null, "Quantity"), /*#__PURE__*/React.createElement(_TableCell.default, {
    align: "right"
  }, "Description"))), /*#__PURE__*/React.createElement(_TableBody.default, null, props.assets.map(function (row) {
    return /*#__PURE__*/React.createElement(_TableRow.default, {
      key: row.id
    }, /*#__PURE__*/React.createElement(_TableCell.default, null, row.id), /*#__PURE__*/React.createElement(_TableCell.default, null, row.symbol), /*#__PURE__*/React.createElement(_TableCell.default, null, row.quantity), /*#__PURE__*/React.createElement(_TableCell.default, {
      align: "right"
    }, "$".concat(row.description)));
  })))))));
}

var YourAssets = /*#__PURE__*/function (_React$Component) {
  _inherits(YourAssets, _React$Component);

  var _super = _createSuper(YourAssets);

  function YourAssets() {
    _classCallCheck(this, YourAssets);

    return _super.call(this);
  }

  _createClass(YourAssets, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(YourAssetsContent, {
        assets: this.context.getAssets()
      }));
    }
  }]);

  return YourAssets;
}(React.Component);

exports.default = YourAssets;

_defineProperty(YourAssets, "contextTypes", {
  getAssets: _propTypes.default.func //接收传递的方法

});