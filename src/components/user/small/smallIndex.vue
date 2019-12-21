<template>
    <div class="small-info show">
        <ul class="skin-user-myaccount">
            <li class="skin-myaccount-item">
                <a href="">首页</a>
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
                                <span class="skin-name">孟凡盛</span>
                            </p>
                            <a href="#">退出登录</a>
                        </li>
                        <li class="skin-fw">
                            <img :src='fw' alt="">
                        </li>
                    </ul>
                </div>
                <div class="skin-slide">
                    <ul class="skin-menu">
                        <li class="skin-menu-item info" @click="change('personal')">
                            <router-link to="/user/personal">个122人资料
                                <span class="icon Rightarrow fr"></span>
                            </router-link>
                        </li>
                        <li class="skin-menu-item" @click="change('Address')">
                            <router-link to="/user/address">收货地址
                                <span class="icon Rightarrow fr"></span>
                            </router-link>
                        </li>
                        <li class="skin-menu-item" @click="change('order')">
                            <router-link to="/user/order">我的订单
                                <span class="icon Rightarrow fr"></span>
                            </router-link>
                        </li>
                        <li class="skin-menu-item">
                            <a href="#">会员权益
                                <span class="icon Rightarrow fr"></span>
                            </a>
                        </li>
                        <li class="skin-menu-item" @click="change('Collection')">
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
                        <li class="skin-menu-item Gift">
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
            <!-- <div class="skin-user-right"> -->
                <!-- <router-view ></router-view> -->
                <!-- <personal></personal> -->
                <!-- <Account></Account> -->
                <!-- <order></order> -->
                <!-- <Address></Address> -->
                <!-- <Collection></Collection> -->
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
import Account from '../account'
import order from '../order'
import Address from '../address'
import personal from '../personal'
import Collection from '../Collection'
import fw from '../img/fw-left.png'
import flower from '../img/header_flower.png'
export default {
    props: {
        changeOption: Function
    },
    data () {
        return {
            fw,
            flower
        }
    },
    methods: {
        change (option) {
            this.changeOption(option)
        }
    },
    components: {
        Account,
        order,
        personal,
        Address,
        Collection
    },
    computed: {
        key () {
            return this.$router.currentRoute.fullPath
        }
    },
    mounted () {
        console.log(this.$router.currentRoute.fullPath)
    }
}
</script>

<style lang="less" scoped>
    // @import '../Common/Css/common.less';
    @import '../css/user.less';
    @import url('../../../css/button.less');

    .small-info{
        display: none
    }
</style>
