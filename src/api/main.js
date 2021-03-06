const {getPartners} = require("../utils/hubspot")
const webhook = require("./webhook");
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

const Main = (req,res) => {

	const path = req.originalUrl.replace(req.route.path.slice(0, -2),"");
	const route = path.split("/")[1];
	switch(route) {
		case "partners":
			getPartners(res);
		break;

		case "webhooks":
			webhook(res,req);
		default:
			res.send("API call is invalid")
		break;
	}
	
	return { req, res }
}
          
module.exports = Main