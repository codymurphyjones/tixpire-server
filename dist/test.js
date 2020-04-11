"use strict";

var dev = process.env.NODE_ENV !== 'production';
var port = process.argv[2].replace("$PORT", "3000");
;

var _require = require("../dist/"),
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