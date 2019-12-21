<template>
    <div class="skin-login clearfix">
        <div class="skin-login-content">
            <div class="skin-login-tip">
                官网会员权益，购正装获积分，畅享明星兑礼
            </div>
            <div class="skin-login-data">
                <ul class="skin-login-register clearfix">
                    <li class="login on">登录</li>
                    <li class="register">注册</li>
                </ul>
                <div class="skin-register-from">
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="" prop="remail">
                            <el-input type="text" v-model="ruleForm.remail" autocomplete="off" :placeholder="email"
                                class="eamil"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="rpwd">
                            <el-input type="password" v-model="ruleForm.rpwd" autocomplete="off" :placeholder="pwd"
                                class="pwd"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="repwd">
                            <el-input type="password" v-model="ruleForm.repwd" autocomplete="off" :placeholder="repwd"
                                class="repwd"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="imgcode" class="imgpic">
                            <el-input v-model="ruleForm.imgcode" :placeholder="imgcode" class="imgcode"></el-input>
                            <Verifi></Verifi>
                        </el-form-item>
                        <el-form-item label="" prop="code" class="code">
                            <el-input type="text" v-model="ruleForm.code" :placeholder="code"></el-input>
                            <a class="button">发送</a>
                        </el-form-item>
                        <el-form-item class="Agreement">
                            <div class="clearfix skin-Agreement">
                                <label class="fl login-label">
                                    <input type="checkbox" class="remember">
                                    <span>我同意依照本<a>使用条款</a>和<a>隐私政策</a>对我的个人信息进行收集和使用；我已阅读并确认被给予充分机会理解该<a>使用条款</a>和<a>隐私政策</a>的内容</span>
                                </label>
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')" class="skin-register-btn" :loading ="loding">注册</el-button>
                        </el-form-item>
                        <span class="skin-span">*请妥善保管账户密码信息，勿随意泄露,手机号为识别及验证账户身份的唯一依据</span>
                    </el-form>
                </div>
                <!-- 登录 -->
                <div class="skin-login-from clearfix">
                    <el-form :model="loginFrom" status-icon :rules="rules" ref="loginFrom" label-width="100px" class="demo-loginFrom">
                        <el-form-item label="" prop="lemail">
                            <el-input type="text" v-model="loginFrom.lemail" autocomplete="off" :placeholder="email"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="lpwd">
                            <el-input type="password" v-model="loginFrom.lpwd" autocomplete="off" :placeholder="pwd"></el-input>
                        </el-form-item>
                        <div class="clearfix">
                            <label class="fl login-label">
                                <input type="checkbox" class="remember">
                                是否记住密码?
                            </label>
                            <router-link class="fr" to="/forget">
                                忘记密码?
                            </router-link>
                        </div>
                        <el-form-item>
                            <el-button type="primary" @click="loginfrom('loginFrom')" class="skin-login-btn" :loading ="loding">登录</el-button>
                        </el-form-item>
                        <span class="skin-login-span">使用第三方账号登录
                            <span class="iconfont icon-icon"></span>
                            <span class="iconfont icon-weixin"></span>
                            <span class="iconfont icon-zhifubao"></span>
                            <span class="iconfont icon-tubiao214"></span>
                        </span>
                        <div class="skin-text">官网尊享权益
                            <p>欢迎来到兰蔻官网，您将尊享专属权益</p>
                            <ul class="skin-text-list">
                                <li class="skin-text-item"> 官网独家礼赠</li>
                                <li class="skin-text-item"> 会员积分兑礼</li>
                                <li class="skin-text-item">{{a}}生日专宠礼</li>
                            </ul>
                        </div>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Verifi from './code'
