"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlogPostsSort;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// ----------------------------------------------------------------------
BlogPostsSort.propTypes = {
  options: _propTypes.default.array,
  onSort: _propTypes.default.func
};

function BlogPostsSort(_ref) {
  var options = _ref.options,
      onSort = _ref.onSort;
  return /*#__PURE__*/React.createElement(_material.TextField, {
    select: true,
    size: "small",
    value: "latest",
    onChange: onSort
  }, options.map(function (option) {
    return /*#__PURE__*/React.createElement(_material.MenuItem, {
      key: option.value,
      value: option.value
    }, option.label);
  }));
}