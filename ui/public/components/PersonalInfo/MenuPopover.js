"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MenuPopover;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _styles = require("@mui/material/styles");

var _palette = _interopRequireDefault(require("./palette"));

var _excluded = ["children", "sx"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
var ArrowStyle = (0, _styles.styled)('span')(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({}, theme.breakpoints.up('sm'), {
    top: -7,
    zIndex: 1,
    width: 12,
    right: 20,
    height: 12,
    content: "''",
    position: 'absolute',
    borderRadius: '0 0 4px 0',
    transform: 'rotate(-135deg)',
    background: _palette.default.background.paper,
    borderRight: "solid 1px ".concat((0, _styles.alpha)(_palette.default.grey[500], 0.12)),
    borderBottom: "solid 1px ".concat((0, _styles.alpha)(_palette.default.grey[500], 0.12))
  });
}); // ----------------------------------------------------------------------

MenuPopover.propTypes = {
  children: _propTypes.default.node.isRequired,
  sx: _propTypes.default.object
};

function MenuPopover(_ref3) {
  var children = _ref3.children,
      sx = _ref3.sx,
      other = _objectWithoutProperties(_ref3, _excluded);

  return /*#__PURE__*/React.createElement(_material.Popover, _extends({
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    PaperProps: {
      sx: _objectSpread({
        mt: 1.5,
        ml: 0.5,
        overflow: 'inherit',
        boxShadow: "0 0 2px 0 ".concat(_palette.default.grey[50024], ", 0 20px 40px -4px ").concat(_palette.default.grey[50024]),
        border: "solid 1px ".concat(_palette.default.grey[5008]),
        width: 200
      }, sx)
    }
  }, other), /*#__PURE__*/React.createElement(ArrowStyle, {
    className: "arrow"
  }), children);
}