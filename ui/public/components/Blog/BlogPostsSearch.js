"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlogPostsSearch;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@mui/material/styles");

var _material = require("@mui/material");

var _Iconify = _interopRequireDefault(require("../Iconify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// ----------------------------------------------------------------------
var PopperStyle = (0, _styles.styled)(function (props) {
  return /*#__PURE__*/React.createElement(_material.Popper, _extends({
    placement: "bottom-start"
  }, props));
})({
  width: '280px !important'
}); // ----------------------------------------------------------------------

BlogPostsSearch.propTypes = {
  posts: _propTypes.default.array.isRequired
};

function BlogPostsSearch(_ref) {
  var posts = _ref.posts;
  return /*#__PURE__*/React.createElement(_material.Autocomplete, {
    sx: {
      width: 280
    },
    autoHighlight: true,
    popupIcon: null,
    PopperComponent: PopperStyle,
    options: posts,
    getOptionLabel: function getOptionLabel(post) {
      return post.title;
    },
    isOptionEqualToValue: function isOptionEqualToValue(option, value) {
      return option.id === value.id;
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React.createElement(_material.TextField, _extends({}, params, {
        placeholder: "Search post...",
        InputProps: _objectSpread(_objectSpread({}, params.InputProps), {}, {
          startAdornment: /*#__PURE__*/React.createElement(_material.InputAdornment, {
            position: "start"
          }, /*#__PURE__*/React.createElement(_Iconify.default, {
            icon: 'eva:search-fill',
            sx: {
              ml: 1,
              width: 20,
              height: 20,
              color: 'text.disabled'
            }
          }))
        })
      }));
    }
  });
}