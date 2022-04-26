"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _dashboardLayout = require("../components/Setting/dashboard-layout");

var _settingsNotifications = require("../components/Setting/settings-notifications");

var _settingsPassword = require("../components/Setting/settings-password");

var SettingPage = function SettingPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_material.Box, {
    component: "main",
    sx: {
      flexGrow: 1,
      py: 8
    }
  }, /*#__PURE__*/React.createElement(_material.Container, {
    maxWidth: "lg"
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    sx: {
      mb: 3
    },
    variant: "h4"
  }, "Settings"), /*#__PURE__*/React.createElement(_settingsNotifications.SettingsNotifications, null), /*#__PURE__*/React.createElement(_material.Box, {
    sx: {
      pt: 3
    }
  }, /*#__PURE__*/React.createElement(_settingsPassword.SettingsPassword, null)))));
};

SettingPage.getLayout = function (page) {
  return /*#__PURE__*/React.createElement(_dashboardLayout.DashboardLayout, null, page);
};

var _default = SettingPage;
exports.default = _default;