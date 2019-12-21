<template>
  <div class="clearfix skin-content-lists">
    <!-- 左边 -->
    <div class="skin-cen-fl">
      <!-- 左边第一模块 -->
       <div class="skin-dao-hang">
          <ul class="skin-headd">
            <li><a><router-link to="/">首页</router-link></a></li>
             <li><a><router-link to="/SkinCare">护肤</router-link></a></li>
              <li><a>产品类型</a></li>
          </ul>
             </div>
      <div class="skin-text-l ">
        <div class="skin-f-f">
            <p class="skin-f-fu">产品类型</p>
        </div>
           <!-- 第二模块 三大类 -->
         <div class="skin-f-th">
            <p class="skin-f-fh">卸妆&洁面</p>
        </div>
        <div class="skin-f-th">
            <p class="skin-f-fh">美容液&爽肤水</p>
        </div>
        <div class="skin-f-th">
            <p class="skin-f-fh">精华</p>
        </div>
        <div class="skin-f-th">
            <p class="skin-f-fh">眼部护理</p>
        </div>
        <div class="skin-f-th">
            <p class="skin-f-fh">乳液</p>
        </div>
        <div class="skin-f-th">
            <p class="skin-f-fh">面霜</p>
        </div>
        <div class="skin-f-th">
            <p class="skin-f-fh"><router-link to="demand">面膜</router-link></p>
        </div>
        <div class="skin-f-th">
            <p class="skin-f-fh"><router-link to="demand">防晒隔离</router-link></p>
        </div>
        <div class="skin-element skin-el-deep">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item class="skin-s-x" title="产品筛选" name="1">
          <!-- <p>卸妆乳</p> -->
           <el-checkbox-group class="skin-h-h" v-model="checkList">
            <el-checkbox label="隔离防晒"></el-checkbox><br>
            <el-checkbox label="卸妆乳"></el-checkbox><br>
            <el-checkbox label="卸妆&洁面"></el-checkbox><br>
            <el-checkbox label="面膜"></el-checkbox><br>
            <el-checkbox label="精华"></el-checkbox><br>
            <el-checkbox label="美容液/爽肤水"></el-checkbox><br>
            <el-checkbox label="乳液"></el-checkbox><br>
            <el-checkbox label="眼霜"></el-checkbox><br>
            <el-checkbox label="面霜"></el-checkbox><br>
            <el-checkbox label="晚霜"></el-checkbox><br>
            <el-checkbox label="修容"></el-checkbox><br>
            <el-checkbox label="眼部产品"></el-checkbox><br>
          </el-checkbox-group>
        </el-collapse-item>
      </el-collapse>
  <!--  护肤需求 -->
  <el-collapse accordion>
  <el-collapse-item title="护肤需求" name="2">
     <el-checkbox label="隔离防晒"></el-checkbox><br>
            <el-checkbox label="奢宠抗老"></el-checkbox><br>
            <el-checkbox label="去黑眼圈"></el-checkbox><br>
            <el-checkbox label="淡斑焕白"></el-checkbox><br>
            <el-checkbox label="润泽保湿"></el-checkbox><br>
            <el-checkbox label="深层洁净"></el-checkbox><br>
            <el-checkbox label="修护肌底"></el-checkbox><br>
            <el-checkbox label="男士护肤"></el-checkbox><br>
            <el-checkbox label="紧致抚纹"></el-checkbox><br>
  </el-collapse-item>
</el-collapse>
</div>
<!-- 价格 -->
<el-collapse accordion>
  <el-collapse-item>
    <template slot="title"> 价格 </template>
    <!--  起底价格-->
       <div class="skin-j-prop">
           <!-- 过渡符号 -->
       <div class="skin-g-d"><input class="skin-input-o" type="text" value="150" disabled =“disabled”></div>
          <!-- 过渡符号 -->
       <div class="skin-g-d">———</div>
       <!-- 输入价格 -->
       <div class="skin-s-r"><input  class="skin-input-oy" type="number" name="" id=""></div>
       </div>
  </el-collapse-item>
