"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = runServer;

var express = require('express'); //const next = require('next')


var cors = require('cors');

var dev = process.env.NODE_ENV !== 'production';

var api = require("./api");

var ticketing = require("./ticketing");

var bodyParser = require('body-parser');

var utils = require('./utils');

function runServer(handle, port) {
  console.log("Starting");
  var server = express();
  console.log("Server init");
  server.options('*', cors());
  server.use(bodyParser.json());
  server.use(express["static"]('public'));

  try {
    console.log(process.env.TESTVALUE);
  } catch (e) {}

  server.route('/ticketing/*').all(function (req, res) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    return ticketing(req, res);
  });
  server.route('/api*').all(function (req, res) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    return api(req, res);
  });
  server.get('*', function (req, res) {
    return handle(req, res);
  });
  server.post('*', function (req, res) {
    return handle(req, res);
  });
  server.listen(port, function (err) {
    if (err) throw err;
    console.log('> Ready on http://localhost:' + port);
  });
}