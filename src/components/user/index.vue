<template>
    <div>
        <div class="bg">
            <div class="skin-bg"></div>
            <div class="skin-v-bg">
                <img :src='flower' alt="">
            </div>
        </div>
        <div class="bg-gray">
            <div class="skin-user">
                <component :is="isassembly" ref="isassembly" :changeOption="changeOption"></component>
                <div class="small-info unshow">
                    <ul class="skin-user-myaccount">
                        <li class="skin-myaccount-item">
                            <a href="/">首页</a>
                        </li>
                        <li class="skin-myaccount-item skin-active">
                            <a href="">用户中心</a>
                        </li>
                    </ul>
                    <div class="skin-user-info clearfix">
                        <div class="skin-user-left fl">
                            <div class="skin-info">
                                <ul class="clearfix">
                                    <li class="skin-user-name clearfix">
                                        <p>欢迎
                                            <!-- <span class="skin-name">{{this.userdata[0].u_name}}</span> -->
                                            <span class="skin-name">{{this.userName}}</span>
                                        </p>
                                        <a href="#">退出登录</a>
                                    </li>
                                    <li class="skin-fw">
                                        <img :src='fw' alt="">
                                    </li>
                                </ul>
                            </div>
                            <div class="skin-slide">
                                <ul class="skin-menu info">
                                    <li class="skin-menu-item ">
                                        <router-link  to="/user/personal">个人资料
                                            <span class="icon Rightarrow fr"></span>
                                        </router-link>
                                        <!-- <router-link v-if="!isShow" to="/user/penal">个人资料
                                            <span class="icon Rightarrow fr"></span>
                                        </router-link> -->
                                    </li>
                                    <li class="skin-menu-item">
                                        <router-link to="/user/address">收货地址
                                            <span class="icon Rightarrow fr"></span>
                                        </router-link>
                                    </li>
                                    <li class="skin-menu-item">
                                        <router-link to="/user/order">我的订单
                                            <span class="icon Rightarrow fr"></span>
                                        </router-link>
                                    </li>
                                    <li class="skin-menu-item">
                                         <router-link to="/MemberCenter">会员权益
                                            <span class="icon Rightarrow fr"></span>
                                        </router-link>
                                    </li>
                                    <li class="skin-menu-item">
                                        <router-link to="/user/Collection">我的收藏夹
                                            <span class="icon Rightarrow fr"></span>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="skin-slide Coupon">
                                <ul class="skin-menu">
                                    <li class="skin-menu-item">
                                        <a href="#">我的优惠券
                                        </a>
                                    </li>
                                    <li class="skin-menu-item Gift clearfix">
                                        <a href="#">新人礼券
                                            <span class="skin-bto-hover fr">未使用</span>
                                        </a>
                                    </li>
                                    <li class="skin-menu-item">
                                        <p>使用方法：新客首次购买满520元，即享星品新人礼</p>
                                        <p>过期时间：2020.01.05 23:59:59</p>
                                    </li>
                                    <li class="skin-menu-item order">
                                        <a href="#">兰蔻星品新人礼
                                        </a>
                                    </li>
                                    <li class="skin-menu-item">
                                        <span class="skin-bto-hover">立即购物</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="skin-slide order">
                                <ul class="skin-menu">
                                    <li class="skin-menu-item">
                                        <a href="#">我的订单
                                        </a>
                                    </li>
                                    <li class="skin-menu-item history">
                                        <a href="#">查看我的历史订单
                                        </a>
                                    </li>
                                    <li class="skin-menu-item">
                                        <a href="#">寻找新的魅力产品
                                        </a>
                                    </li>
                                    <li class="skin-menu-item">
                                        <span class="skin-bto-hover">立即购物</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="skin-slide guide">
                                <ul class="skin-menu">
                                    <li class="skin-menu-item skin-guide">
                                        <a href="#">购物帮助指南</a>
                                    </li>
                                    <li class="skin-menu-item">
                                        <a href="#">美丽顾问和技术专家为您在线解疑</a>
                                    </li>
                                    <li class="skin-menu-item">
                                        <i class="skin-tel icon"></i>
                                        <a href="#" class="tel">400-820-8016</a>
                                    </li>
                                    <li class="skin-menu-item">
                                        <i class="icon skin-kf"></i>
                                        <a href="#" class="kf">在线客服</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="skin-slide problem">
                                <ul class="skin-menu skin-problem">
                                    <li class="skin-menu-item skin-guide">
                                        <a href="#">常见问题</a>
                                    </li>
                                    <li class="skin-menu-item">
                                        <a href="#">如何下订单？</a>
                                    </li>
                                    <li class="skin-menu-item">
                                        <a href="#">如何查看订单配送状况？</a>
                                    </li>
                                    <li class="skin-menu-item">
                                        <a href="#">如何修改和取消订单？</a>
                                    </li>
                                    <li class="skin-menu-item">
                                        <a href="#">查看所有</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="skin-user-right">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import smalleIndex from './small/smallIndex'
import Account from './account'
import order from './order'
import Address from './address'
import personal from './personal'
import Collection from './Collection'
import fw from './img/fw-left.png'
import flower from './img/header_flower.png'
export default {
    data () {
        return {
            userName: '',
            isassembly: 'smalleIndex',
            nu: '',
            fw,
            flower,
            isShow: true,
            api: 'http://192.168.97.254:3000/',
            userdata: ''
        }
    },
    components: {
        Account,
        order,
        personal,
        Address,
        Collection,
        smalleIndex
    },
    methods: {
        changeOption (option) {
            this.isassembly = option
        },
        getInfo () {
            let token = window.localStorage.getItem('token')
            if (token) {
                let info = window.localStorage.getItem('info')
                this.userName = JSON.parse(info).email
            }
        },
        getuserdata () {
            // this.$store.dispatch('getUserData')
            console.log(111)
            let userdata = this.$store.state.userData.userdatalist
            if (userdata != '') {
                this.userdata = userdata
            } else {
                this.userdata = JSON.parse(window.localStorage.getItem('userInfo'))
            }
            return this.userdata
        }
    },
    mounted () {
        this.getInfo()
        this.getuserdata()
        console.log(this.userdata)
    }
}
</script>
<style lang="less" scoped>
    // @import '../Common/Css/common.less';
    @import './css/user.less';
    @import url('../../css/button.less');
    .skin-menu-item {
        @media (min-width: 1024px) {
            &.bigmedia {
                display: block
            }
            &.smallmedia {
                display: none
            }
        }
        @media (max-width: 1024px) {
            &.bigmedia {
                display: none
            }
            &.smallmedia {
                display: block
            }
        }
    }
</style>
