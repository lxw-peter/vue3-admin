<template>
  <el-header>
    <div class="logo">
      <img class="logo-img" src="../assets/images/logo.jpg" alt="" />
      <span class="logo-title">红运旅游</span>
      <el-icon class="header-collapse-icon" :class="{ fold: drawer }" @click="showCollapse">
        <Fold />
      </el-icon>
    </div>
    <div class="user-info">
      <el-dropdown v-if="userInfo">
        <span class="el-dropdown-link">
          <span>{{ userInfo.name }}</span>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="User">
              <router-link to="/user/userset">个人设置</router-link>
            </el-dropdown-item>
            <el-dropdown-item :icon="SwitchButton">
              <span @click="logout">注销</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span v-else @click="login">登录</span>
    </div>
  </el-header>
  <el-drawer custom-class="router-drawer" size="50%" v-model="drawer" direction="ltr" :with-header="false">
    <routeMenu></routeMenu>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { User, ArrowDown, SwitchButton, Fold } from '@element-plus/icons-vue'
import { useLoginInfo } from '@/stores'
import { removeItem } from '@/utils/storages'
import { TOKEN, USER } from '@/utils/constans'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'

const { userInfo } = useLoginInfo()
const router = useRouter()
const route = useRoute()
let drawer = ref(false)

function showCollapse() {
  drawer.value = !drawer.value
}
function login() {
  // router.replace({
  //   name: 'Login',
  // })
}
function logout() {
  ElMessageBox.confirm('确认注销登录吗', '提示')
    .then(() => {
      removeItem(TOKEN)
      removeItem(USER)
      ElMessage.success('注销成功！')
      router.replace({
        name: 'login',
        query: { redirect: route.fullPath },
      })
    })
    .catch(() => {
      ElMessage.info('取消注销')
    })
}
</script>

<style>
.el-header {
  color: #fff;
  background-color: #051424;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.logo-img {
  width: 24px;
}
.logo-title {
  font-size: 20px;
  margin-left: 15px;
}
.header-collapse-icon {
  display: none;
  font-size: 25px;
  margin-left: 15px;
}
.header-collapse-icon.fold {
  transform: rotate(-180deg);
}
.el-drawer__body {
  padding: 0;
}
.el-dropdown-link {
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  .pc-aside,
  .logo-title {
    display: none !important;
  }
  .header-collapse-icon {
    display: block;
  }
}
</style>
