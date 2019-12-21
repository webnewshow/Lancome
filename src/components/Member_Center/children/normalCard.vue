<template>
    <div>
        <div class="skin-normal">
            <img src="../imagesCards/club-only-01.jpg">
        </div>
        <div class="skin-normal">
            <img src="../imagesCards/club-only-02.jpg">
        </div>
        <div class="skin-normal">
            <img src="../imagesCards/club-only-03.jpg">
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        CardstateChange () {
            console.log('ooooo')
            this.$store.state.cards = 0
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
