<template>
    <div class="skin-Index-Slide">
        <div class="skin-btn">
            <div class="return-top text-c " @click="Topreturn">
                <p class="text-c">^</p>
                <p>TOP</p>
            </div>
            <p class=" slide-icon-message   text-c" @click="openMessage">
                <span class="el-icon-s-comment"></span>
            </p>
        </div>
        <div class="message-content">
            <p class="close-message-box text-r padding-lr-20">
                <span class="el-icon-remove-outline" @click="closeMessage"></span>
            </p>
            <div class="message-detail clearfix">
                <div class="shop-imgBox fl" >
                    <img :src="shopImg" />
                </div>
                <div class="message-text font-14">
                    <p>嗨，亲爱的蔻蜜，我是智能客服<span>兰小蔻</span>。有什么可以帮您？</p>
                    <div class="text-red">
                        <p class="content-con1">> > > 近期活动</p>
                        <p class="content-con2">> > > 我的积分</p>
                        <p class="content-con3">> > > 物流查询</p>
                        <p class="content-con4">> > > 正品渠道上咨询</p>
                        <p class="content-con5">> > > 人工客服</p>
                    </div>
                    <p class=""> > > >产品推荐（可输入“粉底/眼霜…等品类名进行咨询）  </p>
                </div>
                <div class="send-cons  padding-lr-30 margin-t-30 clearfix">
                    <div class="send-conserver  send-con text-l fl"></div>
                    <div class="send-conuser send-con text-r fr margin-t-10"></div>
                </div>
            </div>
            <p class="close-message-box"> </p>
            <div class="message-bottom">
                <input type="text" class="send-btn">
                <span class="smile margin-l-20">
                    <img :src="Smile"/>
                </span>
                <span class="margin-l-10 el-icon-circle-plus-outline font-24 upload-icon"></span>
                <span class="skin-bto send-btotext margin-l-10 font-12" >发送</span>
                <span class="skin-bto margin-l-10 font-12">人工</span>
            </div>
        </div>
    </div>
</template>

<script>
import shopImg from 'components/images/nav-img.jpg'
import Smile from 'components/images/smale.gif'
export default {
    components: {

    },
    data () {
        return {
            shopImg,
            Smile
        }
    },
    methods: {
        returnTop () {
            let scroolBtn = document.querySelector('.skin-btn')
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            if (scrollTop > 200) {
                scroolBtn.style.display = 'block'
            } else {
                scroolBtn.style.display = 'none'
            }
        },
        send () {
            let sendBtn = document.querySelector('.send-btotext')
            sendBtn.onclick = function () {
                let cendtext = document.querySelector('.send-btn').value
                console.log(cendtext)
                let objdiv = document.querySelector('.send-conuser')
                if (cendtext) {
                    let doc = document.createElement('p')
                    var str = document.createTextNode(cendtext)
                    doc.appendChild(str)
                    objdiv.appendChild(doc)
                    document.querySelector('.send-btn').value = ''
                } else {
                    alert('请输入内容')
                }
            }
        },
        Topreturn () {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            var time = setInterval(function () {
                scrollTop = scrollTop - 50
                document.body.scrollTop = scrollTop
                document.documentElement.scrollTop = scrollTop
                if (scrollTop <= 0) {
                    clearInterval(time)
                }
            }, 1)
        },
        closeMessage () {
            let scroolBtn = document.querySelector('.message-content')
            scroolBtn.style.display = 'none'
        },
        openMessage () {
            let scroolBtn = document.querySelector('.message-content')
            scroolBtn.style.display = 'block'
        },
        send1 () {
            let sendBtn = document.querySelector('.content-con1') // 发送按钮
            sendBtn.onclick = function () {
                let objdiv = document.querySelector('.send-conserver')// 内容框
                let doc = document.createElement('li')
                var str = document.createTextNode('亲，兰小蔻建议您向人工咨询近期活动，只需点击此处，将会有专业贴心的客服人员为您详细解答~或者您可以拨打兰蔻全国咨询热线400-820-8016，也可以咨询噢~')
                doc.appendChild(str)
                objdiv.appendChild(doc)
            }
        }
    },
    mounted () {
        window.addEventListener('scroll', this.returnTop)
        this.send()
        this.send1()
    }
}
</script>

<style lang="less" scoped>
// 侧边
.skin-Index-Slide{
    position:relative;
    z-index:998;
    .message-detail {
        width:463px;
        .send-conuser{
            width:80%;
        }
        .send-conserver{
            width:80%;
        }
    }
    .send-cons{
        width:100%;
    }
    .send-con{
        .send-list{
            background: #fff;
            padding:10px;
            color: #000;
        }
    }
    .close-message-box{
        height:50px;
        line-height: 50px;
    }
    .message-detail{
        height:574px;
        .message-text{
            margin-left:50px;
            width: 285px;
            height:220px;
            background: #fff;
            color: #323332;
            padding:10px 20px;
        }
        .shop-imgBox{
            width:40px;
            height:40px;
            img{
                width:100%;
                height:100%;
                border:2px solid #D9D9D9;
                border-radius: 50%;
            }
        }
    }
    .message-content{
        display: none;
        position: fixed;
        right:10px;
        bottom:15px;
        width:465px;
        height:753px;
        border:1px solid #F4F4F4;
        background: #F4F4F4;
        .message-bottom{
            height:80px;
            background: #272727;
            color:white;
            line-height: 80px;
            padding:0 20px;
            .skin-bto{
                padding:2px 15px;
                border:1px solid #fff;
                line-height: 20px;
            }
            input{
                width: 190px;
                height:30px;
                outline: none;
                border-radius: 5px;
                border-color:#272727;
            }
            .smile{
                width:20px;
                img{
                    width:5%;
                    vertical-align: -5px;
                }
            }
            .upload-icon{
                vertical-align: -5px;
            }
        }
    }
    .skin-btn{
        display: none;
        position: fixed;
        bottom:15%;
        right:0;
        background: #323332;
        .return-top{
            padding-top:17px;
            color:#fff;
            width:50px;
            height:55px;
            line-height: 12px;
        }
        .slide-icon-message{
            color:#fff;
            width:50px;
            height:55px;
            font-size:26px;
            line-height: 60px;
        }
    }
}
</style>
