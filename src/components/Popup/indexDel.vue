<template>
<div>
        <div class="skin-inner">
            <div class='skin-product-left'>
                <!-- 缩略图 -->
                <div class='skin-small'>
                    <ul>
                        <li class='checked'><img :src='this.api + popMessageImg[0]'></li>
                        <li><img :src='this.api + popMessageImg[1]'></li>
                        <li><img :src='this.api + popMessageImg[2]'></li>
                    </ul>
                </div>
                <div class='skin-big' @mouseenter="mouSeenTer" @mousemove="mouseMove" @mouseleave="mouseLeave">
                    <div class="skin-box"><img src=''></div>
                    <div class="skin-big-show"></div>
                </div>
            </div>
            <div class='skin-product-right'>
                <div class='skin-title-Enname'>{{this.golits.g_enTitle}}</div>
                <div class='skin-title-Cnname'>{{this.golits.g_title}}</div>
                <div class='skin-evaluation'>
                    <ul>
                        <li><i class='el-icon-star-on'></i></li>
                        <li><i class='el-icon-star-on'></i></li>
                        <li><i class='el-icon-star-on'></i></li>
                    </ul>
                    <span class='margin-l-10'>共有00条评价</span>
                </div>
                <p class="font-18">规格：<span class="font-24">{{this.golits.g_spec}}</span> ml</p>
                <!-- 选择颜色或者数量 -->
                <div class='skin-choose-colorNumber clearfix'>
                    <div class='skin-choose-color-select'>
                        <el-select v-model="color" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class='skin-choose-number-select fr'>
                        <el-select v-model="number" @change="selectgetvalue" placeholder="请选择">
                            <el-option
                            v-for="item in numberOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <!-- 价格 -->
                <div class="skin-choose-priceBuy clearfix">
                    <div class='skin-price'>￥<span>270</span></div>
                    <div class='skin-goBuy fr'>
                        <router-link class='skin-bto-hover' to="/Settlement">立即购买</router-link>
                    </div>
                    <div class='skin-buyCar margin-r-10 fr'><span class='skin-bto-hover' @click="addToShop">加入购物袋</span></div>
                </div>
                <div class="skin-popup-content">
                    <p class='font-14 margin-tb-20'>商品简介</p>
                    <p class='font-14 text-active margin-b-30'>* 因数量有限，同一个收货地址或者同一个手机号码限购5件，敬请谅解。</p>
                    <p class='font-14 margin-tb-10'>一抹显色，本色当红</p>
                    <p class='font-14 margin-tb-10'>无论白皮黄皮，都能轻松驾驭</p>
                    <p class='font-14 margin-tb-10'>三款质地，缤纷色号，轻松Hold住多种造型</p>
                    <a class='font-14 text-gray margin-tb-10'>查看更多</a>
                </div>
                <div class=' margin-tb-20'>
                    <span><a style="text-decoration:underline;" class='font-14'>添加到我的收藏夹</a></span>
                </div>
            </div>
        </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            options: [{
                value: '选项1',
                label: '#162 元气胡萝卜'
            }, {
                value: '选项2',
                label: '#154 人间小樱桃'
            }, {
                value: '选项3',
                label: '#198 珊瑚色'
            }, {
                value: '选项4',
                label: '#112 梅子果酱'
            }],
            color: '#162 元气胡萝卜',
            numberOptions: [{
                value: '1',
                label: '1'
            }, {
                value: '2',
                label: '2'
            }, {
                value: '3',
                label: '3'
            }, {
                value: '4',
                label: '4'
            }, {
                value: '5',
                label: '5'
            }],
            number: '1',
            golits: '',
            selectId: '',
            selectValue: 1,
            urlId: '',
            api: 'http://192.168.97.254:3000/',
            popMessageImg: []
        }
    },
    methods: {
        // 大小图展示以及TAB切换
        tabSmallToBig () {
            let smallImg = document.querySelector('.skin-small').querySelectorAll('img')
            document.querySelector('.skin-big').querySelector('img').src = smallImg[0].src
            for (let i = 0; i < smallImg.length; i++) {
                smallImg[i].onclick = function () {
                    this.parentNode.classList.add('checked')
                    let liAll = this.parentNode.parentNode.children
                    for (let j = 0; j < liAll.length; j++) {
                        if (liAll[j].nodeType === 1 & liAll[j] !== this.parentNode) {
                            liAll[j].classList.remove('checked')
                        }
                    }
                    document.querySelector('.skin-big').querySelector('img').src = this.src
                }
            }
        },
        // 放大镜鼠标移入
        mouSeenTer () {
            let imgMinBox = document.querySelector('.skin-big .skin-big-show')
            // 获取小图数据
            let imgMin = document.querySelector('.skin-box img')
            // 将图片地址存入数组
            let imgMinSrc = imgMin.src
            // 添加放大镜框HTML
            let ampHtml = `<img src='${imgMinSrc}' style='position: absolute;'>`
            imgMinBox.innerHTML = ampHtml
        },
        // 放大镜鼠标移出
        mouseLeave () {
            let imgMinBox = document.querySelector('.skin-big .skin-big-show')
            let outHtml = ''
            imgMinBox.innerHTML = outHtml
        },
        // 放大镜鼠标移动
        mouseMove (e) {
            e = e || window.event
            if (e.pageX || e.pageY) {
                this.x = e.pageX
                this.y = e.pageY
            }
            // 盒子距离
            let skinBig = document.querySelector('.skin-big')
            let skinBigTop = skinBig.offsetTop
            let skinBigLeft = skinBig.offsetLeft
            // 鼠标在盒子中的坐标
            let mouseSkinTop = this.y - skinBigTop
            let mouseSkinLeft = this.x - skinBigLeft
            // 小图
            let imgMin = document.querySelector('.skin-box img')
            let imgMinWidth = imgMin.width
            let imgMinHeight = imgMin.height
            // 放大图
            let imgMax = document.querySelector('.skin-big-show img')
            let imgMaxWidth = imgMax.width
            let imgMaxHeight = imgMax.height
            // 坐标确定
            let endLeft = -((imgMaxWidth / imgMinWidth) * mouseSkinLeft / 2)
            let endTop = -((imgMaxHeight / imgMinHeight) * mouseSkinTop / 2)
            imgMax.style.left = endLeft + 'px'
            imgMax.style.top = endTop + 'px'
        },
        // 颜色切换
        chooseColorPre () {
            let ulColor = document.querySelector('.skin-change-color-box ul')
            let ulColorLeft = ulColor.offsetLeft - 38
            let liColor = ulColor.querySelector('li')
            let left = ulColorLeft - liColor.offsetWidth - 20
            ulColor.style.left = left + 'px'
        },
        chooseColorNext () {
            let ulColor = document.querySelector('.skin-change-color-box ul')
            let ulColorLeft = ulColor.offsetLeft - 38
            let liColor = ulColor.querySelector('li')
            let left = ulColorLeft + liColor.offsetWidth + 20
            ulColor.style.left = left + 'px'
        },
        shutDownPop () {
            let PopWindow = document.querySelector('.skin-wrap')
            PopWindow.classList.add('on')
            document.body.style.overflow = 'visible'
        },
        // 根据地址栏传入的id获取对应数据并渲染
        getGoodsCont () {
            var search = window.location.search
            let searchParams = new URLSearchParams(search)
            let searchId = searchParams.get('id')
            // 判断传入id的值
            this.gid = searchId || this.urlId
            this.$store.dispatch('getgoodsfordetail')
            let lists = this.$store.state.getDetail.gooddelist
            if (lists != '') {
                for (let item of lists) {
                    // 判断是否符合传入id的数据，符合则返回该数据
                    if (item.g_id == this.gid) {
                        window.localStorage.removeItem('info')
                        window.localStorage.setItem('info', JSON.stringify(item))
                        this.golits = item
                    }
                }
            } else {
                this.golits = JSON.parse(window.localStorage.getItem('info'))
            }
            return this.golits
        },
        // 点击加入购物袋
        addToShop () {
            // 把获得的数量赋值
            this.golits.g_num = this.selectValue || 1
            this.$store.commit('addselectlist', this.golits)
        },
        // 获取选择的数量value
        selectgetvalue (value) {
            this.selectValue = value
        }
    },
    mounted () {
        this.tabSmallToBig()
        this.getGoodsCont()
        this.popMessageImg = this.golits.g_img.split(',')
    },
    watch: {
        // 监听地址栏的变化
        $route (to, from) {
            this.urlId = to.query.id
            this.getGoodsCont()
        }
    }
}
</script>

