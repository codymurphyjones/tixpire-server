"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RunServer = exports.Utils = void 0;

var _utils = _interopRequireDefault(require("./utils"));

var _runServer = _interopRequireDefault(require("./runServer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
function runServer(handle, port) {
 console.log("Starting");
 try {
	 console.log(process.env.TESTVALUE);
 }
 catch(e){}
  const server = express()
  console.log("Server init");
  server.options('*', cors()) 
  server.use(bodyParser.json());
  server.use(express.static('public'));
  
server.route('/ticketing/*').all(function (req, res) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    
    return ticketing(req,res);
  })
  
  
server.route('/api*').all(function (req, res) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    return api(req,res);
  })
    
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  
  server.post('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:' + port);
  })
}*/
var Utils = _objectSpread({}, _utils["default"]);

exports.Utils = Utils;

var RunServer = function RunServer(handle, port) {
  return function () {
    return (0, _runServer["default"])(handle, port);
  };
};

exports.RunServer = RunServer;