"use strict";

var port = process.argv[2].replace("$PORT", "3000");
console.log("meeeee");

var _require = require("../dist"),
    RunServer = _require.RunServer;

console.log(RunServer);

function handler(req, res) {
  res.send("Success");
  return {
    req: req,
    res: res
  };
}

RunServer(handler, port)();