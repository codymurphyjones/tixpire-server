"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _hubspot = _interopRequireDefault(require("hubspot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var hubspot = new _hubspot["default"]({
  apiKey: '73c6c801-b156-412a-8041-91fd93699507',
  checkLimit: false // (Optional) Specify whether to check the API limit on each call. Default: true

});

function getPartners(res) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var hasMore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  hubspot.companies.get({
    hasMore: hasMore,
    offset: offset,
    properties: ["name", "type"]
  }).then(function (results) {
    var companies = [];
    var valueNoIndex = [];
    var index = 0;
    results.companies.map(function (item) {
      if (item.properties["type"]) {
        var _item$properties = item.properties,
            name = _item$properties.name,
            type = _item$properties.type;
        companies.push({
          name: name.value,
          type: type.value,
          id: item.companyId
        });
      }
    });
    var val = [].concat(_toConsumableArray(value), companies);

    if (results["has-more"]) {
      getPartners(res, val, results["has-more"], results["offset"]);
    } else {
      res.json(val);
    }
  })["catch"](function (err) {
    console.error(err);
  });
}

var _default = {
  Hubspot: hubspot,
  getPartners: getPartners
};
exports["default"] = _default;
module.exports = exports.default;