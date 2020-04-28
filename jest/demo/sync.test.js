/*
 * @Descripttion: 异步函数测试案例
 * @Author: tianxiangbing
 * @Date: 2020-04-27 16:48:50
 * @LastEditTime: 2020-04-28 19:07:24
 * @github: https://github.com/tianxiangbing
 */
const {Ajax,Post} = require('./sync');
test('测试回调异步',(done)=>{
    let callback= (res)=>{
        try{
            console.log(res)
            expect(res).toBe('this is callback');
            done()
        }catch(ex){
            done(ex)
        }
    }
    Ajax(callback)
})
test('测试promise的异步操作',()=>{
    return Post("ok").then((res)=>{
        expect(res).toBe('ok');
    })
})

test('测试promise的异步操作',()=>{
    return  Post("x").catch((res)=>{
        console.log(res)
        expect(res).toBe('error');
    })
})