<template>
    <div>
        <!-- 空购物车 -->
        <div id="simpleCart" class="skin-emptyShop-pro">
            <div class="skin-content-container skin-simple-shopCart" style="margin:0 auto;">
                <div>
                    <div class="skin-sc-goShop">
                        <router-link to="/detail"><i class="el-icon-arrow-left"></i>继续购物</router-link>
                    </div>
                    <h1 class="skin-simple-sShopTit text-center">您的购物袋是空的</h1>
                </div>
            </div>
            <div class="skin-empty-shopBox">
                <div class="skin-empty-shopTip">
                    <ul class="clearfix">
                        <li class="fl skin-shopTip-item">
                            <h3>寻觅灵感？</h3>
                            <router-link to="/">立即购买您喜爱的产品</router-link>
                        </li>
                        <li class="fl skin-shopTip-item">
                            <h3>想要找到心仪的礼物?</h3>
                            <router-link to="/">挑选合适TA的精美礼物</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="skin-empty-imgToIndex">
                <router-link to="/">
                    <img src="./images/15.jpg" alt="">
                </router-link>
            </div>
        </div>
        <!-- 有商品购物车 -->
        <div id="pullCart" class="skin-fullShop-pro">
            <div class="skin-content-container skin-simple-shopCart" style="margin:0 auto;">
                <div>
                    <div class="skin-sc-goShop">
                        <router-link to="/hot"><i class="el-icon-arrow-left"></i>继续购物</router-link>
                    </div>
                    <h1 class="skin-simple-sShopTit text-center">我的购物袋（{{this.goodslist.length}}）</h1>
                    <div class="skin-shopC-cont clearfix">
                        <div class="fl skin-shopC-left">
                            <div class="skin-shopC-listTit">
                                <el-checkbox
                                v-model="checkAll"
                                @change="chooseAll"
                                >全选</el-checkbox>
                                <div class="skin-shopC-lrlist clearfix">
                                    <div class="fl skin-shopC-gName">商品信息</div>
                                    <div class="fl skin-shopC-gPri">单价</div>
                                    <div class="fl skin-shopC-qty">数量</div>
                                    <div class="fl skin-shopC-gSum">小计</div>
                                </div>
                            </div>
                            <div class="skin-shopC-content">
                                <!-- 商品内容 -->
                                <div class="skin-shopC-eCont">
                                    <div class="skin-shopcart-list"
                                    v-for="item in this.goodslist"
                                    :key="item.g_id"
                                    >
                                        <el-checkbox
                                        v-model="checked"
                                        ></el-checkbox>
                                        <div class="skin-shopcart-rightlist clearfix">
                                            <!-- 名称 -->
                                            <div class="skin-sc-goods fl">
                                                <div class="skin-sc-listimg">
                                                    <img :src="'http://192.168.97.254:3000/'+item.g_img.split(',')[0]" alt="">
                                                </div>
                                                <div class="skin-sc-listdetail">
                                                    <p class="skin-sc-listname">{{item.g_title}}</p>
                                                    <span>个</span>
                                                </div>
                                            </div>
                                            <!-- 单价 -->
                                            <div class="skin-unit-price fl">
                                                <p>￥{{item.g_price}}</p>
                                            </div>
                                            <!-- 数量 -->
                                            <div class="skin-sc-sqty fl">
                                                <el-select v-model="value" placeholder="请选择">
                                                    <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </div>
                                            <!-- 小计 -->
                                            <div class="skin-sc-gallpri fl">
                                                <div>
                                                    <p>￥{{item.g_num*item.g_price}}</p>
                                                </div>
                                            </div>
                                            <!-- 编辑 -->
                                            <div class="skin-sc-compile fl">
                                                <ul class="clearfix">
                                                    <li class="fl">
                                                        <a class="skin-sc-gedit">修改</a>
                                                    </li>
                                                    <li class="fl">
                                                        <a class="skin-sc-gshoucang">
                                                            <span>+ 收藏夹</span>
                                                        </a>
                                                    </li>
                                                    <li class="fl">
                                                        <a @click="deldata(item.g_id)">删除</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- 促销活动 -->
                                <div class="skin-sc-useBox">
                                    <div class="skin-sc-useCont">
                                        <span class="skin-sc-useTit">官网尊享</span>
                                        <div class="skin-sc-usetail">
                                            <div class="skin-sc-actcont">
                                                <h5>官网购物 臻享多重好礼</h5>
                                                <br />
                                                <span>1-新客首次购买满520元（含套装），即赠奇迹香水1.2ml。</span>
                                                <span>2-全场任意购买正装，结账时即可任选5件星品体验礼。</span>
                                                <span>活动1同享活动2</span>
                                                <span>*结算时使用现金抵扣券，将不同享官网任意活动促销代码。</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- 促销代码 -->
                                <!-- <div class="skin-sc-useBox">
                                    <div class="skin-sc-useCont">
                                        <span class="skin-sc-useTit">促销代码</span>
                                        <div class="skin-sc-usetail clearfix">
                                            <div class="skin-sc-salecode">
                                                <div class="skin-sc-codeinput">
                                                    <el-input v-model="inputcode" placeholder="请输入促销代码"></el-input>
                                                </div>
                                                <a class="skin-bto-hover subasle-code">提交</a>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                <!-- 送礼服务 -->
                                <div class="skin-sc-useBox">
                                    <div class="skin-sc-useCont skin-sc-giftserver">
                                        <span class="skin-sc-useTit">您是否需要免费送礼服务？</span>
                                        <div class="skin-sc-giftserbox">
                                            <el-checkbox v-model="tipschecked">是</el-checkbox>
                                        </div>
                                        <p class="skin-sc-gifttips">选择免费送礼服务，兰蔻将提供专属祝福卡片
                                            和礼品包装服务，随附礼品收据不显示价格。</p>
                                        <div class="skin-sc-tipsedtxt">
                                            <div class="skin-sc-tiptxtbox">
                                                <div class="skin-sc-tiptxtcont">
                                                    <p>添加卡片赠言（可选）</p>
                                                    <p class="skin-sc-tiptxtP">可在下方输入框写上您的祝福。如不需要，将为您提供
                                                        空白祝福卡。如需多个礼盒，请备注数量。</p>
                                                    <div class="skin-sc-tiptxtin">
                                                        <el-input v-model="inputtext" placeholder="输入祝福语（30字以内）"></el-input>
                                                        <a class="skin-bto-hover skin-sc-tiptxtbtn">提交</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- 订单总价 -->
                                <div class="skin-sc-useBox">
                                    <div class="skin-sc-useCont clearfix">
                                        <span class="skin-sc-useTit">订单总价</span>
                                        <div class="skin-sc-oderpri fr">
                                            <p>商品价格<span class="fr">￥{{this.pritotal}}</span></p>
                                            <p>优惠金额<span class="fr">￥0</span></p>
                                            <p>运费<span class="fr">免运费</span></p>
                                        </div>
                                    </div>
                                </div>
                                <!-- 结算 -->
                                <div class="skin-sc-totalbox clearfix">
                                    <p class="skin-sc-totalpri fr">
                                        总价<span class="fr">￥{{this.pritotal}}</span>
                                    </p>
                                    <div class="skin-sc-totalgo clearfix">
                                        <div class="skin-sc-totallg">
                                            <router-link to="/hot" class="txtxttx"><i class="el-icon-arrow-left"></i>继续购物</router-link>
                                            <a href="/Settlement" class="skin-bto-hover skin-sc-toprisub fr">立即结算</a>
                                        </div>
                                        <div class="skin-sc-totalsm clearfix">
                                            <p class="skin-sc-totalmob fl">总价: <span>￥{{this.pritotal}}</span></p>
                                            <a class="skin-sc-mobgoshop fl">继续购物</a>
                                            <a href="/Settlement" class="skin-bto-hover skin-sc-toprisub fl">立即结算</a>
                                            <a class="skin-sc-mobservice fr">
                                                <i class="skin-small-icon skin-sc-mobsericon"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="fr skin-shopC-right">
                            <div class="skin-sc-rightorder">
                                <h3>订单总结</h3>
                                <a href="/Settlement" class="skin-bto-hover skin-sc-rightsubbtn">立即结算</a>
                                <div class="skin-sc-rcartPri">
                                    <p>商品价格<span class="fr">￥{{this.goodslist[0].g_price}}</span></p>
                                    <p>优惠金额<span class="fr">￥0</span></p>
                                    <p>运费<span class="fr">免运费</span></p>
                                    <p>总价<span class="fr">￥{{this.pritotal}}</span></p>
                                </div>
                            </div>
                            <div class="skin-sc-rserveronline">
                                <h3>客服中心</h3>
                                <p>如有任何问题，请联系我们</p>
                                <p>400-820-8016</p>
                                <a class="skin-bto-hover skin-sc-onserbtn">在线客服</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <SCFooter></SCFooter> -->
    </div>
