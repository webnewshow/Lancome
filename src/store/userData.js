// import axios from 'axios'
let state = {
    userdatalist: []
}
let mutations = {
    userdata (state, data) {
        state.userdatalist = data
        window.localStorage.setItem('userInfo', JSON.stringify(state.userdatalist))
    }
}
// let actions = {
//     getUserData (aa) {
//         console.log(5656)
//         axios({
//             url: 'http://192.168.97.254:3000/getvipuser',
//             method: 'get'
//         }).then((res) => {
//             aa.commit('userdata', res.data.data)
//             window.localStorage.setItem('userinfo', JSON.stringify(res.data.data))
//         })
//     }
// }
export default {
    state,
    mutations
    // actions
}
