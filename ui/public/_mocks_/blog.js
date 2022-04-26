"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _faker = require("@faker-js/faker");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// ----------------------------------------------------------------------
var POST_TITLES = ['Whiteboard Templates By Industry Leaders', 'Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!', 'Designify Agency Landing Page Design', '✨What is Done is Done ✨', 'Fresh Prince', 'Six Socks Studio', 'vincenzo de cotiis’ crossing over showcases a research on contamination', 'Simple, Great Looking Animations in Your Project | Video Tutorial', '40 Free Serif Fonts for Digital Designers', 'Examining the Evolution of the Typical Web Design Client', 'Katie Griffin loves making that homey art', 'The American Dream retold through mid-century railroad graphics', 'Illustration System Design', 'CarZio-Delivery Driver App SignIn/SignUp', 'How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna', 'Tylko Organise effortlessly -3D & Motion Design', 'RAYO ?? A expanded visual arts festival identity', 'Anthony Burrill and Wired mag’s Andrew Diprose discuss how they made January’s Change Everything cover', 'Inside the Mind of Samuel Day', 'Portfolio Review: Is This Portfolio Too Creative?', 'Akkers van Margraten', 'Gradient Ticket icon', 'Here’s a Dyson motorcycle concept that doesn’t ‘suck’!', 'How to Animate a SVG with border-image'];

var posts = _toConsumableArray(Array(23)).map(function (_, index) {
  return {
    id: _faker.faker.datatype.uuid(),
    cover: "/static/mock-images/covers/cover_".concat((index + 1) % 25, ".jpg"),
    title: POST_TITLES[index + 1],
    createdAt: _faker.faker.date.past(),
    view: _faker.faker.datatype.number(),
    comment: _faker.faker.datatype.number(),
    share: _faker.faker.datatype.number(),
    favorite: _faker.faker.datatype.number(),
    author: {
      name: _faker.faker.name.findName(),
      avatarUrl: "/static/mock-images/avatars/avatar_".concat((index + 1) % 25, ".jpg")
    }
  };
});

var _default = posts;
exports.default = _default;