"use strict";

var Main = function Main(req, res) {
  var path = req.originalUrl.replace(req.route.path.slice(0, -2), "");
  var route = path.split("/")[1];
  /*switch(route) {
  	case "partners"
  }*/

  res.send("dope");
  return {
    req: req,
    res: res
  };
};

module.exports = Main;