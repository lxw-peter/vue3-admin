<template>
  <el-card>
    <div style="margin: 8px auto auto; max-width: 600px; text-align: left">
      <h3>基本设置</h3>
      <el-form :model="baseSetForm" label-width="120px" label-position="top">
        <el-form-item label="邮箱">
          <el-input v-model="baseSetForm.email" type="text" />
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="baseSetForm.neck" type="text" />
        </el-form-item>
        <el-form-item label="个人简介">
          <el-input v-model="baseSetForm.description" type="textarea" />
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="baseSetForm.phoneNumber" type="text" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="baseSetSubmit">提交</el-button>
        </el-form-item>
      </el-form>
      <h3>密码设置</h3>
      <el-form :model="passwordSetForm" label-width="120px" label-position="top">
        <el-form-item label="旧密码">
          <el-input v-model="passwordSetForm.oldPassword" type="text" password />
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="passwordSetForm.newPassword" type="text" password />
        </el-form-item>
        <el-form-item label="二次确认">
          <el-input v-model="passwordSetForm.new2Password" type="text" password />
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
