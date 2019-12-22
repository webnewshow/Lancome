<template>
  <div>
    <!-- 顶部图片内容 -->
     <div class="skin-container">

       <!-- head 图片 -->
       <div class="skin-b-img">
         <img src="./img/7.jpg" alt="">
       </div>

       <!--筛选导航  -->
       <ul class="skin-head">
         <li><a><router-link to='/'>首页</router-link></a></li>
         <li><a><router-link to='/Perfume'>香水</router-link></a></li>
       </ul>

       <!-- 图片标题 -->
       <div class="skin-t-h">
         <h1>香水</h1>
         <h6>探悉愉悦本源   轻嗅坠入快乐漩涡</h6>
       </div>
     </div>

     <!-- 中间内容 -->
     <div class="skin-content">
       <ctnttont></ctnttont>
     </div>

  </div>
</template>
<script>
import ctnttont from './Perfume/index.vue'
export default {
    components: {
        ctnttont
    }
}
</script>

<style lang="less" >
@import '../../css/public.less';
@import './css/index.less';
</style>
