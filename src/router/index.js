import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import Login from '../components/login'
import User from '../components/user'
import account from '../components/user/account'
import personal from '../components/user/personal'
import order from '../components/user/order'
import address from '../components/user/address'
import Collection from '../components/user/Collection'
import SkinCare from '../components/Cosmetics/SkinCare'
import Detail from '../components/detail_cart/detail'
import ShopCart from '../components/detail_cart/shopCart'
import Vipcenter from '../components/Member_Center/Vip_integralCenter'
import MemberCenter from '../components/Member_Center/MemberCenter'
import Whychoose from '../components/Popup/whychoose'
import ProType from '../components/Cosmetics/content/ProType'
import Hot from '../components/Popup/hot'
import cards from '../components/Member_Center/Cards_Lists'
import normalCard from '../components/Member_Center/children/normalCard'
import silverCard from '../components/Member_Center/children/silverCard'
import goldCard from '../components/Member_Center/children/goldCard'
import blackCard from '../components/Member_Center/children/blackCard'
import questions from '../components/Member_Center/children/questions'
import Popup from '../components/Popup/indexDel'
import ProLine from '../components/Cosmetics/content/ProLine'
import product01 from '../components/Member_Center/productVue/product01'
import product02 from '../components/Member_Center/productVue/product02'
import product03 from '../components/Member_Center/productVue/product03'
import product04 from '../components/Member_Center/productVue/product04'
import product05 from '../components/Member_Center/productVue/product05'
import product06 from '../components/Member_Center/productVue/product06'
import product07 from '../components/Member_Center/productVue/product07'
import product08 from '../components/Member_Center/productVue/product08'
import product09 from '../components/Member_Center/productVue/product09'
import Settlement from '../components/Member_Center/Settlement'
import Cosmetics from '../components/Cosmetics/Cosmetics'
import SkinNeeds from '../components/Cosmetics/content/SkinNeeds'
import joinUS from 'components/index/website_detaile/join.vue'
import Landingpage from 'components/index/website_detaile/landingpage.vue'
import KimpurePage from 'components/index/website_detaile/kimpure-page.vue'
import Search from 'components/serch/search.vue'
import Makeup from '../components/Cosmetics/Coscontent/Makeup.vue'
import Lipmakeup from '../components/Cosmetics/Coscontent/Lipmakeup.vue'
import Eyemakeup from '../components/Cosmetics/Coscontent/Eyemakeup.vue'
import Perfume from '../components/Cosmetics/Perfume.vue'
import Ladyperfume from '../components/Cosmetics/Perfume/Ladyperfume.vue'
import Pureluxury from '../components/Cosmetics/Pureluxury.vue'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        }, {
            path: '/login',
            name: 'login',
            components: {
                Login: Login
            }
        }, {
            path: '/SkinCare',
            name: 'SkinCare',
            component: SkinCare
        }, {
            path: '/detail',
            name: 'detail',
            component: Detail
        }, {
            path: '/search',
            name: 'search',
            component: Search
        }, {
            path: '/user',
            name: 'user',
            component: User,
            children: [
                {
                    path: '/user/account',
                    name: 'account',
                    component: account
                }, {
                    path: '/user/personal',
                    name: 'personal',
                    component: personal
                }, {
                    path: '/user/order',
                    name: 'order',
                    component: order
                }, {
                    path: '/user/address',
                    name: 'address',
                    component: address
                }, {
                    path: '/user/Collection',
                    name: 'Collection',
                    component: Collection
                }],
            redirect: '/user/account'
        }, {
            path: '/shopCart',
            name: 'shopCart',
            component: ShopCart
        }, {
            path: '/MemberCenter',
            name: 'MemberCenter',
            component: MemberCenter
        }, {
            path: '/Vipcenter',
            name: 'Vipcenter',
            component: Vipcenter
        }, {
            path: '/whychoose',
            name: 'whychoose',
            component: Whychoose
        }, {
            path: '/ProType',
            name: 'ProType',
            component: ProType
        }, {
            path: '/hot',
            name: 'hot',
            component: Hot
        }, {
            path: '/cards',
            name: 'cards',
            component: cards,
            children: [
                {
                    path: '',
                    component: normalCard
                }, {
                    path: '/normalCard',
                    component: normalCard
                }, {
                    path: '/silverCard',
                    component: silverCard
                }, {
                    path: '/goldCard',
                    component: goldCard
                }, {
                    path: '/blackCard',
                    component: blackCard
                }, {
                    path: '/questions',
                    component: questions
                }
            ]
        }, {
            path: '/SkinNeeds',
            name: 'SkinNeeds',
            component: SkinNeeds
        }, {
            path: '/ProLine',
            name: 'ProLine',
            component: ProLine
        }, {
            path: '/popup',
            name: 'popup',
            component: Popup
        }, {
            path: '/product01',
            name: 'product01',
            component: product01
        }, {
            path: '/product02',
            name: 'product02',
            component: product02
        }, {
            path: '/product03',
            name: 'product03',
            component: product03
        }, {
            path: '/product04',
            name: 'product04',
            component: product04
        }, {
            path: '/product05',
            name: 'product05',
            component: product05
        }, {
            path: '/product06',
            name: 'product06',
            component: product06
        }, {
            path: '/product07',
            name: 'product07',
            component: product07
        }, {
            path: '/product08',
            name: 'product08',
            component: product08
        }, {
            path: '/product09',
            name: 'product09',
            component: product09
        }, {
            path: '/landingpage',
            name: 'landingpage',
            component: Landingpage,
            children: [{
                path: '/landingpage/christmas-day',
                name: 'christmas-day',
                component: KimpurePage
            }, {
                path: '/landingpage/join',
                name: 'join',
                component: joinUS
            }]
        }, {
            path: '/Settlement',
            name: Settlement,
            component: Settlement
        }, {
            path: '/Cosmetics',
            name: 'Cosmetics',
            component: Cosmetics
        }, {
            path: '/Makeup',
            name: Makeup,
            component: Makeup
        }, {
            path: '/Lipmakeup',
            name: Lipmakeup,
            component: Lipmakeup
        }, {
            path: '/Eyemakeup',
            name: Eyemakeup,
            component: Eyemakeup
        }, {
            path: '/Perfume',
            name: Perfume,
            component: Perfume
        }, {
            path: '/Ladyperfume',
            name: Ladyperfume,
            component: Ladyperfume
        }, {
            path: '/Pureluxury',
            name: Pureluxury,
            component: Pureluxury
        }
    ]
})
