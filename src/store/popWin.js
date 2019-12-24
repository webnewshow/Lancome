import axios from 'axios'
let state = {
    openWinMessage: {
        g_color: '#0C151E',
        g_content: ' 因数量有限，同一个收货地址或者同一手机号码限购5件，敬请谅解。',
        g_count: null,
        g_createTime: '2019-12-24T10:19:46.000Z',
        g_enTitle: 'LA-VIE-EST-BELLE Valueset',
        g_id: 86,
        g_img: 'upload_3d25b63ea85d13a690fbff90b87c8c1d.jpg,upload_15e58bf8d36c224f8dfdd52bedbb0839.jpg,upload_c41bbe189101944830652b1e6c4cbd0b.jpg',
        g_num: null,
        g_price: 520,
        g_sales: null,
        g_spec: '30',
        g_state: '已上架',
        g_title: '【圣诞礼】美丽人生香水（圣诞限量版）',
        g_type: '香水'
    }
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
        state.openWinMessage = data.data.data[0]
        console.log(state.openWinMessage)
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
            console.log(res)
            op.commit('OpenMessages', res)
        })
    }
}
export default {
    state,
    mutations,
    actions
}
