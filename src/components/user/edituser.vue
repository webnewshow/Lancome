<template>
    <div class="skin-add-address">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="姓名*" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="你的手机*" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
              <el-form-item label="" prop="name" class="date">
                  <div class="date-title">
                      <span>省份*</span>
                      <span>城市*</span>
                      <span>区*</span>
                  </div>
                 <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled">
                    </el-option>
                </el-select>
                 <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled">
                    </el-option>
                </el-select>
                 <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="详细地址*" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
              <el-form-item label="固定电话*" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="邮编*" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <div class="skin-df">
                <label class="fl login-label">
                <input type="checkbox" class="remember">
                 将此地址设置为默认地址
              </label>
            </div>
        </el-form>
        </div>
</template>

<script>
export default {
    data () {
        return {
            ruleForm: {
                name: ''
            }
        }
    }
}
</script>

<style scoped lang='less'>
@import url('./css/address.less');
@import url('../../css/button.less');
</style>
