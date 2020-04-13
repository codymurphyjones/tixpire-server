module.exports = {
	target: 'node',
  entry: {
    app: './src/runServer.js',
    api: './src/api/index.js'
  },
  output: {
	module: true,
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  node: {
  net: 'empty',
},
};