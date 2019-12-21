import axios from 'axios'
let state = {
    goodlist: []
}
let mutations = {
    changgoodslist (state, goodlist) {
        state.goodlist = goodlist
    }
}
let actions = {
    getgoodslist (aa) {
        axios({
            method: 'get',
            url: 'http://192.168.97.254:3000/getgoodList'
        }).then(function (res) {
            aa.commit('changgoodslist', res.data.data)
        })
    },
    // 销量
    getSales (aa) {
        axios({
            method: 'get',
            url: 'http://192.168.97.254:3000/goodsSales'
        }).then(function (res) {
            aa.commit('changgoodslist', res.data.data)
        })
    },
    // 价格由高到低
    getHigprice (aa) {
        axios({
            method: 'get',
            url: 'http://192.168.97.254:3000/goodsPriceDown'
        }).then(function (res) {
            aa.commit('changgoodslist', res.data.data)
        })
    },
    // 价格由低到高
    getLowprice (aa) {
        axios({
            method: 'get',
            url: 'http://192.168.97.254:3000/goodsPriceUp'
        }).then(function (res) {
            aa.commit('changgoodslist', res.data.data)
        })
    },
    // 根据多选框进行数据请求
    setGoods (aa, data) {
        axios({
            method: 'get',
            data: data,
            url: 'http://192.168.97.254:3000/'
        }).then(function (res) {
            aa.commit('changgoodslist', res.data.data)
        })
    },
    // 根据输入的价格进行数据渲染
    setPrice (aa, data) {
        axios({
            method: 'get',
            data: data,
            url: 'http://192.168.97.254:3000/'
        }).then(function (res) {
            aa.commit('changgoodslist', res.data.data)
        })
    }
}
export default {
    state,
    mutations,
    actions
}