<style scoped lang='less'>
.skin-inner{
    background-color: white;
    font-size: 0;
    margin: 0 auto;
    .skin-product-left{
        width: 50%;
        display: inline-block;
        height: 464px;
        .skin-small{
            width: 15%;
            display: inline-block;
            margin-right: 5%;
            ul{
                margin: 0;
                padding: 0;
                li{
                    width: 100%;
                    border: 1px solid #dadada;
                    margin-bottom: 10px;
                    cursor: pointer;
                    img{
                        width: 100%;
                        width: 100%;
                    }
                    &.checked{
                    border: 1px solid black;
                    }
                }
            }
        }
        .skin-big{
            width: 80%;
            display: inline-block;
            vertical-align: top;
            border: 1px solid #666;
            position: relative;
            .skin-box {
                width: 100%;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .skin-big-show {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                overflow: hidden;
            }
            }
    }
    .skin-product-right{
        width: 50%;
        display: inline-block;
        vertical-align: top;
        padding: 0 18px 0 27px;
        text-align: left;
        height: 100%;
        .skin-title-Enname,.skin-title-Cnname{
            width: 100%;
            font-size: 18px;
        }
        .skin-evaluation{
            padding: 26px 0 30px;
            font-size: 14px;
            color: #666;
            ul{
                display: inline-block;
                li{
                    display: inline-block;
                }
            }
        }
        .skin-change-color{
            position: relative;
            .skin-change-pre,.skin-change-next{
                display: inline-block;
                font-size: 34px;
                cursor: pointer;
            }
            .skin-change-pre{
                position: absolute;
                top: 50%;
                left: 0px;
                transform: translate(0,-50%);
            }
            .skin-change-next{
                position: absolute;
                right: 0px;
                top: 50%;
                transform: translate(0,-50%);
            }
            .skin-change-color-box{
                width: 86%;
                margin: 0 7%;
                display: inline-block;
                overflow: hidden;
                ul{
                width: 900px;
                position: relative;
                left: 0px;
                transition: all 0.2s;
                li{
                    display: inline-block;
                    cursor: pointer;
                    padding-bottom: 5px;
                    margin: 10px 10px;
                    span{
                    width: 38px;
                    height: 38px;
                    border-radius: 19px;
                    background-color: #ff2d52;
                    display: inline-block;
                    }
                    &.checked{
                        border-bottom: 2px solid black;
                    }
                }
            }
            }
        }
        .skin-choose-colorNumber{
            padding: 20px 0;
            .skin-choose-color-select{
                display: inline-block;
                padding-right: 10px;
                width: 60%;
                .el-select{
                    width: 100%;
                    /deep/.el-input__inner{
                    border-radius: 0;
                    height: 50px;
                    color: black;
                    }
                    /deep/.el-input.is-focus .el-input__inner{
                        border-color:black;
                    }
                    /deep/.el-input__inner:focus{
                        border-color:black;
                    }
                    /deep/.el-input .el-select__caret.is-reverse{
                        color: black;
                        font-weight: bold;
                    }
                }
            }
            .skin-choose-number-select{
                display: inline-block;
                width: 40%;
                .el-select{
                    width: 100%;
                    /deep/.el-input__inner{
                    border-radius: 0;
                    height: 50px;
                    color: black;
                    }
                    /deep/.el-input.is-focus .el-input__inner{
                        border-color:black;
                    }
                    /deep/.el-input__inner:focus{
                        border-color:black;
                    }
                    /deep/.el-input .el-select__caret.is-reverse{
                        color: black;
                        font-weight: bold;
                    }
                }
            }
        }
        .skin-choose-priceBuy{
            .skin-price{
                display: inline-block;
                color: black;
                font-size: 18px;
                height: 50px;
                line-height: 50px;
                font-weight: 700;
            }
            .skin-buyCar{
                display: inline-block;
                font-size: 14px;
                width: 40%;
                .skin-bto-hover{
                    width: 100%;
                    padding:10px 0;
                    text-align: center;
                }
            }
            .skin-goBuy{
                display: inline-block;
                font-size: 14px;
                 width: 40%;
                .skin-bto-hover{
                    width: 100%;
                    padding:10px 0;
                    text-align: center;
                }
                a {
                    color: #fff;
                    text-decoration: none;
                }
            }
        }
    }
}
.el-select-dropdown__item.selected{
    color: #999;
}
.el-select-dropdown__item:hover{
    color: #ff2d52
}
.el-select-dropdown__list{
    height: 90px;
}
</style>
