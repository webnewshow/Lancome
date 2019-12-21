<template>
   <!--定位盒子banner-cursoal-->
    <div class="out-cursoal cursoal2">
        <!--里面运动的盒子-->
        <div class="iner-slide">
            <!--内部图片-->
            <ul class="iner-img">
                <li class="iner-img-list" >
                    <img :src="banner5" />
                </li>
                <li class="iner-img-list">
                    <img  :src="banner5" />
                </li>
                <li class="iner-img-list">
                    <img  :src="banner5" />
                </li>
            </ul>
            <ul class="iner-img">
                <li class="iner-img-list" >
                    <img :src="banner1" />
                </li>
                <li class="iner-img-list">
                    <img  :src="banner1" />
                </li>
                <li class="iner-img-list">
                    <img  :src="banner1" />
                </li>
            </ul>
            <ul class="iner-img">
                <li class="iner-img-list" >
                    <img :src="banner2" />
                </li>
                <li class="iner-img-list">
                    <img  :src="banner2" />
                </li>
                <li class="iner-img-list">
                    <img  :src="banner2" />
                </li>
            </ul>
            <ul class="iner-img">
                <li class="iner-img-list" >
                    <img :src="banner3" />
                </li>
                <li class="iner-img-list">
                    <img  :src="banner3" />
                </li>
                <li class="iner-img-list">
                    <img  :src="banner3" />
                </li>
            </ul>
            <ul class="iner-img">
                <li class="iner-img-list" >
                    <img :src="banner4" />
                </li>
                <li class="iner-img-list">
                    <img  :src="banner4" />
                </li>
                <li class="iner-img-list">
                    <img  :src="banner4" />
                </li>
            </ul>
            <ul class="iner-img">
                <li class="iner-img-list" >
                    <img :src="banner5" />
                </li>
                <li class="iner-img-list">
                    <img  :src="banner5" />
                </li>
                <li class="iner-img-list">
                    <img  :src="banner5" />
                </li>
            </ul>
            <ul class="iner-img">
                <li class="iner-img-list" >
                    <img :src="banner1" />
                </li>
                <li class="iner-img-list">
                    <img  :src="banner1" />
                </li>
                <li class="iner-img-list">
                    <img  :src="banner1" />
                </li>
            </ul>
        </div>
        <!--左右按钮，定位-->
        <span class="bto zuo-bto">></span>
        <span class="bto you-bto">></span>
        <ul class="carsoal-cicle">
            <li class="on">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    </div>
</template>

<script>
import banner1 from 'components/images/banner-1.jpg'
import banner2 from 'components/images/banner-2.jpg'
import banner3 from 'components/images/banner-3.jpg'
import banner4 from 'components/images/banner-4.jpg'
import banner5 from 'components/images/banner-5.jpg'

export default {
    data () {
        return {
            banner1,
            banner2,
            banner3,
            banner4,
            banner5,
            bannerlist: [banner1, banner2, banner3, banner4, banner5]
        }
    },
    methods: {
        turnbox (box) {
            //  获得两个点击按钮
            var bto = document.querySelectorAll('.bto')
            //  获取原点
            var cicle = document.querySelectorAll('.carsoal-cicle li')
            // 获取最外部的盒子
            var outcursoal = document.querySelector(box)
            // 获取照片
            var innerimg = outcursoal.querySelectorAll('.iner-img')
            var inerslide = outcursoal.querySelector('.iner-slide')
            // 获取照片的宽度(offsetWidth)
            var imgwidth = innerimg[0].offsetWidth
            console.log(innerimg)
            // 获取照片的张数
            var imglength = innerimg.length
            console.log(imglength)
            console.log(imglength * imgwidth)
            // 把算出来的移动盒子的宽度设置给移动盒子属性
            inerslide.style.width = imgwidth * imglength + 'px'
            console.log(inerslide.style.width)
            //  定义轮播开始的位置
            var index = 1
            var speed = 10
            // 圆点计数
            var dotIndex = 0
            //  让图片循环运动
            var autoInterval = null
            autoAniamate()
            function autoAniamate () {
                autoInterval = setInterval(function () {
                    speed = -Math.abs(speed)
                    animate()
                }, 3000)
            }
            // 让图片运动
            function animate () {
                cicledot()
                // 让内部的盒子运动起来，用定时器定义成方法
                var timer = setInterval(function () {
                    var left = inerslide.offsetLeft + speed
                    inerslide.style.left = left + 'px'
                    // 即将要运动的图片的下标
                    var curindex = 0
                    if (speed < 0) {
                        curindex = index + 1
                    } else {
                        curindex = index - 1
                    }
                    if ((left <= -curindex * imgwidth && speed < 0) || (left >= -curindex * imgwidth && speed > 0)) {
                        clearInterval(timer)
                        index = curindex
                        if (index >= imglength - 1) {
                        // 判断最后一张的图片的位置imglength - 1 ,运动到最后一张就跳到默认第一张，index = 1
                            inerslide.style.left = -imgwidth + 'px'
                            index = 1
                        } else if (index <= 0) {
                            index = imglength - 2
                            inerslide.style.left = -index * imgwidth + 'px'
                        }
                    }
                }, 10)
            }
            // 给原点加点击事件
            for (var i = 0; i < cicle.length; i++) {
                cicle[i].cic = i
                cicle[i].onclick = function () {
                    if (this.cic < dotIndex) {
                        speed = Math.abs(speed)
                        index = this.cic + 2
                        dotIndex = this.cic + 1
                    } else {
                        speed = -Math.abs(speed)
                        index = this.cic
                        dotIndex = this.cic - 1
                    }
                    animate()
                }
            }
            function cicledot () {
                if (speed < 0) {
                    dotIndex++
                } else {
                    dotIndex--
                }
                if (dotIndex > cicle.length - 1) {
                    dotIndex = 0
                } else if (dotIndex < 0) {
                    dotIndex = cicle.length - 1
                }
                for (var i = 0; i < cicle.length; i++) {
                    cicle[i].classList.remove('on')
                }
                cicle[dotIndex].classList.add('on')
            }
            // 给左右按钮加点击事件
            for (let i = 0; i < bto.length; i++) {
                bto[i].onclick = function () {
                    var className = this.className
                    if (className.indexOf('zuo-bto') >= 0) {
                        // 点击左按钮
                        speed = Math.abs(speed)
                        animate()
                    } else {
                        speed = -Math.abs(speed)
                        animate()
                    }
                }
            }
            // dfhekwrg
            //  鼠标移入结束波动
            inerslide.onmouseenter = function () {
                clearInterval(autoInterval)
            }
            //  鼠标移除继续调用方法
            inerslide.onmouseleave = function () {
                autoAniamate()
            }

            // 当浏览器最小化或切换不同标签是执行的动作webkitvisibilitychange；
            // doucument.addEventListener监听事件
            document.addEventListener('webkitvisibilitychange', function () {
                var isHidden = document.webkitVisibilityState
                if (isHidden === 'hidden') {
                    clearInterval(autoInterval)
                } else {
                    autoAniamate()
                }
            })
        }

    },
    mounted () {
        this.turnbox('.cursoal2')
    },
    computed: {
        bannerlists () {
            return this.$store.state.bannerlist
        }
    }
}
</script>

