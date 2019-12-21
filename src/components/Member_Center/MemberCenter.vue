<template>
  <div>
    <div v-if="judge">
      <div class="skin-joinNow-01">
          <span class="skin-joinNow-btn">
              <img :src=wechatQR class="skin-wechatQR">
          </span>
          <img :src=joinNow01>
      </div>
      <div class="skin-joinNow-02" align='center'>
        <img :src=joinNow02>
      </div>
      <div class="skin-CardBanner">
          <span class="skin-joinNow-btnVIP">
              <img :src=wechatQR class="skin-wechatQRVIP">
          </span>
              <div class="skin-imageItem on">
              <img :src=memberCard01>
              </div>
              <div class="skin-imageItem">
              <img :src=memberCard02>
              </div>
              <div class="skin-imageItem">
              <img :src=memberCard03>
              </div>
              <div class="skin-imageItem">
              <img :src=memberCard04>
              </div>
              <div class="skin-swiper-btns">
                <span  @click="btnClick(0)" class="skin-card-button pointer"></span>
                <span  @click="btnClick(1)" class="skin-card-button pointer"></span>
                <span  @click="btnClick(2)" class="skin-card-button pointer"></span>
                <span  @click="btnClick(3)" class="skin-card-button pointer"></span>
              </div>
      </div>
      <div class="skin-Integral-query">
          <span class="skin-integral-btn01 pointer"></span>
          <span class="skin-integral-btn02 pointer"></span>
          <span class="skin-integral-btn03 pointer"></span>
          <span class="skin-integral-btn04 pointer"></span>
          <router-link to="/Vipcenter">
            <span class="skin-integralQuery-btn pointer"></span>
          </router-link>
          <img :src=IntegralQuery>
      </div>
      <div class="skin-update-vip">
          <img :src=UpdateToVip>
      </div>
      <div class="skin-Vip-birth">
          <img :src=VipBirth>
      </div>
      <div class="skin-Vip-extra">
          <router-link to="/" target="_blank"><span class="skin-VipExtra-btn pointer"></span></router-link>
          <img :src=ExtraVip>
      </div>
      <div class="skin-wechat-service">
          <img :src=WechatService>
      </div>
      <div class="skin-Vip-integral">
          <img :src=VipIntegral>
      </div>
      <div class="skin-Vip-level">
          <span class="skin-backIndex-btn pointer"></span>
          <span @click="scrollbackToTop()" class="skin-scrollTop-btn pointer"></span>
          <img :src=VipLevel>
      </div>
    </div>
    <div v-if="!judge">
        <div class="skin-joinNow-01">
          <span class="skin-joinNow-btn pointer"></span>
          <img :src=joinNow01mob>
        </div>
      <div class="skin-joinNow-02">
        <img :src=joinNow02mob>
      </div>
      <div class="skin-CardBanner">
          <span class="skin-joinNow-btnVIP pointer"></span>
              <div class="skin-imageItem on">
              <img :src=memberCard01mob>
              </div>
              <div class="skin-imageItem">
              <img :src=memberCard02mob>
              </div>
              <div class="skin-imageItem">
              <img :src=memberCard03mob>
              </div>
              <div class="skin-imageItem">
              <img :src=memberCard04mob>
              </div>
              <div class="skin-swiper-btns">
              <span  @click="btnClick(0)" class="skin-card-button pointer"></span>
              <span  @click="btnClick(1)" class="skin-card-button pointer"></span>
              <span  @click="btnClick(2)" class="skin-card-button pointer"></span>
              <span  @click="btnClick(3)" class="skin-card-button pointer"></span>
              </div>
      </div>
      <div class="skin-Integral-query">
          <span class="skin-integral-btn01 pointer"></span>
          <span class="skin-integral-btn02 pointer"></span>
          <span class="skin-integral-btn03 pointer"></span>
          <span class="skin-integral-btn04 pointer"></span>
          <span class="skin-integralQuery-btn pointer"></span>
          <img :src=IntegralQuerymob>
      </div>
      <div class="skin-update-vip">
          <img :src=UpdateToVipmob>
      </div>
      <div class="skin-Vip-birth">
          <img :src=VipBirthmob>
      </div>
      <div class="skin-Vip-extra">
          <span class="skin-VipExtra-btn pointer"></span>
          <img :src=ExtraVipmob>
      </div>
      <div class="skin-wechat-service">
          <img :src=WechatServicemob>
      </div>
      <div class="skin-Vip-integral">
          <img :src=VipIntegralmob>
      </div>
      <div class="skin-Vip-level">
          <img :src=VipLevelmob>
          <span class="skin-backIndex-btn pointer"></span>
          <button>11</button>
          <span @click="scrollbackToTop()" class="skin-scrollTop-btn pointer"></span>
      </div>
    </div>
  </div>
