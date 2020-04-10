const express = require('express')
//const next = require('next')
const cors = require('cors')
const dev = process.env.NODE_ENV !== 'production'
const port = process.argv[2].replace("$PORT", "3000");;
const api = require("./api");
const ticketing = require("./ticketing");
const bodyParser = require('body-parser');
const utils = require('./utils');

function runServer(handle) {
 console.log("Starting");
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
    console.log('> Ready on http://localhost:3000');
  })
}

export const Utils = {
	...utils
}

export const RunServer = (handle) => {
	return () => runServer(handle);
}