<style>
.out-cursoal{
    width:1000px;
    height:400px;
    position:relative;
    left:40px;
    border:1px solid black;
    overflow: hidden;
}
.iner-slide{
    position:absolute;
    left:-1000px;
    top:0;
    border:1px solid red;
    font-size: 0;
}
.bto{
    position:absolute;
    top:46%;
    padding:5px 10px;
    display: inline-block;
    color:black;

}
.zuo-bto{
    left:0;
}
.you-bto{
    right:0;
}
.carsoal-cicle{
    position: absolute;
    z-index: 11;
    text-align:center;
    left:50%;
    bottom:20px;
    margin-left:-176px;
}
.carsoal-cicle li{
    float:left;
    display: inline-block;
    width:26px;
    height:26px;
    background: rgba(0,0,0,0.5);
    border-radius:50%;
    line-height:26px;
    margin-left:20px;
}
.iner-img-list{
    width:33%;
    display: inline-block;
}
.iner-img{
    display: inline-block;
    width:1000px;
    height:400px;
}
.iner-img-list img{
    width:100%;
    height:100%;
}
.carsoal-cicle li.on{
    background: rgba(255,255,255,0.5);
}
</style>
<!-- <div class="block carsour">
                    <el-carousel trigger="click" height="700px">
                        <el-carousel-item  v-for="item in recommenbannerlilst" :key="item" class='clearfix'>
                            <div class="recommend-list">
                                <img  :src="item.img1"/>
                                <div class="recom-list-con">
                                   <p class="font-26 padding-t-10">{{item.title1}}</p>
                                    <p class="font-16 padding-t-10">{{item.name1}}</p>
                                    <p  class="font-20 padding-t-10">{{item.price1}}</p>
                                    <p class="skin-bto-hover font-14 margin-t-10">购买</p>
                                </div>
                            </div>
                            <div class="recommend-list">
                                <img  :src="item.img2"/>
                                <div class="recom-list-con">
                                    <p class="font-26 padding-t-10">{{item.title2}}</p>
                                    <p class="font-16 padding-t-10">{{item.name2}}</p>
                                    <p  class="font-20 padding-t-10">{{item.price2}}</p>
                                    <p class="skin-bto-hover font-14 margin-t-10">购买</p>
                                </div>
                            </div>
                            <div class="recommend-list">
                                <img  :src="item.img3"/>
                                <div class="recom-list-con">
                                    <p class="font-26 padding-t-10">{{item.title3}}</p>
                                    <p class="font-16 padding-t-10">{{item.name3}}</p>
                                    <p  class="font-20 padding-t-10">{{item.price3}}</p>
                                    <p class="skin-bto-hover font-14 margin-t-10">购买</p>
                                </div>
                            </div>
                        </el-carousel-item>
                    </el-carousel> -->
