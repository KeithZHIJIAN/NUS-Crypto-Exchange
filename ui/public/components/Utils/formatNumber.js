"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fCurrency = fCurrency;
exports.fData = fData;
exports.fNumber = fNumber;
exports.fPercent = fPercent;
exports.fShortenNumber = fShortenNumber;

var _lodash = require("lodash");

var _numeral = _interopRequireDefault(require("numeral"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------------------------------------------------------
function fCurrency(number) {
  return (0, _numeral.default)(number).format(Number.isInteger(number) ? '$0,0' : '$0,0.00');
}

function fPercent(number) {
  return (0, _numeral.default)(number / 100).format('0.0%');
}

function fNumber(number) {
  return (0, _numeral.default)(number).format();
}

function fShortenNumber(number) {
  return (0, _lodash.replace)((0, _numeral.default)(number).format('0.00a'), '.00', '');
}

function fData(number) {
  return (0, _numeral.default)(number).format('0.0 b');
}