<template>
    <div id="mainTop" class="skin-Index-Top">
        <div class="skin-logo-title">
            <img :src='LOGO' />
        </div>
        <div class="clearfix skin-list-nav">
            <img class="log-samll fl" :src="LOGO">
            <ul class="skin-nav fl clearfix ul-01">
                <li class="skin-nav-lists ">
                    <div class='help2'>
                        <router-link to='/'>首页</router-link>
                    </div>
                </li>
                <li class="skin-nav-lists ">
                    <div style='position:relative;'>
                        <div class='help'>
                            <router-link to='/SkinCare'>护肤</router-link>
                        </div>
                    </div>
                    <div class="skin-nav-con clearfix">
                        <div class="skin-nav-conLeft fl">
                            <ul class="skin-nav-conLeft-lists fr clearfix">
                                <li class="skin-nav-list font-weight">产品类型</li>
                                <li class="skin-nav-list font-weight">清莹清洁系列</li>
                                <li class="skin-nav-list font-weight">卸妆清洁</li>
                            </ul>
                            <div class="skin-nav-listss  fr margin-t-10">
                                <ul class="skin-nav-detail fr clearfix">
                                    <li class="skin-nav-detaillist ">卸妆清洁</li>
                                    <li class="skin-nav-detaillist ">舒缓保湿</li>
                                    <li class="skin-nav-detaillist">精华修护</li>
                                    <li class="skin-nav-detaillist">美白淡斑</li>
                                    <li class="skin-nav-detaillist">紧致提拉</li>
                                    <li class="skin-nav-detaillist">抗老愈颜</li>
                                </ul>
                                <ul class="skin-nav-detail fr clearfix">
                                    <li class="skin-nav-detaillist">清莹清洁系列</li>
                                    <li class="skin-nav-detaillist">小黑瓶系列</li>
                                    <li class="skin-nav-detaillist">水分缘系列</li>
                                    <li class="skin-nav-detaillist">甄白系列</li>
                                    <li class="skin-nav-detaillist">清透防嗮系列</li>
                                    <li class="skin-nav-detaillist">素颜系列</li>
                                    <li class="skin-nav-detaillist">清纯系列</li>
                                    <li class="skin-nav-detaillist">男士系列</li>
                                </ul>
                                <ul class="skin-nav-detail fr clearfix">
                                    <li class="skin-nav-detaillist">卸妆&洁面</li>
                                    <li class="skin-nav-detaillist">美容液</li>
                                    <li class="skin-nav-detaillist">精华</li>
                                    <li class="skin-nav-detaillist">眼部护理</li>
                                    <li class="skin-nav-detaillist">乳液</li>
                                    <li class="skin-nav-detaillist">面霜</li>
                                    <li class="skin-nav-detaillist">面膜</li>
                                    <li class="skin-nav-detaillist">眼部护理</li>
                                    <li class="skin-nav-detaillist">隔离防晒</li>
                                </ul>
                            </div>
                        </div>
                        <div class="skin-nav-conRight fl">
                            <img :src='Hufu' />
                            <div class="hufu-con-right">
                                <p class="font-16 font-weight">全新第二代小黑瓶精华</p>
                                <p class="font-14">一瓶重现细嫩好肤质 > </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="skin-nav-lists ">
                    <div style='position:relative;'>
                        <div class='help'><router-link to='/Cosmetics'>彩妆</router-link></div>
                    </div>
                    <div class="skin-nav-con">
                        <div class="skin-navcz-conLeft fl">
                            <ul class="skin-navnavcz-conLeft-lists fr clearfix">
                                <li class="skin-navcz-list font-weight">底妆</li>
                                <li class="skin-navcz-list font-weight">唇妆</li>
                                <li class="skin-navcz-list font-weight">眼妆</li>
                                <li class="skin-navcz-list font-weight">美妆&工具</li>
                            </ul>
                            <div class="skin-navcz-listss  fr margin-t-10">
                                <ul class="skin-navcz-detail fr clearfix">
                                    <li class="skin-navcz-detaillist">粉底刷</li>
                                </ul>
                                <ul class="skin-navcz-detail fr clearfix">
                                    <li class="skin-navcz-detaillist">睫毛膏</li>
                                    <li class="skin-navcz-detaillist">眼影水</li>
                                    <li class="skin-navcz-detaillist">眼线笔</li>
                                    <li class="skin-navcz-detaillist">眉部</li>
                                </ul>
                                <ul class="skin-navcz-detail fr clearfix">
                                    <li class="skin-navcz-detaillist">唇膏</li>
                                    <li class="skin-navcz-detaillist">唇釉</li>
                                </ul>
                                <ul class="skin-navcz-detail fr clearfix">
                                    <li class="skin-navcz-detaillist">妆前乳</li>
                                    <li class="skin-navcz-detaillist">气垫霜</li>
                                    <li class="skin-navcz-detaillist">粉底</li>
                                    <li class="skin-navcz-detaillist">蜜粉&散粉</li>
                                    <li class="skin-navcz-detaillist">修容遮瑕</li>
                                    <li class="skin-navcz-detaillist">腮红</li>
                                </ul>
                            </div>
                        </div>
                        <div class="skin-navcz-conRight fl">
                            <img :src='CaiZhuang' />
                            <div class="hufu-con-right text-c">
                                <p class="font-16 font-weight">菁纯宝石唇膏 #02</p>
                                <p class="font-14">唇间宝石 浓郁显色></p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="skin-nav-lists ">
                    <div style='position:relative;'>
                        <div class='help'><router-link to='/Perfume'>香水</router-link></div>
                    </div>
                    <div class="skin-nav-con">
                        <div class="skin-nav-conLeft fl">
                            <ul class="skin-nav-conLeft-lists fr clearfix">
                                <li class="skin-nav-list font-weight">女士香水</li>
                            </ul>
                            <div class="skin-nav-listss  fr margin-t-10">
                                <ul class="skin-nav-detail fr clearfix">
                                    <li class="skin-nav-detaillist">美丽人生系列</li>
                                    <li class="skin-nav-detaillist">奇迹系列</li>
                                    <li class="skin-nav-detaillist">真爱系列</li>
                                    <li class="skin-nav-detaillist">殿堂系列</li>
                                </ul>
                            </div>
                        </div>
                        <div class="skin-nav-conRight fl">
                            <img :src='XiangShui' />
                            <div class="hufu-con-right">
                                <p class="font-16 font-weight">全新第二代小黑瓶精华</p>
                                <p class="font-14">一瓶重现细嫩好肤质 > </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="skin-nav-lists ">
                    <div class='help2'><router-link to='/Pureluxury'>菁纯奢宠</router-link></div>
                </li>
                <li class="skin-nav-lists ">
                    <div style='position:relative;'>
                        <div class='help'>
                            <router-link to='/hot'>畅销榜单</router-link>
                        </div>
                    </div>
                    <div class="skin-nav-con" id="changxiao">
                        <img :src="Changxiao" />
                    </div>
                </li>
                <li class="skin-nav-lists ">
                    <div class='help2'>
                        <router-link to='/MemberCenter'>会员中心</router-link>
                    </div>
                </li>
                <li class="skin-nav-lists ">
                    <div style='position:relative;'>
                        <div class='help'>
                            <router-link to='/whychoose'>官网购物理由</router-link>
                        </div>
                    </div>
                    <div class="skin-nav-con" id="GuanWang">
                        <img :src="GuanWang" />
                    </div>
                </li>
            </ul>
            <ul class='fr skin-nav ul-02'>
                <li class='skin-menu' @click="clickLeftSlid()">
                    <span><i class='el-icon-menu font-24'></i></span>
                </li>
                <li class="skin-nav-lists ulRight skin-nav-hoverSearch">
                    <div style='position:relative;'>
                        <div class='help'><i class='el-icon-search  font-24'></i></div>
                    </div>
                    <div class="skin-navsearch-cont">
                        <div class="skin-navsearch-main">
                            <div class="skin-navsearch-sinput">
                                <input v-model="searchTxt" class="search-text" type="text" placeholder="菁纯臻宠">
                                <a><i class="skin-navsearch-sicon " id="search-btn-btn"></i></a>
                            </div>
                            <div class="skin-navsearch-shistory">
                                <h4>
                                    <span>历史搜索</span>
                                    <a class="el-icon-delete"></a>
                                </h4>
                                <ul class="clearfix">
                                    <li>
                                        <a>菁纯臻宠</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="skin-navsea-viewhis">
                                <h4>
                                    <span>历史浏览</span>
                                    <a class="skin-navbrow-refresh">
                                        <i class="skin-navsea-refresh"></i>
                                    </a>
                                </h4>
                                <ul class="clearfix">
                                    <li class="fl">
                                        <a>
                                            <img src="../detail_cart/images/1.jpg" alt="">
                                            <div class="text-overflow">新塑颜紧致眼霜</div>
                                            <p>￥560</p>
                                        </a>
                                    </li>
                                    <li class="fl">
                                        <a>
                                            <img src="../detail_cart/images/2.jpg" alt="">
                                            <div class="text-overflow">【圣诞礼】限量菁纯非凡哑光唇膏</div>
                                            <p>￥270</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="skin-navsea-comhis">
                                <h4><span>大家都在搜</span></h4>
                                <ul class="clearfix">
                                    <li class="fl">
                                        <a>小黑瓶</a>
                                    </li>
                                    <li class="fl">
                                        <a>持妆粉底液</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="skin-nav-lists ulRight skin-navshop-goodsLists">
                    <el-badge :value="this.shopgoods.length">
                        <div style='position:relative;'>
                            <router-link to="/shopCart">
                                <div class='help'>
                                    <i class='el-icon-shopping-bag-1 font-24'></i>
                                </div>
                            </router-link>
                        </div>
                    </el-badge>
                    <div class="skin-navs-glistscont">
                        <div class="skin-navmincart-gliststit">
                            <ul>
                                <li>您的购物袋（{{this.shopgoods.length}}）</li>
                                <li>数量</li>
                                <li>价格</li>
                            </ul>
                        </div>
                        <div class="skin-navmincart-gCont">
                            <div class="skin-mincart-tinysco">
                                <div class="skin-mincart-viewport">
                                    <div class="skin-mincart-view">
                                        <ul>
                                            <li class="swiper-slide" v-for="item in this.shopgoods" :key="item.g_id">
                                                <div class="skin-mincart-proinfo">
                                                    <router-link
                                                    :to="{path: '/detail', query: {id: item.g_id}}"
                                                    >
                                                        <img :src="'http://192.168.97.254:3000/'+item.g_img.split(',')[0]" alt="">
                                                    </router-link>
                                                    <div class="skin-mcart-proinfowrap">
                                                        <p class="proTit">
                                                            <router-link
                                                            :to="{path: '/detail', query: {id: item.g_id}}"
                                                            >
                                                                {{item.g_title}}
                                                            </router-link>
                                                        </p>
                                                        <p class="proColor">
                                                            <span class="proiconsmaller"></span>
                                                            <span>{{item.g_color}}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="skin-mincart-pronum">
                                                    <span>{{item.g_num}}</span>
                                                </div>
                                                <div class="skin-mincart-propri">
                                                    <span class="pri" :title="item.g_price">￥{{item.g_price}}</span>
                                                </div>
                                            </li>
                                            <li class="swiper-slide">
                                                <div class="skin-mincart-proinfo">
                                                    <a>
                                                        <img src="../detail_cart/images/17.jpg" alt="">
                                                    </a>
                                                    <div class="skin-mcart-proinfowrap">
                                                        <p class="proTit">
                                                            <a>兰蔻电商翅膀金色包</a>
                                                        </p>
                                                        <p class="proColor">
                                                            <!-- <span class="proiconsmaller"></span> -->
                                                            <span>个</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="skin-mincart-pronum">
                                                    <span>1</span>
                                                </div>
                                                <div class="skin-mincart-propri">
                                                    <span>赠品</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="skin-navmincart-Ctotal clearfix">
                            <span class="fr">￥{{this.pritotal}}</span>
                            <span class="fr">总计</span>
                        </div>
                        <div class="skin-navmincart-Ctosubbtn">
                            <a class="skin-bto-hover">立即结算</a>
                        </div>
                    </div>
                </li>
                <li class="skin-nav-lists">
                    <div style='position:relative;'>
                        <div
                        class='help user' @click="login"
                        >
                        <i class='el-icon-s-custom font-24'></i>
                        <span>欢迎:{{this.userName}}
                        <!-- <span>欢迎:dafdfda -->
                        </span>
                        </div></div>
                    <div class="skin-nav-con"  id="GuanWang">
                        <div  class="login-box"> <login a="1234" :toshow="toshow"></login></div>
                        <div class="skin-login-content on">
                            <!-- <div class="user-name"><span>欢迎 </span>{{this.userName}}</div> -->
                            <ul class="user-info">
                                <li class="info-item">
                                <router-link to="/user/personal">个人资料</router-link>
                                </li>
                                <li class="info-item">
                                <router-link to="/user/address">收货地址</router-link>
                                </li>
                                <li class="info-item">
                                <router-link to="/user/order">我的订单</router-link>
                                </li>
                                <li class="info-item">
                                <router-link to="/MemberCenter">会员权益</router-link>
                                </li>
                                <li class="info-item">
                                <router-link to="/user/Collection">我的收藏夹</router-link>
                                </li>
                            </ul>
                            <div class="loginout">
                                <span>退出登录</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class='skin-left-slide'>
            <el-collapse  @change="handleChange">
                <el-collapse-item title="护肤" name="1">
                    <el-collapse  @change="handleChange">
                        <el-collapse-item title="产品类型" name="1">
                            <el-collapse  accordion>
                                <ul>
                                    <li>卸妆&洁面</li>
                                    <li>美容液</li>
                                    <li>精华</li>
                                    <li>眼部护理</li>
                                    <li>乳液</li>
                                    <li>面霜</li>
                                    <li>面膜</li>
                                </ul>
                            </el-collapse>
                        </el-collapse-item>
                        <el-collapse-item title="产品系列" name="2">
                            <el-collapse  accordion>
                                <ul>
                                    <li>清莹清洁系列</li>
                                    <li>小黑瓶系列</li>
                                    <li>水份缘系列</li>
                                    <li>乳液</li>
                                    <li>面霜</li>
                                    <li>面膜</li>
                                </ul>
                            </el-collapse>
                        </el-collapse-item>
                        <el-collapse-item title="肌肤需求" name="3">
                            <el-collapse  accordion>
                                <ul>
                                    <li>清莹清洁系列</li>
                                    <li>小黑瓶系列</li>
                                    <li>水份缘系列</li>
                                    <li>乳液</li>
                                    <li>面霜</li>
                                    <li>面膜</li>
                                </ul>
                            </el-collapse>
                        </el-collapse-item>
                    </el-collapse>
                </el-collapse-item>
                <el-collapse-item title="彩妆" name="2">
                     <el-collapse  @change="handleChange">
                        <el-collapse-item title="底妆" name="1">
                            <el-collapse  accordion>
                                <ul>
                                    <li>卸妆&洁面</li>
                                    <li>美容液</li>
                                    <li>精华</li>
                                    <li>眼部护理</li>
                                    <li>乳液</li>
                                    <li>面霜</li>
                                    <li>面膜</li>
                                </ul>
                            </el-collapse>
                        </el-collapse-item>
                        <el-collapse-item title="唇妆" name="2">
                            <el-collapse  accordion>
                                <ul>
                                    <li>清莹清洁系列</li>
                                    <li>小黑瓶系列</li>
                                    <li>水份缘系列</li>
                                    <li>乳液</li>
                                    <li>面霜</li>
                                    <li>面膜</li>
                                </ul>
                            </el-collapse>
                        </el-collapse-item>
                        <el-collapse-item title="眼妆" name="3">
                            <el-collapse  accordion>
                                <ul>
                                    <li>清莹清洁系列</li>
                                    <li>小黑瓶系列</li>
                                    <li>水份缘系列</li>
                                    <li>乳液</li>
                                    <li>面霜</li>
                                    <li>面膜</li>
                                </ul>
                            </el-collapse>
                        </el-collapse-item>
                         <el-collapse-item title="美妆&工具" name="4">
                            <el-collapse  accordion>
                                <ul>
                                    <li>清莹清洁系列</li>
                                    <li>小黑瓶系列</li>
                                    <li>水份缘系列</li>
                                    <li>乳液</li>
                                    <li>面霜</li>
                                    <li>面膜</li>
                                </ul>
                            </el-collapse>
                        </el-collapse-item>
                    </el-collapse>
                </el-collapse-item>
                 <el-collapse-item title="香水" name="3">
                     <el-collapse  @change="handleChange">
                        <el-collapse-item title="女士香水" name="1">
                            <el-collapse  accordion>
                                <ul>
                                    <li>美丽人生系列</li>
                                    <li>奇迹系列</li>
                                    <li>真爱系列</li>
                                    <li>殿堂系列</li>
                                </ul>
                            </el-collapse>
                        </el-collapse-item>
                    </el-collapse>
                </el-collapse-item>
                <el-collapse-item title="菁纯奢宠" name="4">
                </el-collapse-item>
                <el-collapse-item title="畅销榜单" name="5">
                </el-collapse-item>
                <el-collapse-item title="会员中心" name="6">
                </el-collapse-item>
                <el-collapse-item title="我的账户" name="7">
                </el-collapse-item>
                <el-collapse-item title="线上美容顾问" name="8">
                </el-collapse-item>
                <el-collapse-item title="订购热线" name="9">
                </el-collapse-item>
            </el-collapse>
            <i class='el-icon-close font-24  skin-slide-close' @click="clickSlidclose()"></i>
        </div>
        <!-- 登录注册 -->
        <div class="dialog-login-register">
            <!--弹出层  -->
            <el-dialog :visible.sync="dialogVisible">
                <login :toshow="toshow"></login>
                <span slot="footer" class="dialog-footer">
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import TOP from 'components/serch/search.vue'
import LOGO from 'components/images/logo.png'
import Hufu from 'components/images/nav-img.jpg'
import CaiZhuang from 'components/images/nav-img-cz.jpg'
import XiangShui from 'components/images/nav-img-xs.jpg'
import Changxiao from 'components/images/nav-cx-img.jpg'
import GuanWang from 'components/images/nav-img-gw.jpg'
import login from '../login/index'
export default {
    data () {
        return {
            dialogVisible: false,
            LOGO,
            Hufu,
            CaiZhuang,
            XiangShui,
            Changxiao,
            GuanWang,
            searchTxt: '',
            gNum: 2,
            shopgoods: '',
            godelits: '',
            userName: '',
            userdata: ''
        }
    },
    components: {
        login,
        TOP
    },
    methods: {
        // 点击头部类型获取数据渲染
        getType () {
            let _this = this
            let typedata = document.querySelectorAll('.skin-nav-detaillist')
            for (var i = 0; i < typedata.length; i++) {
                typedata[i].onclick = function (e) {
                    let data = e.target.innerText
                    _this.$store.state.goods.clinckdata = data
                    _this.$router.push('/ProType')
                }
            }
        },
        toshow (msg) {
            this.dialogVisible = false
            console.log(111)
        },
        login () {
            let token = window.localStorage.getItem('token')
            if (token) {
                this.dialogVisible = false
                this.$router.push('/user')
            } else {
                this.dialogVisible = true
            }
        },
        // 退出登录
        // 显示用户头像或者名字
        showUser () {
            let userImg = document.querySelector('.user i')
            let loginBox = document.querySelector('.login-box')
            let userInfo = document.querySelector('.skin-login-content.on')
            let userName = document.querySelector('.user span')
            let token = window.localStorage.getItem('token')
            if (token) {
                let name = window.localStorage.getItem('info')
                this.userName = name = JSON.parse(name).email
                userImg.style.display = 'none'
                userInfo.style.display = 'block'
                loginBox.style.display = 'none'
                userName.style.display = 'block'
            } else {
                userImg.style.display = 'block'
                userName.style.display = 'none'
                userInfo.style.display = 'none'
                loginBox.style.display = 'block'
            }
        },
        getscrool () {
            let navTop = document.querySelector('.skin-Index-Top')
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            if (scrollTop > 0) {
                navTop.classList.add('on')
            } else {
                navTop.classList.remove('on')
            }
        },
        clickLeftSlid () {
            let leftSlid = document.querySelector('.skin-left-slide')
            if (leftSlid.classList.contains('on')) {
                console.log('左边弹出')
            } else {
                leftSlid.classList.add('on')
            }
        },
        clickSlidclose () {
            let leftSlid = document.querySelector('.skin-left-slide')
            if (leftSlid.classList.contains('on')) {
                leftSlid.classList.remove('on')
            }
        },
        searchfun () {
            let _this = this
            let btn = document.querySelector('#search-btn-btn')
            let serchData = []
            btn.onclick = function () {
                let seartText = document.querySelector('.search-text').value
                serchData.push(seartText)
                if (seartText === '') {
                    seartText = '菁纯臻宠'
                } else {
                    console.log(seartText)
                    _this.$store.commit('getservalue', seartText)
                    _this.$store.dispatch('getsearchlist', seartText)
                    _this.$router.push('/search')
                }
                console.log(serchData)
                _this.$store.dispatch('getlikedata', serchData)
                window.localStorage.setItem('savelikelist', serchData)
            }
        },
        shopcartgoods () {
            let shopglists = this.$store.state.getDetail.selectLists
            if (shopglists != '') {
                this.shopgoods = shopglists
            } else {
                this.shopgoods = JSON.parse(window.localStorage.getItem('selectInfo'))
            }
            return this.shopgoods
        },
        handleChange (val) {
            console.log(val)
        }
    },
    mounted () {
        this.showUser()
        this.searchfun()
        window.addEventListener('scroll', this.getscrool)
        this.shopcartgoods()
        this.getType()
    },
    computed: {
        pritotal () {
            let toPri = 0
            for (let ite of this.shopgoods) {
                toPri += ite.g_price * ite.g_num
            }
            return toPri
        },
        user () {
            return this.$store.state.userData.userdatalist
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../login/css/login.less';
    .user{
        span{
            color: #999999;
        }
        span:hover{
            color: white;
        }
    }
    #search-btn-btn:hover{
        background: greenyellow;
    }
    // 用户样式
    .skin-login-content{
        .user-name{
            height: 80px;
            line-height: 80px;
            padding: 0 30px;
            text-align: left;
            color: #000;
            font-weight: 500px;
        }
        .user-info{
            padding: 0 30px;
            text-align: left;
            border-top: 1px solid #ccc;
            padding-top: 20px;
            line-height: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid #ccc;
            li{
                a{
                    color: #999999 !important;
                }
            }
            .info-item:hover{
                text-decoration: underline;
            }
        }
        .loginout{
            text-align: left;
            color: #000;
            padding: 0 30px;
            span{
                text-decoration: underline
            }
        }
    }
    // 头部
    .skin-Index-Top {
        z-index: 5;
        color: #fff;
        width: 100%;
        position: relative;
        background: #000000;

        //固定
        &.on {
            position: fixed;
            top: 0;

            .skin-logo-title {
                height: 0px;
            }

            .skin-list-nav {
                padding: 0 15px;

                .log-samll {
                    display: block;
                }

                .help,
                .help2 {
                    padding: 0 10px !important;
                }

                @media (max-width: 1070px) {
                    .skin-nav.ul-01 {
                        padding-left: 10px;
                    }
                }

                .skin-nav {
                    padding-left: 40px;
                }
            }

            @media (max-width: 1024px) {
                .ul-01 {
                    display: none;
                }

                .ul-02 {
                    width: 100%;
                    padding: 0px;

                    .ulRight {
                        float: right;
                    }
                }

                .skin-logo-title {
                    height: 0px;
                }

                .log-samll {
                    display: block !important;
                    position: absolute;
                    left: 50%;
                    transform: translate(-50%, 0)
                }

                .skin-menu {
                    display: inline-block !important;
                }
            }
        }

        // 固定完
        .skin-logo-title {
            height: 85px;
            text-align: center;
            transition: all 0.4s;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 155px;
                height: 40px;
            }
        }

        @media(max-width: 1070px) {
            .skin-list-nav {
                padding: 0 15px !important;

                .help,
                .help2 {
                    padding: 0 10px;
                }
            }
        }

        @media (max-width: 1024px) {
            .ul-01 {
                display: none;
            }

            .ul-02 {
                width: 100%;
                padding: 0px !important;

                .ulRight {
                    float: right;
                }

            }

            .skin-logo-title {
                height: 0px;
            }

            .log-samll {
                display: block !important;
                position: absolute;
                left: 50%;
                transform: translate(-50%, 0)
            }

            .skin-menu {
                display: inline-block !important;
            }

            .help,
            .help2 {
                padding: 0 10px !important;
            }
        }

        .skin-list-nav {
            position: relative;
            transition: all 0.4s;
            margin: 0 auto;
            max-width: 1280px;

            .skin-nav {
                text-align: left;
                height: 50px;
                line-height: 50px;

                a {
                    color: white;
                    text-decoration: none;
                }

                .skin-menu {
                    display: none;
                }

                .skin-nav-lists {
                    text-align: center;
                    font-size: 14px;
                    cursor: pointer;
                    display: inline-block;

                    .help,
                    .help2 {
                        color: #fff;
                        padding: 0 15px;
                    }
                }

                .skin-nav-lists:hover {
                    .help:after {
                        content: '';
                        clear: both;
                        border: 9px solid transparent;
                        border-top-color: black;
                        position: absolute;
                        bottom: -18px;
                        left: 50%;
                        transform: translate(-50%, 0);
                        z-index: 10;
                        font-weight: bold;
                    }
                }

                .skin-nav-hoverSearch {
                    .skin-navsearch-cont {
                        display: none;
                        width: 458px;
                        padding: 36px 26px 40px;
                        border: 1px solid #f1f1f1;
                        text-align: left;
                        max-height: calc(100vh - 140px);
                        overflow: auto;
                        background: #fff;
                        z-index: 5;
                        position: absolute;
                        top: 52px;
                        right: -130px;

                        .skin-navsearch-main {
                            .skin-navsearch-sinput {
                                width: 100%;
                                position: relative;
                                padding: 0 18px;

                                input {
                                    width: 100%;
                                    border: 0 solid #dadada;
                                    border-bottom: 4px solid #000;
                                    font-size: 16px;
                                    color: #000;
                                    height: 44px;
                                    padding: 8px 30px 8px 9px;
                                    background: #fff;
                                    transition: border-color ease-in-out .15s;
                                }

                                input:focus {
                                    outline: none;
                                }

                                a {
                                    position: absolute;
                                    top: 0;
                                    right: 18px;
                                    padding: 9px 0 9px 6px;

                                    .skin-navsearch-sicon {
                                        width: 22px;
                                        height: 22px;
                                        font-weight: 400;
                                        display: inline-block;
                                        background-image: url('../../images/icon.png');
                                        background-repeat: no-repeat;
                                        background-size: 381px 361px;
                                        background-position: -267px -70px;
                                    }
                                }
                            }

                            .skin-navsearch-shistory {
                                margin: 47px 0 0;

                                h4 {
                                    padding: 0 18px;
                                    font-size: 16px;
                                    line-height: 18px;
                                    font-weight: 700;
                                    color: #000;
                                    margin: 0 0 12px;
                                    position: relative;

                                    .el-icon-delete {
                                        color: #000;
                                        position: absolute;
                                        right: 14px;
                                        top: 0;
                                        padding: 0 4px;
                                    }
                                }

                                ul {
                                    height: 28px;
                                    overflow: hidden;
                                    font-size: 0;
                                    padding: 0 1px;

                                    li {
                                        float: left;
                                        margin: 6px 0;
                                        display: block;

                                        a {
                                            font-size: 14px;
                                            line-height: 16px;
                                            color: #666;
                                            padding: 0;
                                            margin: 0 17px;
                                            display: block;
                                        }
                                    }
                                }
                            }

                            .skin-navsea-viewhis {
                                margin: 40px 0 0;

                                h4 {
                                    padding: 0 18px;
                                    font-size: 16px;
                                    line-height: 18px;
                                    font-weight: 700;
                                    color: #000;
                                    margin: 0 0 12px;
                                    position: relative;

                                    .skin-navbrow-refresh {
                                        position: absolute;
                                        right: 14px;
                                        top: 0;
                                        padding: 0 4px;

                                        .skin-navsea-refresh {
                                            width: 15px;
                                            height: 13px;
                                            font-weight: 400;
                                            color: #000;
                                            display: inline-block;
                                            background-image: url('../../images/icon.png');
                                            background-size: 381px 361px;
                                            background-position: -104px -325px;
                                        }
                                    }
                                }

                                ul {
                                    font-size: 0;
                                    margin: 0 -5px;

                                    li {
                                        display: inline-block;
                                        width: 33.3333%;
                                        padding: 0 23px;
                                        margin: 6px 0;

                                        a {
                                            font-size: 14px;
                                            color: #000;
                                            line-height: 16px;
                                            display: block;
                                            text-align: center;
                                            margin: 0;

                                            img {
                                                width: 90px;
                                                vertical-align: middle;
                                            }

                                            div {
                                                padding: 4px 0 2px;
                                            }
                                        }
                                    }
                                }
                            }

                            .skin-navsea-comhis {
                                margin: 38px 0 0;

                                h4 {
                                    padding: 0 18px;
                                    font-size: 16px;
                                    line-height: 18px;
                                    font-weight: 700;
                                    color: #000;
                                    margin: 0 0 12px;
                                    position: relative;
                                }

                                ul {
                                    font-size: 0;
                                    padding: 0 1px;

                                    li {
                                        margin: 6px 0;
                                        display: block;

                                        a {
                                            font-size: 14px;
                                            line-height: 16px;
                                            color: #666;
                                            padding: 0;
                                            margin: 0 17px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                .skin-nav-hoverSearch:hover .skin-navsearch-cont {
                    display: block;
                }

                // 搜索响应式样式
                @media (max-width: 1480px) {
                    .skin-nav-hoverSearch {
                        .skin-navsearch-cont {
                            right: 2%;
                            top: 50px;
                        }
                    }
                }

                @media (max-width: 1024px) {
                    .skin-nav-hoverSearch {
                        .skin-navsearch-cont {
                            right: auto;
                            width: 100%;
                            padding: 0;
                            position: fixed;
                            left: 0;
                            top: 50px;
                            max-height: 100%;
                            overflow: hidden;

                            .skin-navsearch-main {
                                padding: 33px 6px 24px;

                                .skin-navsearch-sinput {
                                    padding: 0 14px;

                                    input {
                                        border-bottom: 2px solid #000;
                                        font-size: 13px;
                                        height: 32px;
                                        padding: 6px 30px 6px 5px;
                                    }

                                    a {
                                        padding: 5px 0 5px 5px;
                                        right: 14px;
                                    }
                                }

                                .skin-navsearch-shistory {
                                    margin: 0;
                                    padding-bottom: 24px;
                                    position: relative;
                                    padding-top: 30px;

                                    h4 {
                                        padding: 0 14px;
                                        font-size: 14px;
                                        line-height: 16px;
                                        margin: 0 0 4px;

                                        .el-icon-delete {
                                            right: 10px;
                                        }
                                    }

                                    ul {
                                        height: 22px;

                                        li {
                                            margin: 4px 0;

                                            a {
                                                margin: 0 14px;
                                                font-size: 12px;
                                                line-height: 14px;
                                            }
                                        }
                                    }
                                }

                                .skin-navsearch-shistory:before,
                                .skin-navsea-viewhis:before {
                                    content: '';
                                    display: block;
                                    position: absolute;
                                    bottom: 0;
                                    left: 0;
                                    width: -webkit-fill-available;
                                    height: 1px;
                                    border-top: 1px solid #e5e5e5;
                                    margin: 0 14px;
                                }

                                .skin-navsea-viewhis {
                                    margin: 0;
                                    padding-bottom: 22px;
                                    position: relative;
                                    padding-top: 30px;

                                    h4 {
                                        padding: 0 14px;
                                        font-size: 14px;
                                        line-height: 16px;
                                        margin: 0 0 4px;

                                        a {
                                            right: 10px;
                                        }
                                    }

                                    ul {
                                        margin: 0 2px;

                                        li {
                                            padding: 0 12px;

                                            a {
                                                font-size: 12px;
                                                line-height: 14px;

                                                img {
                                                    width: 100px;
                                                }

                                                div {
                                                    padding: 9px 0 4px;
                                                }

                                                p {
                                                    font-size: 13px;
                                                    line-height: 14px;
                                                }
                                            }
                                        }
                                    }
                                }

                                .skin-navsea-comhis {
                                    margin: 0;
                                    padding-top: 29px;
                                    position: relative;

                                    h4 {
                                        padding: 0 14px;
                                        font-size: 14px;
                                        line-height: 16px;
                                        margin: 0 0 4px;
                                    }

                                    ul {
                                        padding: 0;

                                        li {
                                            margin: 4px 0;

                                            a {
                                                margin: 0 14px;
                                                font-size: 12px;
                                                line-height: 14px;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                .skin-navshop-goodsLists {
                    /deep/ .el-badge__content {
                        border-color: #F56C6C;
                    }

                    /deep/ .el-badge__content.is-fixed {
                        top: 8px;
                        right: 26px
                    }

                    .skin-navs-glistscont {
                        display: none;
                        width: 626px;
                        background: #fff;
                        position: absolute;
                        top: 50px;
                        right: 30px;

                        .skin-navmincart-gliststit {
                            padding-left: 32px;
                            padding-right: 20px;

                            ul {
                                font-size: 0;

                                li {
                                    display: inline-block;
                                    vertical-align: top;
                                    font-size: 18px;
                                    color: #000;
                                    height: 77px;
                                    line-height: 77px;
                                    width: 70px;
                                    background: #f5f5f5;
                                    text-align: center;
                                }

                                li:first-child {
                                    width: 342px;
                                    text-align: left;
                                    background: #fff;
                                }

                                li:last-child {
                                    width: 160px;
                                    background: #fff;
                                }
                            }
                        }

                        .skin-navmincart-gCont {
                            padding-left: 32px;
                            padding-right: 20px;
                            margin-bottom: 30px;

                            .skin-mincart-tinysco {
                                position: relative;

                                .skin-mincart-viewport {
                                    height: inherit;
                                    min-height: 264px;
                                    overflow: hidden;
                                    position: relative;

                                    .skin-mincart-view {
                                        position: relative;
                                        top: 0;

                                        ul {
                                            height: 264px;
                                            overflow: hidden;
                                            overflow-y: auto;

                                            li {
                                                height: auto !important;
                                                position: relative;
                                                text-align: initial;
                                                font-size: 0;
                                                color: #000;
                                                padding-bottom: 30px;

                                                div {
                                                    display: inline-block;
                                                    vertical-align: top;
                                                }

                                                .skin-mincart-proinfo {
                                                    font-size: 0;
                                                    width: 342px;

                                                    a {
                                                        display: inline-block;
                                                        vertical-align: top;

                                                        img {
                                                            width: 102px;
                                                            vertical-align: middle;
                                                            border: 1px solid #dadada;
                                                        }
                                                    }

                                                    .skin-mcart-proinfowrap {
                                                        width: calc(100% - 110px);
                                                        padding-left: 20px;
                                                        display: inline-block;
                                                        vertical-align: top;

                                                        .proTit {
                                                            margin-bottom: 20px;
                                                            color: #000;
                                                            font-size: 14px;
                                                            line-height: 14px;
                                                            a {
                                                                color: #000;
                                                                cursor: pointer;
                                                            }
                                                            a:hover {
                                                                text-decoration: underline;
                                                            }
                                                        }

                                                        .proColor {
                                                            line-height: 14px;

                                                            span {
                                                                display: inline-block;
                                                                vertical-align: middle;
                                                            }

                                                            .proiconsmaller {
                                                                width: 20px;
                                                                height: 20px;
                                                                border-radius: 50%;
                                                                margin-right: 10px;
                                                                background: #B64338;
                                                            }

                                                            span:last-child {
                                                                font-size: 12px;
                                                                color: #999;
                                                            }
                                                        }
                                                    }
                                                }

                                                .skin-mincart-pronum,
                                                .skin-mincart-propri {
                                                    position: absolute;
                                                    height: 100%;
                                                    text-align: center;
                                                    font-size: 0;

                                                    span {
                                                        font-size: 14px;
                                                        font-weight: 700;
                                                        vertical-align: middle;
                                                        display: inline-block;
                                                    }
                                                }

                                                .skin-mincart-pronum {
                                                    width: 70px;
                                                    background: #f5f5f5;
                                                }

                                                .skin-mincart-propri {
                                                    right: -16px;
                                                    width: 160px;
                                                }
                                            }
                                        }

                                        ul::-webkit-scrollbar-button {
                                            display: none;
                                        }
                                    }
                                }
                            }
                        }

                        .skin-navmincart-Ctotal {
                            background: #f5f5f5;
                            height: 60px;
                            line-height: 60px;
                            margin-bottom: 30px;
                            color: #000;

                            span:first-child {
                                width: 118px;
                                font-size: 18px;
                                font-weight: 700;
                            }

                            span:last-child {
                                width: 110px;
                                font-size: 14px;
                            }
                        }

                        .skin-navmincart-Ctosubbtn {
                            text-align: right;
                            padding-right: 30px;

                            .skin-bto-hover {
                                min-width: 200px;
                                height: 42px;
                                line-height: 32px;
                                text-align: center;
                            }
                        }
                    }
                }

                .skin-navshop-goodsLists:hover .skin-navs-glistscont {
                    display: block;
                }

                .skin-nav-con {
                    position: absolute;
                    display: none;
                    background: #fff;
                    width: 100%;
                    // top: 55px;
                    color: black;
                    left: 0px;

                    .skin-navcz-conLeft {
                        margin: 20px 0;
                        border-right: 1px solid #ccc;
                        width: 55%;

                        .skin-navcz-listss {
                            padding: 0 50px;
                            width: 80%;
                            line-height: 30px;

                            .skin-navcz-detail {
                                text-align: right;
                                width: 25%;
                            }
                        }

                        .skin-navnavcz-conLeft-lists {
                            width: 80%;
                            padding: 0 50px;

                            .skin-navcz-list {
                                text-align: right;
                                width: 25%;
                                float: right;
                            }
                        }
                    }

                    .skin-navcz-conRight {
                        width: 35%;
                        padding: 0 80px;
                        text-align: left;
                        margin: 20px 0;
                    }

                    .skin-nav-conLeft {
                        margin: 20px 0;
                        width: 50%;
                        border-right: 1px solid #ccc;

                        .skin-nav-conLeft-lists {
                            padding: 0 50px;
                            width: 100%;
                            text-align: right;

                            .skin-nav-list {
                                float: right;
                                width: 33%;
                            }
                        }

                        .skin-nav-listss {
                            padding: 0 50px;
                            width: 100%;
                            float: left;
                            line-height: 30px;

                            .skin-nav-detail {
                                width: 33%;

                                .skin-nav-detaillist {
                                    text-align: right;
                                }
                            }
                        }
                    }

                    .skin-nav-conRight {
                        padding: 0 80px;
                        width: 50%;
                        text-align: left;
                        margin: 20px 0;
                    }
                }
            }

            .skin-nav-lists:hover .skin-nav-con {
                display: block;
            }
        }

        .icon-lists {
            padding-top: 15px;

            li {
                padding: 0 8px;
                font-size: 24px;
                float: left;
            }

            .icon-list {
                position: relative;

                .shop-amount {
                    position: absolute;
                    left: 20px;
                    top: -9px;
                    width: 18px;
                    height: 18px;
                    border: 1px solid #D61B52;
                    color: white;
                    background: #D61B52;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 17px;
                    font-size: 12px;
                }
            }
        }

        .hufu-con-right {
            line-height: 27px;
        }

        #changxiao {
            background: transparent;
            width: 100%;
            margin: 0 auto;

            img {
                width: 80%;
            }
        }

        #GuanWang {
            background: transparent;
            width: 100%;
            margin: 0 auto;

            img {
                width: 50%;
            }
        }

        .log-samll {
            height: 30px;
            display: none;
            margin-top: 12px;
        }

        .skin-left-slide {
            position: fixed;
            top: 0;
            bottom: 0;
            width: 80%;
            background-color: white;
            left: -80%;
            transition: all 0.5s;
            padding: 30px;
            .skin-slide-close{
                position: absolute;
                z-index: 9999;
                top: 0;
                color: black;
                right: 0;
            }

            &.on {
                left: 0;
            }
        }
    }
</style>
