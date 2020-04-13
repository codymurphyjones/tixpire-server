"use strict";

var port = process.argv[2].replace("$PORT", "3000");
console.log("meeeee");

var _require = require("../"),
    server = _require.server;

console.log(server);

function handler(req, res) {
  res.send("Success");
  return {
    req: req,
    res: res
  };
}

server(handler, port)();