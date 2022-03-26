"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AuthSocial;

var _material = require("@mui/material");

var _Iconify = _interopRequireDefault(require("./Iconify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// component
// ----------------------------------------------------------------------
function AuthSocial() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_material.Stack, {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/React.createElement(_material.Button, {
    fullWidth: true,
    size: "large",
    color: "inherit",
    variant: "outlined"
  }, /*#__PURE__*/React.createElement(_Iconify.default, {
    icon: "eva:google-fill",
    color: "#DF3E30",
    height: 24
  })), /*#__PURE__*/React.createElement(_material.Button, {
    fullWidth: true,
    size: "large",
    color: "inherit",
    variant: "outlined"
  }, /*#__PURE__*/React.createElement(_Iconify.default, {
    icon: "eva:facebook-fill",
    color: "#1877F2",
    height: 24
  })), /*#__PURE__*/React.createElement(_material.Button, {
    fullWidth: true,
    size: "large",
    color: "inherit",
    variant: "outlined"
  }, /*#__PURE__*/React.createElement(_Iconify.default, {
    icon: "eva:twitter-fill",
    color: "#1C9CEA",
    height: 24
  }))), /*#__PURE__*/React.createElement(_material.Divider, {
    sx: {
      my: 3
    }
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, "OR")));
}