/*
 * @Descripttion: 异步调用测试
 * @Author: tianxiangbing
 * @Date: 2020-04-27 16:43:16
 * @LastEditTime: 2020-04-27 17:38:58
 * @github: https://github.com/tianxiangbing
 */

const Ajax = (callback)=>{
    setTimeout(()=>{
        callback('this is callback')
    },1000)
}
const Post = (type)=>{
    return new Promise((resove,reject)=>{
        setTimeout(()=>{
            if(type=='ok'){
                resove('ok')
            }else{
                reject('error')
            }
        },1000)
    })
}
module.exports={
    Ajax,
    Post
}