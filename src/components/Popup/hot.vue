<template>
<div>
    <div class='img-01'>
        <div class='pc-img-01 pr'><img src='./images/pc_img_01 (2).jpg'></div>
    </div>
    <div class='img-02'>
        <div class='pc-img-02 pr'>
            <img src='./images/pc_img_02 (2).jpg'>
            <img class='pc-xhp pc02' src='./images/pc_xhp.png'>
            <router-link class='buy02' to=''></router-link>
        </div>
    </div>
    <div class='img-03'>
        <div class='pc-img-03 pr'>
            <img src='./images/pc_img_03 (2).jpg'>
            <router-link class='buy03' to=''></router-link>
        </div>
    </div>
    <div class='img-04'>
        <div class='pc-img-04 pr'>
            <img src='./images/pc_img_04 (2).jpg'>
            <img class='pc_dyjh pc04' src='./images/pc_dyjh.png'>
            <router-link class='buy04' to=''></router-link>
        </div>
    </div>
    <div class='img-05'>
        <div class='pc-img-05 pr'>
            <img src='./images/pc_img_05.jpg'>
            <img class='pc_fgys pc05' src='./images/pc_fgys.png'>
            <router-link class='buy05' to=''></router-link>
        </div>
    </div>
    <div class='img-06'>
        <div class='pc-img-06 pr'>
            <img src='./images/pc_img_06.jpg'>
            <img class='pc_jcys pc06' src='./images/pc_jcys.png'>
            <router-link class='buy06' to=''></router-link>
        </div>
    </div>
    <div class='img-07'>
        <div class='pc-img-07 pr'>
            <img src='./images/pc_img_07.jpg'>
            <img class='pc_jcms pc07' src='./images/pc_jcms.png'>
            <router-link class='buy07' to=''></router-link>
        </div>
    </div>
    <div class='img-08'>
        <div class='pc-img-08 pr'>
            <img src='./images/pc_img_08.jpg'>
            <img class='pc_tiu pc08' src='./images/pc_tiu.png'>
            <router-link class='buy08' to=''></router-link>
        </div>
    </div>
    <div class='img-09'>
        <div class='pc-img-09 pr'>
            <img src='./images/pc_img_09.jpg'>
            <img class='pc_jcqd pc09' src='./images/pc_jcqd.png'>
            <router-link class='buy09' to=''></router-link>
        </div>
    </div>
    <div class='img-10'>
        <div class='pc-img-10 pr'>
            <img src='./images/pc_img_10.jpg'>
            <img class='pc_196 pc10' src='./images/pc_196.png'>
            <router-link class='buy10' to=''></router-link>
        </div>
    </div>
    <div class='img-11'>
        <div class='pc-img-11 pr'>
            <img src='./images/pc_img_11.jpg'>
            <img class='pc_bs pc11' src='./images/pc_bs.png'>
            <router-link class='buy11' to=''></router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        toUpDown () {
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            let pc02 = document.querySelector('.pc02')
            let pc04 = document.querySelector('.pc04')
            let pc05 = document.querySelector('.pc05')
            let pc06 = document.querySelector('.pc06')
            let pc07 = document.querySelector('.pc07')
            let pc08 = document.querySelector('.pc08')
            let pc09 = document.querySelector('.pc09')
            let pc10 = document.querySelector('.pc10')
            let pc11 = document.querySelector('.pc11')
            if (scrollTop >= 500) {
                pc02.classList.add('toUp')
                pc02.classList.remove('toDown')
            } else {
                pc02.classList.add('toDown')
                pc02.classList.remove('toUp')
            }
            if (scrollTop >= 2000) {
                pc04.classList.add('toUp')
                pc04.classList.remove('toDown')
            } else {
                pc04.classList.add('toDown')
                pc04.classList.remove('toUp')
            }
            if (scrollTop >= 2800) {
                pc05.classList.add('toUp')
                pc05.classList.remove('toDown')
            } else {
                pc05.classList.add('toDown')
                pc05.classList.remove('toUp')
            }
            if (scrollTop >= 3500) {
                pc06.classList.add('toUp')
                pc06.classList.remove('toDown')
            } else {
                pc06.classList.add('toDown')
                pc06.classList.remove('toUp')
            }
            if (scrollTop >= 4200) {
                pc07.classList.add('toUp')
                pc07.classList.remove('toDown')
            } else {
                pc07.classList.add('toDown')
                pc07.classList.remove('toUp')
            }
            if (scrollTop >= 5200) {
                pc08.classList.add('toUp')
                pc08.classList.remove('toDown')
            } else {
                pc08.classList.add('toDown')
                pc08.classList.remove('toUp')
            }
            if (scrollTop >= 6000) {
                pc09.classList.add('toUp')
                pc09.classList.remove('toDown')
            } else {
                pc09.classList.add('toDown')
                pc09.classList.remove('toUp')
            }
            if (scrollTop >= 6820) {
                pc10.classList.add('toUp')
                pc10.classList.remove('toDown')
            } else {
                pc10.classList.add('toDown')
                pc10.classList.remove('toUp')
            }
            if (scrollTop >= 7710) {
                pc11.classList.add('toUp')
                pc11.classList.remove('toDown')
            } else {
                pc11.classList.add('toDown')
                pc11.classList.remove('toUp')
            }
        }
    },
    mounted () {
        window.addEventListener('scroll', this.toUpDown)
    }
}
</script>

<style scoped lang='less'>
.pr{
        position: relative;
    }