import axios from 'axios'
import {
    regEmail,
    regPwd
} from './js/reg'
// eslint-disable-next-line no-unused-vars
export default {
    props: {
        change: Function,
        a: Number
    },
    components: {
        Verifi
    },
    data () {
        var Pwd = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入密码'))
            } else if (!regPwd.test(value)) {
                callback(new Error('密码格式不正确'))
            } else {
                callback()
            }
        }
        var repwd = (rule, value, callback) => {
            if (this.ruleForm.rpwd !== this.ruleForm.repwd) {
                callback(new Error('密码不一致'))
            } else if (!value) {
                callback(new Error('请确认密码'))
            } else {
                callback()
            }
        }
        var Email = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入邮箱'))
            } else if (!regEmail.test(value)) {
                callback(new Error('邮箱格式不正确'))
            } else {
                callback()
            }
        }
        var regCode = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('验证码不能为空'))
            } else {
                callback()
            }
        }
        return {
            loding: false,
            email: '请输入邮箱',
            pwd: '请输入密码',
            repwd: '请确认密码',
            code: '短信验证码',
            imgcode: '请输入验证码',
            ruleForm: {
                email: '',
                pwd: '',
                repwd: '',
                code: '',
                imgcode: ''
            },
            loginFrom: {
                email: '',
                pwd: ''
            },
            rules: {
                remail: [{
                    validator: Email,
                    required: true,
                    trigger: 'blur'
                }],
                rpwd: [{
                    validator: Pwd,
                    required: true,
                    trigger: 'blur'
                }],
                lemail: [{
                    validator: Email,
                    required: true,
                    trigger: 'blur'
                }],
                lpwd: [{
                    validator: Pwd,
                    required: true,
                    trigger: 'blur'
                }],
                repwd: [{
                    validator: repwd,
                    required: true,
                    trigger: 'blur'
                }],
                code: [{
                    validator: regCode,
                    required: true,
                    trigger: 'blur'
                }],
                imgcode: [{
                    validator: regCode,
                    required: true,
                    trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        showBox (data) {
            this.change(false)
        },
        // 提交注册信息
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // 注册
                    this.loding = !this.loding
                    let data = {
                        email: this.ruleForm.remail,
                        pwd: this.$md5(this.ruleForm.rpwd),
                        code: this.ruleForm.code,
                        imgcode: this.ruleForm.imgcode
                    }
                    axios({
                        url: 'http://192.168.97.254:3000/register',
                        method: 'post',
                        params: {
                            email: data.email,
                            pwd: data.pwd,
                            code: data.code
                        }
                    }).then((res) => {
                        if (res.status === 200) {
                            this.loding = !this.loding
                            this.$message({
                                message: '注册成功',
                                center: true,
                                type: 'success',
                                duration: 2000,
                                // 关闭提示信息的回调
                                onClose: () => {
                                    this.change()
                                }
                            })
                            this.loding = !this.loding
                        } else {
                            this.$message({
                                message: '注册失败',
                                center: true,
                                type: 'error',
                                duration: 2000,
                                // 关闭提示信息的回调
                                onClose: () => {
                                    this.change()
                                }
                            })
                            this.loding = !this.loding
                        }
                    })
                } else {
                    this.$message({
                        message: '网络出错',
                        center: true,
                        type: 'error',
                        duration: 2000,
                        // 关闭提示信息的回调
                        onClose: () => {
                            this.change()
                        }
                    })
                    this.loding = !this.loding
                    return false
                }
            })
        },
        // 用户登录
        loginfrom (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.loding = !this.loding
                    // 登录请求
                    axios({
                        url: 'http://192.168.97.254:3000/login',
                        method: 'post',
                        params: {
                            email: this.loginFrom.lemail,
                            // pwd: this.$md5(this.loginFrom.lpwd)
                            pwd: this.loginFrom.lpwd
                        }
                    }).then((res) => {
                        if (res.data.status === 200) {
                            this.loding = !this.loding
                            window.localStorage.setItem('info', JSON.stringify(res.data.data.info))
                            window.localStorage.setItem('token', JSON.stringify(res.data.data.token))
                            this.$store.commit('changeInfo', res.data.data)
                            this.$message({
                                message: '欢迎' + res.data.data.info.email,
                                center: true,
                                type: 'success',
                                duration: 2000,
                                // 关闭提示信息的回调
                                onClose: () => {
                                    this.change()
                                    window.location.href = '/user'
                                }
                            })
                        } else {
                            this.$message({
                                message: '登录出错',
                                center: true,
                                type: 'error',
                                duration: 2000,
                                // 关闭提示信息的回调
                                onClose: () => {
                                    this.change()
                                }
                            })
                            this.loding = !this.loding
                        }
                    })
                }
            })
        },
        // 获取验证码
        getCode () {
            let _this = this
            let btn = document.querySelector('.el-dialog__body .el-form-item__content a.button')
            // let smallBtn = document.querySelector('#GuanWang .el-from-item_content a.button')
            btn.onclick = function () {
                // 获取验证码
                let email = _this.ruleForm.remail
                axios({
                    url: 'http://192.168.97.254:3000/getCode',
                    method: 'get',
                    params: {
                        email
                    }
                }).then((res) => {
                    console.log(res)
                    if (res.data.status === 200) {
                        _this.$message({
                            message: '验证码发送成功',
                            center: true,
                            type: 'success',
                            duration: 2000,
                            // 关闭提示信息的回调
                            onClose: () => {
                                this.change()
                            }
                        })
                    }
                }).catch((err) => {
                    console.log(err)
                    _this.$message({
                        message: '验证码发送失败',
                        center: true,
                        type: 'error',
                        duration: 2000,
                        // 关闭提示信息的回调
                        onClose: () => {
                            this.change()
                        }
                    })
                })
            }
        },
        loginRegister () {
            let loginBox = document.querySelector('.skin-login-from')
            let registerBox = document.querySelector('.skin-register-from')
            let login = document.querySelector('.login')
            let register = document.querySelector('.register')
            // 登录
            login.addEventListener('mouseover', function (evet) {
                let target = evet.target
                if (target.className === 'login') {
                    loginBox.style.display = 'block'
                    registerBox.style.display = 'none'
                    login.classList.add('on')
                    register.classList.remove('on')
                }
                return false
            })
            // 注册
            register.addEventListener('mouseover', function (evet) {
                let target = evet.target
                if (target.className === 'register') {
                    loginBox.style.display = 'none'
                    registerBox.style.display = 'block'
                    register.classList.add('on')
                    login.classList.remove('on')
                }
                return false
            })
        },
        dialogloginRegister () {
            let loginBox = document.querySelector('.dialog-login-register .skin-login-from')
            let registerBox = document.querySelector('.dialog-login-register .skin-register-from')
            let login = document.querySelector('.dialog-login-register .login')
            let register = document.querySelector('.dialog-login-register .register')
            // 登录
            login.addEventListener('click', function (evet) {
                let target = evet.target
                if (target.className === 'login') {
                    loginBox.style.display = 'block'
                    registerBox.style.display = 'none'
                    login.classList.add('on')
                    register.classList.remove('on')
                }
                return false
            })
            // 注册
            register.addEventListener('click', function (evet) {
                let target = evet.target
                if (target.className === 'register') {
                    loginBox.style.display = 'none'
                    registerBox.style.display = 'block'
                    register.classList.add('on')
                    login.classList.remove('on')
                }
                return false
            })
        }
    },
    mounted () {
        this.loginRegister()
        this.dialogloginRegister()
        this.getCode()
        this.submitForm()
    }
}
</script>

<style scoped lang="less">
    @import "./css/login.less";
</style>
