const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'react-hot-loader/path',
		path.join(__dirname,'app/index.js')
	],
	output: {
		path: path.join(__dirname, '/dist'),
		filename: '[name].js',
		publicPath: '/'
	},
	module: {
		rules: [
		{
			test: /(\.js|\.jsx)$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['es2015', 'react']
				}
			},
			exclude: /node_modules/
		},
		{
			test: /\.json?$/,
			use: {
				loader: 'json'
			}
		},
		{
			test: /.less$/,
			use: [
			{
				loader: 'style-loader'
			},
			{
				loader: 'css-loader',
				options: {
					modules: true,
					localIdentName: '[name]__[local]__[hash:base64:5]'
				}
			},
			{
				loader: 'less-loader'
			}
			]
		}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.tmpl.html',
			inject: 'body',
			filename: './index.html'
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	]
}