const port = process.argv[2].replace("$PORT", "3000");;
const {RunServer} = require("../dist/");

console.log(RunServer);

function handler(req, res) {
	res.send("Success");
	return { req, res }
}


RunServer(handler, port)();
