/*
 * @Author: Ying Zhang
 * @Date: 2021-11-18 19:09:12
 * @LastEditTime: 2021-11-18 19:09:12
 * @LastEditors: Ying Zhang
 * @Description: 
 * @FilePath: /react-搭建/react/postcss.config.js
 * 道阻且长，行则将至
 */
module.exports = {
	plugins: {
		'postcss-preset-env':{
			browsers: 'last 2 versions'
		}
	}
}