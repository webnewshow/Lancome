<template>
    <div class="skin-right-content">
        <div class="skin-title">
            <h2>我的账户</h2>
        </div>
        <div class="skin-deatails clearfix">
            <div class="skin-row">
                <div class="skin-row-item">
                    <ul class="skin-lists">
                        <li class="skin-item item-info">
                            我的信息
                            <a href="#" class="fr">编辑</a>
                        </li>
                        <li class="skin-item item-name">
                            我的信息
                        </li>
                        <li class="skin-item item-li">
                            邮箱:<span>{{this.userName}}</span>
                        </li>
                        <li class="skin-item item-li">
                            手机号码：13996985901
                        </li>
                    </ul>
                </div>
                <div class="skin-row-item">
                    <ul class="skin-lists">
                        <li class="skin-item item-info">
                            我的订单
                        </li>
                        <li class="skin-item item-name">
                            <a href="/user/order">查看我的历史订单</a>
                        </li>
                        <li class="skin-item item-li">
                            寻找新的魅力产品？
                        </li>
                        <li class="skin-item item-li">
                            <span class="skin-bto-hover">立即购物</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="skin-row">
                <div class="skin-row-item skin-coupon clearfix">
                    <ul class="skin-lists clearfix">
                        <li class="skin-item item-info">
                            我的优惠卷
                        </li>
                        <li class="skin-item item-Coupon">
                            <a href="#">新人礼券</a>
                            <span class="skin-bto">未使用</span>
                        </li>
                        <li class="skin-item item-li">
                            新人礼券未使用
                            使用方法：新客首次购买满520元，即享星品新人礼
                        </li>
                        <li class="skin-item item-li">
                            过期时间：2020.01.05 23:59:59
                        </li>
                        <li class="skin-item item-li">
                            <span class="coupon">兰蔻星品新人礼</span>
                        </li>
                        <li class="skin-item item-li skinbto">
                            <span class="skin-bto-hover">立即购物</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="skin-row">
                <div class="skin-row-item skin-coupon">
                    <ul class="skin-lists">
                        <li class="skin-item item-info">
                            我的积分
                        </li>
                        <li class="skin-item item-li integral">
                            <a href="#">兰蔻唯你会员， 已经累计积分为 0积分。</a>
                        </li>
                        <li class="skin-item item-li skin-integral">
                            第一步：兰蔻官网购买正品，即可累计会员积分。<a href="#">开始购物</a>
                        </li>
                        <li class="skin-item item-li skin-integral">
                            第二步：凭积分可在玫瑰社区兑换更多兰蔻产品。<a href="#">点击进入玫瑰社区网站</a>
                        </li>
                        <li class="skin-item item-li skin-integral">
                            第三步：查看更多会员权益。<a href="#">积分兑换计划</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data () {
        return {
            userName: ''
        }
    },
    methods: {
        getInfo () {
            let token = window.localStorage.getItem('token')
            if (token) {
                let info = window.localStorage.getItem('userinfo')
                this.userName = JSON.parse(info).email
            }
        }
    },
    mounted () {
        this.getInfo()
    }
}
</script>

<style lang="less" scoped>
// @import '../Common/Css/common.less';
@import './css/user.less';
@import url('../../css/button.less');
</style>
