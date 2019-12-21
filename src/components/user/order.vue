<template>
    <div class="skin-order">
        <div class="Return">返回</div>
         <div class="skin-title">
              <h2>我的订单</h2>
          </div>
        <div class="skin-goods">
            <ul class="skin-goods-header clearfix">
                <li class="unfinish">
                    未完成订单
                    <span>0</span>
                </li>
                <li class="on finish">
                    已完成订单<span>2</span>
                </li>
            </ul>
            <div class="skin-order-header">
                <ul class="order-header clearfix">
                    <li class="list-order">订单号</li>
                    <li class="list-date">下单日期</li>
                    <li class="list-goods">商品</li>
                    <li class="list-num">数量</li>
                    <li class="list-price">总价</li>
                    <li class="list-status">状态</li>
                    <li class="list-handle">操作</li>
                </ul>
                <div class="skin-order-lists-box order-unfinish">
                      <ul
                      class="skin-order-finish clearfix on"
                      v-for="item in this.datas"
                      :key="item.g_id"
                      >
                        <li class="list-order">
                            <span class="goods-number">订单编号:</span>
                            <span>PCLCSO31000381082</span>
                        </li>
                        <li class="list-date">
                            <span class="goods-date">下单日期:</span>
                            <span>2019.12.03 20:36:41</span>
                            <span class="status fr">已取消</span>
                            </li>
                        <li class="list-goods">
                            <a href="">
                                <img :src="img" alt="">
                            </a>
                        </li>
                        <li class="list-num">
                            <span class="">5</span>
                            <span class="goods-count">共<span>3</span>商品,总价<span>￥520.00</span></span>
                            </li>
                        <li class="list-price"><span>¥ 3060</span></li>
                        <li class="list-status">已取消</li>
                        <li class="list-handle">
                            <div class="handle">
                                <p>再次购买</p>
                                <p>查看详情</p>
                            </div>
                        </li>
                    </ul>
                </div>
                 <div class="skin-order-lists-box order-finish">
                      <ul class="skin-order-finish clearfix on">
                        <li class="list-order">
                            <span class="goods-number">订单编号:</span>
                            <span>PCLCSO31000381082</span>
                        </li>
                        <li class="list-date">
                            <span class="goods-date">下单日期:</span>
                            <span>2019.12.03 20:36:41</span>
                            <span class="status fr">已完成</span>
                            </li>
                        <li class="list-goods">
                            <a href="">
                                <img :src="img" alt="">
                            </a>
                        </li>
                        <li class="list-num">
                            <span class="">2</span>
                            <span class="goods-count">共<span>2</span>商品,总价<span>￥520.00</span></span>
                            </li>
                        <li class="list-price"><span>¥ 3060</span></li>
                        <li class="list-status">已完成</li>
                        <li class="list-handle">
                            <div class="handle">
                                <p>再次购买</p>
                                <p>查看详情</p>
                            </div>
                        </li>
                    </ul>
                     <ul class="skin-order-finish clearfix on">
                        <li class="list-order">
                            <span class="goods-number">订单编号:</span>
                            <span>PCLCSO31000381082</span>
                        </li>
                        <li class="list-date">
                            <span class="goods-date">下单日期:</span>
                            <span>2019.12.03 20:36:41</span>
                            <span class="status fr">已完成</span>
                            </li>
                        <li class="list-goods">
                            <a href="">
                                <img :src="img" alt="">
                            </a>
                        </li>
                        <li class="list-num">
                            <span class="">2</span>
                            <span class="goods-count">共<span>2</span>商品,总价<span>￥520.00</span></span>
                            </li>
                        <li class="list-price"><span>¥ 3060</span></li>
                        <li class="list-status">已完成</li>
                        <li class="list-handle">
                            <div class="handle">
                                <p>再次购买</p>
                                <p>查看详情</p>
                            </div>
                        </li>
                    </ul>
                     <ul class="skin-order-finish clearfix on">
                        <li class="list-order">
                            <span class="goods-number">订单编号:</span>
                            <span>PCLCSO31000381082</span>
                        </li>
                        <li class="list-date">
                            <span class="goods-date">下单日期:</span>
                            <span>2019.12.03 20:36:41</span>
                            <span class="status fr">已完成</span>
                            </li>
                        <li class="list-goods">
                            <a href="">
                                <img :src="img" alt="">
                            </a>
                        </li>
                        <li class="list-num">
                            <span class="">2</span>
                            <span class="goods-count">共<span>2</span>商品,总价<span>￥520.00</span></span>
                            </li>
                        <li class="list-price"><span>¥ 3060</span></li>
                        <li class="list-status">已完成</li>
                        <li class="list-handle">
                            <div class="handle">
                                <p>再次购买</p>
                                <p>查看详情</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import img from './img/15670589576663210_460X460.jpg'
export default {
    data () {
        return {
            img,
            datas: ''
        }
    },
    methods: {
        showOrder () {
            let orderBtn = document.querySelectorAll('.skin-goods-header li')
            let finishList = document.querySelector('.skin-order-lists-box.order-finish')
            let unfinishList = document.querySelector('.skin-order-lists-box.order-unfinish')
            for (var i = 0; i < orderBtn.length; i++) {
                orderBtn[i].index = i
                orderBtn[i].onclick = function () {
                    if (orderBtn[this.index].classList.contains('on')) {
                        // orderBtn[this.index].classList.remove('on')
                    } else {
                        orderBtn[this.index].classList.add('on')
                        let Brother = this.parentNode.children
                        for (var j = 0; j < Brother.length; j++) {
                            if (Brother[j].nodeType === 1 && Brother[j] !== this) {
                                Brother[j].classList.remove('on')
                                if (this.index === 0) {
                                    unfinishList.style.display = 'block'
                                    finishList.style.display = 'none'
                                } else {
                                    unfinishList.style.display = 'none'
                                    finishList.style.display = 'block'
                                }
                            }
                        }
                    }
                }
            }
        },
        GetCartgoods () {
            let datas = this.$store.state.getDetail.selectLists
            if (datas != '') {
                this.datas = datas
            } else {
                this.datas = JSON.parse(window.localStorage.getItem('selectInfo'))
            }
            return this.datas
        }
    },
    mounted () {
        this.showOrder()
        this.GetCartgoods()
    }
}
</script>

<style scoped lang=less>
@import url('./css/order.less');
</style>
