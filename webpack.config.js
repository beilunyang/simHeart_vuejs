var webpack = require('webpack');
var vue = require('vue-loader');

module.exports = {
	entry:'./src/entry.js',
	output:{
		path:'./static',
		filename:'bulid.js'
	},
	module:{
		loaders:[
			{
				test:/\.vue$/,
				loader:'vue'
			}
		]
	}
}