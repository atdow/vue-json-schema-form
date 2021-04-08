/*
 * @Author: atdow
 * @Date: 2021-04-08 09:57:31
 * @LastEditors: null
 * @LastEditTime: 2021-04-08 15:22:48
 * @Description: file content
 */
/**
 * Created by Liu.Jun on 2020/5/13 9:06 下午.
 */

const files = require.context('.', true, /\.js$/);
// console.log('files:', files.keys());

const modules = files.keys().reduce((preVal, curKey) => {
    if (curKey !== './index.js') {
        // fileName = fileContent
        preVal[curKey.replace(/(\.\/\d+\.|\/index\.js)/g, '')] = files(curKey).default;
    }
    return preVal;
}, {});
// console.log('modules:', modules)
export default modules;
