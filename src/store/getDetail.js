import axios from 'axios'
let state = {
    gooddelist: [],
    selectLists: []
}
let mutations = {
    cgoodslist (state, goodlist) {
        state.gooddelist = goodlist
    },
    addselectlist (state, data) {
        // 先存入数组
        state.selectLists.push(data)
        // 去重处理
        let newArr = []
        for (let item of state.selectLists) {
            if (newArr.indexOf(item) === -1) {
                newArr.push(item)
            }
        }
        // 去重后的数组
        state.selectLists = newArr
        // 把去重后的数组存入本地
        window.localStorage.setItem('selectInfo', JSON.stringify(state.selectLists))
    }
}
let actions = {
    getgoodsfordetail (aa) {
        axios({
            method: 'get',
            url: 'http://192.168.97.254:3000/getgoodList'
        }).then(function (res) {
            aa.commit('cgoodslist', res.data.data)
        })
    }
}
export default {
    state,
    mutations,
    actions
}
