const {firestore} = require("../utils/firebase")

module.exports = function webhook(res,req) {
	try {
    let product = firestore.collection("webhooks").doc();
    product.set(req.body)
	}
	catch {}
				
	res.json("Webhooks")

}
