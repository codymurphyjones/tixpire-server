"use strict";

var _require = require("../utils/hubspot"),
    getPartners = _require.getPartners;

var webhook = require("./webhook");
/*const hubspot = test.Hubspot;
console.log(hubspot);
console.log(test);
/*

function getPartners(res,value=[],hasMore = false, offset = 0) {
	hubspot.companies.get({hasMore, offset, properties: ["name","type"]})
  		.then(results => {
				let companies = []
				let valueNoIndex = [];
				let index = 0;
				results.companies.map(item => {
					if(item.properties["type"]) {
						const {name, type} = item.properties;
						companies.push({name: name.value, type: type.value, id: item.companyId});
					}
				})
				
				let val =[ ...value,...companies ]
				if(results["has-more"]) {
					getPartners(res,val,results["has-more"],results["offset"])
				}
				else {
				
					res.json(val)
				}
  		})
  		.catch(err => {
    		console.error(err)
		  })
}*/


var Main = function Main(req, res) {
  var path = req.originalUrl.replace(req.route.path.slice(0, -2), "");
  var route = path.split("/")[1];

  switch (route) {
    case "partners":
      getPartners(res);
      break;

    case "webhooks":
      webhook(res, req);

    default:
      res.send("API call is invalid");
      break;
  }

  return {
    req: req,
    res: res
  };
};

module.exports = Main;