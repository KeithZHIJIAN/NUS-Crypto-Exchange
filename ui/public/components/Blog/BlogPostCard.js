"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlogPostCard;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@mui/material/styles");

var _material = require("@mui/material");

var _formatTime = require("../Utils/formatTime");

var _formatNumber = require("../Utils/formatNumber");

var _SvgIconStyle = _interopRequireDefault(require("../SvgIconStyle"));

var _Iconify = _interopRequireDefault(require("../Iconify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
var CardMediaStyle = (0, _styles.styled)('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)'
});
var TitleStyle = (0, _styles.styled)(_material.Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical'
});
var AvatarStyle = (0, _styles.styled)(_material.Avatar)(function (_ref) {
  var theme = _ref.theme;
  return {
    zIndex: 9,
    width: 32,
    height: 32,
    position: 'absolute',
    left: theme.spacing(3),
    bottom: theme.spacing(-2)
  };
});
var InfoStyle = (0, _styles.styled)('div')(function (_ref2) {
  var theme = _ref2.theme;
  return {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(3),
    color: theme.palette.text.disabled
  };
});
var CoverImgStyle = (0, _styles.styled)('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
}); // ----------------------------------------------------------------------

BlogPostCard.propTypes = {
  post: _propTypes.default.object.isRequired,
  index: _propTypes.default.number
};

function BlogPostCard(_ref3) {
  var post = _ref3.post,
      index = _ref3.index;
  var cover = post.cover,
      title = post.title,
      view = post.view,
      comment = post.comment,
      share = post.share,
      author = post.author,
      createdAt = post.createdAt;
  var latestPostLarge = index === 0;
  var latestPost = index === 1 || index === 2;
  var POST_INFO = [{
    number: comment,
    icon: 'eva:message-circle-fill'
  }, {
    number: view,
    icon: 'eva:eye-fill'
  }, {
    number: share,
    icon: 'eva:share-fill'
  }];
  return /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    xs: 12,
    sm: latestPostLarge ? 12 : 6,
    md: latestPostLarge ? 6 : 3
  }, /*#__PURE__*/React.createElement(_material.Card, {
    sx: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(CardMediaStyle, {
    sx: _objectSpread(_objectSpread({}, (latestPostLarge || latestPost) && {
      pt: 'calc(100% * 4 / 3)',
      '&:after': {
        top: 0,
        content: "''",
        width: '100%',
        height: '100%',
        position: 'absolute',
        bgcolor: function bgcolor(theme) {
          return (0, _styles.alpha)(theme.palette.grey[900], 0.72);
        }
      }
    }), latestPostLarge && {
      pt: {
        xs: 'calc(100% * 4 / 3)',
        sm: 'calc(100% * 3 / 4.66)'
      }
    })
  }, /*#__PURE__*/React.createElement(_SvgIconStyle.default, {
    color: "paper",
    src: "/static/icons/shape-avatar.svg",
    sx: _objectSpread({
      width: 80,
      height: 36,
      zIndex: 9,
      bottom: -15,
      position: 'absolute',
      color: 'background.paper'
    }, (latestPostLarge || latestPost) && {
      display: 'none'
    })
  }), /*#__PURE__*/React.createElement(AvatarStyle, {
    alt: author.name,
    src: author.avatarUrl,
    sx: _objectSpread({}, (latestPostLarge || latestPost) && {
      zIndex: 9,
      top: 24,
      left: 24,
      width: 40,
      height: 40
    })
  }), /*#__PURE__*/React.createElement(CoverImgStyle, {
    alt: title,
    src: cover
  })), /*#__PURE__*/React.createElement(_material.CardContent, {
    sx: _objectSpread({
      pt: 4
    }, (latestPostLarge || latestPost) && {
      bottom: 0,
      width: '100%',
      position: 'absolute'
    })
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    gutterBottom: true,
    variant: "caption",
    sx: {
      color: 'text.disabled',
      display: 'block'
    }
  }, (0, _formatTime.fDate)(createdAt)), /*#__PURE__*/React.createElement(TitleStyle, {
    to: "#",
    color: "inherit",
    variant: "subtitle2",
    underline: "hover"
    /*component={RouterLink}*/
    ,
    sx: _objectSpread(_objectSpread({}, latestPostLarge && {
      typography: 'h5',
      height: 60
    }), (latestPostLarge || latestPost) && {
      color: 'common.white'
    })
  }, title), /*#__PURE__*/React.createElement(InfoStyle, null, POST_INFO.map(function (info, index) {
    return /*#__PURE__*/React.createElement(_material.Box, {
      key: index,
      sx: _objectSpread({
        display: 'flex',
        alignItems: 'center',
        ml: index === 0 ? 0 : 1.5
      }, (latestPostLarge || latestPost) && {
        color: 'grey.500'
      })
    }, /*#__PURE__*/React.createElement(_Iconify.default, {
      icon: info.icon,
      sx: {
        width: 16,
        height: 16,
        mr: 0.5
      }
    }), /*#__PURE__*/React.createElement(_material.Typography, {
      variant: "caption"
    }, (0, _formatNumber.fShortenNumber)(info.number)));
  })))));
}