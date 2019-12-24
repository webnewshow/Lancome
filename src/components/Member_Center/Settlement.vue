<template>
    <div>
        <div class="skin-Settlement-container">
            <div class="skin-left-part">
                <div class="skin-infor-border">
                    <p>
                        请选择试用装（还可选
                        <span>5</span>
                        个）
                    </p>
                </div>
                <div class="skin-trial-items">
                    <ul class="skin-item-box">
                        <li>
                            <img src="./imagessettle/1529677667810987_100X100.png">
                            <p>水漾轻透隔离露（片装）</p>
                            <p>1ml</p>
                            <a class="skin-btn-choose skin-trial-good">选择</a>
                        </li>
                        <li>
                            <img src="./imagessettle/1534499777904495_100X100.jpg">
                            <p>新水份缘舒缓凝霜（片装）</p>
                            <p>1ml</p>
                            <a class="skin-btn-choose skin-trial-good">选择</a>
                        </li>
                        <li>
                            <img src="./imagessettle/15645642434066470_100X100.jpg">
                            <p>塑颜紧致焕白霜（片装）</p>
                            <p>1ml</p>
                            <a class="skin-btn-choose skin-trial-good">选择</a>
                        </li>
                        <li>
                            <img src="./imagessettle/15645642434066470_100X100.jpg">
                            <p>塑颜紧致焕白霜（片装）</p>
                            <p>1ml</p>
                            <a class="skin-btn-choose skin-trial-good">选择</a>
                        </li>
                        <li>
                            <img src="./imagessettle/15645642434066470_100X100.jpg">
                            <p>塑颜紧致焕白霜（片装）</p>
                            <p>1ml</p>
                            <a class="skin-btn-choose skin-trial-good">选择</a>
                        </li>
                    </ul>
                    <div class="skin-slide-toggle pointer" @click="slideDown()">展开更多小样选择
                        <span>﹀</span>
                    </div>
                </div>
                <div class="skin-Receiving-infor">
                    <div class="skin-receive-title">
                        填写收货信息
                    </div>
                    <div class="skin-receive-options">
                        <div class="skin-receive">
                            <input type="radio" class="skin-own-radio" name="receiveAddress" @change="addresschange(0)">
                            <div class="skin-receive-own">
                                <span class="name">{{addressthing[0].u_name}}</span>
                                <span class="address">{{addressthing[0].u_address}}</span>
                                <span class="postal-code">400000</span>
                                <span class="tel">{{addressthing[0].u_phone}}</span>
                            </div>
                            <div class="skin-operate-box">
                                <!-- <a class="edit" @click="addresschange(1)">编辑></a> -->
                                <a class="delete">删除></a>
                            </div>
                            <div class="skin-address-formown">
                                <div class="skin-form-left">
                                    <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="50px" class="demo-ruleForm">
                                        <el-form-item
                                            label="姓名"
                                            prop="name"
                                            :rules="[
                                            { required: true, message: '姓名不能为空'}
                                            ]">
                                            <el-input v-model="numberValidateForm.name" autocomplete="off" class="input-setting"></el-input>
                                        </el-form-item>
                                        <el-form-item
                                            label="所属地区"
                                            prop="place"
                                            :rules="[
                                            { required: true, message: '所属地区不能为空'}
                                            ]">
                                                <el-cascader
                                                style="display:block;"
                                                size="large"
                                                :options="options"
                                                v-model="newnumberValidateForm.place"
                                                @change="handleChange">
                                                </el-cascader>
                                        </el-form-item>
                                        <el-form-item
                                            label="详细地址"
                                            prop="detailPlace"
                                            :rules="[
                                            { required: true, message: '详细地址不能为空'}
                                            ]">
                                            <el-input v-model="numberValidateForm.detailPlace" autocomplete="off" class="input-setting"></el-input>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button @click="submitForm('numberValidateForm')" class="savechange">保存</el-button>
                                            <el-button @click="resetForm('numberValidateForm')" class="cancelchange">取消</el-button>
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <div class="skin-form-right">
                                    <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="50px" class="demo-ruleForm">
                                        <el-form-item
                                            label="您的手机"
                                            prop="phone"
                                            :rules="[
                                            { required: true, message: '手机不能为空'}
                                            ]">
                                            <el-input v-model="numberValidateForm.phone" autocomplete="off" class="input-setting"></el-input>
                                        </el-form-item>
                                        <el-form-item
                                            label="固定电话（电话格式：021-xxxxxxx）"
                                            prop="stablephone"
                                            >
                                            <el-input v-model="numberValidateForm.stablephone" autocomplete="off" class="input-setting"></el-input>
                                        </el-form-item>
                                        <el-form-item
                                            label="邮编"
                                            prop="postalCode"
                                            :rules="[
                                            { required: true, message: '邮编不能为空'}
                                            ]">
                                            <el-input v-model.number="numberValidateForm.postalCode" autocomplete="off" class="input-setting"></el-input>
                                        </el-form-item>
                                    </el-form>
                                </div>
                            </div>
                        </div>
                        <div class="skin-receive-new">
                            <label>
                                <input type="radio" class="skin-new-radio" name="receiveAddress" @change="addresschange(2)">
                                <div class="skin-receive-new">
                                    使用新地址
                                </div>
                            </label>
                            <div class="skin-address-form">
                                <div class="skin-form-left">
                                    <el-form :model="newnumberValidateForm" ref="newnumberValidateForm" label-width="50px" class="demo-ruleForm">
                                        <el-form-item
                                            label="姓名"
                                            prop="name"
                                            :rules="[
                                            { required: true, message: '姓名不能为空'}
                                            ]">
                                            <el-input v-model="newnumberValidateForm.name" autocomplete="off" class="input-setting"></el-input>
                                        </el-form-item>
                                        <el-form-item
                                            label="所属地区"
                                            prop="place"
                                            :rules="[
                                            { required: true, message: '所属地区不能为空'}
                                            ]">
                                                <el-cascader
                                                style="display:block;"
                                                size="large"
                                                :options="options"
                                                v-model="newnumberValidateForm.place"
                                                @change="handleChange">
                                                </el-cascader>
                                        </el-form-item>
                                        <el-form-item
                                            label="详细地址"
                                            prop="detailPlace"
                                            :rules="[
                                            { required: true, message: '详细地址不能为空'}
                                            ]">
                                            <el-input v-model="newnumberValidateForm.detailPlace" autocomplete="off" class="input-setting"></el-input>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button @click="submitForm('newnumberValidateForm')" class="savechange">保存</el-button>
                                            <el-button @click="resetForm('newnumberValidateForm')" class="cancelchange">取消</el-button>
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <div class="skin-form-right">
                                    <el-form :model="newnumberValidateForm" ref="newnumberValidateForm" label-width="50px" class="demo-ruleForm">
                                        <el-form-item
                                            label="您的手机"
                                            prop="phone"
                                            :rules="[
                                            { required: true, message: '手机不能为空'}
                                            ]">
                                            <el-input v-model="newnumberValidateForm.phone" autocomplete="off" class="input-setting"></el-input>
                                        </el-form-item>
                                        <el-form-item
                                            label="固定电话（电话格式：021-xxxxxxx）"
                                            prop="stablephone"
                                            >
                                            <el-input  v-model="newnumberValidateForm.stablephone" autocomplete="off" class="input-setting"></el-input>
                                        </el-form-item>
                                        <el-form-item
                                            label="邮编"
                                            prop="postalCode"
                                            :rules="[
                                            { required: true, message: '邮编不能为空'}
                                            ]">
                                            <el-input v-model="newnumberValidateForm.postalCode" autocomplete="off" class="input-setting"></el-input>
                                        </el-form-item>
                                    </el-form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="skin-pay-infor">
                    <div class="skin-pay-title">
                        选择支付方式及发票与留言
                    </div>
                    <ul class="skin-pay-options">
                        <li>
                            <label>
                                <input type="radio" name="payway">
                                <span class="skin-pay-zhifubao"></span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="payway">
                                <span class="skin-pay-weixin"></span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="payway">
                                <span class="skin-pay-bank"></span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="payway">
                                <span class="skin-arrive-pay">货到付款</span>
                            </label>
                        </li>
                    </ul>
                    <div class="skin-invoice">
                        <label>
                            <input type="checkbox" class="invoice-checkbox" @change="invoiceSlide()">
                            <span>发票信息</span>
                        </label>
                        <div class="skin-invoice-content">
                            <div class="skin-form-invoice">
                                <div style="display: inline-block; vertical-align: top;">
                                    <p>
                                        发票类型<span>*</span>
                                    </p>
                                    <div style="display:inline-block;">
                                        <select class="selection" @change="selectContent()">
                                            <option value="个人">个人</option>
                                            <option value="公司">公司</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="skin-company-invoice">
                                    <div>
                                        <p>
                                            公司名称<span>*</span>
                                        </p>
                                        <input type="text" placeholder="请输入公司抬头">
                                    </div>
                                    <div>
                                        <p>
                                           纳税人识别号<span>*</span>
                                        </p>
                                        <input type="text" placeholder="请输入纳税人识别号">
                                    </div>
                                </div>
                            </div>
                            <div class="skin-btn-invoice skin-btn-choose">
                                <a>保存</a>
                            </div>
                        </div>
                    </div>
                    <div class="skin-leave-message">
                        <label>
                            <input type="checkbox" class="leavemessage-checkbox" @change="leavemessageSlide()">
                            <span>给我们留言</span>
                        </label>
                        <div class="skin-leavemessage-content">
                            <div class="skin-form-leavemessage">
                                <p>
                                    您的信息<span>（250个字以内）</span>
                                </p>
                                <div>
                                <textarea row="5" placeholder="请输入内容" maxlength="250"></textarea>
                                </div>
                            </div>
                            <div class="skin-btn-leavemessage skin-btn-choose">
                                <a>保存</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="skin-total-infor">
                    <div class="skin-total-title">
                        订单总结
                    </div>
                    <ul>
                        <li class="clearfix">
                            <span class="skin-detail-price">商品价格</span>
                            <span class="skin-price-itself">￥{{this.datas[0].g_price}}</span>
                        </li>
                        <li class="clearfix">
                            <span class="skin-detail-price">优惠价格</span>
                            <span class="skin-price-itself">¥ 0</span>
                        </li>
                        <li class="clearfix">
                            <span class="skin-detail-price">运费</span>
                            <span class="skin-price-itself">免运费</span>
                        </li>
                        <li class="clearfix">
                            <span class="skin-detail-price">总价</span>
                            <span class="skin-price-itself">￥{{this.datas[0].g_price*this.datas[0].g_num}}</span>
                        </li>
                    </ul>
                    <div class="skin-totalprice-btn">
                        <a href="/user/order" class="skin-btn-choose">立即结算</a>
                    </div>
                </div>
            </div>
            <div class="skin-settle-goods">
                <div class="skin-order-summary">
                    <div class="skin-summary-title">订单总结</div>
                    <router-link
                    class="skin-summary-btn pointer"
                    style="display: block;"
                    to="/user/order"
                    >立即结算</router-link>
                    <ul class="skin-summary-right">
                        <li class="clearfix">
                            <span class="skin-detail-price">商品价格</span>
                            <span class="skin-price-itself">￥{{this.datas[0].g_price}}</span>
                        </li>
                        <li class="clearfix">
                            <span class="skin-detail-price">优惠价格</span>
                            <span class="skin-price-itself">¥ 0</span>
                        </li>
                        <li class="clearfix">
                            <span class="skin-detail-price">运费</span>
                            <span class="skin-price-itself">免运费</span>
                        </li>
                        <li class="clearfix">
                            <span class="skin-detail-price">总价</span>
                            <span class="skin-price-itself">￥{{this.datas[0].g_price*this.datas[0].g_num}}</span>
                        </li>
                    </ul>
                </div>
                <div class="skin-shopping-cart">
                    <div class="skin-shoppingcart-title">您的购物车</div>
                    <ul class="skin-shoppingcart-goods">
                        <li v-for="(items, index) of datas" :key='index'>
                            <img :src="'http://192.168.97.254:3000/'+items.g_img.split(',')[0]">
                            <p>{{items.g_title}}</p>
                            <p>{{items.g_type}}</p>
                            <div class="clearfix">
                                <span class="skin-cart-num">{{items.g_num}}</span>
                                <span class="skin-cart-price">￥
                                    <span class="skin-price-num" style="font-size: 14px;">{{items.g_price}}</span>
                                </span>
                            </div>
                        </li>
                    </ul>
                    <div class="skin-pull-down pointer" @click="slidedowncart()">▼</div>
                    <div class="skin-backto-edit">
                        <a>返回修改</a>
                    </div>
                </div>
                <div class="skin-customer-service">
                    <div class="skin-service-title">客服中心</div>
                    <p>如有任何问题，请联系我们</p>
                    <p>400-820-8016</p>
                    <div class="skin-ask-online skin-btn-choose">
                        在线咨询
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { regionDataPlus } from 'element-china-area-data'
import api from '../Member_Center/js/api'
import axios from 'axios'
export default {
    data () {
        return {
            addressthing: '',
            datas: '',
            totalprice: 0,
            numberValidateForm: {
                name: '',
                place: '',
                detailPlace: '',
                phone: '',
                stablephone: '',
                postalCode: ''
            },
            newnumberValidateForm: {
                name: '',
                place: '',
                detailPlace: '',
                phone: '',
                stablephone: '',
                postalCode: ''
            },
            options: regionDataPlus,
            api: 'http://192.168.97.254:3000/'
        }
    },
    methods: {
        handleChange (value) {
            console.log(value)
        },
        consoleapi () {
            console.log(this.api)
        },
        slideDown () {
            var slidebox = document.querySelector('.skin-item-box')
            var items = slidebox.querySelectorAll('li')
            var TotalHeight = ''
            var row = items.length / 3
            var ParseIntrow = parseInt(row)
            if (ParseIntrow === row) {
                TotalHeight = 266 + (ParseIntrow - 1) * 301
            } else {
                TotalHeight = 266 + ParseIntrow * 301
            }
            console.log(row)
            var slideBTN = document.querySelector('.skin-slide-toggle')
            var HeightStyle = window.getComputedStyle(slidebox, null).height
            if (HeightStyle === '300px') {
                slidebox.style.height = TotalHeight + 'px'
                slideBTN.innerHTML = `收起选取小样 <span>︿</span>`
            } else {
                slidebox.style.height = '300px'
                slideBTN.innerHTML = `展开更多小样选择 <span>﹀</span>`
            }
        },
        slidedowncart () {
            var cart = document.querySelector('.skin-shoppingcart-goods')
            var cartHeight = window.getComputedStyle(cart, null).height
            var goodsnum = cart.querySelectorAll('li').length
            var slidedownBTn = document.querySelector('.skin-pull-down')
            var divpage = document.querySelector('.skin-Settlement-container')
            var divpagedelta = (goodsnum - 4) * 140
            if (cartHeight === '443px') {
                cart.style.height = goodsnum * 140 + 'px'
                divpage.style.marginBottom = divpagedelta + 'px'
                slidedownBTn.innerHTML = `▲`
            } else {
                cart.style.height = 443 + 'px'
                slidedownBTn.innerHTML = `▼`
                divpage.style.marginBottom = 0
            }
        },
        invoiceSlide () {
            var stateCheckbox = document.querySelector('.invoice-checkbox')
            var displayContent = document.querySelector('.skin-invoice-content')
            if (stateCheckbox.checked) {
                displayContent.style.height = 151 + 'px'
            } else {
                displayContent.style.height = 0 + 'px'
            }
        },
        leavemessageSlide () {
            var stateCheckbox = document.querySelector('.leavemessage-checkbox')
            var displayContent = document.querySelector('.skin-leavemessage-content')
            if (stateCheckbox.checked) {
                displayContent.style.height = 206 + 'px'
            } else {
                displayContent.style.height = 0 + 'px'
            }
        },
        selectContent () {
            var selection = document.querySelector('.selection')
            var companyinvoice = document.querySelector('.skin-company-invoice')
            var index = selection.selectedIndex
            var displayContent = document.querySelector('.skin-invoice-content')
            if (index === 1) {
                displayContent.style.height = 255 + 'px'
                companyinvoice.style.display = 'inline-block'
            } else {
                companyinvoice.style.display = 'none'
            }
        },
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!')
                    console.log(this.newnumberValidateForm)
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
            console.log(1111111)
        },
        resetForm (formName) {
            this.$refs[formName].resetFields()
            console.log(2222222)
        },
        addresschange (index) {
            var ownaddress = document.querySelector('.skin-address-formown')
            var newaddress = document.querySelector('.skin-address-form')
            var owncheckbox = document.querySelector('.skin-own-radio')
            if (index === 0) {
                newaddress.style.display = 'none'
            } else if (index === 1) {
                ownaddress.style.display = 'block'
                newaddress.style.display = 'none'
                owncheckbox.checked = true
            } else {
                ownaddress.style.display = 'none'
                newaddress.style.display = 'block'
            }
        },
        cancelchangebtn () {
            console.log(this)
        },
        GetCartgoods () {
            this.datas = this.$store.state.getDetail.selectLists
            if (this.datas != '') {
                this.datas = this.datas
            } else {
                this.datas = JSON.parse(window.localStorage.getItem('selectInfo'))
            }
            console.log(this.datas)
            return this.datas
        },
        getaddress () {
            axios({
                url: api + 'getvipuser',
                method: 'get'
            }).then((res) => {
                console.log(res)
                this.addressthing = res.data.data
            })
        }
    },
    mounted () {
        this.getaddress()
        this.GetCartgoods()
        window.onload = () => {
            var itemprice = document.querySelectorAll('.skin-price-num')
            var hereprice = 0
            var totalhereprice = 0
            for (var i = 0; i < itemprice.length; i++) {
                hereprice = itemprice[i].innerText
                hereprice = parseInt(hereprice)
                totalhereprice += hereprice
            }
            this.totalprice = totalhereprice
            this.consoleapi()
        }
    }
}
</script>
<style scoped lang='less'>
@import './css/common.less';
@import './css/Settlement.less';
.savechange {
    font-size: 14px;
    min-width: 160px;
    height: 42px;
    line-height: 42px;
    padding: 0 20px;
    color: #fff;
    background: #000;
    margin-right: 14px;
    transition: all .2s ease-in-out;
    border-radius: 0;
    border: none;
}
.savechange:hover {
    background: #d61b52;
}
.cancelchange {
    font-size: 14px;
    min-width: 160px;
    height: 42px;
    line-height: 42px;
    padding: 0 20px;
    color: #000;
    background: #fff;
    margin-right: 14px;
    transition: all .2s ease-in-out;
    border-radius: 0;
    border: 1px solid black;
}
.skin-form-left {
    padding-right: 10px;
    /deep/ .el-form-item__label {
        width: auto !important;
    }
    /deep/ .el-form-item__content {
                margin-left: 0px !important;
                margin-bottom: 30px;
                .el-input {
                    .el-input__inner {
                        border-radius: 0px;
                        font-size: 14px
                    }
                }
            }
}
.skin-form-right {
    vertical-align: top;
    padding-left: 10px;
    /deep/ .el-form-item__label {
        width: auto !important;
    }
    /deep/ .el-form-item__content {
                margin-left: 0px !important;
                margin-bottom: 30px;
                .el-input {
                    .el-input__inner {
                        border-radius: 0px;
                        font-size: 14px
                    }
                }
            }
}
</style>
