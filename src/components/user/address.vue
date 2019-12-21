<template>
  <div class="skin-address">
      <div class="skin-address-header">
           <div class="Return">返回</div>
          <div class="skin-title">
              <h2>收货地址</h2>
              <p>我的地址簿</p>
          </div>
        <span class="skin-address-title">收货地址</span>
        <a href="#" class="skin-bto-hover fr" @click="dialogVisible = true">添加新地址</a>
      </div>
      <div class="skin-address-list">
            <div class="skin-address-item" style="display:none;">
              <div class="skin-address-seting">
                   <input type="checkbox" class="remember">
                    <span>默认地址</span>
              </div>
              <div class="skin-address-content">
                  <p>{{this.userInfo[0].u_name}}</p>
                  <p>{{this.userInfo[0].u_address}}</p>
                  <p>足下</p>
                  <p>邮编：400000</p>
                  <p>手机号码：{{this.userInfo[0].u_phone}}</p>
              </div>
              <div class="skin-address-edit">
                  <a href="#" @click="dialogVisible1 = true" class="skin-bto-hover bj">编辑</a>
                  <a href="#" @click="dialogVisible2 = true" class="skin-bto-hover del">删除</a>
              </div>
          </div>
          <div class="skin-address-item">
              <div class="skin-address-seting">
                   <input type="checkbox" class="remember">
                    <span>设置默认地址</span>
              </div>
              <div class="skin-address-content">
                  <p>{{this.userInfo[0].u_name}}</p>
                  <p>{{this.userInfo[0].u_address}}</p>
                  <p>足下</p>
                  <p>邮编：400000</p>
                  <p>手机号码：{{this.userInfo[0].u_phone}}</p>
              </div>
              <div class="skin-address-edit">
                  <a href="#" @click="dialogVisible1 = true" class="skin-bto-hover bj">编辑</a>
                  <a href="#" @click="dialogVisible2 = true" class="skin-bto-hover del">删除</a>
              </div>
          </div>
      </div>

      <!-- 添加收货地址 -->
      <el-dialog
        title="添加新地址"
        :visible.sync="dialogVisible"
        width="30%"
        >
        <Address></Address>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
     <el-dialog
        title="修改地址"
        :visible.sync="dialogVisible1"
        width="30%"
       >
        <edituser></edituser>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible1 = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
        </span>
    </el-dialog>
     <el-dialog
        title="是否要删除地址信息？"
        :visible.sync="dialogVisible2"
        width="30%"
        class="del">
       <div class="skin-del-btn">
       </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
              <el-button @click="dialogVisible2 = false">取 消</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
import Address from './addUseraddress'
import edituser from './edituser'
export default {
    props: {
        changeOption: Function
    },
    data () {
        return {
            dialogVisible: false,
            dialogVisible1: false,
            dialogVisible2: false,
            userInfo: ''
        }
    },
    components: {
        Address,
        edituser
    },
    methods: {
        change (order) {
            this.changeOption('order')
        },
        getUserInfo () {
            this.$store.dispatch('getUserData')
            let userInfo = this.$store.state.userData.userdatalist
            if (userInfo != '') {
                this.userInfo = userInfo
            } else {
                this.userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
            }
            return this.userInfo
        }
    },
    mounted () {
        this.getUserInfo()
        console.log(this.props)
    }
}
</script>

<style scoped lang='less'>
@import url('./css/address.less');
@import url('../../css/button.less');
</style>
