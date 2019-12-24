// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import md5 from 'js-md5'
import 'element-ui/lib/theme-chalk/index.css'
// sduhf
import './css/public.less'
import './css/button.less'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
Vue.config.productionTip = false
Vue.prototype.$md5 = md5
Vue.use(ElementUI)
/* eslint-disable no-new */
// router.beforeEach((to, from, next) => {
//     console.log(to)
//     let token = window.localStorage.getItem('token')
//     if (to.path === '/user/account' || to.path === '/user/order' || to.path === '/user/personal' ||
//     to.path === '/user/address' || to.path === '/user/Collection') {
//         console.log(token)
//         next('/')
//     } else {
//         console.log(898)
//         // next('/')
//         next()
//     }
// })

new Vue({
    el: '#app',
    router,
    store,
    Swiper,
    components: { App },
    template: '<App/>'
})
