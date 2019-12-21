// 封装axios请求 Promise
import axios from 'axios'
// import {
//   api
// } from './api'
// qs 用来序列化post请求提交的参数
import qs from 'qs'

// 请求拦截
axios.interceptors.request.use(function(config) {
    let token = window.localStorage.getItem('token')
    if (token) {
        // 将token存入config.headers
        config.headers['token'] = token
    }
    return config
}, function(error) {

})


// axios.defaults.baseURL = api;
// post get 请求都能发送
let request = function(url, method = 'get', data = {}) {
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            method: method,
            // post
            data: qs.stringify(data),
            // get
            params: data
        }).then((res) => {
            // 请求成功
            resolve(res.data)
        }).catch((error) => {
            // 请求失败
            reject(error)
        })
    })
}

//get
let get = function(url, data) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: data
        }).then((res) => {
            // 请求成功
            resolve(res.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

// post
let post = function(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data)).then((res) => {
            // 请求成功
            resolve(res.data)
        }).catch((error) => {
            reject(error)
        })
    })
}
// 导出
export {
    request,
    get,
    post
}
