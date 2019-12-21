<template>
    <div>
       <div class="skin-login-part">
           <img src='./imagesIntegral/banner_login_bg.jpg' class="skin-bigbanner">
           <div class="skin-login-box">
                <img src='./imagesIntegral/banner_logo_01.png' class="titleIntegral">
                <div class="skin-btn-box">
                    <button type="button" class="skin-login-btn pointer">
                        <span>兰</span>
                        <span>蔻</span>
                    </button>
                </div>
           </div>
       </div>
       <div class="skin-contents">
       <div class="skin-switch-btns">
           <ul class="clearfix">
               <li class="skin-switch-btn integralon" id="skin-switch-btn">
                   <span>
                        <img src='./imagesIntegral/icon_gift_black.png' class="IconOn skin-title-img">
                        <img src='./imagesIntegral/icon_gift.png' class="skin-title-img">
                   </span>
                   会员礼遇
               </li>
               <li class="skin-switch-btn" id="skin-switch-btn">
                   <span>
                       <img src='./imagesIntegral/icon_rose_black.png' class="IconOn skin-title-img">
                       <img src='./imagesIntegral/icon_rose.png' class="skin-title-img">
                   </span>
                   入会规则
               </li>
               <li class="skin-switch-btn" id="skin-switch-btn">
                   <span>
                       <img src='./imagesIntegral/icon_order_black.png' class="IconOn skin-title-img">
                       <img src='./imagesIntegral/icon_order.png' class="skin-title-img">
                   </span>
                   服务预约
               </li>
           </ul>
       </div>
       <div class="skin-content-gift skin-content contenton">
            <div class="skin-container-integral">
                <div class="skin-container-gift clearfix">
                    <div class="skin-img-box01 fr">
                        <img src="./imagesIntegral/gift_01.jpg">
                    </div>
                    <img src="./imagesIntegral/num_01.jpg" class="num01">
                    <div class="skin-gift-title1 fl marginTop10">
                        <h4>
                            <hr class="cutline01"/>
                            积分特权
                            <hr class="cutline02"/>
                        </h4>
                        <p>购买即赠积分，兑换明星好礼</p>
                    </div>
                </div>
                <div class="skin-container-gift clearfix">
                    <div class="skin-img-box01 fl">
                        <img src="./imagesIntegral/gift_02.jpg">
                    </div>
                    <img src="./imagesIntegral/num_02.jpg" class="num02">
                    <div class="skin-gift-title1 fr marginTop5">
                        <h4>
                            <hr class="cutline01"/>
                            生日特权
                            <hr class="cutline02"/>
                        </h4>
                        <p>购买即赠积分，兑换明星好礼</p>
                        <p>并享多倍积分</p>
                        <p>金卡黑卡客人生日月臻享星品福袋</p>
                    </div>
                </div>
                <div class="skin-container-gift clearfix">
                    <div class="skin-img-box01 fr">
                        <img src="./imagesIntegral/gift_03.jpg">
                    </div>
                    <img src="./imagesIntegral/num_03.jpg" class="num03">
                    <div class="skin-gift-title1 fl marginTop10">
                        <h4>
                            <hr class="cutline01"/>
                            入会特权
                            <hr class="cutline02"/>
                        </h4>
                        <p>银卡及以上等级客人，</p>
                        <p>入会即享升级好礼</p>
                    </div>
                </div>
            </div>
       </div>
       <div class="skin-content-rule skin-content">
           <div class="skin-container-integral">
                <div class="skin-container-rule clearfix">
                    <div class="skin-rule-title1 fr">
                        <div class="skin-detail-btn01 marginbottom5">
                            <router-link to="/normalCard">
                                <a class="rosered">查看权益详情 》</a>
                            </router-link>
                        </div>
                        <h4 class="rosered fontSize1-0">
                            积分特权
                        </h4>
                            <p>
                            在兰蔻专柜、网上官方商城及
                            <br>
                            天猫官方旗舰店购买任意产品
                            <br>
                            即可加入「兰蔻普卡俱乐部」，会籍终生有效。
                        </p>
                    </div>
                    <div class="skin-img-box01 fl">
                        <img src="./imagesIntegral/rules_01.jpg">
                    </div>
                </div>
                <div class="skin-container-rule clearfix">
                    <div class="skin-rule-title1 fl">
                        <div class="skin-detail-btn02 marginbottom5">
                            <router-link to="/silverCard">
                                <a class="silver">查看权益详情 》</a>
                            </router-link>
                        </div>
                        <h4 class="silver fontSize2-0">
                            银卡俱乐部
                        </h4>
                            <p>
                            在兰蔻专柜、网上官方商城及
                            <br>
                            天猫官方旗舰店购买任意产品
                            <br>
                            即可加入「兰蔻普卡俱乐部」，会籍终生有效。
                        </p>
                    </div>
                    <div class="skin-img-box01 fr">
                        <img src="./imagesIntegral/rules_02.jpg">
                    </div>
                </div>
                <div class="skin-container-rule clearfix">
                    <div class="skin-rule-title1 fr">
                        <div class="skin-detail-btn03 marginbottom5">
                            <router-link to="/goldCard">
                                <a class="gold">查看权益详情 》</a>
                            </router-link>
                        </div>
                        <h4 class="gold fontSize2-0">
                            金卡私享荟
                        </h4>
                            <p>
                            在兰蔻专柜、网上官方商城及
                            <br>
                            天猫官方旗舰店购买任意产品
                            <br>
                            即可加入「兰蔻普卡俱乐部」，会籍终生有效。
                        </p>
                    </div>
                    <div class="skin-img-box01 fl">
                        <img src="./imagesIntegral/rules_03.jpg">
                    </div>
                </div>
                <div class="skin-container-rule clearfix">
                    <div class="skin-rule-title1 fl">
                        <div class="skin-detail-btn04 marginbottom5">
                            <router-link to="/blackCard">
                                <a class="black">查看权益详情 》</a>
                            </router-link>
                        </div>
                        <h4 class="black fontSize2-0">
                            黑卡私享荟
                        </h4>
                            <p>
                            在兰蔻专柜、网上官方商城及
                            <br>
                            天猫官方旗舰店购买任意产品
                            <br>
                            即可加入「兰蔻普卡俱乐部」，会籍终生有效。
                        </p>
                    </div>
                    <div class="skin-img-box01 fr">
                        <img src="./imagesIntegral/rules_04.jpg">
                    </div>
                </div>
            </div>
       </div>
       <div class="skin-content-order skin-content">
           <div class="skin-container-integral">
               <div class="skin-title-date">
                    <div>
                       <h3>与兰蔻的美丽约会</h3>
                    </div>
                   <p>
                    关注兰蔻微信公众号，
                    <br>
                    注册成为兰蔻会员并绑定微信，
                    <br><br>
                    即可专享每月一次
                        <span class="Color-only">
                        免费福利1对1
                        </span>
                    专柜美容服务
                   </p>
               </div>
               <div class="skin-content-date">
                   <router-link to="/product01">
                        <div class="skin-img-box">
                            <img src="./imagesIntegral/img_service_11.jpg">
                        </div>
                        <div class="skin-img-box02">
                            <img src="./imagesIntegral/img_service_11.jpg">
                        </div>
                        <div class="skin-text-box">
                            <a>
                                <h4>明星「小黑瓶」大眼精华超声波导入</h4>
                                <p>改善浮肿、细纹、黑眼圈</p>
                            </a>
                        </div>
                   </router-link>
               </div>
               <div class="skin-content-date">
                   <router-link to="/product02">
                        <div class="skin-img-box02">
                            <img src="./imagesIntegral/img_service_12.jpg">
                        </div>
                        <div class="skin-text-box">
                            <a>
                                <h4>明星「小黑瓶」大眼精华超声波导入</h4>
                                <p>改善浮肿、细纹、黑眼圈</p>
                            </a>
                        </div>
                        <div class="skin-img-box">
                            <img src="./imagesIntegral/img_service_12.jpg">
                        </div>
                   </router-link>
               </div>
               <div class="skin-content-date">
                   <router-link to="/product03">
                        <div class="skin-img-box02">
                            <img src="./imagesIntegral/img_service_01.jpg">
                        </div>
                        <div class="skin-img-box">
                            <img src="./imagesIntegral/img_service_01.jpg">
                        </div>
                        <div class="skin-text-box">
                            <a>
                                <h4>明星「小黑瓶」大眼精华超声波导入</h4>
                                <p>改善浮肿、细纹、黑眼圈</p>
                            </a>
                        </div>
                   </router-link>
               </div>
               <div class="skin-content-date">
                   <router-link to="/product04">
                        <div class="skin-img-box02">
                            <img src="./imagesIntegral/img_service_02.jpg">
                        </div>
                        <div class="skin-text-box">
                            <a>
                                <h4>明星「小黑瓶」大眼精华超声波导入</h4>
                                <p>改善浮肿、细纹、黑眼圈</p>
                            </a>
                        </div>
                        <div class="skin-img-box">
                            <img src="./imagesIntegral/img_service_02.jpg">
                        </div>
                   </router-link>
               </div>
               <div class="skin-content-date">
                    <router-link to="/product05">
                        <div class="skin-img-box02">
                            <img src="./imagesIntegral/img_service_03.jpg">
                        </div>
                        <div class="skin-img-box">
                            <img src="./imagesIntegral/img_service_03.jpg">
                        </div>
                        <div class="skin-text-box">
                            <a>
                                <h4>明星「小黑瓶」大眼精华超声波导入</h4>
                                <p>改善浮肿、细纹、黑眼圈</p>
                            </a>
                        </div>
                    </router-link>
               </div>
               <div class="skin-content-date">
                   <router-link to="/product06">
                        <div class="skin-img-box02">
                            <img src="./imagesIntegral/img_service_04.jpg">
                        </div>
                        <div class="skin-text-box">
                            <a>
                                <h4>明星「小黑瓶」大眼精华超声波导入</h4>
                                <p>改善浮肿、细纹、黑眼圈</p>
                            </a>
                        </div>
                        <div class="skin-img-box">
                            <img src="./imagesIntegral/img_service_04.jpg">
                        </div>
                   </router-link>
               </div>
               <div class="skin-content-date">
                   <router-link to="/product07">
                        <div class="skin-img-box02">
                            <img src="./imagesIntegral/img_service_08.jpg">
                        </div>
                        <div class="skin-img-box">
                            <img src="./imagesIntegral/img_service_08.jpg">
                        </div>
                        <div class="skin-text-box">
                            <a>
                                <h4>明星「小黑瓶」大眼精华超声波导入</h4>
                                <p>改善浮肿、细纹、黑眼圈</p>
                            </a>
                        </div>
                   </router-link>
               </div>
               <div class="skin-content-date">
                   <router-link to="/product08">
                        <div class="skin-img-box02">
                            <img src="./imagesIntegral/img_service_09.jpg">
                        </div>
                        <div class="skin-text-box">
                            <a>
                                <h4>明星「小黑瓶」大眼精华超声波导入</h4>
                                <p>改善浮肿、细纹、黑眼圈</p>
                            </a>
                        </div>
                        <div class="skin-img-box">
                            <img src="./imagesIntegral/img_service_09.jpg">
                        </div>
                   </router-link>
               </div>
               <div class="skin-content-date">
                   <router-link to="/product09">
                        <div class="skin-img-box02">
                            <img src="./imagesIntegral/img_service_10.jpg">
                        </div>
                        <div class="skin-img-box">
                            <img src="./imagesIntegral/img_service_10.jpg">
                        </div>
                        <div class="skin-text-box">
                            <a>
                                <h4>明星「小黑瓶」大眼精华超声波导入</h4>
                                <p>改善浮肿、细纹、黑眼圈</p>
                            </a>
                        </div>
                   </router-link>
               </div>
           </div>
       </div>
       </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        BTNswitch () {
            var parent = document.querySelector('.skin-contents')
            var switchBTNs = parent.querySelectorAll('.skin-switch-btn')
            var skincontent = parent.querySelectorAll('.skin-content')
            for (var i = 0; i < switchBTNs.length; i++) {
                switchBTNs[i].index = i
                switchBTNs[i].onmouseenter = function () {
                    var target = switchBTNs[this.index].firstChild.firstChild
                    switchBTNs[0].firstChild.firstChild.classList.add('IconOn')
                    switchBTNs[1].firstChild.firstChild.classList.add('IconOn')
                    switchBTNs[2].firstChild.firstChild.classList.add('IconOn')
                    target.classList.remove('IconOn')
                    target.nextElementSibling.classList.add('IconOn')
                    switchBTNs[0].classList.remove('integralon')
                    switchBTNs[1].classList.remove('integralon')
                    switchBTNs[2].classList.remove('integralon')
                    switchBTNs[this.index].classList.add('integralon')
                    for (var j = 0; j < skincontent.length; j++) {
                        skincontent[j].classList.remove('contenton')
                    }
                    skincontent[this.index].classList.add('contenton')
                }
            }
        }
    },
    mounted () {
        this.BTNswitch()
        var imgbox = document.querySelectorAll('.skin-img-box')
        var textbox = document.querySelectorAll('.skin-text-box')
        var imgboxsmall = document.querySelectorAll('.skin-img-box02')
        var screenWidth = document.body.clientWidth
        for (var i = 0; i < imgbox.length; i++) {
            if (screenWidth < 769) {
                imgbox[i].style.display = 'none'
                textbox[i].style.display = 'block'
                textbox[i].style.margin = '20px 0'
                textbox[i].style.width = '100%'
                textbox[i].style.borderBottom = '2px dotted #b8b8b8'
                imgboxsmall[i].style.display = 'block'
            } else {
                imgbox[i].style.display = 'table-cell'
                imgboxsmall[i].style.display = 'none'
                textbox[i].style.display = 'table-cell'
            }
        }
        window.onresize = () => {
            var screenWidth = document.body.clientWidth
            for (var i = 0; i < imgbox.length; i++) {
                if (screenWidth < 769) {
                    imgbox[i].style.display = 'none'
                    textbox[i].style.display = 'block'
                    textbox[i].style.margin = '20px 0'
                    textbox[i].style.width = '100%'
                    textbox[i].style.borderBottom = '2px dotted #b8b8b8'
                    imgboxsmall[i].style.display = 'block'
                } else {
                    imgbox[i].style.display = 'table-cell'
                    imgboxsmall[i].style.display = 'none'
                    textbox[i].style.display = 'table-cell'
                    textbox[i].style.width = '50%'
                    textbox[i].style.borderBottom = 'none'
                }
            }
        }
    }
}
</script>
<style lang="less" scoped>
@import './css/common.less';
@import './css/Vip_integral.less';
</style>
