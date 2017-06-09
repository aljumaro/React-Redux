const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: './app/js/index',

	output: {
	  path: path.resolve(__dirname, 'dist'),
	  filename: 'js/[name].js',
	  chunkFilename: 'js/[name].chunk.js',
	  publicPath: '/'
	},

	resolve: {
		extensions: ['.js', '.jsx', '.less'],
		alias: {
			'appRoot': path.join(__dirname, 'app/js')
		}
	},

	module: {
		rules: [
			{
				test: /\.jsx$/, 
				exclude: /node_modules/,
				include: path.join(__dirname, 'app/js'),
				loader: 'babel-loader'
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './app/index.html'
		})
	],

	devServer: {
		historyApiFallback: true
	},

	devtool: "#eval-source-map",
}