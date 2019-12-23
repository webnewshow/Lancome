import axios from 'axios'
let state = {
    serchlist: [],
    servalue: '',
    searchedlist: [],
    savelist: []
}
let mutations = {
    getsearchlist (state, serchlist) {
        state.serchlist = serchlist
    },
    getservalue (state, serchlist) {
        state.servalue = serchlist
    },
    searchedlist (state, serchedlist) {
        state.servalue = serchedlist
    },
    savelikelist (state, serchedlist) {
        state.savelist = serchedlist
        // console.log(serchedlist)
    }
}
let actions = {
    getsearchlist (aa, seartText) {
        axios({
            url: 'http://192.168.97.254:3000/search',
            method: 'get',
            params: {
                seartText
            }
        }).then(function (res) {
            // console.log(res)
            aa.commit('getsearchlist', res.data.data)
        })
    },
    // 猜悄喜欢
    getlikedata (aa, data) {
        // console.log(data)
        axios({
            url: 'http://192.168.97.254:3000/likelist',
            method: 'get',
            params: {
                data
            }
        }).then(function (res) {
            // console.log(res)
            aa.commit('savelikelist', res.data.data)
        })
    },
    getgoodslist (aa) {
        axios({
            method: 'get',
            url: 'http://192.168.97.254:3000/getgoodList'
        }).then(function (res) {
            aa.commit('savelikelist', res.data.data)
        })
    }

}

export default {
    state,
    mutations,
    actions
}
