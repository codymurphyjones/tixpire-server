const dev = process.env.NODE_ENV !== 'production'
const port = process.argv[2].replace("$PORT", "3000");;
const runServer = require("./dist/");

console.log(runServer);
/*
function handler(req, res) {
	//res.send("Success");
	return { req, res }
}


runServer(handler)();
*/