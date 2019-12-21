<template>
    <div id="skin-Index-Bottom" class="skin-Index-Bottom">
        <div class="bottom-skin">
            <div class="Bottom-title font-22">
                兰蔻中国官方网站
            </div>
            <ul class="bottom-lists clearfix">
                    <li class="bottom-list">
                        <img :src='foot1'/>
                        <p>品质保证</p>
                        <p class="detaile">官方提供原装   </p>
                    </li>
                    <li class="bottom-list">
                        <img :src='foot2'/>
                        <p>品质保证</p>
                        <p class="detaile">官方提供原装</p>
                    </li>
                    <li class="bottom-list">
                        <img :src='foot3'/>
                        <p>品质保证</p>
                        <p class="detaile">官方提供原装</p>
                    </li>
                    <li class="bottom-list">
                        <img :src='foot4'/>
                        <p>品质保证</p>
                        <p class="detaile">官方提供原装</p>
                    </li>
            </ul>
        </div>
        <div class=" bottom-skin02">
                <ul class="bottom-detail-lists clearfix font-12" >
                    <li class="bottom-detail-list">
                        <p class="text-white font-14">关于我们</p>
                        <p class="">加入兰蔻</p>
                        <p>会员中心</p>
                    </li>
                    <li class="bottom-detail-list">
                        <p class="text-white font-14">联系我们</p>
                        <p class="">线上美容顾问</p>
                        <p>订购热线:4008208016</p>
                    </li>
                    <li class="bottom-detail-list">
                        <p class="text-white font-14">配送即送货</p>
                    </li>
                    <li class="bottom-detail-list">
                        <p class="text-white font-14">专柜查询</p>
                    </li>
                    <li class="bottom-detail-list">
                        <p class="text-white font-14">关注我们</p>
                        <p class="">
                            <span class="text-white"></span>
                            <span>官方微信</span>
                        </p>
                        <p class="">
                            <span class="text-white"></span>
                            <span>官方微博</span>
                        </p>
                    </li>
                </ul>
                <div class="bottom-Email text-l">
                    <p class="text-white"><span class=""></span>电子邮箱</p>
                    <div class="con-box margin-t-10">
                        <input  type="text" placeholder="*请输入你的邮箱"/>
                        <span class="font-12 text-white padding-l-5">确定</span>
                    </div>
                </div>
        </div>
        <div class='bottom-skin03'>
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="关于我们" name="1">
                    <div>加入兰蔻</div>
                    <div>会员中心</div>
                </el-collapse-item>
                <el-collapse-item title="联系我们" name="2">
                    <div>线上美容顾问</div>
                    <div>订购热线：10000</div>
                </el-collapse-item>
            </el-collapse>
            <p>配送及退货</p>
            <p>专柜查询</p>
            <p>关注我们</p>
            <p>配送及退货</p>
            <p class="text-white"><span class=""></span>电子邮箱</p>
            <div class="con-box margin-t-10">
                <input  type="text" name='email' placeholder="*请输入你的邮箱"/>
                <span class="font-12 text-white padding-l-5">确定</span>
            </div>
        </div>
        <div class="bottom-address font-12 text-c padding-t-50">
            <span class="margin-r-30">© L’Oreal China 欧莱雅（中国）有限公司版权所有</span>
            <span class="margin-r-30">中国工商 沪ICP备08100043号-34</span>
            <span class="margin-r-30">沪公网安备 31010602001526号</span>
        </div>
        <div class="text-c font-12">
             <P class="zhengce-lists padding-t-50 text-grey ">
                <span class="zhengce-list">使用条款</span>
                <span class="zhengce-list">cookies政策</span>
                <span class=" zhengce-list">隐私政策</span>
            </P>
            <P class="text-grey padding-t-20">浏览该网站表示您接受并同意我们使用cookies为您提供个性化的浏览体验。点击<a class="text-grey">Cookies政策</a>了解详情</P>
        </div>
       </div>
</template>

<script>
import foot1 from 'components/images/footer-1.png'
import foot2 from 'components/images/footer-2.png'
import foot3 from 'components/images/footer-3.png'
import foot4 from 'components/images/footer-4.png'
export default {
    data () {
        return {
            foot1,
            foot2,
            foot3,
            foot4,
            activeNames: ['1']
        }
    },
    methods: {
        handleChange (val) {
            console.log(val)
        }
    }
}
</script>

<style lang="less" scoped>
// 底部
.bottom-skin{
    background: #000000;
    color:#fff;
    text-align: center;
    .Bottom-title{
        padding-top:40px;
    }
    .bottom-lists{
        padding:20px;
        border-bottom: 1px solid #333;
        font-size: 0;
        .bottom-list{
            display: inline-block;
            width:25%;
            font-size: 14PX;
            .detaile{
                color:#999;
            }
        }
         @media (max-width: 1024px){
            .bottom-list{
                width: 50% !important;
            }
    }
    }
}
.bottom-skin02{
    background: #000000;
    color:#fff;
    padding: 50px 15px 50px 150px;
    .bottom-detail-lists{
        padding:20px 0;
        color:#999;
        font-size: 0;
        .bottom-detail-list{
            display: inline-block;
            width:20%;
            line-height: 24px;
            font-size: 14px;
            vertical-align: top;
            text-align: left;
        }
    }
    .bottom-Email{
        color:#999;
    }
    .con-box{
        border:1px solid #fff;
        width:235px;
        height:30px;
        line-height: 30px;
        input{
            color:#fff;
            height:22px;
            outline: none;
            width:80%;
            background-color: transparent;
            border-color:transparent;
            border-right-color:white;
            padding:4px 10px;
        }
    }
}
.bottom-skin03{
    text-align: center;
    display: none;
    background: #000000;
    color: white;
    padding: 25px 0;
    /deep/.el-collapse{
        border:none;
    }
    /deep/.el-collapse-item__header{
        display: inline-block;
        border-bottom: 0;
        background-color:#000000;
        color: white;
        height: 20px;
        line-height: 20px;
        padding-left: 10px;
        .el-collapse-item__arrow{
            margin: 0;
        }
    }
    /deep/.el-collapse-item__wrap{
        border-bottom: 0;
        background-color:#000000;
        .el-collapse-item__content{
            color:#a3a3a3;
            padding: 0;
        }
    }
    p{
        font-size: 13px;
        height: 20px;
        line-height: 20px;
    }
    .bottom-Email{
        color:#999;
    }
    .con-box{
        border:1px solid #fff;
        width:235px;
        height:30px;
        line-height: 30px;
        display: inline-block;
        input[name='email']{
            color:#fff;
            height:22px;
            outline: none;
            width:80%;
            background-color: transparent;
            border-color:transparent;
            border-right-color:white;
            padding:4px 10px;
        }
    }
}
@media (max-width: 1024px){
    .bottom-skin02{
        display: none !important;
    }
    .bottom-skin03{
        display: block !important;
    }
    .bottom-address{
        span {
            display: block;
            margin: 0;
        }
    }
}
.text-white{
    color:white;
}
.text-grey{
    color:#ABABAB;
}

.zhengce-lists{
    text-align: center;
    margin:0 auto;
}
.zhengce-list{
    display: inline-block;
    padding:0 5px;
    border-right:1px solid #ABABAB;
}
</style>
