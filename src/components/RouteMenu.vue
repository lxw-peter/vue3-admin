<template>
  <el-menu :default-active="defaultActive" class="menu-vertical" :collapse="isCollapse" unique-opened router>
    <el-menu-item index="/" :route="{ name: 'home' }">
      <el-icon><icon-user /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="/user/usercenter" :route="{ name: 'usercenter' }">
      <el-icon><icon-user /></el-icon>
      <template #title>个人中心</template>
    </el-menu-item>
    <el-menu-item index="application" :route="{ name: 'application' }">
      <el-icon><list /></el-icon>
      <template #title>用车申请</template>
    </el-menu-item>
    <el-sub-menu index="manage">
      <template #title>
        <el-icon><IconMenu /></el-icon>
        <span>管理</span>
      </template>
      <el-menu-item index="/manage/dispatchList" :route="{ name: 'dispatchList' }">
        <template #title>派车管理</template>
      </el-menu-item>
      <el-menu-item index="/manage/operation" :route="{ name: 'operation' }">
        <template #title>运行管理</template>
      </el-menu-item>
      <el-menu-item index="/manage/invoice" :route="{ name: 'invoice' }">
        <template #title>发票管理</template>
      </el-menu-item>
      <el-menu-item index="/manage/customer" :route="{ name: 'customer' }">
        <template #title>客户管理</template>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="setting">
      <template #title>
        <el-icon><Setting /></el-icon>
        <span>设置</span>
      </template>
      <el-menu-item index="/setting/department" :route="{ name: 'department' }">
        <template #title>部门设置</template>
      </el-menu-item>
      <el-menu-item index="/setting/roles" :route="{ name: 'roles' }">
        <template #title>用户设置</template>
      </el-menu-item>
      <el-menu-item index="/setting/car" :route="{ name: 'car' }">
        <template #title>汽车设置</template>
      </el-menu-item>
      <el-menu-item index="/setting/rights" :route="{ name: 'rights' }">
        <template #title>权限设置</template>
      </el-menu-item>
      <el-menu-item index="/setting/process" :route="{ name: 'process' }">
        <template #title>流程设置</template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { List, User as IconUser, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const defaultActive = computed(() => route.name)

defineProps({
  isCollapse: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}

.menu-vertical {
  flex: 1;
  width: 100%;

  &:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>
