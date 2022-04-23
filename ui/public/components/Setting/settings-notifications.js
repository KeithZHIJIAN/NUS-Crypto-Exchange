"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsNotifications = void 0;

var _material = require("@mui/material");

var SettingsNotifications = function SettingsNotifications(props) {
  return /*#__PURE__*/React.createElement("form", props, /*#__PURE__*/React.createElement(_material.Card, null, /*#__PURE__*/React.createElement(_material.CardHeader, {
    subheader: "Manage the notifications",
    title: "Notifications"
  }), /*#__PURE__*/React.createElement(_material.Divider, null), /*#__PURE__*/React.createElement(_material.CardContent, null, /*#__PURE__*/React.createElement(_material.Grid, {
    container: true,
    spacing: 6,
    wrap: "wrap"
  }, /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    md: 4,
    sm: 6,
    sx: {
      display: 'flex',
      flexDirection: 'column'
    },
    xs: 12
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    color: "textPrimary",
    gutterBottom: true,
    variant: "h6"
  }, "Notifications"), /*#__PURE__*/React.createElement(_material.FormControlLabel, {
    control: /*#__PURE__*/React.createElement(_material.Checkbox, {
      color: "primary",
      defaultChecked: true
    }),
    label: "Email"
  }), /*#__PURE__*/React.createElement(_material.FormControlLabel, {
    control: /*#__PURE__*/React.createElement(_material.Checkbox, {
      color: "primary",
      defaultChecked: true
    }),
    label: "Push Notifications"
  }), /*#__PURE__*/React.createElement(_material.FormControlLabel, {
    control: /*#__PURE__*/React.createElement(_material.Checkbox, null),
    label: "Text Messages"
  }), /*#__PURE__*/React.createElement(_material.FormControlLabel, {
    control: /*#__PURE__*/React.createElement(_material.Checkbox, {
      color: "primary",
      defaultChecked: true
    }),
    label: "Phone calls"
  })), /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    md: 4,
    sm: 6,
    sx: {
      display: 'flex',
      flexDirection: 'column'
    },
    xs: 12
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    color: "textPrimary",
    gutterBottom: true,
    variant: "h6"
  }, "Messages"), /*#__PURE__*/React.createElement(_material.FormControlLabel, {
    control: /*#__PURE__*/React.createElement(_material.Checkbox, {
      color: "primary",
      defaultChecked: true
    }),
    label: "Email"
  }), /*#__PURE__*/React.createElement(_material.FormControlLabel, {
    control: /*#__PURE__*/React.createElement(_material.Checkbox, null),
    label: "Push Notifications"
  }), /*#__PURE__*/React.createElement(_material.FormControlLabel, {
    control: /*#__PURE__*/React.createElement(_material.Checkbox, {
      color: "primary",
      defaultChecked: true
    }),
    label: "Phone calls"
  })))), /*#__PURE__*/React.createElement(_material.Divider, null), /*#__PURE__*/React.createElement(_material.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'flex-end',
      p: 2
    }
  }, /*#__PURE__*/React.createElement(_material.Button, {
    color: "primary",
    variant: "contained",
    onClick: function onClick() {
      alert("not developed yet, please contact the developer!");
    }
  }, "Save"))));
};

exports.SettingsNotifications = SettingsNotifications;