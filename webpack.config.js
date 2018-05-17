module.exports = {
	devtool: 'eval-source-map',
	entry: './app/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
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
			test: /\.css$/,
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
			}
			]
		},
		{
			test: /.less/,
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
	}
}