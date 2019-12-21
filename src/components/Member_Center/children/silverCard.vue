<template>
    <div>
        <div class="skin-normal">
            <img src="../imagesCards/club-silver-01.jpg">
        </div>
        <div class="skin-normal">
            <img src="../imagesCards/club-silver-02.jpg">
        </div>
        <div class="skin-normal">
            <img src="../imagesCards/club-silver-03.jpg">
        </div>
        <div class="skin-normal">
            <img src="../imagesCards/club-silver-04.jpg">
        </div>
        <div class="skin-normal">
            <img src="../imagesCards/club-silver-05.jpg">
        </div>
        <div class="skin-normal">
            <img src="../imagesCards/club-silver-06.jpg">
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        CardstateChange () {
            console.log(11111)
            this.$store.state.cards = 1
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
