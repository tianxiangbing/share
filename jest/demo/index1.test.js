/*
 * @Descripttion: 
 * @Author: tianxiangbing
 * @Date: 2020-04-27 15:35:38
 * @LastEditTime: 2020-04-28 19:06:03
 * @github: https://github.com/tianxiangbing
 */
const sum = require('./index1');
test('1+2等于3',()=>{
    expect(sum(1,2)).toBe(3);
})