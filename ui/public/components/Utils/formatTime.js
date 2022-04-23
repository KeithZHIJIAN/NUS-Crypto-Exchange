"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fDate = fDate;
exports.fDateTime = fDateTime;
exports.fDateTimeSuffix = fDateTimeSuffix;
exports.fToNow = fToNow;

var _dateFns = require("date-fns");

// ----------------------------------------------------------------------
function fDate(date) {
  return (0, _dateFns.format)(new Date(date), 'dd MMMM yyyy');
}

function fDateTime(date) {
  return (0, _dateFns.format)(new Date(date), 'dd MMM yyyy HH:mm');
}

function fDateTimeSuffix(date) {
  return (0, _dateFns.format)(new Date(date), 'dd/MM/yyyy hh:mm p');
}

function fToNow(date) {
  return (0, _dateFns.formatDistanceToNow)(new Date(date), {
    addSuffix: true
  });
}