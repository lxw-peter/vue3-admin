<script lang="ts" setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <AppHeader></AppHeader>
    <el-container>
      <AppAside class="pc-aside"></AppAside>
      <el-container direction="vertical">
        <el-main style="min-height: calc(100vh - 96px)">
          <router-view></router-view>
        </el-main>
        <AppFooter></AppFooter>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<style scoped>
.el-main {
  color: var(--el-text-color-primary);
  background-color: #eef0f3;
}
</style>
