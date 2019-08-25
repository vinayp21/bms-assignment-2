const { resolve } = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = function web(env) {
	return {
		entry: {
			main: './src/index.js'
		},
		mode: env.production ? 'production' : 'development',
		output: {
			path: resolve(__dirname, 'server/public'),
			filename: 'js/[name].js',
			publicPath: '/'
		},
		devServer: {
			contentBase: resolve(__dirname, 'dist'),
			historyApiFallback: true
		},
		devtool: 'source-map',
		module: {
			rules: [
				{
					enforce: 'pre',
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'eslint-loader'
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				},
				{
					test: /\.scss$/,
					use: ['style-loader', 'css-loader', 'sass-loader']
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				}
			]
		},
		plugins: [
			new HtmlWebPackPlugin({
				template: './index.html',
				filename: './index.html'
			})
		],
		optimization: {
			splitChunks: {
				chunks: 'all'
			}
		},
		resolve: {
			alias: {}
		}
	};
};
