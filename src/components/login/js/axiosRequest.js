// 集中发送ajax
// import Vue from 'vue'
import {
    request,
    get,
    post
} from './axios.js'


// params 是一个对象
// 包含data
// 登录请求
let loginRequest = (params) => {
    request('login', 'post', params.data).then((res) => {
        params.success(res)
    }).catch((error) => {
        params.error()
    })
}


// 导出
export {
    loginRequest
}
