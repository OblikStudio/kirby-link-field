var path = require('path')
var VueLoaderPlugin = require('vue-loader/lib/plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: path.join(__dirname, 'app', 'index.js'),
	output: {
		filename: 'index.js',
		path: __dirname
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'index.css'
		})
	],
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
          'sass-loader',
				]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					compilerOptions: {
						whitespace: 'condense'
					}
				}
			}
		]
	}
}
