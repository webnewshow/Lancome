<template>
  <div>
    <!-- 顶部图片内容 -->
     <div class="skin-container">

       <!-- head 图片 -->
       <div class="skin-b-img">
         <img src="./img/1.jpg" alt="">
       </div>

       <!--筛选导航  -->
       <ul class="skin-head">
         <li><a><router-link to='/'>首页</router-link></a></li>
         <li><a><router-link to='/SkinCare'>护肤</router-link></a></li>
       </ul>

       <!-- 图片标题 -->
       <div class="skin-t-h">
         <h1>护肤</h1>
         <h6>捍卫年轻底线   探索少女肌的奥秘</h6>
       </div>
     </div>

     <!-- 中间内容 -->
     <div class="skin-content">
       <ctnttont></ctnttont>
     </div>

  </div>
</template>
<script>
import ctnttont from './content/index.vue'
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
