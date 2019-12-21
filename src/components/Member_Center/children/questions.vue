<template>
    <div>
        <div class="skin-question-title">
            <div>
                <img src="../imagesCards/icon_brose_pink.png">
            </div>
            <h2>
                常见问题
            </h2>
        </div>
        <div class="skin-questions-texts">
            <h4>
                <img src="../imagesCards/icon_qa.png">
                <span>会籍何时生效？有效期是多久？</span>
            </h4>
            <p>
                从您第一次购买兰蔻产品的当天起，
                <br>
                且会籍永久有效。
            </p>
        </div>
        <div class="skin-questions-texts02">
            <h4>
                <img src="../imagesCards/icon_qa.png">
                <span>是否有会员卡发放？</span>
            </h4>
            <p>
                兰蔻不再发放会员卡，消费时提供预留手机号，
                <br>
                即可累积消费积分。
            </p>
        </div>
        <div class="skin-questions-texts">
            <h4>
                <img src="../imagesCards/icon_qa.png">
                <span>购买后积分何时生效？</span>
            </h4>
            <p>
                在购买后2-3天内生效，
                <br>
                一般3日之后即可在会员专属网站上查询。
            </p>
        </div>
        <div class="skin-questions-texts02">
            <h4>
                <img src="../imagesCards/icon_qa.png">
                <span>
                    官方网上商城购物积分、
                    <br>
                    天猫旗舰店积分与柜台购物积分可以累积吗？
                </span>
            </h4>
            <p>
                当使用同一个会员号时，
                <br>
                官方网上商城购物积分、天猫旗舰店积分与柜台购物积分将自动累积。
            </p>
        </div>
        <div class="skin-questions-texts">
            <h4>
                <img src="../imagesCards/icon_qa.png">
                <span>如果有两个会员号，积分可以合并吗？</span>
            </h4>
            <p>
                同会员号不支持积分合并。
            </p>
        </div>
        <div class="skin-questions-texts02">
            <h4>
                <img src="../imagesCards/icon_qa.png">
                <span>如何查询已兑换商品物流情况？</span>
            </h4>
            <p>
                用户可通过点击：
                <br>
                登录——兑礼记录——查看物流，“点击详情”可查看更多信息。
            </p>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        CardstateChange () {
            console.log(44444)
            this.$store.state.cards = 4
        }
    },
    mounted () {
        this.CardstateChange()
    }
}
</script>
<style scoped lang='less'>
@import '../css/common.less';
@import '../css/cards.less';
</style>