</template>
<script>
import joinNow01 from './images/pc_img_01.jpg'
import joinNow02 from './images/pc_img_02.jpg'
import memberCard01 from './images/pc_swiper_01.jpg'
import memberCard02 from './images/pc_swiper_02.jpg'
import memberCard03 from './images/pc_swiper_03.jpg'
import memberCard04 from './images/pc_swiper_04.jpg'
import IntegralQuery from './images/pc_img_04.jpg'
import UpdateToVip from './images/pc_img_05.jpg'
import VipBirth from './images/pc_img_06.jpg'
import ExtraVip from './images/pc_img_07.jpg'
import WechatService from './images/pc_img_08.jpg'
import VipIntegral from './images/pc_img_09.jpg'
import VipLevel from './images/pc_img_10.jpg'
import wechatQR from './images/pc_wechat.png'
import joinNow01mob from './imglessThan1024/mob_img_01.jpg'
import joinNow02mob from './imglessThan1024/mob_img_02.jpg'
import memberCard01mob from './imglessThan1024/mob_swiper_01.jpg'
import memberCard02mob from './imglessThan1024/mob_swiper_02.jpg'
import memberCard03mob from './imglessThan1024/mob_swiper_03.jpg'
import memberCard04mob from './imglessThan1024/mob_swiper_04.jpg'
import IntegralQuerymob from './imglessThan1024/mob_img_04.jpg'
import UpdateToVipmob from './imglessThan1024/mob_img_05.jpg'
import VipBirthmob from './imglessThan1024/mob_img_06.jpg'
import ExtraVipmob from './imglessThan1024/mob_img_07.jpg'
import WechatServicemob from './imglessThan1024/mob_img_08.jpg'
import VipIntegralmob from './imglessThan1024/mob_img_09.jpg'
import VipLevelmob from './imglessThan1024/mob_img_10.jpg'
import wechatQRmob from './imglessThan1024/mob_wechat.png'

export default {
    data () {
        return {
            joinNow01,
            joinNow02,
            memberCard01,
            memberCard02,
            memberCard03,
            memberCard04,
            IntegralQuery,
            UpdateToVip,
            VipBirth,
            ExtraVip,
            WechatService,
            VipIntegral,
            VipLevel,
            wechatQR,
            joinNow01mob,
            joinNow02mob,
            memberCard01mob,
            memberCard02mob,
            memberCard03mob,
            memberCard04mob,
            IntegralQuerymob,
            UpdateToVipmob,
            VipBirthmob,
            ExtraVipmob,
            WechatServicemob,
            VipIntegralmob,
            VipLevelmob,
            wechatQRmob,
            judge: null,
            p: 0
        }
    },
    methods: {
        btnClick (index) {
            var parent = document.querySelector('.skin-CardBanner')
            var images = parent.querySelectorAll('.skin-imageItem')
            for (var j = 0; j < images.length; j++) {
                images[j].classList.remove('on')
            }
            images[index].classList.add('on')
            this.p = index
        },
        intervalTo () {
            var parent = document.querySelector('.skin-CardBanner')
            var images = parent.querySelectorAll('.skin-imageItem')
            var timer = null
            var __this = this
            function intervalGo () {
                timer = setInterval(function () {
                    for (var k = 0; k < images.length; k++) {
                        images[k].classList.remove('on')
                    }
                    if (__this.p < 3) {
                        __this.p = __this.p + 1
                    } else if (__this.p >= 3) {
                        __this.p = 0
                    }
                    images[__this.p].classList.add('on')
                }, 2000)
            }
            function intervaljudge () {
                parent.onmouseover = function () {
                    clearInterval(timer)
                }
                parent.onmouseleave = function () {
                    intervalGo()
                }
            }
            intervaljudge()
        },
        scrollbackToTop () {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            var time = setInterval(function () {
                scrollTop = scrollTop - 50
                document.body.scrollTop = scrollTop
                document.documentElement.scrollTop = scrollTop
                if (scrollTop <= 0) {
                    clearInterval(time)
                }
            }, 1)
        }
    },
    mounted () {
        let _this = this
        var widthOfScreen = document.body.clientWidth
        if (widthOfScreen < 1007) {
            _this.judge = false
        } else {
            _this.judge = true
        }
        window.onresize = () => {
            var widthOfScreen = document.body.clientWidth
            if (widthOfScreen < 1007) {
                _this.judge = false
            } else {
                _this.judge = true
            }
        }
        this.intervalTo()
    }
}
</script>
<style lang = "less" scoped>
@import './css/VIP.less';
@import './css/common.less';
</style>
