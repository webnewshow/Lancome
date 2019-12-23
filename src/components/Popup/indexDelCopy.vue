<template>
<div class='skin-max'>
    <div class='skin-maxBox'>
        <div class="skin-inner">
            <div class='skin-product-left clearfix'>
                <!-- 缩略图 -->
                <div class='skin-small fl'>
                    <ul>
                        <li class='checked'><img src='./images/15741550653701721_920X920.jpg'></li>
                        <li><img src='./images/1576162546662304_920X920.jpg'></li>
                        <li><img src='./images/15767599638116550_920X920.jpg'></li>
                    </ul>
                </div>
                <div class='fr skin-big' @mouseenter="mouSeenTer" @mousemove="mouseMove" @mouseleave="mouseLeave">
                    <div class="skin-box"><img src=''></div>
                    <div class="skin-big-show"></div>
                </div>
            </div>
            <div class='skin-product-right'>
                <div class='skin-title-Enname'>{{this.popMessage.g_enTitle}}</div>
                <div class='skin-title-Cnname'>{{this.popMessage.g_title}}</div>
                <div class='skin-evaluation'>
                    <ul>
                        <li><i class='el-icon-star-on'></i></li>
                        <li><i class='el-icon-star-on'></i></li>
                        <li><i class='el-icon-star-on'></i></li>
                    </ul>
                    <span class='margin-l-10'>共有{{this.popMessage.g_count}}条评价</span>
                </div>
                <!-- 选择颜色 -->
                <p class='font-14'>选择颜色</p>
                <div class='skin-change-color clearfix'>
                    <span class='skin-change-pre fl' @click="chooseColorPre"><i class='el-icon-arrow-left'></i></span>
                    <div class='skin-change-color-box'>
                        <ul>
                        <li class='checked'>
                            <span></span>
                        </li>
                        <li >
                            <span></span>
                        </li>
                        <li >
                            <span></span>
                        </li>
                        <li >
                            <span></span>
                        </li>
                        <li >
                            <span></span>
                        </li>
                        <li >
                            <span></span>
                        </li>
                        <li >
                            <span></span>
                        </li>
                        <li >
                            <span></span>
                        </li>
                        <li >
                            <span></span>
                        </li>
                        <li >
                            <span></span>
                        </li>
                        <li >
                            <span></span>
                        </li>
                    </ul>
                    </div>
                    <span class='skin-change-next fr' @click="chooseColorNext"><i class='el-icon-arrow-right'></i></span>
                </div>
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
                        <el-select v-model="number" placeholder="请选择">
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
                    <div class='skin-price'>￥<span>{{this.popMessage.g_price}}</span></div>
                    <div class='skin-goBuy fr'><span class='skin-bto'>立即购买</span></div>
                    <div class='skin-buyCar margin-r-10 fr'><span class='skin-bto'>加入购物袋</span></div>
                </div>
                <div>
                    <p class='font-14 margin-tb-20'>商品简介</p>
                    <p class='font-14 text-active margin-b-30'>* 因数量有限，同一个收货地址或者同一个手机号码限购5件，敬请谅解。</p>
                    <p class='font-14 margin-tb-10'>一抹显色，本色当红</p>
                    <p class='font-14 margin-tb-10'>无论白皮黄皮，都能轻松驾驭</p>
                    <p class='font-14 margin-tb-10'>三款质地，缤纷色号，轻松Hold住多种造型</p>
                    <a class='font-14 text-gray margin-tb-10'>查看更多</a>
                </div>
                <div class=' margin-tb-20'>
                    <span><a class='font-14'>添加到我的收藏夹</a></span>
                </div>
                <i class='skin-chacha el-icon-close' @click="shutDownPop"></i>
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
                value: '选项1',
                label: '1'
            }, {
                value: '选项2',
                label: '2'
            }, {
                value: '选项3',
                label: '3'
            }, {
                value: '选项4',
                label: '4'
            }, {
                value: '选项5',
                label: '5'
            }],
            number: '1',
            imgLi: []
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
            if (e.clientX || e.clientY) {
                this.x = e.clientX
                this.y = e.clientY
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
            let PopWindow = document.querySelector('.skin-max')
            PopWindow.classList.remove('on')
            document.body.style.overflow = 'visible'
        }
    },
    mounted () {
        this.tabSmallToBig()
        this.imgLi = this.$store.state.popup.openWinMessage.g_img
        // console.log(this.imgLi)
    },
    computed: {
        popMessage () {
            return this.$store.state.popup.openWinMessage
        }
    }
}
</script>

<style scoped lang='less'>
.skin-max {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1000;
    display: none;
    &.on{
        display: block;
    }
    .skin-maxBox{
        height: 100%;
        width: 100%;
        margin: 0 auto;
        margin-top: 150px;
    }
}
.skin-inner{
    width:1240px;
    padding: 60px 20px;
    background-color: white;
    font-size: 0;
    margin: 0 auto;
    height: 600px;
    margin-top: 150px;
    .skin-product-left{
        width: 50%;
        display: inline-block;
        height: 464px;
        .skin-small{
            display: inline-block;
            ul{
                margin: 0;
                padding: 0;
                li{
                    width: 80px;
                    height: 80px;
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
            width: 464px;
            height: 464px;
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
        overflow-y: auto;
        position: relative;
        .skin-chacha{
            position: absolute;
            font-size: 24px;
            top:0px;
            right: 20px;
            cursor: pointer;
        }
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
                .el-select{
                    width: 340px;
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
                .el-select{
                    width: 180px;
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
                .skin-bto {
                    padding: 15px 70px;
                }
            }
            .skin-goBuy{
                display: inline-block;
                font-size: 14px;
                .skin-bto {
                    padding: 15px 70px;
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
