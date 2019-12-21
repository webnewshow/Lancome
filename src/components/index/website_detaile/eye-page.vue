<template>
    <div class="webdetail-eyepage">
        <div class="eye-img">
            <img :src="eyeImg"/>
        </div>
    </div>
</template>

<script>
import eyeImg from 'components/images/eyepage-img.jpg'
export default {
    data () {
        return {
            eyeImg
        }
    }

}
</script>

<style lang="less" scoped>
@import url('./Css/webdetail.less');
</style>
