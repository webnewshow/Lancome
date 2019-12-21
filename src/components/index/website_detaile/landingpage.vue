<template>
    <div class="Skin-index-webdetail" >
        <router-view></router-view>
        <router-view name = 'Eyepage'></router-view>
        <router-view name = 'whychooses'></router-view>
        <router-view name = 'Kimpurepage'></router-view>
    </div>
</template>

<script>

export default {
    data () {
        return {
        }
    },
    components: {
        // Banner
    }

}
</script>

<style lang="less" scoped>
@import url('./Css/webdetail.less');
</style>
