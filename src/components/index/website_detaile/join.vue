<template>
    <div class="skin-join-us">
        <!-- 顶部图片 -->
        <div class="join-imgBox" >
            <img class="join-img" :src="joinTop"/>
        </div>
        <!-- 起源与发展轮播 -->
        <div class="block carsour" style="width=1920px;">
            <el-carousel trigger="click" height="700px">
                <el-carousel-item  v-for="item in  joinbannerList" :key="item">
                    <img class="join-banner-img" style="width:100%;" :src="item"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 来源与发展 -->
        <div class="technology-box clearfix ">
            <div class="technology ">
                <img  class="technology-leftimg technology-img " :src="joinDetail1"/>
                <img   class="technology-rightimg technology-img" :src="joinDetail2"/>
            </div>
        </div>
        <div class="deliver-box  clearfix">
            <div class="deliver clearfix">
                <img class="fl deliver-leftimg deliver-img" :src="joinDetail3"/>
                <img class="fr deliver-rightimg deliver-img" :src="joinDetail4"/>
            </div>
        </div>
         <div class="history-box  clearfix">
            <div class="history clearfix">
                <img class="fl history-leftimg history-img" :src="joinDetail5"/>
                <img class="fr history-rightimg history-img" :src="joinDetail6"/>
            </div>
        </div>
        <!-- 兰蔻明星系列 -->
        <div class="star clearfix margin-t-50">
            <img class="start-img" :src="startImg1" />
            <img class="start-img" :src="startImg2" />
        </div>
    </div>
</template>

<script>
import joinTop from 'components/images/join_us.jpg'
import joinBnner1 from 'components/images/join-us-banner1.jpg'
import joinBnner2 from 'components/images/join-us-banner2.jpg'
import joinBnner3 from 'components/images/join-us-banner3.jpg'
import joinBnner4 from 'components/images/join-us-banner4.jpg'
import startImg1 from 'components/images/star-img1.jpg'
import startImg2 from 'components/images/star-img2.jpg'
import joinDetail1 from 'components/images/join-detail1.jpg'
import joinDetail2 from 'components/images/join-detail2.jpg'
import joinDetail3 from 'components/images/join-detail3.jpg'
import joinDetail4 from 'components/images/join-detail4.jpg'
import joinDetail5 from 'components/images/join-detail5.jpg'
import joinDetail6 from 'components/images/join-detail6.jpg'
export default {
    data () {
        return {
            isshow: true,
            joinTop,
            startImg1,
            startImg2,
            joinDetail1,
            joinDetail2,
            joinDetail3,
            joinDetail4,
            joinDetail5,
            joinDetail6,
            joinbannerList: [joinBnner2, joinBnner1, joinBnner3, joinBnner4]
        }
    },
    methods: {
        getTechnologyHeight () {
            let imgleft = document.querySelector('.technology-leftimg')
            let imgright = document.querySelector('.technology-rightimg')
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            console.log(scrollTop)
            if (scrollTop >= 950) {
                imgleft.classList.add('on')
                imgright.classList.add('on')
            } else {
                imgleft.classList.remove('on')
                imgright.classList.remove('on')
            }
        },
        getDeliverHeight () {
            let imgleft = document.querySelector('.deliver-leftimg')
            let imgright = document.querySelector('.deliver-rightimg')
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            console.log(scrollTop)
            if (scrollTop >= 1464) {
                imgleft.classList.add('on')
                imgright.classList.add('on')
            } else {
                imgleft.classList.remove('on')
                imgright.classList.remove('on')
            }
        },
        getHistoryHeight () {
            let imgleft = document.querySelector('.history-leftimg')
            let imgright = document.querySelector('.history-rightimg')
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            console.log('333333 ------' + scrollTop)
            if (scrollTop >= 2152) {
                imgleft.classList.add('on')
                imgright.classList.add('on')
            } else {
                imgleft.classList.remove('on')
                imgright.classList.remove('on')
            }
        }
    },
    mounted () {
        window.addEventListener('scroll', this.getTechnologyHeight)
        window.addEventListener('scroll', this.getDeliverHeight)
        window.addEventListener('scroll', this.getHistoryHeight)
    }
}
</script>

<style lang="less" scoped>
@import url('./Css/webdetail.less');

</style>
