import axios from 'axios'
let state = {
    bannerlist: '',
    freshbannerlilst: ''
}
let mutations = {
    changebannerlist (state, bannerlists) {
        state.bannerlist = bannerlists
    },
    changefreshbannerlilst (state, freshlist) {
        state.freshbannerlilst = freshlist
    }
}
let actions = {
    getbannerlist (aa) {
        let state = '精华'
        axios({
            method: 'get',
            url: 'http://192.168.97.254:3000/getbanner',
            params: {
                state
            }
        }).then(function (res) {
            aa.commit('changebannerlist', res.data.data)
        })
    },
    getfreshbannerlilst (aa) {
        let state = '隔离防晒'
        axios({
            method: 'get',
            url: 'http://192.168.97.254:3000/getbanner',
            params: {
                state
            }
        }).then(function (res) {
            aa.commit('changefreshbannerlilst', res.data.data)
        })
    }
}

export default {
    state,
    mutations,
    actions
}
