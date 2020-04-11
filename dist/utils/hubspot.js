"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _hubspot = _interopRequireDefault(require("hubspot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var hubspot = new _hubspot["default"]({
  apiKey: '73c6c801-b156-412a-8041-91fd93699507',
  checkLimit: false // (Optional) Specify whether to check the API limit on each call. Default: true

});
var _default = hubspot;
exports["default"] = _default;
module.exports = exports.default;