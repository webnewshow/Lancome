<template>
    <div>
        <div class="skin-normal">
            <img src="../imagesCards/club-gold-02.jpg">
        </div>
        <div class="skin-normal">
            <img src="../imagesCards/club-gold-03.jpg">
        </div>
        <div class="skin-normal">
            <img src="../imagesCards/club-gold-04.jpg">
        </div>
        <div class="skin-normal">
            <img src="../imagesCards/club-gold-05.jpg">
        </div>
        <div class="skin-normal">
            <img src="../imagesCards/club-gold-06.jpg">
        </div>
        <div class="skin-normal">
            <img src="../imagesCards/club-gold-07.jpg">
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        CardstateChange () {
            console.log(222222)
            this.$store.state.cards = 2
        }
    },
    mounted () {
        this.CardstateChange()
    }
}
</script>
<style lang='less' scoped>
@import '../css/common.less';
.skin-normal {
    margin: 0 auto 8%;
    img {
        display: block;
        margin: 0 auto;
        max-width: 100%;
    }
}
</style>
