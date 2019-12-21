<template>
  <div class="editpwd">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="当前密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" :placeholder="pwd"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" :placeholder="newpwd"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" :placeholder="repwd"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    data () {
        return {
            pwd: '请当前输入密码',
            newpwd: '请输入新密码',
            repwd: '再次确认密码',
            ruleForm: {
                pass: '',
                checkPass: '',
                age: ''
            },
            rules: {
                pass: [{ trigger: 'blur' }],
                checkPass: [{ trigger: 'blur' }],
                age: [{ trigger: 'blur' }]
            }
        }
    }
}
</script>

<style scoped lang='less'>
/* .v-modal{
    z-index: 0 !important;
} */
</style>
