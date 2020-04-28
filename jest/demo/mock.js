/*
 * @Descripttion: Mock函数测试
 * @Author: tianxiangbing
 * @Date: 2020-04-27 18:13:40
 * @LastEditTime: 2020-04-27 18:19:14
 * @github: https://github.com/tianxiangbing
 */
//执行两次callback
const TestFunc = (data,callback)=>{
    callback(data[0]);
    callback(data[1]);
}
module.exports=TestFunc;