</template>

<script>
import SCFooter from './sc_buttom'
export default {
    data () {
        return {
            data: {
                price: 520
            },
            checkAll: true,
            checked: true,
            tipschecked: false,
            inputtext: '',
            inputcode: '',
            checkList: ['1'],
            value: 1,
            domWidth: '',
            options: [{
                value: 1,
                label: 1
            }, {
                value: 2,
                label: 2
            }, {
                value: 3,
                label: 3
            }, {
                value: 4,
                label: 4
            }, {
                value: 5,
                label: 5
            }],
            goodslist: ''
        }
    },
    components: {
        SCFooter
    },
    methods: {
        toChangeBottom () {
            let urlName = window.location.pathname
            if (urlName === '/shopCart') {
                let footerOne = document.getElementById('skin-sc-footer')
                let footerTwo = document.getElementById('skin-Index-Bottom')
                let fixRightReTop = document.querySelector('.skin-Index-Slide .skin-btn')
                footerOne.style.display = 'block'
                footerTwo.style.display = 'none'
                fixRightReTop.style.opacity = 0.6
            }
        },
        getBottomWidth () {
            this.domWidth = window.innerWidth
            let shopBottom = document.getElementById('skin-sc-footer')
            if (this.domWidth <= 1024) {
                shopBottom.style.display = 'none'
            } else {
                shopBottom.style.display = 'block'
            }
        },
        getselectgoods () {
            let shopclist = this.$store.state.getDetail.selectLists
            if (shopclist != '') {
                this.goodslist = shopclist
            } else {
                this.goodslist = JSON.parse(window.localStorage.getItem('selectInfo'))
            }
            return this.goodslist
        },
        // 判断是否为空购物车
        orSimple () {
            let simpleCart = document.getElementById('simpleCart')
            let pullCart = document.getElementById('pullCart')
            if (this.goodslist.length > 0) {
                pullCart.style.display = 'block'
                simpleCart.style.display = 'none'
            } else {
                pullCart.style.display = 'none'
                simpleCart.style.display = 'block'
            }
        },
        deldata (id) {
            console.log(id)
            this.$store.commit('deldata', id)
            this.getselectgoods()
        },
        chooseAll (val) {
            console.log(val)
            if (!val) {
                this.checked = false
            } else {
                this.checked = true
            }
        },
        chooseOne () {
            let selcetlist = document.querySelectorAll('.skin-shopcart-list .el-checkbox__input')
            console.log(selcetlist)
            for (let i = 0; i < selcetlist.length; i++) {
                console.log(selcetlist[i])
                selcetlist[i].onclick = () => {
                    console.log(111)
                    selcetlist[i].classList.add('is-checked')
                }
            }
        }
    },
    mounted () {
        window.addEventListener('resize', this.getBottomWidth)
        this.getselectgoods()
        // this.toChangeBottom()
        // this.getBottomWidth()
        // this.orSimple()
        let selcetlist = document.querySelectorAll('.skin-shopcart-list .el-checkbox__input')
        console.log(selcetlist)
        for (let i = 0; i < selcetlist.length; i++) {
            console.log(selcetlist[i])
            selcetlist[i].onclick = () => {
                console.log(111)
                selcetlist[i].classList.add('is-checked')
            }
        }
    },
    computed: {
        pritotal () {
            let toPri = 0
            for (let ite of this.goodslist) {
                toPri += ite.g_price * ite.g_num
            }
            return toPri
        }
    }
}
</script>

<style lang="less" scoped>
@import "./css/de_public.less";
@import "./css/shopCart.less";
@import "./css/shopCmedia.less";
</style>
