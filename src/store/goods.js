import axios from 'axios'
let state = {
    goodlist: [],
    clinckdata: ''
}
let mutations = {
    changgoodslist (state, goodlist) {
        state.goodlist = goodlist
    },
    getclinckdata (state, goodlist) {
        state.goodlist = goodlist
    }
}
let actions = {
    getgoodslist (aa) {
        let state = '已上架'
        axios({
            method: 'get',
            url: 'http://192.168.97.254:3000/getgoodstate',
            params: {
                state
            }
        }).then(function (res) {
            aa.commit('changgoodslist', res.data.data)
        })
    },
    // 销量
    getSales (aa) {
        let state = 1
        axios({
            method: 'get',
            url: 'http://192.168.97.254:3000/goodsSales',
            params: {
                state
            }
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
        // console.log(data)
        axios({
            method: 'get',
            // data: data,
            url: 'http://192.168.97.254:3000/screen',
            params: {
                data
            }
        }).then(function (res) {
            aa.commit('changgoodslist', res.data.data)
        })
    },
    // 根据输入的价格进行数据渲染
    setPrice (aa, data) {
        console.log(data)
        axios({
            method: 'get',
            url: 'http://192.168.97.254:3000/setPrice',
            params: {
                data
            }
        }).then(function (res) {
            aa.commit('changgoodslist', res.data.data)
        })
    },
    // 根据产品类型进行数据渲染
    setType (aa, data) {
        axios({
            method: 'get',
            url: 'http://192.168.97.254:3000/setType',
            params: {
                data
            }
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
