<template>
    <div>
        <div class='banner1'>
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in bannerLists" :key="item">
                <img :src="item">
            </el-carousel-item>
        </el-carousel>
        </div>
        <h2>当季推荐</h2>
        <div class='banner2'>
            <el-carousel :interval="4000" type="card">
                <el-carousel-item v-for="item in bannerListsT" :key="item.g_id">
                    <div class='skin-content-box'>
                        <img :src="'http://192.168.97.254:3000/' + item.g_img.split(',')[0]">
                        <h4>{{item.g_enTitle}}</h4>
                        <p>{{item.g_title}}</p>
                        <span>￥{{item.g_price}}</span>
                        <!-- <div class='skin-bto-hover' @click="OpenWinPop(item.g_id)">了解详情</div> -->
                        <router-link
                        class="skin-bto-hover"
                        style="text-decoration:none;"
                        :to="{path: '/detail', query: {id: item.g_id}}">了解详情</router-link>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <h2>菁纯奢宠臻献</h2>
        <div class='skin-mid-img'>
            <img src='./img/15737453117295154.jpg'>
        </div>
        <h3>兰蔻菁纯奢宠家族</h3>
        <p class='padding-b-20'>兰蔻菁纯奢宠家族，由内而外自带高光，唤启你的丰润无龄肌。</p>
        <div class='banner3'>
            <el-carousel :interval="4000" type="card">
                <el-carousel-item v-for="item in bannerListsI" :key="item.g_id">
                <div class='skin-content-box'>
                        <img :src="'http://192.168.97.254:3000/' + item.g_img.split(',')[0]">
                        <h4>{{item.g_enTitle}}</h4>
                        <p>{{item.g_title}}</p>
                        <span>￥{{item.g_price}}</span>
                        <router-link
                        class="skin-bto-hover"
                        style="text-decoration:none;"
                        :to="{path: '/detail', query: {id: item.g_id}}">了解详情</router-link>
                </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <h2>官网特别服务</h2>
        <ul class='special'>
            <li>
                <img src='./img/1573745398338564.jpg'>
                <h3 class="goods-tit">新客首购加享礼</h3>
                <p>首次购满520元 享奇迹香氛1.2ml</p>
                <router-link to="/landingpage/christmas-day"><button class='skin-bto-hover'>立即购买</button></router-link>
            </li>
            <li>
                <img src='./img/15737453635315040.jpg'>
                <h3 class="goods-tit">新客首购加享礼</h3>
                <p>首次购满520元 享奇迹香氛1.2ml</p>
                <router-link to="/landingpage/christmas-day"><button class='skin-bto-hover'>立即购买</button></router-link>
            </li>
            <li>
                <img src='./img/15737454704858105.jpg'>
                <h3 class="goods-tit">新客首购加享礼</h3>
                <p>首次购满520元 享奇迹香氛1.2ml</p>
                <router-link to="/landingpage/christmas-day"><button class='skin-bto-hover'>立即购买</button></router-link>
            </li>
        </ul>
        <div class="skin-bot-img">
            <router-link to="/landingpage/join"><img src='./img/15746101110733761.jpg'></router-link>
        </div>
        <Popup></Popup>
    </div>
</template>

<script>
import Popup from '../Popup/indexDelCopy'
import banner1 from './img/15737448996505892.jpg'
import banner2 from './img/15749550368063976.jpg'
import banner3 from './img/15756027389813375.jpg'
import banner4 from './img/15761676208035239.jpg'
import banner5 from './img/15746083867173309.jpg'
export default {
    components: {
        Popup
    },
    data () {
        return {
            bannerLists: {
                banner1,
                banner2,
                banner3,
                banner4,
                banner5
            }
        }
    },
    methods: {
        OpenWinPop (id) {
            this.$store.commit('OpenWinPop', id)
            this.$store.dispatch('getGoodsMessages')
        },
        getbannerlist () {
            this.$store.dispatch('getbannerlist')
        },
        getbannerlist2 () {
            this.$store.dispatch('getfreshbannerlilst')
        }
    },
    mounted () {
        this.getbannerlist()
        this.getbannerlist2()
    },
    computed: {
        bannerListsT () {
            return this.$store.state.index.bannerlist
        },
        bannerListsI () {
            return this.$store.state.index.freshbannerlilst
        }
    }
}
</script>

<style lang="less" scoped>
h2 {
    text-align: center;
    font-size: 38px;
    line-height: 40px;
    padding: 30px 0;
    color: #000;
    font-weight: 500;
}
h3{
    font-size: 30px;
    line-height: 34px;
    color: #000;
    font-weight: 500;
    padding: 30px 0 10px;
}
h4{
    padding: 18px 0 10px;
    font-size: 26px;
    line-height: 28px;
    text-align: center;
}
.skin-mid-img,.skin-bot-img{
    margin: 0 auto;
    img{
        width: 100%;
    }
}
.special{
    width: 100%;
    font-size: 0;
    margin-bottom: 100px;
    li{
        width: 30%;
        display: inline-block;
        margin: 1.6%;
        text-align: center;
        .skin-bto-hover{
            padding: 10px 30px;
        }
        p{
            font-size: 17px;
            color: #666;
            padding-bottom: 13px;
        }
        img{
            width: 100%;
        }
    }
}
.banner1 {
    width: 100%;
    margin: 0 auto;
    /deep/.el-carousel__container{
        height: 360px;
         .el-carousel__item img {
            width: 100%;
            height: 100%;
    }
}
}
.banner2,.banner3{
    width: 100%;
    margin: 0 auto;
    /deep/.el-carousel__container{
        height: 500px;
            .skin-content-box{
            width: 100%;
            height: 100%;
            text-align: center;
            img {
                width: 100%;
                height: 60%;
            }
            span {
                font-weight: bold;
                display: block;
                padding: 10px 0;
            }
            .skin-bto-hover{
            padding: 10px 30px;
            }
        }
    }
}
// 响应式
@media (max-width: 1024px) {
    .banner1{
    }
    .banner2,.banner3{
         /deep/.el-carousel__container{
        height: 500px;
            .el-carousel__item--card.is-active{
                display: block !important;
                width: 100% !important;
                transform:none !important;
            }
            .el-carousel__item--card.is-in-stage{
                display: none;
                width: 0%;
            }
            .skin-content-box{
                padding: 0 18%;
            }
        }
    }
    .special{
        li{
            width: auto;
            display: block;
            margin: 0 auto;
            padding: 10px;
            img{
                width: auto;
            }
        }
    }
}
@media (max-width: 768px) {
    .banner1{
        /deep/.el-carousel__container{
            height: 200px;
        }
    }
    .banner2,.banner3{
        .skin-content-box{
                padding: 0 5% !important;
            }
    }
    .special{
        li{
            width: 100%;
            display: block;
            margin: 0 auto;
            padding: 10px;
            img{
                width: 100%;
            }
        }
    }
}
</style>
