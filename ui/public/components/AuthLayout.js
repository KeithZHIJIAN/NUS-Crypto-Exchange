"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AuthLayout;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@mui/material/styles");

var _material = require("@mui/material");

var _Logo = _interopRequireDefault(require("./Logo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
var HeaderStyle = (0, _styles.styled)('header')(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: theme.spacing(3),
    justifyContent: 'flex-start'
  }, theme.breakpoints.up('md'), {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7)
  });
}); // ----------------------------------------------------------------------

AuthLayout.propTypes = {
  children: _propTypes.default.node
};

function AuthLayout(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/React.createElement(HeaderStyle, null, /*#__PURE__*/React.createElement(_Logo.default, null), /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "body2",
    sx: {
      display: {
        xs: 'none',
        sm: 'block'
      },
      mt: {
        md: 0
      },
      textAlign: 'left'
    }
  }, children));
}