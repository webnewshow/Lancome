<template>
    <div>
        <div class="skin-cards-btns">
            <div class="skin-cards-container">
                <ul class="clearfix">
                    <router-link to="/normalCard">
                    <li>
                        <a class="CardsBTN" @click="CardsSwitch(0)">
                            <i class="doubefore"></i>
                            普卡俱乐部
                            <i class="douafter"></i>
                        </a>
                    </li>
                    </router-link>
                    <router-link to="/silverCard">
                    <li>
                        <a class="CardsBTN" @click="CardsSwitch(1)">
                            <i class="doubefore"></i>
                            银卡俱乐部
                            <i class="douafter"></i>
                        </a>
                    </li>
                    </router-link>
                    <router-link to="/goldCard">
                    <li>
                        <a class="CardsBTN" @click="CardsSwitch(2)">
                            <i class="doubefore"></i>
                            金卡私享荟
                            <i class="douafter"></i>
                        </a>
                    </li>
                    </router-link>
                    <router-link to="/blackCard">
                    <li>
                        <a class="CardsBTN" @click="CardsSwitch(3)">
                            <i class="doubefore"></i>
                            黑卡私享荟
                            <i class="douafter"></i>
                        </a>
                    </li>
                    </router-link>
                    <router-link to="/questions">
                    <li>
                        <a class="CardsBTN" @click="CardsSwitch(4)">
                            <i class="doubefore"></i>
                            常见问题
                            <i class="douafter"></i>
                        </a>
                    </li>
                    </router-link>
                </ul>
            </div>
        </div>
        <div class="skin-cards-content">
            <div class="skin-backhome">
                <router-link to="/Vipcenter">
                    <a>返回首页></a>
                </router-link>
            </div>
                <router-view></router-view>
            <div class="skin-backhome">
                <router-link to="/Vipcenter">
                    <a>返回首页></a>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        CardsSwitch (index) {
            var Cardsbtns = document.querySelectorAll('.CardsBTN')
            for (var i = 0; i < Cardsbtns.length; i++) {
                Cardsbtns[i].classList.remove('chosen')
            }
            Cardsbtns[index].classList.add('chosen')
        }
    },
    mounted () {
        var Cardsbtns = document.querySelectorAll('.CardsBTN')
        Cardsbtns[this.$store.state.cards].classList.add('chosen')
    }
}
</script>
<style scoped lang='less'>
@import './css/common.less';
@import './css/cards.less';
</style>
