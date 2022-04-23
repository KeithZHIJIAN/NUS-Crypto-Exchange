"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardLayout = void 0;

var _react = require("react");

var _material = require("@mui/material");

var _styles = require("@mui/material/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DashboardLayoutRoot = (0, _styles.styled)('div')(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64
  }, theme.breakpoints.up('lg'), {
    paddingLeft: 280
  });
});

var DashboardLayout = function DashboardLayout(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DashboardLayoutRoot, null, /*#__PURE__*/React.createElement(_material.Box, {
    sx: {
      display: 'flex',
      flex: '1 1 auto',
      flexDirection: 'column',
      width: '100%'
    }
  }, children)));
};

exports.DashboardLayout = DashboardLayout;