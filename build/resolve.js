"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _AddCardSuccessEvent = require("./AddCardSuccessEvent");

var _AddCardFailEvent = require("./AddCardFailEvent");

var _DeleteCardSuccessEvent = require("./DeleteCardSuccessEvent");

var _ExecuteChargeSuccessEvent = require("./ExecuteChargeSuccessEvent");

var _ExecuteChargeFailEvent = require("./ExecuteChargeFailEvent");

var _RefundChargeSuccessEvent = require("./RefundChargeSuccessEvent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var resolve = function resolve(labels) {
  if (labels.includes(_AddCardSuccessEvent.AddCardSuccessEventType)) {
    return _AddCardSuccessEvent.AddCardSuccessEvent;
  } else if (labels.includes(_AddCardFailEvent.AddCardFailEventType)) {
    return _AddCardFailEvent.AddCardFailEvent;
  } else if (labels.includes(_DeleteCardSuccessEvent.DeleteCardSuccessEventType)) {
    return _DeleteCardSuccessEvent.DeleteCardSuccessEvent;
  } else if (labels.includes(_ExecuteChargeSuccessEvent.ExecuteChargeSuccessEventType)) {
    return _ExecuteChargeSuccessEvent.ExecuteChargeSuccessEvent;
  } else if (labels.includes(_ExecuteChargeFailEvent.ExecuteChargeFailEventType)) {
    return _ExecuteChargeFailEvent.ExecuteChargeFailEvent;
  } else if (labels.includes(_RefundChargeSuccessEvent.RefundChargeSuccessEventType)) {
    return _RefundChargeSuccessEvent.RefundChargeSuccessEvent;
  }

  return false;
};

var _default = resolve;
exports["default"] = _default;