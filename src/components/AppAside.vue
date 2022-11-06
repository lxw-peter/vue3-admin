<template>
  <el-aside width="auto" class="pc-aside">
    <route-menu :is-collapse="isCollapse"></route-menu>
    <el-menu :collapse="isCollapse">
      <el-menu-item style="border-top: 1px solid #f0f0f0" @click="isCollapse = !isCollapse">
        <el-icon class="collapse-icon" :class="{ fold: isCollapse }">
          <Fold />
        </el-icon>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import RouteMenu from './RouteMenu.vue'
import { Fold } from '@element-plus/icons-vue'

const isCollapse = ref(false)
</script>

<style scoped>
.el-aside {
  display: flex;
  flex-direction: column;
}

.el-menu {
  border-right: none;
}

.collapse-icon {
  font-size: 20px;
  font-weight: 300;
  color: #333;
}

.collapse-icon.fold {
  transform: rotate(180deg);
}
</style>
