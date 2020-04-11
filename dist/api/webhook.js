"use strict";

var _require = require("../utils/firebase"),
    firestore = _require.firestore;

module.exports = function webhook(res, req) {
  try {
    var product = firestore.collection("webhooks").doc();
    product.set(req.body);
  } catch (_unused) {}

  res.json("Webhooks");
};