.toUp{
    animation: toUp .4s ease-out;
    display: block !important;
    animation-fill-mode: forwards;
}
@keyframes toUp{
    0% {
    transform: translateY(200px);
    opacity: 0.5;
    }
    100% {
    transform: translateY(0px);
    opacity: 1;
    }
}
.toDown{
    animation: toDown .4s ease-out;
    display: block !important;
    animation-fill-mode: forwards;
}
@keyframes toDown{
    0% {
    transform: translateY(0);
    opacity: 1;
    }
    100% {
    transform: translateY(200px);
    opacity: 0;
}
}
.img-01{
    width: 100%;
    margin: 0 auto;
    .pc-img-01{
        width: 1920px;
        left: 50%;
        transform: translateX(-50%);
        img{
            width: 100%;
        }
    }
}
.img-02{
    width: 100%;
    margin: 0 auto;
    .pc-img-02{
        width: 1920px;
        left: 50%;
        transform: translateX(-50%);
        img{
            width: 100%;
        }
        .pc-xhp{
            width: 499px;
            height: 603px;
            position: absolute;
            top: 139px;
            left: 863px;
            display: none;
        }
        .buy02{
            width: 10%;
            height: 10%;
            position: absolute;
            top: 67%;
            left: 60%;
            z-index: 2;
            background-color: yellow;
        }
    }
}
.img-03{
    width: 100%;
    margin: 0 auto;
    .pc-img-03{
        width: 1920px;
        left: 50%;
        transform: translateX(-50%);
        img{
            width: 100%;
        }
        .buy03{
            width: 10%;
            height: 10%;
            position: absolute;
            top: 67%;
            left: 21%;
            z-index: 2;
            background-color: yellow;
        }
    }
}
.img-04{
    width: 100%;
    margin: 0 auto;
    .pc-img-04{
        width: 1920px;
        left: 50%;
        transform: translateX(-50%);
        img{
            width: 100%;
        }
        .pc_dyjh{
            width: 675px;
            width: 675px;
            height: 617px;
            position: absolute;
            top: 239px;
            left: 702px;
        }
        .buy04{
            width: 10%;
            height: 9%;
            position: absolute;
            top: 60%;
            left: 60%;
            z-index: 2;
            background-color: yellow;
        }
    }
}
.img-05{
    width: 100%;
    margin: 0 auto;
    .pc-img-05{
        width: 1920px;
        left: 50%;
        transform: translateX(-50%);
        img{
            width: 100%;
        }
        .pc_fgys{
            width: 561px;
            height: 478px;
            position: absolute;
            top: 260px;
            left: 733px;
        }
        .buy05{
            width: 10%;
            height: 10%;
            position: absolute;
            top: 62%;
            left: 23%;
            z-index: 2;
            background-color: yellow;
        }
    }
}
.img-06{
    width: 100%;
    margin: 0 auto;
    .pc-img-06{
        width: 1920px;
        left: 50%;
        transform: translateX(-50%);
        img{
            width: 100%;
        }
        .pc_jcys{
            width: 533px;
            height: 499px;
            position: absolute;
            top: 278px;
            left: 785px;
        }
        .buy06{
           width: 10%;
            height: 10%;
            position: absolute;
            top: 66%;
            left: 63%;
            z-index: 2;
            background-color: yellow;
        }
    }
}
.img-07{
    width: 100%;
    margin: 0 auto;
    .pc-img-07{
        width: 1920px;
        left: 50%;
        transform: translateX(-50%);
        img{
            width: 100%;
        }
        .pc_jcms{
            width: 713px;
            height: 661px;
            position: absolute;
            top: 188px;
            left: 780px;
        }
        .buy07{
           width: 10%;
            height: 10%;
            position: absolute;
            top: 69%;
            left: 20%;
            z-index: 2;
            background-color: yellow;
        }
    }
}
.img-08{
    width: 100%;
    margin: 0 auto;
    .pc-img-08{
        width: 1920px;
        left: 50%;
        transform: translateX(-50%);
        img{
            width: 100%;
        }
        .pc_tiu{
            width: 292px;
            height: 646px;
            position: absolute;
            top: 136px;
            left: 902px;
        }
        .buy08{
            width: 10%;
            height: 9%;
            position: absolute;
            top: 61%;
            left: 61%;
            z-index: 2;
            background-color: yellow;
        }
    }
}
.img-09{
    width: 100%;
    margin: 0 auto;
    .pc-img-09{
        width: 1920px;
        left: 50%;
        transform: translateX(-50%);
        img{
            width: 100%;
        }
        .pc_jcqd{
            width: 433px;
            height: 434px;
            position: absolute;
            top: 236px;
            left: 734px;
        }
        .buy09{
            width: 10%;
            height: 10%;
            position: absolute;
            top: 69%;
            left: 20%;
            z-index: 2;
            background-color: yellow;
        }
    }
}
.img-10{
    width: 100%;
    margin: 0 auto;
    .pc-img-10{
        width: 1920px;
        left: 50%;
        transform: translateX(-50%);
        img{
            width: 100%;
        }
        .pc_196{
            width: 534px;
            height: 529px;
            position: absolute;
            top: 280px;
            left: 770px;
        }
        .buy10{
           width: 10%;
            height: 9%;
            position: absolute;
            top: 65%;
            left: 65%;
            z-index: 2;
            background-color: yellow;
        }
    }
}
.img-11{
    width: 100%;
    margin: 0 auto;
    .pc-img-11{
        width: 1920px;
        left: 50%;
        transform: translateX(-50%);
        img{
            width: 100%;
        }
        .pc_bs{
            width: 679px;
            height: 555px;
            position: absolute;
            top: 270px;
            left: 726px;
        }
        .buy11{
           width: 10%;
            height: 10%;
            position: absolute;
            top: 63%;
            left: 23%;
            z-index: 2;
            background-color: yellow;
        }
    }
}
</style>
