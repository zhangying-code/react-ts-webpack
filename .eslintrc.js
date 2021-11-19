/*
 * @Author: Ying Zhang
 * @Date: 2021-11-19 12:56:38
 * @LastEditTime: 2021-11-19 12:56:39
 * @LastEditors: Ying Zhang
 * @Description: 
 * @FilePath: /react-搭建/react/.eslintrc.js
 * 道阻且长，行则将至
 */
module.exports = {  // 重启编辑器，才可应用Eslint的配置。
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {},
  plugins: ['react-hooks'],
  rules: {
    'no-restricted-syntax': 0,
    'no-param-reassign': 0,
    'no-unused-expressions': 0,
  },
};