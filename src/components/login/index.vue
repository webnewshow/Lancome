<template>
    <div class="clearfix">
      <!-- <button class="skin-button"  @click="dialogVisible=!dialogVisible">登录</button> -->
      <login :change="change" :a="4545"></login>
      <div class="dialog-login-register">
         <!--弹出层  -->
      <el-dialog
        :visible.sync="dialogVisible"
        >
        <login></login>
        <span slot="footer" class="dialog-footer">
        </span>
    </el-dialog>
      </div>
    </div>
</template>

<script>
import login from './login'
// eslint-disable-next-line no-unused-vars
export default {
    props: {
        toshow: Function
    },
    components: {
        login
    },
    data () {
        return {
            dialogVisible: false,
            nu: '',
            email: '请输入邮箱',
            pwd: '请输入密码',
            repwd: '请确认密码',
            code: '短信验证码',
            imgcode: '请输入验证码',
            ruleForm: {
                email: '',
                pwd: '',
                repwd: '',
                code: ''
            },
            rules: {
                email: [
                    {required: true, message: '邮箱不能为空', trigger: 'blur'}
                ],
                pwd: [
                    {required: true, message: '密码不能为空', trigger: 'blur'}
                ],
                repwd: [
                    {required: true, message: '请确认密码', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        change () {
            this.toshow()
        }
    },
    mounted () {
        // console.log(this.toshow)
    },
    destroyed () {
        window.removeEventListener('click', this.dialogloginRegister)
    }
}
</script>

<style scoped lang="less">
@import "./css/login.less";
</style>
