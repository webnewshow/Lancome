<template>
    <div class="skin-collection">
        <div class="skin-collection-header">
            <div class="Return">返回</div>
            <h2>我的收藏夹</h2>
            <p>收藏夹<span>0</span>件产品</p>
            </div>
        <div class="skin-collection-goods">
            <p>你还未添加任何产品</p>
            <a href="#" class="skin-bto-hover">返回首页</a>
        </div>
        <div class="skin-like">
            <div class="skin-like-title">
              你可能会喜欢
            </div>
            <div class="skin-tab-con">
                <div class="skin-swiper-container">
                    <div class="skin-swiper-wrapper">
                        <div class="skin-swiper-item">
                            <div class="skin-thumbnail">
                                <div class="skin-imgbox">
                                    <a href="#">
                                        <img :src='img' alt="">
                                    </a>
                                    <div class="skin-tag">
                                        <span>热卖</span>
                                    </div>
                                    <div class="skin-handle">
                                       <div class="skin-btn-box">
                                            <a class="skin-quickbuy">立即购买</a>
                                            <a class="skin-more">了解更多</a>
                                       </div>
                                    </div>
                                </div>
                                <div class="skin-deatails">
                                    <div class="skin-goods-classfy">
                                        <p>18ML</p>
                                    </div>
                                    <h3 class="skin-goods-tit">
                                        <a href="#">小黑瓶【发光眼霜】*</a>
                                    </h3>
                                    <p class="skin-goods-introudce">
                                        <a href="#">Advanced Genifique Yeux Youth Activating Eye Cream</a>
                                    </p>
                                    <div class="skin-goods-row clearfix">
                                        <div class="skin-evaluate">
                                            <div class="skin-star-wrap">
                                                <i class="icon skin-icon-star"></i>
                                            </div>
                                        </div>
                                        <div class="skin-price">￥520</div>
                                         <span class="skin-bto-hover">立即购买</span>
                                    </div>
                                    <div class="goods-del">
                                        <span class="icon goods-icon-del"></span>
                                            <span>删除</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="skin-swiper-item">
                            <div class="skin-thumbnail">
                                <div class="skin-imgbox">
                                    <a href="#">
                                        <img :src='img' alt="">
                                    </a>
                                    <div class="skin-tag">
                                        <span>热卖</span>
                                    </div>
                                    <div class="skin-handle">
                                       <div class="skin-btn-box">
                                            <a class="skin-quickbuy">立即购买</a>
                                            <a class="skin-more">了解更多</a>
                                       </div>
                                    </div>
                                </div>
                                <div class="skin-deatails">
                                    <div class="skin-goods-classfy">
                                        <p>18ML</p>
                                    </div>
                                    <h3 class="skin-goods-tit">
                                        <a href="#">小黑瓶【发光眼霜】*</a>
                                    </h3>
                                    <p class="skin-goods-introudce">
                                        <a href="#">Advanced Genifique Yeux Youth Activating Eye Cream</a>
                                    </p>
                                    <div class="skin-goods-row clearfix">
                                        <div class="skin-evaluate">
                                            <div class="skin-star-wrap">
                                                <i class="icon skin-icon-star"></i>
                                            </div>
                                        </div>
                                        <div class="skin-price">￥520</div>
                                         <span class="skin-bto-hover">立即购买</span>
                                    </div>
                                    <div class="goods-del">
                                        <span class="icon goods-icon-del"></span>
                                            <span>删除</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                          <div class="skin-swiper-item">
                            <div class="skin-thumbnail">
                                <div class="skin-imgbox">
                                    <a href="#">
                                        <img :src='img' alt="">
                                    </a>
                                    <div class="skin-tag">
                                        <span>热卖</span>
                                    </div>
                                    <div class="skin-handle">
                                       <div class="skin-btn-box">
                                            <a class="skin-quickbuy">立即购买</a>
                                            <a class="skin-more">了解更多</a>
                                       </div>
                                    </div>
                                </div>
                                <div class="skin-deatails">
                                    <div class="skin-goods-classfy">
                                        <p>18ML</p>
                                    </div>
                                    <h3 class="skin-goods-tit">
                                        <a href="#">小黑瓶【发光眼霜】*</a>
                                    </h3>
                                    <p class="skin-goods-introudce">
                                        <a href="#">Advanced Genifique Yeux Youth Activating Eye Cream</a>
                                    </p>
                                    <div class="skin-goods-row clearfix">
                                        <div class="skin-evaluate">
                                            <div class="skin-star-wrap">
                                                <i class="icon skin-icon-star"></i>
                                            </div>
                                        </div>
                                        <div class="skin-price">￥520</div>
                                        <span class="skin-bto-hover">立即购买</span>
                                    </div>
                                    <div class="goods-del">
                                        <span class="icon goods-icon-del"></span>
                                            <span>删除</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ungoods">
                    你还未添加任何商品
                     <div class="Return">返回首页</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import img from './img/1561045192601871_460X460.jpg'
export default {
    data () {
        return {
            img
        }
    }
}
</script>

<style lang="less" scoped>
@import './css/Collection.less';
</style>>
