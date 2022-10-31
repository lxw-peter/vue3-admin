<template>
  <el-card>
    <div style="margin: 8px auto auto; max-width: 600px; text-align: left">
      <h3>基本设置</h3>
      <el-form :model="baseSetForm" label-width="120px" label-position="top">
        <el-form-item label="邮箱">
          <el-input type="text" v-model="baseSetForm.email" />
        </el-form-item>
        <el-form-item label="昵称">
          <el-input type="text" v-model="baseSetForm.neck" />
        </el-form-item>
        <el-form-item label="个人简介">
          <el-input type="textarea" v-model="baseSetForm.description" />
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input type="text" v-model="baseSetForm.phoneNumber" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="baseSetSubmit">提交</el-button>
        </el-form-item>
      </el-form>
      <h3>密码设置</h3>
      <el-form :model="passwordSetForm" label-width="120px" label-position="top">
        <el-form-item label="旧密码">
          <el-input type="text" password v-model="passwordSetForm.oldPassword" />
        </el-form-item>
        <el-form-item label="新密码">
          <el-input type="text" password v-model="passwordSetForm.newPassword" />
        </el-form-item>
        <el-form-item label="二次确认">
          <el-input type="text" password v-model="passwordSetForm.new2Password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="passwordSetSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
const baseSetForm = reactive({
  email: '',
  neck: '',
  description: '',
  phoneNumber: '',
})
const passwordSetForm = reactive({
  oldPassword: '',
  newPassword: '',
  new2Password: '',
})
function baseSetSubmit() {}
function passwordSetSubmit() {}
</script>
<style></style>
