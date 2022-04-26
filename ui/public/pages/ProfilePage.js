"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _accountProfile = require("../components/Profile/account-profile");

var _accountProfileDetails = require("../components/Profile/account-profile-details");

var _dashboardLayout = require("../components/Profile/dashboard-layout");

var ProfilePage = function ProfilePage() {
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
  }, "Account"), /*#__PURE__*/React.createElement(_material.Grid, {
    container: true,
    spacing: 3
  }, /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    lg: 4,
    md: 6,
    xs: 12
  }, /*#__PURE__*/React.createElement(_accountProfile.AccountProfile, null)), /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    lg: 8,
    md: 6,
    xs: 12
  }, /*#__PURE__*/React.createElement(_accountProfileDetails.AccountProfileDetails, null))))));
};

ProfilePage.getLayout = function (page) {
  return /*#__PURE__*/React.createElement(_dashboardLayout.DashboardLayout, null, page);
};

var _default = ProfilePage;
exports.default = _default;