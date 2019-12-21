<template>
    <div>
        <div class='skin-img-01'>
            <img src='./images/pc_img_01.jpg'>
        </div>
        <div class='skin-img-02'>
            <router-link to='/' class='toIndex'></router-link>
            <router-link to='/' class='toIndex1'></router-link>
            <img src='./images/pc_img_02.jpg'>
        </div>
        <div class='skin-img-03'>
            <router-link to='/' class='toIndex2'></router-link>
            <img src='./images/pc_img_03.jpg'>
        </div>
        <div class='skin-img-04'>
            <img src='./images/pc_img_04.jpg'>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang='less'>
.skin-img-01{
    width: 100%;
    text-align: center;
    img{
        width: 100%;
    }
}
.skin-img-02{
    width: 100%;
    text-align: center;
    position: relative;
    .toIndex{
        width: 11%;
        height: 5%;
        position: absolute;
        top: 35%;
        left: 28%;
        cursor: pointer;
    }
     .toIndex1{
        width: 11%;
        height: 5%;
        position: absolute;
        bottom: 9%;
        right: 44%;
        cursor: pointer;
    }
    img{
        width: 100%;
    }
}
.skin-img-03{
    width: 100%;
    text-align: center;
    position: relative;
     .toIndex2{
        width: 11%;
        height: 7%;
        position: absolute;
        top: 80%;
        right: 37%;
        cursor: pointer;
    }
    img{
        width: 100%;
    }
}
.skin-img-04{
    width: 100%;
    text-align: center;
    position: relative;
    img{
        width: 100%;
    }
}
</style>
