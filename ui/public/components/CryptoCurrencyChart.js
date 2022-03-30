"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CryptoCurrencyChart;

var _reactTsTradingviewWidgets = require("react-ts-tradingview-widgets");

function CryptoCurrencyChart() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactTsTradingviewWidgets.CryptoCurrencyMarket, {
    colorTheme: "light",
    width: "100%",
    height: 300
  }));
}