<template>
  <div class="clearfix skin-content-lists">
    <!-- 左边 -->
    <div class="skin-cen-fl">
      <!-- 左边第一模块 -->
      <div class="skin-text-l">
        <div class="skin-dao-hang">
          <ul class="skin-headd">
            <li><a><router-link to="/">首页</router-link></a></li>
             <li><a><router-link to="/Cosmetics">彩妆</router-link></a></li>
              <li><a>底妆</a></li>
          </ul>
             </div>
           <!-- 第二模块 三大类 -->
          <div class="skin-text-l">
        <div class="skin-f-f">
            <p class="skin-f-fu">底妆</p>
        </div>
           <!-- 第二模块 三大类 -->
         <div class="skin-f-th">
            <p class="skin-f-fh">妆前乳</p>
        </div>
        <div class="skin-f-th">
            <p class="skin-f-fh">气垫霜</p>
        </div>
        <div class="skin-f-th">
            <p class="skin-f-fh">粉底</p>
        </div>
        <div class="skin-f-th">
            <p class="skin-f-fh">蜜粉&散粉</p>
        </div>
        <div class="skin-f-th">
            <p class="skin-f-fh">修容遮瑕</p>
        </div>
        <div class="skin-f-th">
            <p class="skin-f-fh">腮红</p>
        </div>
        <div class="skin-element skin-el-deep">
          </div>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item class="skin-s-x" title="妆效" name="1">
          <!-- <p>卸妆乳</p> -->
           <el-checkbox-group class="skin-h-h" v-model="checkList">
              <div v-for="(item,index) in cityOptions" :key="item">
                <el-checkbox @change="ddd(index)" :label="item"></el-checkbox>
              </div>
          </el-checkbox-group>
        </el-collapse-item>
      </el-collapse>
  <!--  护肤需求 -->
  <el-collapse accordion>
  <el-collapse-item title="功效" name="2">
    <div v-for="(item, index) in cities2" :key="item" >
      <el-checkbox @change="ddd(index + cityOptions.length)" :label="item"></el-checkbox>
    </div>
  </el-collapse-item>
</el-collapse>
</div>
<!-- 价格 -->
<div class="skin-chuan-tou">
<el-collapse accordion>
  <el-collapse-item>
    <template slot="title" class="skin-jiage"> 价格 </template>
    <!--  起底价格-->
       <div class="skin-j-prop">
           <!-- 过渡符号 -->
       <div class="skin-g-d"><input class="skin-input-o" type="text"  min="0" value="0" disabled =“disabled”></div>
          <!-- 过渡符号 -->
       <div class="skin-g-d">———</div>
       <!-- 输入价格 -->
       <div class="skin-s-r"><input onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'0')}else{this.value=this.value.replace(/\D/g,'')}"  @keydown.enter="inputFun" class="skin-input-oy" type="number"></div>
       </div>
  </el-collapse-item>
</el-collapse>
</div>
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
              <span>{{this.countNum}}</span>
              件商品
            </p>
        </div>

        <!-- 右边排序框 -->
        <div class="skin-first-think">
            <!-- 排序插件 -->
            <template>
              <el-select  id='changepai' v-model="value">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value" @click="aa()">
                </el-option>
              </el-select>
            </template>
        </div>
      </div>

      <!-- 列表内容部分 -->
      <div class="skin-contnent-ri">
        <ul  class="skin-cont-rilists clearfix">
            <li v-for="(item) in list"  :key="item.id"  class="skin-cont-rilist">
              <!-- 头部图片内容 -->
               <div class="skin-chudo" >
                    <img :src="api + item.g_img.split(',')[0]">
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
          <li class="skin-fr">结果<span>(<span></span>)</span></li>
        </ul>
      </div>
      <!-- 条件筛选 -->
      <div class="skin-shai-xuan">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="产品筛选" name="1">
            <div class="skin-el-skin">
              <el-checkbox-group v-model="checkboxGroup1">
                <el-checkbox-button v-for="city in cityOptions" :label="city" :key="city">{{city}}</el-checkbox-button>
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
    <indexDelCopy></indexDelCopy>
  </div>

</template>
<script>
import indexDelCopy from '../../Popup/indexDelCopy'
const cityOptions2 = ['水润']
export default{
    data () {
        return {
            api: 'http://192.168.97.254:3000/',
            inputValue: [],
            isClicked: [],
            checkboxGroup1: [],
            checkboxGroup2: [],
            allArr: [],
            datas: '',
            cityOptions: ['全部套装', '妆前乳', '气垫霜', '粉底', '腮红', '唇膏', '唇釉', '遮瑕', '散粉', '蜜粉'],
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
            value: '按上市排序时间'
        }
    },
    components: {
        indexDelCopy
    },
    computed: {
        list () {
            return this.$store.state.goods.goodlist
        },
        countNum () {
            return this.$store.state.goods.goodlist.length
        }
    },
    mounted () {
        this.$store.dispatch('getgoodslist')
        this.aa()
        this.allArr = this.cityOptions.concat(this.cities2)
        this.allArr.forEach((item, index) => {
            this.isClicked.push(false)
        })
        this.gettype()
    },
    methods: {
        // 根据点击类型进行数据渲染
        gettype () {
            let _this = this
            let getdata = document.querySelectorAll('.skin-f-fh')
            for (var i = 0; i < getdata.length; i++) {
                getdata[i].onclick = function (e) {
                    let target = e.target
                    let value = target.innerText
                    _this.$store.dispatch('setType', value)
                }
            }
        },
        // 输入价格数据渲染
        inputFun (e) {
            // e.target 指向了dom元素
            let data = this.inputValue = e.target.value
            // console.log(data)
            this.$store.dispatch('setPrice', data)
        },
        // 选中排序方式进行列表渲染
        aa () {
            let _this = this
            let item = document.querySelectorAll('.el-select-dropdown__item span')
            for (var i = 0; i < item.length; i++) {
                item[i].onclick = e => {
                    let target = e.target
                    if (target.nodeName === 'SPAN') {
                        this.value = target.innerText
                        if (this.value === '按上市排序时间') {
                            _this.$store.dispatch('getgoodslist')
                        } if (this.value === '按销量排序') {
                            _this.$store.dispatch('getSales')
                        } if (this.value === '按照价格从高到低') {
                            _this.$store.dispatch('getHigprice')
                        } if (this.value === '按照价格从低到高') {
                            _this.$store.dispatch('getLowprice')
                        } if (this.value === '人气推荐') {
                            _this.$store.dispatch('getgoodslist')
                        }
                    }
                }
            }
        },
        // 产品筛选进行产品渲染
        OpenWinPop (id) {
            this.$store.commit('OpenWinPop', id)
            this.$store.dispatch('getGoodsMessages')
        },
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
        },
        ddd (index) {
            this.isClicked.splice(index, 1, !this.isClicked[index])
            // console.log(this.isClicked)
            let screen = []
            screen = this.allArr.filter((item, index) => {
                return this.isClicked[index]
            })
            // console.log(screen)
            this.$store.dispatch('setGoods', screen)
        }
    }
}
</script>
<style lang='less'  >
@import '../../../css/public.less';
@import '../css/index.less';
@import '../css/fenlei.less';
</style>
