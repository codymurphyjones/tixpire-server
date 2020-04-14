import Hubspot from 'hubspot'
const hubspot = new Hubspot({
  apiKey: '73c6c801-b156-412a-8041-91fd93699507',
  checkLimit: false // (Optional) Specify whether to check the API limit on each call. Default: true
});


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
}


export default { Hubspot: hubspot, getPartners };