</el-collapse>
        <div>
        </div>
      </div>
    </div>

    <!-- 右边 -->
    <div class="skin-cen-fr">
      <!-- 第一行 -->
      <div class="skin-fist-ra">
        <!-- 响应式左边 -->
        <div class="skin-xiangy-fl" @click="translate()">筛选条件
          <span style="float:right">x</span>
        </div>
        <!-- 产品总计件 -->
        <div class="skin-first-piece">
            <p>
              <span>64</span>
              件商品
            </p>
        </div>

        <!-- 右边排序框 -->
        <div class="skin-first-think">
            <!-- 排序插件 -->
            <template>
              <el-select v-model="value" placeholder="按照上市时间">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
        </div>
      </div>

      <!-- 列表内容部分 -->
      <div class="skin-contnent-ri">
      <ul  class="skin-cont-rilists clearfix">
            <li v-for="(item,index) in list" :key="index" class="skin-cont-rilist">
              <!-- 头部图片内容 -->
               <div class="skin-chudo">
                  <img src="../img/2.jpg">
                </div>
                <!-- 下部分文字内容 -->
                <div class="skin-bu-cone">
                  <!-- 毫升ml -->
                  <div class="skin-content-Milliliter">
                    <p>{{item.g_spec}}ml</p>
                  </div>
                  <!-- 名称 -->
                  <p class="skin-goods-tit">
                    <a>{{item.g_title}}</a>
                  </p>
                  <!-- 英文名 -->
                  <p class="skin-goods-introudce">
                      <a>{{item.g_enTitle}}</a>
                  </p>
                  <!-- 五星好评和价格 -->
                  <div class="skin-row">
                    <!-- 星星 -->
                    <div>
                      <img src="../img/3.png">
                    </div>
                    <!-- 竖线 -->
                    <p class="skin-row-zhong"></p>
                    <!-- 价格 -->
                    <div class="skin-list-jiage">
                        <span>¥{{item.g_price}}</span>
                    </div>
                  </div>
                  <div class="skin-con-ribtn">
                    <p class="skin-bto-hover" @click="OpenWinPop(item.g_id)">立即购买</p>
                   <router-link class="skin-bto-ljxq" :to="{path: '/detail', query: {id: item.g_id}}" >了解详情</router-link>
                  </div>
                  <!-- 响应式按钮 -->
                  <p class="skin-b-gshop" @click="OpenWinPop(item.g_id)">立即购买</p>
                </div>
            </li>
        </ul>
      </div>
    </div>

     <!-- 响应式导航栏 -->
    <div class="skin-Navigation-list">
      <div>
        <ul class="skin-ul-li">
          <li @click="Telescopic()">返回</li>
          <li class="skin-ul">产品筛选</li>
          <li class="skin-fr">结果<span>(<span>8</span>)</span></li>
        </ul>
      </div>
      <!-- 条件筛选 -->
      <div class="skin-shai-xuan">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="产品筛选" name="1">
            <div  class="skin-el-skin">
              <el-checkbox-group v-model="checkboxGroup1">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
              </el-checkbox-group>
            </div>
          </el-collapse-item>

          <el-collapse-item title="肌肤需求" name="2">
             <div>
              <el-checkbox-group v-model="checkboxGroup2">
                <el-checkbox-button v-for="city in cities2" :label="city" :key="city">{{city}}</el-checkbox-button>
              </el-checkbox-group>
            </div>
          </el-collapse-item>

           <el-collapse-item title="价格" name="3">
               <!--  起底价格-->
                <ul class="skin-qi-price">
                  <li><input class="skin-in-put" type="number" readonly="readonly" value="0"/></li>
                  <li class="skin-h-x"></li>
                   <li><input class="skin-in-putt" type="number"/></li>
                </ul>
            </el-collapse-item>
        </el-collapse>
        <!-- 响应式底部按钮 -->
        <div class="skin-butt-on">
          <div class="skin-butt-f" @click="chongzhi()" >重置</div>
          <div class="skin-butt-r">确认</div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
const cityOptions = ['隔离防晒', '卸妆乳', '卸妆&洁面', '面膜', '精华', '美容液/爽肤水', '乳液', '眼霜', '面霜', '晚霜', '修容', '眼部产品']
const cityOptions2 = ['奢宠抗老', '去黑眼圈', '淡斑焕白', '润泽保湿', '深层洁净', '修护肌底', '男士护肤', '紧致抚纹']
export default{
    data () {
        return {
            checkboxGroup1: [],
            checkboxGroup2: [],
            cities: cityOptions,
            cities2: cityOptions2,
            activeNames: ['1', '2', '3'],
            checkList: [],
            input: '',
            options: [{
                value: '选项1',
                label: '按上市排序时间'
            }, {
                value: '选项2',
                label: '按销量排序'
            }, {
                value: '选项3',
                label: '按照价格从高到低'
            }, {
                value: '选项4',
                label: '按照价格从低到高'
            }, {
                value: '选项5',
                label: '人气推荐'
            }],
            value: ''
        }
    },
    computed: {
        list () {
            return this.$store.state.goods.goodlist
        }
    },
    mounted () {
        this.$store.dispatch('getgoodslist')
    },
    methods: {
        handleChange (val) {
        },
        Telescopic () {
            console.log(123)
            let teleslid = document.querySelector('.skin-Navigation-list')
            if (teleslid.classList.contains('on')) {
                teleslid.classList.remove('on')
                teleslid.style.right = -100 + '%'
            } else {
                teleslid.classList.add('on')
            }
        },
        translate () {
            let teleslid = document.querySelector('.skin-Navigation-list')
            if (teleslid.classList.contains('on')) {
                teleslid.classList.remove('on')
            } else {
                teleslid.classList.add('on')
                // teleslid.style.display = 'block'
                teleslid.style.right = 0
            }
        },
        chongzhi () {
            let elco = document.querySelectorAll('.el-checkbox-button')
            for (let i = 0; i <= elco.length; i++) {
                if (elco[i].classList.contains('is-checked')) {
                    elco[i].classList.remove('is-checked')
                }
            }
        }
    }
}
</script>

<style lang="less" >
@import '../../../css/public.less';
@import '../css/index.less';
@import '../css/fenlei.less';
</style>
