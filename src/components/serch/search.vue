<template>
    <div class="Skin-Search">
        <div class="search-title">
            <span>首页 > </span>
            <span>搜索结果</span>
            <span span class="padding-l-5">" {{$store.state.search.servalue}} "</span>
        </div>
        <div class="serach-img">
            <img :src="serchImg"/>
            <span class="seach-result">搜索结果</span>
        </div>
        <div class="result-none">
            <p class="none-result" v-show="$store.state.search.serchlist.length === 0">非常抱歉，我们没有找到你要的产品<span class="padding-l-5">"{{$store.state.search.servalue}}"</span></p>
            <p class="have-result"  v-show="$store.state.search.serchlist.length > 0">您搜索的"<span>{{$store.state.search.servalue}}</span>"共找到<span>{{$store.state.search.serchlist.length}}</span>个结果</p>
        </div>
        <p class="margin-tb-30 zeno" v-show="$store.state.search.serchlist.length > 0"><span >{{$store.state.search.serchlist.length}}件商品</span></p>
        <ul class="search-result-con clearfix ">
            <li class="search-list fl padding-lr-10 text-c" v-for="(item,index) in saveData" :key="index" >
                <!-- <div class="img-boxs" v-for=""> -->
                    <img :src="banner"/>
                <!-- </div> -->
                <p class="font-18 padding-tb-20" >{{item.g_spec}}ml</p>
                <p class="font-18 " >{{item.g_title}}</p>
                <p class="font-18 padding-tb-20 bottom" >{{item.g_enTitle}}</p>
                <div class="search-cover"></div>
            </li>
        </ul>
        <div class="mabey" >
            <span>你可能会喜欢</span>
            <ul class="search-result-con search-like clearfix margin-t-30 clearfix" >
                <div class="margin-tb-50">
                    <li class="search-list fl padding-lr-10 text-c" v-for="(item,index) in likeData" :key="index" v-show="$store.state.search.serchlist.length === 0">
                        <img :src="'http://192.168.97.254:3000/' + item.g_img.split(',')[0]"/>
                        <p class="font-18 padding-tb-20" >{{item.g_spec}}ml</p>
                        <p class="font-18 " >{{item.g_title}}</p>
                        <p class="font-18 padding-tb-20 bottom" >{{item.g_enTitle}}</p>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import serchImg from 'components/serch/img/search-img.jpg'
import banner from 'components/serch/img/banner-2.jpg'
export default {
    data () {
        return {
            serchImg,
            banner
        }
    },
    computed: {
        saveData () {
            return this.$store.state.search.serchlist
        },
        likeData () {
            return this.$store.state.search.savelist
        }
    },
    methods: {
        getall () {
            return this.$store.state.goods.goodlist
        }
    },
    mounted () {
        let value = this.$store.state.search.servalue
        console.log(value)
        if (value === '') {
            this.$store.dispatch('getgoodslist')
            console.log(this.$store.state.goods.goodlist)
        }
    }
}
</script>

<style lang="less" scoped>
@import url('./Css/search.less');
.search-list{
    position:relative;
    .search-cover{
        position: absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
    }
}
</style>
