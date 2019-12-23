<template>
    <div class="skin-personal">
        <div class="Return">返回</div>
        <div class="skin-title">
            <h2>个人资料</h2>
            <p>我的信息</p>
        </div>
        <div class="skin-personal-content">
            <div class="skin-personal-info">
                <div class="skin-info-box">
                    <div class="skin-info-left">
                        <ul
                        class="skin-personal-list"
                        >
                            <li class="skin-personal-item">
                                <h4 class="user">用户名</h4>
                                <span class="name"></span>
                            </li>
                              <li class="skin-personal-item">
                                <h4 class="user">邮箱地址: {{this.userName}}</h4>
                                <span class="name"></span>
                            </li>
                              <li class="skin-personal-item">
                                <h4 class="user">手机号码: </h4>
                                <span class="name"></span>
                            </li>
                              <li class="skin-personal-item">
                                <h4 class="user">出生日期:</h4>
                                <span class="name"></span>
                            </li>
                        </ul>
                    </div>
                    <div class="skin-info-right">
                        <div><span class="skin-bto-hover info">修改信息</span></div>
                        <span class="skin-bto-hover pwd"  @click="dialogVisible = true">修改密码</span>
                    </div>
                </div>
            </div>
            <div class="skin-edit-personal">
                <div class="skin-object">
                    <span class="appellation">称谓</span>
                    <div class="skin-checkbox-select">
                        <div class="man">
                            <input type="checkbox" class="remember">
                            <span>男</span>
                        </div>
                        <div class="woman">
                            <input type="checkbox" class="remember">
                            <span>女</span>
                        </div>
                    </div>
                    <span class="fr">*必填</span>
                </div>
                <div class="skin-object-row clearfix">
                    <div class="skin-object-row-item">
                        <span>姓名*</span>
                        <div class="skin-item-name item-style name">
                            <input type="text" class="skin-input" style="width:96%" :placeholder="name">
                        </div>
                    </div>
                    <div class="skin-object-row-item select clearfix">
                        <span>生日*</span>
                          <div class="skin-item-name item-style clearfix">
                              <div class="skin-input">
                                 <el-select v-model="value" placeholder="年">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                              </div>
                               <div class="skin-input">
                                 <el-select v-model="value" placeholder="月">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                              </div>
                                <div class="skin-input">
                                 <el-select v-model="value" placeholder="日">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                              </div>
                        </div>
                    </div>
                </div>
                 <div class="skin-object-row clearfix">
                    <div class="skin-object-row-item">
                        <span>您的手机号*</span>
                        <div class="skin-item-name item-style tel">
                            <input type="text" class="skin-input" :placeholder="tel" style="width:96%" οnfοcus="showInfo()">
                        </div>
                    </div>
                     <div class="skin-object-row-item">
                        <span>你的邮箱*</span>
                        <div class="skin-item-name item-style email">
                            <input type="text" class="skin-input" style="width:98%" :placeholder="email">
                        </div>
                    </div>
                </div>
                <div class="showSelect">
                     <div class="skin-object-row clearfix">
                    <div class="skin-object-row-item">
                        <span>验证码*</span>
                        <div class="skin-item-name item-style imgcode">
                            <input type="text" class="skin-input" style="width:96%" :placeholder="imgcode">
                            <Verifi></Verifi>
                        </div>
                    </div>
                </div>
                 <div class="skin-object-row clearfix">
                    <div class="skin-object-row-item">
                        <span>邮箱验证码*</span>
                        <div class="skin-item-name item-style email-code">
                            <input type="text" class="skin-input" style="width:96%" :placeholder="eamilcode">
                            <a href="#" class="emailcode">获取验证码</a>
                        </div>
                    </div>
                </div>
                 <div class="skin-object-row clearfix">
                    <div class="skin-object-row-item">
                        <!-- <span>邮箱验证码*</span> -->
                        <div class="skin-item-name item-style">
                            <input type="button" class="skin-input submit" style="width:96%" value="确认修改">
                            <a href="#" class="cancel">取消</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="skin-edit-password">修改密码</div>
        </div>
         <el-dialog
        title="修改密码"
        :visible.sync="dialogVisible"
        width="30%"
       >
        <eidtpwd></eidtpwd>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">提 交</el-button>
            <el-button type="primary" @click="dialogVisible = false">取 消</el-button>
        </span>
    </el-dialog>
    </div>
</template>

<script>
import Verifi from '../login/code'
import eidtpwd from './editpwd'
export default {
    data () {
        return {
            value: '',
            options: '',
            userName: '',
            dialogVisible: false,
            name: '请输入姓名',
            imgcode: '请输入验证码',
            eamilcode: '请输入邮箱验证码',
            tel: '请输入手机号',
            email: '请输入邮箱',
            userInfo: ''
        }
    },
    components: {
        Verifi,
        eidtpwd
    },
    methods: {
        editInfo () {
            let personalInfo = document.querySelector('.skin-personal-info')
            let editInfoBox = document.querySelector('.skin-edit-personal')
            let infoBtn = document.querySelector('.skin-info-right .info')
            infoBtn.addEventListener('click', function (evet) {
                let target = evet.target
                // console.log(evet)
                if (target.classList[1] === 'info') {
                    personalInfo.style.display = 'none'
                    editInfoBox.style.display = 'block'
                }
            })
        },
        selectSex () {
            let man = document.querySelector('.skin-checkbox-select .man')
            let woman = document.querySelector('.skin-checkbox-select .woman')

            man.addEventListener('click', function (evet) {
                let target = evet.target
                if (target.className === 'remember') {
                // if (target.className === 'man' || target.nodeName === 'SPAN' || target.className === 'remember') {
                    man.classList.add('on')
                    woman.classList.remove('on')
                }
                return false
            })
            woman.addEventListener('click', function (evet) {
                let target = evet.target
                if (target.className === 'remember') {
                    woman.classList.add('on')
                    man.classList.remove('on')
                }
                return false
            })
        },
        showInfo () {
            let showInput = document.querySelector('.tel>input')
            let showBox = document.querySelector('.showSelect')
            showInput.addEventListener('click', function (e) {
                let target = e.target
                if (target.tagName === 'INPUT') {
                    showBox.style.display = 'block'
                }
            })
        },
        getInfo () {
            let token = window.localStorage.getItem('token')
            if (token) {
                let info = window.localStorage.getItem('info')
                this.userName = JSON.parse(info).email
            }
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
        this.editInfo()
        this.selectSex()
        this.showInfo()
        this.getInfo()
        this.getUserInfo()
        console.log(this.userInfo)
    }
}
</script>

<style scoped lang='less'>
@import './css/personal.less';
@import url('../../css/button.less');
</style>
