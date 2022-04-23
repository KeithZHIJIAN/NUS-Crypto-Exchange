"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AuthSocial;

var _material = require("@mui/material");

var _Iconify = _interopRequireDefault(require("./Iconify"));

var _reactGoogleLogin = require("react-google-login");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ----------------------------------------------------------------------
function AuthSocial(props) {
  var loginsuccess = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(response) {
      var profileObj, email, password, photoURL;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              profileObj = response.profileObj;
              email = profileObj.email + '(Google)';
              password = 'Google';
              photoURL = profileObj.imageUrl;
              _context.next = 6;
              return props.login(email, password, photoURL);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loginsuccess(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var registersuccess = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(response) {
      var profileObj, firstName, lastName, email, password, photoURL;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              profileObj = response.profileObj;
              firstName = profileObj.givenName;
              lastName = profileObj.familyName;
              email = profileObj.email + '(Google)';
              password = 'Google';
              photoURL = profileObj.imageUrl;
              _context2.next = 8;
              return props.register(firstName, lastName, email, password, photoURL);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function registersuccess(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var loginfailure = function loginfailure() {
    console.log("Google Login Failure");
  };

  var registerfailure = function registerfailure() {
    console.log("Google Register Failure");
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_material.Stack, {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/React.createElement(_reactGoogleLogin.GoogleLogin, {
    clientId: "610278992963-sjmc5hsd6vvui5f3a1fl2dtvfmtsm799.apps.googleusercontent.com",
    render: function render(renderProps) {
      return /*#__PURE__*/React.createElement(_material.Button, {
        fullWidth: true,
        size: "large",
        color: "inherit",
        variant: "outlined",
        onClick: renderProps.onClick
      }, /*#__PURE__*/React.createElement(_Iconify.default, {
        icon: "eva:google-fill",
        color: "#DF3E30",
        height: 24
      }), props.id);
    }
    /* buttonText={props.id} */
    ,
    onSuccess: props.id == 'login' ? loginsuccess : registersuccess,
    onFailure: props.id == 'login' ? loginfailure : registerfailure
  })), /*#__PURE__*/React.createElement(_material.Divider, {
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