<template>
    <div id="app" >
        <Top></Top>
        <router-view></router-view>
        <router-view name='Join'></router-view>
        <router-view name='Search'></router-view>
        <router-view name='Login'></router-view>
        <router-view name='Cosmetics'></router-view>
        <router-view name='Detail'></router-view>
        <router-view name='User'></router-view>
        <router-view name='ShopCart'></router-view>
        <router-view name='Whychoose'></router-view>
        <router-view name='MemberCenter'></router-view>
        <router-view name='Vipcenter'></router-view>
        <router-view name='Webdetaile'></router-view>
        <router-view name='Hot'></router-view>
        <Bottoms></Bottoms>
        <Slide></Slide>
    </div>
</template>

<script>
import Top from 'components/Common/top.vue'
import Bottoms from 'components/Common/bottom.vue'
import Slide from 'components/Common/slide.vue'
export default {
    name: 'App',
    components: {
        Top,
        Bottoms,
        Slide
    }
}
</script>

<style>
#app {
  max-width: 1920px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
}
div.v-modal{
  z-index: 2 !important;
}
</style>
