import axios from 'axios'
let state = {
    openWinMessage: '',
    getMinSrc: ''
}
let mutations = {
    OpenWinPop (state, data) {
        state.GoodsId = data
        let PopWindow = document.querySelector('.skin-max')
        let sw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        if (PopWindow.classList.contains('on')) {
            PopWindow.classList.remove('on')
            document.body.style.overflow = 'visible'
        } else if (sw >= 1240) {
            PopWindow.classList.add('on')
            document.body.style.overflow = 'hidden'
        } else {
            window.location.href = '/detail'
        }
    },
    OpenMessages (state, data) {
        console.log(data.data.data[0])
        state.openWinMessage = data.data.data[0]
    },
    getSrc (state, src) {
        state.getMinSrc = src
    }
}
let actions = {
    getGoodsMessages (op) {
        let goodsId = state.GoodsId
        axios({
            method: 'get',
            url: 'http://192.168.97.254:3000/goodsdeatail',
            params: {
                id: goodsId
            }
        }).then(res => {
            op.commit('OpenMessages', res)
        })
    }
}
export default {
    state,
    mutations,
    actions
}
