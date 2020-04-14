"use strict";

var _require = require("tixpire-api"),
    firestore = _require.firestore;

module.exports = function webhook(res, req) {
  try {
    var product = firestore.collection("webhooks").doc();
    product.set(req.body);
  } catch (_unused) {} finally {
    res.send("Webhooks");
  }
};