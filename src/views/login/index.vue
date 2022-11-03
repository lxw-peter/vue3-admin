<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { login } from '@/api'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import router from '@/router'

const loginForm = reactive({
  userId: 'hy0000',
  password: 'hy0000',
})

const loginFormRule = reactive<FormRules>({
  userId: [{ required: true, trigger: 'change,blur', message: '请输入账号' }],
  password: [{ required: true, trigger: 'change,blur', message: '请输入密码' }],
})

const loginFormRef = ref<FormInstance | null>(null)

const loading = ref(false)

const handleSubmit = async () => {
  const isValidate = await loginFormRef.value?.validate()
  if (!isValidate) {
    ElMessage.warning('请填写账号或密码')
    return false
  }

  loading.value = true
  let res = await login(loginForm).finally(() => {
    loading.value = false
  })
  console.log(res)
  ElMessage.success('登录成功')
  router.replace({ name: 'home' })
}
</script>
<template>
  <el-container direction="vertical" class="login-index-container">
    <div class="login-index-content">
      <div class="login-container">
        <div class="login-top">
          <div class="login-header">
            <img class="login-logo-img" src="@/assets/images/logo.jpg" alt="" />
            <span class="login-title">红运旅游</span>
          </div>
          <div class="login-desc">用车管理系统</div>
        </div>
        <div class="login-main">
          <el-form ref="loginFormRef" :rules="loginFormRule" :model="loginForm" @submit.prevent="handleSubmit">
            <el-form-item prop="userId">
              <el-input v-model="loginForm.userId" :prefix-icon="User" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginForm.password"
                show-password
                :prefix-icon="Lock"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button style="width: 100%" type="primary" native-type="submit" :loading="loading">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <AppFooter style="background-color: rgb(238, 240, 243)"></AppFooter>
  </el-container>
</template>
<style lang="scss">
.login-index-container {
  height: 100vh;
  overflow: auto;
  background: #f0f2f5;
}

.login-index-content {
  flex: 1 1;
  padding: 32px 0;
  margin-top: 40px;
}

.login-container {
  padding: 32px 0 24px;
  display: flex;
  flex: 1 1;
  flex-direction: column;
  height: 100%;
  overflow: auto;
}

.login-header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  line-height: 44px;
}

.login-top {
  text-align: center;
}
.login-logo-img {
  width: 44px;
  margin-right: 16px;
}

.login-title {
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 33px;
}

.login-desc {
  margin-top: 12px;
  margin-bottom: 40px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

.login-main {
  width: 328px;
  margin: 0 auto;
}

.login-forget {
  float: right;
  font-size: 14px;
  color: var(--el-color-primary);
}

.login-forget:hover {
  color: #40a9ff;
}
@media (min-width: 768px) {
  .login-index-content {
    padding: 32px 0 24px;
  }
  .login-container {
    padding: 32px 0 24px;
  }
}
</style>
