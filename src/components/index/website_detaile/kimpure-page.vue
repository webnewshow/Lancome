<template>
    <div class="webdetail-kimpure">
        <div class="kimpure-img-three">
            <img :src="charistmasimg3"/>
        </div>
        <div class="kimpure-img">
            <img :src="charistmasimg1"/>
        </div>
        <div class="kimpure-img-four">
            <img :src="charistmasimg4"/>
        </div>
        <div class="kimpure-img-five padding-t-20">
            <img :src="charistmasimg5"/>
        </div>
        <el-carousel  class="carsour-one" height="672px">
            <el-carousel-item v-for="(item, index) in charistmasbannerlistOne" :key="index">
                <img class="carsousel-img" :src="item"/>
            </el-carousel-item>
        </el-carousel>
        <div class="kimpure-img-six">
            <img :src="charistmasimg6"/>
        </div>
        <el-carousel  class="carsour-one" height="672px">
            <el-carousel-item v-for="(item, index) in charistmasbannerlistTwo" :key="index">
                <img class="carsousel-img" :src="item"/>
            </el-carousel-item>
        </el-carousel>
        <div class="kimpure-img-four">
            <img :src="charistmasimg4"/>
        </div>
        <div class="kimpure-img-five">
            <img :src="charistmasimg7"/>
        </div>
        <el-carousel  class="carsour-one" height="672px">
            <el-carousel-item v-for="(item, index) in charistmasbannerlistThree" :key="index">
                <img class="carsousel-img" :src="item"/>
            </el-carousel-item>
        </el-carousel>
        <el-carousel  class="carsour-one" height="690px">
            <el-carousel-item v-for="(item, index) in charistmasbannerlistFour" :key="index">
                <img class="carsousel-img" :src="item"/>
            </el-carousel-item>
        </el-carousel>
        <el-carousel  class="carsour-one" height="682px">
            <el-carousel-item v-for="(item, index) in charistmasbannerlistFive" :key="index">
                <img class="carsousel-img" :src="item"/>
            </el-carousel-item>
        </el-carousel>
        <el-carousel  class="carsour-one" height="848px">
            <el-carousel-item v-for="(item, index) in charistmasbannerlistSix" :key="index">
                <img class="carsousel-img" :src="item"/>
            </el-carousel-item>
        </el-carousel>
        <div class="kimpure-img-four">
            <img :src="charistmasimg4"/>
        </div>
        <div class="kimpure-img-five">
            <img :src="charistmasimg9"/>
        </div>
        <el-carousel  class="carsour-one" height="728px">
            <el-carousel-item v-for="(item, index) in charistmasbannerlistSeven" :key="index">
                <img class="carsousel-img" :src="item"/>
            </el-carousel-item>
        </el-carousel>
        <el-carousel  class="carsour-one" height="658px">
            <el-carousel-item v-for="(item, index) in charistmasbannerlistEight" :key="index">
                <img class="carsousel-img" :src="item"/>
            </el-carousel-item>
        </el-carousel>
         <div class="kimpure-img-bottom">
            <img :src="charistmasimg10"/>
        </div>
    </div>
</template>

<script>
import charistmasimg1 from 'components/index/img/charistmas-img1.jpg'
import charistmasimg3 from 'components/index/img/charistmas-img3.jpg'
import charistmasimg5 from 'components/index/img/charistmas-img5.jpg'
import charistmasimg4 from 'components/index/img/charistmas-img4.jpg'
import charistmasimg6 from 'components/index/img/charistmas-img6.jpg'
import charistmasimg7 from 'components/index/img/charistmas-img7.jpg'
import charistmasimg8 from 'components/index/img/charistmas-img8.jpg'
import charistmasimg9 from 'components/index/img/charistmas-img9.jpg'
import charistmasimg10 from 'components/index/img/charistmas-img10.jpg'
import charistmasbanner1 from 'components/index/img/charistmas-banner1.jpg'
import charistmasbanner2 from 'components/index/img/charistmas-banner2.jpg'
import charistmasbanner3 from 'components/index/img/charistmas-banner3.jpg'
import charistmasbanner4 from 'components/index/img/charistmas-banner4.jpg'
import charistmasbanner5 from 'components/index/img/banner-5.jpg'
import charistmasbanner6 from 'components/index/img/banner6.jpg'
import charistmasbanner7 from 'components/index/img/banner-7.jpg'
import charistmasbanner8 from 'components/index/img/banner-8.jpg'
import charistmasbanner9 from 'components/index/img/banner9.jpg'
import charistmasbanner10 from 'components/index/img/banner10 .jpg'
import charistmasbanner11 from 'components/index/img/banner11.jpg'
import charistmasbanner12 from 'components/index/img/banner12.jpg'
import charistmasbanner13 from 'components/index/img/banner-13.jpg'
import charistmasbanner14 from 'components/index/img/banner14.jpg'
import charistmasbanner15 from 'components/index/img/banner-15.jpg'
import charistmasbanner16 from 'components/index/img/banner-16.jpg'

export default {
    data () {
        return {
            charistmasimg1,
            charistmasimg4,
            charistmasimg5,
            charistmasimg6,
            charistmasimg7,
            charistmasimg8,
            charistmasimg9,
            charistmasimg10,
            charistmasimg3,
            charistmasbannerlistOne: [charistmasbanner1, charistmasbanner2],
            charistmasbannerlistTwo: [charistmasbanner3, charistmasbanner4],
            charistmasbannerlistThree: [charistmasbanner5, charistmasbanner6],
            charistmasbannerlistFour: [charistmasbanner7, charistmasbanner8],
            charistmasbannerlistFive: [charistmasbanner9, charistmasbanner10],
            charistmasbannerlistSix: [charistmasbanner11, charistmasbanner12],
            charistmasbannerlistSeven: [charistmasbanner13, charistmasbanner14],
            charistmasbannerlistEight: [charistmasbanner15, charistmasbanner16]

        }
    }

}
</script>

<style lang="less" scoped>
@import url('./Css/webdetail.less');
</style>
