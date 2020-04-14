const {firestore} = require("tixpire-api")

module.exports = function webhook(res,req) {
	try {
    let product = firestore.collection("webhooks").doc();
    product.set(req.body)
	
	}
	catch {} finally {
				
	res.send("Webhooks")
	}

}
