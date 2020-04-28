/*
 * @Descripttion: Mock函数测试
 * @Author: tianxiangbing
 * @Date: 2020-04-27 18:18:02
 * @LastEditTime: 2020-04-27 18:21:25
 * @github: https://github.com/tianxiangbing
 */
const TestFunc= require('./mock');
test('测试函数的调用mock',()=>{
    let callback = jest.fn();
    TestFunc([2,3],callback)
})