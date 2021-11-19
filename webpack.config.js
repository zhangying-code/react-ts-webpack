/*
 * @Author: Ying Zhang
 * @Date: 2021-11-18 18:26:53
 * @LastEditTime: 2021-11-19 11:11:24
 * @LastEditors: Ying Zhang
 * @Description: 
 * @FilePath: /react-搭建/react/webpack.config.js
 * 道阻且长，行则将至
 */
const path = require('path');
// 从模板生成一个HTML文件, 自动将bundle打包进HTML中
const HtmlWebpackPlugin = require("html-webpack-plugin")
// 打包前移除/清理 打包目录
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
// 命令行友好提示
const friendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin")
// webpack使用loaders去解析模块，webpack想要去如何理解Javascript、静态资源（图片、字体、css）、转移Typescript和Babel，都需要配置相应的loader规则。
// babel-loader - 使用Babel和webpack转译文件
// @babel/core - 转译ES2015+的代码

const webpack = require('webpack')


module.exports = {
	target: "web",
	mode: 'development', // 开发环境
	devtool: 'inline-source-map', // 报错的时候更好的追踪代码
	devServer: { // webpack-dev-server 保存代码的时候会自动编译代码, 自动刷新浏览器
		static: {
      directory: path.join(__dirname, './dist'),
    },
		compress: true, // 启用 gzip compression：
		hot: true,
		open: true,
		// port: 9090,
		// proxy:{
		// 	'/api':'http:localhost:8080'
		// }
	},
	entry:{
		app: './src/index.js'
	},
	output:{
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{ // js
				test : /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			// CSS, PostCSS, and Sass
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', {
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					}, 'postcss-loader'],
			},
			{ // 图片
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource'
			},
			{ // 字体
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},
	],
	},

	plugins:[
		new HtmlWebpackPlugin({
			title: 'react-index',
			template: path.resolve(__dirname, './public/index.html'),
			filename: 'index.html'
		}),
		new CleanWebpackPlugin(),
		new friendlyErrorsWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	]
	
}