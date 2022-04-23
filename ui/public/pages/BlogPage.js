"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlogPage;

var _reactRouterDom = require("react-router-dom");

var _material = require("@mui/material");

var _Iconify = _interopRequireDefault(require("../components/Iconify"));

var _BlogPostCard = _interopRequireDefault(require("../components/Blog/BlogPostCard"));

var _BlogPostsSort = _interopRequireDefault(require("../components/Blog/BlogPostsSort"));

var _BlogPostsSearch = _interopRequireDefault(require("../components/Blog/BlogPostsSearch"));

var _blog = _interopRequireDefault(require("../_mocks_/blog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// components
// mock
// ----------------------------------------------------------------------
var SORT_OPTIONS = [{
  value: 'latest',
  label: 'Latest'
}, {
  value: 'popular',
  label: 'Popular'
}, {
  value: 'oldest',
  label: 'Oldest'
}]; // ----------------------------------------------------------------------

function BlogPage() {
  return /*#__PURE__*/React.createElement(_material.Container, null, /*#__PURE__*/React.createElement(_material.Stack, {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    mb: 5
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "h4",
    gutterBottom: true
  }), /*#__PURE__*/React.createElement(_material.Button, {
    variant: "contained"
    /*component={RouterLink}*/
    ,
    to: "#",
    startIcon: /*#__PURE__*/React.createElement(_Iconify.default, {
      icon: "eva:plus-fill"
    })
  })), /*#__PURE__*/React.createElement(_material.Stack, {
    mb: 5,
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(_BlogPostsSearch.default, {
    posts: _blog.default
  }), /*#__PURE__*/React.createElement(_BlogPostsSort.default, {
    options: SORT_OPTIONS
  })), /*#__PURE__*/React.createElement(_material.Grid, {
    container: true,
    spacing: 3
  }, _blog.default.map(function (post, index) {
    return /*#__PURE__*/React.createElement(_BlogPostCard.default, {
      key: post.id,
      post: post,
      index: index
    });
  })));
}