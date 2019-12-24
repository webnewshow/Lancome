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
    },
    deldata (state, id) {
        if (state.selectLists != '') {
            for (let item of state.selectLists) {
                let x = state.selectLists.length
                if (item.g_id == id) {
                    while (x--) {
                        if (state.selectLists[x] == item) {
                            console.log(x)
                            state.selectLists.splice(x, 1)
                        }
                    }
                    window.localStorage.setItem('selectInfo', JSON.stringify(state.selectLists))
                }
            }
        } else {
            let selists = window.localStorage.getItem('selectInfo')
            let sedatalists = JSON.parse(selists)
            for (let item of sedatalists) {
                let x = sedatalists.length
                if (item.g_id == id) {
                    while (x--) {
                        if (sedatalists[x] == item) {
                            sedatalists.splice(x, 1)
                        }
                    }
                    window.localStorage.setItem('selectInfo', JSON.stringify(sedatalists))
                }
            }
        }
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
