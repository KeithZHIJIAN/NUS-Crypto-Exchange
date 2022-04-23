"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SvgIconStyle;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
SvgIconStyle.propTypes = {
  src: _propTypes.default.string.isRequired,
  sx: _propTypes.default.object
};

function SvgIconStyle(_ref) {
  var src = _ref.src,
      sx = _ref.sx;
  return /*#__PURE__*/React.createElement(_material.Box, {
    component: "span",
    sx: _objectSpread({
      width: 24,
      height: 24,
      display: 'inline-block',
      bgcolor: 'currentColor',
      mask: "url(".concat(src, ") no-repeat center / contain"),
      WebkitMask: "url(".concat(src, ") no-repeat center / contain")
    }, sx)
  });
}