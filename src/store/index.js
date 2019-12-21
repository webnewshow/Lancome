import vue from 'vue'
import vuex from 'vuex'
import login from './login.js'
import indexbanner from './indexbanner.js'
import popup from './popWin.js'
import goods from './goods.js'
import search from './search.js'
import getDetail from './getDetail.js'
import userData from './userData.js'
vue.use(vuex)

export default new vuex.Store({
    modules: {
        login,
        popup,
        index: indexbanner,
        goods,
        search,
        getDetail,
        userData
    },
    state: {
        cards: 1
    }
})
