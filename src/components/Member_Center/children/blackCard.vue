<template>
    <div>
        <div class="skin-normal">
            <img src="../imagesCards/club-black-02.jpg">
        </div>
        <div class="skin-normal">
            <img src="../imagesCards/club-black-03.jpg">
        </div>
        <div class="skin-normal">
            <img src="../imagesCards/club-black-04.jpg">
        </div>
        <div class="skin-normal">
            <img src="../imagesCards/club-black-05.jpg">
        </div>
        <div class="skin-normal">
            <img src="../imagesCards/club-black-06.jpg">
        </div>
        <div class="skin-normal">
            <img src="../imagesCards/club-black-08.jpg">
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        CardstateChange () {
            console.log(333333)
            this.$store.state.cards = 3
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
