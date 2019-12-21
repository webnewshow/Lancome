<template>
    <div class="webdetail-whychoose">
        <div class="whychoose-img">
            <img :src="whychooseImg"/>
        </div>
    </div>
</template>

<script>
import whychooseImg from 'components/images/whychoose-img.jpg'
export default {
    data () {
        return {
            whychooseImg
        }
    }

}
</script>

<style lang="less" scoped>
@import url('./Css/webdetail.less');
</style>
