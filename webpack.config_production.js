var webpack = require('webpack');
var vue = require('vue-loader');

module.exports = {
	entry:'./src/entry.js',
	output:{
		path:'./static',
		filename:'b.js'
	},
	module:{
		loaders:[
			{
				test:/\.vue$/,
				loader:'vue'
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			}
		]
	},
	plugins:[
		new webpack.DefinePlugin({
			'process.env':{
				NODE_ENV:'"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
		})
	]
}