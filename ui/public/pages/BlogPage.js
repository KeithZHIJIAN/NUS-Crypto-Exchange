"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlogPage;

var _reactRouterDom = require("react-router-dom");

var _material = require("@mui/material");

var _component = _interopRequireDefault(require("@loadable/component"));

var _blog = _interopRequireDefault(require("../_mocks_/blog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Iconify = (0, _component.default)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/Iconify'));
  });
});
var BlogPostCard = (0, _component.default)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/Blog/BlogPostCard'));
  });
});
var BlogPostsSort = (0, _component.default)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/Blog/BlogPostsSort'));
  });
});
var BlogPostsSearch = (0, _component.default)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/Blog/BlogPostsSearch'));
  });
}); // mock

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
    startIcon: /*#__PURE__*/React.createElement(Iconify, {
      icon: "eva:plus-fill"
    })
  })), /*#__PURE__*/React.createElement(_material.Stack, {
    mb: 5,
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(BlogPostsSearch, {
    posts: _blog.default
  }), /*#__PURE__*/React.createElement(BlogPostsSort, {
    options: SORT_OPTIONS
  })), /*#__PURE__*/React.createElement(_material.Grid, {
    container: true,
    spacing: 3
  }, _blog.default.map(function (post, index) {
    return /*#__PURE__*/React.createElement(BlogPostCard, {
      key: post.id,
      post: post,
      index: index
    });
  })));
}