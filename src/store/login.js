import axios from 'axios'
let api = 'http://127.0.0.1:3000/'
let state = {
    info: '',
    token: ''
}
let mutations = {
    changeInfo (state, data) {
        console.log(data)
        state.info = data.info.email
        state.token = data.token
    }
}
let actions = {
    // 获取验证码请求
    getcode (e, email) {
        axios({
            url: api + 'getCode',
            method: 'get',
            params: {
                email
            }
        }).then((res) => {
            console.log(res)
            if (res.status === 200) {

            }
        }).catch((err) => {
            console.log(err)
        })
    }
    // 注册请求
    // register (e, data) {
    //     axios({
    //         url: api + 'register',
    //         method: 'post',
    //         params: {
    //             email: data.email,
    //             pwd: data.pwd,
    //             code: data.code
    //         }
    //     }).then((res) => {
    //         console.log(res)
    //     })
    // }
}

export default {
    state,
    mutations,
    actions
}
