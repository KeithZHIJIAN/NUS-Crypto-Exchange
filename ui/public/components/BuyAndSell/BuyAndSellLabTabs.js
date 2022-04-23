"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _Tab = _interopRequireDefault(require("@mui/material/Tab"));

var _TabContext = _interopRequireDefault(require("@mui/lab/TabContext"));

var _TabList = _interopRequireDefault(require("@mui/lab/TabList"));

var _TabPanel = _interopRequireDefault(require("@mui/lab/TabPanel"));

var _Grid = _interopRequireDefault(require("@mui/material/Grid"));

var _BuyTextField = _interopRequireDefault(require("./Buy/BuyTextField"));

var _BuyOrderTypeAndPrice = _interopRequireDefault(require("./Buy/BuyOrderTypeAndPrice"));

var _BuyType = _interopRequireDefault(require("./Buy/BuyType"));

var _BuyButton = _interopRequireDefault(require("./Buy/BuyButton"));

var _SellTextField = _interopRequireDefault(require("./Sell/SellTextField"));

var _SellType = _interopRequireDefault(require("./Sell/SellType"));

var _SellButton = _interopRequireDefault(require("./Sell/SellButton"));

var _ConvertTextField = _interopRequireDefault(require("./Convert/ConvertTextField"));

var _ConvertType = _interopRequireDefault(require("./Convert/ConvertType"));

var _ConvertButton = _interopRequireDefault(require("./Convert/ConvertButton"));

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function LabTabsContent(props) {
  var _React$useState = React.useState('1'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      width: '100%',
      typography: 'body1'
    }
  }, /*#__PURE__*/React.createElement(_TabContext.default, {
    value: value
  }, /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      borderBottom: 1,
      borderColor: 'divider'
    }
  }, /*#__PURE__*/React.createElement(_TabList.default, {
    onChange: handleChange,
    "aria-label": "lab API tabs example"
  }, /*#__PURE__*/React.createElement(_Tab.default, {
    label: "Buy",
    value: "1"
  }), /*#__PURE__*/React.createElement(_Tab.default, {
    label: "Sell",
    value: "2"
  }), /*#__PURE__*/React.createElement(_Tab.default, {
    label: "Convert",
    value: "3"
  }))), /*#__PURE__*/React.createElement(_TabPanel.default, {
    value: "1"
  }, /*#__PURE__*/React.createElement(_Grid.default, {
    container: true,
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    spacing: 1
  }, /*#__PURE__*/React.createElement(_Grid.default, {
    item: true,
    xs: true
  }, /*#__PURE__*/React.createElement(_BuyTextField.default, null)), /*#__PURE__*/React.createElement(_Grid.default, {
    item: true,
    xs: true
  }, /*#__PURE__*/React.createElement(_BuyOrderTypeAndPrice.default, null)), /*#__PURE__*/React.createElement(_Grid.default, {
    item: true,
    xs: true
  }, /*#__PURE__*/React.createElement(_BuyType.default, null)), /*#__PURE__*/React.createElement(_Grid.default, {
    item: true,
    xs: true
  }, /*#__PURE__*/React.createElement(_BuyButton.default, null)))), /*#__PURE__*/React.createElement(_TabPanel.default, {
    value: "2"
  }, /*#__PURE__*/React.createElement(_Grid.default, {
    container: true,
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    spacing: 1
  }, /*#__PURE__*/React.createElement(_Grid.default, {
    item: true,
    xs: true
  }, /*#__PURE__*/React.createElement(_SellTextField.default, null)), /*#__PURE__*/React.createElement(_Grid.default, {
    item: true,
    xs: true
  }, /*#__PURE__*/React.createElement(_SellType.default, null)), /*#__PURE__*/React.createElement(_Grid.default, {
    item: true,
    xs: true
  }, /*#__PURE__*/React.createElement(_SellButton.default, null)))), /*#__PURE__*/React.createElement(_TabPanel.default, {
    value: "3"
  }, /*#__PURE__*/React.createElement(_Grid.default, {
    container: true,
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    spacing: 1
  }, /*#__PURE__*/React.createElement(_Grid.default, {
    item: true,
    xs: true
  }, /*#__PURE__*/React.createElement(_ConvertTextField.default, null)), /*#__PURE__*/React.createElement(_Grid.default, {
    item: true,
    xs: true
  }, /*#__PURE__*/React.createElement(_ConvertType.default, {
    id: "from"
  })), /*#__PURE__*/React.createElement(_Grid.default, {
    item: true,
    xs: true
  }, /*#__PURE__*/React.createElement(_ConvertType.default, {
    id: "to"
  })), /*#__PURE__*/React.createElement(_Grid.default, {
    item: true,
    xs: true
  }, /*#__PURE__*/React.createElement(_ConvertButton.default, null))))));
}

var BuyAndSellLabTabs = /*#__PURE__*/function (_React$Component) {
  _inherits(BuyAndSellLabTabs, _React$Component);

  var _super = _createSuper(BuyAndSellLabTabs);

  function BuyAndSellLabTabs() {
    _classCallCheck(this, BuyAndSellLabTabs);

    return _super.call(this);
  }

  _createClass(BuyAndSellLabTabs, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LabTabsContent, null));
    }
  }]);

  return BuyAndSellLabTabs;
}(React.Component);

exports.default = BuyAndSellLabTabs;